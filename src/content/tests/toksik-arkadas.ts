import type { Test } from "@/lib/types";

export const toksikArkadas: Test = {
  slug: "toksik-arkadas-testi",
  title: "Toksik Arkadaş Sen misin?",
  summary: "Herkesin hayatında bir toksik arkadaş var. Eğer aklına kimse gelmiyorsa... bu testi çöz.",
  intro:
    "Toksiklik çoğu zaman masum görünür: küçük bir kıskançlık, \"aramızda kalsın\" diye başlayan bir hikâye, sadece işin düşünce atılan bir mesaj. 15 arkadaşlık anında dürüstçe ne yapacağını seç.",
  emoji: "☢️",
  color: "#65A30D",
  category: "arkadaşlık",
  metaDescription:
    "Toksik arkadaş testi: Kıskançlık, dedikodu, çıkarcılık ve yargılayıcılık eğilimini 15 gerçekçi arkadaşlık senaryosuyla ölç. Arkadaşlıklarında toksik olan sen misin?",
  headline: {
    label: "Toksik arkadaşlık seviyen",
    weights: { kiskanclik: 1, dedikodu: 1, cikar: 1, yargi: 1 },
  },
  dimensions: [
    { id: "kiskanclik", label: "Rekabet", low: "Başarısına sevinirsin", high: "İçin içini yer" },
    { id: "dedikodu", label: "Dedikodu", low: "Sır saklarsın", high: "Haber senden çıkar" },
    { id: "cikar", label: "Çıkarcılık", low: "Her zaman oradasın", high: "Sadece lazım olunca" },
    { id: "yargi", label: "Yargılama", low: "Kabul edersin", high: "Herkese not verirsin" },
  ],
  questions: [
    {
      text: "Yakın arkadaşın hayalindeki işe kabul edildi. Senin başvurun reddedilmişti.",
      options: [
        { text: "Tebrik ederim ama içten içe haksızlık olduğunu düşünürüm.", scores: { kiskanclik: 3 } },
        { text: "\"Torpil mi var?\" diye şakayla karışık sorarım.", scores: { kiskanclik: 2, yargi: 1 } },
        { text: "Kutlama yemeği ayarlarım, sevincini paylaşırım.", scores: {} },
        { text: "Tebrik ederim, sonra belki bana da iş bulabilir diye aklımda tutarım.", scores: { cikar: 2 } },
      ],
    },
    {
      text: "Bir arkadaşın sana çok özel bir sır verdi.",
      options: [
        { text: "Kimseye söylemem.", scores: {} },
        { text: "Sadece en yakın bir kişiye söylerim, o da kimseye söylemez.", scores: { dedikodu: 2 } },
        { text: "Grup içinde üstü kapalı bir ima yaparım.", scores: { dedikodu: 3 } },
        { text: "Söylemem ama aklımın bir köşesinde ona dair fikrim değişir.", scores: { yargi: 2 } },
      ],
    },
    {
      text: "Haftalardır görüşmediğin bir arkadaşın var. Şimdi taşınıyorsun ve yardım lazım.",
      options: [
        { text: "Ona yazarım: \"Uzun zaman oldu, bu arada cumartesi boş musun?\"", scores: { cikar: 3 } },
        { text: "Önce bir kahveye davet eder, sonra yardım isterim.", scores: { cikar: 1 } },
        { text: "Görüşmediğimiz için ondan istemeye utanırım.", scores: {} },
        { text: "Yardım isterim, o da benden bir şey istemişti zamanında.", scores: { cikar: 2 } },
      ],
    },
    {
      text: "Arkadaşın yeni sevgilisinin fotoğrafını gösteriyor.",
      options: [
        { text: "\"Çok tatlı, mutlu görünüyorsun\" derim.", scores: {} },
        { text: "\"Senden biraz kısa ama olsun\" gibi bir yorum yaparım.", scores: { yargi: 3 } },
        { text: "Hemen diğer arkadaşlara da gösteririm.", scores: { dedikodu: 2 } },
        { text: "Benim sevgilim olmadığı için içim burkulur, konuyu değiştiririm.", scores: { kiskanclik: 2 } },
      ],
    },
    {
      text: "Grubun bir üyesi o akşam gelmedi. Masada onun konusu açıldı.",
      options: [
        { text: "Hikâyeye bildiğim yeni detayları eklerim.", scores: { dedikodu: 3 } },
        { text: "\"O zaten hep böyle\" derim.", scores: { yargi: 3 } },
        { text: "\"Burada değilken konuşmayalım\" derim.", scores: {} },
        { text: "Dinlerim, susarım ama sonra ona karşı davranışım değişir.", scores: { yargi: 1, dedikodu: 1 } },
      ],
    },
    {
      text: "Arkadaşın sana kendi yazdığı bir şiiri ya da yaptığı bir işi gösterdi. Pek beğenmedin.",
      options: [
        { text: "Nazikçe neyi beğendiğimi ve neyin geliştirilebileceğini söylerim.", scores: {} },
        { text: "\"Bence bu sana göre değil\" derim.", scores: { yargi: 3 } },
        { text: "Çok güzel derim, sonra başkalarıyla dalga geçerim.", scores: { dedikodu: 2, yargi: 1 } },
        { text: "Benimkinden iyi olmadığı için içten içe rahatlarım.", scores: { kiskanclik: 3 } },
      ],
    },
    {
      text: "Arkadaşın zor bir dönemden geçiyor ve sürekli aynı şeyleri anlatıyor.",
      options: [
        { text: "Dinlemeye devam ederim, ihtiyacı var.", scores: {} },
        { text: "Yavaş yavaş aramalarına dönmemeye başlarım.", scores: { cikar: 3 } },
        { text: "\"Artık bunu aşman lazım\" derim.", scores: { yargi: 2 } },
        { text: "Başkalarına \"Çok yorucu oldu\" diye anlatırım.", scores: { dedikodu: 2, cikar: 1 } },
      ],
    },
    {
      text: "Arkadaşının Instagram'ı patladı, takipçileri hızla artıyor.",
      options: [
        { text: "Paylaşımlarını desteklerim, yorum yaparım.", scores: {} },
        { text: "Artık beğenmemeye başlarım.", scores: { kiskanclik: 3 } },
        { text: "\"Değiştin\" diye takılırım, biraz da ciddi.", scores: { yargi: 2, kiskanclik: 1 } },
        { text: "Benim hesabımı da paylaşmasını isterim.", scores: { cikar: 3 } },
      ],
    },
    {
      text: "Grupta biri bir hata yaptı ve herkesin önünde mahcup oldu.",
      options: [
        { text: "Konuyu değiştirip onu rahatlatırım.", scores: {} },
        { text: "Bu anı grubun iç esprisi yaparım, uzun süre hatırlatırım.", scores: { yargi: 2, dedikodu: 1 } },
        { text: "Hemen başka bir grupta da anlatırım.", scores: { dedikodu: 3 } },
        { text: "İçten içe biraz hoşuma gider.", scores: { kiskanclik: 2 } },
      ],
    },
    {
      text: "En yakın arkadaşın başka biriyle çok yakınlaştı.",
      options: [
        { text: "Sevinirim, onun hayatında daha çok sevdiği insan olsun.", scores: {} },
        { text: "O kişinin kusurlarını arkadaşıma göstermeye çalışırım.", scores: { kiskanclik: 2, yargi: 1 } },
        { text: "Bana ayırdığı vakit azaldığı için ben de uzaklaşırım.", scores: { kiskanclik: 2 } },
        { text: "O kişi hakkında bir şey duyarsam hemen arkadaşıma iletirim.", scores: { dedikodu: 2, kiskanclik: 1 } },
      ],
    },
    {
      text: "Arkadaşının doğum günü. Bu yıl pek vaktin yok.",
      options: [
        { text: "Yoğun da olsam bir telefon açarım ya da kısa da olsa uğrarım.", scores: {} },
        { text: "Sadece hikâyeye bir paylaşım yaparım.", scores: { cikar: 2 } },
        { text: "Unuturum. Hatırlatan olursa ertesi gün yazarım.", scores: { cikar: 2 } },
        { text: "Gelmem ama kimlerin geldiğini, nasıl geçtiğini sorarım.", scores: { dedikodu: 1, cikar: 1 } },
      ],
    },
    {
      text: "Arkadaşın kilo aldı ve bu konuda hassas.",
      options: [
        { text: "Hiç değinmem, nasıl olduğunu sorarım.", scores: {} },
        { text: "\"Spor yapsan iyi gelir\" diye tavsiye veririm.", scores: { yargi: 3 } },
        { text: "Arkasından \"Fark ettiniz mi?\" diye konuşurum.", scores: { dedikodu: 3 } },
        { text: "Yanında kendimi daha iyi hissederim.", scores: { kiskanclik: 2 } },
      ],
    },
    {
      text: "Arkadaşın sana borç para istedi. Daha önce de istemişti ve geç ödemişti.",
      options: [
        { text: "Durumunu anlamaya çalışır, gücüm yetiyorsa veririm.", scores: {} },
        { text: "Veririm ama herkese ondan alacaklı olduğumu söylerim.", scores: { dedikodu: 3 } },
        { text: "\"Sen paranı yönetemiyorsun\" derim.", scores: { yargi: 3 } },
        { text: "Veririm, karşılığında bir iyilik isteyeceğimi aklımda tutarım.", scores: { cikar: 2 } },
      ],
    },
    {
      text: "Sen bir başarı elde ettiğinde arkadaşlarına nasıl anlatırsın?",
      options: [
        { text: "Sevinçle paylaşırım, onları da sevindirmek isterim.", scores: {} },
        { text: "Özellikle beni kıskanacağını bildiğim kişiye anlatırım.", scores: { kiskanclik: 3 } },
        { text: "Anlatırken diğerlerinin neden başaramadığını da eklerim.", scores: { yargi: 3 } },
        { text: "Bana kim faydalı olabilir diye düşünüp ona göre paylaşırım.", scores: { cikar: 2 } },
      ],
    },
    {
      text: "Dürüst ol: Arkadaşlarından biri sana bu testi gönderse ne düşünürsün?",
      options: [
        { text: "Çözer, sonucumu paylaşırım. Saklayacak bir şeyim yok.", scores: {} },
        { text: "\"Neden bana gönderdi?\" diye alınırım.", scores: { yargi: 1, kiskanclik: 1 } },
        { text: "Grupta \"Bana bunu gönderdi, inanabiliyor musunuz?\" diye anlatırım.", scores: { dedikodu: 3 } },
        { text: "Onun sonucunun benimkinden kötü çıkmasını umarım.", scores: { kiskanclik: 2, yargi: 1 } },
      ],
    },
  ],
  results: [
    {
      id: "altin-kalp",
      name: "Altın Kalp",
      emoji: "💛",
      tagline: "Herkesin bir tane olmasını istediği arkadaş.",
      profile: { kiskanclik: 8, dedikodu: 8, cikar: 8, yargi: 8 },
      color: "#2F7D6D",
      description: [
        "Arkadaşlarının başarısına gerçekten seviniyor, sırlarını saklıyor, kötü günlerinde de yanlarında oluyorsun. Bunlar basit görünüyor ama her arkadaşlıkta bulunmuyor.",
        "Seninle arkadaş olan biri kendini güvende hissediyor. Söylediklerinin başkalarına gitmeyeceğini, yargılanmayacağını ve ihtiyaç anında yalnız kalmayacağını biliyor.",
        "Tek bir uyarı: Altın kalpli insanlar bazen tek taraflı arkadaşlıklara fazla emek verir. Senin verdiğin değeri sana da veren insanları seçmeyi unutma.",
      ],
      strengths: ["Güvenilirsin, sır saklıyorsun", "Arkadaşlarının başarısına içtenlikle seviniyorsun", "Kötü günde ortadan kaybolmuyorsun"],
      watchOut: ["Tek taraflı arkadaşlıklara fazla emek verme", "Sınır koymak da sağlıklı arkadaşlığın parçası"],
      bestMatch: "altin-kalp",
    },
    {
      id: "gizli-rakip",
      name: "Gizli Rakip",
      emoji: "🏁",
      tagline: "Arkadaşının başarısı, senin içinde küçük bir yarış başlatıyor.",
      profile: { kiskanclik: 80, dedikodu: 15, cikar: 15, yargi: 25 },
      color: "#C2410C",
      description: [
        "Arkadaşların iyi bir şey yaşadığında tebrik ediyorsun ama içinden bir ses \"Neden o, neden ben değil?\" diyor. Bazen beğenmemek, bazen küçük bir yorum, bazen sadece konuyu değiştirmek...",
        "Bu his çok insani ve genellikle kendinle ilgili bir eksiklik duygusundan geliyor. Sorun kıskançlığın kendisi değil, onun arkadaşlığına sızması.",
        "Bir dahaki sefere o hissi fark ettiğinde içinden şunu söyle: \"Onun kazanması benim kaybetmem demek değil.\" Arkadaşının başarısı, senin için de bir ilham olabilir.",
      ],
      strengths: ["Hırslısın ve kendini geliştirmek istiyorsun", "Hislerini fark edebiliyorsun", "Rekabet seni motive ediyor"],
      watchOut: ["Kıskançlık sessizce arkadaşlıkları aşındırır", "Kendini sürekli kıyaslamak seni mutsuz eder"],
      bestMatch: "altin-kalp",
    },
    {
      id: "haber-ajansi",
      name: "Haber Ajansı",
      emoji: "📢",
      tagline: "Grupta olan her şey önce sana ulaşır, sonra herkese.",
      profile: { kiskanclik: 15, dedikodu: 80, cikar: 15, yargi: 25 },
      color: "#B0287A",
      description: [
        "Kim kiminle görüşüyor, kim kimle küs, kim işten ayrılıyor... Hepsini biliyorsun ve paylaşmak sana bir bağ kurma yolu gibi geliyor. Hikâye anlatmayı seviyorsun ve çok da iyi anlatıyorsun.",
        "Ama arkadaşların bir süre sonra bir şeyi fark eder: Sana anlatılan sır, bir şekilde başkalarına ulaşıyor. Ve sana bir şey anlatmadan önce iki kez düşünmeye başlarlar.",
        "Dedikodu kısa süreli bir yakınlık hissi verir ama uzun vadede güveni yok eder. Bir hikâyeyi anlatmadan önce sor: \"O burada olsaydı bunu anlatır mıydım?\"",
      ],
      strengths: ["Sosyal ve iletişimi güçlüsün", "Grubun nabzını tutuyorsun", "Hikâye anlatmakta çok iyisin"],
      watchOut: ["Sır taşımak güveni kalıcı olarak zedeler", "Konuşulan kişi sonunda her şeyi öğrenir"],
      bestMatch: "altin-kalp",
    },
    {
      id: "lazim-olunca",
      name: "Sadece Lazım Olunca",
      emoji: "📞",
      tagline: "Telefonun çaldığında arkadaşların ne isteyeceğini merak ediyor.",
      profile: { kiskanclik: 15, dedikodu: 15, cikar: 80, yargi: 15 },
      color: "#3B6FD9",
      description: [
        "Arkadaşlıklarını genellikle ihtiyaç anında hatırlıyorsun: taşınma, borç, bir tanıdık, bir iyilik. Bunu kötü niyetle yapmıyorsun, sadece hayatın yoğun ve aklına o zaman geliyor.",
        "Ama karşı taraf için bu tek yönlü bir ilişki gibi hissettiriyor. Sen yokken o sana yazdığında cevap gecikiyor, sen ihtiyaç duyduğunda ise hemen ortaya çıkıyorsun.",
        "Arkadaşlık bir banka hesabı gibi: Sadece çekim yaparsan bir gün bakiye biter. Hiçbir şey istemeden atılmış bir \"Nasılsın?\" mesajı, en büyük iyilikten daha değerli olabilir.",
      ],
      strengths: ["Pratik ve çözüm odaklısın", "Ne istediğini açıkça söyleyebiliyorsun", "Geniş bir çevren var"],
      watchOut: ["Tek taraflı arkadaşlıklar zamanla kaybolur", "Arkadaşlarının kötü günlerinde de orada ol"],
      bestMatch: "altin-kalp",
    },
    {
      id: "acimasiz-juri",
      name: "Acımasız Jüri",
      emoji: "🧐",
      tagline: "\"Ben sadece dürüstüm\" diyorsun. Arkadaşların başka bir şey diyor.",
      profile: { kiskanclik: 25, dedikodu: 20, cikar: 15, yargi: 80 },
      color: "#4C1D95",
      description: [
        "Kıyafetler, sevgililer, kariyer kararları, kilolar... Her konuda bir fikrin var ve onu söylemekten çekinmiyorsun. Bunu dürüstlük olarak görüyorsun ve bazen gerçekten işe yarıyor.",
        "Ama dürüstlük ile yargılamak arasında ince bir çizgi var. İstenmeyen tavsiyeler ve küçük iğnelemeler, arkadaşlarının yanında kendini sürekli değerlendiriliyormuş gibi hissetmesine yol açabilir.",
        "Bir yorum yapmadan önce kendine sor: Bu söz ona yardım edecek mi, yoksa sadece benim fikrimi mi gösterecek? Bazen en dürüst cümle \"Seni seviyorum, ne karar verirsen yanındayım\" olur.",
      ],
      strengths: ["Dürüst ve açık sözlüsün", "Arkadaşlarının hata yapmasını istemiyorsun", "Net fikirlerin var"],
      watchOut: ["İstenmeyen eleştiri arkadaşlarını kendini savunmaya iter", "Herkesin seninle aynı standartlara sahip olması gerekmiyor"],
      bestMatch: "altin-kalp",
    },
    {
      id: "zehirli-sarmasik",
      name: "Zehirli Sarmaşık",
      emoji: "🌿",
      tagline: "Biraz kıskançlık, biraz dedikodu, biraz da yargı. Tam paket.",
      profile: { kiskanclik: 55, dedikodu: 55, cikar: 55, yargi: 55 },
      color: "#65A30D",
      description: [
        "Testin dürüst sonucu şu: Arkadaşlıklarında zorlandığında birçok toksik kalıbı bir arada kullanıyorsun. Kıyaslıyor, konuşuyor, yargılıyor ve bazen sadece ihtiyacın olduğunda ortaya çıkıyorsun.",
        "Bu davranışların arkasında genellikle bir güvensizlik ya da yalnız kalma korkusu yatar. Başkalarını küçültmek, kısa süreliğine insana kendini daha iyi hissettirir.",
        "Bu testi dürüstçe çözmüş olman değişmeye hazır olduğunu gösteriyor. Tek bir davranışla başla: Bu hafta bir arkadaşına hiçbir şey istemeden, sadece onu düşündüğün için yaz.",
      ],
      strengths: ["Kendinle yüzleşme cesaretin var", "Sosyal olarak çok canlısın", "Değişmek için ilk adımı attın"],
      watchOut: ["Birden fazla toksik kalıp arkadaşlarını uzaklaştırabilir", "Güvensizliğin kaynağına bakmak işe yarar"],
      bestMatch: "altin-kalp",
    },
  ],
};
