/** Açık lisanslı fotoğrafın yolu ve atıf bilgisi (CC lisansları atıf ister). */
export type BracketImage = {
  src: string;
  creator: string;
  license: string;
  licenseUrl: string;
  source: string;
  sourceUrl: string;
  title: string;
};

export type BracketItem = {
  id: string;
  name: string;
  emoji: string;
  /** Kartta isim altında görünen kısa detay */
  detail: string;
  /** Şampiyon olursa sonuç sayfasında: bu seçim seni nasıl anlatıyor */
  meaning: string;
  /** Açık lisanslı fotoğraf (varsa). Yoksa kartlarda emoji gösterilir. */
  image?: BracketImage;
};

export type Bracket = {
  slug: string;
  title: string;
  /** Her eşleşmede sorulan soru */
  prompt: string;
  summary: string;
  emoji: string;
  color: string;
  metaDescription: string;
  /** Şampiyon kartında üst satır, ör. "Hayalimdeki ev" */
  championLabel: string;
  /** 16 seçenek (2'nin kuvveti olmalı) */
  items: BracketItem[];
  /** Sonuç sayfasında ilgili bir sayfaya yönlendirme */
  related?: { href: string; label: string };
};
