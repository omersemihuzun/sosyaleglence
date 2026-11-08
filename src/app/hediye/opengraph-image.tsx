import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og";
import { OgSectionCard } from "@/lib/og-brand";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sosyal Eğlence hediye bulucu";

export default async function Image() {
  return new ImageResponse(
    <OgSectionCard
      title="Ne alacağını bilmiyorsan, buradan başla."
      subtitle="Kime aldığını, bütçeni ve neleri sevdiğini seç. Her fikirde neden iyi olduğu ve fiyat karşılaştırması."
      emojis={["🎁", "☕", "🌌"]}
      accent="#C2410C"
    />,
    { ...size, fonts: await loadOgFonts() },
  );
}
