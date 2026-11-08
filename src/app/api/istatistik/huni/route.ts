import { getTest } from "@/content/tests";
import { allowWrite, getRedis, ID, json, readJson } from "@/lib/server/redis";
import { testSurum } from "@/lib/test-surum";

/**
 * Test hunisi (anonim, toplam sayaçlar):
 *  - basla: testi başlatan sayısı                      h:<slug> basla
 *  - birak: yarıda bırakılan soru (1'den başlar)        h:<slug> b<soru>
 *  - bitir: çözüm süresi + her sorudaki seçilen şık     h:<slug> sure_t/sure_n, s:<slug>:<sürüm> <soru>:<şık>
 * Raporlama: npm run rapor
 */
type Govde = { slug?: string; olay?: string; soru?: number; cevaplar?: number[]; sure?: number };

export async function POST(request: Request) {
  const body = await readJson<Govde>(request, 1024);
  const test = body?.slug && ID.test(body.slug) ? getTest(body.slug) : undefined;
  if (!test || !body) return json({ error: "Geçersiz istek" }, { status: 400 });
  const n = test.questions.length;

  const redis = getRedis();
  if (!redis) return json({ enabled: false });

  const h = `h:${test.slug}`;
  if (body.olay === "basla") {
    if (!(await allowWrite(request))) return json({ error: "Çok fazla istek" }, { status: 429 });
    await redis.hincrby(h, "basla", 1);
    return json({ ok: true });
  }
  if (body.olay === "birak") {
    const soru = Number(body.soru);
    if (!Number.isInteger(soru) || soru < 1 || soru > n) return json({ error: "Geçersiz soru" }, { status: 400 });
    if (!(await allowWrite(request))) return json({ error: "Çok fazla istek" }, { status: 429 });
    await redis.hincrby(h, `b${soru}`, 1);
    return json({ ok: true });
  }
  if (body.olay === "bitir") {
    const c = body.cevaplar;
    const gecerli =
      Array.isArray(c) &&
      c.length === n &&
      c.every((oi, qi) => Number.isInteger(oi) && oi >= 0 && oi < test.questions[qi].options.length);
    if (!gecerli) return json({ error: "Geçersiz cevaplar" }, { status: 400 });
    if (!(await allowWrite(request))) return json({ error: "Çok fazla istek" }, { status: 429 });
    const sure = Math.round(Number(body.sure));
    const p = redis.pipeline();
    // Aşırı uç süreler (sekme açık unutuldu vb.) ortalamayı bozmasın
    if (Number.isFinite(sure) && sure >= 5 && sure <= 1800) p.hincrby(h, "sure_t", sure).hincrby(h, "sure_n", 1);
    const s = `s:${test.slug}:${testSurum(test)}`;
    c!.forEach((oi, qi) => p.hincrby(s, `${qi + 1}:${oi}`, 1));
    p.hincrby(s, "_n", 1);
    await p.exec();
    return json({ ok: true });
  }
  return json({ error: "Bilinmeyen olay" }, { status: 400 });
}
