import type { Test } from "@/lib/types";

export const ruhYasi: Test = {
  slug: "kahve-siparisi-ruh-yasi-testi",
  title: "Kahve Siparişini Ver, Ruh Yaşını Söyleyelim",
  summary: "Bubble tea mı, sade Türk kahvesi mi? Siparişin, ruhunun kaç yaşında olduğunu ele veriyor.",
  intro:
    "Bir kafedesin ve sıra sende. İçecekten yanındaki atıştırmalığa kadar siparişini adım adım ver. Siparişinden ruh yaşını tahmin edeceğiz. Nüfus cüzdanındaki yaş burada geçmez.",
  emoji: "☕",
  color: "#7C4A2D",
  category: "kişilik",
  format: "secim",
  metaDescription:
    "Kahve siparişini ver, ruh yaşını söyleyelim: ruhen 12 mi, 22 mi, 80 mi? 10 seçimde kahve siparişini oluştur, ruhunun kaç yaşında olduğunu öğren.",
  dimensions: [
    { id: "trend", label: "Trend takibi", low: "Moda umurunda değil", high: "Yeniyi ilk sen denersin" },
    { id: "oyun", label: "Oyunbazlık", low: "Ciddisin", high: "İçindeki çocuk hep orada" },
    { id: "klasik", label: "Klasik zevk", low: "Kurallar sıkıcı", high: "Bildiğini okursun" },
    { id: "sakinlik", label: "Sakinlik", low: "Hep hareket", high: "Acele etmezsin" },
  ],
  questions: [
    {
      text: "Ne içiyorsun?",
      options: [
        { emoji: "🧋", text: "Bubble tea", scores: { oyun: 2, trend: 1 } },
        { emoji: "☕", text: "Sade Türk kahvesi", scores: { klasik: 2 } },
        { emoji: "🧊", text: "Cold brew", scores: { trend: 2 } },
        { emoji: "🫖", text: "Ihlamur", scores: { sakinlik: 2 } },
      ],
    },
    {
      text: "Süt tercihin?",
      options: [
        { emoji: "🥛", text: "Tam yağlı süt", scores: { sakinlik: 1, klasik: 1 } },
        { emoji: "🌾", text: "Yulaf sütü", scores: { trend: 2 } },
        { emoji: "🍦", text: "Üstüne krema", scores: { oyun: 2 } },
        { emoji: "🚫", text: "Sütsüz, sade", scores: { klasik: 2 } },
      ],
    },
    {
      text: "Şurup ekleyelim mi?",
      options: [
        { emoji: "🍬", text: "Karamel ve marshmallow", scores: { oyun: 2 } },
        { emoji: "🌸", text: "Lavanta şurubu", scores: { trend: 2 } },
        { emoji: "🍯", text: "Bir kaşık bal", scores: { sakinlik: 2 } },
        { emoji: "🙅", text: "Şurup mu? Asla", scores: { klasik: 2 } },
      ],
    },
    {
      text: "Hangi boy?",
      options: [
        { emoji: "🥤", text: "En büyüğü", scores: { oyun: 2 } },
        { emoji: "🥃", text: "Küçük fincan", scores: { klasik: 2 } },
        { emoji: "🍵", text: "Orta kupa", scores: { sakinlik: 1, klasik: 1 } },
        { emoji: "🧪", text: "Deneme boyu", scores: { trend: 2 } },
      ],
    },
    {
      text: "Yanına ne alırsın?",
      options: [
        { emoji: "🍩", text: "Renkli donut", scores: { oyun: 2 } },
        { emoji: "🥐", text: "Fıstıklı kruvasan", scores: { trend: 2 } },
        { emoji: "🍬", text: "Lokum", scores: { klasik: 2 } },
        { emoji: "🍪", text: "Ev kurabiyesi", scores: { sakinlik: 2 } },
      ],
    },
    {
      text: "Nerede içiyorsun?",
      options: [
        { emoji: "🎮", text: "Oyun kafede", scores: { oyun: 2 } },
        { emoji: "💻", text: "Laptoplu kafede", scores: { trend: 2 } },
        { emoji: "🏛️", text: "Tarihi kahvehanede", scores: { klasik: 2 } },
        { emoji: "🪴", text: "Kendi balkonumda", scores: { sakinlik: 2 } },
      ],
    },
    {
      text: "Nasıl ödersin?",
      options: [
        { emoji: "📱", text: "Telefonla temassız", scores: { trend: 2 } },
        { emoji: "💵", text: "Nakit, bozuk para", scores: { klasik: 2 } },
        { emoji: "🎁", text: "Arkadaşım ısmarlar", scores: { oyun: 2 } },
        { emoji: "🧾", text: "Veresiye yazdır", scores: { sakinlik: 1, klasik: 1 } },
      ],
    },
    {
      text: "Kahveni içerken ne yaparsın?",
      options: [
        { emoji: "📲", text: "Sosyal medyada gezin", scores: { trend: 2 } },
        { emoji: "📰", text: "Gazete oku", scores: { klasik: 2 } },
        { emoji: "🎲", text: "Tavla at", scores: { oyun: 1, klasik: 1 } },
        { emoji: "🐈", text: "Kafenin kedisini sev", scores: { sakinlik: 2 } },
      ],
    },
    {
      text: "Saat kaç?",
      options: [
        { emoji: "🌅", text: "Sabah altı", scores: { sakinlik: 2 } },
        { emoji: "🕛", text: "Tam öğlen", scores: { klasik: 2 } },
        { emoji: "🌙", text: "Gece on bir", scores: { trend: 2 } },
        { emoji: "🍭", text: "Canım ne zaman isterse", scores: { oyun: 2 } },
      ],
    },
    {
      text: "Fotoğrafını çeker misin?",
      options: [
        { emoji: "📸", text: "Tabii, story", scores: { trend: 2 } },
        { emoji: "😜", text: "Köpük bıyıklı selfie", scores: { oyun: 2 } },
        { emoji: "🙄", text: "Kahve içilir", scores: { klasik: 2 } },
        { emoji: "🧘", text: "Anı yaşarım", scores: { sakinlik: 2 } },
      ],
    },
  ],
  results: [
    {
      id: "ruhen-12",
      name: "Ruhen 12",
      emoji: "🧸",
      tagline: "Krema, marshmallow ve sınırsız merak.",
      profile: { trend: 35, oyun: 80, klasik: 10, sakinlik: 10 },
      color: "#DB2777",
      description: [
        "Siparişin en büyük boy, üstü kremalı, yanında renkli bir donut. İçindeki çocuk sadece yaşamıyor, kafede masayı o seçiyor.",
        "Ruhen 12 olmak demek, hayatı oyun gibi görmek demek. Küçük şeylere sevinebiliyor, kurallara biraz meydan okuyor, etrafındakileri farkında olmadan güldürüyorsun.",
        "Bu enerji büyük bir hediye, sakın kaybetme. Sadece bazen ciddi olman gereken anlarda içindeki yetişkini de çağırmayı unutma.",
      ],
      strengths: ["Neşen bulaşıcı", "Merakın hiç bitmiyor", "Küçük şeylerden mutlu olabiliyorsun"],
      watchOut: ["Sorumluluklar bazen sıkıcı gelebilir", "Sabırsızlanabilirsin"],
      bestMatch: "ruhen-80",
    },
    {
      id: "ruhen-22",
      name: "Ruhen 22",
      emoji: "🛹",
      tagline: "Yeni açılan kafeyi ilk sen keşfedersin.",
      profile: { trend: 80, oyun: 30, klasik: 10, sakinlik: 10 },
      color: "#7C3AED",
      description: [
        "Yulaf sütlü cold brew, lavanta şurubu, laptop açık, fotoğraf story'de. Sen yeni olanı takip eden değil, çoğu zaman ilk deneyensin.",
        "Ruhen 22 olmak, dünyayı keşif alanı olarak görmek demek. Fikirlerin hızlı, ilgi alanların geniş, enerjin yüksek. Gece on birde kahve içmek sana gayet normal geliyor.",
        "Trendleri yakalamak eğlenceli. Ama arada bir eski usul bir Türk kahvesi içip telefonu kapatmak, en havalı hareket olabilir.",
      ],
      strengths: ["Yeniliklere çok açıksın", "Hızlı öğrenirsin", "Enerjin yüksek"],
      watchOut: ["Her şeyi aynı anda yapmaya çalışabilirsin", "Sakin anlarda huzursuzlanırsın"],
      bestMatch: "ruhen-35",
    },
    {
      id: "ruhen-35",
      name: "Ruhen 35",
      emoji: "⚖️",
      tagline: "Ne istediğini biliyorsun, ama yeni şeylere de açıksın.",
      profile: { trend: 40, oyun: 35, klasik: 40, sakinlik: 35 },
      color: "#2F7D6D",
      description: [
        "Siparişin dengeli: biraz klasik, biraz yeni, biraz eğlence. Sen ne istediğini bilen ama kendini bir kalıba hapsetmeyen birisin.",
        "Ruhen 35 olmak, deneyimle merakın buluştuğu nokta. Hem kendi alışkanlıklarını seviyorsun hem de arada sırada menüde yeni bir şey deniyorsun.",
        "Çevrendeki herkes senden tavsiye istiyor olabilir, çünkü sen hem eski hem yeni dünyayı anlıyorsun. Bu dengeyi korumak senin süper gücün.",
      ],
      strengths: ["Dengeli ve olgunsun", "Hem eskiyi hem yeniyi anlarsın", "İyi bir tavsiye verensin"],
      watchOut: ["Fazla temkinli olabilirsin", "Kendine ayırdığın zamanı ihmal etme"],
      bestMatch: "ruhen-22",
    },
    {
      id: "ruhen-50",
      name: "Ruhen 50",
      emoji: "🎩",
      tagline: "Kahve dediğin küçük fincanda, köpüklü olur.",
      profile: { trend: 10, oyun: 15, klasik: 80, sakinlik: 35 },
      color: "#7C4A2D",
      description: [
        "Sade Türk kahvesi, yanında lokum, elinde gazete, tarihi bir kahvehanede. Sen kaliteyi ve geleneği bilen, modaya göre değişmeyen birisin.",
        "Ruhen 50 olmak, ne istediğini çok iyi bilmek demek. Şurup mu? Yulaf sütü mü? Senin için bunlar gereksiz süs. Gerçek lezzet sadelikte.",
        "Bu netlik sana güven veriyor ve etrafındakilere de. Sadece bazen yeni bir şey denemek dünyanı sarsmaz, belki seversin bile.",
      ],
      strengths: ["Zevk sahibisin", "Net ve güvenilirsin", "Kaliteyi hemen fark edersin"],
      watchOut: ["Yeniliklere fazla mesafeli durabilirsin", "Fikrini değiştirmek zor gelebilir"],
      bestMatch: "ruhen-80",
    },
    {
      id: "ruhen-80",
      name: "Ruhen 80",
      emoji: "🫖",
      tagline: "Acele eden kahvesini döker.",
      profile: { trend: 10, oyun: 10, klasik: 45, sakinlik: 80 },
      color: "#5A3E5E",
      description: [
        "Sabah altıda balkonda bir bardak ıhlamur, yanında ev kurabiyesi, kucağında kafenin kedisi. Sen hayatın temposunu kendin belirleyen birisin.",
        "Ruhen 80 olmak bilgelik demek. Acele etmeden yaşamanın, küçük anların ve sessizliğin kıymetini biliyorsun. İnsanlar yanında yavaşlıyor ve rahatlıyor.",
        "Bu huzur bulunmaz bir şey. Sadece bazen gece on birde dışarı çıkıp çılgın bir şey yapmak da ruhuna iyi gelebilir. Torunlarına anlatacak hikâyeler lazım.",
      ],
      strengths: ["Sakin ve bilgesin", "İnsanları rahatlatırsın", "Anı yaşamayı bilirsin"],
      watchOut: ["Yeni deneyimleri erteleyebilirsin", "Rutin seni fazla sarabilir"],
      bestMatch: "ruhen-12",
    },
  ],
};
