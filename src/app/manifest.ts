import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sosyal Eğlence",
    short_name: "Sosyal Eğlence",
    description: "İlişki ve kişilik testleri, eleme oyunları ve hediye önerileri.",
    lang: "tr",
    start_url: "/",
    display: "standalone",
    background_color: "#fff7f3",
    theme_color: "#d7102f",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
