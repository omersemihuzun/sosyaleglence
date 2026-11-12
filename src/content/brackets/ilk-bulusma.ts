import type { Bracket } from "@/lib/bracket-types";

export const ilkBulusma: Bracket = {
  slug: "hayalindeki-ilk-bulusma",
  title: "Hayalindeki İlk Buluşma",
  prompt: "İlk buluşma için hangisi?",
  summary: "Klasik kahve mi, karaoke mi, yoksa hayvanat bahçesi mi? İlk buluşma tarzını eleme usulü bul.",
  emoji: "☕",
  color: "#C2410C",
  metaDescription:
    "Hayalindeki ilk buluşma hangisi? 16 ilk buluşma fikrini eleme usulüyle karşılaştır, kazananı bul ve bu seçimin seni nasıl anlattığını öğren.",
  championLabel: "Hayalimdeki ilk buluşma",
  related: { href: "/testler/flort-tarzi-testi", label: "Flört tarzın ne? Testi çöz" },
  items: [
    {
      id: "kahve",
      name: "Sakin bir kafede kahve",
      emoji: "☕",
      detail: "Klasik, güvenli, sohbet odaklı",
      meaning:
        "Sen önce tanımak istiyorsun. Gösteriş değil, gerçek bir sohbet seni etkiliyor. Ayakları yere basan bir romantiksin.",
    },
    {
      id: "aksam-yemegi",
      name: "Şık bir akşam yemeği",
      emoji: "🍷",
      detail: "Mum ışığı, rezervasyon, özenli kıyafet",
      meaning:
        "Emek ve özen senin için önemli. İlk izlenimin değerini biliyorsun ve karşındakinin de çaba göstermesini istiyorsun.",
    },
    {
      id: "karaoke",
      name: "Karaoke gecesi",
      emoji: "🎤",
      detail: "Utanmak yasak, falsolar serbest",
      meaning:
        "Buzları hemen kırmak istiyorsun. Kendini ciddiye almayan, birlikte rezil olmaya razı biri seni çok çekiyor.",
    },
    {
      id: "sahil-yuruyusu",
      name: "Sahilde uzun yürüyüş",
      emoji: "🌊",
      detail: "Dondurma eşliğinde, hedefsiz",
      meaning: "Rahat ve doğal bir bağ arıyorsun. Göz göze oturmak yerine yan yana yürümek sana daha samimi geliyor.",
    },
    {
      id: "muze",
      name: "Müze ya da sergi gezisi",
      emoji: "🖼️",
      detail: "Sohbet için hazır konu, sessiz anlar",
      meaning:
        "Zihinsel bağ senin için çekim kadar önemli. Bir insanın neye nasıl baktığı, sana onun hakkında her şeyi anlatıyor.",
    },
    {
      id: "bowling",
      name: "Bowling ya da bilardo",
      emoji: "🎳",
      detail: "Biraz rekabet, bolca gülüşme",
      meaning: "Oyunbaz bir enerjin var. Birlikte eğlenebiliyorsanız gerisi kendiliğinden gelir diye düşünüyorsun.",
    },
    {
      id: "piknik",
      name: "Parkta piknik",
      emoji: "🧺",
      detail: "Ev yapımı sandviçler, battaniye, kitap",
      meaning:
        "Küçük detaylarla etkilemeyi seviyorsun. Sen hazırlıklı bir romantiksin ve emeğin görünmesi hoşuna gidiyor.",
    },
    {
      id: "konser",
      name: "Küçük bir mekânda canlı müzik",
      emoji: "🎸",
      detail: "Ortak zevkler, kulağa eğilip konuşmak",
      meaning: "Ortak tutkular senin için çok önemli. Aynı şarkıda heyecanlanan biri, seninle aynı frekanstadır.",
    },
    {
      id: "atolye",
      name: "Yemek ya da seramik atölyesi",
      emoji: "🏺",
      detail: "Birlikte acemi olmak",
      meaning:
        "Birlikte bir şey yapmak, seni konuşmaktan daha çok yakınlaştırıyor. Takım olabildiğin birini arıyorsun.",
    },
    {
      id: "sinema",
      name: "Sinema ve sonrasında film yorumu",
      emoji: "🎬",
      detail: "İki saat sessizlik, sonra uzun tartışma",
      meaning:
        "İlk anda baskı istemiyorsun. Ortak bir deneyimden sonra açılan sohbet, sana en doğal başlangıç gibi geliyor.",
    },
    {
      id: "lunapark",
      name: "Lunapark",
      emoji: "🎡",
      detail: "Dönme dolap, pamuk şeker, çığlıklar",
      meaning:
        "İçindeki çocuğu kaybetmemişsin. Adrenalin ve kahkaha seni hızlıca bağlıyor, sıkıcı bir ilk buluşma senin için kabus.",
    },
    {
      id: "gun-batimi-tekne",
      name: "Gün batımında tekne turu",
      emoji: "⛵",
      detail: "Romantik, biraz iddialı",
      meaning:
        "Büyük düşünüyorsun ve unutulmaz anlar istiyorsun. Senin için ilk buluşma bir hikâyenin ilk sayfası, sıradan olamaz.",
    },
    {
      id: "sokak-lezzetleri",
      name: "Sokak lezzetleri turu",
      emoji: "🌯",
      detail: "Kokoreç, midye, tatlıcı: durak durak",
      meaning: "Rahat, spontane ve hayattan keyif alan birisin. Pahalı bir masa değil, iyi bir enerji seni etkiliyor.",
    },
    {
      id: "hayvan-barinagi",
      name: "Hayvan barınağında gönüllülük",
      emoji: "🐶",
      detail: "Köpek gezdirmek, kedi sevmek",
      meaning:
        "Kalbin iyi olan insanlara çekiliyorsun. Birinin hayvanlara nasıl davrandığı, sana onun hakkında en önemli şeyi söylüyor.",
    },
    {
      id: "kitapci",
      name: "Kitapçıda birbirine kitap seçmek",
      emoji: "📚",
      detail: "Sonra kafede neden o kitabı seçtiğini anlatmak",
      meaning: "Derin ve meraklısın. Birinin seni ne kadar anladığını görmek, sana çekimden daha çok şey ifade ediyor.",
    },
    {
      id: "gece-yuruyusu",
      name: "Gece şehirde amaçsız dolaşmak",
      emoji: "🌃",
      detail: "Plan yok, saat yok, nereye giderse",
      meaning:
        "Akışına bırakmayı seviyorsun. Planlanmamış anların büyüsüne inanıyor, en iyi sohbetlerin gece yarısından sonra olduğunu biliyorsun.",
    },
  ],
};
