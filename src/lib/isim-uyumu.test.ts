import { describe, expect, it } from "vitest";
import { isimGoster, isimSadele, isimUyumu } from "./isim-uyumu";

describe("isim uyumu", () => {
  it("boş isimde sonuç yok", () => {
    expect(isimUyumu("", "Ayşe")).toBeNull();
    expect(isimUyumu("  ", "Ayşe")).toBeNull();
    expect(isimUyumu("123", "Ayşe")).toBeNull();
  });

  it("sıradan bağımsız ve her seferinde aynı", () => {
    const r1 = isimUyumu("Ayşe", "Mehmet")!;
    const r2 = isimUyumu("Mehmet", "Ayşe")!;
    expect(r1.puan).toBe(r2.puan);
    expect(r1.alt).toEqual(r2.alt);
    expect(isimUyumu("Ayşe", "Mehmet")!.puan).toBe(r1.puan);
  });

  it("büyük/küçük harf ve boşluk farkı sonucu değiştirmez (Türkçe i/İ dahil)", () => {
    expect(isimUyumu("  İREM ", "ŞEYMA")!.puan).toBe(isimUyumu("irem", "şeyma")!.puan);
    expect(isimSadele("IŞIL")).toBe("ışıl");
    expect(isimGoster("irem  nur")).toBe("İrem Nur");
  });

  it("puanlar aralıkta ve dağılım makul", () => {
    const isimler = [
      "ayşe",
      "fatma",
      "zeynep",
      "elif",
      "merve",
      "ali",
      "mehmet",
      "can",
      "emre",
      "burak",
      "deniz",
      "ece",
      "kerem",
      "selin",
      "mert",
    ];
    const puanlar: number[] = [];
    for (const a of isimler) for (const b of isimler) if (a < b) puanlar.push(isimUyumu(a, b)!.puan);
    expect(Math.min(...puanlar)).toBeGreaterThanOrEqual(12);
    expect(Math.max(...puanlar)).toBeLessThanOrEqual(99);
    const ort = puanlar.reduce((t, p) => t + p, 0) / puanlar.length;
    expect(ort).toBeGreaterThan(50);
    expect(ort).toBeLessThan(80);
    // Hepsi aynı banda düşmesin
    expect(new Set(puanlar.map((p) => Math.floor(p / 15))).size).toBeGreaterThanOrEqual(4);
  });

  it("aynı isimli çift en az 77 alır", () => {
    expect(isimUyumu("Deniz", "deniz")!.puan).toBeGreaterThanOrEqual(77);
    expect(isimUyumu("Deniz", "deniz")!.ayniIsim).toBe(true);
  });
});
