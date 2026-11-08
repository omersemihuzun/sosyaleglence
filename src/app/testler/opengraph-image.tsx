import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og";
import { OgSectionCard } from "@/lib/og-brand";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sosyal Eğlence testleri";

export default async function Image() {
  return new ImageResponse(
    <OgSectionCard
      title="Kendini tanı, sonra herkese göster."
      subtitle="Kıskançlık, bağlanma stili, red flag ve daha fazlası. Tek puan yok, seni anlatan bir profil var."
      emojis={["👀", "🚩", "🧲"]}
    />,
    { ...size, fonts: await loadOgFonts() },
  );
}
