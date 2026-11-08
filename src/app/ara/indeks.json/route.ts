import { buildSearchIndex } from "@/lib/search-index";

/** Arama indeksi: build sırasında statik üretilir, arama sayfası ayrı bir istekle çeker. */
export function GET() {
  return Response.json(buildSearchIndex(), {
    headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400" },
  });
}
