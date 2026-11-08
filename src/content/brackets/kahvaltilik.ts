import type { Bracket } from "@/lib/bracket-types";

export const kahvaltilik: Bracket = {
  slug: "en-iyi-kahvaltilik",
  title: "En İyi Kahvaltılık",
  prompt: "Kahvaltıda sadece biri olacak: hangisi?",
  summary: "Sucuklu yumurta mı, bal kaymak mı, simit mi? Türk kahvaltısının şampiyonunu eleme usulü seç.",
  emoji: "🍳",
  color: "#CA8A04",
  metaDescription:
    "En iyi kahvaltılık hangisi? Sucuklu yumurta, bal kaymak, menemen, simit ve daha fazlası. 16 kahvaltılığı eleme usulüyle karşılaştır.",
  championLabel: "Kahvaltı şampiyonum",
  related: { href: "/eleme/turk-mutfaginin-sampiyonu", label: "Türk mutfağının şampiyonunu da seç" },
  items: [
    { id: "sucuklu-yumurta", name: "Sucuklu yumurta", emoji: "🍳", detail: "Sahanda, ekmek bandırmalık", meaning: "Doyurucu ve güçlü bir başlangıç istiyorsun. Güne enerjiyle girmek senin tarzın." },
    { id: "bal-kaymak", name: "Bal kaymak", emoji: "🍯", detail: "Sıcak ekmeğin üstüne", meaning: "Hayatın tatlı anlarını kaçırmıyorsun. Küçük lükslerle kendini şımartmayı biliyorsun." },
    { id: "simit", name: "Taze simit", emoji: "🥯", detail: "Sabah fırından, çay yanında", meaning: "Sade ve pratiksin. Mutluluğun en basit hâlini bilenlerdensin." },
    { id: "beyaz-peynir", name: "Beyaz peynir ve domates", emoji: "🧀", detail: "Zeytinyağı, kekik, salatalık", meaning: "Klasiklere sadıksın. Değişmeyen şeylerin güvenini seviyorsun." },
    { id: "zeytin", name: "Siyah zeytin", emoji: "🫒", detail: "Gemlik, kekikli", meaning: "Kendine has bir damak tadın var. Herkesin sevdiğini değil, gerçekten sevdiğini seçiyorsun." },
    { id: "gozleme", name: "Gözleme", emoji: "🫓", detail: "Peynirli, ıspanaklı, sacda", meaning: "El emeğine değer veriyorsun. Pazar sabahı uzun kahvaltılar senin için bir ritüel." },
    { id: "menemen", name: "Menemen", emoji: "🍅", detail: "Domates, biber, yumurta", meaning: "Sıcak ve paylaşmayı seven birisin. Tavanın ortaya konduğu sofralar seni mutlu ediyor." },
    { id: "borek", name: "Su böreği", emoji: "🥧", detail: "Kat kat, tereyağlı", meaning: "Emeğin ve sabrın tadını biliyorsun. Özel günleri özel lezzetlerle kutlamak istiyorsun." },
    { id: "pisi", name: "Pişi", emoji: "🍩", detail: "Sıcak sıcak, kabarık", meaning: "Çocukluk anıların sana çok yakın. Anne kahvaltısının sıcaklığını hep arıyorsun." },
    { id: "kaygana", name: "Kuymak", emoji: "🧈", detail: "Mısır unu, tereyağı, uzayan peynir", meaning: "Zengin ve iddialı lezzetleri seviyorsun. Bir kahvaltı senin için sıradan olamaz." },
    { id: "cilbir", name: "Çılbır", emoji: "🥚", detail: "Sarımsaklı yoğurt, kızgın tereyağı", meaning: "Farklı lezzetlere açıksın. Klasiklerin yanında sürprizleri de seviyorsun." },
    { id: "tahin-pekmez", name: "Tahin pekmez", emoji: "🥄", detail: "Karıştırıp ekmeğe sürmek", meaning: "Nostaljik birisin. Geleneksel tatlar sana köklerini hatırlatıyor." },
    { id: "kasarli-tost", name: "Kaşarlı tost", emoji: "🥪", detail: "Bol kaşarlı, çıtır", meaning: "Hızlı ama lezzetli olanı tercih ediyorsun. Pratiklikten ödün vermeden keyif almayı biliyorsun." },
    { id: "acuka", name: "Acuka", emoji: "🌶️", detail: "Ceviz, biber salçası, zeytinyağı", meaning: "Biraz acı, biraz cesaret. Güne sıradan başlamaktan hoşlanmıyorsun." },
    { id: "recel", name: "Ev yapımı vişne reçeli", emoji: "🍒", detail: "Kavanozda, tereyağıyla", meaning: "Emek ve sabır sende özel bir yerde. Ev yapımı olanın tadını hiçbir şeye değişmiyorsun." },
    { id: "demli-cay", name: "İnce belli bardakta demli çay", emoji: "🫖", detail: "Kahvaltının olmazsa olmazı", meaning: "Sana göre kahvaltı yemekten çok bir buluşma. Bir bardak çayla başlayan sohbetler senin için her şey." },
  ],
};
