import { getTest } from "@/content/tests";
import { cleanName, COMPARE_CODE, type CompareSession } from "@/lib/compare";
import { decodeScores } from "@/lib/scoring";
import { allow, allowWrite, getRedis, json, readJson } from "@/lib/server/redis";

const CODE = COMPARE_CODE;

export async function GET(_request: Request, ctx: RouteContext<"/api/cift/[code]">) {
  const { code } = await ctx.params;
  if (!CODE.test(code)) return json({ error: "Bulunamadı" }, { status: 404 });
  const redis = getRedis();
  if (!redis) return json({ error: "Karşılaştırma şu an kullanılamıyor" }, { status: 503 });
  // Kod deneyerek başkalarının sonuçlarını taramayı zorlaştır
  if (!(await allow(_request, "oku", 30))) return json({ error: "Çok fazla istek" }, { status: 429 });
  const session = await redis.get<CompareSession>(`c:${code}`);
  if (!session) return json({ error: "Bu bağlantının süresi dolmuş ya da hiç oluşturulmamış" }, { status: 404 });
  return json(session);
}

/** İkinci kişi sonucunu ekler. Oturum başına bir kez. */
export async function POST(request: Request, ctx: RouteContext<"/api/cift/[code]">) {
  const { code } = await ctx.params;
  if (!CODE.test(code)) return json({ error: "Bulunamadı" }, { status: 404 });
  const body = await readJson<{ s?: string; name?: string }>(request, 1024);

  const redis = getRedis();
  if (!redis) return json({ error: "Karşılaştırma şu an kullanılamıyor" }, { status: 503 });
  if (!(await allowWrite(request))) return json({ error: "Çok fazla istek" }, { status: 429 });

  const key = `c:${code}`;
  const session = await redis.get<CompareSession>(key);
  if (!session) return json({ error: "Bu bağlantının süresi dolmuş" }, { status: 404 });
  const test = getTest(session.slug);
  if (!test || !decodeScores(test, body?.s)) return json({ error: "Geçersiz istek" }, { status: 400 });
  if (session.b) return json({ error: "Bu karşılaştırma zaten tamamlanmış" }, { status: 409 });

  const ttl = await redis.ttl(key);
  // Aynı anda iki ikinci kişi gelirse yalnızca ilki yazabilsin (atomik kilit)
  const kilit = await redis.set(`${key}:b`, 1, { nx: true, ex: ttl > 0 ? ttl : 60 * 60 * 24 * 30 });
  if (kilit !== "OK") return json({ error: "Bu karşılaştırma zaten tamamlanmış" }, { status: 409 });

  const updated: CompareSession = { ...session, b: { s: body!.s!, name: cleanName(body!.name) } };
  await redis.set(key, updated, { ex: ttl > 0 ? ttl : 60 * 60 * 24 * 30 });
  return json(updated);
}
