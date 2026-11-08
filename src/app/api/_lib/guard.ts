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
