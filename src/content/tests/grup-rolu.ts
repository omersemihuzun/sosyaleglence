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
    "Arkadaş grubundaki rolün ne? Organizatör, grup terapisti, kaos ajanı ya da sessiz gözlemci. 15 tanıdık senaryoyla gruptaki yerini keşfet.",
  dimensions: [
    { id: "organizator", label: "Organizasyon", low: "Akışa uyarsın", high: "Planı sen kurarsın" },
    { id: "terapist", label: "Destek", low: "Dert dinlemek sana göre değil", high: "Herkesin sığınağısın" },
    { id: "kaos", label: "Kaos", low: "Sakinlik", high: "Olaylar seninle başlar" },
    { id: "gozlemci", label: "Gözlem", low: "Hep sahnedesin", high: "Her şeyi sessizce görürsün" },
  ],
  questions: [
    {
      text: "Grupta biri \"Bu hafta sonu bir şey yapalım\" yazdı. Sonra iki gün sessizlik.",
      options: [
        { text: "Anket açarım; cevap gelmezse tarihi ve yeri kendim koyarım.", scores: { organizator: 2, kaos: 1 } },
        { text: "\"Cumartesi Şile, 9'da yola çıkıyoruz\" yazarım, gelen gelir.", scores: { kaos: 2, organizator: 1 } },
        { text: "Beklerim; karar çıkınca gelirim, çıkmazsa da dert etmem.", scores: { gozlemci: 3 } },
        { text: "Grubu bırakır, son günlerde sesi çıkmayan arkadaşa özelden yazarım.", scores: { terapist: 2, gozlemci: 1 } },
      ],
    },
    {
      text: "Gece 03:00. Telefonun çalıyor. Gruptan biri ayrılmış ve yarın senin erkenden işin var.",
      options: [
        { text: "Açarım, sabaha kadar dinlerim; işe uykusuz gitmek de olur.", scores: { terapist: 3 } },
        { text: "Kısa dinler, ertesi akşam herkesin geleceği bir moral gecesi kurarım.", scores: { organizator: 2, terapist: 1 } },
        { text: "\"Giyin, dışarı çıkıyoruz\" derim; ağlamak sonra da olur.", scores: { kaos: 2, terapist: 1 } },
        { text: "Uyuyor olurum; sabah mesajları okuyup ne olduğunu çözerim.", scores: { gozlemci: 3 } },
      ],
    },
    {
      text: "Restoranda hesap geldi. Biri sadece çorba içti ama \"eşit bölelim\" sesleri yükseliyor.",
      options: [
        { text: "Hesabı kalem kalem bölüp herkese kişi başını söylerim.", scores: { organizator: 2, gozlemci: 1 } },
        { text: "\"Yazı tura atalım, kaybeden öder\" derim; bazen ben kaybederim.", scores: { kaos: 2, gozlemci: 1 } },
        { text: "Kimin ne yediği aklımda; biri sorarsa söylerim, sormazsa susarım.", scores: { gozlemci: 3 } },
        { text: "Çorba içen arkadaşın sıkıldığını görür, farkı sessizce öderim.", scores: { terapist: 2, gozlemci: 1 } },
      ],
    },
    {
      text: "İki arkadaşın arasında gerginlik var ve herkes bunu hissediyor. Kimse adını koymuyor.",
      options: [
        { text: "İkisiyle ayrı ayrı konuşup ne olduğunu anlamaya çalışırım.", scores: { terapist: 2, gozlemci: 1 } },
        { text: "İkisini aynı masaya oturtup \"Hadi, dökülün\" derim.", scores: { kaos: 2, organizator: 1 } },
        { text: "Kimin haklı olduğunu çoktan anladım ama taraf tutmam.", scores: { gozlemci: 3 } },
        { text: "İkisini de çağıracağım bir plan kurar, barışacakları ortamı hazırlarım.", scores: { organizator: 2, terapist: 1 } },
      ],
    },
    {
      text: "Grup fotoğrafı çekiliyor ve herkes biraz yorgun.",
      options: [
        { text: "Herkesi dizer, ışığı ayarlar, yirmi kare çektiririm.", scores: { organizator: 3 } },
        { text: "Tam deklanşör anında herkesi güldüren bir poz veririm.", scores: { kaos: 3 } },
        { text: "Fotoğrafı ben çekerim; kadrajda olmamayı tercih ederim.", scores: { gozlemci: 2, organizator: 1 } },
        { text: "Kenarda kalan arkadaşı kolundan çekip ortaya koyarım.", scores: { terapist: 2, kaos: 1 } },
      ],
    },
    {
      text: "Grubun en çok anlatılan anısı hangisiyle ilgili?",
      options: [
        { text: "Benim yüzümden yolda kaldığımız ve sabaha kadar güldüğümüz gece.", scores: { kaos: 3 } },
        { text: "Aylar önce planladığım ve sonunda her şeyin ters gittiği tatil.", scores: { organizator: 2, kaos: 1 } },
        { text: "Birimizin en zor zamanında sabaha kadar yanında oturduğumuz gece.", scores: { terapist: 3 } },
        { text: "Ben hatırlatmasam herkesin unutacağı küçük ama çok komik bir an.", scores: { gozlemci: 2, kaos: 1 } },
      ],
    },
    {
      text: "Arkadaşın yeni sevgilisini gruba ilk kez getirdi. Herkes biraz mesafeli.",
      options: [
        { text: "Rahatlasın diye sorular sorar, onu sohbete katarım.", scores: { terapist: 2, organizator: 1 } },
        { text: "Grubun iç esprilerini anlatırım; ilk günden bizden biri olsun.", scores: { kaos: 2, terapist: 1 } },
        { text: "Bütün gece izlerim; nasıl biri olduğuna dair kanaatimi oluştururum.", scores: { gozlemci: 3 } },
        { text: "Gece bitmeden onu da gruba ekler, haftaya bir plan yaparım.", scores: { organizator: 2, terapist: 1 } },
      ],
    },
    {
      text: "Bir tatil planlanıyor ama herkesin bütçesi çok farklı.",
      options: [
        { text: "Uçak, otel, rota: tablo benden; herkes kendi satırını doldursun.", scores: { organizator: 3 } },
        { text: "Plan ne olursa olsun ilk gün bozarım; en iyi anılar plansız olur.", scores: { kaos: 3 } },
        { text: "Kimin bütçesi sıkışık bilirim; ona göre seçenek öneririm.", scores: { terapist: 2, organizator: 1 } },
        { text: "Söyleneni yaparım; kimin neyi istemeyip söylemediğini görürüm.", scores: { gozlemci: 2, terapist: 1 } },
      ],
    },
    {
      text: "Gruptan biri herkesin içinde bir laftan kırıldı ve sustu. Lafı eden fark etmedi bile.",
      options: [
        { text: "Hemen yanına gidip yalnız konuşmak isterim.", scores: { terapist: 3 } },
        { text: "Bir espriyle konuyu değiştiririm; ilgi ondan dağılsın.", scores: { kaos: 2, terapist: 1 } },
        { text: "Lafı edenin bunu neden söylediğini anlarım; sonra ona söylerim.", scores: { gozlemci: 2, terapist: 1 } },
        { text: "Akşamın kalanını ona iyi gelecek şekilde yeniden düzenlerim.", scores: { organizator: 2, terapist: 1 } },
      ],
    },
    {
      text: "Grubun WhatsApp kanalında senin payın ne?",
      options: [
        { text: "Hatırlatmalar, saatler, konumlar; okunmasa da atarım.", scores: { organizator: 3 } },
        { text: "Gece yarısı saçma videolar; moral bozuk olan varsa daha çok.", scores: { kaos: 2, terapist: 1 } },
        { text: "Okurum, nadiren yazarım; yazınca herkes güler.", scores: { gozlemci: 2, kaos: 1 } },
        { text: "\"Herkes iyi mi?\" soruları ve gruptan taşan özel mesajlar.", scores: { terapist: 2, organizator: 1 } },
      ],
    },
    {
      text: "Bir doğum günü sürprizi hazırlanıyor.",
      options: [
        { text: "Görev dağılımını yapan, kimin ne getireceğini yazan benim.", scores: { organizator: 3 } },
        { text: "Sürprizi yanlışlıkla ağzından kaçıran da benim.", scores: { kaos: 3 } },
        { text: "Doğum günü sahibinin aslında ne isteyeceğini bilen benim.", scores: { terapist: 2, gozlemci: 1 } },
        { text: "Tam doğru anda ışıkları kapatıp sahneyi kuran benim.", scores: { gozlemci: 2, organizator: 1 } },
      ],
    },
    {
      text: "Bir arkadaşın büyük bir karar vermek üzere: işi bırakıp başka şehre gidecek.",
      options: [
        { text: "Artılarını eksilerini birlikte bir listeye dökeriz.", scores: { organizator: 2, terapist: 1 } },
        { text: "\"Yap! Hayat kısa!\" derim; taşınmasına da ben yardım ederim.", scores: { kaos: 2, organizator: 1 } },
        { text: "Ne hissettiğini, neden korktuğunu sorar, dinlerim.", scores: { terapist: 2, gozlemci: 1 } },
        { text: "Aylardır düşündüğünü fark etmiştim; sadece \"Hazırsın\" derim.", scores: { gozlemci: 3 } },
      ],
    },
    {
      text: "Grup senin olmadığın bir buluşma yapmış, story'lerden öğrendin.",
      options: [
        { text: "Bir sonrakini ben ayarlarım; o liste bir daha bensiz yapılmaz.", scores: { organizator: 2, kaos: 1 } },
        { text: "Bir sonrakine habersiz ve çok gürültülü bir girişle gelirim.", scores: { kaos: 3 } },
        { text: "Sorun etmem ama kim kimi neden çağırdı, anlarım.", scores: { gozlemci: 3 } },
        { text: "İyi vakit geçirdiklerine sevinir, nasıl geçtiğini sorarım.", scores: { terapist: 2, gozlemci: 1 } },
      ],
    },
    {
      text: "Bir arkadaş buluşmasında en sevdiğin an hangisi?",
      options: [
        { text: "Her şeyin planladığım gibi gittiğini gördüğüm an.", scores: { organizator: 2, terapist: 1 } },
        { text: "Herkesin gülmekten yere yattığı ve sebebinin ben olduğum an.", scores: { kaos: 3 } },
        { text: "Gece sonunda biriyle baş başa derin bir sohbete daldığım an.", scores: { terapist: 2, gozlemci: 1 } },
        { text: "Köşeden herkesi izleyip \"Ne güzel bir grup\" dediğim an.", scores: { gozlemci: 3 } },
      ],
    },
    {
      text: "Grup bir gün dağılırsa en çok neyi özlerler?",
      options: [
        { text: "Her şeyi bir araya getiren, kimseyi unutmayan kişiyi.", scores: { organizator: 2, terapist: 1 } },
        { text: "Hiçbir buluşmayı sıradan bırakmayan kişiyi.", scores: { kaos: 3 } },
        { text: "Kötü günde ilk aranacak kişiyi.", scores: { terapist: 3 } },
        { text: "Herkesi gerçekten tanıyan, her şeyi hatırlayan kişiyi.", scores: { gozlemci: 2, terapist: 1 } },
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
      strengths: ["Planları gerçeğe dönüştürüyorsun", "Güvenilir ve düzenlisin", "Grubu bir arada tutan kişisin"],
      watchOut: ["Her şeyi üstlenmek seni yorabilir", "Planlar bozulduğunda bunu kişisel algılama", "Kontrolü bırakmak bazen en güzel anları yaratır"],
      bestMatch: "kaos-ajani",
      giftLink: { href: "/hediye/arkadasa-hediye", label: "Gruptaki herkes için arkadaş hediyeleri" },
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
        "\"Hadi şimdi gidelim\" diyen, sürprizi yanlışlıkla ağzından kaçıran, sıradan bir akşamı unutulmaz bir maceraya dönüştüren kişi sensin. Sen olmadığında buluşmalarda hep bir şey eksik kalıyor.",
        "Enerjin bulaşıcı ve insanlar seninle kendilerini daha özgür hissediyor. Grubun anlatmaktan hiç bıkmadığı hikâyelerin çoğunda başrol sende.",
        "Kaosun güzel bir tarafı var ama bazen birinin planını ya da sınırını aşabiliyor. Ortamı okumayı bilen bir kaos ajanı, grubun en sevilen kişisi olur.",
      ],
      strengths: ["Hiçbir anı sıradan bırakmıyorsun", "Spontan ve cesursun", "Gergin ortamları bir anda yumuşatabiliyorsun"],
      watchOut: ["Herkes her gün maceraya hazır değil", "Ciddi anlarda espri yapmak birini kırabilir", "Planları bozmak organizatörü yorabilir"],
      bestMatch: "organizator",
      giftLink: { href: "/hediye?kime=arkadas&ilgi=oyun#bulucu", label: "Grup geceleri için kutu oyunları" },
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
