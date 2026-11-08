import type { Test } from "@/lib/types";

export const iliskiyeHazir: Test = {
  slug: "iliskiye-hazir-misin",
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
      text: "Arkadaşın \"Seni biriyle tanıştırmak istiyorum, çok tatlı biri\" dedi.",
      options: [
        { text: "Neden olmasın? Numaramı verebilirsin.", scores: { acilik: 3 } },
        { text: "İlk aklıma gelen, onun ex'ime benzeyip benzemediği oluyor.", scores: { gecmis: 3 } },
        { text: "Şu an kendi düzenim çok iyi, bozmak istemiyorum.", scores: { ozgurluk: 3 } },
        { text: "Önce fotoğrafını, işini, geçmişini sorarım. Sürprize yer yok.", scores: { temkin: 3 } },
      ],
    },
    {
      text: "Cumartesi akşamı evdesin, hiçbir planın yok. Instagram'da çiftlerin story'leri dönüp duruyor.",
      options: [
        { text: "Battaniye, dizi, sipariş. Daha ne olsun?", scores: { ozgurluk: 3 } },
        { text: "Biraz iç çekerim ama \"Zamanı gelince benim de olur\" derim.", scores: { acilik: 2 } },
        { text: "\"Eskiden biz de böyle story atardık\" deyip eski fotoğraflara dalarım.", scores: { gecmis: 3 } },
        { text: "Hemen bir uygulamaya girip kim varsa sağa kaydırmaya başlarım.", scores: { acele: 3 } },
      ],
    },
    {
      text: "Ex'in yeni sevgilisiyle bir fotoğraf paylaşmış.",
      options: [
        { text: "Yeni sevgilisinin profilini baştan sona incelerim.", scores: { gecmis: 3 } },
        { text: "Benim de hemen birini bulmam lazım diye düşünürüm.", scores: { acele: 3, gecmis: 1 } },
        { text: "İçim biraz cız eder ama mutlu olmasına sevinir, kendi yoluma bakarım.", scores: { acilik: 3 } },
        { text: "\"İşte ilişkiler hep böyle\" der, bir daha kimseye bu kadar açılmamaya karar veririm.", scores: { temkin: 3 } },
      ],
    },
    {
      text: "Birkaç kez görüştüğün biri \"Bu hafta sonu ailemle kahvaltıya gelir misin?\" diye sordu.",
      options: [
        { text: "Gelirim. Birini ailesinin yanında görmek iyi bir fikir verir.", scores: { acilik: 3 } },
        { text: "Çok hızlı gidiyoruz, bir bahane bulup ertelerim.", scores: { temkin: 2, ozgurluk: 1 } },
        { text: "Pazar sabahlarım bana ait, kahvaltıyı kendi başıma yapmayı severim.", scores: { ozgurluk: 3 } },
        { text: "Hemen \"Evet\" derim, ailesi beni sevsin diye en iyi hâlimi hazırlarım.", scores: { acele: 3 } },
      ],
    },
    {
      text: "Yeni tanıştığın biri gece yarısı \"Şu an seni düşünüyordum\" yazdı.",
      options: [
        { text: "Ne güzel! Ben de hemen içimi dökerim. Belki de o kişidir.", scores: { acele: 3 } },
        { text: "Kalbim hızlanır ama \"Bunu kaç kişiye yazıyor?\" diye düşünürüm.", scores: { temkin: 3 } },
        { text: "Aynı cümleyi bir zamanlar ex'im de yazardı, diye geçer aklımdan.", scores: { gecmis: 3 } },
        { text: "Sabah cevap veririm. Gece mesajlaşmaları bana göre değil.", scores: { ozgurluk: 3 } },
      ],
    },
    {
      text: "Bir arkadaşın \"Hâlâ ex'ini mi düşünüyorsun?\" diye takıldı.",
      options: [
        { text: "Biraz. Arada eski mesajlarımızı açıp okuduğum oluyor.", scores: { gecmis: 3 } },
        { text: "Hayır ama yaşadıklarımdan sonra kimseye kolay kolay güvenmiyorum.", scores: { temkin: 3, gecmis: 1 } },
        { text: "Kimseyi düşünmüyorum, kafam kendi planlarımla dolu.", scores: { ozgurluk: 3 } },
        { text: "Hayır. Artık yeni hikâyeleri merak ediyorum.", scores: { acilik: 3 } },
      ],
    },
    {
      text: "Doğum günün yaklaşıyor. Nasıl geçmesini istersin?",
      options: [
        { text: "Yanımda bir sevgili olsun istiyorum. Olmayacaksa bu bile beni biraz üzüyor.", scores: { acele: 3 } },
        { text: "Kendime güzel bir hediye alıp günü tam istediğim gibi geçiririm.", scores: { ozgurluk: 3 } },
        { text: "Arkadaşlarla kutlarım. Belki orada yeni biriyle tanışırım, kim bilir?", scores: { acilik: 3 } },
        { text: "Geçen yılki doğum günüm aklıma gelir. O zaman o yanımdaydı.", scores: { gecmis: 3 } },
      ],
    },
    {
      text: "Bir flört uygulamasında profilinin \"Hakkımda\" kısmını dolduruyorsun.",
      options: [
        { text: "Samimi bir iki cümle ve en sevdiğim fotoğraflar. Gerisini tanışınca konuşuruz.", scores: { acilik: 3 } },
        { text: "\"Ciddi ilişki arıyorum, oyun oynayan yazmasın\" diye net bir uyarı eklerim.", scores: { temkin: 2, acele: 1 } },
        { text: "Ne yazsam diye düşünürken ex'imin beni nasıl tarif ettiği aklıma gelir.", scores: { gecmis: 3 } },
        { text: "Olabildiğince çok kişiyle eşleşmek için her şeye açık görünürüm.", scores: { acele: 3 } },
      ],
    },
    {
      text: "Biri sana ciddi ilgi gösteriyor ama \"tam senin tipin\" değil.",
      options: [
        { text: "Bir kahve içmekten zarar gelmez. Tanımaya açığım.", scores: { acilik: 3 } },
        { text: "Tipim olmasa da yalnız kalmaktan iyidir.", scores: { acele: 3 } },
        { text: "İlgisi hoş ama şu an kimseye vaktimi ayırmak istemiyorum.", scores: { ozgurluk: 3 } },
        { text: "Neden bu kadar ilgili? Bir derdi mi var diye düşünürüm.", scores: { temkin: 3 } },
      ],
    },
    {
      text: "Görüştüğün kişi bir gün \"Sen hiç ciddi bir ilişki istemiyor gibisin\" dedi.",
      options: [
        { text: "Belki de haklı. Kendi düzenimi bozmak bana zor geliyor.", scores: { ozgurluk: 3 } },
        { text: "Hemen \"Hayır, istiyorum!\" der, kaybetmemek için daha çok çabalarım.", scores: { acele: 3 } },
        { text: "İstiyorum ama önce gerçekten güvenebileceğimi görmem lazım.", scores: { temkin: 3 } },
        { text: "Haklı olabilir. Eski ilişkimden sonra tam toparlanamadım.", scores: { gecmis: 3 } },
      ],
    },
    {
      text: "Bir arkadaş akşamında herkes çift, bir tek sen yalnızsın.",
      options: [
        { text: "En rahat kişi benim. Kimseye haber vermeden istediğim saatte kalkarım.", scores: { ozgurluk: 3 } },
        { text: "Bir an \"Keşke\" derim, sonra \"Sıram gelince o da olur\" diye gülerim.", scores: { acilik: 3 } },
        { text: "Onlara bakınca eski ilişkimdeki güzel günler aklıma gelir.", scores: { gecmis: 3 } },
        { text: "\"Bunların kaçı gerçekten mutlu?\" diye düşünürüm.", scores: { temkin: 3 } },
      ],
    },
    {
      text: "Yeni biriyle ikinci buluşmadasın. Telefonun titriyor: Ex'in yazmış, \"Nasılsın?\"",
      options: [
        { text: "Hemen bakarım, kalbim yerinden çıkar. Buluşmanın gerisi biraz bulanık geçer.", scores: { gecmis: 3 } },
        { text: "Görürüm ama sonra bakarım. Şu an karşımdaki kişiyle ilgileniyorum.", scores: { acilik: 3 } },
        { text: "Bu buluşma iyi geçsin diye kendimi daha da veririm. Yalnız kalmak istemiyorum.", scores: { acele: 3 } },
        { text: "Buluşmayı erkenden bitirip eve gider, tek başıma kafa dinlerim.", scores: { ozgurluk: 3 } },
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
