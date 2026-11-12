import type { Test } from "@/lib/types";

export const magaraAdami: Test = {
  slug: "magara-adami-testi",
  title: "Ne Kadar Mağara Adamısın?",
  summary:
    "Güncellemeyi erteleyen, acıkınca konuşmayan, 'İyi.' diye cevap veren sen misin? İçindeki mağara adamını ölçüyoruz.",
  intro:
    "Hepimizin içinde, ateşin başında oturup avını bekleyen biri var. Kimimizde uyuyor, kimimizde her güncelleme bildiriminde uyanıyor. 14 gündelik senaryoda ilk içgüdünü seç; uzun uzun düşünmek mağara adamına yakışmaz.",
  emoji: "🪨",
  color: "#8B5A2B",
  category: "kişilik",
  metaDescription:
    "Ne kadar mağara adamısın testi: teknoloji direncin, ilkel içgüdülerin, kısa cevapların ve konfor umursamazlığınla mağara adamı seviyeni ve tipini öğren.",
  headline: {
    label: "Mağara adamı seviyen",
    mode: "toplam",
    weights: { teknoloji: 1, icgudu: 1, iletisim: 1, konfor: 1 },
  },
  dimensions: [
    {
      id: "teknoloji",
      label: "Teknoloji direnci",
      low: "Her yeniliği ilk sen denersin",
      high: "Tuşlu telefon yeterdi",
    },
    { id: "icgudu", label: "İlkel içgüdüler", low: "Planlı ve rafine", high: "Acıkınca dünya durur" },
    { id: "iletisim", label: "Mağara iletişimi", low: "Paragraf paragraf anlatırsın", high: "Hı, iyi, tamam" },
    { id: "konfor", label: "Konfor umursamazlığı", low: "Rutinin ve düzenin var", high: "Bir taş, bir yastık" },
  ],
  questions: [
    {
      text: 'Telefonun bugün üçüncü kez "Yeni güncelleme hazır, şimdi yüklensin mi?" diye soruyor.',
      options: [
        { text: "Ertele'ye basarım; eski hali gayet iyi çalışıyordu zaten.", scores: { teknoloji: 2, konfor: 1 } },
        { text: "Hemen kurarım; yeni özellikleri ilk ben denemeliyim.", scores: {} },
        { text: "Gece şarjdayken kendisi kursun, sabah fark etmem bile.", scores: { konfor: 2, teknoloji: 1 } },
        { text: "Telefonu ters çevirir, kaşıkla yemeğime geri dönerim.", scores: { icgudu: 2, teknoloji: 1 } },
      ],
    },
    {
      text: "Saat 21.00, kurt gibi acıktın ve evde hazır hiçbir şey yok.",
      options: [
        { text: "Ne varsa tavaya atar, ocağın başında ayakta yerim.", scores: { icgudu: 2, konfor: 1 } },
        { text: "Uygulamadan sipariş verir, kuryeyi haritada izlerim.", scores: {} },
        { text: "Balkonda kömür yakarım; elektrikli ızgarada et pişmez.", scores: { icgudu: 2, teknoloji: 1 } },
        { text: "Acıkınca konuşulmaz; önce karnım doyar, sonra insan olurum.", scores: { icgudu: 2, iletisim: 1 } },
      ],
    },
    {
      text: "Arkadaş grubunda hafta sonu planı için uzun bir mesaj yazıldı, senden cevap bekleniyor.",
      options: [
        { text: '"👍" atarım; bence gayet ayrıntılı bir cevap.', scores: { iletisim: 2, konfor: 1 } },
        { text: "Her maddeyi tek tek cevaplayan uzun bir sesli mesaj atarım.", scores: {} },
        { text: "Okurum ama yazmam; buluşma günü orada olurum zaten.", scores: { iletisim: 2, icgudu: 1 } },
        { text: '"Yazıyla anlaşılmaz bu, arayın beni" diye tek satır yazarım.', scores: { teknoloji: 2, iletisim: 1 } },
      ],
    },
    {
      text: "Arkadaşın sana yedi adımlı bir cilt bakım rutini anlatıyor.",
      options: [
        { text: "Sabun var ya; yüz de el de aynı köpükle yıkanır.", scores: { konfor: 2, teknoloji: 1 } },
        { text: "Not alırım, hangi ürünü hangi sırayla süreceğimi sorarım.", scores: {} },
        { text: "Güneş, rüzgâr, soğuk su; cildime dair bildiğim üç şey.", scores: { konfor: 2, icgudu: 1 } },
        { text: '"Hı hı" derim ve fark ettirmeden konuyu yemeğe getiririm.', scores: { iletisim: 2, icgudu: 1 } },
      ],
    },
    {
      text: "Hafta sonu kamp teklifi geldi: çadır var, elektrik yok, en yakın market 12 kilometre.",
      options: [
        { text: "Kibrit ve çakı yeter; ateşi ilk ben yakarım.", scores: { icgudu: 2, konfor: 1 } },
        { text: "Powerbank, kamp lambası ve şişme yatak olmadan gitmem.", scores: {} },
        { text: "Toprakta da uyurum; yastık niyetine düz bir taş bulurum.", scores: { konfor: 2, icgudu: 1 } },
        { text: "Haritaya bakmam, güneşin yerine bakıp yönümü bulurum.", scores: { teknoloji: 2, icgudu: 1 } },
      ],
    },
    {
      text: "Telefonun bir gün boyunca serviste kalacak.",
      options: [
        { text: "İçim ferahlar; nihayet kimse bana ulaşamayacak.", scores: { iletisim: 2, teknoloji: 1 } },
        { text: "Yedek telefonu çıkarır, her şeyi buluttan geri yüklerim.", scores: {} },
        { text: "Çekmecedeki tuşlu telefonu bulur, yılan oyununu açarım.", scores: { teknoloji: 2, konfor: 1 } },
        { text: "Acıkınca yer, uykum gelince yatarım; saate bile bakmam.", scores: { icgudu: 2, teknoloji: 1 } },
      ],
    },
    {
      text: 'Sevgilin akşam "Bugün neler hissettin, anlatsana" diyor.',
      options: [
        { text: '"İyiydi." Bence konunun bütün özeti bu.', scores: { iletisim: 2, konfor: 1 } },
        { text: "Günümü duygularımla birlikte uzun uzun anlatırım.", scores: {} },
        { text: "Anlatırım ama önce yiyelim; aç karnına duygu olmaz.", scores: { icgudu: 2, iletisim: 1 } },
        { text: "Kalkıp ona çay demlerim; benim sevgi dilim iş görmek.", scores: { iletisim: 2, icgudu: 1 } },
      ],
    },
    {
      text: "Yeni eve taşındınız, odalar bomboş.",
      options: [
        { text: "Bir yatak, bir masa, bir ocak; başka ne lazım ki?", scores: { konfor: 2, icgudu: 1 } },
        { text: "Her oda için ayrı renk paleti ve ilham panosu hazırlarım.", scores: {} },
        { text: "Akıllı ampul, akıllı priz istemem; düğme dediğin düğmedir.", scores: { teknoloji: 2, konfor: 1 } },
        { text: "Önce mutfağı kurarım; yemek yoksa ev ev değildir.", scores: { icgudu: 2, konfor: 1 } },
      ],
    },
    {
      text: "Herkes yeni çıkan bir sosyal medya uygulamasından bahsediyor.",
      options: [
        { text: "Duymadım bile; ben hâlâ fotoğrafları albüme bastırırım.", scores: { teknoloji: 2, konfor: 1 } },
        { text: "İlk gün hesap açar, kullanıcı adımı herkesten önce kaparım.", scores: {} },
        { text: "Açarım ama tek paylaşımım profil fotoğrafı olur.", scores: { iletisim: 2, teknoloji: 1 } },
        { text: "Paylaşacak ne var? Yedim, uyudum, eve döndüm.", scores: { iletisim: 2, icgudu: 1 } },
      ],
    },
    {
      text: "Hiç bilmediğin bir şehirde bir adresi arıyorsun.",
      options: [
        { text: "Navigasyonu açar, sesli yönlendirmeyle adım adım giderim.", scores: {} },
        { text: "Köşedeki bakkala sorarım; insan bilgisi uydudan iyidir.", scores: { teknoloji: 2, icgudu: 1 } },
        { text: "Kimseye sormam, içgüdümle yürürüm; bir yere çıkar.", scores: { icgudu: 2, iletisim: 1 } },
        { text: "Kaybolsam da dert etmem; nerede akşam, orada sabah.", scores: { konfor: 2, icgudu: 1 } },
      ],
    },
    {
      text: "Saat 22.30 ve beklediğin dizinin yeni bölümü az önce yayınlandı.",
      options: [
        { text: "Güneş battıysa gün bitmiştir; ben yatıyorum.", scores: { icgudu: 2, teknoloji: 1 } },
        { text: "Bölümü izler, ardından internetteki teorileri okurum.", scores: {} },
        { text: "Kanepede uyuyakalırım; üstümü kim örterse sağ olsun.", scores: { konfor: 2, icgudu: 1 } },
        { text: "İzlerim ama kimseyle konuşmam; yorum da yapmam, spoiler da.", scores: { iletisim: 2, konfor: 1 } },
      ],
    },
    {
      text: 'Ailen "Artık şu gardırobu bir yenile" dedi.',
      options: [
        { text: "Aynı tişörtten beş tane alırım; seçme derdi biter.", scores: { konfor: 2, iletisim: 1 } },
        { text: "Trendlere bakar, her parçayı kombinleyerek seçerim.", scores: {} },
        { text: "Delik değilse eskimemiştir; on yıllık montum gayet sağlam.", scores: { konfor: 2, teknoloji: 1 } },
        { text: "Mağaza sıcak ve kalabalık; deneme kabininden kaçarım.", scores: { icgudu: 2, konfor: 1 } },
      ],
    },
    {
      text: "İş toplantısı online yapılacak ve herkesten kamera açması istendi.",
      options: [
        { text: 'Kameram "bozuk"; mikrofonu da gerekmedikçe açmam.', scores: { iletisim: 2, teknoloji: 1 } },
        { text: "Işık, arka plan, mikrofon hazır; beş dakika erken girerim.", scores: {} },
        { text: "Toplantı linkini bulana kadar toplantı biter zaten.", scores: { teknoloji: 2, konfor: 1 } },
        { text: "Elimde dürümle katılırım; açlık beklemez, toplantı bekler.", scores: { icgudu: 2, konfor: 1 } },
      ],
    },
    {
      text: "Sevgilinin doğum günü yaklaşıyor.",
      options: [
        { text: "Kendi ellerimle bir şey yaparım; tahtadan bile olsa.", scores: { icgudu: 2, teknoloji: 1 } },
        { text: "İstek listesini önceden öğrenir, kargoyu gün gün takip ederim.", scores: {} },
        { text: '"Bir yemeğe gidelim" derim; benim kutlamam bu kadar.', scores: { iletisim: 2, icgudu: 1 } },
        { text: "Para veririm; neye ihtiyacı varsa kendisi alsın.", scores: { konfor: 2, iletisim: 1 } },
      ],
    },
  ],
  results: [
    {
      id: "sehirli-sapiens",
      name: "Şehirli Homo Sapiens",
      emoji: "🏙️",
      tagline: "Ateşi değil, akıllı prizi keşfeden taraftasın.",
      profile: { teknoloji: 10, icgudu: 10, iletisim: 10, konfor: 10 },
      color: "#2F6F8F",
      description: [
        "Mağara senin için olsa olsa bir kafe adı. Güncellemeleri ilk gün yüklüyorsun, duygularını cümlelerle anlatıyorsun, cilt bakım rutinin bile bir sisteme bağlı.",
        "Planlamayı seviyorsun ve rahat bir hayatın emekle kurulduğunu biliyorsun. Yeni bir uygulama çıktığında herkesin danıştığı kişi muhtemelen sensin.",
        "Tek ironi şu: Elektriksiz bir kamp gecesinde ateşi yakmak da, yönü güneşten bulmak da muhtemelen başkasına kalacak. Ara sıra telefonu bırakıp bir taşa oturmak sana iyi gelebilir.",
      ],
      strengths: [
        "Yeniliklere hızlı uyum sağlıyorsun",
        "Duygularını ve planlarını açıkça ifade ediyorsun",
        "Konforu ve düzeni kurmayı biliyorsun",
      ],
      watchOut: ["Şarjın bittiğinde dünyan da durabiliyor", "Her şeyin bir uygulaması olmak zorunda değil"],
      bestMatch: "dijital-magara",
    },
    {
      id: "dijital-magara",
      name: "Dijital Mağara Adamı",
      emoji: "📵",
      tagline: "Tuşlu telefon yeterdi, gerisi gereksiz gürültü.",
      profile: { teknoloji: 80, icgudu: 25, iletisim: 25, konfor: 30 },
      color: "#5B6770",
      description: [
        "Teknolojiyle aranızda saygılı bir mesafe var. Güncellemeyi erteliyor, akıllı ampule şüpheyle bakıyor, yolu navigasyondan değil bakkaldan soruyorsun.",
        "Bu seni geri kalmış yapmıyor; aksine çoğu insanın kaybettiği bir şeye sahipsin: ekranın öbür tarafında da bir hayat olduğunu biliyorsun. Bildirim sesleri seni yönetmiyor.",
        "Yalnız bazen bu direnç pratiklikten kaçmaya dönüşebiliyor. Online toplantı linkini bulamadığın için kaçırdığın şeyler birikmeden, en azından işini kolaylaştıran birkaç aracı kabul etmek iyi olabilir.",
      ],
      strengths: [
        "Ekran bağımlılığına karşı doğal bir bağışıklığın var",
        "Yüz yüze iletişime değer veriyorsun",
        "Moda geçici heveslere kapılmıyorsun",
      ],
      watchOut: [
        "Bazı kolaylıkları sırf yeni olduğu için reddedebiliyorsun",
        "Dijital işlerde başkalarına fazla yük bindirebilirsin",
      ],
      bestMatch: "sehirli-sapiens",
    },
    {
      id: "ates-bekcisi",
      name: "Ateşin Bekçisi",
      emoji: "🔥",
      tagline: "Acıkınca dünya durur, mangal yanınca herkes toplanır.",
      profile: { teknoloji: 25, icgudu: 80, iletisim: 25, konfor: 30 },
      color: "#C2410C",
      description: [
        "İçgüdülerinle yaşıyorsun: Acıktığında yemek, yorulduğunda uyku, hava güzelse ateş. Senin için hayatın düzeni saatten çok güneşe ve mideye bağlı.",
        "Kampın, mangalın ve kalabalık sofraların doğal lideri sensin. Ateşi ilk sen yakıyor, eti kimseye bırakmıyor, ortamı tok ve mutlu tutuyorsun. Etrafındakiler yanında kendini güvende hissediyor.",
        "Tek mesele, aç karnına yapılan konuşmaların seninle pek iyi gitmemesi. Önemli bir konuyu açmadan önce bir şeyler yemek ikinizin de işine yarar; çevrendekiler bunu çoktan öğrenmiştir.",
      ],
      strengths: [
        "Pratik ve hayatta kalma becerileri yüksek",
        "Sofra kurmayı ve insanları toplamayı biliyorsun",
        "Bedeninin ihtiyaçlarını dinliyorsun",
      ],
      watchOut: ["Açken sabrın hızla tükenebiliyor", "Planlı programlar içgüdülerine yenik düşebiliyor"],
      bestMatch: "tas-yastik",
    },
    {
      id: "hi-diyen-bilge",
      name: '"Hı" Diyen Bilge',
      emoji: "🗿",
      tagline: "Az konuşursun, ama konuştuğunda iş biter.",
      profile: { teknoloji: 30, icgudu: 25, iletisim: 80, konfor: 25 },
      color: "#4B5563",
      description: [
        'Uzun mesajlara "👍" ile, uzun sorulara "İyiydi" ile cevap veriyorsun. Bu senin için tembellik değil, verimlilik: Söylenmesi gereken söylendiyse gerisi gürültü.',
        "İnsanlar sana güveniyor çünkü sözünün arkasında duruyorsun. Grupta en az yazan ama buluşmaya ilk gelen kişi sensin. Sevgini kelimelerle değil, demlediğin çayla gösteriyorsun.",
        'Yine de karşındaki herkes aynı dili konuşmuyor. Sevgilin "Nasıldı?" diye sorduğunda bir cümleyi üçe çıkarmak, ilişkini sandığından çok daha fazla ısıtabilir.',
      ],
      strengths: [
        "Sözünün eri ve güvenilirsin",
        "Gereksiz dramaya bulaşmıyorsun",
        "Sevgini davranışlarla gösteriyorsun",
      ],
      watchOut: ["Kısa cevapların soğukluk gibi algılanabilir", "Duygularını içinde biriktirme eğilimin var"],
      bestMatch: "ates-bekcisi",
    },
    {
      id: "tas-yastik",
      name: "Taştan Yastık",
      emoji: "🪨",
      tagline: "Bir yatak, bir masa, bir ocak; başkası lüks.",
      profile: { teknoloji: 30, icgudu: 30, iletisim: 25, konfor: 80 },
      color: "#78716C",
      description: [
        "Konfor senin için bir ihtiyaç değil, fazlalık. Aynı tişörtten beş tane alıyor, cildini güneş ve rüzgâra emanet ediyor, toprağa da yatağa da aynı rahatlıkla uzanıyorsun.",
        "Bu sade hayat seni özgür kılıyor: Eşyaların değil, sen eşyaların sahibisin. Taşınmak, kamp yapmak ya da plansız bir yolculuğa çıkmak senin için hiç sorun değil.",
        "Tek risk, birlikte yaşadığın insanların konforu biraz daha önemsemesi. Senin için yeterli olan boş bir oda, karşındaki için soğuk bir ev olabilir; arada bir halı sermek kimseye zarar vermez.",
      ],
      strengths: [
        "Az şeyle mutlu olabiliyorsun",
        "Değişime ve zorluklara kolay uyum sağlıyorsun",
        "Eşyalara ve görünüşe takılmıyorsun",
      ],
      watchOut: ["Kendine bakmayı ihmal edebiliyorsun", "Senin sadeliğin başkasına özensizlik gibi görünebilir"],
      bestMatch: "ates-bekcisi",
    },
    {
      id: "tam-magara",
      name: "Tam Mağara Adamı",
      emoji: "🦣",
      tagline: "Ateş sende, sopa sende, mağara da senin.",
      profile: { teknoloji: 70, icgudu: 72, iletisim: 70, konfor: 70 },
      color: "#57351C",
      description: [
        "Tebrikler, bu testin şampiyonu sensin. Güncellemeyi erteliyor, acıkınca konuşmuyor, uzun mesajlara tek emojiyle cevap veriyor ve bir taşı yastık yapabiliyorsun.",
        "Modern hayatın karmaşasına karşı en sağlam duruşa sahipsin. Elektrik kesildiğinde, telefonlar çekmediğinde ya da plan suya düştüğünde herkes sana bakıyor; çünkü senin için hayat zaten bu kadar sade.",
        "Ama on bin yıl önce de kabilenin bir arada kalmasını sağlayan şey konuşmaktı. Ara sıra bir paragraf yazmak, bir güncellemeyi kabul etmek ve bir yastık satın almak seni mağaradan çıkarmaz, sadece mağaranı daha sıcak yapar.",
      ],
      strengths: [
        "Kriz anında soğukkanlı ve becerikli",
        "Sade ve gösterişsiz bir yaşamın var",
        "Modern hayatın stresine karşı dirençlisin",
      ],
      watchOut: [
        "Yakınların seni anlamak için tercüman arayabilir",
        "Kolaylıkları reddetmek hayatını gereksiz zorlaştırabilir",
      ],
      bestMatch: "hi-diyen-bilge",
    },
  ],
};
