export const recipients = {
  "kiz-arkadas": "Kız arkadaşım / eşim",
  "erkek-arkadas": "Erkek arkadaşım / eşim",
  anne: "Annem",
  baba: "Babam",
  arkadas: "Arkadaşım",
  kardes: "Kardeşim",
  "is-arkadasi": "İş arkadaşım",
} as const;

export const interests = {
  teknoloji: "Teknoloji",
  kahve: "Kahve & çay",
  kitap: "Kitap & yazı",
  spor: "Spor & outdoor",
  moda: "Moda & aksesuar",
  ev: "Ev & dekorasyon",
  deneyim: "Deneyim",
  oyun: "Oyun",
  muzik: "Müzik",
  bakim: "Kişisel bakım",
  mutfak: "Mutfak & yemek",
  hobi: "Sanat & hobi",
  seyahat: "Seyahat",
} as const;

export const budgets = {
  1: "500 TL altı",
  2: "500 – 1.500 TL",
  3: "1.500 – 5.000 TL",
  4: "5.000 TL üstü",
} as const;

export type Recipient = keyof typeof recipients;
export type Interest = keyof typeof interests;
export type Budget = keyof typeof budgets;

/** Sevgililer günü ve yıldönümü yalnızca romantik alıcılara uygulanır. */
export type Occasion = "romantik" | "anneler-gunu" | "babalar-gunu" | "ev" | "yilbasi" | "ogretmen-gunu" | "mezuniyet";

export type GiftIdea = {
  id: string;
  name: string;
  emoji: string;
  /** Neden iyi bir hediye: 1-2 cümle, gerçekten yardımcı olacak şekilde */
  why: string;
  /** Mağazalarda aranacak ifade */
  query: string;
  budget: Budget;
  recipients: Recipient[];
  interests: Interest[];
  /** Özel olarak uygun olduğu durumlar. Boşsa genel (doğum günü, yılbaşı vb.) */
  occasions?: Occasion[];
};
