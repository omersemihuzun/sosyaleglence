export type Dimension = {
  id: string;
  /** Kısa ad, ör. "Sahiplenme" */
  label: string;
  /** Düşük ve yüksek uçların ne anlama geldiği */
  low: string;
  high: string;
};

type Option = {
  /** "secim" formatında kısa etiket (≤ 4 kelime), "senaryo" formatında tam cümle */
  text: string;
  /** "secim" formatında kartta büyük gösterilen emoji */
  emoji?: string;
  /** Her boyuta 0–3 arası katkı. Yazılmayan boyutlar 0 sayılır. */
  scores: Record<string, number>;
};

export type Question = {
  /** Senaryo / soru metni */
  text: string;
  options: Option[];
};

export type Result = {
  id: string;
  name: string;
  emoji: string;
  /** Tek cümlelik özet, paylaşım kartında da görünür */
  tagline: string;
  /** Boyutların bu profil için hedef değerleri (0–100) */
  profile: Record<string, number>;
  description: string[];
  strengths: string[];
  watchOut: string[];
  /** En iyi anlaştığı sonuç tipinin id'si */
  bestMatch: string;
  /** Kart arka plan rengi */
  color: string;
  /** Bu sonuca uygun hediye sayfası (testten hediyeye köprü) */
  giftLink?: { href: string; label: string };
};

export type Test = {
  slug: string;
  title: string;
  /** Liste kartında görünen kısa açıklama */
  summary: string;
  /** Test giriş ekranındaki açıklama */
  intro: string;
  emoji: string;
  color: string;
  category: "ilişki" | "kişilik" | "arkadaşlık";
  /**
   * "senaryo" (varsayılan): gerçekçi durumlar ve cümle şıklar.
   * "secim": emoji kartlar arasından seçim; sonuç dolaylı çıkarılır ("Bir sofra kur, sana şehir söyleyelim").
   */
  format?: "senaryo" | "secim";
  metaDescription: string;
  dimensions: Dimension[];
  questions: Question[];
  results: Result[];
  /**
   * İsteğe bağlı genel skor: belirtilen boyutların ağırlıklı ortalaması.
   * Ör. Kıskançlık testinde "Kıskançlık seviyen %64".
   */
  headline?: { label: string; weights: Record<string, number> };
};
