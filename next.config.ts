import type { NextConfig } from "next";

/** Eski WordPress sitesindeki adresler: arama motoru değeri kaybolmasın diye kalıcı yönlendirme. */
const legacy: [string, string][] = [
  ["/quizmaker", "/testler/kiskanclik-testi"],
  ["/hediye-önerileri", "/hediye"],
  ["/hediye-%C3%B6nerileri", "/hediye"],
  ["/hediye-u00f6nerileri", "/hediye"],
  ["/iletişim", "/iletisim"],
  ["/ileti%C5%9Fim", "/iletisim"],
  ["/iletiu015fim", "/iletisim"],
  ["/anasayfa", "/"],
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return legacy.flatMap(([from, to]) => [
      { source: from, destination: to, permanent: true },
      { source: `${from}/`, destination: to, permanent: true },
    ]);
  },
};

export default nextConfig;
