import { ImageResponse } from "next/og";
import { getGuide, guides, ideasForGuide } from "@/content/gifts/guides";
import { loadOgFonts } from "@/lib/og";
import { OgSectionCard } from "@/lib/og-brand";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sosyal Eğlence hediye rehberi";

export function generateStaticParams() {
  return guides.map((g) => ({ guide: g.slug }));
}

export default async function Image({ params }: { params: Promise<{ guide: string }> }) {
  const { guide: slug } = await params;
  const guide = getGuide(slug)!;
  const list = ideasForGuide(guide);
  return new ImageResponse(
    <OgSectionCard
      title={guide.title}
      subtitle={`${list.length} açıklamalı hediye fikri, her bütçeye göre ve fiyat karşılaştırmalı.`}
      emojis={[guide.emoji, ...list.slice(0, 2).map((i) => i.emoji)]}
      accent="#C2410C"
    />,
    { ...size, fonts: await loadOgFonts() },
  );
}
