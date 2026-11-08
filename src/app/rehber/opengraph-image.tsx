import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og";
import { OgSectionCard } from "@/lib/og-brand";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sosyal Eğlence ilişki ve kişilik rehberleri";

export default async function Image() {
  return new ImageResponse(
    <OgSectionCard
      title="Testlerin arkasındaki hikâye."
      subtitle="Bağlanma stilleri, kıskançlık, red flag'ler, sevgi dilleri ve daha fazlası, sade bir dille."
      emojis={["📖", "🧲", "💌"]}
      accent="#3B2A6B"
    />,
    { ...size, fonts: await loadOgFonts() },
  );
}
