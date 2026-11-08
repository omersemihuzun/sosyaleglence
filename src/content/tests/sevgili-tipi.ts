import type { Test } from "@/lib/types";

export const sevgiliTipi: Test = {
  slug: "hangi-tip-sevgilisin-testi",
  title: "İlişkide Hangi Tip Sevgilisin?",
  summary: "Golden retriever mı, kara kedi mi, kapibara mı? İnternetin sevgili arketiplerinden hangisi sensin?",
  intro:
    "İnternet sevgilileri hayvanlara benzetmeyi çok seviyor: coşkulu golden retriever, gizemli kara kedi, sarsılmaz kapibara, koruyucu ayı. 15 ilişki anında ilk içgüdünü seç, arketipini bul.",
  emoji: "🐾",
  color: "#D97706",
  category: "ilişki",
  metaDescription:
    "Hangi tip sevgilisin testi: Golden retriever, kara kedi, kapibara ya da ayı. 15 ilişki senaryosuyla sevgili arketipini ve sana en uyan tipi öğren.",
  dimensions: [
    { id: "coskun", label: "Coşku", low: "Sakin ifade", high: "Sevgisi taşar" },
    { id: "gizem", label: "Gizem", low: "Açık kitap", high: "Çözülmesi zor" },
    { id: "sakin", label: "Sakinlik", low: "Hareketli", high: "Hiçbir şey sarsmaz" },
    { id: "koruyucu", label: "Koruyuculuk", low: "Alan tanır", high: "Kol kanat gerer" },
  ],
  questions: [
    {
      text: "Sevgilin işten eve döndü, yüzü asık. \"Bir şey yok\" diyor.",
      options: [
        { text: "Sarılır, \"Anlat bakalım\" derim; susmak istese de biraz üstüne giderim.", scores: { coskun: 2, koruyucu: 1 } },
        { text: "Gülümser, kendi işime dönerim; anlatmak isterse yanıma gelir.", scores: { gizem: 2, sakin: 1 } },
        { text: "Çayını koyar, kanepede yer açarım; gerisini akışına bırakırım.", scores: { sakin: 3 } },
        { text: "\"Yemek yedin mi?\" diye sorar, hemen sevdiği yemeği sipariş ederim.", scores: { koruyucu: 2, coskun: 1 } },
      ],
    },
    {
      text: "Arkadaş grubunda sevgilinle ilgili bir şaka yapıldı ve o biraz bozuldu.",
      options: [
        { text: "Konuyu hemen başka yere çeker, ortamı güldürerek dağıtırım.", scores: { coskun: 2, sakin: 1 } },
        { text: "Ona bir bakış atarım; ikimiz anlarız, eve dönünce konuşuruz.", scores: { gizem: 2, koruyucu: 1 } },
        { text: "Büyütmem; sonra baş başa kalınca \"Takıldın mı?\" diye sorarım.", scores: { sakin: 2, gizem: 1 } },
        { text: "\"Tamam, yeter\" deyip şakayı keserim; ortam gerilse de.", scores: { koruyucu: 3 } },
      ],
    },
    {
      text: "Sevgini en çok nasıl gösterirsin?",
      options: [
        { text: "Her gün söyleyerek, sarılarak; bazen fazla geldiğimi bilsem de.", scores: { coskun: 3 } },
        { text: "Nadiren söylerim ama söylediğimde bir hafta konuşulur.", scores: { gizem: 2, sakin: 1 } },
        { text: "Hep orada olarak; büyük laflardan çok sessiz bir süreklilikle.", scores: { sakin: 2, koruyucu: 1 } },
        { text: "Randevularını, eksiklerini, yorgunluğunu takip ederek.", scores: { koruyucu: 2, coskun: 1 } },
      ],
    },
    {
      text: "Bir tartışmanın ortasındasınız ve ikiniz de biraz haklısınız.",
      options: [
        { text: "Beş dakikadan uzun küs kalamam; çözülmeden yanına giderim.", scores: { coskun: 2, koruyucu: 1 } },
        { text: "Biraz çekilirim; ne hissettiğimi önce kendim anlamam lazım.", scores: { gizem: 3 } },
        { text: "Sesimi hiç yükseltmem; bu sakinlik bazen onu daha çok kızdırır.", scores: { sakin: 2, gizem: 1 } },
        { text: "Haklı olsam da \"Sen iyi misin?\" diye sorup kavgayı bırakırım.", scores: { koruyucu: 2, sakin: 1 } },
      ],
    },
    {
      text: "Uzun bir haftanın ardından boş bir cumartesi geldi.",
      options: [
        { text: "Sabah kahvaltı, öğlen sahil, akşam konser; boş saat kalmasın.", scores: { coskun: 3 } },
        { text: "Ona söylemeden, kimsenin bilmediği bir yere götürürüm.", scores: { gizem: 2, coskun: 1 } },
        { text: "Hiç plan yok: battaniye, dizi, telefonlar sessizde.", scores: { sakin: 3 } },
        { text: "Onun dinlenebileceği bir gün kurar, ayak işlerini ben hallederim.", scores: { koruyucu: 2, sakin: 1 } },
      ],
    },
    {
      text: "Sevgilin grip olmuş, iki gündür yataktan çıkamıyor.",
      options: [
        { text: "Komik videolar, sesli mesajlar yağdırırım; moral her şeydir.", scores: { coskun: 2, koruyucu: 1 } },
        { text: "Haber vermeden kapısına sevdiği şeyleri bırakır, çekilirim.", scores: { gizem: 2, koruyucu: 1 } },
        { text: "Yanına uzanırım; panik yapmam, gürültü yapmam, beklerim.", scores: { sakin: 2, gizem: 1 } },
        { text: "İlacı, çorbayı, doktoru ben ayarlarım; o istemese de.", scores: { koruyucu: 3 } },
      ],
    },
    {
      text: "Bir partide sevgilin tanımadığı insanların arasında kaldı.",
      options: [
        { text: "Onu herkesle tanıştırırım; beş dakikada kaynaştırırım.", scores: { coskun: 2, koruyucu: 1 } },
        { text: "Ben de köşede onunla kalırım; zaten kalabalığı pek sevmem.", scores: { gizem: 2, sakin: 1 } },
        { text: "Kendi başının çaresine bakar; ben de sohbetime devam ederim.", scores: { sakin: 3 } },
        { text: "Uzaktan gözüm hep üstündedir; sıkılırsa yanında biterim.", scores: { koruyucu: 2, gizem: 1 } },
      ],
    },
    {
      text: "Arkadaşların seni sevgili olarak nasıl tarif eder?",
      options: [
        { text: "\"Âşık olunca bütün mahalle duyuyor.\"", scores: { coskun: 3 } },
        { text: "\"Az konuşur ama sevgilisi için dağları deler.\"", scores: { gizem: 2, koruyucu: 1 } },
        { text: "\"Yanında stres diye bir şey kalmıyor.\"", scores: { sakin: 3 } },
        { text: "\"Sevgilisine laf ettirmez, çantası da hep dolu.\"", scores: { koruyucu: 2, coskun: 1 } },
      ],
    },
    {
      text: "Sevgilin terfi aldığını haber verdi.",
      options: [
        { text: "Çığlık atar, herkese anlatır, hemen bir kutlama ayarlarım.", scores: { coskun: 3 } },
        { text: "Gururla gülümserim; akşam ona küçük bir sürpriz hazırlarım.", scores: { gizem: 2, coskun: 1 } },
        { text: "\"Biliyordum zaten\" der, sakin sakin kutlarız; abartmam.", scores: { sakin: 2, gizem: 1 } },
        { text: "Yeni pozisyonda onu neyin yoracağını şimdiden düşünürüm.", scores: { koruyucu: 2, sakin: 1 } },
      ],
    },
    {
      text: "Yeni biriyle görüşmeye başladığında ilk haftalarda nasıl olursun?",
      options: [
        { text: "Hemen belli ederim; ilgimi saklayamam, saklamak da istemem.", scores: { coskun: 2, koruyucu: 1 } },
        { text: "Bir süre zor çözülürüm; güvenmem zaman alır.", scores: { gizem: 3 } },
        { text: "Acele etmem; ne olacaksa olsun, akışına bırakırım.", scores: { sakin: 2, gizem: 1 } },
        { text: "Daha üçüncü buluşmada eve varınca haber vermesini isterim.", scores: { koruyucu: 2, coskun: 1 } },
      ],
    },
    {
      text: "Sevgilin kötü bir gün geçirmiş; sinirli ve sana da biraz ters davrandı.",
      options: [
        { text: "Onu güldürmek için elimden geleni yaparım; terslere takılmam.", scores: { coskun: 2, sakin: 1 } },
        { text: "Alan tanırım; bu tersliği konuşmak için başka bir günü beklerim.", scores: { gizem: 2, sakin: 1 } },
        { text: "Sinirinden etkilenmem; sakinliğimle onu dengelerim.", scores: { sakin: 3 } },
        { text: "Onu kim üzdüyse onunla ben konuşmak isterim.", scores: { koruyucu: 2, coskun: 1 } },
      ],
    },
    {
      text: "WhatsApp'ta mesajlaşma tarzın:",
      options: [
        { text: "Bol emoji, sesli mesaj, gün içinde onlarca mesaj.", scores: { coskun: 3 } },
        { text: "Kısa ama yerinde; bazen saatlerce sessiz kalırım.", scores: { gizem: 2, sakin: 1 } },
        { text: "Rahat; cevap gelmese de dert etmem, ben de geç dönerim.", scores: { sakin: 2, gizem: 1 } },
        { text: "\"Eve vardın mı?\" mesajım eksik olmaz, cevap gelene kadar.", scores: { koruyucu: 2, coskun: 1 } },
      ],
    },
    {
      text: "Bir ilişkide seni en çok ne kırar?",
      options: [
        { text: "Heyecanımın karşılıksız kalması.", scores: { coskun: 3 } },
        { text: "Alanıma saygı duyulmaması.", scores: { gizem: 2, sakin: 1 } },
        { text: "Gereksiz drama ve sürekli hesap sorulması.", scores: { sakin: 2, gizem: 1 } },
        { text: "Yardım etmeme izin verilmemesi.", scores: { koruyucu: 2, coskun: 1 } },
      ],
    },
    {
      text: "Doğum günü yaklaşıyor. Sürpriz yapma tarzın:",
      options: [
        { text: "Kalabalık, gürültülü, herkesin katıldığı bir sürpriz parti.", scores: { coskun: 3 } },
        { text: "Sadece onun anlayacağı gizli bir not ya da hediye.", scores: { gizem: 2, coskun: 1 } },
        { text: "Sevdiği yemeği yapıp sessizce masaya koymak.", scores: { sakin: 2, koruyucu: 1 } },
        { text: "Uzun zamandır ertelediği bir işi onun yerine halletmek.", scores: { koruyucu: 2, sakin: 1 } },
      ],
    },
    {
      text: "Sevgilinle ilk uzun yol tatiline çıkıyorsunuz. Arabadaki rolün?",
      options: [
        { text: "Çalma listesi, ani molalar, plansız sapaklar benden.", scores: { coskun: 2, gizem: 1 } },
        { text: "Camdan dışarı bakar, az konuşurum; en güzel anları izlerim.", scores: { gizem: 2, sakin: 1 } },
        { text: "Trafik, gecikme, yanlış yol; hiçbiri keyfimi kaçırmaz.", scores: { sakin: 2, koruyucu: 1 } },
        { text: "Rota, yakıt, otel benden; o sadece keyfine baksın.", scores: { koruyucu: 3 } },
      ],
    },
  ],
  results: [
    {
      id: "golden-retriever",
      name: "Golden Retriever",
      emoji: "🐶",
      tagline: "Sevdiğinde bütün dünya bunu bilir.",
      profile: { coskun: 75, gizem: 10, sakin: 20, koruyucu: 25 },
      color: "#D97706",
      description: [
        "Sevgin taşıyor ve bunu saklamak aklına bile gelmiyor. Kapıda sarılmalar, gün içinde sesli mesajlar, her başarıya çığlıklarla sevinmek... Seninle ilişki, güneşli bir gün gibi.",
        "En güzel tarafın, partnerinin kendini sevilmiş hissetmesi için tahmin yürütmesine gerek kalmaması. Bunu her gün, sözle ve davranışla gösteriyorsun.",
        "Dikkat edilecek nokta: Heyecanının karşılık bulmadığı anlarda çok kırılabiliyorsun. Herkes sevgisini senin kadar yüksek sesle göstermez; sessiz sevgileri de okumayı öğrenmek seni rahatlatır.",
      ],
      strengths: ["Sevgini açıkça gösteriyorsun", "Ortamın neşesi sensin", "Kin tutmuyor, çabuk barışıyorsun"],
      watchOut: ["Karşılık beklentin yüksek olabilir", "Sakin partnerlerin sevgisini hafife alma"],
      bestMatch: "kara-kedi",
    },
    {
      id: "kara-kedi",
      name: "Kara Kedi",
      emoji: "🐈‍⬛",
      tagline: "Kolay çözülmezsin. Ama çözene her şeyini verirsin.",
      profile: { coskun: 10, gizem: 75, sakin: 25, koruyucu: 20 },
      color: "#1F1147",
      description: [
        "Gizemlisin ve bunu bilerek değil, doğal olarak yapıyorsun. Duygularını hemen göstermiyor, güvenmen için zaman istiyorsun. Ama birine kapını açtığında, o kişi senin en özel köşende yer alıyor.",
        "Sevgin küçük ve derin işaretlerle gelir: sadece onun anlayacağı bir not, tam ihtiyacı olduğu anda yapılan bir jest. Kalabalık kutlamalar değil, baş başa anlar senin dilin.",
        "Partnerin bazen ne hissettiğini anlamakta zorlanabilir. Arada bir duygularını söze dökmek, gizemini bozmaz; ilişkiye güven katar.",
      ],
      strengths: ["Derin ve sadık bir bağ kuruyorsun", "Alan tanımayı ve beklemeyi biliyorsun", "Jestlerin çok anlamlı"],
      watchOut: ["Mesafen ilgisizlik gibi algılanabilir", "Duygularını arada bir yüksek sesle söyle"],
      bestMatch: "golden-retriever",
    },
    {
      id: "kapibara",
      name: "Kapibara",
      emoji: "🦫",
      tagline: "Dünya yansa sen sakin kalırsın. Partnerin de seninle.",
      profile: { coskun: 20, gizem: 20, sakin: 75, koruyucu: 20 },
      color: "#8B6B4A",
      description: [
        "Senin yanında herkes biraz daha sakin. Krizleri büyütmüyor, dramaya kapılmıyor, partnerinin kötü gününü kendi huzurunla dengeliyorsun. İnsanların seninle olmaktan hoşlanmasının sebebi bu.",
        "Sevgini gösteriş yerine istikrarla gösteriyorsun: hep oradasın, hep aynısın. Bu, özellikle hareketli hayatları olan partnerler için paha biçilmez bir liman.",
        "Tek risk, sakinliğinin bazen umursamazlık sanılması. Önemsediğin şeyleri arada bir dile getirmen, partnerine onun da önemli olduğunu hatırlatır.",
      ],
      strengths: ["Krizlerde soğukkanlısın", "Partnerine huzur veriyorsun", "Gereksiz drama yaratmıyorsun"],
      watchOut: ["Sakinliğin ilgisizlik gibi görünebilir", "Rahatsız olduğun şeyleri ertelemeden söyle"],
      bestMatch: "ayi",
    },
    {
      id: "ayi",
      name: "Koruyucu Ayı",
      emoji: "🐻",
      tagline: "Sevdiğine kol kanat gerersin. Kucağın da sıcacık.",
      profile: { coskun: 25, gizem: 15, sakin: 20, koruyucu: 75 },
      color: "#7C4A2D",
      description: [
        "Senin sevgin bir kalkan gibi. Partnerin eve vardı mı, yemek yedi mi, onu üzen biri var mı... Hepsini düşünüyor, gerekirse araya giriyorsun. Seninle olan kişi kendini çok güvende hissediyor.",
        "Bu koruyuculuğun arkasında çok büyük bir şefkat var. Sevdiğinin hayatını kolaylaştırmak, sana en çok anlam veren şey.",
        "Dikkat etmen gereken tek şey denge: Korumak ile onun yerine karar vermek arasında ince bir çizgi var. Partnerinin kendi savaşlarını da verebileceğine güvenmek, sevginin bir başka hâli.",
      ],
      strengths: ["Güvenilir ve sadıksın", "Partnerinin ihtiyaçlarını önceden görüyorsun", "Zor zamanda hep oradasın"],
      watchOut: ["Aşırı korumacılık boğucu olabilir", "Kendi ihtiyaçlarını da unutma"],
      bestMatch: "kapibara",
    },
  ],
};
