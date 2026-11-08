/** Site içi arama: hem istemci (arama) hem sunucu (indeks üretimi) tarafından kullanılan saf yardımcılar. */

export type SearchKind = "test" | "eleme" | "anket" | "burc" | "uyum" | "rehber" | "hediye";

/** Kısa alan adları: indeks dosyası küçük kalsın. */
export type SearchItem = {
  /** tür */
  k: SearchKind;
  /** başlık */
  t: string;
  /** kısa açıklama */
  s: string;
  /** adres */
  u: string;
  /** emoji */
  e: string;
};

export const kindLabels: Record<SearchKind, string> = {
  test: "Testler",
  eleme: "Eleme oyunları",
  anket: "Bunu mu O mu",
  burc: "Burçlar",
  uyum: "Burç uyumları",
  rehber: "Hediye rehberleri",
  hediye: "Hediye fikirleri",
};

export const kindOrder: SearchKind[] = ["test", "eleme", "burc", "uyum", "anket", "rehber", "hediye"];

/** Türkçe duyarsız biçim: küçük harf (tr), aksanlar ve ı/i, ş/s, ğ/g, ç/c, ö/o, ü/u farkı yok. */
export function normalize(text: string): string {
  return text
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ç/g, "c")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

type Prepared = { item: SearchItem; title: string; all: string; titleWords: string[] };

export function prepare(items: SearchItem[]): Prepared[] {
  return items.map((item) => {
    const title = normalize(item.t);
    return { item, title, all: `${title} ${normalize(item.s)}`, titleWords: title.split(" ") };
  });
}

/**
 * Bütün kelimeler başlıkta ya da açıklamada geçmeli. Puan: başlık başı > başlıkta kelime başı > başlıkta geçme > açıklama.
 */
export function search(prepared: Prepared[], query: string, limit = 60): SearchItem[] {
  const words = normalize(query).split(" ").filter(Boolean);
  if (words.length === 0) return [];
  const scored: { item: SearchItem; score: number }[] = [];
  for (const p of prepared) {
    let score = 0;
    let ok = true;
    for (const w of words) {
      if (!p.all.includes(w)) {
        ok = false;
        break;
      }
      if (p.title.startsWith(w)) score += 6;
      else if (p.titleWords.some((tw) => tw.startsWith(w))) score += 4;
      else if (p.title.includes(w)) score += 2;
      else score += 1;
    }
    if (ok) scored.push({ item: p.item, score });
  }
  return scored
    .sort((a, b) => b.score - a.score || a.item.t.length - b.item.t.length)
    .slice(0, limit)
    .map((s) => s.item);
}
