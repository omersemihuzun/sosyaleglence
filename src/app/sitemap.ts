import type { MetadataRoute } from "next";
import { brackets } from "@/content/brackets";
import { guides } from "@/content/gifts/guides";
import { tests } from "@/content/tests";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/testler"), changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/hediye"), changeFrequency: "weekly", priority: 0.9 },
    ...tests.map((t) => ({ url: absoluteUrl(`/testler/${t.slug}`), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...tests.flatMap((t) =>
      t.results.map((r) => ({ url: absoluteUrl(`/testler/${t.slug}/sonuc/${r.id}`), changeFrequency: "monthly" as const, priority: 0.4 })),
    ),
    { url: absoluteUrl("/eleme"), changeFrequency: "weekly", priority: 0.9 },
    ...brackets.map((b) => ({ url: absoluteUrl(`/eleme/${b.slug}`), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...guides.map((g) => ({ url: absoluteUrl(`/hediye/${g.slug}`), changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: absoluteUrl("/iletisim"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
