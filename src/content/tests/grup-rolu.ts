import type { Test } from "@/lib/types";

export const grupRolu: Test = {
  slug: "arkadas-grubundaki-rolun-testi",
  title: "Arkadaş Grubundaki Rolün Ne?",
  summary: "Planı kuran mı, gece 3'te telefonu açan mı, kaosu başlatan mı? Her grubun bir haritası var. Seninki?",
  intro:
    "Her arkadaş grubunda roller kendiliğinden dağılır: biri rezervasyonu yapar, biri dertleri dinler, biri olayları başlatır, biri de her şeyi sessizce izler. 15 tanıdık durumda ilk tepkini seç.",
  emoji: "🧩",
  color: "#C2410C",
  category: "arkadaşlık",
  metaDescription:
    "Arkadaş grubundaki rolün ne? Organizatör, grup terapisti, kaos ajanı ya da sessiz gözlemci. 15 tanıdık senaryoyla gruptaki yerini keşfet, arkadaşlarınla karşılaştır.",
  dimensions: [
    { id: "organizator", label: "Organizasyon", low: "Akışa uyarsın", high: "Planı sen kurarsın" },
    { id: "terapist", label: "Destek", low: "Dert dinlemek sana göre değil", high: "Herkesin sığınağısın" },
    { id: "kaos", label: "Kaos", low: "Sakinlik", high: "Olaylar seninle başlar" },
    { id: "gozlemci", label: "Gözlem", low: "Hep sahnedesin", high: "Her şeyi sessizce görürsün" },
  ],
  questions: [
    {
      text: "Gruptan biri \"Bu hafta sonu bir şey yapalım\" yazdı. Sonra sessizlik.",
      options: [
        { text: "Hemen bir anket açar, tarih ve mekân önerisi atarım.", scores: { organizator: 3 } },
        { text: "\"Bence Kapadokya'ya gidelim, yarın sabah\" yazarım.", scores: { kaos: 3 } },
        { text: "Kim ne diyecek diye beklerim, karar çıkınca gelirim.", scores: { gozlemci: 2 } },
        { text: "Önce özelden \"Sen iyi misin, bir şey mi oldu?\" diye sorarım.", scores: { terapist: 2 } },
      ],
    },
    {
      text: "Gece 03:00. Telefonun çalıyor. Gruptan biri ayrılmış.",
      options: [
        { text: "Açarım, saatlerce dinlerim.", scores: { terapist: 3 } },
        { text: "Ertesi gün için hepimizin buluşacağı bir moral gecesi ayarlarım.", scores: { organizator: 2, terapist: 1 } },
        { text: "\"Giyin, dışarı çıkıyoruz\" derim.", scores: { kaos: 3 } },
        { text: "Uyuyor olurum. Sabah mesajları okuyup ne olduğunu anlamaya çalışırım.", scores: { gozlemci: 2 } },
      ],
    },
    {
      text: "Restoranda hesap geldi ve kimse kıpırdamıyor.",
      options: [
        { text: "Hesabı bölüp herkese kişi başını söylerim.", scores: { organizator: 3 } },
        { text: "\"Yazı tura atalım, kaybeden öder\" derim.", scores: { kaos: 3 } },
        { text: "Kimin ne yediğini zaten aklımda tuttum, söylemem için birinin sormasını beklerim.", scores: { gozlemci: 3 } },
        { text: "Bu ay maddi sıkıntısı olan arkadaşın payını sessizce öderim.", scores: { terapist: 2 } },
      ],
    },
    {
      text: "İki arkadaşın arasında gerginlik var ve herkes bunu hissediyor.",
      options: [
        { text: "Her biriyle ayrı ayrı konuşup ne olduğunu anlamaya çalışırım.", scores: { terapist: 3 } },
        { text: "İkisini aynı masaya oturtup konuyu açarım.", scores: { organizator: 1, kaos: 2 } },
        { text: "Kimin haklı olduğunu çoktan anladım ama bir şey söylemem.", scores: { gozlemci: 3 } },
        { text: "İkisini de çağıracağım bir plan yapıp barışmaları için ortam hazırlarım.", scores: { organizator: 3 } },
      ],
    },
    {
      text: "Grup fotoğrafı çekiliyor.",
      options: [
        { text: "Herkesi dizen, ışığı ayarlayan benim.", scores: { organizator: 3 } },
        { text: "Tam deklanşör anında komik bir poz veririm.", scores: { kaos: 3 } },
        { text: "Fotoğrafı ben çekerim, kadrajda olmamayı tercih ederim.", scores: { gozlemci: 3 } },
        { text: "Utangaç olan arkadaşımı da kadraja çekerim.", scores: { terapist: 2 } },
      ],
    },
    {
      text: "Grubun en efsane anısı hangisiyle ilgili?",
      options: [
        { text: "Benim yüzümden başımıza gelen bir olay.", scores: { kaos: 3 } },
        { text: "Benim aylar önceden planladığım bir tatil.", scores: { organizator: 3 } },
        { text: "Birimizin en zor zamanında hep birlikte yanında olduğumuz bir gece.", scores: { terapist: 3 } },
        { text: "O anı en detaylı hatırlayan kişi benim.", scores: { gozlemci: 2 } },
      ],
    },
    {
      text: "Arkadaşın yeni sevgilisini gruba ilk kez getirdi.",
      options: [
        { text: "Onu rahatlatmak için sorular sorar, sohbete katarım.", scores: { terapist: 2 } },
        { text: "Ona grubun tüm iç esprilerini ve utanç verici hikâyelerini anlatırım.", scores: { kaos: 3 } },
        { text: "Bütün gece onu izler, nasıl biri olduğuna dair kanaatimi oluştururum.", scores: { gozlemci: 3 } },
        { text: "Bir sonraki buluşmaya onu da eklerim.", scores: { organizator: 2 } },
      ],
    },
    {
      text: "Bir tatil planlanıyor.",
      options: [
        { text: "Uçak, otel, rota: tablo benden.", scores: { organizator: 3 } },
        { text: "Plan ne olursa olsun, ilk gün onu bozarım.", scores: { kaos: 3 } },
        { text: "Kimin bütçesinin sıkışık olduğunu bilir, ona göre seçenek öneririm.", scores: { terapist: 2, organizator: 1 } },
        { text: "Söyleneni yaparım. Gruptaki dinamikleri izlemek ayrıca keyifli.", scores: { gozlemci: 2 } },
      ],
    },
    {
      text: "Gruptan biri herkesin içinde kırıldı ve sustu.",
      options: [
        { text: "Hemen yanına gidip yalnız konuşmak isterim.", scores: { terapist: 3 } },
        { text: "Konuyu değiştirip ortamı dağıtırım.", scores: { kaos: 2 } },
        { text: "Onu kimin neden kırdığını fark etmişimdir. Sonra ona söylerim.", scores: { gozlemci: 2, terapist: 1 } },
        { text: "Akşamın kalanını ona iyi gelecek şekilde yeniden düzenlerim.", scores: { organizator: 2 } },
      ],
    },
    {
      text: "Grubun mesaj kanalında senin payın ne?",
      options: [
        { text: "Hatırlatmalar, saatler, konumlar.", scores: { organizator: 3 } },
        { text: "Gece yarısı attığım saçma videolar.", scores: { kaos: 3 } },
        { text: "Okurum, nadiren yazarım ama yazınca herkes güler.", scores: { gozlemci: 3 } },
        { text: "\"Herkes iyi mi?\" soruları ve özel mesajlar.", scores: { terapist: 3 } },
      ],
    },
    {
      text: "Doğum günü sürprizi hazırlanıyor.",
      options: [
        { text: "Görev dağılımını yapan benim.", scores: { organizator: 3 } },
        { text: "Sürprizi yanlışlıkla ağzımdan kaçıran da benim.", scores: { kaos: 3 } },
        { text: "Doğum günü sahibinin aslında ne isteyeceğini bilen benim.", scores: { terapist: 2, gozlemci: 1 } },
        { text: "Tam doğru anda ışıkları kapatıp sahneyi kuran benim.", scores: { organizator: 1, gozlemci: 2 } },
      ],
    },
    {
      text: "Bir arkadaşın büyük bir karar vermek üzere: işi bırakıp gidecek.",
      options: [
        { text: "Artılarını eksilerini birlikte bir listeye dökeriz.", scores: { organizator: 2 } },
        { text: "\"Yap! Hayat kısa!\" derim.", scores: { kaos: 3 } },
        { text: "Ne hissettiğini, neden korktuğunu sorar, dinlerim.", scores: { terapist: 3 } },
        { text: "Bunu aylardır düşündüğünü fark etmiştim. Sadece \"Hazırsın\" derim.", scores: { gozlemci: 3 } },
      ],
    },
    {
      text: "Grup senin olmadığın bir buluşma yaptı.",
      options: [
        { text: "\"Neden bana haber vermediniz?\" diye bir sonrakini ben ayarlarım.", scores: { organizator: 2 } },
        { text: "Bir sonraki buluşmaya habersiz ve çok gürültülü bir girişle gelirim.", scores: { kaos: 2 } },
        { text: "Sorun etmem. Ama kim kimi neden çağırdı, anlarım.", scores: { gozlemci: 3 } },
        { text: "Arkadaşlarımın iyi vakit geçirdiğine sevinirim, nasıl geçtiğini sorarım.", scores: { terapist: 2 } },
      ],
    },
    {
      text: "Bir arkadaş toplantısında en sevdiğin an hangisi?",
      options: [
        { text: "Her şeyin planladığım gibi gittiğini gördüğüm an.", scores: { organizator: 3 } },
        { text: "Herkesin gülmekten yere yattığı ve sebebinin ben olduğum an.", scores: { kaos: 3 } },
        { text: "Gece sonunda biriyle baş başa kalıp derin bir sohbete daldığım an.", scores: { terapist: 3 } },
        { text: "Köşeden herkesi izleyip \"Ne güzel bir grup\" diye düşündüğüm an.", scores: { gozlemci: 3 } },
      ],
    },
    {
      text: "Grup bir gün dağılırsa en çok neyi özlerler?",
      options: [
        { text: "Her şeyi bir araya getiren kişiyi.", scores: { organizator: 3 } },
        { text: "Hiçbir buluşmayı sıradan bırakmayan kişiyi.", scores: { kaos: 3 } },
        { text: "Kötü günde aranacak kişiyi.", scores: { terapist: 3 } },
        { text: "Her şeyi hatırlayan, herkesi gerçekten tanıyan kişiyi.", scores: { gozlemci: 3 } },
      ],
    },
  ],
  results: [
    {
      id: "organizator",
      name: "Grubun Organizatörü",
      emoji: "📋",
      tagline: "Sen olmasan bu grup hâlâ \"bir ara görüşelim\" diyor olurdu.",
      profile: { organizator: 75, terapist: 20, kaos: 10, gozlemci: 20 },
      color: "#3B6FD9",
      description: [
        "Grubun buluşmalarını gerçeğe dönüştüren kişi sensin. Anketleri açan, rezervasyonu yapan, hesabı bölen ve \"Saat 8'de oradayız, değil mi?\" diye hatırlatan hep sensin.",
        "Bunu yapıyorsun çünkü arkadaşlarını bir arada görmek seni mutlu ediyor. Planlar suya düştüğünde en çok senin canının sıkılması da bu yüzden.",
        "Dikkat: Organizatörler çoğu zaman emeklerinin görünmez olduğunu hisseder. Arada bir \"Bu sefer başkası ayarlasın\" demek hem seni dinlendirir hem de grubun sorumluluğu paylaşmasını sağlar.",
      ],
      strengths: ["Planları gerçeğe dönüştürüyorsun", "Güvenilir ve düzenlisin", "Grubu bir arada tutan yapıştırıcısın"],
      watchOut: ["Her şeyi üstlenmek seni yorabilir", "Planlar bozulduğunda bunu kişisel algılama", "Kontrolü bırakmak bazen en güzel anları yaratır"],
      bestMatch: "kaos-ajani",
    },
    {
      id: "terapist",
      name: "Grubun Terapisti",
      emoji: "🛋️",
      tagline: "Gece 3'te aranan numara senin numaran.",
      profile: { organizator: 15, terapist: 75, kaos: 10, gozlemci: 25 },
      color: "#2F7D6D",
      description: [
        "Biri ayrıldığında, işini kaybettiğinde ya da sadece kötü bir gün geçirdiğinde ilk aranan sensin. Dinlemeyi, yargılamadan anlamayı ve doğru anda doğru şeyi söylemeyi biliyorsun.",
        "Grupta kimin keyifsiz olduğunu herkesten önce sen fark ediyorsun. Kalabalık bir masada bile bir arkadaşının sessizleştiğini görüp yanına gidiyorsun.",
        "Ama herkesin derdini taşıyan birinin de dinlenmeye ihtiyacı var. Kendi kötü gününde arayabileceğin birinin olduğundan emin ol. Terapistlerin de terapiste ihtiyacı olur.",
      ],
      strengths: ["Empati yeteneğin çok güçlü", "İnsanlar yanında kendini güvende hissediyor", "Grubun duygusal dengesini koruyorsun"],
      watchOut: ["Herkesin yükünü taşımak seni tüketebilir", "Kendi ihtiyaçlarını söylemeyi ertelediğin olabilir"],
      bestMatch: "gozlemci",
    },
    {
      id: "kaos-ajani",
      name: "Kaos Ajanı",
      emoji: "🌪️",
      tagline: "Grubun bütün efsane hikâyeleri seninle başlıyor.",
      profile: { organizator: 10, terapist: 15, kaos: 75, gozlemci: 10 },
      color: "#D7102F",
      description: [
        "\"Hadi şimdi gidelim\" diyen, sürprizi yanlışlıkla ağzından kaçıran, sıradan bir akşamı unutulmaz bir maceraya dönüştüren kişi sensin. Sen olmadan buluşmalar bir şeyler eksik geçiyor.",
        "Enerjin bulaşıcı ve insanlar seninle kendilerini daha özgür hissediyor. Grubun anlatmaktan hiç bıkmadığı hikâyelerin çoğunda başrol sende.",
        "Kaosun güzel bir tarafı var ama bazen birinin planını ya da sınırını aşabiliyor. Ortamı okumayı bilen bir kaos ajanı, grubun en sevilen kişisi olur.",
      ],
      strengths: ["Hiçbir anı sıradan bırakmıyorsun", "Spontan ve cesursun", "Gergin ortamları bir anda yumuşatabiliyorsun"],
      watchOut: ["Herkes her gün maceraya hazır değil", "Ciddi anlarda espri yapmak birini kırabilir", "Planları bozmak organizatörü yorabilir"],
      bestMatch: "organizator",
    },
    {
      id: "gozlemci",
      name: "Sessiz Gözlemci",
      emoji: "🦉",
      tagline: "Az konuşursun ama her şeyi bilirsin.",
      profile: { organizator: 15, terapist: 25, kaos: 10, gozlemci: 75 },
      color: "#3B2A6B",
      description: [
        "Grupta en çok konuşan sen değilsin ama en çok gören sensin. Kimin kimden hoşlandığını, kimin neden alındığını, kimin aslında iyi olmadığını herkesten önce fark ediyorsun.",
        "Nadiren yorum yapıyorsun, ama yaptığında herkes susup dinliyor. Bir cümleyle hem en komik hem en isabetli tespiti yapabilen kişi sensin.",
        "Gözlemlerin çok değerli. Arada bir onları paylaşmak, örneğin bir arkadaşına \"Son zamanlarda biraz durgunsun\" demek, sandığından çok daha büyük bir fark yaratabilir.",
      ],
      strengths: ["İnsanları çok iyi okuyorsun", "Sakin ve dengelisin", "Az ama isabetli konuşuyorsun"],
      watchOut: ["Fazla geride durmak, arkadaşlarının seni yeterince tanımamasına yol açabilir", "Gördüklerini kendine saklamak bazen fırsatları kaçırmak demek"],
      bestMatch: "terapist",
    },
    {
      id: "yapistirici",
      name: "Grubun Yapıştırıcısı",
      emoji: "🧲",
      tagline: "Duruma göre plancı, dinleyici, bazen de kaos.",
      profile: { organizator: 40, terapist: 40, kaos: 40, gozlemci: 40 },
      color: "#C2410C",
      description: [
        "Tek bir rolün yok, çünkü grubun neye ihtiyacı varsa o oluyorsun. Kimse plan yapmıyorsa sen yapıyorsun, biri üzgünse dinliyorsun, ortam düştüyse canlandırıyorsun.",
        "Bu esneklik seni grubun farklı insanları arasında bir köprü yapıyor. Herkesle ayrı ayrı iyi anlaşan, alt grupları birbirine bağlayan kişi sensin.",
        "Tek risk: Herkese her şey olmaya çalışırken kendi tercihlerini unutmak. Sen gerçekten hangi rolde en mutlusun? Bunu bilmek iyi gelir.",
      ],
      strengths: ["Çok yönlüsün ve her role uyum sağlıyorsun", "Grubun farklı insanlarını birbirine bağlıyorsun", "İhtiyacı fark edip boşluğu dolduruyorsun"],
      watchOut: ["Herkesin beklentisine göre şekil değiştirmek yorucu olabilir", "Kendi isteklerini de söylemeyi unutma"],
      bestMatch: "organizator",
    },
  ],
};
