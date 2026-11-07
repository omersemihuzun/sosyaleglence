import type { Test } from "@/lib/types";

export const redFlag: Test = {
  slug: "red-flag-testi",
  title: "İlişkideki Red Flag Sen misin?",
  summary: "Herkes ex'inin red flag'lerini sayar. Peki ya seninkiler? Kendine karşı dürüst ol.",
  intro:
    "Toksik davranışlar çoğu zaman \"normal\" kılığında gelir: küsmek, laf sokmak, kıskandırmak. 15 senaryoda gerçekten ne yapacağını seç. Bu testi kimse görmüyor, o yüzden dürüst olmak senin elinde.",
  emoji: "🚩",
  color: "#C2410C",
  category: "ilişki",
  metaDescription:
    "Red flag testi: İlişkide toksik olan sen misin? Manipülasyon, öfke, duygusal mesafe ve drama eğilimini 15 gerçekçi senaryoyla ölç.",
  headline: {
    label: "Red flag seviyen",
    weights: { manipulasyon: 1, ofke: 1, mesafe: 1, drama: 1 },
  },
  dimensions: [
    { id: "manipulasyon", label: "Manipülasyon", low: "Açık oynarsın", high: "Suçluluk ve ima kullanırsın" },
    { id: "ofke", label: "Öfke patlaması", low: "Sakin kalırsın", high: "Anında parlarsın" },
    { id: "mesafe", label: "Duygusal mesafe", low: "Oradasın", high: "Küser, kaybolursun" },
    { id: "drama", label: "Drama", low: "Sakinlik seversin", high: "Kriz çıkarır, test edersin" },
  ],
  questions: [
    {
      text: "Sevgilin arkadaşlarıyla buluşmak için seninle yaptığı planı iptal etti.",
      options: [
        { text: "\"Tabii, ben zaten hep ikinci plandayım\" derim.", scores: { manipulasyon: 3 } },
        { text: "Kızarım, \"Bir daha plan yapma o zaman\" derim.", scores: { ofke: 2, drama: 1 } },
        { text: "Tamam derim ama akşam aradığında açmam.", scores: { mesafe: 3 } },
        { text: "Üzüldüğümü söyler, başka bir gün ayarlarız.", scores: {} },
      ],
    },
    {
      text: "Tartışmanın ortasında haksız olduğunu fark ettin.",
      options: [
        { text: "Kabul eder, özür dilerim.", scores: {} },
        { text: "Konuyu onun geçmişte yaptığı bir hataya getiririm.", scores: { manipulasyon: 3 } },
        { text: "Özür dilemem ama ertesi gün hiçbir şey olmamış gibi davranırım.", scores: { mesafe: 2 } },
        { text: "Sesimi yükseltirim, kazanan ben olurum.", scores: { ofke: 3 } },
      ],
    },
    {
      text: "Sevgilin seni bir konuda eleştirdi: \"Telefona çok bakıyorsun.\"",
      options: [
        { text: "\"Asıl sen bakıyorsun\" diye karşılık veririm.", scores: { manipulasyon: 2, ofke: 1 } },
        { text: "\"Haklısın, dikkat edeceğim\" derim.", scores: {} },
        { text: "Alınırım, o akşam az konuşurum.", scores: { mesafe: 2, drama: 1 } },
        { text: "\"Bana hep bir şey buluyorsun zaten\" diye üstüne gelirim.", scores: { drama: 2, ofke: 1 } },
      ],
    },
    {
      text: "Sevgilin seni yeterince önemsemiyor gibi hissediyorsun.",
      options: [
        { text: "Başka birinden gelen ilgiyi ona belli ederim, kıskansın.", scores: { drama: 3, manipulasyon: 1 } },
        { text: "Oturup ihtiyacımı anlatırım.", scores: {} },
        { text: "Ben de onu önemsemem, ödeşiriz.", scores: { mesafe: 3 } },
        { text: "\"Ayrılsak mı?\" diye sorarım, ne tepki vereceğine bakarım.", scores: { drama: 3, manipulasyon: 2 } },
      ],
    },
    {
      text: "Kötü bir gün geçirdin ve sevgilin yanlış bir anda espri yaptı.",
      options: [
        { text: "Patlar, bütün günün hıncını ondan çıkarırım.", scores: { ofke: 3 } },
        { text: "\"Bugün espri kaldıramıyorum, kötü bir gün geçirdim\" derim.", scores: {} },
        { text: "Hiçbir şey demem, gece boyunca soğuk dururum.", scores: { mesafe: 3 } },
        { text: "\"Beni hiç anlamıyorsun\" diye ağlarım ya da kapıyı çarparım.", scores: { drama: 3 } },
      ],
    },
    {
      text: "Sevgilin bir arkadaşının doğum gününe tek başına gitmek istiyor.",
      options: [
        { text: "\"Git tabii, ama ben de yalnız kalırım artık\" derim.", scores: { manipulasyon: 3 } },
        { text: "İyi eğlenceler dilerim.", scores: {} },
        { text: "\"Bensiz gidiyorsan bir anlamı var\" diye tartışma çıkarırım.", scores: { drama: 2, ofke: 1 } },
        { text: "Git derim ama döndüğünde ilgisiz davranırım.", scores: { mesafe: 2, manipulasyon: 1 } },
      ],
    },
    {
      text: "Kavgadan sonra sevgilin barışmak için yazdı.",
      options: [
        { text: "Hemen barışırım, kin tutmam.", scores: {} },
        { text: "Birkaç gün yanıt vermem, ne kadar üzüldüğümü anlasın.", scores: { mesafe: 3, manipulasyon: 1 } },
        { text: "Barışırım ama bu kavgayı bir sonraki tartışmada yeniden açarım.", scores: { manipulasyon: 2, drama: 1 } },
        { text: "\"Şimdi mi aklına geldim?\" diye yeni bir tartışma başlatırım.", scores: { ofke: 2, drama: 1 } },
      ],
    },
    {
      text: "Sevgilinin anlattığı bir anıyı sen farklı hatırlıyorsun ve haklı olduğundan eminsin.",
      options: [
        { text: "\"Sen yanlış hatırlıyorsun, hep böyle yapıyorsun\" derim.", scores: { manipulasyon: 3 } },
        { text: "\"Ben farklı hatırlıyorum\" der, üstünde durmam.", scores: {} },
        { text: "Haklı olduğumu kanıtlayana kadar bırakmam.", scores: { ofke: 1, drama: 2 } },
        { text: "Sinirlenir, konuyu kapatırım.", scores: { ofke: 2, mesafe: 1 } },
      ],
    },
    {
      text: "Sevgilin \"Bu hafta biraz yoğunum, az görüşebiliriz\" dedi.",
      options: [
        { text: "Anlarım, kısa da olsa bir kahve ayarlarız.", scores: {} },
        { text: "\"Tabii, işin benden önemli\" derim.", scores: { manipulasyon: 2, drama: 1 } },
        { text: "Tamam derim, o hafta ben de hiç yazmam.", scores: { mesafe: 3 } },
        { text: "Bunun bir bahane olduğunu düşünür, sorgularım.", scores: { drama: 2, ofke: 1 } },
      ],
    },
    {
      text: "Arkadaş ortamında sevgilin seni bir konuda düzeltti.",
      options: [
        { text: "Orada bir şey demem, eve gelince konuşurum.", scores: {} },
        { text: "Herkesin içinde ters bir cevap veririm.", scores: { ofke: 3 } },
        { text: "Gece boyunca ona hiç bakmam, herkes fark eder.", scores: { mesafe: 2, drama: 2 } },
        { text: "Sonra ona \"Beni rezil ettin\" diye günlerce bunu hatırlatırım.", scores: { manipulasyon: 2, drama: 1 } },
      ],
    },
    {
      text: "Bir ilişkiyi bitirmeye karar verdin. Nasıl yaparsın?",
      options: [
        { text: "Yüz yüze ya da en azından telefonla konuşurum.", scores: {} },
        { text: "Yavaş yavaş cevapları azaltırım, kendisi anlar.", scores: { mesafe: 3 } },
        { text: "Onun bitirmesi için soğuk davranırım, kötü olan ben olmam.", scores: { manipulasyon: 3, mesafe: 1 } },
        { text: "Büyük bir kavga sırasında \"Bitti!\" derim.", scores: { ofke: 2, drama: 2 } },
      ],
    },
    {
      text: "Sevgilin telefonunu sana göstermekten çekindi.",
      options: [
        { text: "\"Göstermiyorsan bir şey saklıyorsun\" derim.", scores: { manipulasyon: 2, drama: 1 } },
        { text: "Mahremiyetine saygı duyarım.", scores: {} },
        { text: "Çok sinirlenirim, kavga büyür.", scores: { ofke: 3 } },
        { text: "Bunu kafama takar, ilerleyen günlerde ona karşı mesafeli olurum.", scores: { mesafe: 2 } },
      ],
    },
    {
      text: "Sevgilin doğum gününü unuttu.",
      options: [
        { text: "Kırıldığımı söylerim, telafi etmesine izin veririm.", scores: {} },
        { text: "Bunu aylarca, her fırsatta hatırlatırım.", scores: { manipulasyon: 3 } },
        { text: "Hiçbir şey demem ama ilişkiden içten içe uzaklaşırım.", scores: { mesafe: 3 } },
        { text: "Sosyal medyada üstü kapalı bir paylaşım yaparım.", scores: { drama: 3 } },
      ],
    },
    {
      text: "Sevgilinin ailesiyle ilgili sevmediğin bir şey var.",
      options: [
        { text: "Kibarca ve uygun bir zamanda söylerim.", scores: {} },
        { text: "Tartışmalarda onu ailesiyle vururum.", scores: { manipulasyon: 2, ofke: 1 } },
        { text: "Ailesiyle görüşmekten tamamen kaçınırım.", scores: { mesafe: 3 } },
        { text: "\"Ya ben ya onlar\" noktasına getiririm.", scores: { drama: 3 } },
      ],
    },
    {
      text: "Sinirliyken sevgilin \"Sakin ol\" dedi.",
      options: [
        { text: "Daha çok sinirlenirim, \"Sen beni sakinleştiremezsin\" derim.", scores: { ofke: 3 } },
        { text: "Bir nefes alır, \"Haklısın, bir dakika\" derim.", scores: {} },
        { text: "Kapıyı çarpar çıkarım.", scores: { drama: 2, mesafe: 1 } },
        { text: "\"Beni deli gibi göstermeye çalışıyorsun\" derim.", scores: { manipulasyon: 2, drama: 1 } },
      ],
    },
  ],
  results: [
    {
      id: "green-flag",
      name: "Yürüyen Green Flag",
      emoji: "🟢",
      tagline: "Tartışırsın ama oyun oynamazsın.",
      profile: { manipulasyon: 10, ofke: 10, mesafe: 10, drama: 10 },
      color: "#2F7D6D",
      description: [
        "Kırıldığında söylüyorsun, hata yaptığında özür diliyorsun, kavgadan sonra barışmayı biliyorsun. Bu kadar basit görünen şeyler aslında çoğu insanın en çok zorlandığı şeyler.",
        "İlişkide hesap tutmuyorsun, karşı tarafı suçluluk duygusuyla yönetmiyorsun. Partnerin seninle tartışırken bile güvende hissediyor.",
        "Tek bir uyarı: Green flag olmak her şeyi sineye çekmek demek değil. Sen sağlıklı davranırken karşı taraf bunu yapmıyorsa, sınır çizmek de senin hakkın.",
      ],
      strengths: ["Özür dilemeyi biliyorsun", "Duygularını açıkça ifade ediyorsun", "Kin tutmuyorsun"],
      watchOut: ["Sağlıklı davranmayan birine fazla tolerans gösterme", "Kendi ihtiyaçlarını geri plana atma"],
      bestMatch: "green-flag",
    },
    {
      id: "buz-dagi",
      name: "Buz Dağı",
      emoji: "🧊",
      tagline: "Bağırmazsın. Sadece ortadan kaybolursun.",
      profile: { manipulasyon: 25, ofke: 10, mesafe: 80, drama: 15 },
      color: "#3B6FD9",
      description: [
        "Sen kavga etmiyorsun. Sen susuyorsun. Cevaplar kısalıyor, mesajlar seyrekleşiyor, aynı odada olsan bile aslında orada değilsin. Partnerin neyi yanlış yaptığını çözmeye çalışırken sen buzdan duvarının arkasındasın.",
        "Sessiz kalmak bazen seni korumanın bir yolu. Ama uzun süreli susma, karşı taraf için bağırmaktan bile daha yorucu olabilir, çünkü ne olduğunu bilmeden cezalandırılıyor.",
        "Küçük bir değişiklik büyük fark yaratır: \"Şu an konuşamıyorum ama yarın konuşalım\" demek. Böylece mola alıyorsun ama kapıyı kapatmıyorsun.",
      ],
      strengths: ["Anlık tepkilerle ilişkiyi yakıp yıkmıyorsun", "Krizlerde sakin görünebiliyorsun", "Kendine alan açmayı biliyorsun"],
      watchOut: ["Küsmek ve ghosting partnerini çaresiz bırakabilir", "Bastırılan duygular bir gün toptan patlayabilir", "Mesafeyi ceza olarak kullanma"],
      bestMatch: "green-flag",
    },
    {
      id: "volkan",
      name: "Volkan",
      emoji: "🌋",
      tagline: "Çabuk parlarsın, çabuk sönersin. Ama arkada kül kalır.",
      profile: { manipulasyon: 15, ofke: 80, mesafe: 15, drama: 30 },
      color: "#D7102F",
      description: [
        "Duyguların hızlı ve yüksek sesli. Bir şey canını sıktığında hemen belli oluyor, ses yükseliyor ve kelimeler senden önce davranıyor. Beş dakika sonra çoğu zaman geçiyor bile.",
        "Sorun şu: Sen unutsan da karşındaki unutmuyor. Öfke anında söylenen tek bir cümle haftalarca akılda kalabiliyor. Partnerin zamanla seni kızdırmamak için kendini sansürlemeye başlayabilir.",
        "İyi haber: Sen dürüstsün ve oyun oynamıyorsun. İhtiyacın olan şey, patlamadan önceki o birkaç saniyeyi yakalamak. \"Bir dakika ara verelim\" demek bir volkanı söndürmeye yeter.",
      ],
      strengths: ["Ne hissettiğini saklamıyorsun", "Kin tutmuyorsun, çabuk barışıyorsun", "Tutkulu ve canlısın"],
      watchOut: ["Öfke anında kırıcı cümleler kurabiliyorsun", "Partnerin senin yanında tetikte yaşayabilir", "Tartışmayı kazanmak ilişkiyi kaybetmeye değmez"],
      bestMatch: "green-flag",
    },
    {
      id: "drama",
      name: "Dizi Senaristi",
      emoji: "🎭",
      tagline: "İlişkinde sıkıcı bir bölüm yok. Partnerin biraz olsun istiyor.",
      profile: { manipulasyon: 30, ofke: 25, mesafe: 20, drama: 80 },
      color: "#B0287A",
      description: [
        "Duygularını büyük yaşıyorsun ve bunu herkesin görmesini istiyorsun: imalı paylaşımlar, \"Ayrılalım mı?\" soruları, kıskandırma hamleleri. Bunların çoğu aslında tek bir şeyi soruyor: \"Beni gerçekten önemsiyor musun?\"",
        "Kriz anları sana sevginin kanıtı gibi gelebilir. Peşinden gelirse önemsiyordur, kıskanırsa seviyordur. Ama bu testler zamanla partnerini yoruyor ve sevgiyi kanıtlamak yerine aşındırıyor.",
        "İstediğin ilgiyi kriz çıkarmadan da isteyebilirsin. \"Bugün senden biraz ilgi istiyorum\" cümlesi, en iyi sahneden bile daha etkili.",
      ],
      strengths: ["Duygusal ve tutkulusun", "İlişkiyi hiç sıradanlaştırmıyorsun", "Hissettiklerini yoğun yaşıyorsun"],
      watchOut: ["Sevgiyi test etmek güveni yıpratır", "\"Ayrılalım\" demek bir pazarlık aracı olmamalı", "Sosyal medyada ilişkiyi ifşa etmek kalıcı hasar bırakabilir"],
      bestMatch: "green-flag",
    },
    {
      id: "manipulator",
      name: "Usta Satranççı",
      emoji: "♟️",
      tagline: "Kavgayı kazanmak için her zaman bir hamlen var.",
      profile: { manipulasyon: 80, ofke: 20, mesafe: 30, drama: 30 },
      color: "#4C1D95",
      description: [
        "Tartışmalarda zekisin, belki biraz fazla. Konu bir anda karşı tarafın geçmiş hatalarına kayıyor, bir cümle \"Ben zaten hep ikinci plandayım\" diye bitiyor, partnerin kendini suçlu hissederken nasıl oraya geldiğini anlamıyor.",
        "Bunu çoğu zaman bilinçli yapmıyorsun. Doğrudan \"Kırıldım\" demek savunmasız hissettirdiği için, aynı şeyi suçluluk duygusu ya da imayla söylüyorsun. Etkili, ama bedeli yüksek.",
        "Partnerin zamanla kendini sürekli açıklama yapmak zorunda hissedebilir. Bu kalıbı fark etmek bile büyük bir adım. Bir dahaki sefere hamle yerine düz cümle dene: \"Bu beni üzdü.\"",
      ],
      strengths: ["Zeki ve ikna edicisin", "İnsanları iyi okuyorsun", "Ne istediğini biliyorsun"],
      watchOut: ["Suçluluk duygusu üzerinden yönetmek güveni yok eder", "Geçmiş hataları koz olarak kullanma", "\"Sen yanlış hatırlıyorsun\" kalıbı partnerini kendinden şüphe ettirebilir"],
      bestMatch: "green-flag",
    },
    {
      id: "kirmizi-alarm",
      name: "Kırmızı Alarm",
      emoji: "🚨",
      tagline: "Bayrak değil, bütün bir geçit töreni.",
      profile: { manipulasyon: 55, ofke: 55, mesafe: 55, drama: 55 },
      color: "#7F1D1D",
      description: [
        "Testin dürüst cevabı şu: İlişkide zorlandığında elindeki her aracı kullanıyorsun. Bazen patlıyor, bazen küsüyor, bazen suçluluk duygusu yaratıyor, bazen sahne kuruyorsun.",
        "Bunun altında genellikle güçlü bir korku yatar: incinmek, terk edilmek, kontrolü kaybetmek. Bu davranışlar seni korumak için gelişmiş olabilir. Ama artık seni değil, ilişkilerini yıpratıyorlar.",
        "Kendini kötü bir insan olarak etiketlemene gerek yok. Bu testi dürüstçe çözmüş olman, değişmeye açık olduğunu gösteriyor. Bir davranışı seç ve onunla başla. İstersen bir uzmandan destek almak da bu süreci çok hızlandırır.",
      ],
      strengths: ["Kendinle yüzleşme cesaretin var", "Duyguların çok güçlü", "İlişkilerin senin için önemli"],
      watchOut: ["Birden fazla toksik kalıp bir arada partnerini tükenmişliğe sürükleyebilir", "Korku temelli tepkiler kendi kendini gerçekleştiren kehanete dönüşebilir", "Profesyonel destek düşünmeye değer"],
      bestMatch: "green-flag",
    },
  ],
};
