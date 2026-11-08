/** Çift oyunlarının içerik tipleri. Metinler Türkçe, saygılı ve aile ortamında okunabilir (SFW). */

/** Sohbet kartı: randevu akşamı için soru */
export type SohbetKategori = "eglenceli" | "derin" | "anilar" | "gelecek" | "hayaller";
export type SohbetKarti = { id: string; kategori: SohbetKategori; metin: string };

/** Doğruluk mu cesaret mi: seviye 1 tatlı, 2 eğlenceli, 3 cesur (yine de SFW) */
export type DcSeviye = 1 | 2 | 3;
export type DcKart = { id: string; tur: "dogruluk" | "cesaret"; seviye: DcSeviye; metin: string };

/** Hangimiz daha çok...? Metin "...?" ile biten bir tamamlama: "Hangimiz daha çok " + metin */
export type HangimizSoru = { id: string; metin: string; emoji: string };

/** Randevu fikri */
export type RandevuYer = "ev" | "disari";
export type RandevuButce = 0 | 1 | 2; // 0 ücretsiz, 1 uygun, 2 özel gün
export type RandevuFikri = {
  id: string;
  baslik: string;
  aciklama: string;
  emoji: string;
  yer: RandevuYer;
  butce: RandevuButce;
};

/** Beni ne kadar tanıyorsun: kişi kendini cevaplar, partner tahmin eder. 4 şık. */
export type TaniyorSoru = {
  id: string;
  soru: string;
  tahminSoru: string;
  secenekler: [string, string, string, string];
};
