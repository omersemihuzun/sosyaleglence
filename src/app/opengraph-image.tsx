import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og/og";
import { OgSectionCard } from "@/lib/og/og-brand";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sosyal Eğlence: ilişki testleri, eleme oyunları ve hediye önerileri";

export default async function Image() {
  return new ImageResponse(
    <OgSectionCard
      title="Kendini tanıdığını mı sanıyorsun?"
      subtitle="İlişki ve kişilik testleri, eleme oyunları ve sevdiklerine göre hediye önerileri."
      emojis={["👀", "🏡", "🎁"]}
    />,
    { ...size, fonts: await loadOgFonts() },
  );
}
