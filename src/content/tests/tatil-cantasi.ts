import type { Test } from "@/lib/types";

export const tatilCantasi: Test = {
  slug: "tatil-cantasi-ask-testi",
  title: "Bir Tatil Çantası Hazırla, Aşk Hayatını Tahmin Edelim",
  summary: "Bavula ne koyduğun, aşkta nasıl biri olduğunu ele veriyor. Çantanı hazırla, gerisini bize bırak.",
  intro:
    "Bir tatile çıkıyorsun ve çanta senin elinde. Her adımda dört eşyadan birini seç. Hazırladığın çantadan aşk hayatına dair tahminimizi yapacağız. Ciddiye alma, ama kendini tanıyabilirsin.",
  emoji: "🧳",
  color: "#E0567A",
  category: "ilişki",
  format: "secim",
  metaDescription:
    "Bir tatil çantası hazırla, aşk hayatını tahmin edelim: romantik mi, özgür ruhlu mu, planlı mı, maceracı mı? 10 seçimde aşk tarzını öğren.",
  dimensions: [
    { id: "romantizm", label: "Romantizm", low: "Ayakları yere basar", high: "Film sahnesi istersin" },
    { id: "ozgurluk", label: "Özgürlük", low: "Bağlanmayı seversin", high: "Alanına düşkünsün" },
    { id: "plan", label: "Planlama", low: "Akışına bırakırsın", high: "Her şey hesaplı" },
    { id: "macera", label: "Macera", low: "Tanıdık olanı seversin", high: "Bilinmeze koşarsın" },
  ],
  questions: [
    {
      text: "Çantaya ilk giren şey?",
      options: [
        { emoji: "📖", text: "Bir aşk romanı", scores: { romantizm: 2 } },
        { emoji: "🗺️", text: "Basılı harita", scores: { plan: 2 } },
        { emoji: "🩱", text: "Sadece mayo", scores: { ozgurluk: 2 } },
        { emoji: "🧗", text: "Tırmanış ayakkabısı", scores: { macera: 2 } },
      ],
    },
    {
      text: "Hangi çantayla yola çıkıyorsun?",
      options: [
        { emoji: "🎒", text: "Sırt çantası", scores: { ozgurluk: 1, macera: 1 } },
        { emoji: "🧳", text: "Sert kasa valiz", scores: { plan: 2 } },
        { emoji: "👜", text: "Hasır çanta", scores: { romantizm: 2 } },
        { emoji: "🛍️", text: "Bez çanta yeter", scores: { ozgurluk: 2 } },
      ],
    },
    {
      text: "Kozmetik çantasında ne var?",
      options: [
        { emoji: "💄", text: "Parfüm ve ruj", scores: { romantizm: 2 } },
        { emoji: "🧴", text: "50 faktör krem", scores: { plan: 2 } },
        { emoji: "🪥", text: "Sadece diş fırçası", scores: { ozgurluk: 2 } },
        { emoji: "🩹", text: "İlk yardım seti", scores: { macera: 1, plan: 1 } },
      ],
    },
    {
      text: "Bir kıyafet seç.",
      options: [
        { emoji: "👗", text: "Akşam kıyafeti", scores: { romantizm: 2 } },
        { emoji: "🩳", text: "Üç şort", scores: { ozgurluk: 2 } },
        { emoji: "🧥", text: "Her havaya katman", scores: { plan: 2 } },
        { emoji: "🥾", text: "Trekking botu", scores: { macera: 2 } },
      ],
    },
    {
      text: "Hangi cihaz yanında?",
      options: [
        { emoji: "📷", text: "Analog kamera", scores: { romantizm: 2 } },
        { emoji: "🔋", text: "İki powerbank", scores: { plan: 2 } },
        { emoji: "📵", text: "Telefon evde kalsın", scores: { ozgurluk: 2 } },
        { emoji: "🚁", text: "Drone", scores: { macera: 2 } },
      ],
    },
    {
      text: "Yolda ne dinlersin ya da yaparsın?",
      options: [
        { emoji: "🎧", text: "Aşk şarkıları", scores: { romantizm: 2 } },
        { emoji: "📒", text: "Gün gün plan", scores: { plan: 2 } },
        { emoji: "🃏", text: "Kart oyunu", scores: { ozgurluk: 1, macera: 1 } },
        { emoji: "🗣️", text: "Yerel dil dersi", scores: { macera: 2 } },
      ],
    },
    {
      text: "Atıştırmalık?",
      options: [
        { emoji: "🍫", text: "Bitter çikolata", scores: { romantizm: 2 } },
        { emoji: "🥜", text: "Paketli kuruyemiş", scores: { plan: 2 } },
        { emoji: "🍉", text: "Yolda ne bulursam", scores: { ozgurluk: 2 } },
        { emoji: "🌶️", text: "Yerel acı sos", scores: { macera: 2 } },
      ],
    },
    {
      text: "Konaklama?",
      options: [
        { emoji: "🏨", text: "Her gece rezervasyon", scores: { plan: 2 } },
        { emoji: "⛺", text: "Çadır, nerede olursa", scores: { macera: 1, ozgurluk: 1 } },
        { emoji: "🕯️", text: "Butik otel", scores: { romantizm: 2 } },
        { emoji: "🤷", text: "Rezervasyon yok", scores: { ozgurluk: 2 } },
      ],
    },
    {
      text: "Eve ne getirirsin?",
      options: [
        { emoji: "💌", text: "Kartpostal", scores: { romantizm: 2 } },
        { emoji: "🧲", text: "Magnet koleksiyonu", scores: { plan: 2 } },
        { emoji: "🐚", text: "Bir deniz kabuğu", scores: { ozgurluk: 2 } },
        { emoji: "📜", text: "Bir macera hikâyesi", scores: { macera: 2 } },
      ],
    },
    {
      text: "Yol arkadaşın yanında ne getirsin?",
      options: [
        { emoji: "🌹", text: "Bir sürpriz", scores: { romantizm: 2 } },
        { emoji: "🗓️", text: "Ortak takvim", scores: { plan: 2 } },
        { emoji: "🛹", text: "Kaykay", scores: { ozgurluk: 1, macera: 1 } },
        { emoji: "🧭", text: "Pusula", scores: { macera: 2 } },
      ],
    },
  ],
  results: [
    {
      id: "film-gibi",
      name: "Film Gibi Aşk",
      emoji: "🎬",
      tagline: "Senin aşkının bir film müziği var.",
      profile: { romantizm: 80, ozgurluk: 15, plan: 15, macera: 15 },
      color: "#E0567A",
      description: [
        "Çantanda parfüm, roman, kartpostal ve akşam kıyafeti var. Sen tatile değil, bir aşk hikâyesinin içine gidiyorsun. Gün batımında kadeh, akşam yemeğinde sürpriz, el yazısı notlar.",
        "Aşk hayatında da aynısını istiyorsun: özen, jest ve unutulmaz anlar. Sıradan bir salı akşamını bile özel kılabilen birine bağlanıyorsun.",
        "Bu romantizm büyük bir güzellik. Sadece herkesin aşkı aynı dilde göstermediğini hatırla. Bazen en büyük jest, bulaşığı yıkamaktır.",
      ],
      strengths: ["Sevgini göstermekten çekinmezsin", "Küçük detayları hatırlarsın", "İlişkiye büyü katarsın"],
      watchOut: ["Beklentiler büyüdükçe hayal kırıklığı da büyür", "Gerçek kişiyi kafandaki karakterle karıştırma"],
      bestMatch: "planli-sadik",
    },
    {
      id: "ozgur-ruh",
      name: "Özgür Ruhlu Aşık",
      emoji: "🕊️",
      tagline: "Sev ama kafese koyma.",
      profile: { romantizm: 15, ozgurluk: 80, plan: 10, macera: 30 },
      color: "#0E7C66",
      description: [
        "Çantan neredeyse boş: bir mayo, bir diş fırçası, telefon evde. Sen eşyaya değil, ana bağlanıyorsun. Rezervasyonsuz yollar ve plansız günler seni mutlu ediyor.",
        "Aşkta da alan istiyorsun. Seni sürekli kontrol eden, her saat nerede olduğunu soran biriyle boğulursun. Ama doğru kişi senin özgürlüğünü kısıtlamaz, ona eşlik eder.",
        "Senin sevgin hafif ama sahici. Tek uyarı: Bağlanmaktan korktuğun için değil, gerçekten istediğin için özgür olduğundan emin ol.",
      ],
      strengths: ["Partnerine de alan tanırsın", "İlişkide drama sevmezsin", "Rahat ve doğalsın"],
      watchOut: ["Mesafen ilgisizlik gibi okunabilir", "Ciddi konuşmalardan kaçma"],
      bestMatch: "macera-ortagi",
    },
    {
      id: "planli-sadik",
      name: "Planlı ve Sadık",
      emoji: "🗓️",
      tagline: "Söz verdiysen tutarsın. Saatinde de gelirsin.",
      profile: { romantizm: 20, ozgurluk: 10, plan: 80, macera: 15 },
      color: "#3B6FD9",
      description: [
        "Valizinde her havaya kıyafet, iki powerbank, güneş kremi ve gün gün plan var. Sen sürprizden çok güvenilirliğe inanıyorsun ve bu aşk hayatına da yansıyor.",
        "Seninle ilişki sağlam bir zemin. Doğum günleri unutulmaz, sözler tutulur, gelecek konuşulur. Partnerin nerede durduğunu her zaman bilir.",
        "Planlamak sana güven veriyor. Ama ilişkinin de biraz nefes alması lazım. Arada bir planı bozup \"Hadi gidelim\" demek, en çok seni şaşırtacak.",
      ],
      strengths: ["Güvenilir ve sadıksın", "İlişkiye emek verirsin", "Geleceği birlikte kurmayı seversin"],
      watchOut: ["Her şeyi kontrol etmek istemek partnerini yorabilir", "Plan dışı durumlarda gerilirsin"],
      bestMatch: "film-gibi",
    },
    {
      id: "macera-ortagi",
      name: "Macera Ortağı",
      emoji: "🧭",
      tagline: "Sevgilin aynı zamanda yol arkadaşın olmalı.",
      profile: { romantizm: 15, ozgurluk: 30, plan: 15, macera: 80 },
      color: "#C2410C",
      description: [
        "Çantanda trekking botu, pusula, drone ve acı sos var. Sen tatilde dinlenmek değil, bir şey yaşamak istiyorsun. Aşkta da aynı: birlikte keşfetmek, birlikte cesaret etmek.",
        "Senin için ideal partner, \"Bunu hiç denemedik\" dediğinde gözleri parlayan biri. Rutin ve sıkıcılık, ilişkinin en büyük düşmanı.",
        "Heyecanı canlı tutmak harika. Ama ilişkinin sakin günleri de var. Koltukta geçen bir pazar da bir macera olabilir, eğer doğru kişiyle geçiyorsa.",
      ],
      strengths: ["İlişkiyi hep canlı tutarsın", "Cesur ve meraklısın", "Birlikte büyümeyi seversin"],
      watchOut: ["Sakin dönemlerde sıkılabilirsin", "Partnerinin temposunu da gözet"],
      bestMatch: "ozgur-ruh",
    },
    {
      id: "yavas-yanan",
      name: "Yavaş Yanan Ateş",
      emoji: "🔥",
      tagline: "Önce güven, sonra tutku. Ama tutku gerçekten geliyor.",
      profile: { romantizm: 40, ozgurluk: 35, plan: 40, macera: 35 },
      color: "#8E3B63",
      description: [
        "Çantan dengeli: biraz plan, biraz romantizm, biraz macera. Uç noktalara gitmiyorsun ve bu seni çok güvenilir bir partner yapıyor.",
        "Aşkta hızlı başlamazsın. Önce tanır, güvenir, sonra açılırsın. Ama bir kere bağlandığında o ateş uzun süre yanar.",
        "Esnekliğin sayesinde farklı tipte insanlarla uyum sağlayabiliyorsun. Sadece ne istediğini söylemeyi unutma, karşındaki zihin okuyucu değil.",
      ],
      strengths: ["Dengeli ve olgunsun", "Uzun vadeli ilişkilerde çok iyisin", "Farklı tiplerle uyum sağlarsın"],
      watchOut: ["Başlangıçta mesafeli görünebilirsin", "Kendi isteklerini netleştirmen gerekebilir"],
      bestMatch: "planli-sadik",
    },
  ],
};
