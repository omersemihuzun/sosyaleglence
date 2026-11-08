import { allow } from "@/lib/server/redis";

/** Görsel üreten uçlar için ortak koruma: beklenen sorgu birkaç kısa parametreden ibaret. */
export const MAX_QUERY_LENGTH = 256;

/** Sorgu çok uzunsa 414 döner, değilse null. */
export function rejectLongQuery(request: Request): Response | null {
  const { search } = new URL(request.url);
  if (search.length > MAX_QUERY_LENGTH) {
    return new Response("Sorgu çok uzun", { status: 414, headers: { "Cache-Control": "no-store" } });
  }
  return null;
}

/**
 * Görsel üretimi pahalı: sorgu uzunluğu + IP başına dakikada 30 üretim. Önbellekten (CDN) dönen
 * istekler fonksiyona ulaşmadığından sınır sadece yeni üretimleri sayar; sıradan kullanıcı takılmaz.
 */
export async function guardRender(request: Request): Promise<Response | null> {
  const tooLong = rejectLongQuery(request);
  if (tooLong) return tooLong;
  if (!(await allow(request, "gorsel", 30))) {
    return new Response("Çok fazla istek", { status: 429, headers: { "Cache-Control": "no-store", "Retry-After": "60" } });
  }
  return null;
}
