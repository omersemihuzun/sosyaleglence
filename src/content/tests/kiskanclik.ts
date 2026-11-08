import type { Test } from "@/lib/types";

export const kiskanclik: Test = {
  slug: "kiskanclik-testi",
  title: "Ne Kadar Kıskançsın?",
  summary: "Gece gelen bir mesaj, uzun bir bakış, ekranı ters duran bir telefon. Bakalım sen ne yapıyorsun.",
  intro:
    "Kıskançlık tek bir duygu değil. Kimi sahiplenir, kimi sessizce iz sürer, kimi içine kapanır. 15 gerçek hayat senaryosunda ilk aklına geleni seç; doğru ya da yanlış cevap yok.",
  emoji: "👀",
  color: "#D7102F",
  category: "ilişki",
  metaDescription:
    "Kıskançlık testi: 15 gerçekçi senaryo ile sahiplenme, güvensizlik, kontrol ve sessiz kırgınlık seviyeni ölç. Kıskançlık tipini öğren, sevgilinle karşılaştır.",
  headline: {
    label: "Kıskançlık seviyen",
    weights: { sahiplenme: 1, guvensizlik: 1, kontrol: 1, sessizlik: 1 },
  },
  dimensions: [
    { id: "sahiplenme", label: "Sahiplenme", low: "Özgür bırakırsın", high: "Benim olan benimdir" },
    { id: "guvensizlik", label: "Güvensizlik", low: "Kendinden eminsin", high: "Kıyaslamaya hazırsın" },
    { id: "kontrol", label: "Kontrol", low: "Merak etmezsin", high: "İz sürersin" },
    { id: "sessizlik", label: "Sessiz kırgınlık", low: "Açık konuşursun", high: "İçine atar, tavırla söylersin" },
  ],
  questions: [
    {
      text: "Sevgilin uyurken telefonuna gece 01:40'ta \"uyudun mu? 🙂\" mesajı geliyor. Gönderen eski bir iş arkadaşı.",
      options: [
        { text: "Sabah \"Bu saatte yazması hoşuma gitmedi\" der, netleştiririm.", scores: { sahiplenme: 2, kontrol: 1 } },
        { text: "Uyandırmam ama o gece benim uykum kaçar, kafamda kurarım.", scores: { guvensizlik: 2, sessizlik: 1 } },
        { text: "Ekran kilidi açıksa konuşmanın öncesine bir göz atarım.", scores: { kontrol: 2, guvensizlik: 1 } },
        { text: "Kendi işi; anlatmak isterse anlatır, sorup büyütmem.", scores: { sessizlik: 1 } },
      ],
    },
    {
      text: "Sevgilin arkadaşlarıyla iki günlük kamp planı yapmış. Grupta hiç tanımadığın iki kişi var.",
      options: [
        { text: "\"Kimler geliyor?\" diye sorar, içim rahat etsin diye dinlerim.", scores: { guvensizlik: 1, kontrol: 1 } },
        { text: "\"Ben de gelsem fena olmaz aslında\" derim, davet beklemeden.", scores: { sahiplenme: 2, kontrol: 1 } },
        { text: "\"Eğlenin\" derim ama o iki gün aklım hep orada kalır.", scores: { guvensizlik: 2, sessizlik: 1 } },
        { text: "O hafta sonunu ben de kendi arkadaşlarımla doldururum.", scores: {} },
      ],
    },
    {
      text: "Bir düğündesiniz. Sevgilin eski sınıf arkadaşıyla yirmi dakikadır kahkahalarla sohbet ediyor.",
      options: [
        { text: "Yanlarına gider, sohbete katılır, doğal bir şekilde elini tutarım.", scores: { sahiplenme: 2, kontrol: 1 } },
        { text: "O an bir şey demem ama dönüşte arabada sessiz kalırım.", scores: { sessizlik: 2, guvensizlik: 1 } },
        { text: "Benimle en son ne zaman böyle güldü diye düşünmeye başlarım.", scores: { guvensizlik: 2, sessizlik: 1 } },
        { text: "Sonra gülerek \"Epey dertleştiniz\" der, merakımı saklamam.", scores: { sahiplenme: 1, guvensizlik: 1 } },
      ],
    },
    {
      text: "Sevgilinin eski sevgilisi, ondan iki yıl sonra ilk kez onun story'sini beğenmiş.",
      options: [
        { text: "Ex'in profiline girip son zamanlarda neler yaptığına bakarım.", scores: { kontrol: 2, guvensizlik: 1 } },
        { text: "\"Ex'in beğenmiş\" der, yüzündeki ifadeye dikkat ederim.", scores: { kontrol: 1, sahiplenme: 1 } },
        { text: "Takipten çıkarmasının ikimiz için de iyi olacağını söylerim.", scores: { sahiplenme: 2, kontrol: 1 } },
        { text: "Bir beğeniye anlam yüklemem; yüklemeye başlarsam bitmez.", scores: {} },
      ],
    },
    {
      text: "Sevgilin \"Bu akşam biraz yalnız kalmak istiyorum\" yazdı. Sebep söylemedi.",
      options: [
        { text: "\"Tamam\" derim, sebebini de sormam; isterse kendisi anlatır.", scores: { sessizlik: 1 } },
        { text: "Bana mı kırgın diye akşam boyu son günlerimizi kafamda tararım.", scores: { guvensizlik: 2, sessizlik: 1 } },
        { text: "Arada son görülmesine bakar, kiminle yazıştığını tahmin ederim.", scores: { kontrol: 2, guvensizlik: 1 } },
        { text: "\"Bir şey olduysa bana söyleyebilirsin\" diye yine de yazarım.", scores: { sahiplenme: 1, guvensizlik: 1 } },
      ],
    },
    {
      text: "Ortak bir arkadaşın, sevgilinin yeni tanıştığı biri için \"O çok eğlenceli\" dediğini anlatıyor.",
      options: [
        { text: "Sevgilime gülerek \"Ben eğlenceli değil miyim?\" diye sorarım.", scores: { guvensizlik: 1, sahiplenme: 1 } },
        { text: "Sesli söylemem ama kendimi o kişiyle kıyaslamaya başlarım.", scores: { guvensizlik: 2, sessizlik: 1 } },
        { text: "O kişiyle baş başa çok görüşmemesini tercih ettiğimi söylerim.", scores: { sahiplenme: 2, kontrol: 1 } },
        { text: "O kişinin hesabını bulup nasıl biri olduğuna bir bakarım.", scores: { kontrol: 2, guvensizlik: 1 } },
      ],
    },
    {
      text: "Sevgilinin telefonu masada ekranı aşağı dönük duruyor. Eskiden hep yukarı dönük dururdu.",
      options: [
        { text: "Fark ederim ama tek bir işaretten koca bir hikâye çıkarmam.", scores: {} },
        { text: "Şakayla karışık \"Ne saklıyorsun bakalım?\" diye takılırım.", scores: { sahiplenme: 1, kontrol: 1 } },
        { text: "Kalktığında ekranına bir göz atma fırsatı kollarım.", scores: { kontrol: 2, sessizlik: 1 } },
        { text: "Bir şey demem ama akşam boyu gözüm o telefona kayar.", scores: { guvensizlik: 2, sessizlik: 1 } },
      ],
    },
    {
      text: "Doğum gününde ex'i ona özenli bir mesaj atmış, o da içten bir teşekkür yazmış.",
      options: [
        { text: "Teşekkürü fazla sıcak bulduğumu açık açık söylerim.", scores: { sahiplenme: 2, guvensizlik: 1 } },
        { text: "Hâlâ bir şey hissediyor mu diye kafamda senaryo kurarım.", scores: { guvensizlik: 2, sessizlik: 1 } },
        { text: "Aralarında saygının kalmasını olgunluk sayar, karışmam.", scores: {} },
        { text: "Daha önce de yazışmışlar mı diye sohbeti yukarı kaydırırım.", scores: { kontrol: 2, guvensizlik: 1 } },
      ],
    },
    {
      text: "Sevgilin yeni işinde birlikte çalıştığı birinden neredeyse her akşam bahsediyor.",
      options: [
        { text: "\"Bu kişiden epey bahsediyorsun\" diye gülerek söylerim.", scores: { sahiplenme: 1, guvensizlik: 1 } },
        { text: "Adını her duyduğumda içim kıpırdar ama konuyu değiştiririm.", scores: { sessizlik: 2, guvensizlik: 1 } },
        { text: "O kişiyi sosyal medyada bulup fotoğraflarına bakarım.", scores: { kontrol: 2, guvensizlik: 1 } },
        { text: "Bir iş çıkışı yanına uğrayıp o kişiyle tanışmak isterim.", scores: { sahiplenme: 2, kontrol: 1 } },
      ],
    },
    {
      text: "Çiftler arasında sürekli konum paylaşımı hakkında ne düşünüyorsun?",
      options: [
        { text: "Hep açık olmalı; saklanacak bir şey yoksa sorun ne ki?", scores: { kontrol: 2, sahiplenme: 1 } },
        { text: "Sadece gece dönüşlerinde, güvenlik için açık olsun yeter.", scores: { kontrol: 1, guvensizlik: 1 } },
        { text: "Gerek yok; merak edersem sorarım, cevabına da güvenirim.", scores: {} },
        { text: "Açık olsun ama bakmam. Genelde. Kötü bir günüm hariç.", scores: { guvensizlik: 2, kontrol: 1 } },
      ],
    },
    {
      text: "Bir tartışmanın hemen ardından sevgilin arkadaşlarıyla dışarı çıktı.",
      options: [
        { text: "Şimdi beni anlatıyordur diye evde için için kendimi yerim.", scores: { guvensizlik: 2, sessizlik: 1 } },
        { text: "Ben de çıkarım; telefonumu da o gece pek açmam.", scores: { sessizlik: 2, sahiplenme: 1 } },
        { text: "Nerede ve kimlerle olduğunu kısa bir mesajla öğrenirim.", scores: { kontrol: 2, sahiplenme: 1 } },
        { text: "Rahatlarım; konuyu açmayı da onun dönüşüne bırakırım.", scores: { sessizlik: 1 } },
      ],
    },
    {
      text: "Sevgilin bir akşam sakin bir şekilde \"Biraz kıskançsın\" dedi.",
      options: [
        { text: "\"Seni sevdiğim için\" derim; biraz kıskançlık sevgidendir.", scores: { sahiplenme: 2, guvensizlik: 1 } },
        { text: "İçerlerim; birkaç gün hiçbir şeye tepki vermem, görsün.", scores: { sessizlik: 2, guvensizlik: 1 } },
        { text: "\"Asıl sorun senin beni hiç kıskanmaman\" diye dönerim.", scores: { guvensizlik: 2, sahiplenme: 1 } },
        { text: "Hangi anlarda öyle hissettirdiğimi tek tek sorarım.", scores: { guvensizlik: 1 } },
      ],
    },
    {
      text: "Sevgilinin en yakın arkadaşının ona eskiden ilgi duyduğunu öğrendin.",
      options: [
        { text: "Arkadaşlıklarına karışmam ama baş başa tatile itiraz ederim.", scores: { sahiplenme: 2, kontrol: 1 } },
        { text: "Onunla ben de arkadaş olurum; uzaktan kuşkulanmaktan iyidir.", scores: { kontrol: 1, sahiplenme: 1 } },
        { text: "Aralarında neler konuştuklarını merak eder, arada sorarım.", scores: { kontrol: 2, guvensizlik: 1 } },
        { text: "Bir şey demem ama ikisi birlikte gülünce içim cız eder.", scores: { guvensizlik: 2, sessizlik: 1 } },
      ],
    },
    {
      text: "Yolda yürürken sevgilin karşıdan gelen birine biraz uzun bakıyor.",
      options: [
        { text: "\"Beğendin mi?\" diye sorarım; gülerek ama yarı ciddi.", scores: { sahiplenme: 1, guvensizlik: 1 } },
        { text: "Ses etmem ama yürüyüşün geri kalanında suskunlaşırım.", scores: { sessizlik: 2, guvensizlik: 1 } },
        { text: "Kendimi o kişiyle kıyaslar, eve gelince aynaya uzun uzun bakarım.", scores: { guvensizlik: 2, sessizlik: 1 } },
        { text: "İnsanlar bakar, ben de bakıyorum; bunu dert edinmem.", scores: {} },
      ],
    },
    {
      text: "Mesajına üç saattir dönmedi ama bu arada story atmış.",
      options: [
        { text: "\"Story atmaya vaktin var ama\" diye hemen yazarım.", scores: { sahiplenme: 2, kontrol: 1 } },
        { text: "Ben de saatlerce dönmem; aynı tavrı o da görsün.", scores: { sessizlik: 2, sahiplenme: 1 } },
        { text: "Bana olan ilgisi azaldı mı diye düşünmeye başlarım.", scores: { guvensizlik: 2, sessizlik: 1 } },
        { text: "Story atmak cevap yazmaktan kolay; dönünce konuşuruz.", scores: {} },
      ],
    },
  ],
  results: [
    {
      id: "sakin-liman",
      name: "Sakin Liman",
      emoji: "⚓",
      tagline: "Kıskançlık sende uğrayıp geçen bir misafir.",
      profile: { sahiplenme: 8, guvensizlik: 8, kontrol: 8, sessizlik: 8 },
      color: "#2F7D6D",
      description: [
        "Sevgilinin dünyasının senden ibaret olmadığını biliyorsun ve bundan rahatsız değilsin. Gece gelen bir mesaj, uzun bir sohbet ya da eski bir tanıdık seni pek sarsmıyor.",
        "Bu, umursamaz olduğun anlamına gelmiyor. Güveni bir kez verip her gün yeniden sorgulamamayı seçiyorsun. Yanındaki kişi kendini nefes alabilir hissediyor.",
        "Tek risk şu: Partnerin bazen \"Hiç mi kıskanmıyorsun?\" diye sorabilir. Bazı insanlar ilgiyi biraz kıskançlıkla ölçer. Sakinliğinin ilgisizlik gibi görünmemesi için duygularını söze dökmek iyi gelir.",
      ],
      strengths: ["Güven veriyorsun, kimse yanında kendini sorguda hissetmiyor", "Krizleri büyütmüyorsun", "Partnerinin arkadaşlıklarına alan tanıyorsun"],
      watchOut: ["Rahatlığın bazen ilgisizlik gibi okunabilir", "Gerçekten rahatsız olduğun şeyleri de geçiştirme riskin var"],
      bestMatch: "dengeli-romantik",
    },
    {
      id: "dengeli-romantik",
      name: "Dengeli Romantik",
      emoji: "💞",
      tagline: "Biraz kıskanırsın ama bunu konuşarak çözersin.",
      profile: { sahiplenme: 35, guvensizlik: 30, kontrol: 22, sessizlik: 22 },
      color: "#E0567A",
      description: [
        "Kıskançlık sende var, saklamıyorsun da. Ama onu bir silah gibi değil, bir sinyal gibi kullanıyorsun: \"Bu beni rahatsız etti, konuşalım.\"",
        "İlişkide ilgi görmek istiyorsun ve bunu açıkça söylüyorsun. Sevgilinin özel alanına saygı duyuyorsun ama tamamen umursamaz da değilsin. Çoğu insanın aradığı denge tam olarak bu.",
        "Bazen bir mesaj ya da bir bakış aklına takılabiliyor. Fark ettiğin şey şu: Kafanda büyütmek yerine sormak her zaman daha az yoruyor.",
      ],
      strengths: ["Duygularını dürüstçe ifade ediyorsun", "Hem ilgi gösterip hem alan tanıyabiliyorsun", "Tartışmaları çözüme bağlıyorsun"],
      watchOut: ["Yorgun ya da stresli olduğun dönemlerde hassasiyetin artabilir", "Küçük şeyleri \"sadece soruyorum\" diye sık sık açmak birikebilir"],
      bestMatch: "sakin-liman",
    },
    {
      id: "atesli-koruyucu",
      name: "Ateşli Koruyucu",
      emoji: "🔥",
      tagline: "Sevdiğine kimse yan bakamaz, sen de bunu saklamazsın.",
      profile: { sahiplenme: 78, guvensizlik: 35, kontrol: 40, sessizlik: 18 },
      color: "#D7102F",
      description: [
        "Senin için sevmek sahiplenmekle iç içe. Birisi sevgiline fazla ilgi gösterdiğinde bunu hemen fark ediyor ve tepkini saklamıyorsun. Ne hissediyorsan yüzünde.",
        "İyi tarafı şu: Seninle ilişki tahmin edilebilir. Kırıldığında söylüyorsun, sessizce cezalandırmıyorsun. Partnerin nerede durduğunu her zaman biliyor.",
        "Ama koruma ile kısıtlama arasındaki çizgi ince. \"Onunla görüşme\", \"Bunu giyme\", \"Engelle\" gibi cümleler sevgi gibi hissettirse de zamanla karşı tarafı boğabilir.",
      ],
      strengths: ["Dürüst ve doğrudansın", "Sevgini net gösteriyorsun", "Sorunları erteleme yerine hemen konuşuyorsun"],
      watchOut: ["Sahiplenme kontrole dönüşebilir", "Tepkilerin anlık ve sert olabiliyor", "Partnerinin arkadaşlıklarını daraltma eğilimi"],
      bestMatch: "dengeli-romantik",
    },
    {
      id: "sessiz-dedektif",
      name: "Sessiz Dedektif",
      emoji: "🕵️",
      tagline: "Bir şey sormazsın. Çünkü zaten bakmışsındır.",
      profile: { sahiplenme: 35, guvensizlik: 45, kontrol: 78, sessizlik: 55 },
      color: "#3B2A6B",
      description: [
        "Dışarıdan sakin görünüyorsun ama arka planda bir soruşturma dosyası açık. Son görülme, yeni takip edilenler, story'yi kimin izlediği... Hepsi notlarında.",
        "Bunu genelde kötü niyetten değil, emin olmak istediğin için yapıyorsun. Sorup kırıcı bir cevap almaktansa kendin öğrenmek daha güvenli geliyor.",
        "Sorun şu: Bulduğun şeyleri de sorun etmeden içinde tutuyorsun ve partnerin neden gergin olduğunu anlamıyor. Bir de, aradığını bulamasan bile arama hissi geçmiyor.",
      ],
      strengths: ["Detayları kaçırmayan dikkatli bir gözlemcisin", "Sakin görünmeyi başarıyorsun", "Krizi büyütmek yerine bilgi toplamayı seçiyorsun"],
      watchOut: ["Kontrol etmek kısa süreli rahatlatır ama güveni büyütmez", "Bulduklarını konuşmadan biriktirmek patlamaya döner", "Partnerinin mahremiyeti zedelenebilir"],
      bestMatch: "sakin-liman",
    },
    {
      id: "kirilgan-kalp",
      name: "Kırılgan Kalp",
      emoji: "🥀",
      tagline: "Kıskançlığın öfkeden değil, \"yeterli miyim?\" sorusundan geliyor.",
      profile: { sahiplenme: 28, guvensizlik: 78, kontrol: 30, sessizlik: 60 },
      color: "#8E3B63",
      description: [
        "Sen kıskandığında kimseye bağırmıyorsun. Kendine dönüyorsun: \"O daha eğlenceli\", \"Benimle hiç öyle konuşmuyor\", \"Belki sıkıldı benden.\"",
        "Bu hissi çoğu zaman belli etmiyorsun. Ama bir süre sonra kendini biraz geri çekiyor, cevapları kısaltıyor, sessizleşiyorsun. Karşı taraf neyin değiştiğini anlamayabiliyor.",
        "Senin ilişkide en çok ihtiyacın olan şey güvence. Bunu istemekte hiçbir sorun yok. \"Bugün biraz ilgiye ihtiyacım var\" demek, saatlerce kafanda senaryo kurmaktan çok daha az yorucu.",
      ],
      strengths: ["Derin hissediyorsun ve çok bağlısın", "Empati kurmakta iyisin", "Karşı tarafı suçlamak yerine önce kendine bakıyorsun"],
      watchOut: ["Kendini sürekli başkalarıyla kıyaslıyorsun", "İhtiyacını söylemek yerine geri çekilme eğilimin var", "Küçük işaretleri büyük ret olarak okuyabiliyorsun"],
      bestMatch: "dengeli-romantik",
    },
    {
      id: "radar",
      name: "Tam Radar",
      emoji: "📡",
      tagline: "Sevgilinin hayatında ne oluyorsa önce senin radarına takılır.",
      profile: { sahiplenme: 72, guvensizlik: 70, kontrol: 75, sessizlik: 62 },
      color: "#1F1147",
      description: [
        "Kıskançlığın her türü sende bir arada: sahipleniyorsun, kıyaslıyorsun, kontrol ediyorsun ve kırıldığında tavırla gösteriyorsun. Bu yorucu, en çok da senin için.",
        "Muhtemelen geçmişte güvenin sarsıldığı bir deneyim yaşadın ya da kaybetme korkusu sende çok baskın. Radarın her an açık çünkü bir şeyi kaçırırsan yeniden incineceğini düşünüyorsun.",
        "Bunu bir etiket olarak değil, bir başlangıç noktası olarak gör. Kontrol hissi bir anlığına rahatlatıyor ama kaygıyı beslemeye devam ediyor. Güven bulmanın yolu daha çok bakmak değil, daha çok konuşmak.",
      ],
      strengths: ["İlişkine çok önem veriyorsun", "Hiçbir şeyi kaçırmıyorsun", "Sevgin yoğun ve tutkulu"],
      watchOut: ["Kontrol ve sahiplenme partnerini uzaklaştırabilir", "Sürekli tetikte olmak seni yıpratıyor", "Geçmiş deneyimler bugünkü ilişkiye yansıyor olabilir"],
      bestMatch: "sakin-liman",
    },
  ],
};
