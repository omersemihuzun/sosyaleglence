import { taniyorSorulari } from "@/content/cift/taniyor";
import { allowWrite, getRedis, json, readJson } from "@/lib/server/redis";
import { gecerliKurulum, ozet, temizAd, type TaniyorOturum, yeniTaniyorKodu } from "@/lib/taniyor";

const TANIYOR_TTL = 60 * 60 * 24 * 30; // 30 gün
const bilinen = new Set(taniyorSorulari.map((s) => s.id));

/** Oyunu kur: { ad, sorular, cevaplar } -> { kod, anahtar }. Anahtar sadece kurana döner, sunucuda özeti saklanır. */
export async function POST(request: Request) {
  const body = await readJson<{ ad?: unknown; sorular?: unknown; cevaplar?: unknown }>(request, 2048);
  if (!body || !gecerliKurulum(body.sorular, body.cevaplar, bilinen)) {
    return json({ error: "Geçersiz istek" }, { status: 400 });
  }
  const redis = getRedis();
  if (!redis) return json({ error: "Bu oyun şu an kullanılamıyor" }, { status: 503 });
  if (!(await allowWrite(request))) return json({ error: "Çok fazla istek" }, { status: 429 });

  const kod = yeniTaniyorKodu();
  const anahtar = yeniTaniyorKodu() + yeniTaniyorKodu();
  const oturum: TaniyorOturum = {
    ad: temizAd(body.ad) || "Sevgilin",
    sorular: body.sorular as string[],
    cevaplar: body.cevaplar as number[],
    sahip: await ozet(anahtar),
    createdAt: Date.now(),
  };
  await redis.set(`tn:${kod}`, oturum, { ex: TANIYOR_TTL });
  return json({ kod, anahtar });
}
