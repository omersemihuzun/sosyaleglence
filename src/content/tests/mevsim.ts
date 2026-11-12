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
    "Bir gün planla, sana hangi mevsim olduğunu söyleyelim: ilkbahar, yaz, sonbahar ya da kış? 11 seçimde hayalindeki günü kur, ruhunun mevsimini öğren.",
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
        { emoji: "🏃", text: "Sahilde sabah koşusu", scores: { enerji: 3, tazelik: 2 } },
        { emoji: "🪴", text: "Saksılara yeni fide", scores: { tazelik: 3, huzur: 2 } },
        { emoji: "📻", text: "Radyoda eski şarkılar", scores: { nostalji: 3, enerji: 1 } },
        { emoji: "😴", text: "Alarmı üç kez ertele", scores: { huzur: 3 } },
      ],
    },
    {
      text: "Kahvaltı nerede?",
      options: [
        { emoji: "⛴️", text: "Vapurda simit çay", scores: { enerji: 2, nostalji: 2 } },
        { emoji: "🥑", text: "Yeni açılan bir kafede", scores: { tazelik: 3, enerji: 2 } },
        { emoji: "🍳", text: "Bakır sahanda menemen", scores: { nostalji: 2, huzur: 2 } },
        { emoji: "🛏️", text: "Yatakta, tepsiyle", scores: { huzur: 3 } },
      ],
    },
    {
      text: "Öğleden önce ne yapalım?",
      options: [
        { emoji: "🚲", text: "Yeni semtte bisiklet", scores: { tazelik: 3, enerji: 2 } },
        { emoji: "⚽", text: "Arkadaşlarla halı saha", scores: { enerji: 3 } },
        { emoji: "📚", text: "Sahafta kaybol", scores: { nostalji: 3, tazelik: 2 } },
        { emoji: "🧶", text: "Yarım örgüyü bitir", scores: { huzur: 3, nostalji: 2 } },
      ],
    },
    {
      text: "Öğle yemeği?",
      options: [
        { emoji: "🌿", text: "Pazardan taze otlar", scores: { tazelik: 3, huzur: 2 } },
        { emoji: "🌯", text: "Ayaküstü dürüm", scores: { enerji: 3, tazelik: 2 } },
        { emoji: "🍛", text: "Eski esnaf lokantası", scores: { nostalji: 3 } },
        { emoji: "🍲", text: "Dünden kalan güveç", scores: { huzur: 3, nostalji: 2 } },
      ],
    },
    {
      text: "Ne giyiyorsun?",
      options: [
        { emoji: "👕", text: "Yeni aldığım tişört", scores: { tazelik: 3, enerji: 2 } },
        { emoji: "🧦", text: "Eşofman ve yün çorap", scores: { huzur: 3, enerji: 2 } },
        { emoji: "🧥", text: "Babamın eski ceketi", scores: { nostalji: 3, huzur: 2 } },
        { emoji: "🧢", text: "Spor ayakkabı, şapka", scores: { enerji: 3, tazelik: 2 } },
      ],
    },
    {
      text: "Öğleden sonra?",
      options: [
        { emoji: "🧺", text: "Çimlere uzan", scores: { tazelik: 2, huzur: 2 } },
        { emoji: "🏄", text: "İlk sörf dersin", scores: { enerji: 2, tazelik: 2 } },
        { emoji: "📷", text: "Eski mahallede fotoğraf", scores: { nostalji: 3, tazelik: 2 } },
        { emoji: "🎬", text: "Battaniyede film maratonu", scores: { huzur: 3, nostalji: 2 } },
      ],
    },
    {
      text: "Hangi ses eşlik etsin?",
      options: [
        { emoji: "🐦", text: "Açık pencereden kuşlar", scores: { tazelik: 3, huzur: 2 } },
        { emoji: "🎉", text: "Sokaktan gelen kalabalık", scores: { enerji: 3 } },
        { emoji: "🎷", text: "Cızırtılı bir plak", scores: { nostalji: 3, huzur: 2 } },
        { emoji: "🌧️", text: "Cama vuran yağmur", scores: { huzur: 2, nostalji: 2 } },
      ],
    },
    {
      text: "Akşam yemeği?",
      options: [
        { emoji: "🫒", text: "Zeytinyağlı enginar", scores: { tazelik: 3, nostalji: 2 } },
        { emoji: "🍢", text: "Kalabalık mangal", scores: { enerji: 3, huzur: 2 } },
        { emoji: "🍷", text: "Eski dostla meyhane", scores: { nostalji: 3, enerji: 2 } },
        { emoji: "🥣", text: "Mis gibi mercimek çorbası", scores: { huzur: 3, tazelik: 1 } },
      ],
    },
    {
      text: "Akşam ne yapıyoruz?",
      options: [
        { emoji: "🌇", text: "Gün batımı yürüyüşü", scores: { tazelik: 2, nostalji: 2 } },
        { emoji: "🌙", text: "Açık hava sineması", scores: { enerji: 3, nostalji: 2 } },
        { emoji: "🗂️", text: "Eski albümleri karıştır", scores: { nostalji: 3, huzur: 2 } },
        { emoji: "🎲", text: "Evde oyun gecesi", scores: { huzur: 3, enerji: 2 } },
      ],
    },
    {
      text: "Telefonu eline aldın. Kime yazarsın?",
      options: [
        { emoji: "💬", text: "Yeni tanıştığım birine", scores: { tazelik: 3, enerji: 2 } },
        { emoji: "📣", text: "Gruba yarının planını", scores: { enerji: 3, tazelik: 2 } },
        { emoji: "📩", text: "Yıllardır görmediğim dosta", scores: { nostalji: 3, tazelik: 2 } },
        { emoji: "🔕", text: "Kimseye, sessize alırım", scores: { huzur: 3 } },
      ],
    },
    {
      text: "Günü nasıl kapatırsın?",
      options: [
        { emoji: "📝", text: "Yarının listesini yaz", scores: { tazelik: 3, huzur: 2 } },
        { emoji: "🌊", text: "Gece denize gir", scores: { enerji: 3, tazelik: 2 } },
        { emoji: "📓", text: "Günlüğe yaz", scores: { nostalji: 3, huzur: 2 } },
        { emoji: "🛁", text: "Sıcak bir banyo", scores: { huzur: 3, tazelik: 1 } },
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
        "Günün çiçek sulamakla başlıyor, parkta piknikle devam ediyor, pencere açık uykuyla bitiyor. Sen yeniliğe, tazeliğe ve küçük başlangıçlara açıksın.",
        'İlkbahar ruhlu insanlar umutlu olur. Kötü bir dönemden sonra ilk toparlanan, "Bir de böyle deneyelim" diyen sensin. Etrafındakilere farkında olmadan cesaret veriyorsun.',
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
        'Bu enerji bulaşıcı. Ama sürekli "açık" olmak seni de yorabilir. Arada gölgede oturmak da yazın bir parçası.',
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
