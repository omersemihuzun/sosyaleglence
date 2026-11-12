import { ImageResponse } from "next/og";
import { AppleMark } from "@/lib/og/og-brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<AppleMark />, { ...size });
}
