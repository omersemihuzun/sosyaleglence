import type { Test } from "@/lib/types";

export const guvenSorunu: Test = {
  slug: "guven-sorunu-testi",
  title: "İlişkide Güven Sorunun Var mı?",
  summary:
    "Son görülmeye mi bakarsın, kafanda senaryo mu yazarsın, yoksa gizlice sınav mı yaparsın? Güven tarzını bul.",
  intro:
    "Güven sorunu herkeste aynı görünmüyor. Kimi kanıt toplar, kimi kafasında senaryo kurar, kimi kalbini yarı kapalı tutar, kimi de karşısındakini sessizce sınar. 12 gündelik senaryoda ilk içgüdünü seç; doğru ya da yanlış cevap yok.",
  emoji: "🔐",
  color: "#1D4ED8",
  category: "ilişki",
  metaDescription:
    "Güven sorunu testi: 12 gerçekçi ilişki senaryosuyla kontrol, kaygı, duygusal mesafe ve sınama eğilimini ölç. Güven tarzını öğren, sevgilinle karşılaştır.",
  headline: {
    label: "Güven sorunu seviyen",
    weights: { kontrol: 1, kaygi: 1, mesafe: 1, sinama: 1 },
  },
  dimensions: [
    { id: "rahat", label: "Rahat güven", low: "İçin kolay rahatlamaz", high: "Varsayılanın güvenmek" },
    { id: "kontrol", label: "Kontrol", low: "İz sürmezsin", high: "Kanıt toplarsın" },
    { id: "kaygi", label: "Senaryo kurma", low: "Kafanda büyütmezsin", high: "Her sessizlik bir hikâye" },
    { id: "mesafe", label: "Duygusal mesafe", low: "İçini açarsın", high: "Kalbin hep yarı kapalı" },
    { id: "sinama", label: "Sınama", low: "Test etmezsin", high: "Güveni sınarsın" },
  ],
  questions: [
    {
      text: 'Sevgilin "Bu akşam iş yemeği var, geç dönerim" dedi. Saat 23.30 oldu, ses yok.',
      options: [
        {
          text: "Uzamıştır. Ben yatarım, sabah anlatır nasılsa; şimdiden dert etmem.",
          scores: { rahat: 3, mesafe: 2 },
        },
        { text: '"Eve varınca haber ver" yazar, konumuna da bir göz atarım.', scores: { kontrol: 3, kaygi: 2 } },
        { text: "Uyuyamam. Kaza mı oldu, başka biri mi var, aklım her yere gider.", scores: { kaygi: 3, kontrol: 2 } },
        { text: "Ben de kendi akşamıma bakarım. Herkesin hayatı kendine, sormam.", scores: { mesafe: 3, rahat: 2 } },
      ],
    },
    {
      text: "Yan yana otururken sevgilinin telefonuna bildirim geldi, o da hemen ekranı kapattı.",
      options: [
        { text: "Herkesin bir özel alanı var. Fark ederim ama üstünde durmam.", scores: { rahat: 3, mesafe: 2 } },
        { text: 'Hafifçe "Kimmiş o?" diye sorar, cevap verirken yüzüne bakarım.', scores: { kontrol: 3, sinama: 2 } },
        { text: "Bir şey demem ama o an akşam boyunca aklımın bir köşesinde döner.", scores: { kaygi: 3, mesafe: 2 } },
        {
          text: "Ben de telefonumu ters çeviririm. Bakalım aynısı ona nasıl gelecek.",
          scores: { sinama: 3, mesafe: 2 },
        },
      ],
    },
    {
      text: "Sevgilinin Instagram'da yeni takip ettiği biri var: çok çekici bir yabancı.",
      options: [
        {
          text: "Profiline, ortak takipçilerine bakarım. Kim olduğunu bilmek isterim.",
          scores: { kontrol: 3, kaygi: 2 },
        },
        { text: "Takip takiptir. Bunu dert etmek bana kendini boşuna yormak gibi gelir.", scores: { rahat: 3 } },
        { text: "Bir şey demem ama ben de biraz geri çekilir, daha az paylaşırım.", scores: { mesafe: 3, kaygi: 2 } },
        { text: "Ben de birini takip eder, fark edecek mi diye beklerim.", scores: { sinama: 3, kontrol: 2 } },
      ],
    },
    {
      text: 'Sevgilin ilk kez "Seni seviyorum" dedi. İçinden geçen ilk şey ne olur?',
      options: [
        { text: "Hissediyorsam ben de söylerim. Ne zaman söylendiğine pek kafa yormam.", scores: { rahat: 3 } },
        {
          text: 'Çok mutlu olurum, sonra "Ya bir gün söylemezse?" diye düşünmeden edemem.',
          scores: { kaygi: 3, rahat: 2 },
        },
        {
          text: "Hoşuma gider ama hemen karşılık vermem. Kelimeler zamanla ağırlık kazanır.",
          scores: { mesafe: 3, sinama: 2 },
        },
        { text: 'Şakayla karışık "Göreceğiz" derim. Aslında biraz da ciddiyimdir.', scores: { sinama: 3, mesafe: 2 } },
      ],
    },
    {
      text: "Sen gecikince en yakın arkadaşınla sevgilin bir saat baş başa sohbet etmiş. Çok iyi anlaşmışlar.",
      options: [
        {
          text: "Ne konuştuklarını ikisine ayrı ayrı sorarım, anlattıkları tutuyor mu bakarım.",
          scores: { kontrol: 3, sinama: 2 },
        },
        { text: "Sevinirim. İki sevdiğim insanın anlaşması benim işimi kolaylaştırır.", scores: { rahat: 3 } },
        {
          text: '"Ya birbirlerinden hoşlanırlarsa?" düşüncesi bir süre aklıma yapışır.',
          scores: { kaygi: 3, kontrol: 2 },
        },
        {
          text: "Bir dahaki sefere yine baş başa bırakır, tepkilerini sessizce gözlerim.",
          scores: { sinama: 3, kontrol: 2 },
        },
      ],
    },
    {
      text: 'Sevgilin geçmişte bir kez küçük bir yalan söylemişti: "Evdeyim" demiş, aslında arkadaşlarıyla dışarıdaymış.',
      options: [
        { text: "Konuştuk, özür diledi. Aynı konuyu tekrar açmak bana adil gelmez.", scores: { rahat: 3 } },
        { text: "O günden beri anlattıklarının arada bir sağlamasını yaparım.", scores: { kontrol: 3, kaygi: 2 } },
        { text: 'Her "Evdeyim" dediğinde o gün kısa bir an aklıma gelir.', scores: { kaygi: 3, mesafe: 2 } },
        { text: "Affettim ama o günden beri ona her şeyimi anlatmıyorum.", scores: { mesafe: 3, sinama: 2 } },
      ],
    },
    {
      text: 'Sevgilin "Saklayacak bir şeyim yok" diyerek telefon şifresini sana söylemek istedi.',
      options: [
        { text: "Gerek yok derim. Şifreyle gelen güven bana biraz yapay geliyor.", scores: { rahat: 3, mesafe: 2 } },
        { text: "Alırım. Belki hiç kullanmam ama bilmek içimi rahatlatır.", scores: { kontrol: 3, kaygi: 2 } },
        { text: 'Alırım ama yine içim rahatlamaz: "Ya ikinci bir hesabı varsa?"', scores: { kaygi: 3, kontrol: 2 } },
        { text: '"Benimkini istemeyecek misin?" diye sorar, tepkisine bakarım.', scores: { sinama: 3, kontrol: 2 } },
      ],
    },
    {
      text: 'Arkadaş grubunda biri "Sevgilini dün Kadıköy\'de gördüm, yanında biri vardı" dedi.',
      options: [
        {
          text: "Arkadaşıdır muhtemelen. Akşam aklıma gelirse sorarım, gelmezse de olur.",
          scores: { rahat: 3, mesafe: 2 },
        },
        {
          text: "Dün nerede olduğunu söylediğini hatırlar, story'lerine bir bakarım.",
          scores: { kontrol: 3, kaygi: 2 },
        },
        { text: "Hiçbir şey söylemem. Kendisi bahsedecek mi diye beklerim.", scores: { sinama: 3, mesafe: 2 } },
        {
          text: "Sormam. Birine bu kadar bağlanmamam gerektiğini kendime hatırlatırım.",
          scores: { mesafe: 3, kaygi: 2 },
        },
      ],
    },
    {
      text: 'Arkadaşın sana bir sırrını anlattı ve "Kimseye söyleme" dedi. Sen de ona kendi sırrını anlatır mısın?',
      options: [
        { text: "Anlatırım. Biri bana açıldıysa ben de açılırım, sonrasını düşünmem.", scores: { rahat: 3 } },
        {
          text: 'Anlatırım ama sonra "Ya başkasına söylerse?" diye bir süre düşünürüm.',
          scores: { kaygi: 3, rahat: 2 },
        },
        { text: "Dinlerim. Kendi sırlarımı kimseyle paylaşmayı pek sevmem.", scores: { mesafe: 3 } },
        { text: "Önce küçük bir şey anlatır, bir yere yayılıyor mu diye bakarım.", scores: { sinama: 3, kontrol: 2 } },
      ],
    },
    {
      text: 'Sevgilin mesajına üç saattir dönmedi ama WhatsApp\'ta "çevrimiçi" görünüyor.',
      options: [
        {
          text: "Ne zaman çevrimiçi olduğuna bir süre dikkat ederim. Bir düzen var mı?",
          scores: { kontrol: 3, kaygi: 2 },
        },
        { text: '"Ya artık eskisi kadar ilgilenmiyorsa?" diye içim içimi yer.', scores: { kaygi: 3 } },
        {
          text: "Ben de mesajlarına geç dönmeye başlarım. Kimse kimseye mecbur değil.",
          scores: { mesafe: 3, sinama: 2 },
        },
        {
          text: '"Meşgulsün galiba, rahatsız etmeyeyim" yazıp ne cevap vereceğine bakarım.',
          scores: { sinama: 3, kaygi: 2 },
        },
      ],
    },
    {
      text: 'İlişkinizin ikinci ayı. Sevgilin "Seni ailemle tanıştırmak istiyorum" dedi.',
      options: [
        { text: "Sevinirim, hemen evet derim. Erken mi diye düşünmek aklıma bile gelmez.", scores: { rahat: 3 } },
        { text: "Önce ailesinin, kardeşlerinin sosyal medyasına bir göz atarım.", scores: { kontrol: 3, kaygi: 2 } },
        {
          text: '"Ya beni beğenmezlerse, ya sonra ayrılırsak?" diye düşünmeden edemem.',
          scores: { kaygi: 3, mesafe: 2 },
        },
        { text: "Biraz erken. Hayatına bu kadar girmeden önce emin olmak isterim.", scores: { mesafe: 3, sinama: 2 } },
      ],
    },
    {
      text: 'Bir tartışmada sevgilin "Sen bana hiç güvenmiyorsun" dedi. İçinden ne geçer?',
      options: [
        {
          text: "Şaşırırım. O kadar güveniyorum ki hiç sorgulamıyorum; belki onu yoran bu.",
          scores: { rahat: 3, mesafe: 2 },
        },
        { text: '"Güvenmemi gerektirecek bir şey yapma o zaman" derim.', scores: { kontrol: 3, sinama: 2 } },
        { text: 'Haklı mı diye düşünürüm, sonra "Beni bırakacak mı?" korkusu başlar.', scores: { kaygi: 3 } },
        { text: '"Güven kazanılır" der, bir süre daha onu gözlemeye devam ederim.', scores: { sinama: 3, kontrol: 2 } },
      ],
    },
  ],
  results: [
    {
      id: "acik-kapi",
      name: "Açık Kapı",
      emoji: "🚪",
      tagline: "Güvenmek senin varsayılan ayarın. Aksini görmeden şüphelenmezsin.",
      profile: { rahat: 80, kontrol: 10, kaygi: 15, mesafe: 15, sinama: 10 },
      color: "#047857",
      description: [
        'Sevgilinin telefonu ters dursa da, mesajın geç dönse de, Kadıköy\'de biriyle görülse de ilk düşüncen "Bir açıklaması vardır" oluyor. Güveni karşı tarafın kazanmasını beklemiyorsun; baştan veriyorsun ve aksini görmedikçe geri almıyorsun.',
        "Bu, ilişkide büyük bir rahatlık yaratıyor. Partnerin yanında kendini sorguda hissetmiyor, sen de enerjini son görülme takibine harcamıyorsun. Bir sorun olduğunda da kafanda büyütmek yerine soruyorsun. Bu açıklık, karşındakinin de sana açık olmasını kolaylaştırıyor.",
        "Tek dikkat etmen gereken şey, rahatlığın gerçekten önemli işaretleri de görmezden gelmeye dönüşmemesi. Güvenmek, sezgilerini susturmak demek değil. Bir şey içine tekrar tekrar takılıyorsa, bunu kuruntu diye hemen bir kenara atma.",
        'Kısacası, güven senin için bir sınav değil bir başlangıç noktası. Bu yaklaşım çoğu ilişkiyi büyütür. Sadece arada bir kendine şunu sor: "Gerçekten içim rahat mı, yoksa sormaya mı çekiniyorum?" Cevap ilkiyse, harika bir yerdesin.',
      ],
      strengths: [
        "Partnerine nefes alacak alan bırakıyorsun",
        "Krizleri kafanda büyütmüyorsun",
        "Merak ettiğinde iz sürmek yerine soruyorsun",
      ],
      watchOut: [
        "Gerçek uyarı işaretlerini de kuruntu diye geçiştirebilirsin",
        "Rahatlığın bazen ilgisizlik gibi algılanabilir",
      ],
      bestMatch: "acik-kapi",
    },
    {
      id: "kanit-toplayici",
      name: "Kanıt Toplayıcı",
      emoji: "🔍",
      tagline: "Güvenirsin ama önce dosyayı incelersin. Son görülme, konum, yeni takipler...",
      profile: { rahat: 15, kontrol: 80, kaygi: 30, mesafe: 15, sinama: 25 },
      color: "#334155",
      description: [
        "İçinde bir şüphe kıpırdadığında, onu sormak yerine kendin araştırıyorsun. Son görülme, konum, Instagram'daki yeni takipler, ortak arkadaşların story'leri... Her biri dosyana eklenen küçük birer kanıt. Emin olmadan rahatlayamıyorsun.",
        "Bunu genelde kötü niyetten değil, belirsizliğe dayanamadığın için yapıyorsun. Sorup kırıcı bir cevap almaktansa gerçeği kendin öğrenmek daha güvenli geliyor. Belki geçmişte söylenenlerle gerçeklerin uyuşmadığı bir deneyim yaşadın ve bu seni dikkatli yaptı.",
        "Sorun şu ki kontrol etmek kısa süreli bir rahatlama veriyor ama güveni büyütmüyor. Bugün bir şey bulamasan bile yarın yeniden bakma ihtiyacı doğuyor. Partnerin de fark ettiğinde, kendini sürekli denetlenen biri gibi hissedebiliyor.",
        'Bir sonraki sefer telefona uzanmadan önce şunu dene: Seni neyin rahatsız ettiğini doğrudan sor. "Bu beni biraz düşündürdü, konuşabilir miyiz?" Cevap seni rahatlatmazsa, o zaman bile kanıt toplamak yerine bu hissi konuşmak, ilişkinizi çok daha sağlam bir zemine taşır.',
      ],
      strengths: [
        "Detayları kaçırmayan dikkatli bir gözlemcisin",
        "Kendini korumayı biliyorsun",
        "İlişkine önem veriyorsun ve gözünü kapatmıyorsun",
      ],
      watchOut: [
        "Kontrol etmek kaygıyı bir anlığına dindirir ama besler",
        "Partnerinin mahremiyeti zedelenebilir",
        "Bulduklarını sormadan yorumlamak yanlış sonuçlara götürebilir",
      ],
      bestMatch: "acik-kapi",
    },
    {
      id: "gece-yarisi-senaristi",
      name: "Gece Yarısı Senaristi",
      emoji: "🌙",
      tagline: "Cevapsız kalan her mesaj, kafanda yeni bir bölümün ilk sahnesi oluyor.",
      profile: { rahat: 15, kontrol: 25, kaygi: 80, mesafe: 15, sinama: 15 },
      color: "#3730A3",
      description: [
        'Sevgilin üç saat cevap vermediğinde kafanda bir dizi başlıyor: "Bana mı kızdı?", "Sıkıldı mı?", "Başka biri mi var?" Gün içinde küçük bir sessizlik, gece yatağa girdiğinde büyük bir hikâyeye dönüşebiliyor. Senaryoların genelde kendine karşı da çok acımasız.',
        "Bu, karşındakine güvenmediğin için değil, kaybetmekten korktuğun için oluyor. İlişkine çok değer veriyorsun ve değer verdiğin şeyin elinden kayıp gitmesi fikri seni huzursuz ediyor. Aslında bu kadar düşünmen, ne kadar bağlı olduğunun da bir işareti.",
        'Ama kafandaki senaryolar sana gerçek kadar acı veriyor. Üstelik çoğu zaman gerçekleşmiyor bile. Sevgilin "Telefon şarjda kalmıştı" dediğinde sen o arada saatlerce yıpranmış oluyorsun. Bu döngü zamanla hem seni hem ilişkini yorabiliyor.',
        'Kendine küçük bir alışkanlık edin: Bir senaryo başladığında "Bunun kanıtı ne?" diye sor. Bir de ihtiyacını açıkça söylemeyi dene: "Uzun süre haber alamayınca kafam karışıyor, müsait olunca kısa bir mesaj atar mısın?" Bu bir zaaf değil, sağlıklı bir rica.',
      ],
      strengths: ["İlişkine derinden bağlısın", "Duygusal ayrıntılara karşı çok duyarlısın", "Empati kurmakta iyisin"],
      watchOut: [
        "Kafandaki senaryolar seni gerçekmiş gibi yorabilir",
        "Küçük sessizlikleri büyük ret olarak okuyabilirsin",
        "İhtiyacını söylemek yerine içinde büyütebilirsin",
      ],
      bestMatch: "acik-kapi",
    },
    {
      id: "zirhli-kalp",
      name: "Zırhlı Kalp",
      emoji: "🛡️",
      tagline: "Seversin ama kalbinin bir köşesini her zaman kilitli tutarsın. Ne olur ne olmaz.",
      profile: { rahat: 15, kontrol: 15, kaygi: 20, mesafe: 80, sinama: 25 },
      color: "#57534E",
      description: [
        "Güven sorununu iz sürerek ya da senaryo yazarak değil, mesafe koyarak yaşıyorsun. Bir şey canını sıktığında sormuyor, sadece biraz geri çekiliyorsun. Sırlarını kendine saklıyor, ilişkiye tamamen kapılmamaya özen gösteriyorsun.",
        'Bu zırh büyük ihtimalle bir zamanlar işine yaradı. Belki fazla açıldığın biri seni kırdı ya da güvendiğin bir yerden hayal kırıklığı geldi. O günden beri "Kendimi korursam incinmem" düşüncesi sana sessizce eşlik ediyor. Bu çok anlaşılır bir şey.',
        'Ama zırh iki yönlü çalışıyor: Acıyı dışarıda tutarken yakınlığı da dışarıda tutuyor. Partnerin seni tanımak için çabaladığında karşısında yarı kapalı bir kapı buluyor. Bir süre sonra o da kendini geri çekebiliyor ve bu da senin "Bak işte, haklıymışım" düşünceni doğruluyor gibi görünüyor.',
        "Zırhını bir anda çıkarmak zorunda değilsin. Küçük bir parçasından başla: Bugün seni gerçekten düşündüren bir şeyi, küçük de olsa paylaş. Karşı tarafın buna nasıl davrandığını gör. Güven çoğu zaman büyük kararlarla değil, böyle küçük ve tekrarlanan anlarla inşa edilir.",
      ],
      strengths: [
        "Kendini korumayı biliyorsun",
        "Kriz anlarında sakin ve ölçülüsün",
        "Aceleyle bağlanıp kendini kaybetmiyorsun",
      ],
      watchOut: [
        "Mesafen partnerine ilgisizlik gibi gelebilir",
        "Kendini açmadığın için gerçek yakınlık gecikebilir",
        "Sorun olduğunda konuşmak yerine geri çekilme eğilimin var",
      ],
      bestMatch: "acik-kapi",
    },
    {
      id: "sinav-hocasi",
      name: "Gizli Sınav Hocası",
      emoji: "📝",
      tagline: "Sorular sormazsın, sınavlar hazırlarsın. Üstelik karşındaki sınavda olduğunu bilmez.",
      profile: { rahat: 15, kontrol: 30, kaygi: 20, mesafe: 25, sinama: 80 },
      color: "#B45309",
      description: [
        'Güvenini doğrudan sormak yerine küçük testlerle ölçüyorsun. Bilerek bir şey söylemiyor, kendisi bahsedecek mi diye bekliyorsun. "Meşgulsün galiba, rahatsız etmeyeyim" yazıp vereceği cevaba bakıyorsun. Bazen de ondan aynı tepkiyi alıp almayacağını görmek için onun yaptığını tekrarlıyorsun.',
        'Bunun altında genelde şu istek var: "Sevildiğimi, önemsendiğimi bana söylemeden göstersin." Doğrudan sormak, cevabı biraz değersiz kılıyormuş gibi geliyor. Kendiliğinden gelen ilgi, istenerek gelenden daha gerçek hissettiriyor.',
        "Zorlayıcı yanı şu: Karşındaki kişi bir sınavda olduğunu bilmiyor ve kuralları da bilmiyor. Geçemediğinde neyi yanlış yaptığını anlamıyor, geçtiğinde ise sınav bitmiyor çünkü bir sonraki hazırlanıyor. Bu da ikiniz için de yorucu bir döngüye dönüşebiliyor.",
        'Bir sonraki sınavı hazırlamadan önce, ondan beklediğin şeyi açıkça söylemeyi dene: "Bunu bana kendin anlatsan çok hoşuma giderdi." İstediğin şeyi söylemek onu değersiz kılmaz. Aksine, karşındakine seni mutlu etmenin yolunu gösterir ve güvenin çok daha hızlı büyür.',
      ],
      strengths: [
        "İnsanların davranışlarını iyi gözlemliyorsun",
        "Sözden çok tutarlılığa önem veriyorsun",
        "Değer görmeyi hak ettiğini biliyorsun",
      ],
      watchOut: [
        "Gizli sınavlar karşı tarafı haksız yere başarısız bırakabilir",
        "Beklentilerini söylemediğinde hayal kırıklığı kaçınılmaz olabilir",
        "Sınama döngüsü güveni büyütmek yerine yıpratabilir",
      ],
      bestMatch: "acik-kapi",
    },
  ],
};
