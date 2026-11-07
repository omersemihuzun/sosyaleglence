export type BracketItem = {
  id: string;
  name: string;
  emoji: string;
  /** Kartta isim altında görünen kısa detay */
  detail: string;
  /** Şampiyon olursa sonuç sayfasında: bu seçim seni nasıl anlatıyor */
  meaning: string;
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
