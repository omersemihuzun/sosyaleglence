import { describe, expect, it } from "vitest";
import { normalize, prepare, search, type SearchItem } from "./search";
import { buildSearchIndex } from "./search-index";

describe("normalize", () => {
  it("Türkçe harfleri ve büyük harfleri eşitler", () => {
    expect(normalize("KISKANÇLIK")).toBe("kiskanclik");
    expect(normalize("İstanbul'da Boğaz")).toBe("istanbul da bogaz");
    expect(normalize("Şöyle Güzel")).toBe("soyle guzel");
  });
});

describe("search", () => {
  const items: SearchItem[] = [
    { k: "test", t: "Ne Kadar Kıskançsın?", s: "Gece gelen bir mesaj", u: "/a", e: "👀" },
    { k: "burc", t: "Koç burcu", s: "21 Mart - 19 Nisan", u: "/b", e: "♈" },
    { k: "uyum", t: "Koç ve Aslan uyumu", s: "%90 uyum", u: "/c", e: "♈♌" },
  ];
  const p = prepare(items);

  it("aksansız sorguyla bulur", () => {
    expect(search(p, "kiskanc").map((r) => r.u)).toEqual(["/a"]);
  });
  it("bütün kelimelerin geçmesini ister", () => {
    expect(search(p, "koc aslan").map((r) => r.u)).toEqual(["/c"]);
  });
  it("başlık başı eşleşmesini öne alır", () => {
    expect(search(p, "koc")[0].u).toBe("/b");
  });
  it("boş sorgu sonuç vermez", () => {
    expect(search(p, "   ")).toEqual([]);
  });
});

describe("arama indeksi", () => {
  const index = buildSearchIndex();
  it("bütün türleri kapsar ve adresler benzersiz", () => {
    const kinds = new Set(index.map((i) => i.k));
    for (const k of ["test", "eleme", "anket", "burc", "uyum", "rehber", "hediye"])
      expect(kinds.has(k as SearchItem["k"])).toBe(true);
    expect(index.filter((i) => i.k === "uyum")).toHaveLength(78);
    expect(index.filter((i) => i.k === "burc")).toHaveLength(12);
  });
  it("koç araması burcu ve uyumlarını getirir", () => {
    const r = search(prepare(index), "koc");
    expect(r.some((i) => i.u === "/burclar/koc")).toBe(true);
    expect(r.filter((i) => i.k === "uyum").length).toBeGreaterThanOrEqual(12);
  });
  it("indeks hafif kalır", () => {
    expect(JSON.stringify(index).length).toBeLessThan(120_000);
  });
});
