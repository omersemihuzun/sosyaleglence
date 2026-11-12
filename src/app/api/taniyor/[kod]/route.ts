import { allow, allowWrite, getRedis, json, readJson } from "@/lib/server/redis";
import {
  gecerliTahmin,
  puanla,
  TANIYOR_KOD,
  temizAd,
  type TaniyorDavet,
  type TaniyorOturum,
  type TaniyorSonuc,
} from "@/lib/taniyor";

/** Davet: kurulan oyunun adı ve soruları. Cevaplar ASLA dönmez. */
export async function GET(request: Request, ctx: RouteContext<"/api/taniyor/[kod]">) {
  const { kod } = await ctx.params;
  if (!TANIYOR_KOD.test(kod)) return json({ error: "Bulunamadı" }, { status: 404 });
  const redis = getRedis();
  if (!redis) return json({ error: "Bu oyun şu an kullanılamıyor" }, { status: 503 });
  if (!(await allow(request, "oku", 30))) return json({ error: "Çok fazla istek" }, { status: 429 });
  const o = await redis.get<TaniyorOturum>(`tn:${kod}`);
  if (!o) return json({ error: "Bu bağlantının süresi dolmuş ya da hiç oluşturulmamış" }, { status: 404 });
  const davet: TaniyorDavet = { ad: o.ad, sorular: o.sorular };
  return json(davet);
}

/** Tahminleri gönder: puanı sunucu hesaplar, ancak o zaman doğru cevaplar açılır. Sonuç kurana görünür. */
export async function POST(request: Request, ctx: RouteContext<"/api/taniyor/[kod]">) {
  const { kod } = await ctx.params;
  if (!TANIYOR_KOD.test(kod)) return json({ error: "Bulunamadı" }, { status: 404 });
  const body = await readJson<{ ad?: unknown; tahminler?: unknown }>(request, 1024);
  if (!body || !gecerliTahmin(body.tahminler)) return json({ error: "Geçersiz istek" }, { status: 400 });

  const redis = getRedis();
  if (!redis) return json({ error: "Bu oyun şu an kullanılamıyor" }, { status: 503 });
  if (!(await allowWrite(request))) return json({ error: "Çok fazla istek" }, { status: 429 });
  const key = `tn:${kod}`;
  const o = await redis.get<TaniyorOturum>(key);
  if (!o) return json({ error: "Bu bağlantının süresi dolmuş" }, { status: 404 });

  const puan = puanla(o.cevaplar, body.tahminler);
  const sonuc: TaniyorSonuc = { ad: temizAd(body.ad) || "İsimsiz", puan, toplam: o.cevaplar.length, at: Date.now() };
  const ttl = await redis.ttl(key);
  // Son 20 deneme saklanır, oturumla birlikte silinir
  await redis
    .pipeline()
    .lpush(`${key}:sonuc`, sonuc)
    .ltrim(`${key}:sonuc`, 0, 19)
    .expire(`${key}:sonuc`, ttl > 0 ? ttl : 60 * 60 * 24 * 30)
    .exec();
  return json({ puan, toplam: o.cevaplar.length, cevaplar: o.cevaplar });
}
