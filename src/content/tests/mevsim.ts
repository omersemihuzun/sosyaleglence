import type { Test } from "@/lib/types";

export const mevsim: Test = {
  slug: "gun-planla-mevsim-testi",
  title: "Bir Gün Planla, Sana Hangi Mevsim Olduğunu Söyleyelim",
  summary: "Sabahtan geceye hayalindeki günü kur. Sonunda ruhunun hangi mevsim olduğunu söyleyelim.",
  intro:
    "Önünde boş bir gün var ve her şey senin elinde. Uyanıştan uykuya kadar her adımda dört seçenekten birini seç. Planladığın günden ruhunun mevsimini tahmin edeceğiz.",
  emoji: "🌦️",
  color: "#2F7D6D",
  category: "kişilik",
  format: "secim",
  metaDescription:
    "Bir gün planla, sana hangi mevsim olduğunu söyleyelim: ilkbahar, yaz, sonbahar ya da kış? 10 seçimde hayalindeki günü kur, ruhunun mevsimini öğren.",
  dimensions: [
    { id: "tazelik", label: "Bahar tazeliği", low: "Alışkanlıklarını seversin", high: "Her gün yeni başlangıç" },
    { id: "enerji", label: "Yaz enerjisi", low: "Sakin tempo", high: "Güneş ve hareket" },
    { id: "nostalji", label: "Sonbahar hüznü", low: "Bugünde yaşarsın", high: "Anılara dalarsın" },
    { id: "huzur", label: "Kış huzuru", low: "Dışarıda olmalısın", high: "Evin sıcaklığı" },
  ],
  questions: [
    {
      text: "Güne nasıl başlarsın?",
      options: [
        { emoji: "🌸", text: "Balkonda çiçek sula", scores: { tazelik: 2 } },
        { emoji: "🏊", text: "Sabah denize gir", scores: { enerji: 2 } },
        { emoji: "🌧️", text: "Yağmur sesiyle uyan", scores: { nostalji: 2 } },
        { emoji: "🛌", text: "Yorganın altında kal", scores: { huzur: 2 } },
      ],
    },
    {
      text: "Kahvaltıda ne içersin?",
      options: [
        { emoji: "🍓", text: "Taze meyve suyu", scores: { tazelik: 2 } },
        { emoji: "🧊", text: "Buzlu kahve", scores: { enerji: 2 } },
        { emoji: "☕", text: "Tarçınlı latte", scores: { nostalji: 2 } },
        { emoji: "🍫", text: "Sıcak çikolata", scores: { huzur: 2 } },
      ],
    },
    {
      text: "Öğleden önce ne yapalım?",
      options: [
        { emoji: "🚲", text: "Bisiklet turu", scores: { tazelik: 2 } },
        { emoji: "🏐", text: "Plaj voleybolu", scores: { enerji: 2 } },
        { emoji: "📚", text: "Sahaf gezmek", scores: { nostalji: 2 } },
        { emoji: "🧶", text: "Örgü örmek", scores: { huzur: 2 } },
      ],
    },
    {
      text: "Öğle yemeği?",
      options: [
        { emoji: "🥗", text: "Taze bahar salatası", scores: { tazelik: 2 } },
        { emoji: "🍉", text: "Karpuz peynir", scores: { enerji: 2 } },
        { emoji: "🎃", text: "Balkabağı çorbası", scores: { nostalji: 2 } },
        { emoji: "🍲", text: "Kuru fasulye", scores: { huzur: 2 } },
      ],
    },
    {
      text: "Ne giyiyorsun?",
      options: [
        { emoji: "🌼", text: "Çiçekli gömlek", scores: { tazelik: 2 } },
        { emoji: "🩴", text: "Şort ve terlik", scores: { enerji: 2 } },
        { emoji: "🧣", text: "Atkı ve bot", scores: { nostalji: 2 } },
        { emoji: "🧤", text: "Kalın kazak", scores: { huzur: 2 } },
      ],
    },
    {
      text: "Öğleden sonra?",
      options: [
        { emoji: "🧺", text: "Parkta piknik", scores: { tazelik: 2 } },
        { emoji: "🏄", text: "Sörf dersi", scores: { enerji: 2 } },
        { emoji: "🍂", text: "Yaprak fotoğrafı", scores: { nostalji: 2 } },
        { emoji: "🎄", text: "Evi süslemek", scores: { huzur: 2 } },
      ],
    },
    {
      text: "Hangi ses eşlik etsin?",
      options: [
        { emoji: "🐦", text: "Kuş cıvıltısı", scores: { tazelik: 2 } },
        { emoji: "🎉", text: "Yaz hiti", scores: { enerji: 2 } },
        { emoji: "🎷", text: "Eski bir plak", scores: { nostalji: 2 } },
        { emoji: "🔥", text: "Şömine çıtırtısı", scores: { huzur: 2 } },
      ],
    },
    {
      text: "Akşam yemeği?",
      options: [
        { emoji: "🌿", text: "Zeytinyağlı enginar", scores: { tazelik: 2 } },
        { emoji: "🍢", text: "Bahçede mangal", scores: { enerji: 2 } },
        { emoji: "🍷", text: "Şarap ve peynir", scores: { nostalji: 2 } },
        { emoji: "🥘", text: "Fırında güveç", scores: { huzur: 2 } },
      ],
    },
    {
      text: "Akşam ne yapıyoruz?",
      options: [
        { emoji: "🌷", text: "Gün batımı yürüyüşü", scores: { tazelik: 2, nostalji: 1 } },
        { emoji: "🌙", text: "Açık hava sineması", scores: { enerji: 2 } },
        { emoji: "🕯️", text: "Mum ışığında kitap", scores: { nostalji: 2, huzur: 1 } },
        { emoji: "🎲", text: "Evde oyun gecesi", scores: { huzur: 2 } },
      ],
    },
    {
      text: "Günü nasıl kapatırsın?",
      options: [
        { emoji: "🪟", text: "Pencere açık uyu", scores: { tazelik: 2 } },
        { emoji: "🌌", text: "Yıldızları say", scores: { enerji: 2 } },
        { emoji: "📝", text: "Günlüğe yaz", scores: { nostalji: 2 } },
        { emoji: "🛁", text: "Sıcak bir banyo", scores: { huzur: 2 } },
      ],
    },
  ],
  results: [
    {
      id: "ilkbahar",
      name: "İlkbahar Ruhu",
      emoji: "🌸",
      tagline: "Her sabah yeniden başlamak için bir bahane.",
      profile: { tazelik: 80, enerji: 20, nostalji: 15, huzur: 10 },
      color: "#DB2777",
      description: [
        "Günün çiçek sulamakla başlıyor, parkta piknikle devam ediyor, pencere açık uykuyla bitiyor. Sen yeniliğe, tazeliğe ve küçük başlangıçlara açsın.",
        "İlkbahar ruhlu insanlar umutlu olur. Kötü bir dönemden sonra ilk toparlanan, \"Bir de böyle deneyelim\" diyen sensin. Etrafındakilere farkında olmadan cesaret veriyorsun.",
        "Sadece her şeye yeniden başlarken yarım kalanları da bir gün bitirmeyi unutma. Bahar gelir geçer, bazı tohumlar sabır ister.",
      ],
      strengths: ["Umutlu ve iyimsersin", "Değişime kolay uyum sağlarsın", "İnsanlara enerji verirsin"],
      watchOut: ["Yarım kalan işler birikebilir", "Heyecanın çabuk sönebilir"],
      bestMatch: "yaz",
    },
    {
      id: "yaz",
      name: "Yaz Ruhu",
      emoji: "☀️",
      tagline: "Güneş nerede, sen orada.",
      profile: { tazelik: 20, enerji: 80, nostalji: 10, huzur: 10 },
      color: "#EA580C",
      description: [
        "Denizle başlayan, voleybolla devam eden, yıldızların altında biten bir gün. Senin enerjin yüksek ve günün her saatini dolu dolu yaşamak istiyorsun.",
        "Yaz ruhlu insanlar sosyal ve spontanedir. Plan yapmadan çıkılan yollar, kalabalık sofralar, gece yarısı yüzmeleri. Hayat senin için bir festival.",
        "Bu enerji bulaşıcı. Ama sürekli \"açık\" olmak seni de yorabilir. Arada gölgede oturmak da yazın bir parçası.",
      ],
      strengths: ["Enerjik ve sosyalsin", "Anı yaşamayı bilirsin", "Ortamı hemen canlandırırsın"],
      watchOut: ["Dinlenmeyi ihmal edebilirsin", "Sakin dönemlerde sıkılırsın"],
      bestMatch: "ilkbahar",
    },
    {
      id: "sonbahar",
      name: "Sonbahar Ruhu",
      emoji: "🍂",
      tagline: "Biraz hüzün, biraz tarçın, bolca derinlik.",
      profile: { tazelik: 10, enerji: 10, nostalji: 80, huzur: 30 },
      color: "#B45309",
      description: [
        "Yağmur sesiyle uyanıp sahafta kaybolan, akşamı eski bir plakla bitiren birisin. Senin günün derin ve biraz şiirsel.",
        "Sonbahar ruhlu insanlar duygularını yoğun yaşar. Anılara değer verir, eski fotoğraflara bakmaktan hoşlanır, küçük güzellikleri fark eder. Seninle yapılan bir sohbet uzun süre akılda kalır.",
        "Hüzün senin için kötü bir şey değil, bir renk. Sadece geçmişe çok dalıp bugünü kaçırmamaya dikkat et.",
      ],
      strengths: ["Derin ve duyarlısın", "Güzelliği detaylarda görürsün", "İyi bir dinleyicisin"],
      watchOut: ["Geçmişe fazla takılabilirsin", "Melankoli bazen ağır gelebilir"],
      bestMatch: "kis",
    },
    {
      id: "kis",
      name: "Kış Ruhu",
      emoji: "❄️",
      tagline: "Dışarısı soğuk, senin yanın sıcacık.",
      profile: { tazelik: 10, enerji: 10, nostalji: 30, huzur: 80 },
      color: "#1E40AF",
      description: [
        "Yorganın altında başlayan, kalın kazakla geçen, sıcak bir banyoyla biten gün senin hayalin. Sen evin, huzurun ve sıcaklığın insanısın.",
        "Kış ruhlu insanlar sakin ve güven vericidir. Yanında olan herkes kendini rahat hisseder. Büyük kalabalıklar yerine yakın birkaç dost, uzun bir sohbet ve sıcak bir çorba tercih edersin.",
        "Bu huzur bir güç. Ama arada dışarı çıkıp soğuk havayı yüzünde hissetmek de sana iyi gelecek. Kabuğun sıcak, ama dünya da güzel.",
      ],
      strengths: ["Sakin ve güven vericisin", "Sevdiklerine sıcak bir yuva sunarsın", "Yalnız kalmaktan korkmazsın"],
      watchOut: ["Konfor alanından çıkmak zor gelebilir", "Yeni insanlara açılman zaman alır"],
      bestMatch: "sonbahar",
    },
    {
      id: "dort-mevsim",
      name: "Dört Mevsim",
      emoji: "🌈",
      tagline: "Bir gün yaz, bir gün kış. Hepsi sensin.",
      profile: { tazelik: 40, enerji: 40, nostalji: 40, huzur: 40 },
      color: "#7C3AED",
      description: [
        "Planladığın gün her mevsimden bir parça taşıyor. Sabah denize girip akşam şömine başında kitap okumak sana hiç çelişkili gelmiyor.",
        "Dört mevsim ruhlu insanlar çok yönlüdür. Ruh hâline göre değişen bir enerjin var ve bu seni hem eğlenceli hem derin biri yapıyor.",
        "Esnekliğin harika, ama bazen ne istediğini anlamak zaman alabilir. Bugün hangi mevsimdesin diye kendine sormak iyi bir alışkanlık olabilir.",
      ],
      strengths: ["Çok yönlüsün", "Her ortama uyum sağlarsın", "Farklı insanlarla kolay bağ kurarsın"],
      watchOut: ["Ruh hâlin hızlı değişebilir", "Ne istediğine karar vermek zaman alabilir"],
      bestMatch: "yaz",
    },
  ],
};
