import type { Test } from "@/lib/types";

export const ex: Test = {
  slug: "exini-unuttun-mu-testi",
  title: "Ex'ini Gerçekten Unuttun mu?",
  summary: "\"Çoktan unuttum\" diyorsun. Bakalım story izleyenler listesi de aynı şeyi söylüyor mu?",
  intro:
    "Unutmak, adını duyunca hiçbir şey hissetmemek demek değil. Bazen hâlâ özlersin, bazen gizlice bakarsın, bazen de kızgınlık bitmez. 15 senaryoda dürüstçe seç, nerede olduğunu gör.",
  emoji: "💔",
  color: "#8E3B63",
  category: "ilişki",
  metaDescription:
    "Ex'ini unuttun mu testi: özlem, sosyal medya takibi, kırgınlık ve kıyaslama eğilimini 15 senaryoyla ölç. Ex'ine hâlâ ne kadar bağlısın, öğren.",
  headline: {
    label: "Hâlâ bağlılık oranın",
    weights: { ozlem: 1.4, takip: 1, kirginlik: 0.8, kiyas: 1 },
  },
  dimensions: [
    { id: "ozlem", label: "Özlem", low: "Geride kaldı", high: "Hâlâ aklında" },
    { id: "takip", label: "Gizli takip", low: "Bakmazsın", high: "Her story'yi görürsün" },
    { id: "kirginlik", label: "Kırgınlık", low: "Affettin", high: "Hesap kapanmadı" },
    { id: "kiyas", label: "Kıyaslama", low: "Yeni sayfa açtın", high: "Herkesi onunla ölçersin" },
  ],
  questions: [
    {
      text: "Kafede çalan şarkı, ikinizin \"o\" şarkısı.",
      options: [
        { text: "Güzel bir anı olarak gülümserim; o kadar, gün devam eder.", scores: {} },
        { text: "Boğazım düğümlenir; kimseyle öyle bir şarkım olmadı diye düşünürüm.", scores: { ozlem: 2, kiyas: 1 } },
        { text: "Sinirlenirim; o insan bu şarkıyı bile bana zehir etti.", scores: { kirginlik: 2, ozlem: 1 } },
        { text: "Spotify'da son zamanlarda ne dinlediğine bir bakarım.", scores: { takip: 2, ozlem: 1 } },
      ],
    },
    {
      text: "Ex'inin yeni bir ilişkisi olduğunu ortak bir arkadaştan duydun.",
      options: [
        { text: "Mutlu olsun derim; yine de o gün biraz durgun geçer.", scores: { ozlem: 1 } },
        { text: "Yeni sevgilisinin profilini en eski fotoğrafına kadar incelerim.", scores: { takip: 2, kiyas: 1 } },
        { text: "\"Benden sonra bu mu yani?\" diye içimden geçiririm.", scores: { kiyas: 2, kirginlik: 1 } },
        { text: "İçim burkulur; ben neden hâlâ yerimde sayıyorum diye düşünürüm.", scores: { ozlem: 2, kiyas: 1 } },
      ],
    },
    {
      text: "Yeni biriyle ilk buluşmadasın. Sohbet güzel gidiyor.",
      options: [
        { text: "Anın tadını çıkarırım; geçmişi bu masaya hiç getirmem.", scores: {} },
        { text: "\"O olsa burada şöyle bir espri yapardı\" diye geçiririm içimden.", scores: { kiyas: 2, ozlem: 1 } },
        { text: "Sohbet bir yerde ex'ime gelir; beni ne kadar yorduğunu anlatırım.", scores: { kirginlik: 2, kiyas: 1 } },
        { text: "Buluşmadan bir story paylaşırım; görür mü diye de bakarım.", scores: { takip: 2, ozlem: 1 } },
      ],
    },
    {
      text: "Gece 02:00, uykun yok. Telefon elinde.",
      options: [
        { text: "Bir dizi açarım; aklıma gelse de profiline girmem.", scores: {} },
        { text: "Eski mesajlarımızı açıp yukarı doğru okumaya başlarım.", scores: { ozlem: 2, takip: 1 } },
        { text: "Profiline girerim; sadece bir kere, kendime söz veririm.", scores: { takip: 2, ozlem: 1 } },
        { text: "Ona söyleyemediklerimi uzun bir taslağa yazar, sonra silerim.", scores: { kirginlik: 2, ozlem: 1 } },
      ],
    },
    {
      text: "Ortak bir arkadaşın \"Seni sordu\" dedi.",
      options: [
        { text: "\"Selam söyle\" derim; ama nasıl sorduğunu da merak ederim.", scores: { ozlem: 1, takip: 1 } },
        { text: "Kalbim hızlanır; ne dedi, nasıl sordu, her detayı isterim.", scores: { ozlem: 2, kiyas: 1 } },
        { text: "\"Sormasın, beni hiç ilgilendirmez\" derim, biraz da sertçe.", scores: { kirginlik: 2, ozlem: 1 } },
        { text: "Hemen son paylaşımlarına bakıp ne durumda olduğunu anlarım.", scores: { takip: 2, ozlem: 1 } },
      ],
    },
    {
      text: "Ayrılığın asıl sebebini düşündüğünde ne hissediyorsun?",
      options: [
        { text: "İkimiz de bir şeyler yaptık; olması gerekeni yaşadık.", scores: {} },
        { text: "Hâlâ öfkeliyim; kimse bana onun kadar haksızlık etmedi.", scores: { kirginlik: 2, kiyas: 1 } },
        { text: "Belki biraz daha çabalasaydık olurdu diye düşünürüm.", scores: { ozlem: 2, kirginlik: 1 } },
        { text: "Onun gibisini bir daha bulamayacağım diye korkarım.", scores: { kiyas: 2, ozlem: 1 } },
      ],
    },
    {
      text: "Story'ni kimlerin izlediğine bakıyorsun.",
      options: [
        { text: "Listeye pek bakmam; kim izlediyse izledi, umrumda değil.", scores: {} },
        { text: "İlk onu ararım: izlemiş mi, kaçta izlemiş?", scores: { takip: 2, ozlem: 1 } },
        { text: "İzlemişse \"Hâlâ bakıyor demek\" diye içim kıpırdar.", scores: { ozlem: 2, takip: 1 } },
        { text: "İzlemişse sinir olurum; ne işi var benim story'mde?", scores: { kirginlik: 2, takip: 1 } },
      ],
    },
    {
      text: "Eski fotoğraflarınız hâlâ telefonunda.",
      options: [
        { text: "Arşivde duruyor; hayatımın bir parçası, silmeye gerek duymam.", scores: {} },
        { text: "Arada açıp bakarım; o zamanki halimizi özlerim.", scores: { ozlem: 2, kiyas: 1 } },
        { text: "Hepsini sildim; birkaçını da arkadaşlarıma dert yanarken gösterdim.", scores: { kirginlik: 2, ozlem: 1 } },
        { text: "Galeriden sildim ama bulutta bir klasörde yedeği duruyor.", scores: { ozlem: 2, takip: 1 } },
      ],
    },
    {
      text: "Yeni flörtün bir şey yaptı ve bu sana ex'ini hatırlattı.",
      options: [
        { text: "Fark ederim ama karşımdakini kendi haliyle görmeye çalışırım.", scores: {} },
        { text: "\"O bunu daha güzel yapardı\" diye geçiririm içimden.", scores: { kiyas: 2, ozlem: 1 } },
        { text: "Ex'imin kötü bir huyuna benziyorsa hemen sert tepki veririm.", scores: { kirginlik: 2, kiyas: 1 } },
        { text: "Birden hüzünlenirim; eve gidince eski fotoğraflarına bakarım.", scores: { ozlem: 2, takip: 1 } },
      ],
    },
    {
      text: "Ex'inin doğum günü yaklaşıyor.",
      options: [
        { text: "Takvim hatırlatırsa hatırlarım; o kadar, bir şey yapmam.", scores: {} },
        { text: "Kısa bir mesaj atsam mı diye günlerce kendimle tartışırım.", scores: { ozlem: 2, kiyas: 1 } },
        { text: "Atmam ama kimlerin kutladığını story'lerden takip ederim.", scores: { takip: 2, ozlem: 1 } },
        { text: "Kutlamayarak ona bir mesaj verdiğimi düşünürüm.", scores: { kirginlik: 2, ozlem: 1 } },
      ],
    },
    {
      text: "Arkadaşların ex'in konusunda seninle ilgili ne söylüyor?",
      options: [
        { text: "Konusu bile açılmıyor; açılırsa da geçip gidiyor.", scores: {} },
        { text: "\"Yine mi o?\" diyorlar; sık sık bahsettiğim doğru.", scores: { ozlem: 2, kirginlik: 1 } },
        { text: "Onunla ilgili her haberi gruba ilk ben getiriyorum.", scores: { takip: 2, kiyas: 1 } },
        { text: "\"Herkesi onunla kıyaslıyorsun\" diye takılıyorlar.", scores: { kiyas: 2, ozlem: 1 } },
      ],
    },
    {
      text: "Ex'inden gece yarısı \"naber\" mesajı geldi.",
      options: [
        { text: "Sabah kısa ve nazik bir cevap yazarım; devamını getirmem.", scores: {} },
        { text: "Kalbim yerinden çıkar; o saatte hemen cevap yazarım.", scores: { ozlem: 2, kiyas: 1 } },
        { text: "Uzun bir mesajla ona yaptıklarını tek tek hatırlatırım.", scores: { kirginlik: 2, ozlem: 1 } },
        { text: "Cevap vermem ama profiline girip neler olduğunu çözmeye çalışırım.", scores: { takip: 2, ozlem: 1 } },
      ],
    },
    {
      text: "Biri \"İdeal partnerin nasıl biri?\" diye sorsa...",
      options: [
        { text: "Kendi listemi yaparım; ex'imle bir ilgisi olmaz.", scores: {} },
        { text: "Farkında olmadan ex'imi tarif ettiğimi sonradan fark ederim.", scores: { kiyas: 2, ozlem: 1 } },
        { text: "\"Ex'imin tam tersi biri\" derim, hiç düşünmeden.", scores: { kirginlik: 2, kiyas: 1 } },
        { text: "Cevap veremem; aklıma hâlâ tek bir isim geliyor.", scores: { ozlem: 2, kiyas: 1 } },
      ],
    },
    {
      text: "Onu sokakta tesadüfen gördün. Yanında kimse yok.",
      options: [
        { text: "Selam verir, yoluma devam ederim; içim biraz kıpırdasa da.", scores: { ozlem: 1 } },
        { text: "Yanına gidip konuşmak isterim; belki bir kahve içeriz.", scores: { ozlem: 2, kiyas: 1 } },
        { text: "Görmemiş gibi yaparım ama nereye gittiğine dikkat ederim.", scores: { takip: 2, ozlem: 1 } },
        { text: "Yüzüne bakmam, karşı kaldırıma geçip adımlarımı hızlandırırım.", scores: { kirginlik: 2, ozlem: 1 } },
      ],
    },
    {
      text: "Şimdi dürüstçe söyle: Eğer o geri dönmek istese?",
      options: [
        { text: "Hayır; güzeldi ama aynı filmi ikinci kez izlemem.", scores: {} },
        { text: "Düşünürüm. Dürüst olmak gerekirse belki de evet.", scores: { ozlem: 2, kiyas: 1 } },
        { text: "Önce özür dilesin; gerçekten pişman mı, bir göreyim.", scores: { kirginlik: 2, ozlem: 1 } },
        { text: "Hayır derim ama bunu teklif etmesini çok isterdim.", scores: { ozlem: 1, kirginlik: 1, kiyas: 1 } },
      ],
    },
  ],
  results: [
    {
      id: "tamamen-bitti",
      name: "Sayfa Kapandı",
      emoji: "🕊️",
      tagline: "Adını duyunca kalp atışın değişmiyor. Tebrikler.",
      profile: { ozlem: 10, takip: 10, kirginlik: 10, kiyas: 10 },
      color: "#2F7D6D",
      description: [
        "Geçmişini inkâr etmiyorsun ama artık orada yaşamıyorsun. Bir şarkı, bir fotoğraf ya da bir isim seni kısa bir anıya götürebilir, ama sonra rahatça bugüne dönüyorsun.",
        "Unutmak bir anda olmaz. Muhtemelen bu noktaya gelmek için bir yas sürecinden geçtin ve onu atlatmayı başardın. Şimdi yeni biri için gerçekten yer var.",
        "Bu noktada en büyük artın şu: Yeni insanları bir başkasının gölgesinde değil, kendileri olarak tanıyabiliyorsun.",
      ],
      strengths: ["Geçmişle barışıksın", "Yeni ilişkilere açık ve hazırsın", "Duygusal olarak özgürsün"],
      watchOut: ["Eski dersleri unutma, aynı kalıplara düşme", "Hâlâ bağlı olan birinin acısını küçümseme"],
      bestMatch: "tamamen-bitti",
    },
    {
      id: "nostaljik",
      name: "Nostalji Kasetçisi",
      emoji: "📼",
      tagline: "Unuttum diyorsun ama eski kaseti hâlâ geri sarıyorsun.",
      profile: { ozlem: 70, takip: 25, kirginlik: 15, kiyas: 40 },
      color: "#8E3B63",
      description: [
        "Sen ona kızgın değilsin, sadece özlüyorsun. O şarkı, o kafe, o espriler... Hepsi hâlâ güzel bir film gibi aklında dönüyor ve bazen o günlere geri dönmeyi hayal ediyorsun.",
        "Nostaljinin bir tuzağı var: Hafıza kötü günleri siliyor, iyi günleri büyütüyor. Özlediğin şey belki o kişi değil, o dönemde nasıl hissettiğin.",
        "Özlemek normal ve geçici. Ama ona dair her anıyı ziyaret etmek yarayı açık tutuyor. Eski mesajları okumayı bir süre bırakmak bile fark yaratır.",
      ],
      strengths: ["Sevdiğin insanlara gerçekten değer veriyorsun", "Güzel anıları kıymetli tutuyorsun", "Kin tutmuyorsun"],
      watchOut: ["Geçmişi idealleştirme", "Eski mesajları okumak iyileşmeyi geciktirir", "Yeni insanlara şans vermeyi erteleme"],
      bestMatch: "tamamen-bitti",
    },
    {
      id: "gizli-takipci",
      name: "Gizli Takipçi",
      emoji: "👁️",
      tagline: "Ona yazmıyorsun. Sadece her şeyini biliyorsun.",
      profile: { ozlem: 35, takip: 80, kirginlik: 25, kiyas: 25 },
      color: "#3B2A6B",
      description: [
        "Ne paylaştığını, kimlerle takıldığını, yeni sevgilisinin adını biliyorsun. Yazmadığın için \"Ben çoktan geçtim\" diyorsun ama parmakların her gece aynı profile gidiyor.",
        "Takip etmek kontrol hissi veriyor: Neler olduğunu bilirsen sürpriz bir acı yaşamazsın. Ama gördüğün her story yarayı yeniden açıyor ve iyileşmeyi sürekli başa sarıyor.",
        "En etkili adım genellikle en basit olanı: sessize almak, arşivlemek, gerekirse engellemek. Bu ona bir mesaj değil, kendine bir iyilik.",
      ],
      strengths: ["Duygularını kontrol altında tutmaya çalışıyorsun", "Dışarıya karşı güçlü bir duruşun var", "Sınırları zorlamadan uzak kalabiliyorsun"],
      watchOut: ["Her bakış iyileşmeyi geciktirir", "Onun hayatı senin hayatından daha çok yer kaplamaya başlayabilir", "Sessize alma ve arşivleme butonları senin dostun"],
      bestMatch: "tamamen-bitti",
    },
    {
      id: "hesap-kapanmadi",
      name: "Hesap Kapanmadı",
      emoji: "🗡️",
      tagline: "Özlemiyorsun. Ama affetmedin de.",
      profile: { ozlem: 20, takip: 30, kirginlik: 80, kiyas: 30 },
      color: "#C2410C",
      description: [
        "Sende kalan duygu özlem değil, öfke. Bir haksızlık yaşandığını düşünüyorsun ve o hesap hâlâ açık. Adı geçtiğinde hemen savunmaya geçiyor, ona dair her haberi bir kanıt gibi saklıyorsun.",
        "Öfke bazen yas sürecinin en güçlü aşamasıdır ve kendini korumana yardım eder. Ama öfkeyi ne kadar uzun taşırsan, o kişiyi hayatında o kadar uzun tutmuş oluyorsun.",
        "Affetmek ona iyilik yapmak değil, o yükü sırtından indirmek. Özür beklemeden kapanış yaşamak mümkün.",
      ],
      strengths: ["Kendine saygın yüksek", "Yanlış olana \"yanlış\" diyebiliyorsun", "Aynı hatayı tekrar etmezsin"],
      watchOut: ["Öfke onu hayatında tutmanın başka bir yolu", "Yeni ilişkileri ex'inin hatalarına karşı savunarak yaşama", "Her sohbeti ex'ine getirmek çevreni yorabilir"],
      bestMatch: "tamamen-bitti",
    },
    {
      id: "geri-donus",
      name: "Geri Dönüş Yolunda",
      emoji: "🔁",
      tagline: "Bu hikâye sence bitmedi.",
      profile: { ozlem: 75, takip: 60, kirginlik: 30, kiyas: 60 },
      color: "#D7102F",
      description: [
        "Özlüyorsun, takip ediyorsun, yeni insanları onunla kıyaslıyorsun. Bir mesaj gelse ne yapacağını aslında biliyorsun. Bu hikâyenin bir devamı olacağını hâlâ umuyorsun.",
        "Bazen ayrılıklar gerçekten yanlış zamanda olur ve ikinci şans işe yarar. Ama bunun için ayrılığa sebep olan şeyin gerçekten değişmiş olması lazım, sadece özlemin değil.",
        "Kendine şunu sor: Özlediğim kişi o mu, yoksa yalnız olmamak mı? Cevap ne olursa olsun, hayatını onun bir mesajına göre beklemeye almak sana haksızlık.",
      ],
      strengths: ["Sevdiğinde gerçekten bağlanıyorsun", "Umut etmekten vazgeçmiyorsun", "Duygularında samimisin"],
      watchOut: ["Beklemek hayatını askıya alabilir", "Ayrılığın sebebini görmezden gelme", "Yeni insanlara haksız kıyaslarla yaklaşma"],
      bestMatch: "nostaljik",
    },
  ],
};
