import { getTest } from "@/content/tests";
import { allowWrite, getRedis, ID, json, readJson } from "@/lib/server/redis";

/** Test sonuç dağılımı: hangi sonucu kaç kişi aldı. */
export async function GET(request: Request) {
  const slug = new URL(request.url).searchParams.get("slug") ?? "";
  const test = ID.test(slug) ? getTest(slug) : undefined;
  if (!test) return json({ error: "Test bulunamadı" }, { status: 404 });
  const redis = getRedis();
  if (!redis) return json({ enabled: false });

  const raw = (await redis.hgetall<Record<string, number>>(`t:${slug}`)) ?? {};
  const total = Number(raw._n ?? 0);
  const results = Object.fromEntries(test.results.map((r) => [r.id, Number(raw[r.id] ?? 0)]));
  return json({ enabled: true, total, results }, { cache: 60 });
}

export async function POST(request: Request) {
  const body = await readJson<{ slug?: string; result?: string }>(request);
  const test = body?.slug && ID.test(body.slug) ? getTest(body.slug) : undefined;
  if (!test || !body?.result || !test.results.some((r) => r.id === body.result)) {
    return json({ error: "Geçersiz istek" }, { status: 400 });
  }
  const redis = getRedis();
  if (!redis) return json({ enabled: false });
  if (!(await allowWrite(request))) return json({ error: "Çok fazla istek" }, { status: 429 });

  const key = `t:${test.slug}`;
  await redis.pipeline().hincrby(key, body.result, 1).hincrby(key, "_n", 1).exec();
  return json({ ok: true });
}
