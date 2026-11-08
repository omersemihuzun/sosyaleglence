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

export async function POST(request: Request) {
  const body = await readJson<{ id?: string; choice?: string }>(request, 512);
  if (!body?.id || !ids.has(body.id) || (body.choice !== "a" && body.choice !== "b")) {
    return json({ error: "Geçersiz istek" }, { status: 400 });
  }
  const redis = getRedis();
  if (!redis) return json({ enabled: false });
  if (!(await allowWrite(request))) return json({ error: "Çok fazla istek" }, { status: 429 });
  // Oyu yaz ve güncel sayıları tek gidiş-dönüşte al
  const [, raw] = await redis
    .pipeline()
    .hincrby(`p:${body.id}`, body.choice, 1)
    .hgetall<Record<string, number>>(`p:${body.id}`)
    .exec<[number, Record<string, number> | null]>();
  return json({ enabled: true, a: Number(raw?.a ?? 0), b: Number(raw?.b ?? 0) });
}
