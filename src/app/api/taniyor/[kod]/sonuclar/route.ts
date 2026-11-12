import { allow, getRedis, json, readJson } from "@/lib/server/redis";
import { ozet, TANIYOR_KOD, type TaniyorOturum, type TaniyorSonuc } from "@/lib/taniyor";

/** Kuran kişi sonuçları görür: { anahtar } gövdede (adreste değil; kayıtlara düşmesin). */
export async function POST(request: Request, ctx: RouteContext<"/api/taniyor/[kod]/sonuclar">) {
  const { kod } = await ctx.params;
  if (!TANIYOR_KOD.test(kod)) return json({ error: "Bulunamadı" }, { status: 404 });
  const body = await readJson<{ anahtar?: unknown }>(request, 256);
  if (typeof body?.anahtar !== "string" || !/^[a-f0-9]{32}$/.test(body.anahtar)) {
    return json({ error: "Yetkisiz" }, { status: 403 });
  }
  const redis = getRedis();
  if (!redis) return json({ error: "Bu oyun şu an kullanılamıyor" }, { status: 503 });
  if (!(await allow(request, "oku", 30))) return json({ error: "Çok fazla istek" }, { status: 429 });

  const o = await redis.get<TaniyorOturum>(`tn:${kod}`);
  if (!o) return json({ error: "Bu bağlantının süresi dolmuş" }, { status: 404 });
  if ((await ozet(body.anahtar)) !== o.sahip) return json({ error: "Yetkisiz" }, { status: 403 });
  const sonuclar = (await redis.lrange<TaniyorSonuc>(`tn:${kod}:sonuc`, 0, 19)) ?? [];
  return json({ ad: o.ad, sorular: o.sorular, cevaplar: o.cevaplar, sonuclar });
}
