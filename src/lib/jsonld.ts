import { absoluteUrl, site } from "./site";

/**
 * Yapılandırılmış veri (schema.org) yardımcıları.
 * Sayfalar bunları `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(x) }} />`
 * ile basar. `toJsonLd` "<" karakterini kaçırır: içerikte "</script>" geçse bile etiket kapanmaz.
 */

export type Crumb = { name: string; path: string };

export function toJsonLd(data: object | object[]): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: site.name,
    url: absoluteUrl("/"),
    email: site.email,
    // 180x180 kare marka ikonu (src/app/apple-icon.tsx); Google en az 112px istiyor
    logo: absoluteUrl("/apple-icon"),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: site.name,
    url: absoluteUrl("/"),
    inLanguage: "tr-TR",
    description: site.description,
    publisher: { "@id": absoluteUrl("/#organization") },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${absoluteUrl("/ara")}?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

// ——— Başlık yardımcıları
// Arama sonuçları ~60 karakterden sonrasını keser. Adaylardan sığan ilkini seçeriz.
// Emoji başlığa konmaz (Google çoğu zaman siler); OG başlığında kalabilir.

export const TITLE_MAX = 60;
export const SITE_SUFFIX = ` | ${site.name}`;

const segmenter = new Intl.Segmenter("tr", { granularity: "grapheme" });
export const textLength = (s: string) => [...segmenter.segment(s)].length;

export function fitTitle(...candidates: string[]): string {
  return candidates.find((c) => textLength(c) <= TITLE_MAX) ?? candidates[candidates.length - 1];
}

/** Test sonuç sayfası <title> metni (site adı dahil, mutlak). */
export function testResultTitle(resultName: string, testTitle: string) {
  return fitTitle(`${resultName} | ${testTitle}${SITE_SUFFIX}`, `${resultName} | ${testTitle}`, `${resultName}${SITE_SUFFIX}`);
}

/** Eleme oyunu sonuç sayfası <title> metni (site adı dahil, mutlak). */
export function bracketResultTitle(itemName: string, bracketTitle: string) {
  return fitTitle(`${itemName} | ${bracketTitle}${SITE_SUFFIX}`, `${itemName} | ${bracketTitle}`, `${itemName}${SITE_SUFFIX}`);
}

export function testResultDescription(tagline: string, testTitle: string) {
  return `${tagline} ${testTitle} testini çöz, sen hangisisin öğren.`;
}

export function bracketResultDescription(itemName: string, championLabel: string, bracketTitle: string) {
  return `${championLabel}: ${itemName}. ${bracketTitle} oyununu oyna, senin şampiyonunu bul.`;
}

/** Ana sayfa her zaman ilk halka olarak eklenir. */
export function breadcrumbJsonLd(crumbs: Crumb[]) {
  const all: Crumb[] = [{ name: "Ana sayfa", path: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

/** Hediye rehberi <title> metni: sığmazsa önce site adı eki, sonra alt başlık düşer. */
export function guideTitle(metaTitle: string, title: string) {
  return fitTitle(`${metaTitle}${SITE_SUFFIX}`, metaTitle, `${title}${SITE_SUFFIX}`);
}

/** Genel sayfa <title> metni: site adı eki sığmıyorsa düşer. */
export function pageTitle(title: string) {
  return fitTitle(`${title}${SITE_SUFFIX}`, title);
}
