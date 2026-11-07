/**
 * Mağaza bağlantıları.
 *
 * Şu an her fikir için mağazaların arama sonucuna gidiyoruz: ürün ve fiyat
 * uydurmuyoruz, link de hiçbir zaman kırılmıyor. Affiliate hesapları açıldığında
 * yalnızca bu dosyadaki `wrap` fonksiyonlarını güncellemek yeterli.
 *
 * - Amazon: NEXT_PUBLIC_AMAZON_TAG tanımlanırsa ?tag= otomatik eklenir.
 * - Trendyol / Hepsiburada: partner panelindeki derin link (deeplink) biçimi
 *   belli olunca ilgili wrap fonksiyonuna eklenir.
 */

export type Store = {
  id: "trendyol" | "hepsiburada" | "amazon";
  name: string;
  color: string;
  url: (query: string) => string;
};

const amazonTag = process.env.NEXT_PUBLIC_AMAZON_TAG;

function wrapTrendyol(url: string) {
  return url;
}

function wrapHepsiburada(url: string) {
  return url;
}

export const stores: Store[] = [
  {
    id: "trendyol",
    name: "Trendyol",
    color: "#F27A1A",
    url: (q) => wrapTrendyol(`https://www.trendyol.com/sr?q=${encodeURIComponent(q)}`),
  },
  {
    id: "hepsiburada",
    name: "Hepsiburada",
    color: "#FF6000",
    url: (q) => wrapHepsiburada(`https://www.hepsiburada.com/ara?q=${encodeURIComponent(q)}`),
  },
  {
    id: "amazon",
    name: "Amazon",
    color: "#232F3E",
    url: (q) =>
      `https://www.amazon.com.tr/s?k=${encodeURIComponent(q)}${amazonTag ? `&tag=${encodeURIComponent(amazonTag)}` : ""}`,
  },
];
