/**
 * "Beni ne kadar tanıyorsun?" ortak mantığı (sunucu ve istemci).
 * Oyunu kuran kişi kendi cevaplarını verir; cevaplar sunucuda kalır, tahmin eden kişiye hiç gönderilmez.
 * Tahminler sunucuya gider, puanı sunucu hesaplar ve cevapları ancak o zaman açar.
 */
import { cleanName, COMPARE_CODE, newCompareCode } from "./compare";

export const TANIYOR_SORU_SAYISI = 10;
export const TANIYOR_KOD = COMPARE_CODE;
export const yeniTaniyorKodu = newCompareCode;
export const temizAd = cleanName;

/** Sunucuda saklanan oturum */
export type TaniyorOturum = {
  ad: string;
  sorular: string[];
  cevaplar: number[];
  /** Oyunu kuran kişinin sonuçları görmesi için gizli anahtarın SHA-256 özeti */
  sahip: string;
  createdAt: number;
};

/** Tahmin eden kişiye giden kısım: cevaplar yok */
export type TaniyorDavet = { ad: string; sorular: string[] };

export type TaniyorSonuc = { ad: string; puan: number; toplam: number; at: number };

/** Soru listesi geçerli mi: bilinen, tekrarsız, tam sayıda; cevaplar 0-3 */
export function gecerliKurulum(sorular: unknown, cevaplar: unknown, bilinen: Set<string>): boolean {
  if (!Array.isArray(sorular) || !Array.isArray(cevaplar)) return false;
  if (sorular.length !== TANIYOR_SORU_SAYISI || cevaplar.length !== TANIYOR_SORU_SAYISI) return false;
  if (new Set(sorular).size !== sorular.length) return false;
  if (!sorular.every((s) => typeof s === "string" && bilinen.has(s))) return false;
  return cevaplar.every((c) => Number.isInteger(c) && c >= 0 && c <= 3);
}

export function gecerliTahmin(tahminler: unknown): tahminler is number[] {
  return (
    Array.isArray(tahminler) &&
    tahminler.length === TANIYOR_SORU_SAYISI &&
    tahminler.every((c) => Number.isInteger(c) && c >= 0 && c <= 3)
  );
}

export function puanla(cevaplar: number[], tahminler: number[]): number {
  return cevaplar.reduce((t, c, i) => t + (c === tahminler[i] ? 1 : 0), 0);
}

export function puanYorumu(puan: number, toplam = TANIYOR_SORU_SAYISI): { baslik: string; metin: string } {
  const oran = puan / toplam;
  if (oran === 1)
    return { baslik: "Akıl okuyucu!", metin: "Tek bir hata bile yok. Ya çok iyi dinliyor ya da kopya çekti." };
  if (oran >= 0.8)
    return { baslik: "Ruh ikizi seviyesi", metin: "Neredeyse her şeyi biliyor. Bu bilgi boşuna birikmemiş." };
  if (oran >= 0.6)
    return { baslik: "İyi tanıyor", metin: "Temeller sağlam, birkaç sürpriz kalmış. Onlar da sohbet konusu." };
  if (oran >= 0.4)
    return {
      baslik: "Yolun yarısı",
      metin: "Tanıyor ama hâlâ keşfedecek çok şey var. Güzel haber: keşfetmek eğlenceli.",
    };
  if (oran >= 0.2)
    return { baslik: "Biraz daha soru lazım", metin: "Sohbet kartlarıyla bir akşam geçirmenin tam zamanı." };
  return { baslik: "Yeni tanışıyorsunuz galiba", metin: "Merak etmeyin, en güzel kısım daha yeni başlıyor." };
}

/** Sahip anahtarının özeti (anahtarın kendisi sunucuda tutulmaz) */
export async function ozet(anahtar: string): Promise<string> {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(anahtar));
  return Array.from(new Uint8Array(b), (x) => x.toString(16).padStart(2, "0")).join("");
}
