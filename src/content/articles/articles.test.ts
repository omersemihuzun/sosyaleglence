import { describe, expect, it } from "vitest";
import { brackets } from "../brackets";
import { guides } from "../gifts/guides";
import { tests } from "../tests";
import { articleByTest } from "./by-test";
import { anchorId, articles, wordCount } from "./index";

/** İçerikteki bir bağlantı mevcut bir sayfaya mı gidiyor? */
function routeExists(href: string): boolean {
  const path = href.split(/[?#]/)[0];
  const parts = path.split("/").filter(Boolean);
  if (parts[0] === "testler") return parts.length === 1 || tests.some((t) => t.slug === parts[1]);
  if (parts[0] === "eleme") return parts.length === 1 || brackets.some((b) => b.slug === parts[1]);
  if (parts[0] === "hediye") return parts.length === 1 || guides.some((g) => g.slug === parts[1]);
  if (parts[0] === "rehber") return parts.length === 1 || articles.some((a) => a.slug === parts[1]);
  return ["", "bunu-mu-o-mu", "burclar", "iletisim", "gizlilik"].includes(parts[0] ?? "");
}

describe("rehber makaleleri", () => {
  it("slug'lar benzersiz ve URL'ye uygun", () => {
    const slugs = articles.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9-]+$/);
  });

  for (const a of articles) {
    describe(a.slug, () => {
      it("en az 800 kelime", () => {
        expect(wordCount(a)).toBeGreaterThanOrEqual(800);
      });
      it("bağlantılar mevcut sayfalara gidiyor", () => {
        for (const r of [...a.related, a.cta]) expect(routeExists(r.href), r.href).toBe(true);
      });
      it("3 SSS, geçerli tarih ve açıklama uzunluğu", () => {
        expect(a.faq.length).toBe(3);
        expect(a.updated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        expect(a.metaDescription.length).toBeGreaterThanOrEqual(70);
        expect(a.metaDescription.length).toBeLessThanOrEqual(160);
      });
      it("bölüm başlıkları benzersiz bağlantı kimlikleri üretiyor", () => {
        const ids = a.sections.map((s) => anchorId(s.heading));
        expect(new Set(ids).size).toBe(ids.length);
        for (const id of ids) expect(id.length).toBeGreaterThan(0);
      });
    });
  }

  it("test eşlemesi mevcut test ve makalelere işaret ediyor", () => {
    for (const [test, article] of Object.entries(articleByTest)) {
      expect(tests.some((t) => t.slug === test), test).toBe(true);
      expect(articles.some((a) => a.slug === article), article).toBe(true);
    }
  });
});
