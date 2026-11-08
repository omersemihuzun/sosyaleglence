import type { Test } from "@/lib/types";

export const delulu: Test = {
  slug: "ne-kadar-delulusun-testi",
  title: "Ne Kadar Delulusun?",
  summary: "Bir \"günaydın\" mesajından düğün planı çıkarıyorsan, bu test tam senlik.",
  intro:
    "Delulu: Aşkta gerçeği biraz fazla süslemek. Kimimiz geleceği hayal eder, kimimiz her emojide gizli bir anlam arar, kimimiz de kırmızı bayrakları pembe görür. 15 durumda içinden geçeni seç.",
  emoji: "🦄",
  color: "#DB2777",
  category: "ilişki",
  metaDescription:
    "Delulu testi: Aşkta hayalcilik, işaret okuma ve kırmızı bayrakları görmezden gelme eğilimini 15 eğlenceli senaryoyla ölç. Ne kadar delulusun?",
  headline: {
    label: "Delulu seviyen",
    weights: { hayal: 1, isaret: 1, pembe: 1 },
  },
  dimensions: [
    { id: "hayal", label: "Hayal gücü", low: "Bugünü yaşarsın", high: "Düğün çoktan planlandı" },
    { id: "isaret", label: "İşaret okuma", low: "Mesaj sadece mesajdır", high: "Her emojide bir anlam var" },
    { id: "pembe", label: "Pembe gözlük", low: "Bayrakları görürsün", high: "Kırmızı da bir çeşit pembe" },
  ],
  questions: [
    {
      text: "Kafede göz göze geldiğin biri sana gülümsedi.",
      options: [
        { text: "Gülümserim, kahvemi alıp çıkarım.", scores: {} },
        { text: "Çocuklarımızın adlarını düşünmeye başlarım.", scores: { hayal: 3 } },
        { text: "Gülümsemenin kaç saniye sürdüğünü analiz ederim.", scores: { isaret: 3 } },
        { text: "Yanında biri vardı ama muhtemelen kardeşidir.", scores: { pembe: 3 } },
      ],
    },
    {
      text: "Hoşlandığın kişi story'ne kalp attı.",
      options: [
        { text: "Tatlı. Günüme devam ederim.", scores: {} },
        { text: "Bu bir başlangıç. Yazın birlikte tatile gideriz bence.", scores: { hayal: 3 } },
        { text: "Neden alev değil de kalp? Neden şimdi? Neden bu story?", scores: { isaret: 3 } },
        { text: "Herkese atıyor olabilir ama bana atması farklı.", scores: { pembe: 2, isaret: 1 } },
      ],
    },
    {
      text: "İki buluşmadan sonra arkadaşlarına onu nasıl anlatıyorsun?",
      options: [
        { text: "\"İyi biri, görüşmeye devam edeceğiz.\"", scores: {} },
        { text: "\"Galiba hayatımın aşkını buldum.\"", scores: { hayal: 3 } },
        { text: "\"Mesajlarına bakın, sizce ne demek istiyor?\" diye ekran görüntüsü atarım.", scores: { isaret: 3 } },
        { text: "\"Biraz kaba ama aslında çok iyi kalpli.\"", scores: { pembe: 3 } },
      ],
    },
    {
      text: "Mesajına üç saat sonra \"hıhı\" diye cevap geldi.",
      options: [
        { text: "Meşguldür, sorun yok.", scores: {} },
        { text: "Yorgun olmalı. Akşam ona çorba götürsem mi?", scores: { hayal: 2, pembe: 1 } },
        { text: "\"Hıhı\" mı, \"hı hı\" mı? İkisi çok farklı.", scores: { isaret: 3 } },
        { text: "Mesajlaşmayı sevmeyen biri, yüz yüze çok farklı.", scores: { pembe: 3 } },
      ],
    },
    {
      text: "Ünlü biri sosyal medyada senin paylaşımını beğendi.",
      options: [
        { text: "\"Vay\" derim, ekran görüntüsü alırım, biter.", scores: {} },
        { text: "Bir gün tanışacağız, hissediyorum.", scores: { hayal: 3 } },
        { text: "Beğeni saatine bakarım: gece 2. Demek ki aklındayım.", scores: { isaret: 3 } },
        { text: "Sosyal medya yöneticisi beğenmiş olsa bile bu bir işaret.", scores: { pembe: 2, isaret: 1 } },
      ],
    },
    {
      text: "Hoşlandığın kişinin sevgilisi var.",
      options: [
        { text: "Uzak dururum, hikâye bitti.", scores: {} },
        { text: "Ayrıldıklarında hazır olacağım, ona göre planımı yaparım.", scores: { hayal: 3 } },
        { text: "Bana bakışı farklı, bence mutsuz.", scores: { isaret: 3 } },
        { text: "Sevgilisi var ama bence o ciddi bir ilişki değil.", scores: { pembe: 3 } },
      ],
    },
    {
      text: "Birlikte izlediğiniz filmde bir çift evleniyor.",
      options: [
        { text: "Güzel bir sahne, o kadar.", scores: {} },
        { text: "Kafamda düğün mekânımızı seçtim bile.", scores: { hayal: 3 } },
        { text: "Bu sahnede elimi sıktı mı? Sıktı. Bir şey demek istedi.", scores: { isaret: 3 } },
        { text: "\"Evlilik saçmalık\" dedi ama kesin benimle evlenmek istiyordur.", scores: { pembe: 3 } },
      ],
    },
    {
      text: "Ex'in seni engelledi.",
      options: [
        { text: "Doğru karar, ben de ilerlemeliyim.", scores: {} },
        { text: "Bir gün dönecek ve bu hikâyeyi gülerek anlatacağız.", scores: { hayal: 3 } },
        { text: "Engellemesi hâlâ bir şey hissettiğini kanıtlıyor.", scores: { isaret: 3 } },
        { text: "Arkadaşları kışkırtmıştır, onun suçu değil.", scores: { pembe: 3 } },
      ],
    },
    {
      text: "Hoşlandığın kişi \"Hiç ciddi ilişki istemiyorum\" dedi.",
      options: [
        { text: "Söylediğine inanırım, beklentimi buna göre ayarlarım.", scores: {} },
        { text: "Benimle tanışınca fikri değişecek.", scores: { hayal: 2, pembe: 1 } },
        { text: "Bunu bana söylemesi bile özel olduğumu gösteriyor.", scores: { isaret: 3 } },
        { text: "Sadece geçmişte çok kırılmış, ben onu iyileştiririm.", scores: { pembe: 3 } },
      ],
    },
    {
      text: "Müzik uygulamasında paylaştığı yeni çalma listesinin adı \"gece\".",
      options: [
        { text: "Güzel liste. Dinlerim belki.", scores: {} },
        { text: "Bu liste bizim hikâyemizin film müziği olur.", scores: { hayal: 3 } },
        { text: "İlk şarkının sözlerini okurum. Bana mesaj veriyor.", scores: { isaret: 3 } },
        { text: "Listede ex'inin sevdiği şarkılar var ama tesadüftür.", scores: { pembe: 3 } },
      ],
    },
    {
      text: "Bir uygulamada eşleştin ve sohbet iyi gidiyor.",
      options: [
        { text: "Buluşmayı önerip görürüm.", scores: {} },
        { text: "Daha buluşmadan ona özel bir lakap buldum.", scores: { hayal: 3 } },
        { text: "Hangi emojiyi kaç kez kullandığını sayıyorum.", scores: { isaret: 3 } },
        { text: "Profilindeki fotoğraflar biraz eski ama önemli değil, ruhu güzel.", scores: { pembe: 2, hayal: 1 } },
      ],
    },
    {
      text: "Doğum gününü unuttu.",
      options: [
        { text: "Kırıldığımı söylerim.", scores: {} },
        { text: "Belki büyük bir sürpriz hazırlıyordur, yarın görürüz.", scores: { hayal: 3 } },
        { text: "Unutması, benimle çok rahat olduğunu gösteriyor.", scores: { isaret: 2, pembe: 1 } },
        { text: "Yoğun bir dönemdeydi, bu normal.", scores: { pembe: 3 } },
      ],
    },
    {
      text: "Bir falcı \"Yakında hayatına biri girecek\" dedi.",
      options: [
        { text: "Eğlenceli, ama ciddiye almam.", scores: {} },
        { text: "Kim olacağını ve nasıl tanışacağımızı hayal etmeye başlarım.", scores: { hayal: 3 } },
        { text: "Hemen etrafımdaki herkesi bu kehanete göre süzerim.", scores: { isaret: 3 } },
        { text: "Kesin şu an konuştuğum kişidir, uyarı işaretlerine rağmen.", scores: { pembe: 3 } },
      ],
    },
    {
      text: "Arkadaşın \"Bence seninle ilgilenmiyor\" dedi.",
      options: [
        { text: "Haklı olabilir, düşünürüm.", scores: {} },
        { text: "O bizim hikâyemizi bilmiyor.", scores: { hayal: 2, pembe: 1 } },
        { text: "Ona son on mesajı gösterip neden yanıldığını kanıtlarım.", scores: { isaret: 3 } },
        { text: "Kıskançlıktan söylüyor.", scores: { pembe: 3 } },
      ],
    },
    {
      text: "Hayalindeki ilişkiyi tarif et:",
      options: [
        { text: "Huzurlu, karşılıklı, gerçek.", scores: {} },
        { text: "Film gibi: tesadüfi tanışma, yağmurda öpüşme, mükemmel son.", scores: { hayal: 3 } },
        { text: "Birbirimizin aklını okuduğumuz, söylemeden anladığımız bir ilişki.", scores: { isaret: 3 } },
        { text: "Herkesin \"olmaz\" dediği ama bizim kanıtladığımız bir aşk.", scores: { pembe: 3 } },
      ],
    },
  ],
  results: [
    {
      id: "ayaklari-yere-basan",
      name: "Ayakları Yere Basan",
      emoji: "🧭",
      tagline: "Bir mesaj senin için sadece bir mesaj. Ve bu çok rahatlatıcı.",
      profile: { hayal: 8, isaret: 8, pembe: 8 },
      color: "#2F7D6D",
      description: [
        "Gerçekle hayal arasındaki çizgiyi net görüyorsun. Biri sana gülümsediğinde düğün planlamıyorsun, mesajlar arasında gizli şifre aramıyorsun, kırmızı bayrakları da olduğu gibi görüyorsun.",
        "Bu seni duygusuz yapmıyor. Aksine, insanları kendi hayallerinin gölgesinde değil, oldukları gibi tanıyabiliyorsun. Hayal kırıklığı yaşaman bu yüzden daha zor.",
        "Tek risk: Biraz fazla temkinli olmak. Bazen küçük bir hayal kurmak, bir kapıyı aralamanın en tatlı yolu.",
      ],
      strengths: ["Gerçekçisin", "İnsanları oldukları gibi görüyorsun", "Kolay kolay hayal kırıklığına uğramıyorsun"],
      watchOut: ["Fazla temkin fırsatları kaçırtabilir", "Romantizme biraz alan aç"],
      bestMatch: "hayalperest",
    },
    {
      id: "hayalperest",
      name: "Hayalperest Senarist",
      emoji: "🎬",
      tagline: "İlk buluşmadan önce ilk yıldönümünüzü planladın.",
      profile: { hayal: 80, isaret: 20, pembe: 20 },
      color: "#DB2777",
      description: [
        "Senin kafanda her tanışma bir filmin açılış sahnesi. Gelecek planları, ortak ev, belki bir köpek; hepsi daha ikinci mesajda hazır. Romantik bir kalbin var ve bunu saklamıyorsun.",
        "Hayal kurmak güzel; seni umutlu ve sıcak tutuyor. Ama hayallerin bazen gerçek kişinin önüne geçebiliyor. Karşındakini tanımadan önce onun rolünü yazmış oluyorsun.",
        "Senaryonu biraz bekletmeyi dene. Gerçek insanların hikâyeleri, kafandakilerden daha şaşırtıcı olabilir.",
      ],
      strengths: ["Umutlu ve romantiksin", "Sevgiye çok açıksın", "İlişkilere tutkuyla giriyorsun"],
      watchOut: ["Kişiyi tanımadan idealleştirme", "Beklentiler büyüdükçe hayal kırıklığı da büyür"],
      bestMatch: "ayaklari-yere-basan",
    },
    {
      id: "isaret-avcisi",
      name: "İşaret Avcısı",
      emoji: "🔎",
      tagline: "Bir nokta, bir emoji, bir beğeni saati. Senin için hepsi kanıt.",
      profile: { hayal: 20, isaret: 80, pembe: 20 },
      color: "#3B6FD9",
      description: [
        "Mesajları dedektif titizliğiyle okuyorsun. Cevap süresi, emoji seçimi, noktalama, beğeni saati... Her şey bir şifre ve sen o şifreyi çözmeye kararlısın.",
        "Bu dikkatin bir güç. Detayları kaçırmıyorsun ve insanların ruh hâlini çabuk sezebiliyorsun. Ama çoğu zaman bir \"hıhı\", sadece bir \"hıhı\"dır. Anlam aradıkça, olmayan anlamlar da buluyorsun.",
        "En kısa yol hâlâ en etkilisi: Merak ediyorsan sor. Bir soru, yüz ekran görüntüsünden daha net cevap verir.",
      ],
      strengths: ["Çok dikkatlisin", "İnsanları iyi sezebiliyorsun", "İlgini belli etmekten çekinmiyorsun"],
      watchOut: ["Aşırı analiz kaygıyı büyütür", "Arkadaş grubunu ekran görüntüsüne boğma", "Doğrudan sormak her zaman daha kısa"],
      bestMatch: "ayaklari-yere-basan",
    },
    {
      id: "pembe-gozluk",
      name: "Pembe Gözlüklü",
      emoji: "🩷",
      tagline: "Kırmızı bayraklar sana pembe görünüyor.",
      profile: { hayal: 20, isaret: 20, pembe: 80 },
      color: "#E0567A",
      description: [
        "Sevdiğin insanlarda hep en iyiyi görüyorsun. Kabalık yorgunluktur, ilgisizlik yoğunluktur, unutkanlık rahatlıktır. Bu iyi niyet çok değerli; ama bazen seni korumuyor.",
        "Uyarı işaretlerini görmezden gelmek, çoğu zaman \"Bu sefer farklı olacak\" umudundan geliyor. Umut güzel, ama tekrar eden davranışlar genelde tesadüf değildir.",
        "Pembe gözlüğünü çıkarman gerekmiyor. Arada bir kenara koyup çıplak gözle bakman yeterli. Arkadaşlarının uyarıları bazen o gözlüğün göremediğini görüyor.",
      ],
      strengths: ["İnsanlara ikinci şans veriyorsun", "Çok anlayışlısın", "Kalbin iyi"],
      watchOut: ["Tekrar eden kötü davranışları mazur gösterme", "Arkadaşlarının uyarılarını dinle", "Anlayış ile sınır çizmek birbirini dışlamaz"],
      bestMatch: "ayaklari-yere-basan",
    },
    {
      id: "tam-delulu",
      name: "Delulu Hükümdarı",
      emoji: "👑",
      tagline: "Delulu bir aşama değil, bir yaşam tarzı.",
      profile: { hayal: 60, isaret: 60, pembe: 60 },
      color: "#7C3AED",
      description: [
        "Hayal ediyorsun, işaret arıyorsun ve gördüğün bayrakları süslüyorsun. Üçü bir arada. İnternetin deyişiyle \"Delulu is the solulu\" sloganının canlı örneğisin.",
        "Bunun çok eğlenceli bir yanı var: Senin aşk hikâyelerin hiç sıkıcı değil ve umudunu kolay kaybetmiyorsun. Ama gerçek ile hayal arasındaki mesafe açıldıkça, hayal kırıklığı da büyüyor.",
        "Kendine küçük bir kural koy: Bir hayali büyütmeden önce bir gerçek kanıt bul. Delulu kalabilirsin, sadece biraz daha güvenli bir delulu.",
      ],
      strengths: ["Umudunu hiç kaybetmiyorsun", "Hayal gücün çok geniş", "Aşkı coşkuyla yaşıyorsun"],
      watchOut: ["Hayal kırıklıkları birikebilir", "Gerçeklik kontrolü için güvendiğin bir arkadaşa danış", "Hayal ile beklentiyi ayır"],
      bestMatch: "ayaklari-yere-basan",
    },
  ],
};
