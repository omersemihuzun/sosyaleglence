import { ImageResponse } from "next/og";
import { getTest, tests } from "@/content/tests";
import { loadOgFonts, OgResultCard } from "@/lib/og/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Test sonucu";

export function generateStaticParams() {
  return tests.flatMap((t) => t.results.map((r) => ({ slug: t.slug, result: r.id })));
}

export default async function Image({ params }: { params: Promise<{ slug: string; result: string }> }) {
  const { slug, result: resultId } = await params;
  const test = getTest(slug)!;
  const result = test.results.find((r) => r.id === resultId)!;
  return new ImageResponse(<OgResultCard test={test} result={result} />, {
    ...size,
    fonts: await loadOgFonts(),
  });
}
