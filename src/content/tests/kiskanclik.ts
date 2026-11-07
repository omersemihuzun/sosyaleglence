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
      text: "Sevgilinin telefonuna gece 01:40'ta \"uyudun mu? 🙂\" mesajı geliyor. Gönderen eski bir iş arkadaşı. İlk ne yaparsın?",
      options: [
        { text: "\"Bu saatte ne istiyor?\" diye hemen sorarım.", scores: { sahiplenme: 2, kontrol: 1 } },
        { text: "Bir şey demem ama sabah ona karşı biraz soğuk olurum.", scores: { sessizlik: 3, guvensizlik: 1 } },
        { text: "\"Hayranın yazmış\" diye dalga geçer, sonra unuturum.", scores: {} },
        { text: "O uyuyunca konuşmanın öncesine bir göz atarım.", scores: { kontrol: 3, guvensizlik: 1 } },
      ],
    },
    {
      text: "Sevgilin arkadaşlarıyla hafta sonu kamp planı yapmış. Grupta tanımadığın iki kişi var.",
      options: [
        { text: "Kim olduklarını sorar, profillerine bakarım.", scores: { kontrol: 2, guvensizlik: 1 } },
        { text: "\"İyi eğlenceler\" derim ama aklım biraz orada kalır.", scores: { guvensizlik: 2, sessizlik: 1 } },
        { text: "\"Ben de gelsem olur mu?\" diye sorarım.", scores: { sahiplenme: 2, kontrol: 1 } },
        { text: "Dönünce fotoğraflara bakıp neler yaptıklarını dinlerim.", scores: {} },
      ],
    },
    {
      text: "Bir düğündesiniz. Sevgilin eski sınıf arkadaşıyla yirmi dakikadır koyu bir sohbette.",
      options: [
        { text: "Yanlarına gider, sohbete katılır, elini tutarım.", scores: { sahiplenme: 3 } },
        { text: "Sonra \"Çok güzel konuştunuz ama\" diye ufak bir laf sokarım.", scores: { sessizlik: 2, guvensizlik: 1 } },
        { text: "Ben de kendi tanıdıklarımla takılırım.", scores: {} },
        { text: "Benimle hiç o kadar hevesli konuşmuyor diye düşünürüm.", scores: { guvensizlik: 3 } },
      ],
    },
    {
      text: "Sevgilinin eski sevgilisi onun story'sini beğenmiş.",
      options: [
        { text: "Ex'in profilini baştan sona incelerim.", scores: { kontrol: 2, guvensizlik: 2 } },
        { text: "\"Ex'in beğenmiş, haberin olsun\" der, tepkisine bakarım.", scores: { kontrol: 1, sahiplenme: 1 } },
        { text: "Engellemesinin daha sağlıklı olacağını söylerim.", scores: { sahiplenme: 3, kontrol: 1 } },
        { text: "Beğeni beğenidir, üstünde durmam.", scores: {} },
      ],
    },
    {
      text: "Sevgilin \"Bu akşam biraz yalnız kalmak istiyorum\" dedi.",
      options: [
        { text: "Anlarım, ertesi gün nasıl olduğunu sorarım.", scores: {} },
        { text: "Bana mı kızdı diye düşünür, akşam boyunca huzursuz olurum.", scores: { guvensizlik: 3 } },
        { text: "\"Tamam\" yazarım ama ertesi gün biraz mesafeli dururum.", scores: { sessizlik: 3 } },
        { text: "Arada bir son görülmesine bakarım.", scores: { kontrol: 3 } },
      ],
    },
    {
      text: "Ortak bir arkadaşın, sevgilinin bir arkadaşı için \"O çok eğlenceli biri\" dediğini anlatıyor.",
      options: [
        { text: "Sevgilime direkt ne demek istediğini sorarım.", scores: { sahiplenme: 1 } },
        { text: "Kendimi o kişiyle kıyaslamaya başlarım.", scores: { guvensizlik: 3 } },
        { text: "O kişiyle çok görüşmemesini tercih ettiğimi belli ederim.", scores: { sahiplenme: 2, kontrol: 1 } },
        { text: "Hiç bahsetmem ama aklımdan da çıkmaz.", scores: { sessizlik: 2, guvensizlik: 1 } },
      ],
    },
    {
      text: "Sevgilinin telefonu masada ekranı aşağı dönük duruyor. Eskiden hep yukarı dönük dururdu.",
      options: [
        { text: "Fark ederim ama muhtemelen tesadüftür.", scores: { guvensizlik: 1 } },
        { text: "Şakayla karışık \"Ne saklıyorsun bakalım?\" derim.", scores: { kontrol: 1, sahiplenme: 1 } },
        { text: "Kalktığında bir bakma fırsatı kollarım.", scores: { kontrol: 3 } },
        { text: "Bir şey demem ama gözüm hep o telefonda kalır.", scores: { guvensizlik: 2, sessizlik: 1 } },
      ],
    },
    {
      text: "Doğum gününde ex'i ona özenli bir mesaj atmış, o da içten bir teşekkür yazmış.",
      options: [
        { text: "Teşekkürü fazla sıcak bulduğumu açıkça söylerim.", scores: { sahiplenme: 2 } },
        { text: "Hâlâ bir şey hissediyor mu diye kafamda senaryo kurarım.", scores: { guvensizlik: 3 } },
        { text: "Aralarında saygının kalmasını olgunluk sayarım.", scores: {} },
        { text: "Daha önce de konuşmuşlar mı diye mesajları yukarı kaydırırım.", scores: { kontrol: 3 } },
      ],
    },
    {
      text: "Sevgilin yeni işinde birlikte çalıştığı birinden sık sık bahsediyor.",
      options: [
        { text: "\"Bu kişiden çok bahsediyorsun\" diye açıkça söylerim.", scores: { sahiplenme: 2 } },
        { text: "Adını her duyduğumda içim kıpırdar ama belli etmem.", scores: { sessizlik: 2, guvensizlik: 1 } },
        { text: "O kişiyi sosyal medyada bulup incelerim.", scores: { kontrol: 2, guvensizlik: 1 } },
        { text: "Tanışmak isterim, iş arkadaşlarıyla bir buluşma ayarlarız.", scores: { sahiplenme: 1 } },
      ],
    },
    {
      text: "Çiftler arasında konum paylaşımı hakkında ne düşünüyorsun?",
      options: [
        { text: "Hep açık olmalı. Saklanacak bir şey yoksa sorun ne?", scores: { kontrol: 3, sahiplenme: 1 } },
        { text: "Sadece gece dönüşlerinde güvenlik için mantıklı.", scores: { kontrol: 1 } },
        { text: "Gerek yok, merak edersem sorarım.", scores: {} },
        { text: "Açık olsun ama bakmam. Genelde.", scores: { kontrol: 2, guvensizlik: 1 } },
      ],
    },
    {
      text: "Bir tartışmadan sonra sevgilin hemen arkadaşlarıyla dışarı çıktı.",
      options: [
        { text: "Şimdi beni anlatıyordur diye kafayı yerim.", scores: { guvensizlik: 2, sahiplenme: 1 } },
        { text: "Ben de çıkarım. O ne yaparsa ben de yaparım.", scores: { sessizlik: 2, sahiplenme: 1 } },
        { text: "Kafasını dağıtması iyi, sonra sakin kafayla konuşuruz.", scores: {} },
        { text: "Nerede ve kimlerle olduğunu sorarım.", scores: { kontrol: 2, sahiplenme: 1 } },
      ],
    },
    {
      text: "Sevgilin sana \"Biraz kıskançsın\" dedi. Tepkin?",
      options: [
        { text: "\"Seni sevdiğim için\" derim. Biraz kıskançlık sevgidendir.", scores: { sahiplenme: 3 } },
        { text: "İçerlerim ama haklı olabilir mi diye düşünürüm.", scores: { guvensizlik: 1, sessizlik: 1 } },
        { text: "\"Asıl sorun senin beni hiç kıskanmaman\" derim.", scores: { guvensizlik: 2, sahiplenme: 1 } },
        { text: "Hangi durumlarda öyle hissettirdiğimi sorarım.", scores: {} },
      ],
    },
    {
      text: "Sevgilinin en yakın arkadaşı, ona ilgi duyabilecek biri.",
      options: [
        { text: "Arkadaşlıklarına saygı duyarım ama baş başa çok vakit geçirmelerini istemem.", scores: { sahiplenme: 2 } },
        { text: "Onunla da arkadaş olurum. Uzak durmaktansa yakın olmak iyidir.", scores: { kontrol: 1 } },
        { text: "Aralarında ne konuştuklarını merak ederim.", scores: { kontrol: 2, guvensizlik: 1 } },
        { text: "Dert etmem. Aynı özgürlüğü ben de isterim.", scores: {} },
      ],
    },
    {
      text: "Yolda yürürken sevgilin karşıdan gelen birine biraz uzun bakıyor.",
      options: [
        { text: "\"Beğendin mi?\" diye sorarım. Gülerek ama yarı ciddi.", scores: { sahiplenme: 1, sessizlik: 1 } },
        { text: "Ben de birine bakarım, ödeşiriz.", scores: { sessizlik: 2, sahiplenme: 1 } },
        { text: "Kendimi o kişiyle kıyaslarım.", scores: { guvensizlik: 3 } },
        { text: "İnsanlar bakar, takılmam.", scores: {} },
      ],
    },
    {
      text: "Mesajına üç saattir dönmedi ama bu arada story atmış.",
      options: [
        { text: "\"Story atmaya vaktin var ama\" diye yazarım.", scores: { sahiplenme: 2, kontrol: 1 } },
        { text: "Ben de saatlerce dönmem. Aynı tavrı görsün.", scores: { sessizlik: 3 } },
        { text: "Bana olan ilgisi azaldı mı diye düşünmeye başlarım.", scores: { guvensizlik: 3 } },
        { text: "Meşguldür, dönünce konuşuruz.", scores: {} },
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
