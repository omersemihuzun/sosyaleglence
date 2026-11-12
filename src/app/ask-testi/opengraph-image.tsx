import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og/og";
import { OgSectionCard } from "@/lib/og/og-brand";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "İsimle aşk testi: iki ismi yaz, uyumunu yüzde olarak gör";

export default async function Image() {
  return new ImageResponse(
    <OgSectionCard
      title="İsimleriniz ne kadar uyumlu?"
      subtitle="İki ismi yaz; tutku, iletişim, güven ve eğlence puanınızı gör. İsimlerle aşk testi."
      emojis={["💘", "🔥", "💬"]}
    />,
    { ...size, fonts: await loadOgFonts() },
  );
}
