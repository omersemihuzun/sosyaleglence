import "server-only";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * Upstash Redis bağlantısı (Vercel Marketplace üzerinden kurulur, ortam değişkenleri otomatik gelir).
 * Değişkenler yoksa (ör. yerel geliştirme, ilk deploy) null döner: istatistikler gizlenir, site çalışmaya devam eder.
 */
let client: Redis | null | undefined;

export function getRedis(): Redis | null {
  if (client !== undefined) return client;
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  client = url && token ? new Redis({ url, token }) : null;
  return client;
}

let limiter: Ratelimit | null | undefined;

/** İstemci IP'si. Vercel x-forwarded-for başlığını kendisi yazar; istemcinin gönderdiği değeri ezer. */
function clientIp(request: Request) {
  return request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anon";
}

/** Yazma isteklerine IP başına sınır: dakikada 40 istek. */
export async function allowWrite(request: Request): Promise<boolean> {
  if (limiter === undefined) {
    const redis = getRedis();
    limiter = redis
      ? new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(40, "60 s"), prefix: "rl:yaz", analytics: false })
      : null;
  }
  if (!limiter) return true;
  const { success } = await limiter.limit(clientIp(request));
  return success;
}

const limiters = new Map<string, Ratelimit | null>();

/**
 * Ad verilmiş, ayrı bir sınır: ör. karşılaştırma kodlarını deneyerek tarama ("oku", dakikada 30)
 * ya da önbellekte olmayan pahalı görsel üretimi ("gorsel", dakikada 30). Veritabanı yoksa serbest.
 */
export async function allow(request: Request, ad: string, adet = 30): Promise<boolean> {
  if (!limiters.has(ad)) {
    const redis = getRedis();
    limiters.set(
      ad,
      redis ? new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(adet, "60 s"), prefix: `rl:${ad}`, analytics: false }) : null,
    );
  }
  const l = limiters.get(ad);
  if (!l) return true;
  const { success } = await l.limit(clientIp(request));
  return success;
}

/** Gövdeyi en fazla `max` bayt okuyup JSON'a çevirir; aşarsa ya da bozuksa null. */
export async function readJson<T>(request: Request, max = 4096): Promise<T | null> {
  // Bildirilen boyut sınırı aşıyorsa gövdeyi hiç okuma
  const declared = Number(request.headers.get("content-length") ?? 0);
  if (declared > max) return null;
  const text = await request.text();
  if (text.length > max) return null;
  try {
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

export function json(data: unknown, init?: ResponseInit & { cache?: number }) {
  const headers = new Headers(init?.headers);
  headers.set("Content-Type", "application/json; charset=utf-8");
  headers.set(
    "Cache-Control",
    init?.cache ? `public, s-maxage=${init.cache}, stale-while-revalidate=${init.cache * 5}` : "no-store",
  );
  return new Response(JSON.stringify(data), { ...init, headers });
}

export const ID = /^[a-z0-9-]{1,64}$/;
