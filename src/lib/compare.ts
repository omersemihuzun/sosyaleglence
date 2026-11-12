import type { Result, Test } from "./types";
import type { DimensionScores } from "./scoring";

export type CompareSession = {
  slug: string;
  a: { s: string; name: string };
  b?: { s: string; name: string };
  createdAt: number;
};

/**
 * İki kişinin uyum yüzdesi.
 * Benzerlik = 100 - boyutlar arası ortalama mutlak fark. Birbirinin "en iyi anlaştığı tip"i
 * olmak 15 puan ekler (çünkü bazı farklılıklar tamamlayıcıdır).
 */
export function compatibility(test: Test, sa: DimensionScores, sb: DimensionScores, ra: Result, rb: Result): number {
  const diffs = test.dimensions.map((d) => Math.abs((sa[d.id] ?? 0) - (sb[d.id] ?? 0)));
  const similarity = 100 - diffs.reduce((x, y) => x + y, 0) / diffs.length;
  const bonus = ra.bestMatch === rb.id || rb.bestMatch === ra.id ? 15 : 0;
  return Math.max(0, Math.min(100, Math.round(similarity * 0.85 + bonus)));
}

export function compatibilityText(p: number): string {
  if (p >= 85) return "Neredeyse aynı frekanstasınız. Birbirinizi açıklama yapmadan anlıyorsunuz.";
  if (p >= 70) return "Güçlü bir uyum. Farklarınız var ama birbirinizi dengeliyorsunuz.";
  if (p >= 50) return "Orta karar. Bazı konularda tıkır tıkır, bazılarında konuşmanız gereken farklar var.";
  if (p >= 30) return "Farklı dünyalardan geliyorsunuz. Bu kötü değil, ama birbirinizi anlamak emek istiyor.";
  return "Zıt kutuplar. Ya çok iyi tamamlarsınız ya da sık sık tartışırsınız.";
}

/** Kullanıcının yazdığı ismi güvenli hâle getirir. */
export function cleanName(raw: unknown): string {
  if (typeof raw !== "string") return "";
  // Kontrol, görünmez ve yön değiştiren (RTL override) karakterler isim sahteciliğine izin vermesin
  return raw
    .normalize("NFC")
    .replace(/[\p{Cc}\p{Cf}\p{Co}\p{Cn}]/gu, "")
    .replace(/[<>"'`\\]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 24);
}

/**
 * Karşılaştırma kodu: yeni kodlar 16 hex (64 bit rastgele); eski 10 haneli kodlar da geçerli kalır
 * (önceden paylaşılmış linkler kırılmasın). Kodu bilen sonuçları görebildiği için tahmin edilemez olmalı.
 */
export const COMPARE_CODE = /^(?:[a-f0-9]{10}|[a-f0-9]{16})$/;

export function newCompareCode(): string {
  const b = crypto.getRandomValues(new Uint8Array(8));
  return Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
}
