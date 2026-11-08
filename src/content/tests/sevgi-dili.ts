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
        { text: "Oturup \"Harika iş çıkardın, seninle gurur duyuyorum\" demesini.", scores: { soz: 2, zaman: 1 } },
        { text: "Telefonları kenara bırakıp bütün akşamı yan yana geçirmemizi.", scores: { zaman: 2, temas: 1 } },
        { text: "Ben eve gelmeden sevdiğim yemeği hazırlamış olmasını.", scores: { hizmet: 2, hediye: 1 } },
        { text: "Kapıda uzun uzun sarılıp \"Geçti artık\" diye fısıldamasını.", scores: { temas: 2, soz: 1 } },
      ],
    },
    {
      text: "Doğum günün. Seni en çok ne duygulandırır?",
      options: [
        { text: "Aylar önce bir kere bahsettiğim şeyi hatırlayıp almış olması.", scores: { hediye: 2, zaman: 1 } },
        { text: "El yazısıyla yazılmış, uzun ve içten bir mektup.", scores: { soz: 2, hediye: 1 } },
        { text: "Sadece ikimizin olduğu, telefonsuz bir gün planlaması.", scores: { zaman: 2, hizmet: 1 } },
        { text: "O gün bütün işlerimi üstlenip günü tamamen bana bırakması.", scores: { hizmet: 2, hediye: 1 } },
      ],
    },
    {
      text: "Bir tartışmadan sonra barışırken seni en çok ne yumuşatır?",
      options: [
        { text: "Hiçbir şey demeden yanıma oturup elimi tutması.", scores: { temas: 2, zaman: 1 } },
        { text: "\"Haklıydın, seni anlıyorum\" deyip sonra sarılması.", scores: { soz: 2, temas: 1 } },
        { text: "Küçük bir not ve sevdiğim çikolatayla kapıda belirmesi.", scores: { hediye: 2, soz: 1 } },
        { text: "Akşamı ayırıp ne olduğunu sakin sakin konuşmayı önermesi.", scores: { zaman: 2, soz: 1 } },
      ],
    },
    {
      text: "Bir ilişkide seni en çok ne kırar?",
      options: [
        { text: "Emeğimin hiç fark edilmemesi, bir teşekkür bile duymamak.", scores: { soz: 2, hizmet: 1 } },
        { text: "Birlikteyken aklının ve gözünün hep telefonda olması.", scores: { zaman: 2, temas: 1 } },
        { text: "Özel bir günü \"Unuttum, kusura bakma\" diye eli boş geçirmesi.", scores: { hediye: 2, soz: 1 } },
        { text: "Yardım istediğimde \"Sonra bakarız\" deyip hiç bakmaması.", scores: { hizmet: 2, zaman: 1 } },
      ],
    },
    {
      text: "Sevgilin uzun bir yolculuktan dönüyor. İlk anda ne olsun istersin?",
      options: [
        { text: "Havalimanında koşup birbirimize uzun uzun sarılmamızı.", scores: { temas: 2, zaman: 1 } },
        { text: "Görür görmez gözüme bakıp \"Seni çok özledim\" demesini.", scores: { soz: 2, temas: 1 } },
        { text: "Oradan bana özel, küçük ama düşünülmüş bir şey getirmesini.", scores: { hediye: 2, soz: 1 } },
        { text: "O akşamı hiç kimseye vermeden tamamen bize ayırmamızı.", scores: { zaman: 2, temas: 1 } },
      ],
    },
    {
      text: "Hastasın ve iki gündür evdesin.",
      options: [
        { text: "Çorbamı yapıp ilaçlarımı saati gelince getirmesini.", scores: { hizmet: 2, zaman: 1 } },
        { text: "Yanıma uzanıp başımı okşaması, ateşime arada bakmasını.", scores: { temas: 2, hizmet: 1 } },
        { text: "Bütün gün yanımda kalıp birlikte film izlememizi.", scores: { zaman: 2, temas: 1 } },
        { text: "\"Geçmiş olsun\" notuyla sevdiğim bir şeyi kapıya bırakmasını.", scores: { hediye: 2, soz: 1 } },
      ],
    },
    {
      text: "Hangisi sana \"Bu insan beni gerçekten seviyor\" dedirtir?",
      options: [
        { text: "Arkadaşlarının yanında benden gururla bahsetmesi.", scores: { soz: 2, zaman: 1 } },
        { text: "Benim için çok beklediği maçı bile bırakıp yanıma gelmesi.", scores: { zaman: 2, hizmet: 1 } },
        { text: "Arabamın patlak lastiğini ben fark etmeden değiştirmesi.", scores: { hizmet: 2, hediye: 1 } },
        { text: "Kalabalıkta yürürken elimi bir an bile bırakmaması.", scores: { temas: 2, zaman: 1 } },
      ],
    },
    {
      text: "Sıradan bir salı günü. Seni ne gülümsetir?",
      options: [
        { text: "Hiç sebep yokken öğlen gelen \"Seni düşündüm\" mesajı.", scores: { soz: 2, hediye: 1 } },
        { text: "Masamda beni bekleyen, tam sevdiğim gibi yapılmış bir kahve.", scores: { hediye: 2, hizmet: 1 } },
        { text: "Akşam yemekten sonra birlikte çıktığımız uzun bir yürüyüş.", scores: { zaman: 2, temas: 1 } },
        { text: "Ben bulaşık yıkarken arkamdan gelip sarılması.", scores: { temas: 2, hizmet: 1 } },
      ],
    },
    {
      text: "Yıldönümünüz için hangisini tercih edersin?",
      options: [
        { text: "Özenle seçilmiş, üstüne bir de not yazılmış anlamlı bir hediye.", scores: { hediye: 2, soz: 1 } },
        { text: "İkimize ait bir hafta sonu kaçamağı, telefonlar kapalı.", scores: { zaman: 2, temas: 1 } },
        { text: "Bir yıl boyunca beni neden sevdiğini anlatan bir video.", scores: { soz: 2, hediye: 1 } },
        { text: "Uzun zamandır ertelediğim bir işi benim için halletmesi.", scores: { hizmet: 2, zaman: 1 } },
      ],
    },
    {
      text: "Kalabalık bir partidesiniz ve bir süredir ayrı gruplardasınız.",
      options: [
        { text: "Arada gözüme bakıp sadece ikimizin anlayacağı gibi gülmesi.", scores: { zaman: 2, soz: 1 } },
        { text: "Yanımdan geçerken belime ya da omzuma hafifçe dokunması.", scores: { temas: 2, zaman: 1 } },
        { text: "Bardağım bitince ben söylemeden yenisini getirmesi.", scores: { hizmet: 2, hediye: 1 } },
        { text: "Herkese \"Bu benim sevgilim\" diye gururla tanıştırması.", scores: { soz: 2, temas: 1 } },
      ],
    },
    {
      text: "Partnerinin en çok neyi düzenli olarak yapmasını isterdin?",
      options: [
        { text: "Her gün en az bir kere içten bir iltifat etmesini.", scores: { soz: 2, zaman: 1 } },
        { text: "Her hafta bir akşamı sadece bize ayırıp planlamasını.", scores: { zaman: 2, hizmet: 1 } },
        { text: "Arada \"Bunu görünce seni düşündüm\" diye ufak şeyler almasını.", scores: { hediye: 2, soz: 1 } },
        { text: "Her fırsatta, durup dururken gelip bana sarılmasını.", scores: { temas: 2, zaman: 1 } },
      ],
    },
    {
      text: "Taşınıyorsun ve her yer koli dolu.",
      options: [
        { text: "Bütün gün gelip benimle birlikte koli taşımasını.", scores: { hizmet: 2, zaman: 1 } },
        { text: "Arada bir \"Çok iyi gidiyorsun\" diye moral vermesini.", scores: { soz: 2, zaman: 1 } },
        { text: "Yeni eve küçük bir bitki ya da bir süs getirmesini.", scores: { hediye: 2, hizmet: 1 } },
        { text: "İşler bitince yorgun argın kanepede birlikte uzanmamızı.", scores: { temas: 2, zaman: 1 } },
      ],
    },
    {
      text: "Uzak mesafe ilişkisi yaşıyorsunuz. En çok neyi özlersin?",
      options: [
        { text: "Dokunmayı, sarılmayı; görüntülü konuşma bunu hiç tutmuyor.", scores: { temas: 2, zaman: 1 } },
        { text: "Birlikte sıradan şeyler yapmayı; markete gitmeyi bile.", scores: { zaman: 2, hizmet: 1 } },
        { text: "Benim için yaptığı küçük iyilikleri, çayımı demlemesini.", scores: { hizmet: 2, hediye: 1 } },
        { text: "Kargoyla gelen sürpriz paketleri ve içlerindeki notları.", scores: { hediye: 2, soz: 1 } },
      ],
    },
    {
      text: "Sen sevgini en çok nasıl gösteriyorsun?",
      options: [
        { text: "Söyleyerek; sık sık \"Seni seviyorum\" der, sarılırım.", scores: { soz: 2, temas: 1 } },
        { text: "Onun hayatını sessizce kolaylaştırarak, işlerini üstlenerek.", scores: { hizmet: 2, hediye: 1 } },
        { text: "Hediyeler, sürprizler hazırlayarak; planlamaya bayılırım.", scores: { hediye: 2, hizmet: 1 } },
        { text: "Yanında olup dokunarak; elini tutmadan duramam.", scores: { temas: 2, zaman: 1 } },
      ],
    },
    {
      text: "Bir ilişkide asla vazgeçemeyeceğin şey hangisi?",
      options: [
        { text: "Birlikte geçirilen gerçek, bölünmemiş zaman.", scores: { zaman: 2, soz: 1 } },
        { text: "Takdir edildiğimi arada bir de olsa sözle duymak.", scores: { soz: 2, hediye: 1 } },
        { text: "Fiziksel yakınlık; dokunulmadıkça yavaş yavaş solarım.", scores: { temas: 2, zaman: 1 } },
        { text: "Hayatın yükünü günlük işlerde birlikte paylaşmak.", scores: { hizmet: 2, zaman: 1 } },
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
