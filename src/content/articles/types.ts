export type ArticleSection = {
  /** H2 başlığı */
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  /** Bölümün altında gösterilecek H3 alt bölümler */
  subsections?: { heading: string; paragraphs: string[] }[];
};

export type Article = {
  slug: string;
  title: string;
  /** Arama sonucu başlığı (site adı eki pageTitle ile eklenir/düşer) */
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  emoji: string;
  color: string;
  /** YYYY-MM-DD */
  updated: string;
  intro: string[];
  sections: ArticleSection[];
  /** Makale ortasında ve sonunda gösterilen ana çağrı */
  cta: { href: string; label: string; text: string };
  faq: { q: string; a: string }[];
  related: { href: string; label: string }[];
};
