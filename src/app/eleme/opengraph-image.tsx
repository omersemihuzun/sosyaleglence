import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og";
import { OgSectionCard } from "@/lib/og-brand";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sosyal Eğlence eleme oyunları";

export default async function Image() {
  return new ImageResponse(
    <OgSectionCard
      title="İkisinden birini seç. Sonuna kadar."
      subtitle="16 seçenek, her turda iki rakip, tek şampiyon. Hayalindeki evden en affedilmez red flag'e."
      emojis={["🏡", "🍢", "💍"]}
      accent="#2F7D6D"
    />,
    { ...size, fonts: await loadOgFonts() },
  );
}
