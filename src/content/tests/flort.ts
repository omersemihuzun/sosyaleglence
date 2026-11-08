import type { Test } from "@/lib/types";

export const flort: Test = {
  slug: "flort-tarzi-testi",
  title: "Flört Tarzın Ne?",
  summary: "İlk adımı atan mısın, attıran mı? Mesajı hemen mi görürsün, üç saat mi bekletirsin?",
  intro:
    "Herkesin bir flört imzası var. Kimi cesur hamleler yapar, kimi kendini zor buldurur, kimi ilk buluşmada geleceği planlar, kimi her şeyi espriyle çözer. 15 durumda ilk içgüdünü seç.",
  emoji: "😏",
  color: "#B0287A",
  category: "kişilik",
  metaDescription:
    "Flört tarzı testi: Avcı mı, ulaşılmaz mı, romantik mi, esprili mi? 15 gerçekçi flört senaryosuyla tarzını ve sana en uygun tipi öğren.",
  dimensions: [
    { id: "cesaret", label: "Girişkenlik", low: "Beklersin", high: "İlk adımı sen atarsın" },
    { id: "oyun", label: "Zor beğenilirlik", low: "Açık kart", high: "Kendini zor buldurursun" },
    { id: "romantizm", label: "Romantizm", low: "Ayakları yere basar", high: "Hemen hayal kurarsın" },
    { id: "mizah", label: "Mizah", low: "Ciddi yaklaşırsın", high: "Espriyle flört edersin" },
  ],
  questions: [
    {
      text: "Bir arkadaş ortamında birini çok beğendin. Henüz tanışmadınız.",
      options: [
        { text: "Yanına gider, kendimi tanıtırım.", scores: { cesaret: 3 } },
        { text: "Uzaktan göz teması kurarım, o gelsin.", scores: { oyun: 3 } },
        { text: "Ortamı güldürecek bir şey söyleyip dikkatini çekerim.", scores: { mizah: 3, cesaret: 1 } },
        { text: "Daha konuşmadan aklımda ilk buluşmamızı hayal ederim.", scores: { romantizm: 3 } },
      ],
    },
    {
      text: "Beğendiğin kişiden mesaj geldi.",
      options: [
        { text: "Hemen cevap veririm, neden bekleyeyim?", scores: { cesaret: 2, romantizm: 1 } },
        { text: "Görürüm ama biraz bekletirim.", scores: { oyun: 3 } },
        { text: "Komik bir GIF ya da meme ile cevap veririm.", scores: { mizah: 3 } },
        { text: "Ne yazacağımı uzun uzun düşünür, birkaç kez yazıp silerim.", scores: { romantizm: 2 } },
      ],
    },
    {
      text: "İlk buluşma yerini sen seçeceksin.",
      options: [
        { text: "Mumlu, sakin bir restoran ya da manzaralı bir yer.", scores: { romantizm: 3 } },
        { text: "Bowling, karaoke ya da tuhaf bir müze. Eğlenceli olsun.", scores: { mizah: 2, cesaret: 1 } },
        { text: "Kısa bir kahve. Sıkılırsam kaçış planım olsun.", scores: { oyun: 2 } },
        { text: "Plan yapar, rezervasyonu ben hallederim.", scores: { cesaret: 3 } },
      ],
    },
    {
      text: "Buluşmanın ortasında ortama tuhaf bir sessizlik çöktü.",
      options: [
        { text: "Kendimle dalga geçerek buzları kırarım.", scores: { mizah: 3 } },
        { text: "\"Sence ideal hafta sonu nasıl olur?\" gibi derin bir soru sorarım.", scores: { romantizm: 2 } },
        { text: "Sessizlik bana sorun değil. Onun konuşmasını beklerim.", scores: { oyun: 2 } },
        { text: "Yeni bir konu açarım, kontrol bende.", scores: { cesaret: 2 } },
      ],
    },
    {
      text: "Buluşma çok iyi geçti. Şimdi ne olacak?",
      options: [
        { text: "\"Tekrar görüşelim\" diye ben söylerim.", scores: { cesaret: 3 } },
        { text: "Onun yazmasını beklerim.", scores: { oyun: 3 } },
        { text: "Eve gidince arkadaşlarıma her saniyesini anlatırım. Galiba aşık oldum.", scores: { romantizm: 3 } },
        { text: "Buluşmadan kalan bir esprimizle mesaj atarım.", scores: { mizah: 2, cesaret: 1 } },
      ],
    },
    {
      text: "Beğendiğin kişi bir süredir ilgisiz davranıyor.",
      options: [
        { text: "Direkt sorarım: \"Aramızda bir şey var mı, yok mu?\"", scores: { cesaret: 3 } },
        { text: "Ben de geri çekilirim, o kaybettiğini anlasın.", scores: { oyun: 3 } },
        { text: "Bunun neden olduğuna dair kafamda romanlar yazarım.", scores: { romantizm: 2 } },
        { text: "\"Hayattasın değil mi?\" diye şakayla dürterim.", scores: { mizah: 3 } },
      ],
    },
    {
      text: "Flört ettiğin kişi sana iltifat etti.",
      options: [
        { text: "Utanır ama içten içe eririm.", scores: { romantizm: 2 } },
        { text: "\"Biliyorum\" der, göz kırparım.", scores: { oyun: 2, mizah: 1 } },
        { text: "Komik bir cevapla geçiştiririm.", scores: { mizah: 2 } },
        { text: "Teşekkür edip ben de ona iltifat ederim.", scores: { cesaret: 2 } },
      ],
    },
    {
      text: "Uygulamada eşleştin. İlk mesajın nasıl olur?",
      options: [
        { text: "Profilindeki bir detayla ilgili esprili bir soru.", scores: { mizah: 3 } },
        { text: "\"Merhaba, bu hafta bir kahve içelim mi?\"", scores: { cesaret: 3 } },
        { text: "Ben yazmam. O yazsın.", scores: { oyun: 3 } },
        { text: "Profilinden etkilendiğim şeyi samimice yazarım.", scores: { romantizm: 2 } },
      ],
    },
    {
      text: "Hoşlandığın kişinin doğum günü. Henüz sevgili değilsiniz.",
      options: [
        { text: "Anlamlı, kişiye özel bir hediye alırım.", scores: { romantizm: 3 } },
        { text: "Komik bir hediye ya da içimizdeki bir espriye gönderme.", scores: { mizah: 3 } },
        { text: "Sadece mesajla kutlarım, abartmayayım.", scores: { oyun: 2 } },
        { text: "Onu yemeğe davet ederim.", scores: { cesaret: 2, romantizm: 1 } },
      ],
    },
    {
      text: "Arkadaşların seni flörtte nasıl tarif eder?",
      options: [
        { text: "\"Gözüne kestirdi mi bitti.\"", scores: { cesaret: 3 } },
        { text: "\"Kimse ne düşündüğünü bilmez.\"", scores: { oyun: 3 } },
        { text: "\"İkinci buluşmada düğün planlıyor.\"", scores: { romantizm: 3 } },
        { text: "\"Herkesi güldürüyor ama ciddi olduğunda anlamak zor.\"", scores: { mizah: 3 } },
      ],
    },
    {
      text: "\"Biz neyiz?\" konuşması gelmek üzere.",
      options: [
        { text: "Konuyu ilk ben açarım.", scores: { cesaret: 3 } },
        { text: "Açmam. Netlik biraz büyüyü bozar.", scores: { oyun: 3 } },
        { text: "Bu konuşmayı haftalardır bekliyordum.", scores: { romantizm: 3 } },
        { text: "\"Bence biz bir sitcom'uz\" diye bir espri yaparım, sonra konuşuruz.", scores: { mizah: 2 } },
      ],
    },
    {
      text: "Ona yazmak için aklına harika bir şey geldi ama son mesaj senden.",
      options: [
        { text: "Yine yazarım. Sayı tutmuyorum.", scores: { cesaret: 2 } },
        { text: "Beklerim. Üst üste yazmam.", scores: { oyun: 3 } },
        { text: "Yazarım. Komikse sorun yok.", scores: { mizah: 2, cesaret: 1 } },
        { text: "Yazarım ama cevap gelene kadar ekrana bakarım.", scores: { romantizm: 2 } },
      ],
    },
    {
      text: "Seni en çok ne etkiler?",
      options: [
        { text: "Kendinden emin ve net biri.", scores: { cesaret: 2 } },
        { text: "Çözülmesi zor, biraz gizemli biri.", scores: { oyun: 2 } },
        { text: "Romantik jestler ve el yazısıyla notlar.", scores: { romantizm: 3 } },
        { text: "Beni gülmekten ağlatan biri.", scores: { mizah: 3 } },
      ],
    },
    {
      text: "Sevgilin olmayan ama aranızda bir şeyler olan biri, başka biriyle görüşüyor.",
      options: [
        { text: "Onu kaybetmeden hamlemi yaparım.", scores: { cesaret: 3 } },
        { text: "Umursamıyormuş gibi davranırım.", scores: { oyun: 3 } },
        { text: "Kalbim kırılır, o hikâye bitmiş gibi hissederim.", scores: { romantizm: 3 } },
        { text: "Arkadaşlarımla bu durumu dalgaya alırım.", scores: { mizah: 2 } },
      ],
    },
    {
      text: "Mükemmel flörtün sonunda ne olur?",
      options: [
        { text: "Film gibi bir aşk.", scores: { romantizm: 3 } },
        { text: "Benim istediğim gibi ilerleyen, net bir ilişki.", scores: { cesaret: 2 } },
        { text: "Hep biraz merak uyandıran, hiç sıkıcılaşmayan bir şey.", scores: { oyun: 2 } },
        { text: "En iyi arkadaşım olan bir sevgili.", scores: { mizah: 2 } },
      ],
    },
  ],
  results: [
    {
      id: "avci",
      name: "Avcı",
      emoji: "🏹",
      tagline: "Beğendin mi, beklemezsin.",
      profile: { cesaret: 75, oyun: 10, romantizm: 25, mizah: 25 },
      color: "#D7102F",
      description: [
        "Flörtte oyun oynamıyorsun. Beğendiğin birine yaklaşıyor, plan yapıyor, ne istediğini açıkça söylüyorsun. Mesaj saymak, beklemek, ima etmek sana zaman kaybı gibi geliyor.",
        "Bu netlik çoğu insanı rahatlatıyor. Seninle \"Acaba beni beğeniyor mu?\" sorusu çok uzun sürmüyor. Reddedilmek de seni dünyadan soğutmuyor.",
        "Dikkat etmen gereken tek şey tempo. Herkes senin hızında ilerlemeyebilir. Bazen bir adım geri durmak, karşı tarafa da adım atma fırsatı verir.",
      ],
      strengths: ["Netsin ve kendine güveniyorsun", "Reddedilmeden korkmuyorsun", "Zaman kaybettirmiyorsun"],
      watchOut: ["Çok hızlı gitmek karşı tarafı ürkütebilir", "Kovalamanın heyecanı bitince ilgin azalabilir"],
      bestMatch: "esprili",
    },
    {
      id: "ulasilmaz",
      name: "Ulaşılmaz Yıldız",
      emoji: "⭐",
      tagline: "Seni kazanmak emek ister. Sen de bunu bilirsin.",
      profile: { cesaret: 10, oyun: 75, romantizm: 20, mizah: 20 },
      color: "#4C1D95",
      description: [
        "Mesajları bekletiyorsun, kartlarını kolay açmıyorsun, ilk adımı karşı tarafa bırakıyorsun. Gizem senin süper gücün ve insanlar bu yüzden seni merak ediyor.",
        "Bu tarz çoğu zaman bir koruma kalkanı. Ne hissettiğini göstermezsen incinme riskin de azalıyor. Ama kalkan, doğru kişinin de sana ulaşmasını zorlaştırabiliyor.",
        "Kendini zor buldurmak flörtü heyecanlı tutar. İlişkiye geçtikten sonra ise biraz açık kart oynamak gerçek yakınlığın anahtarı.",
      ],
      strengths: ["Gizemli ve çekicisin", "Kendine değer veriyorsun", "Duygularını kolay kolay ele vermiyorsun"],
      watchOut: ["Çok fazla oyun, ilgisizlik olarak algılanabilir", "Doğru kişiyi \"beklemekten\" kaçırabilirsin"],
      bestMatch: "avci",
    },
    {
      id: "romantik",
      name: "Romantik Hayalperest",
      emoji: "🌹",
      tagline: "İlk buluşmadan sonra isim düşünmeye başlarsın.",
      profile: { cesaret: 20, oyun: 15, romantizm: 75, mizah: 15 },
      color: "#E0567A",
      description: [
        "Sen flört etmiyorsun, aşık oluyorsun. Küçük bir jest, güzel bir mesaj ya da derin bir sohbet aklında hemen bir hikâyeye dönüşüyor. Gelecek planları, ortak ev, belki bir köpek...",
        "Bu açıklık ve samimiyet çok değerli. Seninle olan kişi gerçekten istendiğini hissediyor. Ama bazen hikâyeyi gerçek kişiden önce yazdığın için, karşındakini tanımadan ona âşık olabiliyorsun.",
        "Hayal kurmaya devam et, sadece biraz yavaş. Birini tanımanın da kendine has bir romantizmi var.",
      ],
      strengths: ["Çok samimi ve sıcaksın", "Romantik jestlerde ustasın", "Sevgini saklamıyorsun"],
      watchOut: ["Kişiyi tanımadan idealleştirme", "Beklentiler büyüdükçe hayal kırıklığı da büyür"],
      bestMatch: "esprili",
      giftLink: { href: "/hediye/yildonumu-hediyesi", label: "Romantik ruhlar için anı dolu hediyeler" },
    },
    {
      id: "esprili",
      name: "Esprili Flörtçü",
      emoji: "🃏",
      tagline: "Güldürdün mü, yarısını kazandın.",
      profile: { cesaret: 25, oyun: 20, romantizm: 15, mizah: 75 },
      color: "#C2410C",
      description: [
        "Senin flört dilin mizah. İç esprilerle, komik mesajlarla, absürt fikirlerle yakınlaşıyorsun. Seninle buluşmak hiç sıkıcı olmuyor ve insanlar yanında kendilerini rahat hissediyor.",
        "Ama espri bazen bir kaçış yolu da olabiliyor. Ciddi bir an geldiğinde, örneğin \"Biz neyiz?\" konuşmasında, şaka yapmak karşı tarafın seni anlamasını zorlaştırabilir.",
        "En güçlü hâlin, güldürdükten sonra bir an ciddileşip gerçekten ne hissettiğini söylediğin an.",
      ],
      strengths: ["Buzları anında kırıyorsun", "Birlikte olmak çok keyifli", "Gerginliği dağıtmakta ustasın"],
      watchOut: ["Duygularını esprinin arkasına saklama", "Ciddi anlarda şaka yapmak karşı tarafı kırabilir"],
      bestMatch: "romantik",
      giftLink: { href: "/hediye?ilgi=oyun,hobi#bulucu", label: "Birlikte gülmelik oyun ve hobi hediyeleri" },
    },
    {
      id: "dengeli",
      name: "Akışına Bırakan",
      emoji: "🌊",
      tagline: "Ne kovalarsın ne kaçarsın. Olacaksa olur.",
      profile: { cesaret: 40, oyun: 35, romantizm: 40, mizah: 40 },
      color: "#2F7D6D",
      description: [
        "Senin belirgin bir flört stratejin yok ve bu aslında bir güç. Duruma göre bazen ilk adımı atıyor, bazen bekliyor, bazen güldürüyor, bazen romantikleşiyorsun.",
        "Bu esneklik farklı tipte insanlarla uyum sağlamanı kolaylaştırıyor. Karşındakinin enerjisini okuyup ona göre davranıyorsun.",
        "Sadece şunu unutma: Akışına bırakmak bazen kararsızlık gibi görünebilir. Gerçekten birini istediğinde bunu belli etmekten çekinme.",
      ],
      strengths: ["Esnek ve uyumlusun", "Karşındakini iyi okuyorsun", "Flörtü rahat ve doğal tutuyorsun"],
      watchOut: ["Kararsız görünebilirsin", "Akışa bırakmak bazen fırsatı kaçırmak demek"],
      bestMatch: "avci",
    },
  ],
};
