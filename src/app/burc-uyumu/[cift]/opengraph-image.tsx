import { ImageResponse } from "next/og";
import { OgCift } from "@/components/burc/burc-og";
import { parseCiftSlug, uyumlar } from "@/content/burc-uyum";
import { getBurc } from "@/content/burclar";
import { loadOgFonts } from "@/lib/og/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Burç uyumu";

export function generateStaticParams() {
  return uyumlar.map((u) => ({ cift: u.slug }));
}

export default async function Image({ params }: { params: Promise<{ cift: string }> }) {
  const { cift } = await params;
  const u = parseCiftSlug(cift)!.uyum;
  return new ImageResponse(<OgCift a={getBurc(u.a)!} b={getBurc(u.b)!} puan={u.puan} baslik={u.baslik} />, {
    ...size,
    fonts: await loadOgFonts(),
  });
}
