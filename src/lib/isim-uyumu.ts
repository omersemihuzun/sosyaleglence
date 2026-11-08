/**
 * İsimle aşk testi: iki isimden her zaman aynı sonucu veren, sıradan bağımsız bir eğlence puanı.
 * Rastgele değil (aynı çift her denemede aynı puanı alır) ama bilimsel de değil; sayfada açıkça söylenir.
 * Hesap tamamen tarayıcıda yapılır, isimler hiçbir yere gönderilmez.
 */

/** Türkçe duyarlı sadeleştirme: "  ŞEYMA " ve "şeyma" aynı kişidir. */
export function isimSadele(isim: string): string {
  return isim
    .normalize("NFC")
    .toLocaleLowerCase("tr")
    .replace(/[^a-zçğıöşüâîû\s-]/g, "")
    .replace(/[\s-]+/g, " ")
    .trim();
}

/** Ekranda gösterilecek biçim: her kelimenin ilk harfi büyük (Türkçe i/İ kuralıyla). */
export function isimGoster(isim: string): string {
  return isimSadele(isim)
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toLocaleUpperCase("tr") + w.slice(1))
    .join(" ");
}

/** FNV-1a 32 bit */
function hash(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

export const ALT_BASLIKLAR = [
  { id: "tutku", ad: "Tutku", emoji: "🔥" },
  { id: "iletisim", ad: "İletişim", emoji: "💬" },
  { id: "guven", ad: "Güven", emoji: "🤝" },
  { id: "eglence", ad: "Eğlence", emoji: "🎉" },
] as const;

export type IsimUyumu = {
  a: string;
  b: string;
  puan: number;
  alt: { id: (typeof ALT_BASLIKLAR)[number]["id"]; ad: string; emoji: string; puan: number }[];
  baslik: string;
  metin: string;
  ayniIsim: boolean;
};

const BANTLAR: { min: number; baslik: string; metin: string }[] = [
  {
    min: 90,
    baslik: "Yıldızlar aynı hizada",
    metin:
      "İsimleriniz bile birbirini tamamlıyor. Bu kadar yüksek bir puan ancak cümlelerini birbirinin yerine bitiren çiftlerde görülür. Yine de unutmayın: asıl uyumu isimler değil, zor bir günde birbirinize nasıl davrandığınız belirler.",
  },
  {
    min: 75,
    baslik: "Çok güçlü bir çekim",
    metin:
      "Aranızda kolay kolay sönmeyecek bir kıvılcım var. Birlikte olduğunuzda zaman hızlı geçiyor gibi. Küçük farklılıklarınız ilişkiyi sıkıcı olmaktan kurtaran baharat gibi.",
  },
  {
    min: 60,
    baslik: "Gelecek vaat ediyor",
    metin:
      "Temel sağlam, gerisi emek. Birbirinizi tanıdıkça puanın yükseleceğine bahse gireriz. İletişimi açık tutarsanız bu ilişki uzun yol gider.",
  },
  {
    min: 45,
    baslik: "Zıt kutuplar çekişir",
    metin:
      "Birbirinize hem çekiliyor hem de sık sık şaşırıyorsunuz. Bu çift ya çok sıkı dost olur ya da hiç sıkılmayan iki sevgili. Farklılıkları tartışma değil merak konusu yaparsanız şaşırtıcı derecede iyi anlaşırsınız.",
  },
  {
    min: 30,
    baslik: "Sabır gerektiren bir ikili",
    metin:
      "İsimler pek anlaşamıyor ama kalpler bambaşka şeyler söyleyebilir. En güzel ilişkilerin bazıları kâğıt üzerinde hiç olmayacak gibi duranlardır. Bir kahveye kim hayır der?",
  },
  {
    min: 0,
    baslik: "Kader biraz kafa karıştırıyor",
    metin:
      "Rakamlar bugün sizden yana değil. Neyse ki bu sadece bir eğlence hesabı: gerçek hayatta uyumu ortak gülüşler, saygı ve emek belirler, harfler değil.",
  },
];

/**
 * İki isimden uyum hesabı. İsimlerden biri boşsa null döner.
 * Sıra önemsizdir: (a, b) ile (b, a) aynı sonucu verir.
 */
export function isimUyumu(ham1: string, ham2: string): IsimUyumu | null {
  const a = isimSadele(ham1);
  const b = isimSadele(ham2);
  if (!a || !b) return null;
  const [x, y] = [a, b].sort((p, q) => p.localeCompare(q, "tr"));
  const tohum = `${x}|${y}`;
  const ayniIsim = a === b;

  // Alt başlıklar: 35..99 arası, her biri ayrı tohumla
  const alt = ALT_BASLIKLAR.map((s) => ({ ...s, puan: 35 + (hash(`${tohum}#${s.id}`) % 65) }));
  // Genel puan: alt başlıkların ortalaması etrafında küçük bir sapma, 12..99 aralığına sıkıştırılmış
  const ort = alt.reduce((t, s) => t + s.puan, 0) / alt.length;
  const sapma = (hash(tohum) % 41) - 20;
  let puan = Math.round(Math.min(99, Math.max(12, ort + sapma)));
  if (ayniIsim) puan = Math.max(puan, 77); // "Adaşım" çiftleri kendine benzeyeni sever

  const bant = BANTLAR.find((x) => puan >= x.min)!;
  return { a: isimGoster(ham1), b: isimGoster(ham2), puan, alt, baslik: bant.baslik, metin: bant.metin, ayniIsim };
}
