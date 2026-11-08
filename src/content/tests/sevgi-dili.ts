import type { Test } from "@/lib/types";

export const sevgiDili: Test = {
  slug: "sevgi-dili-testi",
  title: "Sevgi Dilin Ne?",
  summary: "Bazıları \"seni seviyorum\" duymak ister, bazıları sadece bulaşığın yıkanmasını. Sen hangisisin?",
  intro:
    "Sevgiyi herkes aynı dilde vermiyor ve almıyor. Beş sevgi dili modeline dayanan bu testte 15 durumda seni en çok mutlu edecek olanı seç. Hepsi güzel, ama biri sana daha çok dokunuyor.",
  emoji: "💌",
  color: "#E0567A",
  category: "ilişki",
  metaDescription:
    "Sevgi dili testi: onay sözleri, kaliteli zaman, hediye, hizmet ya da fiziksel temas. 15 soruda baskın sevgi dilini ve partnerinle iletişimini öğren.",
  dimensions: [
    { id: "soz", label: "Onay sözleri", low: "Söze ihtiyacın az", high: "Duymak istersin" },
    { id: "zaman", label: "Kaliteli zaman", low: "Ayrı vakit dert değil", high: "Birlikte olmak her şey" },
    { id: "hediye", label: "Hediye", low: "Eşyaya önem vermezsin", high: "Düşünülmek seni eritir" },
    { id: "hizmet", label: "Hizmet", low: "Kendi işini kendin görürsün", high: "Yapılan iyilik konuşur" },
    { id: "temas", label: "Fiziksel temas", low: "Mesafe rahat", high: "Sarılmak şart" },
  ],
  questions: [
    {
      text: "Zor bir haftanın sonundasın. Sevgilinden en çok ne beklersin?",
      options: [
        { text: "\"Seninle gurur duyuyorum, harika iş çıkardın\" demesini.", scores: { soz: 2 } },
        { text: "Telefonları kenara bırakıp bütün akşamı benimle geçirmesini.", scores: { zaman: 2 } },
        { text: "Ben gelmeden yemeği hazırlamış olmasını.", scores: { hizmet: 2 } },
        { text: "Kapıda uzun uzun sarılmasını.", scores: { temas: 2 } },
      ],
    },
    {
      text: "Doğum günün. Seni en çok ne duygulandırır?",
      options: [
        { text: "Aylar önce bahsettiğim bir şeyi hatırlayıp almış olması.", scores: { hediye: 2 } },
        { text: "Uzun ve içten bir mektup.", scores: { soz: 2 } },
        { text: "Sadece ikimizin olduğu bir gün planlaması.", scores: { zaman: 2 } },
        { text: "Bütün işlerimi halledip günü bana bırakması.", scores: { hizmet: 2 } },
      ],
    },
    {
      text: "Bir tartışmadan sonra barışırken seni en çok ne yumuşatır?",
      options: [
        { text: "Sessizce yanıma gelip elimi tutması.", scores: { temas: 2 } },
        { text: "\"Haklıydın, seni anlıyorum\" demesi.", scores: { soz: 2 } },
        { text: "Küçük bir çikolata ya da çiçekle gelmesi.", scores: { hediye: 2 } },
        { text: "Oturup ne olduğunu sakince konuşmak için zaman ayırması.", scores: { zaman: 2 } },
      ],
    },
    {
      text: "Seni en çok ne kırar?",
      options: [
        { text: "Kırıcı bir söz ya da hiç takdir edilmemek.", scores: { soz: 2 } },
        { text: "Birlikteyken sürekli telefona bakması.", scores: { zaman: 2 } },
        { text: "Özel bir günü eli boş geçiştirmesi.", scores: { hediye: 2 } },
        { text: "Yardım istediğimde \"Sonra\" demesi.", scores: { hizmet: 2 } },
      ],
    },
    {
      text: "Sevgilin uzun bir yolculuktan dönüyor. İlk anda ne olsun istersin?",
      options: [
        { text: "Koşup sarılalım.", scores: { temas: 2 } },
        { text: "\"Seni çok özledim\" desin.", scores: { soz: 2 } },
        { text: "Oradan bana küçük bir şey getirmiş olsun.", scores: { hediye: 2 } },
        { text: "O akşamı tamamen bize ayıralım.", scores: { zaman: 2 } },
      ],
    },
    {
      text: "Hastasın ve evdesin.",
      options: [
        { text: "Çorbamı yapıp ilaçlarımı getirsin.", scores: { hizmet: 2 } },
        { text: "Yanıma uzanıp saçımı okşasın.", scores: { temas: 2 } },
        { text: "Gün boyu yanımda kalsın, birlikte film izleyelim.", scores: { zaman: 2 } },
        { text: "\"Geçmiş olsun\" kartıyla sevdiğim bir şeyi getirsin.", scores: { hediye: 2 } },
      ],
    },
    {
      text: "Hangisi sana \"Bu insan beni gerçekten seviyor\" dedirtir?",
      options: [
        { text: "Arkadaşlarının yanında benimle övünmesi.", scores: { soz: 2 } },
        { text: "Benim için en sevdiği aktiviteyi bile iptal etmesi.", scores: { zaman: 2 } },
        { text: "Arabamın lastiğini ben fark etmeden değiştirmesi.", scores: { hizmet: 2 } },
        { text: "Yürürken elimi hiç bırakmaması.", scores: { temas: 2 } },
      ],
    },
    {
      text: "Sıradan bir salı günü. Seni ne gülümsetir?",
      options: [
        { text: "Hiç sebep yokken \"Seni düşündüm\" diyen bir mesaj.", scores: { soz: 2 } },
        { text: "Masamda beni bekleyen kahve.", scores: { hediye: 1, hizmet: 1 } },
        { text: "Akşam yürüyüşüne birlikte çıkmak.", scores: { zaman: 2 } },
        { text: "Mutfakta arkamdan gelip sarılması.", scores: { temas: 2 } },
      ],
    },
    {
      text: "Yıldönümünüz için hangisini tercih edersin?",
      options: [
        { text: "Anlamlı ve özenle seçilmiş bir hediye.", scores: { hediye: 2 } },
        { text: "Hafta sonu kaçamağı.", scores: { zaman: 2 } },
        { text: "Bir yıl boyunca beni neden sevdiğini anlatan bir video ya da mektup.", scores: { soz: 2 } },
        { text: "Uzun zamandır ertelediğim bir işi benim için halletmesi.", scores: { hizmet: 2 } },
      ],
    },
    {
      text: "Kalabalık bir partidesiniz.",
      options: [
        { text: "Arada bir gözüme bakıp göz kırpsın.", scores: { zaman: 1, soz: 1 } },
        { text: "Belime ya da omzuma dokunsun, yanımda olduğunu hissedeyim.", scores: { temas: 2 } },
        { text: "Benim içecek bitince yenisini getirsin.", scores: { hizmet: 2 } },
        { text: "Herkese \"Bu benim sevgilim\" diye beni tanıştırsın.", scores: { soz: 2 } },
      ],
    },
    {
      text: "Partnerinin sana en çok ne sıklıkla yapmasını isterdin?",
      options: [
        { text: "Her gün iltifat etmesini.", scores: { soz: 2 } },
        { text: "Her hafta en az bir akşamı sadece bize ayırmasını.", scores: { zaman: 2 } },
        { text: "Arada bir \"Bunu görünce seni düşündüm\" diye küçük şeyler almasını.", scores: { hediye: 2 } },
        { text: "Her fırsatta sarılmasını.", scores: { temas: 2 } },
      ],
    },
    {
      text: "Taşınıyorsun ve her yer koli dolu.",
      options: [
        { text: "Bütün gün gelip koli taşısın.", scores: { hizmet: 2 } },
        { text: "Arada bir \"Çok iyi gidiyorsun\" diye moral versin.", scores: { soz: 2 } },
        { text: "Yeni eve küçük bir bitki ya da süs getirsin.", scores: { hediye: 2 } },
        { text: "İşler bitince yorgun bir şekilde kanepede birlikte uzanalım.", scores: { temas: 1, zaman: 1 } },
      ],
    },
    {
      text: "Uzak mesafe ilişkisi yaşıyorsunuz. En çok neyi özlersin?",
      options: [
        { text: "Dokunmayı, sarılmayı.", scores: { temas: 2 } },
        { text: "Birlikte sıradan şeyler yapmayı.", scores: { zaman: 2 } },
        { text: "Benim için yaptığı küçük iyilikleri.", scores: { hizmet: 2 } },
        { text: "Kargoyla gelen sürpriz paketleri. Onlar bile beni mutlu ederdi.", scores: { hediye: 2 } },
      ],
    },
    {
      text: "Sen sevgini en çok nasıl gösteriyorsun?",
      options: [
        { text: "Söyleyerek. Sık sık \"seni seviyorum\" derim.", scores: { soz: 2 } },
        { text: "Onun işlerini kolaylaştırarak.", scores: { hizmet: 2 } },
        { text: "Hediyeler, sürprizler hazırlayarak.", scores: { hediye: 2 } },
        { text: "Dokunarak, sarılarak.", scores: { temas: 2 } },
      ],
    },
    {
      text: "Bir ilişkide asla vazgeçemeyeceğin şey hangisi?",
      options: [
        { text: "Birlikte geçirilen gerçek, bölünmemiş zaman.", scores: { zaman: 2 } },
        { text: "Takdir edildiğimi duymak.", scores: { soz: 2 } },
        { text: "Fiziksel yakınlık.", scores: { temas: 2 } },
        { text: "Hayatın yükünü birlikte paylaşmak.", scores: { hizmet: 2 } },
      ],
    },
  ],
  results: [
    {
      id: "soz",
      name: "Söz Ustası",
      emoji: "💬",
      tagline: "Bir cümle seni bütün gün mutlu edebilir.",
      profile: { soz: 70, zaman: 25, hediye: 15, hizmet: 15, temas: 25 },
      color: "#E0567A",
      description: [
        "Senin sevgi dilin onay sözleri. \"Seninle gurur duyuyorum\", \"Bugün çok güzelsin\", \"İyi ki varsın\"... Bu cümleler senin için süs değil, sevginin kendisi.",
        "Aynı şekilde kırıcı bir söz de sende başkalarından daha uzun süre iz bırakıyor. Takdir edilmediğinde, yaptıkların fark edilmediğinde kendini görünmez hissedebiliyorsun.",
        "Partnerine bunu açıkça söyle: \"Bana arada bir ne hissettiğini söylemen çok önemli.\" Herkes bunu doğal olarak yapmaz ama öğrenebilir.",
      ],
      strengths: ["İnsanları sözlerinle iyileştirebiliyorsun", "Takdir etmeyi biliyorsun", "Duygularını ifade etmekte rahatsın"],
      watchOut: ["Sevgisini sözle değil davranışla gösteren partnerleri yanlış anlayabilirsin", "Eleştiriye karşı hassasiyetin yüksek"],
      bestMatch: "zaman",
      giftLink: { href: "/hediye?ilgi=kitap,hobi#bulucu", label: "Sözle sevenlere: mektup, albüm ve kişiye özel hediyeler" },
    },
    {
      id: "zaman",
      name: "Zaman Bekçisi",
      emoji: "⏳",
      tagline: "En güzel hediye, telefonun kapalı olduğu bir akşam.",
      profile: { soz: 25, zaman: 70, hediye: 15, hizmet: 20, temas: 25 },
      color: "#3B6FD9",
      description: [
        "Senin için sevgi, birinin gerçekten seninle olması. Aynı odada telefona bakmak değil, göz göze konuşmak, birlikte yürümek, birlikte bir şey yapmak.",
        "İptal edilen planlar, bölünen sohbetler ve yarım dinlenen anlatılar seni en çok yaralayan şeyler. Çünkü senin dilinde bunlar \"Sen öncelik değilsin\" anlamına geliyor.",
        "Partnerine haftada bir \"bizim akşamımızı\" önermek, uzun açıklamalardan çok daha etkili olabilir.",
      ],
      strengths: ["Anı yaşamayı biliyorsun", "İyi bir dinleyicisin", "İlişkiye gerçek bir dikkat veriyorsun"],
      watchOut: ["Partnerinin ayrı vakit ihtiyacını reddedilme olarak algılayabilirsin", "Yoğun dönemlerde kendini ihmal edilmiş hissedebilirsin"],
      bestMatch: "temas",
      giftLink: { href: "/hediye?ilgi=deneyim,seyahat#bulucu", label: "Birlikte yaşanacak deneyim hediyeleri" },
    },
    {
      id: "hediye",
      name: "Sürpriz Avcısı",
      emoji: "🎁",
      tagline: "Önemli olan fiyat değil, \"bunu görünce seni düşündüm\" hissi.",
      profile: { soz: 20, zaman: 20, hediye: 70, hizmet: 15, temas: 20 },
      color: "#C2410C",
      description: [
        "Senin sevgi dilin hediye ama bu materyalist olduğun anlamına gelmiyor. Seni mutlu eden şey, birinin seni düşündüğünün somut bir kanıtı. Bir taş, bir bilet, bir not bile olabilir.",
        "Özel günlerin unutulması ya da geçiştirilmesi seni derinden yaralıyor. Çünkü senin için bu \"Aklında değilim\" demek.",
        "Sen de sevgini hediyelerle gösteriyorsun ve muhtemelen bu işte çok iyisin. Hediye fikirlerimize bir göz at, belki bir sonraki sürprizin oradadır.",
      ],
      strengths: ["Detayları hatırlıyorsun", "Mükemmel sürprizler hazırlıyorsun", "Küçük şeylerden mutlu olabiliyorsun"],
      watchOut: ["Hediye vermeyen partneri sevgisiz sanma", "Beklentilerini açıkça söyle, ima etme"],
      bestMatch: "soz",
      giftLink: { href: "/hediye/sevgililer-gunu-hediyesi", label: "Özenle seçilmiş, düşünülmüş hediyeler" },
    },
    {
      id: "hizmet",
      name: "Sessiz Kahraman",
      emoji: "🛠️",
      tagline: "\"Seni seviyorum\" duymaktan çok bulaşıkların yıkanmasını seversin.",
      profile: { soz: 15, zaman: 20, hediye: 15, hizmet: 70, temas: 20 },
      color: "#2F7D6D",
      description: [
        "Senin için sevgi bir fiil. Sana yardım eden, yükünü hafifleten, sen söylemeden bir işi halleden biri, sana en romantik sözlerden daha çok şey anlatıyor.",
        "Sözle sevgi gösterip davranışla ortada olmayan insanlar sana boş geliyor. Senin gözünde \"Bir şey lazım mı?\" sorusu bir aşk itirafı kadar değerli.",
        "Sen de sevgini muhtemelen böyle gösteriyorsun: işleri halletmek, sorun çözmek, hayatı kolaylaştırmak. Partnerinin bunu fark etmesi için bazen söylemen gerekebilir.",
      ],
      strengths: ["Güvenilir ve çözüm odaklısın", "Sevgini somut olarak gösteriyorsun", "Partnerinin hayatını kolaylaştırıyorsun"],
      watchOut: ["Yaptıklarının fark edilmemesi seni kırabilir, bunu dile getir", "Söz ve temas ihtiyacı olan partnere bazen mesafeli görünebilirsin"],
      bestMatch: "zaman",
      giftLink: { href: "/hediye?ilgi=ev,mutfak#bulucu", label: "Hayatı kolaylaştıran pratik hediyeler" },
    },
    {
      id: "temas",
      name: "Sarılma Uzmanı",
      emoji: "🤗",
      tagline: "Bin kelimeye bedel bir sarılma.",
      profile: { soz: 20, zaman: 25, hediye: 15, hizmet: 15, temas: 70 },
      color: "#B0287A",
      description: [
        "Senin sevgi dilin fiziksel temas. El ele tutuşmak, yanında otururken omzuna yaslanmak, kapıda uzun bir sarılma... Bunlar seni güvende ve sevilmiş hissettiriyor.",
        "Mesafeli ya da temastan kaçınan bir partnerle kendini yalnız hissedebilirsin, her şey yolunda olsa bile. Zor zamanlarda kelimeler değil, bir dokunuş seni sakinleştiriyor.",
        "Herkesin temas ihtiyacı aynı değil. Ne kadar ve nasıl temas istediğini konuşmak ikinizin de rahat etmesini sağlar.",
      ],
      strengths: ["Sıcak ve sevecensin", "İnsanları rahatlatma yeteneğin var", "Anın içinde olmayı biliyorsun"],
      watchOut: ["Temastan kaçınan partneri sevgisiz sanma", "Uzak mesafe dönemleri senin için çok zor olabilir"],
      bestMatch: "zaman",
      giftLink: { href: "/hediye?ilgi=bakim#bulucu", label: "Rahatlatan bakım ve konfor hediyeleri" },
    },
  ],
};
