import { ImageResponse } from "next/og";
import { brackets, getBracket } from "@/content/brackets";
import { loadOgFonts } from "@/lib/og";
import { loadItemPhoto, OgBracketCard } from "@/lib/og-bracket";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Eleme oyunu sonucu";

export function generateStaticParams() {
  return brackets.flatMap((b) => b.items.map((i) => ({ slug: b.slug, item: i.id })));
}

export default async function Image({ params }: { params: Promise<{ slug: string; item: string }> }) {
  const { slug, item } = await params;
  const bracket = getBracket(slug)!;
  const champion = bracket.items.find((i) => i.id === item);
  return new ImageResponse(
    <OgBracketCard
      bracket={bracket}
      champion={champion}
      photo={await loadItemPhoto(champion, { width: 420, height: 420 })}
    />,
    {
      ...size,
      fonts: await loadOgFonts(),
    },
  );
}
