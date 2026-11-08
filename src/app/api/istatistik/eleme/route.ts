import { getBracket } from "@/content/brackets";
import { allowWrite, getRedis, ID, json, readJson } from "@/lib/server/redis";

/**
 * Eleme turnuvası istatistikleri.
 * - b:{slug}:sampiyon  -> seçenek başına kaç kez şampiyon oldu (+ _n toplam oyun)
 * - b:{slug}:galibiyet -> seçenek başına kazanılan eşleşme
 * - b:{slug}:mac       -> seçenek başına oynanan eşleşme
 */
export async function GET(request: Request) {
  const slug = new URL(request.url).searchParams.get("slug") ?? "";
  const bracket = ID.test(slug) ? getBracket(slug) : undefined;
  if (!bracket) return json({ error: "Oyun bulunamadı" }, { status: 404 });
  const redis = getRedis();
  if (!redis) return json({ enabled: false });

  const [champ, wins, games] = await Promise.all([
    redis.hgetall<Record<string, number>>(`b:${slug}:sampiyon`),
    redis.hgetall<Record<string, number>>(`b:${slug}:galibiyet`),
    redis.hgetall<Record<string, number>>(`b:${slug}:mac`),
  ]);
  const total = Number(champ?._n ?? 0);
  const items = bracket.items.map((i) => {
    const played = Number(games?.[i.id] ?? 0);
    const won = Number(wins?.[i.id] ?? 0);
    return {
      id: i.id,
      champion: Number(champ?.[i.id] ?? 0),
      winRate: played ? Math.round((won / played) * 100) : null,
    };
  });
  return json({ enabled: true, total, items }, { cache: 60 });
}

type Body = { slug?: string; picks?: [string, string][] };

export async function POST(request: Request) {
  const body = await readJson<Body>(request);
  const bracket = body?.slug && ID.test(body.slug) ? getBracket(body.slug) : undefined;
  const picks = body?.picks;
  if (!bracket || !Array.isArray(picks) || picks.length !== bracket.items.length - 1) {
    return json({ error: "Geçersiz istek" }, { status: 400 });
  }
  const ids = new Set(bracket.items.map((i) => i.id));
  const valid = picks.every(
    (p) => Array.isArray(p) && p.length === 2 && ids.has(p[0]) && ids.has(p[1]) && p[0] !== p[1],
  );
  if (!valid) return json({ error: "Geçersiz eşleşme" }, { status: 400 });

  const redis = getRedis();
  if (!redis) return json({ enabled: false });
  if (!(await allowWrite(request))) return json({ error: "Çok fazla istek" }, { status: 429 });

  const champion = picks[picks.length - 1][0];
  const p = redis.pipeline();
  p.hincrby(`b:${bracket.slug}:sampiyon`, champion, 1);
  p.hincrby(`b:${bracket.slug}:sampiyon`, "_n", 1);
  for (const [winner, loser] of picks) {
    p.hincrby(`b:${bracket.slug}:galibiyet`, winner, 1);
    p.hincrby(`b:${bracket.slug}:mac`, winner, 1);
    p.hincrby(`b:${bracket.slug}:mac`, loser, 1);
  }
  await p.exec();
  return json({ ok: true });
}
