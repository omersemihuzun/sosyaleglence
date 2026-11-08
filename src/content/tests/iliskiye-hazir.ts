import type { Test } from "@/lib/types";

export const iliskiyeHazir: Test = {
  slug: "iliskiye-hazir-misin-testi",
  title: "Yeni Bir İlişkiye Hazır mısın?",
  summary: "Kalbin yeni birine açık mı, yoksa hâlâ eski bir sayfada mı? Belki de bekârlığın tadını çıkarıyorsundur.",
  intro:
    "Hazır olmak sadece \"biriyle tanışmak istiyorum\" demek değil. Geçmişin, temkinin, yalnızlıkla ilişkin ve kendi düzenine olan bağlılığın da işin içinde. 12 gerçekçi senaryoda sana en yakın tepkiyi seç; doğru ya da yanlış cevap yok.",
  emoji: "🌱",
  color: "#BE185D",
  category: "ilişki",
  metaDescription:
    "Yeni bir ilişkiye hazır mısın testi: 12 gerçekçi senaryoyla kalbinin yeniye açık mı, geçmişte mi, temkinli mi olduğunu öğren. Sonucunu arkadaşınla paylaş.",
  dimensions: [
    { id: "acilik", label: "Yeniye açıklık", low: "Kapılar şimdilik kapalı", high: "Kalbin yeniye açık" },
    { id: "gecmis", label: "Geçmişin gölgesi", low: "Sayfa kapandı", high: "Eski hikâye hâlâ aklında" },
    { id: "ozgurluk", label: "Bekârlık keyfi", low: "Paylaşmaya alışkınsın", high: "Kendi düzenine âşıksın" },
    { id: "temkin", label: "Temkin duvarı", low: "Kolay güvenirsin", high: "Duvarların yüksek" },
    { id: "acele", label: "Boşluk doldurma", low: "Yalnızlık seni korkutmaz", high: "Biri olsun yeter" },
  ],
  questions: [
    {
      text: "Arkadaşın \"Seni biriyle tanıştırmak istiyorum, bence çok uyumlusunuz\" dedi. Bu hafta zaten yoğunsun.",
      options: [
        { text: "Bir akşamı esnetirim. Uyumlu dediyse en azından bir kahveye değer.", scores: { acilik: 3, acele: 2 } },
        { text: "Önce biraz anlatsın: ne iş yapar, neden ayrılmış, nasıl biridir?", scores: { temkin: 3, acilik: 2 } },
        { text: "Bu hafta olmaz. Kimseye yarım yamalak zaman ayırmak istemem.", scores: { ozgurluk: 3, temkin: 2 } },
        { text: "\"Bir önceki de uyumlu görünüyordu\" diye geçer içimden, yine de düşünürüm.", scores: { gecmis: 3, acilik: 2 } },
      ],
    },
    {
      text: "Cumartesi akşamı evdesin, hiçbir planın yok. Story'lerde herkes bir yerlerde.",
      options: [
        { text: "Kendime güzel bir akşam yaparım. Bunu bir süredir gerçekten seviyorum.", scores: { ozgurluk: 3 } },
        { text: "Bir uygulamaya girerim. Sohbet açılırsa ne âlâ, açılmazsa da dert değil.", scores: { acilik: 2, acele: 2 } },
        { text: "İçimde bir boşluk hissederim ve aklıma gelen birine \"Ne yapıyorsun?\" yazarım.", scores: { acele: 3, gecmis: 2 } },
        { text: "Eski bir fotoğrafa takılırım. O akşamlar şimdikilerden daha dolu gelir.", scores: { gecmis: 3, acele: 2 } },
      ],
    },
    {
      text: "Ex'in yeni sevgilisiyle bir fotoğraf paylaşmış.",
      options: [
        { text: "Profiline bir göz atarım. Merak işte, bunu kendime çok dert etmem.", scores: { gecmis: 3, ozgurluk: 2 } },
        { text: "İçim cız eder ama \"İyi ki o sayfa kapandı\" der, akşamki buluşmama giderim.", scores: { acilik: 3, acele: 2 } },
        { text: "Bir kez daha anlarım: kimseye kendimi bu kadar kolay bırakmamalıyım.", scores: { temkin: 3, gecmis: 2 } },
        { text: "Benim de hayatımda biri olsun isterim. O hafta flört uygulamasını açarım.", scores: { acele: 3, gecmis: 2 } },
      ],
    },
    {
      text: "Birkaç kez görüştüğün biri \"Bu hafta sonu ailemle kahvaltıya gelir misin?\" diye sordu.",
      options: [
        { text: "Gelirim. Biraz erken ama insanı ailesinin yanında görmek çok şey anlatır.", scores: { acilik: 3, acele: 2 } },
        { text: "Kibarca \"Biraz daha tanışalım, sonra\" derim. Erken adımlar beni tedirgin eder.", scores: { temkin: 3, ozgurluk: 2 } },
        { text: "Pazar sabahım benim için kutsal. Teklifi başka bir zamana kaydırırım.", scores: { ozgurluk: 3, temkin: 2 } },
        { text: "Hemen kabul ederim. Ailesi beni severse ilişki de kendiliğinden oturur.", scores: { acele: 3, acilik: 2 } },
      ],
    },
    {
      text: "Yeni tanıştığın biri gece yarısı \"Şu an seni düşünüyordum\" yazdı.",
      options: [
        { text: "Ben de onu düşünüyordum, hemen yazarım. Belki de aradığım kişi odur.", scores: { acele: 3, acilik: 2 } },
        { text: "Sabah cevap veririm. Gece yazılanlar gece duygusudur, sabah netleşir.", scores: { temkin: 3, ozgurluk: 2 } },
        { text: "Gülümserim, sonra bu cümleyi en son kimden duyduğumu hatırlarım.", scores: { gecmis: 3, temkin: 2 } },
        { text: "Telefonu bırakıp uyurum. Gece mesajlaşma ritmi bana hiç uymuyor.", scores: { ozgurluk: 3 } },
      ],
    },
    {
      text: "Bir arkadaşın \"Hâlâ ex'ini mi düşünüyorsun?\" diye takıldı.",
      options: [
        { text: "Bazen. Unutmak değil, yerine koymak zaman alıyor; acele etmiyorum.", scores: { gecmis: 3, acilik: 2 } },
        { text: "Düşünmüyorum ama o ilişkiden sonra kimseyi kolay kolay yakınıma almıyorum.", scores: { temkin: 3, gecmis: 2 } },
        { text: "Kafam iş, spor ve kendi planlarımla dolu. Ona yer kalmadı.", scores: { ozgurluk: 3 } },
        { text: "Hayır, ama yeni biriyle tanışırsam her şeyin daha çabuk geçeceğine inanıyorum.", scores: { acele: 3, gecmis: 2 } },
      ],
    },
    {
      text: "Doğum günün yaklaşıyor. Nasıl geçmesini istersin?",
      options: [
        { text: "Yanımda biri olsun istiyorum. Olmayacaksa bu bile içimi biraz burkuyor.", scores: { acele: 3, gecmis: 2 } },
        { text: "Kendime güzel bir hediye alır, günü kimseye uymadan istediğim gibi geçiririm.", scores: { ozgurluk: 3 } },
        { text: "Arkadaşlarla kalabalık kutlarım. Kim gelir, kim kiminle tanışır, bakarız.", scores: { acilik: 3, ozgurluk: 2 } },
        { text: "Geçen yılki doğum günüm aklıma gelir; o gün kimin yanımda olduğunu düşünürüm.", scores: { gecmis: 3, acele: 2 } },
      ],
    },
    {
      text: "Bir flört uygulamasında profilinin \"Hakkımda\" kısmını dolduruyorsun.",
      options: [
        { text: "İki samimi cümle ve en sevdiğim fotoğraflar. Gerisi tanışınca konuşulur.", scores: { acilik: 3, ozgurluk: 2 } },
        { text: "\"Ciddi ilişki arıyorum, birbirimize vakit kaybettirmeyelim\" diye açıkça yazarım.", scores: { acele: 2, temkin: 2 } },
        { text: "Az bilgi veririm. Kim olduğumu yazıyla değil, zamanla görmesini isterim.", scores: { temkin: 3, ozgurluk: 2 } },
        { text: "Yazarken eski sevgilimin beni nasıl anlattığı aklıma gelir, onu kullanırım.", scores: { gecmis: 3, acilik: 2 } },
      ],
    },
    {
      text: "Biri sana ciddi ilgi gösteriyor ama \"tam senin tipin\" değil.",
      options: [
        { text: "Bir kahve içmekten zarar gelmez. \"Tipim\" dediğim şey bugüne kadar işe yaramadı.", scores: { acilik: 3, gecmis: 2 } },
        { text: "İlgi görmek iyi geliyor. Zamanla ben de severim diye görüşmeye devam ederim.", scores: { acele: 3, acilik: 2 } },
        { text: "Şu an kendi hayatımı kurmakla meşgulüm, kimsenin vaktini almak istemem.", scores: { ozgurluk: 3, temkin: 2 } },
        { text: "Bu kadar ilgiyi neye borçlu olduğumu anlamadan bir adım atmam.", scores: { temkin: 3 } },
      ],
    },
    {
      text: "Görüştüğün kişi bir gün \"Sen hiç ciddi bir ilişki istemiyor gibisin\" dedi.",
      options: [
        { text: "Belki de haklı. Kendi düzenimden vazgeçmek düşündüğümden zor geliyor.", scores: { ozgurluk: 3, temkin: 2 } },
        { text: "\"İstiyorum!\" der, kaybetmemek için bu sefer daha çok çabalarım.", scores: { acele: 3, acilik: 2 } },
        { text: "İstiyorum ama güvenebileceğimi görmeden kendimi tam bırakamam.", scores: { temkin: 3, acilik: 2 } },
        { text: "Haklı olabilir. Eski ilişkimden sonra toparlandığımı söyleyemem.", scores: { gecmis: 3, temkin: 2 } },
      ],
    },
    {
      text: "Bir arkadaş akşamında herkes çift, bir tek sen yalnızsın.",
      options: [
        { text: "En rahat benim: istediğim saatte kalkarım, kimseye hesap vermem.", scores: { ozgurluk: 3 } },
        { text: "Bir an \"Keşke\" derim, sonra yan masadaki biriyle sohbete dalarım.", scores: { acilik: 3, acele: 2 } },
        { text: "Onlara bakınca eski ilişkimdeki güzel günler gözümün önüne gelir.", scores: { gecmis: 3, acele: 2 } },
        { text: "\"Bunların kaçı gerçekten mutlu?\" diye düşünür, hâlime şükrederim.", scores: { temkin: 3, ozgurluk: 2 } },
      ],
    },
    {
      text: "Yeni biriyle ikinci buluşmadasın. Telefonun titriyor: Ex'in yazmış, \"Nasılsın?\"",
      options: [
        { text: "Hemen bakarım, kalbim hızlanır. Buluşmanın gerisi biraz bulanık geçer.", scores: { gecmis: 3, acele: 2 } },
        { text: "Sessize alırım. Kim ne yazarsa yazsın, bu akşamı yeni biri için ayırdım.", scores: { acilik: 3, acele: 2 } },
        { text: "Bu buluşma iyi geçsin diye kendimi daha da veririm. Yalnız kalmak istemiyorum.", scores: { acele: 3, gecmis: 2 } },
        { text: "İkisi birden fazla geldi. Buluşmayı erken bitirip eve dönerim.", scores: { ozgurluk: 3, temkin: 2 } },
      ],
    },
  ],
  results: [
    {
      id: "kalbi-acik",
      name: "Kalbi Açık Yolcu",
      emoji: "🌱",
      tagline: "Geçmişini taşıyorsun ama sırtında değil, cebinde. Yeni bir hikâyeye hazırsın.",
      profile: { acilik: 80, gecmis: 15, ozgurluk: 20, temkin: 15, acele: 15 },
      color: "#15803D",
      description: [
        "Kalbin yeni birine yer açmaya hazır görünüyor. Eski ilişkini düşündüğünde canın yanmıyor ya da en azından o acı artık seni yönetmiyor. Biriyle tanışma fikri seni korkutmuyor, aksine biraz heyecanlandırıyor.",
        "Bunu \"Hemen biri olsun\" telaşından değil, merakla yapıyorsun. Bir kahve, bir yürüyüş, bir sohbet; hepsine açıksın ama her birinin bir ilişkiye dönüşmesi gerekmediğini de biliyorsun. Bu denge, yeni bir başlangıç için en sağlam zemin.",
        "Hazır olmak her şeyin kolay gideceği anlamına gelmiyor elbette. Yeni biriyle tanışırken eski alışkanlıklar ya da küçük kırgınlıklar yeniden yüzeye çıkabilir. Bu normal; önemli olan onları fark edip konuşabilmen.",
        "Bu dönemin tadını çıkar. İlk mesajların heyecanı, ilk buluşmanın gerginliği, \"Acaba?\" soruları... Hepsi hikâyenin parçası. Sadece kendine şunu hatırlat: Açık olmak, herkese kapıyı ardına kadar açmak demek değil. İçinden gelen \"Hayır\"ları da dinle.",
      ],
      strengths: ["Yeni insanlara merakla yaklaşıyorsun", "Geçmişin bugününü yönetmiyor", "Beklentilerin gerçekçi ve esnek"],
      watchOut: ["Heyecanla küçük uyarı işaretlerini atlayabilirsin", "Her tanışmanın ilişkiye dönüşmesi gerekmediğini unutma"],
      bestMatch: "kalbi-acik",
    },
    {
      id: "yarim-kalan-sayfa",
      name: "Yarım Kalan Sayfa",
      emoji: "📖",
      tagline: "Yeni bir kitaba başlamak istiyorsun ama aklın hâlâ bir önceki kitabın son sayfasında.",
      profile: { acilik: 15, gecmis: 80, ozgurluk: 15, temkin: 25, acele: 20 },
      color: "#9A3412",
      description: [
        "Eski ilişkin hâlâ hayatında bir yerde duruyor. Belki her gün değil ama bir şarkıda, bir story'de, bir doğum gününde aklına geliveriyor. Yeni biriyle tanıştığında da onu farkında olmadan eskisiyle kıyaslıyorsun.",
        "Bunda utanılacak hiçbir şey yok. Önemli bir ilişki bittiğinde, onun yasını tutmak zaman alır. Bazen ilişki biter ama hikâye kafamızda devam eder: \"Ya şöyle olsaydı?\", \"Acaba o da düşünüyor mu?\" Bu sorular kapanmadan yeni bir sayfa açmak zor.",
        "Bu dönemde yeni biriyle başlamak mümkün ama karşındaki kişi, farkında olmadan bir gölgeyle yarışmak zorunda kalabilir. Sen de kendine haksızlık edersin, çünkü yeni insanı kendi hâliyle tanımak yerine eskisinin aynasında görürsün.",
        "Kendine biraz zaman ver. Eski mesajları her açışında ne hissettiğini fark et. Bazen bir arkadaşla dertleşmek, bazen sevdiğin ama ertelediğin bir şeye başlamak, bazen de o sohbeti arşive kaldırmak iyi gelir. Sayfa kendi zamanında kapanır; zorlamana gerek yok ama ona yardım edebilirsin.",
      ],
      strengths: ["Derin bağlar kurabiliyorsun", "Yaşadıklarına değer veriyorsun", "Duygularını hafife almıyorsun"],
      watchOut: ["Yeni insanları farkında olmadan eskisiyle kıyaslayabilirsin", "Eski mesajlara ve profillere dönmek iyileşmeyi uzatabilir", "Kapanmamış bir hikâyeyle yeni ilişkiye başlamak iki tarafı da yorabilir"],
      bestMatch: "kalbi-acik",
    },
    {
      id: "kendi-krallik",
      name: "Kendi Başına Krallık",
      emoji: "👑",
      tagline: "Kumanda sende, pazar sabahları senin, plan sende. Bu krallıktan kolay vazgeçilmez.",
      profile: { acilik: 20, gecmis: 15, ozgurluk: 80, temkin: 25, acele: 10 },
      color: "#854D0E",
      description: [
        "Şu an hayatın tam istediğin gibi işliyor: Kimseye hesap vermeden plan yapıyor, hafta sonlarını kendine göre geçiriyor, gece yarısı canın isterse sipariş veriyorsun. Bekârlık senin için bir bekleme odası değil, keyfini sürdüğün bir dönem.",
        "Bu çok değerli bir şey. Kendi başına mutlu olabilmek, ileride kuracağın her ilişkinin de sağlıklı olmasını sağlar. Çünkü biriyle birlikte olduğunda bunu yalnızlıktan kaçmak için değil, gerçekten istediğin için yapmış olursun.",
        "Dikkat etmen gereken tek şey şu: Rahatlık bazen bir duvara dönüşebilir. Yeni biri hayatına girmeye çalıştığında, düzenini koruma refleksiyle güzel bir ihtimali kaçırabilirsin. \"Şu an değil\" demek ile \"Hiçbir zaman\" demek arasındaki farkı zaman zaman kendine sor.",
        "İlişkiye hazır olup olmadığın sorusunun cevabı senin için belki \"Şu an istemiyorum\" ve bu tamamen geçerli bir cevap. Ama bir gün kapın çaldığında, krallığını tamamen terk etmeden de birini misafir edebileceğini unutma. İyi bir ilişki senin alanını elinden almaz, ona bir pencere açar.",
      ],
      strengths: ["Kendi başına mutlu olabiliyorsun", "Yalnızlıktan kaçmak için ilişkiye girmiyorsun", "Sınırlarını ve ihtiyaçlarını iyi biliyorsun"],
      watchOut: ["Rahat düzenini korumak için güzel fırsatları geri çevirebilirsin", "Karşı taraf mesafeni ilgisizlik olarak okuyabilir"],
      bestMatch: "kalbi-acik",
    },
    {
      id: "yuksek-duvarlar",
      name: "Yüksek Duvarlar",
      emoji: "🧱",
      tagline: "Kalbin kapalı değil, sadece kapıda ciddi bir güvenlik kontrolü var.",
      profile: { acilik: 15, gecmis: 30, ozgurluk: 20, temkin: 80, acele: 15 },
      color: "#475569",
      description: [
        "Yeni biriyle tanıştığında içinden bir ses \"Dikkatli ol\" diyor. Fazla ilgi şüpheli geliyor, hızlı ilerleyen her şey alarm veriyor. Biri sana \"Seni düşünüyordum\" yazdığında kalbin hızlanıyor ama aklın hemen \"Bunu kaç kişiye yazıyor?\" diye soruyor.",
        "Bu temkin büyük ihtimalle bir yerden öğrenildi. Belki daha önce çok çabuk güvendin ve bunun bedelini ödedin. Duvarlar o yüzden yükseldi ve seni gerçekten de korudu. Bunun için kendine kızmana gerek yok.",
        "Ama duvarlar sadece kötü olanı değil, iyi olanı da dışarıda tutabiliyor. Güven tamamen kanıtlanmadan kimseye açılmamak, karşındakinin de sana açılmasını zorlaştırıyor. Çünkü yakınlık genelde iki tarafın biraz risk almasıyla büyür.",
        "Duvarlarını bir anda yıkmana gerek yok. Kapıya küçük bir pencere aç: Bir sonraki tanışmada ufak bir kişisel şey paylaş ve karşındakinin buna nasıl davrandığına bak. Güven bir sınav değil, küçük adımlarla kurulan bir köprü. Sen de o köprüyü kendi hızında kurabilirsin.",
      ],
      strengths: ["Uyarı işaretlerini erken fark ediyorsun", "Kendini korumayı biliyorsun", "Aceleyle yanlış ilişkiye girmiyorsun"],
      watchOut: ["Aşırı temkin iyi insanları da uzak tutabilir", "Karşı tarafa güvenini kanıtlaması için sürekli sınav açılabilir", "Geçmişte yaşanan bir kırgınlık bugünkü tercihlerini yönetebilir"],
      bestMatch: "kalbi-acik",
    },
    {
      id: "aska-asik",
      name: "Aşka Âşık",
      emoji: "💘",
      tagline: "Bir ilişki istiyorsun, hem de çok. Bazen kimin olduğundan bile daha çok.",
      profile: { acilik: 30, gecmis: 20, ozgurluk: 10, temkin: 15, acele: 80 },
      color: "#BE123C",
      description: [
        "Sevgili olma, birinin hayatında önemli olma, birlikte story atma fikri seni gerçekten çekiyor. Yalnız geçen bir cumartesi akşamı ya da çiftlerle dolu bir masa içinde küçük bir boşluk hissi bırakıyor ve o boşluğu doldurmak istiyorsun.",
        "Bu son derece insani bir his. Hepimiz sevilmek, görülmek, bir yere ait olmak isteriz. Romantik olman, ilişkiye emek vermeye hazır olman da çok güzel özellikler. Biriyle birlikteyken gerçekten elinden gelenin en iyisini yapıyorsun.",
        "Ama yalnızlık hissi aceleyle birleşince, bazen kişiyi değil ilişkiyi seçmiş oluyoruz. \"Tipim değil ama yalnız kalmaktan iyidir\" diye başlayan hikâyeler bir süre sonra seni daha yalnız hissettirebilir. Bir de çok hızlı bağlandığında, küçük uyarı işaretlerini görmezden gelmek kolaylaşıyor.",
        "Kendine şu soruyu sor: \"Bu kişiyi mi istiyorum, yoksa birinin olmasını mı?\" Yalnız geçirdiğin zamanı biraz daha sevmeyi denemek, seni ilişkiden uzaklaştırmaz. Tam tersine, birini \"lazım olduğu için\" değil \"istediğin için\" seçtiğinde ilişkin çok daha sağlam olur.",
      ],
      strengths: ["Sevgiye ve emeğe hazırsın", "Romantiksin ve bunu saklamıyorsun", "İlişkiye girdiğinde gerçekten çabalıyorsun"],
      watchOut: ["Yalnızlıktan kaçmak için yanlış kişiye hızla bağlanabilirsin", "Uyarı işaretlerini görmezden gelme eğilimin olabilir", "Kendini ilişkiye uydururken ihtiyaçlarını unutabilirsin"],
      bestMatch: "kalbi-acik",
    },
  ],
};
