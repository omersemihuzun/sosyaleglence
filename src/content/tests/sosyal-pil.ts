import type { Test } from "@/lib/types";

export const sosyalPil: Test = {
  slug: "sosyal-pil-testi",
  title: "Sosyal Pilin Ne Kadar?",
  summary: "Cuma 21:00, telefon çalıyor: \"Hemen çık!\" Koşar mısın, telefonu ters mi çevirirsin?",
  intro:
    "Kimi insanlarla şarj olur, kimi yalnız kalınca. Kimi önceden planlar, kimi beş dakika önce karar verir. 16 gündelik durumda ilk içgüdünü seç, sosyal pilinin nasıl çalıştığını gör.",
  emoji: "🔋",
  color: "#0E7C66",
  category: "kişilik",
  metaDescription:
    "Sosyal pil testi: İçe dönük müsün, dışa dönük mü, ikisinin arası mı? 16 gündelik senaryoyla sosyal enerjini, yalnız kalma ihtiyacını ve spontanlığını ölç.",
  dimensions: [
    { id: "sosyal", label: "Sosyal enerji", low: "Kalabalık yorar", high: "İnsanlarla şarj olursun" },
    { id: "yenilenme", label: "Yalnız kalma ihtiyacı", low: "Hiç gerekmez", high: "Şarj için şart" },
    { id: "spontan", label: "Spontanlık", low: "Her şey planlı", high: "Beş dakikada hazırsın" },
  ],
  questions: [
    {
      text: "Cuma akşamı 21:00. Arkadaşın arıyor: \"Hemen çık, herkes burada!\"",
      options: [
        { text: "\"Geliyorum, on beş dakikaya oradayım.\"", scores: { sosyal: 2, spontan: 3 } },
        { text: "\"Bu akşam evdeyim, yarın olur mu?\"", scores: { yenilenme: 3 } },
        { text: "Önce kimlerin orada olduğunu sorarım. Tanıdıklar çoksa giderim.", scores: { sosyal: 2 } },
        { text: "Giderim ama bir saat sonra bir bahaneyle kalkarım.", scores: { sosyal: 1, yenilenme: 2 } },
      ],
    },
    {
      text: "Yoğun bir haftanın ardından ideal cumartesin hangisi?",
      options: [
        { text: "Kahvaltı buluşması, öğleden sonra kahve, akşam ev partisi.", scores: { sosyal: 3 } },
        { text: "Telefon sessizde, dizi, battaniye.", scores: { yenilenme: 3 } },
        { text: "Sabah kimseyle konuşmam, akşam küçük bir grupla yemek.", scores: { yenilenme: 1, sosyal: 1 } },
        { text: "Hiç plan yapmam. Gün ne getirirse.", scores: { spontan: 3 } },
      ],
    },
    {
      text: "Yeni işinin ilk günü, öğle arası geldi.",
      options: [
        { text: "Masadaki herkesle tanışır, hep birlikte yemeğe çıkarım.", scores: { sosyal: 3, spontan: 1 } },
        { text: "Kulaklığımı takıp yalnız yerim, zamanla kaynaşırım.", scores: { yenilenme: 3 } },
        { text: "Biri davet ederse memnuniyetle giderim.", scores: { sosyal: 1 } },
        { text: "Ofisin çevresini keşfetmeye çıkarım, belki yolda biriyle tanışırım.", scores: { spontan: 2 } },
      ],
    },
    {
      text: "Doğum günün yaklaşıyor.",
      options: [
        { text: "Büyük bir parti. Herkes gelsin.", scores: { sosyal: 3 } },
        { text: "En yakın üç kişiyle sakin bir yemek.", scores: { yenilenme: 2 } },
        { text: "O gün nasıl hissedersem öyle. Son dakika karar veririm.", scores: { spontan: 3 } },
        { text: "Bir hafta önceden mekânı, listeyi, saati ayarlarım.", scores: { sosyal: 1 } },
      ],
    },
    {
      text: "Partide tanımadığın biriyle sohbetin uzadı.",
      options: [
        { text: "Harika. Yeni insanlar beni besler.", scores: { sosyal: 3 } },
        { text: "Bir süre sonra kibarca uzaklaşıp nefes alacak bir köşe ararım.", scores: { yenilenme: 2 } },
        { text: "Sohbet iyiyse \"Hadi başka yere geçelim\" derim.", scores: { spontan: 2, sosyal: 1 } },
        { text: "Arkadaşımı da yanımıza çağırırım, üçümüz daha rahat ederiz.", scores: { sosyal: 1 } },
      ],
    },
    {
      text: "Tatil için hangisi?",
      options: [
        { text: "Kalabalık bir arkadaş grubuyla villa.", scores: { sosyal: 3 } },
        { text: "Tek başıma sessiz bir kasaba.", scores: { yenilenme: 3 } },
        { text: "Bilet alalım, gerisini orada düşünürüz.", scores: { spontan: 3 } },
        { text: "İki kişilik, her günü planlanmış bir rota.", scores: { sosyal: 1 } },
      ],
    },
    {
      text: "Kalabalık ve uzun bir günün sonunda eve vardın.",
      options: [
        { text: "Hâlâ enerjim var, birine yazıp gece için plan yaparım.", scores: { sosyal: 2, spontan: 1 } },
        { text: "Birkaç saat kimseyle konuşmamam lazım.", scores: { yenilenme: 3 } },
        { text: "Yorgunum ama güzel bir yorgunluk.", scores: { sosyal: 1 } },
        { text: "Çok eğlendim ama ertesi gün kimseyi görmek istemem.", scores: { sosyal: 1, yenilenme: 2 } },
      ],
    },
    {
      text: "Arkadaş grubunda 87 okunmamış mesaj var.",
      options: [
        { text: "Hepsini okur, her konuya bir şey yazarım.", scores: { sosyal: 3 } },
        { text: "Grup zaten sessizde. Haftada bir bakarım.", scores: { yenilenme: 3 } },
        { text: "Bir plan kuruluyorsa hemen \"Ben varım\" yazarım.", scores: { spontan: 2, sosyal: 1 } },
        { text: "Sadece beni etiketleyenlere bakarım.", scores: {} },
      ],
    },
    {
      text: "Arkadaşın akşamki planı son dakikada iptal etti.",
      options: [
        { text: "İçten içe sevinirim. Ev, çay, kitap.", scores: { yenilenme: 3 } },
        { text: "Hemen başka birini arayıp yeni bir plan kurarım.", scores: { sosyal: 2, spontan: 2 } },
        { text: "Biraz bozulurum, o planı bekliyordum.", scores: { sosyal: 1 } },
        { text: "Kendi başıma dışarı çıkar, nereye gideceğime yolda karar veririm.", scores: { spontan: 2 } },
      ],
    },
    {
      text: "Asansörde komşunla karşılaştın.",
      options: [
        { text: "Sohbet ederim, asansör durunca kapıda devam ederiz.", scores: { sosyal: 3 } },
        { text: "Selam verip telefonuma bakarım.", scores: { yenilenme: 2 } },
        { text: "Hava durumu kadar konuşurum.", scores: {} },
        { text: "Konu açılırsa onu akşam çaya çağırırım.", scores: { sosyal: 1, spontan: 2 } },
      ],
    },
    {
      text: "Uzun zamandır konuşmadığın bir arkadaşın arıyor.",
      options: [
        { text: "Hemen açarım, sesini duymak güzel.", scores: { sosyal: 2 } },
        { text: "Açmam, sonra mesaj atarım.", scores: { yenilenme: 3 } },
        { text: "Uygunsam açarım, değilsem ne zaman döneceğimi yazarım.", scores: { sosyal: 1 } },
        { text: "Açarım ve sohbet genelde aynı gün bir buluşmaya döner.", scores: { spontan: 3, sosyal: 1 } },
      ],
    },
    {
      text: "Bir müzik festivalindesin.",
      options: [
        { text: "Ön sıralar, kalabalığın tam ortası.", scores: { sosyal: 3 } },
        { text: "Kenarda, kalabalıktan uzak bir köşe.", scores: { yenilenme: 2 } },
        { text: "Programı önceden çıkarırım, sadece onlara giderim.", scores: { sosyal: 1 } },
        { text: "Yolda tanıştığım insanlarla takılıp ekibimi kaybederim.", scores: { spontan: 3 } },
      ],
    },
    {
      text: "Hafta içi akşamların genelde nasıl geçer?",
      options: [
        { text: "Neredeyse her akşam bir buluşma olur.", scores: { sosyal: 3 } },
        { text: "Hafta içi bana ait. Kimseyi görmem.", scores: { yenilenme: 3 } },
        { text: "Önceden ayarlanmış bir iki buluşma.", scores: { sosyal: 1 } },
        { text: "Belli olmaz. O gün ne istersem.", scores: { spontan: 2 } },
      ],
    },
    {
      text: "Biri sana \"Sen çok sessizsin\" dedi.",
      options: [
        { text: "Bunu bana kimse söylemez.", scores: { sosyal: 3 } },
        { text: "Evet, ve bundan memnunum.", scores: { yenilenme: 3 } },
        { text: "Yeni ortamlarda öyleyim. Açılınca susmam.", scores: { sosyal: 1, yenilenme: 1 } },
        { text: "O gün öyleydim. Yarın bambaşka biri olabilirim.", scores: { spontan: 2 } },
      ],
    },
    {
      text: "Bir davetten önce neler hissedersin?",
      options: [
        { text: "Heyecanlanırım, kimlerle tanışacağımı merak ederim.", scores: { sosyal: 3 } },
        { text: "Gitmeden önce biraz yalnız kalıp enerji toplamam lazım.", scores: { yenilenme: 3 } },
        { text: "Kıyafet, saat, ulaşım: hepsi bir gün önceden belli.", scores: { sosyal: 1 } },
        { text: "Gidip gitmeyeceğime çıkmadan beş dakika önce karar veririm.", scores: { spontan: 3 } },
      ],
    },
    {
      text: "Arkadaşların seni tek cümleyle nasıl anlatır?",
      options: [
        { text: "\"Ortamın neşesi.\"", scores: { sosyal: 3 } },
        { text: "\"Ulaşması zor ama değer.\"", scores: { yenilenme: 3 } },
        { text: "\"Her buluşmayı organize eden.\"", scores: { sosyal: 2 } },
        { text: "\"Ne zaman ne yapacağı belli olmayan.\"", scores: { spontan: 3 } },
      ],
    },
  ],
  results: [
    {
      id: "sinirsiz-sarj",
      name: "Sınırsız Şarj",
      emoji: "⚡",
      tagline: "İnsanlar seni yormaz, şarj eder.",
      profile: { sosyal: 80, yenilenme: 10, spontan: 70 },
      color: "#D7102F",
      description: [
        "Kalabalık bir ortama girdiğinde enerjin düşmüyor, yükseliyor. Yeni insanlarla tanışmak, son dakika planlar, sabaha kadar süren sohbetler... Hepsi sana yakıt oluyor.",
        "Bir planın iptal olması seni üzer, çünkü sen o enerjiyi bekliyordun. Hemen başka bir plan kurman da bu yüzden. Arkadaşların için sen \"bir şey yapalım\" denince ilk aranan kişisin.",
        "Tek dikkat etmen gereken şey: Herkesin pili seninki kadar dayanıklı değil. Bazı arkadaşların bir akşam evde kalmak istediğinde bunu kişisel algılamamak ilişkilerini korur.",
      ],
      strengths: ["Ortamı canlandırıyorsun", "Yeni insanlarla çok hızlı bağ kuruyorsun", "Fırsatları kaçırmıyorsun"],
      watchOut: ["Yalnız kalmaktan kaçmak bazen kendini dinlemeni engelleyebilir", "İçe dönük arkadaşlarını farkında olmadan zorlayabilirsin"],
      bestMatch: "dengeli-pil",
    },
    {
      id: "planli-sosyal",
      name: "Takvimli Sosyal",
      emoji: "📅",
      tagline: "İnsanları seviyorsun, sürprizleri o kadar değil.",
      profile: { sosyal: 60, yenilenme: 30, spontan: 5 },
      color: "#3B6FD9",
      description: [
        "Sosyal hayatın dolu ama düzenli. Buluşmalar önceden ayarlanıyor, saatler belli, kimin geleceği biliniyor. Sen gelmeye söz verdiysen gelirsin.",
        "\"Hemen çık\" mesajları seni biraz geriyor, çünkü günün akışını bozuyor. Ama planladığın bir akşamda en iyi hâlindesin: hazırlıklı, rahat ve tamamen oradasın.",
        "Grubun organizatörü olma ihtimalin yüksek. Sadece bazen bir plansızlığa \"evet\" demek, en unutulmaz gecelerin kapısını açabilir.",
      ],
      strengths: ["Güvenilirsin, sözünü tutuyorsun", "Buluşmaları gerçekleştiren kişi çoğu zaman sensin", "Enerjini iyi yönetiyorsun"],
      watchOut: ["Son dakika değişiklikleri seni gereğinden fazla strese sokabilir", "Her şeyi planlamak bazı anların büyüsünü azaltabilir"],
      bestMatch: "sinirsiz-sarj",
    },
    {
      id: "dengeli-pil",
      name: "Ambivert",
      emoji: "🔋",
      tagline: "Bazen partinin ruhu, bazen battaniyenin altında.",
      profile: { sosyal: 40, yenilenme: 40, spontan: 40 },
      color: "#0E7C66",
      description: [
        "Ne tamamen içe dönüksün ne tamamen dışa dönük. Bir hafta her akşam dışarıdasın, sonraki hafta kimseyi görmek istemiyorsun. Bu kararsızlık değil, kendini iyi tanıman.",
        "Yeni bir ortama uyum sağlamakta zorlanmıyorsun ama sürekli sahnede olmak da istemiyorsun. Duruma göre konuşan da, dinleyen de olabiliyorsun.",
        "Bu esneklik sana farklı tipte arkadaşlarla anlaşma imkânı veriyor. Önemli olan, pilinin ne zaman bittiğini fark edip ona göre davranman.",
      ],
      strengths: ["Her ortama uyum sağlıyorsun", "Hem iyi bir dinleyici hem iyi bir sohbet arkadaşısın", "Kendi ihtiyacını okuyabiliyorsun"],
      watchOut: ["Çevren ne zaman ne istediğini tahmin etmekte zorlanabilir", "\"Hayır\" demek gerektiğinde ertelemeye eğilimlisin"],
      bestMatch: "planli-sosyal",
    },
    {
      id: "sonen-yildiz",
      name: "Kayan Yıldız",
      emoji: "🌠",
      tagline: "Parlarsın, sonra bir hafta ortadan kaybolursun.",
      profile: { sosyal: 70, yenilenme: 70, spontan: 35 },
      color: "#6B2FA0",
      description: [
        "Ortama girdiğinde herkes seni fark ediyor. Konuşuyor, güldürüyor, enerjiyi yükseltiyorsun. Ama eve döndüğünde pilin sıfırda ve günlerce kimseyi görmek istemiyorsun.",
        "Bu ikilik insanları şaşırtabiliyor: \"Dün gece o kadar eğlenceliydin, neden mesajlara dönmüyorsun?\" Cevap basit. Sosyalleşmeyi seviyorsun ama sana pahalıya mal oluyor.",
        "Kendine dürüst ol: Her davete evet demek yerine gerçekten istediklerini seç. Yorgun bir yıldızdan çok, dinlenmiş ve parlayan bir yıldız ol.",
      ],
      strengths: ["Sosyal ortamlarda çok etkileyicisin", "Kendine dönmeyi biliyorsun", "Derin ve eğlenceli tarafların bir arada"],
      watchOut: ["Ani geri çekilmeler arkadaşlarını kırabilir, kısa bir mesaj yeter", "Fazla yüklenip sonra tükenme döngüsü"],
      bestMatch: "dengeli-pil",
    },
    {
      id: "battaniye-modu",
      name: "Battaniye Modu",
      emoji: "🛋️",
      tagline: "En sevdiğin plan, iptal edilen plan.",
      profile: { sosyal: 10, yenilenme: 80, spontan: 15 },
      color: "#8E3B63",
      description: [
        "Kendi alanın senin şarj istasyonun. Kalabalıklar, uzun sohbetler ve sürpriz davetler seni yoruyor. Bir plan iptal olduğunda içinden küçük bir sevinç geçmesi bu yüzden.",
        "Bu, insanları sevmediğin anlamına gelmiyor. Az ama derin ilişkiler kuruyorsun. Seni tanıyan birkaç kişi, ne kadar sadık ve iyi bir dost olduğunu çok iyi biliyor.",
        "Yalnız kalmak sana iyi geliyor ve bu bir eksiklik değil. Sadece arada bir konfor alanının dışına küçük bir adım atmak, hayatına beklenmedik güzellikler katabilir.",
      ],
      strengths: ["Kendinle vakit geçirmekten keyif alıyorsun", "Az ama derin dostluklar kuruyorsun", "İyi bir dinleyicisin"],
      watchOut: ["Uzun süre geri çekilmek yalnızlığa dönüşebilir", "Önemli insanlara arada bir \"seni düşünüyorum\" demeyi unutma"],
      bestMatch: "planli-sosyal",
    },
  ],
};
