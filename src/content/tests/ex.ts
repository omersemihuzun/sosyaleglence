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
        { text: "Güzel bir anı olarak gülümserim.", scores: {} },
        { text: "Boğazım düğümlenir, o günlere dönerim.", scores: { ozlem: 3 } },
        { text: "Sinirlenirim, şarkıyı bile bana zehir etti.", scores: { kirginlik: 3 } },
        { text: "Hemen telefonu açıp onun hesabına bakarım.", scores: { takip: 2, ozlem: 1 } },
      ],
    },
    {
      text: "Ex'inin yeni bir ilişkisi olduğunu duydun.",
      options: [
        { text: "Mutlu olsun, sorun değil.", scores: {} },
        { text: "Yeni sevgilisinin profilini en eski fotoğrafına kadar incelerim.", scores: { takip: 3, kiyas: 1 } },
        { text: "\"Benden sonra bu mu?\" diye düşünürüm.", scores: { kiyas: 2, kirginlik: 1 } },
        { text: "İçim burkulur, o gece uyuyamam.", scores: { ozlem: 3 } },
      ],
    },
    {
      text: "Yeni biriyle ilk buluşmadasın. Sohbet güzel gidiyor.",
      options: [
        { text: "Anın tadını çıkarırım.", scores: {} },
        { text: "\"O olsa burada şöyle bir espri yapardı\" diye düşünürüm.", scores: { kiyas: 3, ozlem: 1 } },
        { text: "Sohbet bir yerde ex'ime geliyor, anlatmadan duramıyorum.", scores: { kirginlik: 2, ozlem: 1 } },
        { text: "Bu buluşmanın fotoğrafını ex'imin göreceği şekilde paylaşmayı düşünürüm.", scores: { takip: 1, ozlem: 2 } },
      ],
    },
    {
      text: "Gece 02:00, uykun yok. Telefon elinde.",
      options: [
        { text: "Dizi açar ya da uyumaya çalışırım.", scores: {} },
        { text: "Eski mesajlarımızı okumaya başlarım.", scores: { ozlem: 3 } },
        { text: "Profiline bakarım. Sadece bir kere.", scores: { takip: 3 } },
        { text: "Ona yazmak için mesaj taslağı hazırlar, sonra silerim.", scores: { ozlem: 2, kirginlik: 1 } },
      ],
    },
    {
      text: "Ortak bir arkadaşın \"Seni sordu\" dedi.",
      options: [
        { text: "\"Selam söyle\" derim, o kadar.", scores: {} },
        { text: "Kalbim hızlanır. Ne dedi, nasıl sordu, her detayı öğrenmek isterim.", scores: { ozlem: 3 } },
        { text: "\"Sormasın, hiç ilgilendirmez\" derim.", scores: { kirginlik: 3 } },
        { text: "Hemen ne paylaşmış diye kontrol ederim.", scores: { takip: 2, ozlem: 1 } },
      ],
    },
    {
      text: "Ayrılığın asıl sebebini düşündüğünde ne hissediyorsun?",
      options: [
        { text: "İkimiz de bir şeyler yaptık. Olması gerekeni yaşadık.", scores: {} },
        { text: "Hâlâ çok öfkeliyim. Bana yaptığını unutmadım.", scores: { kirginlik: 3 } },
        { text: "Belki biraz daha çabalasaydık olurdu.", scores: { ozlem: 3 } },
        { text: "Onun gibisini bulamayacağım diye korkuyorum.", scores: { kiyas: 2, ozlem: 1 } },
      ],
    },
    {
      text: "Story'ni kimlerin izlediğine bakıyorsun.",
      options: [
        { text: "Liste umrumda değil, bakmam bile.", scores: {} },
        { text: "İlk onu ararım. İzlemiş mi?", scores: { takip: 3 } },
        { text: "İzlemişse \"Hâlâ bakıyor\" diye içim kıpırdar.", scores: { ozlem: 2, takip: 1 } },
        { text: "İzlemişse sinir olurum, ne işi var?", scores: { kirginlik: 2, takip: 1 } },
      ],
    },
    {
      text: "Eski fotoğraflarınız hâlâ telefonunda.",
      options: [
        { text: "Arşivde duruyor. Hayatımın bir parçası, sorun değil.", scores: {} },
        { text: "Arada açıp bakarım.", scores: { ozlem: 3 } },
        { text: "Hepsini sildim, birkaç tanesini de onu kötülerken arkadaşlarıma gösterdim.", scores: { kirginlik: 3 } },
        { text: "Sildim ama bir klasörde yedeği var.", scores: { ozlem: 2, takip: 1 } },
      ],
    },
    {
      text: "Yeni sevgilin (ya da flörtün) bir şey yaptı ve bu sana ex'ini hatırlattı.",
      options: [
        { text: "Fark ederim, geçip giderim.", scores: {} },
        { text: "\"O bunu daha iyi yapardı\" diye geçiririm içimden.", scores: { kiyas: 3 } },
        { text: "Ex'imin kötü bir alışkanlığına benziyorsa hemen tepki veririm.", scores: { kirginlik: 2, kiyas: 1 } },
        { text: "Birden hüzünlenirim.", scores: { ozlem: 3 } },
      ],
    },
    {
      text: "Ex'inin doğum günü yaklaşıyor.",
      options: [
        { text: "Hatırlamazdım bile.", scores: {} },
        { text: "Mesaj atsam mı diye günlerce düşünürüm.", scores: { ozlem: 3 } },
        { text: "Atmam ama kimlerin kutladığını takip ederim.", scores: { takip: 3 } },
        { text: "Hatırlarım ve kutlamamakla bir mesaj verdiğimi düşünürüm.", scores: { kirginlik: 2 } },
      ],
    },
    {
      text: "Arkadaşların seninle ilgili ne söylüyor?",
      options: [
        { text: "Konusu bile açılmıyor artık.", scores: {} },
        { text: "\"Yine mi o?\" diyorlar, sık bahsediyorum.", scores: { ozlem: 2, kirginlik: 1 } },
        { text: "Onun hakkındaki her haberi ben getiriyorum.", scores: { takip: 3 } },
        { text: "\"Herkesi onunla kıyaslıyorsun\" diyorlar.", scores: { kiyas: 3 } },
      ],
    },
    {
      text: "Ex'inden gece yarısı \"naber\" mesajı geldi.",
      options: [
        { text: "Görmezden gelirim ya da kısa, nazik bir cevap veririm.", scores: {} },
        { text: "Kalbim yerinden çıkar, hemen cevap veririm.", scores: { ozlem: 3 } },
        { text: "Uzun bir mesajla ona yaptıklarını hatırlatırım.", scores: { kirginlik: 3 } },
        { text: "Cevap vermem ama ne demek istediğini düşünerek sabahlarım.", scores: { ozlem: 2, takip: 1 } },
      ],
    },
    {
      text: "\"İdeal partnerin nasıl biri?\" diye sorulsa...",
      options: [
        { text: "Kendi listemi yaparım. Ex'imle bir ilgisi yok.", scores: {} },
        { text: "Farkında olmadan ex'imi tarif ederim.", scores: { kiyas: 2, ozlem: 1 } },
        { text: "\"Ex'imin tam tersi\" derim.", scores: { kirginlik: 2, kiyas: 1 } },
        { text: "Ex'imin iyi yanlarıyla yeni birinin olmayan yanlarını kıyaslarım.", scores: { kiyas: 3 } },
      ],
    },
    {
      text: "Onu sokakta tesadüfen gördün. Yanında kimse yok.",
      options: [
        { text: "Selam verir, yoluma devam ederim.", scores: {} },
        { text: "Yanına gidip konuşmak isterim, belki bir kahve içeriz.", scores: { ozlem: 3 } },
        { text: "Görmemiş gibi yaparım ama sonra günlerce düşünürüm.", scores: { ozlem: 1, kirginlik: 1, takip: 1 } },
        { text: "Yüzüne bakmam, karşı kaldırıma geçerim.", scores: { kirginlik: 3 } },
      ],
    },
    {
      text: "Şu an dürüstçe söyle: Eğer o geri dönmek istese?",
      options: [
        { text: "Hayır. Kapı kapandı.", scores: {} },
        { text: "Düşünürüm. Belki de evet.", scores: { ozlem: 3 } },
        { text: "Önce özür dilesin, pişman olduğunu göreyim.", scores: { kirginlik: 2, ozlem: 1 } },
        { text: "Hayır derim ama teklif etmesini isterdim.", scores: { kirginlik: 1, kiyas: 1, ozlem: 1 } },
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
