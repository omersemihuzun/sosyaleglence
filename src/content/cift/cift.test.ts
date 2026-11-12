import { describe, expect, it } from "vitest";
import { gecerliKurulum, gecerliTahmin, puanla, puanYorumu, TANIYOR_SORU_SAYISI } from "@/lib/taniyor";
import { ciftOyunlari } from "./index";
import { dcKartlari } from "./dogruluk-cesaret";
import { hangimizSorulari } from "./hangimiz";
import { randevuFikirleri } from "./randevu";
import { sohbetKartlari } from "./sohbet";
import { taniyorSorulari } from "./taniyor";

const benzersiz = (ids: string[]) => new Set(ids).size === ids.length;

describe("çift oyunları içeriği", () => {
  it("oyun listesi benzersiz", () => {
    expect(benzersiz(ciftOyunlari.map((o) => o.slug))).toBe(true);
  });

  it("sohbet kartları: 5 kategori, benzersiz id ve metin", () => {
    expect(sohbetKartlari.length).toBeGreaterThanOrEqual(100);
    expect(new Set(sohbetKartlari.map((k) => k.kategori)).size).toBe(5);
    expect(benzersiz(sohbetKartlari.map((k) => k.id))).toBe(true);
    expect(benzersiz(sohbetKartlari.map((k) => k.metin))).toBe(true);
  });

  it("doğruluk/cesaret: her seviye ve türde en az 10 kart", () => {
    expect(benzersiz(dcKartlari.map((k) => k.id))).toBe(true);
    for (const seviye of [1, 2, 3])
      for (const tur of ["dogruluk", "cesaret"])
        expect(
          dcKartlari.filter((k) => k.seviye === seviye && k.tur === tur).length,
          `${tur} ${seviye}`,
        ).toBeGreaterThanOrEqual(10);
  });

  it("hangimiz: cümleyi tamamlar ve soru işaretiyle biter", () => {
    expect(benzersiz(hangimizSorulari.map((s) => s.id))).toBe(true);
    for (const s of hangimizSorulari) expect(s.metin, s.id).toMatch(/\?$/);
    expect(hangimizSorulari.length).toBeGreaterThanOrEqual(24); // en az iki tur
  });

  it("randevu: her yer/bütçe kombinasyonunda çarkı dolduracak kadar fikir", () => {
    expect(benzersiz(randevuFikirleri.map((f) => f.id))).toBe(true);
    for (const yer of ["ev", "disari"])
      for (const butce of [0, 1, 2])
        expect(
          randevuFikirleri.filter((f) => f.yer === yer && f.butce === butce).length,
          `${yer} ${butce}`,
        ).toBeGreaterThanOrEqual(8);
  });

  it("tanıyor: 4 farklı şık, oyun için yeterli soru", () => {
    expect(taniyorSorulari.length).toBeGreaterThanOrEqual(TANIYOR_SORU_SAYISI);
    expect(benzersiz(taniyorSorulari.map((s) => s.id))).toBe(true);
    for (const s of taniyorSorulari) expect(new Set(s.secenekler).size, s.id).toBe(4);
  });
});

describe("tanıyor doğrulama ve puanlama", () => {
  const bilinen = new Set(taniyorSorulari.map((s) => s.id));
  const sorular = taniyorSorulari.slice(0, 10).map((s) => s.id);
  const cevaplar = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1];

  it("kurulumu doğrular", () => {
    expect(gecerliKurulum(sorular, cevaplar, bilinen)).toBe(true);
    expect(gecerliKurulum(sorular.slice(0, 9), cevaplar.slice(0, 9), bilinen)).toBe(false); // eksik
    expect(gecerliKurulum([...sorular.slice(0, 9), sorular[0]], cevaplar, bilinen)).toBe(false); // tekrar
    expect(gecerliKurulum([...sorular.slice(0, 9), "yok"], cevaplar, bilinen)).toBe(false); // bilinmeyen
    expect(gecerliKurulum(sorular, [...cevaplar.slice(0, 9), 4], bilinen)).toBe(false); // şık dışı
    expect(gecerliKurulum("x", cevaplar, bilinen)).toBe(false);
  });

  it("tahmini doğrular ve puanlar", () => {
    expect(gecerliTahmin(cevaplar)).toBe(true);
    expect(gecerliTahmin([...cevaplar.slice(0, 9), 1.5])).toBe(false);
    expect(puanla(cevaplar, cevaplar)).toBe(10);
    expect(
      puanla(
        cevaplar,
        cevaplar.map((c) => (c + 1) % 4),
      ),
    ).toBe(0);
    expect(puanYorumu(10).baslik).toBe("Akıl okuyucu!");
    expect(puanYorumu(0).baslik).toBeTruthy();
  });
});
