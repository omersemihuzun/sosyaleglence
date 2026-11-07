export type Dimension = {
  id: string;
  /** Kısa ad, ör. "Sahiplenme" */
  label: string;
  /** Düşük ve yüksek uçların ne anlama geldiği */
  low: string;
  high: string;
};

export type Option = {
  text: string;
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
