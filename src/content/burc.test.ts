import { describe, expect, it } from "vitest";
import { burclar } from "./burclar";
import { getUyum, parseCiftSlug, uyumlar } from "./burc-uyum";

describe("burçlar", () => {
  it("12 burç, benzersiz ve geçerli slug'lar", () => {
    expect(burclar).toHaveLength(12);
    const slugs = burclar.map((b) => b.slug);
    expect(new Set(slugs).size).toBe(12);
    for (const s of slugs) expect(s).toMatch(/^[a-z]+$/);
  });

  it("her element ve nitelik dengeli dağılmış", () => {
    const say = (k: "element" | "nitelik") =>
      Object.values(burclar.reduce<Record<string, number>>((acc, b) => ({ ...acc, [b[k]]: (acc[b[k]] ?? 0) + 1 }), {}));
    expect(say("element")).toEqual([3, 3, 3, 3]);
    expect(say("nitelik")).toEqual([4, 4, 4]);
  });
});

describe("burç uyumları", () => {
  it("78 benzersiz çift, her çift bir kez", () => {
    expect(uyumlar).toHaveLength(78);
    expect(new Set(uyumlar.map((u) => u.slug)).size).toBe(78);
    for (const a of burclar) for (const b of burclar) expect(getUyum(a.slug, b.slug)).toBeDefined();
  });

  it("puanlar 0-100 arası tam sayı", () => {
    for (const u of uyumlar) {
      expect(Number.isInteger(u.puan)).toBe(true);
      expect(u.puan).toBeGreaterThanOrEqual(0);
      expect(u.puan).toBeLessThanOrEqual(100);
    }
  });

  it("metinler çifte özgü (kopya yok) ve dolu", () => {
    expect(new Set(uyumlar.map((u) => u.ask)).size).toBe(78);
    expect(new Set(uyumlar.map((u) => u.arkadaslik)).size).toBe(78);
    for (const u of uyumlar) {
      expect(u.guclu).toHaveLength(2);
      expect(u.zorluk).toHaveLength(2);
      expect(u.baslik.length).toBeGreaterThan(3);
    }
  });

  it("aynı element (üçgen) kareden daha uyumlu", () => {
    const ort = (aci: string) => {
      const l = uyumlar.filter((u) => u.aci === aci).map((u) => u.puan);
      return l.reduce((x, y) => x + y, 0) / l.length;
    };
    expect(ort("ucgen")).toBeGreaterThan(ort("sekstil"));
    expect(ort("sekstil")).toBeGreaterThan(ort("kare"));
  });

  it("slug çözümleme: kanonik, ters sıra ve geçersiz", () => {
    expect(parseCiftSlug("koc-ve-aslan")).toMatchObject({ kanonik: true });
    const ters = parseCiftSlug("aslan-ve-koc");
    expect(ters?.kanonik).toBe(false);
    expect(ters?.uyum.slug).toBe("koc-ve-aslan");
    expect(parseCiftSlug("koc-ve-ejderha")).toBeUndefined();
    expect(parseCiftSlug("koc")).toBeUndefined();
  });
});
