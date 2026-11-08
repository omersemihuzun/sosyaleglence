import type { Test } from "@/lib/types";

export const sevgiliTipi: Test = {
  slug: "hangi-tip-sevgilisin-testi",
  title: "İlişkide Hangi Tip Sevgilisin?",
  summary: "Golden retriever mı, kara kedi mi, kapibara mı? İnternetin sevgili arketiplerinden hangisi sensin?",
  intro:
    "İnternet sevgilileri hayvanlara benzetmeyi çok seviyor: coşkulu golden retriever, gizemli kara kedi, sarsılmaz kapibara, koruyucu ayı. 15 ilişki anında ilk içgüdünü seç, arketipini bul.",
  emoji: "🐾",
  color: "#D97706",
  category: "ilişki",
  metaDescription:
    "Hangi tip sevgilisin testi: Golden retriever, kara kedi, kapibara ya da ayı. 15 ilişki senaryosuyla sevgili arketipini ve sana en uyan tipi öğren.",
  dimensions: [
    { id: "coskun", label: "Coşku", low: "Sakin ifade", high: "Sevgisi taşar" },
    { id: "gizem", label: "Gizem", low: "Açık kitap", high: "Çözülmesi zor" },
    { id: "sakin", label: "Sakinlik", low: "Hareketli", high: "Hiçbir şey sarsmaz" },
    { id: "koruyucu", label: "Koruyuculuk", low: "Alan tanır", high: "Kol kanat gerer" },
  ],
  questions: [
    {
      text: "Sevgilin işten eve döndü. Sen ne yaparsın?",
      options: [
        { text: "Kapıya koşar, sarılır, gününü anlatırım.", scores: { coskun: 2 } },
        { text: "Başımı kaldırıp gülümserim; konuşmak isterse gelir.", scores: { gizem: 2 } },
        { text: "Çayını koymuşumdur, kanepede yer açarım.", scores: { sakin: 2 } },
        { text: "\"Yemek yedin mi? Yorgun görünüyorsun\" diye sorarım.", scores: { koruyucu: 2 } },
      ],
    },
    {
      text: "Arkadaş grubunda sevgilinle ilgili bir şaka yapıldı ve o biraz bozuldu.",
      options: [
        { text: "Hemen konuyu değiştirip ortamı neşelendiririm.", scores: { coskun: 2 } },
        { text: "Ona bir bakış atarım; ikimiz anlarız.", scores: { gizem: 2 } },
        { text: "Sakin kalırım, sonra baş başa konuşuruz.", scores: { sakin: 2 } },
        { text: "\"Tamam, yeter\" deyip şakayı keserim.", scores: { koruyucu: 2 } },
      ],
    },
    {
      text: "Sevgini nasıl gösterirsin?",
      options: [
        { text: "Her gün söyleyerek, sarılarak, mesaj atarak.", scores: { coskun: 2 } },
        { text: "Nadiren söylerim ama söylediğimde çok anlamlıdır.", scores: { gizem: 2 } },
        { text: "Yanında olarak. Sessiz ama hep oradayım.", scores: { sakin: 2 } },
        { text: "Onu koruyarak, ihtiyaçlarını gözeterek.", scores: { koruyucu: 2 } },
      ],
    },
    {
      text: "Bir tartışmanın ortasındasınız.",
      options: [
        { text: "Uzun süre küs kalamam, beş dakikada yanına giderim.", scores: { coskun: 2 } },
        { text: "Biraz çekilirim, ne hissettiğimi önce kendim anlamam lazım.", scores: { gizem: 2 } },
        { text: "Sesimi yükseltmem, sakin bir şekilde konuşmaya devam ederim.", scores: { sakin: 2 } },
        { text: "Kavgayı bırakır, \"Sen iyi misin?\" diye sorarım.", scores: { koruyucu: 2 } },
      ],
    },
    {
      text: "Hafta sonu için ideal planın:",
      options: [
        { text: "Sabah koşusu, öğlen piknik, akşam konser!", scores: { coskun: 2 } },
        { text: "Kimsenin bilmediği küçük bir mekân, sadece ikimiz.", scores: { gizem: 2 } },
        { text: "Hiçbir plan. Kanepe, battaniye, film.", scores: { sakin: 2 } },
        { text: "Onun dinlenebileceği bir gün ayarlarım, işleri ben hallederim.", scores: { koruyucu: 2 } },
      ],
    },
    {
      text: "Sevgilin hasta.",
      options: [
        { text: "Onu güldürmek için komik videolar, mesajlar yağdırırım.", scores: { coskun: 2 } },
        { text: "Sessizce kapısına sevdiği bir şey bırakırım.", scores: { gizem: 2 } },
        { text: "Yanına uzanırım, panik yapmadan iyileşmesini beklerim.", scores: { sakin: 2 } },
        { text: "İlaçlarını, çorbasını, doktorunu ben ayarlarım.", scores: { koruyucu: 2 } },
      ],
    },
    {
      text: "Partide sevgilin tanımadığı insanların arasında kaldı.",
      options: [
        { text: "Onu herkesle tanıştırırım, beş dakikada kaynaşır.", scores: { coskun: 2 } },
        { text: "Ben de köşede onunla kalırım; zaten kalabalığı sevmem.", scores: { gizem: 2 } },
        { text: "Rahat olduğunu bilirim, kendi kendine idare eder.", scores: { sakin: 2 } },
        { text: "Gözüm hep üstündedir, rahatsız olursa hemen yanına giderim.", scores: { koruyucu: 2 } },
      ],
    },
    {
      text: "Arkadaşların seni sevgili olarak nasıl tarif eder?",
      options: [
        { text: "\"Âşık olduğunda kuyruğunu sallıyor.\"", scores: { coskun: 2 } },
        { text: "\"Ne hissettiğini anlamak için şifre lazım.\"", scores: { gizem: 2 } },
        { text: "\"Yanında stres diye bir şey kalmıyor.\"", scores: { sakin: 2 } },
        { text: "\"Sevgilisine laf ettirmez.\"", scores: { koruyucu: 2 } },
      ],
    },
    {
      text: "Sevgilin bir başarı haberi verdi.",
      options: [
        { text: "Çığlık atar, zıplar, herkese anlatırım.", scores: { coskun: 2 } },
        { text: "Gururla gülümserim ve akşam ona özel bir şey hazırlarım.", scores: { gizem: 2 } },
        { text: "\"Biliyordum zaten\" der, sakin sakin kutlarım.", scores: { sakin: 2 } },
        { text: "Hak ettiğini söyler, bundan sonraki adımda ona destek olmayı planlarım.", scores: { koruyucu: 2 } },
      ],
    },
    {
      text: "İlişkinin başında genelde ne olursun?",
      options: [
        { text: "Hemen belli ederim, ilgimi saklayamam.", scores: { coskun: 2 } },
        { text: "Bir süre zor çözülürüm, güvenmem zaman alır.", scores: { gizem: 2 } },
        { text: "Acele etmem, akışında giderim.", scores: { sakin: 2 } },
        { text: "Hemen sahiplenirim; artık o benim sorumluluğumda.", scores: { koruyucu: 2 } },
      ],
    },
    {
      text: "Sevgilin çok kötü bir gün geçirdi ve sinirli.",
      options: [
        { text: "Onu neşelendirmek için ne gerekiyorsa yaparım.", scores: { coskun: 2 } },
        { text: "Alan tanırım; anlatmak isterse anlatır.", scores: { gizem: 2 } },
        { text: "Onun sinirinden etkilenmem, sakinliğimle dengelerim.", scores: { sakin: 2 } },
        { text: "Onu kim üzdüyse onunla ben konuşmak isterim.", scores: { koruyucu: 2 } },
      ],
    },
    {
      text: "Mesajlaşma tarzın:",
      options: [
        { text: "Bol emoji, sesli mesaj, gün içinde onlarca mesaj.", scores: { coskun: 2 } },
        { text: "Kısa ama yerinde. Bazen saatlerce sessiz.", scores: { gizem: 2 } },
        { text: "Rahat. Cevap gelmese de dert etmem.", scores: { sakin: 2 } },
        { text: "\"Eve vardın mı?\" mesajı benden hiç eksik olmaz.", scores: { koruyucu: 2 } },
      ],
    },
    {
      text: "Seni en çok ne kırar?",
      options: [
        { text: "Heyecanımın karşılıksız kalması.", scores: { coskun: 2 } },
        { text: "Alanıma saygı duyulmaması.", scores: { gizem: 2 } },
        { text: "Gereksiz drama ve kaos.", scores: { sakin: 2 } },
        { text: "Yardım etmeme izin verilmemesi.", scores: { koruyucu: 2 } },
      ],
    },
    {
      text: "Sürpriz yapma tarzın:",
      options: [
        { text: "Büyük, gürültülü, herkesin katıldığı bir sürpriz parti.", scores: { coskun: 2 } },
        { text: "Sadece onun anlayacağı gizli bir not ya da hediye.", scores: { gizem: 2 } },
        { text: "Sevdiği yemeği yapıp sessizce masaya koymak.", scores: { sakin: 2 } },
        { text: "Uzun zamandır ertelediği bir işi onun yerine halletmek.", scores: { koruyucu: 2 } },
      ],
    },
    {
      text: "İdeal sevgili için tek kelime:",
      options: [
        { text: "Neşe.", scores: { coskun: 2 } },
        { text: "Derinlik.", scores: { gizem: 2 } },
        { text: "Huzur.", scores: { sakin: 2 } },
        { text: "Güven.", scores: { koruyucu: 2 } },
      ],
    },
  ],
  results: [
    {
      id: "golden-retriever",
      name: "Golden Retriever",
      emoji: "🐶",
      tagline: "Sevdiğinde bütün dünya bunu bilir.",
      profile: { coskun: 75, gizem: 10, sakin: 20, koruyucu: 25 },
      color: "#D97706",
      description: [
        "Sevgin taşıyor ve bunu saklamak aklına bile gelmiyor. Kapıda sarılmalar, gün içinde sesli mesajlar, her başarıya çığlıklarla sevinmek... Seninle ilişki, güneşli bir gün gibi.",
        "En güzel tarafın, partnerinin kendini sevilmiş hissetmesi için tahmin yürütmesine gerek kalmaması. Bunu her gün, sözle ve davranışla gösteriyorsun.",
        "Dikkat edilecek nokta: Heyecanının karşılık bulmadığı anlarda çok kırılabiliyorsun. Herkes sevgisini senin kadar yüksek sesle göstermez; sessiz sevgileri de okumayı öğrenmek seni rahatlatır.",
      ],
      strengths: ["Sevgini açıkça gösteriyorsun", "Ortamın neşesi sensin", "Kin tutmuyor, çabuk barışıyorsun"],
      watchOut: ["Karşılık beklentin yüksek olabilir", "Sakin partnerlerin sevgisini hafife alma"],
      bestMatch: "kara-kedi",
    },
    {
      id: "kara-kedi",
      name: "Kara Kedi",
      emoji: "🐈‍⬛",
      tagline: "Kolay çözülmezsin. Ama çözene her şeyini verirsin.",
      profile: { coskun: 10, gizem: 75, sakin: 25, koruyucu: 20 },
      color: "#1F1147",
      description: [
        "Gizemlisin ve bunu bilerek değil, doğal olarak yapıyorsun. Duygularını hemen göstermiyor, güvenmen için zaman istiyorsun. Ama birine kapını açtığında, o kişi senin en özel köşende yer alıyor.",
        "Sevgin küçük ve derin işaretlerle gelir: sadece onun anlayacağı bir not, tam ihtiyacı olduğu anda yapılan bir jest. Kalabalık kutlamalar değil, baş başa anlar senin dilin.",
        "Partnerin bazen ne hissettiğini anlamakta zorlanabilir. Arada bir duygularını söze dökmek, gizemini bozmaz; ilişkiye güven katar.",
      ],
      strengths: ["Derin ve sadık bir bağ kuruyorsun", "Alan tanımayı ve beklemeyi biliyorsun", "Jestlerin çok anlamlı"],
      watchOut: ["Mesafen ilgisizlik gibi algılanabilir", "Duygularını arada bir yüksek sesle söyle"],
      bestMatch: "golden-retriever",
    },
    {
      id: "kapibara",
      name: "Kapibara",
      emoji: "🦫",
      tagline: "Dünya yansa sen sakin kalırsın. Partnerin de seninle.",
      profile: { coskun: 20, gizem: 20, sakin: 75, koruyucu: 20 },
      color: "#8B6B4A",
      description: [
        "Senin yanında herkes biraz daha sakin. Krizleri büyütmüyor, dramaya kapılmıyor, partnerinin kötü gününü kendi huzurunla dengeliyorsun. İnsanların seninle olmaktan hoşlanmasının sebebi bu.",
        "Sevgini gösteriş yerine istikrarla gösteriyorsun: hep oradasın, hep aynısın. Bu, özellikle hareketli hayatları olan partnerler için paha biçilmez bir liman.",
        "Tek risk, sakinliğinin bazen umursamazlık sanılması. Önemsediğin şeyleri arada bir dile getirmen, partnerine onun da önemli olduğunu hatırlatır.",
      ],
      strengths: ["Krizlerde soğukkanlısın", "Partnerine huzur veriyorsun", "Gereksiz drama yaratmıyorsun"],
      watchOut: ["Sakinliğin ilgisizlik gibi görünebilir", "Rahatsız olduğun şeyleri ertelemeden söyle"],
      bestMatch: "ayi",
    },
    {
      id: "ayi",
      name: "Koruyucu Ayı",
      emoji: "🐻",
      tagline: "Sevdiğine kol kanat gerersin. Kucağın da sıcacık.",
      profile: { coskun: 25, gizem: 15, sakin: 20, koruyucu: 75 },
      color: "#7C4A2D",
      description: [
        "Senin sevgin bir kalkan gibi. Partnerin eve vardı mı, yemek yedi mi, onu üzen biri var mı... Hepsini düşünüyor, gerekirse araya giriyorsun. Seninle olan kişi kendini çok güvende hissediyor.",
        "Bu koruyuculuğun arkasında çok büyük bir şefkat var. Sevdiğinin hayatını kolaylaştırmak, sana en çok anlam veren şey.",
        "Dikkat etmen gereken tek şey denge: Korumak ile onun yerine karar vermek arasında ince bir çizgi var. Partnerinin kendi savaşlarını da verebileceğine güvenmek, sevginin bir başka hâli.",
      ],
      strengths: ["Güvenilir ve sadıksın", "Partnerinin ihtiyaçlarını önceden görüyorsun", "Zor zamanda hep oradasın"],
      watchOut: ["Aşırı korumacılık boğucu olabilir", "Kendi ihtiyaçlarını da unutma"],
      bestMatch: "kapibara",
    },
  ],
};
