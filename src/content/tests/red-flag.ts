import type { Test } from "@/lib/types";

export const redFlag: Test = {
  slug: "red-flag-testi",
  title: "İlişkideki Red Flag Sen misin?",
  summary: "Herkes ex'inin red flag'lerini sayar. Peki ya seninkiler? Kendine karşı dürüst ol.",
  intro:
    'Toksik davranışlar çoğu zaman "normal" kılığında gelir: küsmek, laf sokmak, kıskandırmak. 15 senaryoda gerçekten ne yapacağını seç. Cevaplarını kimse görmüyor, o yüzden dürüst olmak senin elinde.',
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
      text: "Sevgilin, buluşmanıza yarım saat kala arkadaşları çağırdı diye planınızı iptal etti.",
      options: [
        { text: '"Tabii, sen git; ben zaten alıştım bunlara" yazarım.', scores: { manipulasyon: 2, mesafe: 1 } },
        { text: "Son dakika iptaline sinirlenir, bunu sert bir dille söylerim.", scores: { ofke: 2, drama: 1 } },
        { text: '"Tamam" yazarım; akşam aradığında da açmaya üşenirim.', scores: { mesafe: 2, manipulasyon: 1 } },
        { text: "Üzüldüğümü belli etmem; başka gün ayarlarız, olur biter.", scores: { mesafe: 1 } },
      ],
    },
    {
      text: "Tartışmanın tam ortasında aslında haksız olduğunu fark ettin.",
      options: [
        { text: 'Durup "Burada haksızım" derim; gururum incinse de.', scores: {} },
        { text: "Konuyu onun da geçen ay yaptığı benzer bir şeye getiririm.", scores: { manipulasyon: 2, ofke: 1 } },
        {
          text: "Özür dilemem; ertesi gün hiçbir şey olmamış gibi davranırım.",
          scores: { mesafe: 2, manipulasyon: 1 },
        },
        { text: "Haksız olduğumu anlamak beni daha da sinirlendirir, sesim yükselir.", scores: { ofke: 2, drama: 1 } },
      ],
    },
    {
      text: 'Sevgilin yemekte "Son zamanlarda telefona çok bakıyorsun" dedi.',
      options: [
        { text: '"Asıl sen bakıyorsun" der, aklımdaki örnekleri sıralarım.', scores: { manipulasyon: 2, ofke: 1 } },
        { text: '"Haklısın" derim; ama bir hafta sonra yine aynıyımdır.', scores: {} },
        { text: "Alınırım; telefonu bırakırım ama o akşam az konuşurum.", scores: { mesafe: 2, drama: 1 } },
        { text: '"Bana hep bir kusur buluyorsun zaten" diye konuyu büyütürüm.', scores: { drama: 2, ofke: 1 } },
      ],
    },
    {
      text: "Bir süredir sevgilinin seni yeterince önemsemediğini hissediyorsun.",
      options: [
        { text: "Başka birinden gelen ilgiyi belli ederim; belki fark eder.", scores: { drama: 2, manipulasyon: 1 } },
        { text: "Açıkça söylerim; söylemek zorunda kalmak da içimi burkar.", scores: {} },
        {
          text: "Ben de geri çekilirim; ilgiyi dengede tutmak mantıklı gelir.",
          scores: { mesafe: 2, manipulasyon: 1 },
        },
        { text: '"Ayrılsak mı?" diye sorar, nasıl tepki vereceğine bakarım.', scores: { manipulasyon: 2, drama: 1 } },
      ],
    },
    {
      text: "Berbat bir gün geçirdin ve sevgilin tam yanlış anda espri yaptı.",
      options: [
        { text: "Patlarım; o espri bütün günün hıncını üstüne çeker.", scores: { ofke: 2, drama: 1 } },
        { text: '"Bugün espri kaldıramıyorum" der, odama çekilirim.', scores: { mesafe: 1 } },
        { text: "Bir şey demem; gece boyu tek kelimelik cevaplar veririm.", scores: { mesafe: 2, manipulasyon: 1 } },
        { text: '"Beni hiç anlamıyorsun" der, kapıyı biraz sert kapatırım.', scores: { drama: 2, ofke: 1 } },
      ],
    },
    {
      text: "Sevgilin bir arkadaşının doğum gününe tek başına gitmek istiyor.",
      options: [
        { text: '"Git tabii; ben de evde yalnız otururum artık" derim.', scores: { manipulasyon: 2, drama: 1 } },
        { text: '"İyi eğlen" derim; neden beni istemediğini hiç sormam.', scores: { mesafe: 1 } },
        { text: '"Bensiz gidiyorsan bir sebebi vardır" diye konuyu açarım.', scores: { drama: 2, ofke: 1 } },
        { text: "Git derim ama döndüğünde ona biraz ilgisiz davranırım.", scores: { mesafe: 2, manipulasyon: 1 } },
      ],
    },
    {
      text: "Büyük bir kavgadan sonra sevgilin barışmak için ilk adımı atıp yazdı.",
      options: [
        { text: "Hemen barışırım; konuyu bir daha açmam, uzatmaya değmez.", scores: {} },
        { text: "Bir gün cevap vermem; ne kadar kırıldığımı anlasın.", scores: { mesafe: 2, manipulasyon: 1 } },
        { text: "Barışırım ama bu kavgayı bir sonraki tartışmada yine açarım.", scores: { manipulasyon: 2, drama: 1 } },
        { text: '"Şimdi mi aklına geldim?" diye yazar, yeniden tartışırım.', scores: { ofke: 2, drama: 1 } },
      ],
    },
    {
      text: "Sevgilinin anlattığı bir anıyı sen farklı hatırlıyorsun ve haklı olduğundan eminsin.",
      options: [
        { text: '"Sen yanlış hatırlıyorsun, hep böyle yapıyorsun" derim.', scores: { manipulasyon: 2, ofke: 1 } },
        { text: '"Ben farklı hatırlıyorum" der, onun versiyonuna bırakırım.', scores: {} },
        {
          text: "Eski mesajları açıp haklı olduğumu kanıtlayana kadar uğraşırım.",
          scores: { drama: 2, manipulasyon: 1 },
        },
        { text: 'Sinirlenir, "Neyse, boş ver" deyip konuyu kapatırım.', scores: { ofke: 2, mesafe: 1 } },
      ],
    },
    {
      text: 'Sevgilin "Bu hafta çok yoğunum, az görüşebiliriz" dedi.',
      options: [
        { text: "Anlarım; kısa da olsa bir kahveye yer açmasını isterim.", scores: {} },
        { text: '"Tabii, işin her zaman benden önemli" diye takılırım.', scores: { manipulasyon: 2, drama: 1 } },
        { text: "Tamam derim; o hafta ben de ona pek yazmam.", scores: { mesafe: 2, manipulasyon: 1 } },
        { text: "Bahane olduğunu düşünür, birkaç soruyla üstüne giderim.", scores: { drama: 2, ofke: 1 } },
      ],
    },
    {
      text: "Arkadaş ortamında sevgilin anlattığın bir şeyi herkesin önünde düzeltti.",
      options: [
        { text: "Orada gülüp geçerim; eve gelince sakin bir dille söylerim.", scores: {} },
        { text: "Herkesin içinde ters bir cevap veririm, o da bilsin.", scores: { ofke: 2, drama: 1 } },
        { text: "Gece boyunca ona pek bakmam; masadakiler de fark eder.", scores: { mesafe: 2, drama: 1 } },
        { text: 'Eve dönünce "Beni rezil ettin" diye birkaç gün hatırlatırım.', scores: { manipulasyon: 2, drama: 1 } },
      ],
    },
    {
      text: "Bir ilişkiyi bitirmeye karar verdin. Nasıl yaparsın?",
      options: [
        { text: "Yüz yüze söylerim; ne kadar zor olursa olsun kısa tutarım.", scores: {} },
        { text: "Yavaş yavaş cevaplarımı azaltırım; kendisi anlar zaten.", scores: { mesafe: 2, manipulasyon: 1 } },
        { text: "Onun bitirmesi için soğuk davranırım; kötü olan ben olmam.", scores: { manipulasyon: 2, mesafe: 1 } },
        { text: 'Bir kavganın ortasında "Bitti!" der, öyle bitiririm.', scores: { drama: 2, ofke: 1 } },
      ],
    },
    {
      text: "Sevgilin telefonunu sana göstermekten çekindi.",
      options: [
        { text: '"Göstermiyorsan bir şey saklıyorsun" der, üstelerim.', scores: { manipulasyon: 2, drama: 1 } },
        { text: "Mahremiyetine saygı duyarım; aklıma takılsa da sormam.", scores: { mesafe: 1 } },
        { text: "Sinirlenirim; o anda sesimi kontrol etmem zorlaşır.", scores: { ofke: 2, drama: 1 } },
        { text: "Kafama takar, sonraki günlerde ona biraz mesafeli dururum.", scores: { mesafe: 2, manipulasyon: 1 } },
      ],
    },
    {
      text: "Sevgilin doğum gününü unuttu, akşam arkadaşından duyunca hatırladı.",
      options: [
        { text: "Kırıldığımı söylerim; telafisine izin veririm ama unutmam.", scores: { manipulasyon: 1 } },
        { text: "Bunu aylarca, uygun her fırsatta şakayla karışık anarım.", scores: { manipulasyon: 2, drama: 1 } },
        { text: "Hiçbir şey demem ama ilişkiden içten içe biraz uzaklaşırım.", scores: { mesafe: 2, manipulasyon: 1 } },
        {
          text: 'Instagram\'a üstü kapalı "bazıları unutur" paylaşımı yaparım.',
          scores: { drama: 2, manipulasyon: 1 },
        },
      ],
    },
    {
      text: "Sevgilinin ailesinin hiç sevmediğin bir alışkanlığı var ve sık sık görüşüyorsunuz.",
      options: [
        { text: "Uygun bir zamanda, kibarca ve yalnızca bir kere söylerim.", scores: {} },
        { text: 'Tartışmalarda "Ailene çekmişsin" diye o konuya dönerim.', scores: { manipulasyon: 2, ofke: 1 } },
        { text: "Ailesiyle görüşmeleri sessizce en aza indiririm.", scores: { mesafe: 2, manipulasyon: 1 } },
        { text: '"Ya ben ya onlar" noktasına kadar konuyu taşırım.', scores: { drama: 2, ofke: 1 } },
      ],
    },
    {
      text: 'Sinirli olduğun bir anda sevgilin "Sakin ol" dedi.',
      options: [
        { text: 'Daha çok sinirlenirim; "Bana sakin ol deme" diye çıkışırım.', scores: { ofke: 2, drama: 1 } },
        { text: 'Bir nefes alır, "Bir dakika ver" der ve susarım.', scores: { mesafe: 1 } },
        { text: "Kapıyı çarpıp çıkarım; gittiğimi biraz da fark etsin.", scores: { drama: 2, mesafe: 1 } },
        { text: '"Beni deli gibi göstermeye çalışıyorsun" derim.', scores: { manipulasyon: 2, drama: 1 } },
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
        'Küçük bir değişiklik büyük fark yaratır: "Şu an konuşamıyorum ama yarın konuşalım" demek. Böylece mola alıyorsun ama kapıyı kapatmıyorsun.',
      ],
      strengths: [
        "Anlık tepkilerle ilişkiyi yakıp yıkmıyorsun",
        "Krizlerde sakin görünebiliyorsun",
        "Kendine alan açmayı biliyorsun",
      ],
      watchOut: [
        "Küsmek ve ghosting partnerini çaresiz bırakabilir",
        "Bastırılan duygular bir gün toptan patlayabilir",
        "Mesafeyi ceza olarak kullanma",
      ],
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
        'İyi haber: Sen dürüstsün ve oyun oynamıyorsun. İhtiyacın olan şey, patlamadan önceki o birkaç saniyeyi yakalamak. "Bir dakika ara verelim" demek bir volkanı söndürmeye yeter.',
      ],
      strengths: ["Ne hissettiğini saklamıyorsun", "Kin tutmuyorsun, çabuk barışıyorsun", "Tutkulu ve canlısın"],
      watchOut: [
        "Öfke anında kırıcı cümleler kurabiliyorsun",
        "Partnerin senin yanında tetikte yaşayabilir",
        "Tartışmayı kazanmak ilişkiyi kaybetmeye değmez",
      ],
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
        'Duygularını büyük yaşıyorsun ve bunu herkesin görmesini istiyorsun: imalı paylaşımlar, "Ayrılalım mı?" soruları, kıskandırma hamleleri. Bunların çoğu aslında tek bir şeyi soruyor: "Beni gerçekten önemsiyor musun?"',
        "Kriz anları sana sevginin kanıtı gibi gelebilir. Peşinden gelirse önemsiyordur, kıskanırsa seviyordur. Ama bu testler zamanla partnerini yoruyor ve sevgiyi kanıtlamak yerine aşındırıyor.",
        'İstediğin ilgiyi kriz çıkarmadan da isteyebilirsin. "Bugün senden biraz ilgi istiyorum" cümlesi, en iyi sahneden bile daha etkili.',
      ],
      strengths: ["Duygusal ve tutkulusun", "İlişkiyi hiç sıradanlaştırmıyorsun", "Hissettiklerini yoğun yaşıyorsun"],
      watchOut: [
        "Sevgiyi test etmek güveni yıpratır",
        '"Ayrılalım" demek bir pazarlık aracı olmamalı',
        "Sosyal medyada ilişkiyi ifşa etmek kalıcı hasar bırakabilir",
      ],
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
        'Tartışmalarda zekisin, belki biraz fazla. Konu bir anda karşı tarafın geçmiş hatalarına kayıyor, bir cümle "Ben zaten hep ikinci plandayım" diye bitiyor, partnerin kendini suçlu hissederken nasıl oraya geldiğini anlamıyor.',
        'Bunu çoğu zaman bilinçli yapmıyorsun. Doğrudan "Kırıldım" demek savunmasız hissettirdiği için, aynı şeyi suçluluk duygusu ya da imayla söylüyorsun. Etkili, ama bedeli yüksek.',
        'Partnerin zamanla kendini sürekli açıklama yapmak zorunda hissedebilir. Bu kalıbı fark etmek bile büyük bir adım. Bir dahaki sefere hamle yerine düz cümle dene: "Bu beni üzdü."',
      ],
      strengths: ["Zeki ve ikna edicisin", "İnsanları iyi okuyorsun", "Ne istediğini biliyorsun"],
      watchOut: [
        "Suçluluk duygusu üzerinden yönetmek güveni yok eder",
        "Geçmiş hataları koz olarak kullanma",
        '"Sen yanlış hatırlıyorsun" kalıbı partnerini kendinden şüphe ettirebilir',
      ],
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
      watchOut: [
        "Birden fazla toksik kalıp bir arada partnerini tükenmişliğe sürükleyebilir",
        "Korku temelli tepkiler kendi kendini gerçekleştiren kehanete dönüşebilir",
        "Profesyonel destek düşünmeye değer",
      ],
      bestMatch: "green-flag",
    },
  ],
};
