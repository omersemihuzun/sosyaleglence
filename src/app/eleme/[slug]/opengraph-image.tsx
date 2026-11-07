import { ImageResponse } from "next/og";
import { brackets, getBracket } from "@/content/brackets";
import { loadOgFonts } from "@/lib/og";
import { OgBracketCard } from "@/lib/og-bracket";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sosyal Eğlence eleme oyunu";

export function generateStaticParams() {
  return brackets.map((b) => ({ slug: b.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return new ImageResponse(<OgBracketCard bracket={getBracket(slug)!} />, { ...size, fonts: await loadOgFonts() });
}
