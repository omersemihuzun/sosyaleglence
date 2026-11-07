import { ImageResponse } from "next/og";
import { getTest, tests } from "@/content/tests";
import { loadOgFonts, OgTestCard } from "@/lib/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sosyal Eğlence testi";

export function generateStaticParams() {
  return tests.map((t) => ({ slug: t.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const test = getTest(slug)!;
  return new ImageResponse(<OgTestCard test={test} />, { ...size, fonts: await loadOgFonts() });
}
