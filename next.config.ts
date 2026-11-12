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

const isDev = process.env.NODE_ENV === "development";

/**
 * Content-Security-Policy (nonce'suz). Sayfalar statik üretildiği için nonce kullanılamaz;
 * Next'in satır içi hydration script'leri ve JSON-LD için 'unsafe-inline' gerekli.
 * Dış kaynak yok: fontlar next/font ile kendi alan adımızdan, emoji görselleri sunucuda
 * (ImageResponse) üretiliyor. Mağaza linkleri yalnızca normal bağlantı, CSP'yi etkilemez.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  // preload/includeSubDomains bilinçli olarak yok: alan adının alt alanları netleşmeden kalıcı taahhüt verilmez
  ...(isDev ? [] : [{ key: "Strict-Transport-Security", value: "max-age=31536000" }]),
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  poweredByHeader: false,
  // Story kartı ve önizleme görselleri şampiyon fotoğrafını çalışma anında diskten okuyor;
  // yol dinamik olduğu için otomatik izlenmiyor, fonksiyon paketine elle ekliyoruz.
  outputFileTracingIncludes: {
    "/api/eleme-kart/**": ["./public/eleme/**/*"],
    "/eleme/**": ["./public/eleme/**/*"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
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
    // Kanonik alan adı sosyaleglence.com olduğunda geçici vercel.app adresi oraya kalıcı yönlenir
    // (kopya içerik olmasın). Değişken hâlâ vercel.app'i gösteriyorsa yönlendirme kapalıdır.
    const canonical = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sosyaleglence.com";
    const hostRedirect = canonical.includes("vercel.app")
      ? []
      : [
          {
            source: "/:path*",
            has: [{ type: "host" as const, value: "sosyaleglence.vercel.app" }],
            destination: `${canonical.replace(/\/$/, "")}/:path*`,
            permanent: true,
          },
        ];
    return [
      ...hostRedirect,
      ...legacy.flatMap(([from, to]) => [
        { source: from, destination: to, permanent: true },
        { source: `${from}/`, destination: to, permanent: true },
      ]),
    ];
  },
};

export default nextConfig;
