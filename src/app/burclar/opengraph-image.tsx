import { ImageResponse } from "next/og";
import { OgBurclar } from "@/components/burc-og";
import { burclar } from "@/content/burclar";
import { loadOgFonts } from "@/lib/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Burçlar ve burç uyumu";

export default async function Image() {
  return new ImageResponse(<OgBurclar burclar={burclar} />, { ...size, fonts: await loadOgFonts() });
}
