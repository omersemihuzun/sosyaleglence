/** Çift oyunları listesi: oyunlar sayfası, menü, arama ve site haritası bu listeyi kullanır. */
export type CiftOyunu = {
  slug: string;
  baslik: string;
  emoji: string;
  ozet: string;
  /** Kaç kişi, nasıl: kart üstündeki küçük etiket */
  etiket: string;
  renk: string;
};

export const ciftOyunlari: CiftOyunu[] = [
  {
    slug: "beni-ne-kadar-taniyorsun",
    baslik: "Beni Ne Kadar Tanıyorsun?",
    emoji: "🕵️",
    ozet: "Kendi cevaplarını ver, linki sevgiline gönder. Bakalım seni ne kadar tanıyor.",
    etiket: "Link ile, uzaktan",
    renk: "#ffd6de",
  },
  {
    slug: "sohbet-kartlari",
    baslik: "Sohbet Kartları",
    emoji: "💬",
    ozet: "Randevu akşamı için 150 soru: eğlenceli, derin, anılar, gelecek ve hayaller.",
    etiket: "Yan yana, tek telefon",
    renk: "#ffe066",
  },
  {
    slug: "dogruluk-mu-cesaret-mi",
    baslik: "Doğruluk mu Cesaret mi? (Çift)",
    emoji: "🎲",
    ozet: "Sırayla seçin: tatlı, eğlenceli ya da cesur. İsterseniz pas geçin, puanı tutalım.",
    etiket: "Yan yana, tek telefon",
    renk: "#cdeffd",
  },
  {
    slug: "hangimiz-daha-cok",
    baslik: "Hangimiz Daha Çok…?",
    emoji: "👉",
    ozet: "Alarmı kim erteler, kim önce özür diler? Her soruda birini seçin, sonunda karnenizi görün.",
    etiket: "Yan yana, tek telefon",
    renk: "#d9f99d",
  },
  {
    slug: "randevu-carki",
    baslik: "Randevu Çarkı",
    emoji: "🎡",
    ozet: "Evde mi dışarıda mı, bütçe ne? Çarkı çevirin, bu akşamın planı çıksın.",
    etiket: "Karar veremeyenlere",
    renk: "#e9d5ff",
  },
];

export function getCiftOyunu(slug: string) {
  return ciftOyunlari.find((o) => o.slug === slug);
}
