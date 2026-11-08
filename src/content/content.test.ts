/**
 * İçerik bütünlüğü testleri. Sayılara değil yapıya bakar: yeni içerik eklendikçe
 * otomatik olarak onları da kontrol eder.
 */
import { describe, expect, it } from "vitest";
import { brackets } from "./brackets";
import { guides, ideasForGuide } from "./gifts/guides";
import { ideas } from "./gifts/ideas";
import { budgets, interests, recipients } from "./gifts/types";
import calibration from "./tests/kalibrasyon.json";
import { rawTests, tests } from "./tests";

const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function dupes(list: string[]) {
  return list.filter((x, i) => list.indexOf(x) !== i);
}

describe("testler", () => {
  it("slug'lar benzersiz ve URL güvenli", () => {
    const slugs = tests.map((t) => t.slug);
    expect(dupes(slugs)).toEqual([]);
    for (const s of slugs) expect(s).toMatch(SLUG);
  });

  describe.each(rawTests.map((t) => [t.slug, t] as const))("%s", (_, test) => {
    const dimIds = new Set(test.dimensions.map((d) => d.id));
    const resultIds = new Set(test.results.map((r) => r.id));

    it("boyut ve sonuç id'leri benzersiz", () => {
      expect(dupes(test.dimensions.map((d) => d.id))).toEqual([]);
      expect(dupes(test.results.map((r) => r.id))).toEqual([]);
      for (const r of test.results) expect(r.id).toMatch(SLUG);
    });

    it("her şık yalnızca tanımlı boyutlara 0-3 arası puan verir", () => {
      for (const q of test.questions) {
        expect(q.options.length).toBeGreaterThanOrEqual(2);
        for (const o of q.options) {
          for (const [dim, v] of Object.entries(o.scores)) {
            expect(dimIds, `${q.text} → ${o.text}: bilinmeyen boyut "${dim}"`).toContain(dim);
            expect(v).toBeGreaterThanOrEqual(0);
            expect(v).toBeLessThanOrEqual(3);
          }
        }
      }
    });

    it("her boyut en az bir şıkta puan alabiliyor", () => {
      for (const dim of dimIds) {
        const reachable = test.questions.some((q) => q.options.some((o) => (o.scores[dim] ?? 0) > 0));
        expect(reachable, `"${dim}" boyutu hiçbir şıkta puan almıyor`).toBe(true);
      }
    });

    it("her sonucun profili tüm boyutları 0-100 arasında içerir", () => {
      for (const r of test.results) {
        for (const dim of dimIds) {
          const v = r.profile[dim];
          expect(v, `${r.id} profilinde "${dim}" yok`).toBeTypeOf("number");
          expect(v).toBeGreaterThanOrEqual(0);
          expect(v).toBeLessThanOrEqual(100);
        }
        for (const dim of Object.keys(r.profile)) expect(dimIds).toContain(dim);
      }
    });

    it("bestMatch mevcut bir sonucu gösterir", () => {
      for (const r of test.results) expect(resultIds, `${r.id}.bestMatch`).toContain(r.bestMatch);
    });

    it("headline ağırlıkları tanımlı boyutlara ait", () => {
      for (const dim of Object.keys(test.headline?.weights ?? {})) expect(dimIds).toContain(dim);
    });

    it("kalibrasyon.json bu testin tüm sonuçlarını ve boyutlarını kapsar", () => {
      const cal = (calibration as Record<string, Record<string, Record<string, number>>>)[test.slug];
      expect(cal, `kalibrasyon.json içinde ${test.slug} yok: npm run kalibre`).toBeDefined();
      for (const r of test.results) {
        expect(cal[r.id], `${r.id} kalibre edilmemiş`).toBeDefined();
        for (const dim of dimIds) expect(cal[r.id][dim]).toBeTypeOf("number");
      }
    });

    it("seçim formatında her şıkta emoji var ve etiket en fazla 4 kelime", () => {
      if (test.format !== "secim") return;
      test.questions.forEach((q, qi) => {
        expect(q.options.length, `${qi + 1}. soru 4 şık olmalı`).toBe(4);
        for (const o of q.options) {
          expect(o.emoji, `${qi + 1}. soru "${o.text}": emoji eksik`).toBeTruthy();
          expect(o.text.trim().split(/\s+/).length, `${qi + 1}. soru "${o.text}": etiket çok uzun`).toBeLessThanOrEqual(4);
        }
      });
    });
  });
});

describe("hediyeler", () => {
  it("fikir id'leri benzersiz ve URL güvenli", () => {
    const ids = ideas.map((i) => i.id);
    expect(dupes(ids)).toEqual([]);
    for (const id of ids) expect(id).toMatch(SLUG);
  });

  it("her fikir geçerli alıcı, ilgi alanı ve bütçe kullanır", () => {
    for (const i of ideas) {
      expect(i.recipients.length, i.id).toBeGreaterThan(0);
      for (const r of i.recipients) expect(Object.keys(recipients), i.id).toContain(r);
      for (const x of i.interests) expect(Object.keys(interests), i.id).toContain(x);
      expect(Object.keys(budgets).map(Number), i.id).toContain(i.budget);
      expect(i.query.trim().length, i.id).toBeGreaterThan(0);
    }
  });

  it("rehber slug'ları benzersiz ve her rehberde en az bir fikir var", () => {
    const slugs = guides.map((g) => g.slug);
    expect(dupes(slugs)).toEqual([]);
    for (const g of guides) {
      expect(g.slug).toMatch(SLUG);
      expect(ideasForGuide(g).length, `${g.slug} boş`).toBeGreaterThan(0);
    }
  });
});

describe("eleme oyunları", () => {
  it("slug'lar benzersiz", () => {
    const slugs = brackets.map((b) => b.slug);
    expect(dupes(slugs)).toEqual([]);
    for (const s of slugs) expect(s).toMatch(SLUG);
  });

  it.each(brackets.map((b) => [b.slug, b] as const))("%s: seçenekler 2'nin kuvveti ve id'ler benzersiz", (_, b) => {
    const n = b.items.length;
    expect(n).toBeGreaterThanOrEqual(4);
    expect(n & (n - 1)).toBe(0);
    const ids = b.items.map((i) => i.id);
    expect(dupes(ids)).toEqual([]);
    for (const id of ids) expect(id).toMatch(SLUG);
  });

  it("test ve turnuva slug'ları birbirinin üstüne yazmaz", () => {
    const all = [...tests.map((t) => t.slug), ...brackets.map((b) => b.slug), ...guides.map((g) => g.slug)];
    expect(dupes(all)).toEqual([]);
  });
});
