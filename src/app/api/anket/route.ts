import { polls } from "@/content/polls";
import { allowWrite, getRedis, ID, json, readJson } from "@/lib/server/redis";

const ids = new Set(polls.map((p) => p.id));

/** GET ?id=cay-kahve -> { a, b } oy sayıları */
export async function GET(request: Request) {
  const id = new URL(request.url).searchParams.get("id") ?? "";
  if (!ID.test(id) || !ids.has(id)) return json({ error: "Anket bulunamadı" }, { status: 404 });
  const redis = getRedis();
  if (!redis) return json({ enabled: false });
  const raw = (await redis.hgetall<Record<string, number>>(`p:${id}`)) ?? {};
  return json({ enabled: true, a: Number(raw.a ?? 0), b: Number(raw.b ?? 0) }, { cache: 30 });
}

/**
 * POST { id, choice } -> oy ver.
 * POST { id, choice, degistir: true } -> fikrini değiştir: diğer taraftan bir oy düşer, seçilen tarafa eklenir.
 */
export async function POST(request: Request) {
  const body = await readJson<{ id?: string; choice?: string; degistir?: boolean }>(request, 512);
  if (!body?.id || !ids.has(body.id) || (body.choice !== "a" && body.choice !== "b")) {
    return json({ error: "Geçersiz istek" }, { status: 400 });
  }
  const redis = getRedis();
  if (!redis) return json({ enabled: false });
  if (!(await allowWrite(request))) return json({ error: "Çok fazla istek" }, { status: 429 });
  const key = `p:${body.id}`;
  const other = body.choice === "a" ? "b" : "a";
  const p = redis.pipeline();
  if (body.degistir === true) p.hincrby(key, other, -1);
  p.hincrby(key, body.choice, 1).hgetall<Record<string, number>>(key);
  const res = await p.exec();
  const raw = (res[res.length - 1] ?? {}) as Record<string, number>;
  let a = Number(raw.a ?? 0);
  let b = Number(raw.b ?? 0);
  // Sayaç sıfırın altına inmesin (eş zamanlı değiştirmeler ya da kötüye kullanım)
  if (a < 0 || b < 0) {
    a = Math.max(0, a);
    b = Math.max(0, b);
    await redis.hset(key, { a, b });
  }
  return json({ enabled: true, a, b });
}
