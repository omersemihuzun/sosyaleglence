import { ImageResponse } from "next/og";
import { OgBurc } from "@/components/burc/burc-og";
import { burclar, getBurc } from "@/content/burclar";
import { loadOgFonts } from "@/lib/og/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Burç özellikleri";

export function generateStaticParams() {
  return burclar.map((b) => ({ burc: b.slug }));
}

export default async function Image({ params }: { params: Promise<{ burc: string }> }) {
  const { burc } = await params;
  return new ImageResponse(<OgBurc b={getBurc(burc)!} />, { ...size, fonts: await loadOgFonts() });
}
