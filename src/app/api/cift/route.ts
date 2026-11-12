import { getTest } from "@/content/tests";
import { cleanName, newCompareCode, type CompareSession } from "@/lib/compare";
import { decodeScores } from "@/lib/scoring";
import { allowWrite, getRedis, ID, json, readJson } from "@/lib/server/redis";

const SESSION_TTL = 60 * 60 * 24 * 30; // 30 gün

/** Karşılaştırma oturumu oluşturur: ilk kişinin skorlarıyla bir kod döner. */
export async function POST(request: Request) {
  const body = await readJson<{ slug?: string; s?: string; name?: string }>(request, 1024);
  const test = body?.slug && ID.test(body.slug) ? getTest(body.slug) : undefined;
  if (!test || !decodeScores(test, body?.s)) return json({ error: "Geçersiz istek" }, { status: 400 });

  const redis = getRedis();
  if (!redis) return json({ error: "Karşılaştırma şu an kullanılamıyor" }, { status: 503 });
  if (!(await allowWrite(request))) return json({ error: "Çok fazla istek" }, { status: 429 });

  const code = newCompareCode();
  const session: CompareSession = {
    slug: test.slug,
    a: { s: body!.s!, name: cleanName(body!.name) },
    createdAt: Date.now(),
  };
  await redis.set(`c:${code}`, session, { ex: SESSION_TTL });
  return json({ code });
}
