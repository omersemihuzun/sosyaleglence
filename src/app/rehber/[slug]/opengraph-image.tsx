import { ImageResponse } from "next/og";
import { articles, getArticle } from "@/content/articles";
import { onColor } from "@/lib/color";
import { loadOgFonts } from "@/lib/og/og";
import { OgSectionCard } from "@/lib/og/og-brand";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sosyal Eğlence rehberi";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug)!;
  // Makale başlıkları uzun: üç satıra sığacak boyutu karakter sayısına göre seç
  const n = a.title.length;
  const titleSize = n > 50 ? 56 : n > 36 ? 68 : 88;
  return new ImageResponse(
    <OgSectionCard
      title={a.title}
      subtitle={a.excerpt}
      emojis={[a.emoji, "📖"]}
      accent={onColor(a.color).background}
      titleSize={titleSize}
    />,
    { ...size, fonts: await loadOgFonts() },
  );
}
