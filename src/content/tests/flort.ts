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
        { text: "Yanına gidip kendimi tanıtırım; söze bir espriyle girerim.", scores: { cesaret: 2, mizah: 1 } },
        { text: "Göz teması kurar, sonra ilgisizmiş gibi başka yere bakarım.", scores: { oyun: 2, cesaret: 1 } },
        { text: "Ortamı güldürecek bir şey söyleyip dikkatini uzaktan çekerim.", scores: { mizah: 2, oyun: 1 } },
        { text: "Daha konuşmadan kafamda ilk buluşmamızı kurmaya başlarım.", scores: { romantizm: 2, oyun: 1 } },
      ],
    },
    {
      text: "Beğendiğin kişiden akşam saatlerinde bir mesaj geldi.",
      options: [
        { text: "Hemen cevap veririm; ilgimi saklamak için bir sebep görmem.", scores: { cesaret: 2, romantizm: 1 } },
        { text: "Görürüm ama biraz bekletir, sonra kısa ve esprili yazarım.", scores: { oyun: 2, mizah: 1 } },
        { text: "Komik bir GIF ya da caps ile cevap verip sohbeti açarım.", scores: { mizah: 2, cesaret: 1 } },
        { text: "Ne yazacağımı uzun uzun düşünür, birkaç kez yazıp silerim.", scores: { romantizm: 2, oyun: 1 } },
      ],
    },
    {
      text: "İlk buluşma yerini sen seçeceksin.",
      options: [
        { text: "Manzaralı, sakin bir yer; rezervasyonu da ben yaparım.", scores: { romantizm: 2, cesaret: 1 } },
        { text: "Bowling, karaoke ya da tuhaf bir müze; eğlenceli olsun.", scores: { mizah: 2, cesaret: 1 } },
        { text: "Kısa bir kahve; sıkılırsam şık bir kaçış planım olsun.", scores: { oyun: 2, mizah: 1 } },
        {
          text: "Bir akşam yemeği planlar, saatine kadar her şeyi ben ayarlarım.",
          scores: { cesaret: 2, romantizm: 1 },
        },
      ],
    },
    {
      text: "Buluşmanın ortasında masaya tuhaf bir sessizlik çöktü.",
      options: [
        { text: "Kendimle dalga geçen bir espriyle buzları kırarım.", scores: { mizah: 2, cesaret: 1 } },
        {
          text: '"Sence ideal bir pazar nasıl olur?" gibi derin bir soru sorarım.',
          scores: { romantizm: 2, cesaret: 1 },
        },
        { text: "Sessizlik bana sorun değil; gülümser, onun konuşmasını beklerim.", scores: { oyun: 2, romantizm: 1 } },
        { text: "Konuyu tamamen değiştirip sohbetin dümenini ben alırım.", scores: { cesaret: 2, oyun: 1 } },
      ],
    },
    {
      text: "Buluşma beklediğinden çok daha iyi geçti. Şimdi ne olacak?",
      options: [
        { text: '"Tekrar görüşelim" diye daha ayrılmadan ben söylerim.', scores: { cesaret: 2, romantizm: 1 } },
        { text: "Onun yazmasını beklerim; ilk adım bu sefer onda olsun.", scores: { oyun: 2, romantizm: 1 } },
        { text: 'Eve gider gitmez "Çok güzeldi" diye uzun bir mesaj atarım.', scores: { romantizm: 2, cesaret: 1 } },
        { text: "Buluşmadan kalan bir iç espriyle ertesi sabah yazarım.", scores: { mizah: 2, cesaret: 1 } },
      ],
    },
    {
      text: "Beğendiğin kişi bir süredir eskisi kadar ilgili değil.",
      options: [
        { text: 'Direkt sorarım: "Aramızda bir şey var mı, yok mu?"', scores: { cesaret: 2, romantizm: 1 } },
        { text: "Ben de geri çekilirim; kaybettiğini o da anlasın.", scores: { oyun: 2, romantizm: 1 } },
        { text: "Bunun neden olduğuna dair kafamda romanlar yazarım.", scores: { romantizm: 2, oyun: 1 } },
        { text: '"Hayattasın değil mi?" diye şakayla bir dürterim.', scores: { mizah: 2, cesaret: 1 } },
      ],
    },
    {
      text: "Flört ettiğin kişi sana beklemediğin bir anda iltifat etti.",
      options: [
        { text: "Utanır, bir şey diyemem ama içten içe eririm.", scores: { romantizm: 2, oyun: 1 } },
        { text: '"Biliyorum" der, göz kırparım; kolay etkilenmem.', scores: { oyun: 2, mizah: 1 } },
        { text: "Komik bir cevapla geçiştiririm; ciddi anlar bana zor gelir.", scores: { mizah: 2, oyun: 1 } },
        { text: "Teşekkür edip ben de ona hiç beklemediği bir iltifat ederim.", scores: { cesaret: 2, romantizm: 1 } },
      ],
    },
    {
      text: "Uygulamada biriyle eşleştin. İlk mesajın nasıl olur?",
      options: [
        { text: "Profilindeki bir detayla ilgili esprili bir soru sorarım.", scores: { mizah: 2, cesaret: 1 } },
        { text: '"Merhaba, bu hafta bir kahve içelim mi?" diye direkt yazarım.', scores: { cesaret: 2, romantizm: 1 } },
        { text: "İlk mesajı ben atmam; ilgisini çektiysem o yazar.", scores: { oyun: 2, romantizm: 1 } },
        { text: "Profilinde beni etkileyen şeyi samimiyetle yazarım.", scores: { romantizm: 2, cesaret: 1 } },
      ],
    },
    {
      text: "Hoşlandığın kişinin doğum günü. Henüz sevgili değilsiniz.",
      options: [
        { text: "Kişiye özel bir hediye alırım; emek verdiğim belli olsun.", scores: { romantizm: 2, cesaret: 1 } },
        { text: "Komik bir hediye ya da içimizdeki bir espriye gönderme.", scores: { mizah: 2, romantizm: 1 } },
        { text: "Sadece mesajla kutlarım; abartıp kendimi ele vermem.", scores: { oyun: 2, mizah: 1 } },
        { text: "Onu yemeğe davet ederim; doğum günü iyi bir bahane.", scores: { cesaret: 2, mizah: 1 } },
      ],
    },
    {
      text: "Arkadaşların seni flörtte nasıl tarif eder?",
      options: [
        { text: '"Gözüne birini kestirdi mi çekinmeden gider."', scores: { cesaret: 2, romantizm: 1 } },
        { text: '"Kimse ne düşündüğünü bilmez; bazen kendisi de."', scores: { oyun: 2, mizah: 1 } },
        { text: '"İkinci buluşmada düğün şarkısını seçmiş oluyor."', scores: { romantizm: 2, mizah: 1 } },
        { text: '"Herkesi güldürüyor ama ciddi olduğunu anlamak zor."', scores: { mizah: 2, oyun: 1 } },
      ],
    },
    {
      text: '"Biz neyiz?" konuşması gelmek üzere.',
      options: [
        { text: "Konuyu ilk ben açarım; belirsizlik bana göre değil.", scores: { cesaret: 2, romantizm: 1 } },
        { text: "Açmam; fazla netlik bence işin büyüsünü bozar.", scores: { oyun: 2, romantizm: 1 } },
        { text: "Bu konuşmayı haftalardır bekliyordum; kalbim küt küt atar.", scores: { romantizm: 2, oyun: 1 } },
        { text: '"Bence biz bir sitcom\'uz" diye espriyle açar, sonra konuşurum.', scores: { mizah: 2, cesaret: 1 } },
      ],
    },
    {
      text: "Ona yazmak için aklına harika bir şey geldi ama son mesaj senden.",
      options: [
        { text: "Yine yazarım; sayı tutmam, aklıma geleni söylerim.", scores: { cesaret: 2, romantizm: 1 } },
        { text: "Beklerim; üst üste yazmak bana hiç göre değil.", scores: { oyun: 2, romantizm: 1 } },
        { text: "Komikse yazarım; güldürüyorsa kural mural tanımam.", scores: { mizah: 2, cesaret: 1 } },
        { text: "Yazarım ama cevap gelene kadar ekrana bakar dururum.", scores: { romantizm: 2, cesaret: 1 } },
      ],
    },
    {
      text: "Flörtte seni en çok ne etkiler?",
      options: [
        { text: "Kendinden emin, ne istediğini açıkça söyleyen biri.", scores: { cesaret: 2, oyun: 1 } },
        { text: "Çözülmesi zor, biraz gizemli, hep bir adım geride duran biri.", scores: { oyun: 2, romantizm: 1 } },
        { text: "Romantik jestler, el yazısıyla bırakılmış küçük notlar.", scores: { romantizm: 2, cesaret: 1 } },
        { text: "Beni gülmekten ağlatan, kendiyle dalga geçebilen biri.", scores: { mizah: 2, romantizm: 1 } },
      ],
    },
    {
      text: "Sevgilin olmayan ama aranızda bir şeyler olan biri, başka biriyle görüşüyor.",
      options: [
        { text: "Onu kaybetmeden hamlemi yaparım; hislerimi açıkça söylerim.", scores: { cesaret: 2, romantizm: 1 } },
        { text: "Umursamıyormuş gibi davranırım; o da biraz merak etsin.", scores: { oyun: 2, mizah: 1 } },
        { text: "Kalbim kırılır; o hikâye hiç başlamadan bitti sanırım.", scores: { romantizm: 2, oyun: 1 } },
        { text: "Arkadaşlarımla bu durumu bir güzel dalgaya alır, geçerim.", scores: { mizah: 2, oyun: 1 } },
      ],
    },
    {
      text: "Mükemmel bir flörtün sonunda ne olur?",
      options: [
        { text: "Film gibi bir aşk; yıllar sonra anlatılacak cinsten.", scores: { romantizm: 2, cesaret: 1 } },
        { text: "Benim adım attığım, baştan net ilerleyen bir ilişki.", scores: { cesaret: 2, romantizm: 1 } },
        { text: "Hep biraz merak uyandıran, hiç sıkıcılaşmayan bir şey.", scores: { oyun: 2, mizah: 1 } },
        { text: "En yakın arkadaşım da olan, birlikte çok güldüğüm biri.", scores: { mizah: 2, romantizm: 1 } },
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
        'Bu netlik çoğu insanı rahatlatıyor. Seninle "Acaba beni beğeniyor mu?" sorusu çok uzun sürmüyor. Reddedilmek de seni dünyadan soğutmuyor.',
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
      watchOut: ["Çok fazla oyun, ilgisizlik olarak algılanabilir", 'Doğru kişiyi "beklemekten" kaçırabilirsin'],
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
        "Sen flört etmiyorsun, âşık oluyorsun. Küçük bir jest, güzel bir mesaj ya da derin bir sohbet aklında hemen bir hikâyeye dönüşüyor. Gelecek planları, ortak ev, belki bir köpek...",
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
        'Ama espri bazen bir kaçış yolu da olabiliyor. Ciddi bir an geldiğinde, örneğin "Biz neyiz?" konuşmasında, şaka yapmak karşı tarafın seni anlamasını zorlaştırabilir.',
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
