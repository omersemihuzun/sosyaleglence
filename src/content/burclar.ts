export type Element = "Ateş" | "Toprak" | "Hava" | "Su";
export type Nitelik = "Öncü" | "Sabit" | "Değişken";

export type Burc = {
  slug: string;
  ad: string;
  /** "Koç'un" gibi ilgi hâli */
  gen: string;
  /** "Koç'a" gibi yönelme hâli */
  dat: string;
  emoji: string;
  tarih: string;
  element: Element;
  nitelik: Nitelik;
  gezegen: string;
  renk: string;
  ozet: string;
  genel: [string, string];
  iliski: string;
  guclu: [string, string, string];
  zayif: [string, string, string];
  // Uyum metinlerini çifte özgü kurmak için kısa ifadeler
  /** 3. tekil fiil öbeği: "aşkta ..." */
  askta: string;
  /** 3. tekil fiil öbeği: "arkadaşlıkta ..." */
  arkadaslikta: string;
  /** İlişkiye kattığı şey (isim öbeği) */
  verir: string;
  /** İlişkiden beklediği şey (isim öbeği) */
  ister: string;
  /** Zorlandığı eğilim (isim öbeği) */
  zaaf: string;
};

/** Burç sırası: Koç'tan Balık'a. Uyum çiftlerinin kanonik sırası da budur. */
export const burclar: Burc[] = [
  {
    slug: "koc",
    ad: "Koç",
    gen: "Koç'un",
    dat: "Koç'a",
    emoji: "♈",
    tarih: "21 Mart – 19 Nisan",
    element: "Ateş",
    nitelik: "Öncü",
    gezegen: "Mars",
    renk: "#D7102F",
    ozet: "İlk adımı atan, sabırsız ama içten.",
    genel: [
      "Koç, zodyağın başlangıcıdır ve bunu her hâliyle hissettirir. Bir fikir aklına düştüğü anda harekete geçer, beklemek ona fiziksel olarak zor gelir. Rekabetten keyif alır, zorluklar onu yıldırmak yerine kamçılar.",
      "Duyguları hızlı yükselir ve hızlı söner. Kızdığında bunu saklamaz ama kin de tutmaz. Etrafındakiler onun doğrudanlığını bazen sert bulsa da, ne düşündüğünü hep bildikleri için ona güvenirler.",
    ],
    iliski:
      "Aşkta kovalamayı seven bir burçtur. İlgisini açıkça gösterir, sürprizleri ve spontane planları sever. Rutin ve belirsizlik onu sıkar; partnerinden enerji, dürüstlük ve biraz da meydan okuma bekler.",
    guclu: ["Cesur ve girişken", "Dürüst ve açık sözlü", "Kriz anında harekete geçen"],
    zayif: ["Sabırsız", "Düşünmeden konuşabilen", "Çabuk sıkılan"],
    askta: "hızlı ve tutkulu davranır",
    arkadaslikta: "her maceranın ilk gönüllüsüdür",
    verir: "cesaret ve heyecan",
    ister: "hareket ve açıklık",
    zaaf: "sabırsızlığı",
  },
  {
    slug: "boga",
    ad: "Boğa",
    gen: "Boğa'nın",
    dat: "Boğa'ya",
    emoji: "♉",
    tarih: "20 Nisan – 20 Mayıs",
    element: "Toprak",
    nitelik: "Sabit",
    gezegen: "Venüs",
    renk: "#2F7D6D",
    ozet: "Sadık, keyif ehli ve inatçı.",
    genel: [
      "Boğa, hayatın tadını çıkarmayı bilen burçtur. İyi yemek, rahat bir koltuk, güzel bir koku: duyularına hitap eden her şey onu mutlu eder. Güvenliği ve düzeni sever, sağlam temeller üzerine kurulmamış hiçbir şeye kolay kolay girmez.",
      "Kararlarını yavaş verir ama verdiği kararın arkasında durur. Bu sabır bazen inatla karışır; fikrini değiştirmek için ona zaman ve somut gerekçe gerekir. Sakin dış görünüşünün altında derin bir sadakat yatar.",
    ],
    iliski:
      "Aşkta acele etmez ama bir kez bağlandığında çok sadık bir partnerdir. Sevgisini dokunarak, ikram ederek, birlikte geçirilen keyifli zamanla gösterir. Partnerinden tutarlılık ve güven bekler; belirsizlik ve sürpriz krizler onu yorar.",
    guclu: ["Sadık ve güvenilir", "Sabırlı", "Hayattan keyif almayı bilen"],
    zayif: ["İnatçı", "Değişime direnen", "Sahiplenici olabilen"],
    askta: "yavaş ama derinden bağlanır",
    arkadaslikta: "en zor gününde kapını çalan kişidir",
    verir: "huzur ve güven",
    ister: "istikrar ve sadakat",
    zaaf: "inadı",
  },
  {
    slug: "ikizler",
    ad: "İkizler",
    gen: "İkizler'in",
    dat: "İkizler'e",
    emoji: "♊",
    tarih: "21 Mayıs – 20 Haziran",
    element: "Hava",
    nitelik: "Değişken",
    gezegen: "Merkür",
    renk: "#C2410C",
    ozet: "Meraklı, konuşkan ve hep hareket hâlinde.",
    genel: [
      "İkizler, zihni hiç durmayan burçtur. Her konuda bir fikri, her ortamda bir sohbeti vardır. Yeni bilgiler, yeni insanlar ve yeni yerler onu canlı tutar; aynı şeyi uzun süre yapmak ona hapis gibi gelir.",
      "Esprili ve uyumludur, farklı insanlarla kolayca bağ kurar. Ancak ilgisinin hızla dağılması ve ruh hâlinin çabuk değişmesi, onu tanımayanlara tutarsız görünebilir. Aslında sadece hayatın her yüzünü görmek istiyordur.",
    ],
    iliski:
      "Aşkta önce zihinsel bir bağ arar. Onu güldüren ve düşündüren biri çok çabuk ilgisini çeker. Monotonluk ilişkideki en büyük düşmanıdır; partnerinden merak, sohbet ve ona alan tanımasını bekler.",
    guclu: ["Zeki ve esprili", "İletişimi güçlü", "Uyumlu ve meraklı"],
    zayif: ["Kararsız", "Çabuk sıkılan", "Yüzeyde kalabilen"],
    askta: "önce sohbete âşık olur",
    arkadaslikta: "grubun en eğlenceli sohbetçisidir",
    verir: "merak ve kahkaha",
    ister: "zihinsel uyum ve özgürlük",
    zaaf: "kararsızlığı",
  },
  {
    slug: "yengec",
    ad: "Yengeç",
    gen: "Yengeç'in",
    dat: "Yengeç'e",
    emoji: "♋",
    tarih: "21 Haziran – 22 Temmuz",
    element: "Su",
    nitelik: "Öncü",
    gezegen: "Ay",
    renk: "#3B6FD9",
    ozet: "Şefkatli, sezgisi güçlü ve evine bağlı.",
    genel: [
      "Yengeç, zodyağın koruyucusudur. Sevdiklerine yuva olmak, onları beslemek ve güvende hissettirmek onun en doğal hâlidir. Sezgileri güçlüdür; bir odaya girdiğinde havayı herkesten önce okur.",
      "Dışarıdan sert bir kabuk taşır ama içi son derece hassastır. Kırıldığında hemen söylemeyebilir, kabuğuna çekilir. Geçmişe ve anılara bağlıdır, aile ve yakın çevre onun için her şeyden önce gelir.",
    ],
    iliski:
      "Aşkta derin ve koruyucudur. Partnerine gerçek bir yuva hissi verir, küçük ayrıntıları hatırlar. Karşılığında duygusal güvence ve sadakat bekler; soğukluk ve belirsizlik onu hemen içine kapatır.",
    guclu: ["Şefkatli ve koruyucu", "Sezgisi güçlü", "Sadık ve bağlı"],
    zayif: ["Alıngan", "Geçmişe takılabilen", "Ruh hâli dalgalı"],
    askta: "kalbini yavaş açar ama sonuna kadar açar",
    arkadaslikta: "herkesin sığındığı limandır",
    verir: "şefkat ve yuva hissi",
    ister: "duygusal güvence",
    zaaf: "alınganlığı",
  },
  {
    slug: "aslan",
    ad: "Aslan",
    gen: "Aslan'ın",
    dat: "Aslan'a",
    emoji: "♌",
    tarih: "23 Temmuz – 22 Ağustos",
    element: "Ateş",
    nitelik: "Sabit",
    gezegen: "Güneş",
    renk: "#E0A100",
    ozet: "Cömert, gösterişli ve sıcak kalpli.",
    genel: [
      "Aslan, girdiği her ortamı aydınlatan burçtur. Kendine güveni, cömertliği ve sıcaklığı insanları ona doğru çeker. Sahne ışığını sever ama bu ışığı sevdikleriyle paylaşmayı da bilir.",
      "Gururludur; takdir edilmek ona su kadar gereklidir. Görmezden gelindiğinde ya da küçümsendiğinde derinden yaralanır. Sadakati ise efsanevidir: bir kez senin tarafını tuttuysa sonuna kadar tutar.",
    ],
    iliski:
      "Aşkta romantik ve cömerttir, büyük jestleri sever. Partnerini şımartır ve onunla gurur duymak ister. Karşılığında hayranlık, sadakat ve açık bir sevgi gösterisi bekler; ilgisizlik onun için en büyük kırgınlıktır.",
    guclu: ["Cömert ve sıcak", "Kendine güvenen", "Sadık ve koruyucu"],
    zayif: ["Gururlu", "İlgi bekleyen", "Eleştiriye hassas"],
    askta: "büyük jestlerle sever",
    arkadaslikta: "herkesin moralini yükselten neşe kaynağıdır",
    verir: "sıcaklık ve cömertlik",
    ister: "takdir ve hayranlık",
    zaaf: "gururu",
  },
  {
    slug: "basak",
    ad: "Başak",
    gen: "Başak'ın",
    dat: "Başak'a",
    emoji: "♍",
    tarih: "23 Ağustos – 22 Eylül",
    element: "Toprak",
    nitelik: "Değişken",
    gezegen: "Merkür",
    renk: "#5B7F2E",
    ozet: "Detaycı, yardımsever ve titiz.",
    genel: [
      "Başak, ayrıntıların ustasıdır. Başkalarının gözünden kaçan şeyi fark eder, karmaşayı düzene çevirir. Yardım etmeyi sever; sevgisini çoğu zaman sözle değil, birinin işini kolaylaştırarak gösterir.",
      "Kendine karşı acımasız derecede eleştireldir ve bu bazen çevresine de yansır. Mükemmeliyetçiliği onu yorabilir. Ama güvenilirliği, aklı başında tavsiyeleri ve sessiz sadakati onu vazgeçilmez kılar.",
    ],
    iliski:
      "Aşkta temkinli başlar, güvendikten sonra çok özenli bir partnere dönüşür. Küçük ihtiyaçları fark eder, sorunları çözer. Karşılığında dürüstlük, düzen ve emeğinin görülmesini bekler.",
    guclu: ["Detaycı ve titiz", "Yardımsever", "Güvenilir ve mantıklı"],
    zayif: ["Fazla eleştirel", "Endişeli", "Mükemmeliyetçi"],
    askta: "sevgisini yaptıklarıyla gösterir",
    arkadaslikta: "her sorunun pratik çözümünü bulan kişidir",
    verir: "özen ve düzen",
    ister: "dürüstlük ve emeğinin görülmesi",
    zaaf: "eleştirelliği",
  },
  {
    slug: "terazi",
    ad: "Terazi",
    gen: "Terazi'nin",
    dat: "Terazi'ye",
    emoji: "♎",
    tarih: "23 Eylül – 22 Ekim",
    element: "Hava",
    nitelik: "Öncü",
    gezegen: "Venüs",
    renk: "#E0567A",
    ozet: "Zarif, adil ve uyum arayan.",
    genel: [
      "Terazi, denge ve güzellik burcudur. Estetik gözü kuvvetlidir, kaba ve dengesiz olan her şey onu rahatsız eder. İnsanlar arasında köprü kurmayı, gerginliği yumuşatmayı ve herkesin sesini duymayı sever.",
      "Adalet duygusu güçlüdür ama karar vermek onun için zordur; her seçeneğin iyi tarafını görür. Çatışmadan kaçınmak için kendi isteğini geri plana atabilir. Sosyal, kibar ve son derece çekicidir.",
    ],
    iliski:
      "Aşkta romantik ve ilgilidir, ilişkiyi bir ortaklık olarak görür. Güzel anlar yaratmayı, birlikte bir şeyler yapmayı sever. Karşılığında incelik, eşitlik ve huzurlu bir ilişki bekler; kaba tartışmalar onu soğutur.",
    guclu: ["Diplomatik", "Zarif ve estetik", "Adil ve anlayışlı"],
    zayif: ["Kararsız", "Çatışmadan kaçan", "Onay arayan"],
    askta: "ilişkiyi bir ortaklık gibi kurar",
    arkadaslikta: "grubun barış elçisidir",
    verir: "zarafet ve denge",
    ister: "uyum ve eşitlik",
    zaaf: "kararsızlığı",
  },
  {
    slug: "akrep",
    ad: "Akrep",
    gen: "Akrep'in",
    dat: "Akrep'e",
    emoji: "♏",
    tarih: "23 Ekim – 21 Kasım",
    element: "Su",
    nitelik: "Sabit",
    gezegen: "Plüton (geleneksel olarak Mars)",
    renk: "#4C1D95",
    ozet: "Yoğun, gizemli ve sonuna kadar sadık.",
    genel: [
      "Akrep, zodyağın en yoğun burcudur. Yüzeyle yetinmez; insanların, olayların ve duyguların derinine iner. Sezgileri keskindir, bir yalanı çoğu zaman söylenmeden fark eder.",
      "Güveni zor kazanılır ama bir kez kazanıldığında sarsılmaz bir sadakate dönüşür. İhanete karşı affı neredeyse yoktur. Kendi sırlarını saklamayı, başkalarınınkini korumayı bilir.",
    ],
    iliski:
      "Aşkta ya hep ya hiçtir. Tutkulu, derin ve koruyucu bir partnerdir. Karşılığında tam bir dürüstlük ve sadakat bekler; yarım ilgi ve gizli kapaklı davranış onun için kırmızı çizgidir.",
    guclu: ["Tutkulu ve derin", "Sadık", "Sezgisi keskin"],
    zayif: ["Kıskanç olabilen", "Kin tutan", "Güvenmekte zorlanan"],
    askta: "ya tamamen bağlanır ya hiç",
    arkadaslikta: "sırrını mezara götürecek dosttur",
    verir: "tutku ve derinlik",
    ister: "tam bir güven",
    zaaf: "kıskançlığı",
  },
  {
    slug: "yay",
    ad: "Yay",
    gen: "Yay'ın",
    dat: "Yay'a",
    emoji: "♐",
    tarih: "22 Kasım – 21 Aralık",
    element: "Ateş",
    nitelik: "Değişken",
    gezegen: "Jüpiter",
    renk: "#B0287A",
    ozet: "Özgür ruhlu, iyimser ve maceraperest.",
    genel: [
      "Yay, ufku hep daha uzakta olan burçtur. Seyahat, felsefe, yeni kültürler ve büyük sorular onu heyecanlandırır. İyimserliği bulaşıcıdır; en zor durumda bile bir şaka ve bir umut bulur.",
      "Özgürlüğüne düşkündür, kısıtlandığını hissettiği anda uzaklaşır. Dürüstlüğü bazen pot kırmasına yol açar ama niyeti hep iyidir. Hayatı bir öğrenme yolculuğu olarak görür.",
    ],
    iliski:
      "Aşkta eğlenceli ve cömerttir, partnerini maceralarına ortak etmek ister. Sahiplenici ilişkilerden kaçar. Karşılığında özgürlük, mizah ve birlikte büyümeyi bekler.",
    guclu: ["İyimser ve neşeli", "Maceraperest", "Dürüst ve açık fikirli"],
    zayif: ["Bağlanmaktan çekinebilen", "Düşüncesiz konuşabilen", "Sabırsız"],
    askta: "aşkı bir yolculuk gibi yaşar",
    arkadaslikta: "en çılgın planların fikir babasıdır",
    verir: "iyimserlik ve ufuk",
    ister: "özgürlük ve macera",
    zaaf: "bağlanma korkusu",
  },
  {
    slug: "oglak",
    ad: "Oğlak",
    gen: "Oğlak'ın",
    dat: "Oğlak'a",
    emoji: "♑",
    tarih: "22 Aralık – 19 Ocak",
    element: "Toprak",
    nitelik: "Öncü",
    gezegen: "Satürn",
    renk: "#3B2A6B",
    ozet: "Hırslı, disiplinli ve güvenilir.",
    genel: [
      "Oğlak, zirveye adım adım tırmanan burçtur. Hedeflerini ciddiye alır, sorumluluktan kaçmaz ve sabırla çalışır. Kısa yoldan çok sağlam yolu seçer; bu yüzden zamanla en sağlam sonuçlara o ulaşır.",
      "Dışarıdan mesafeli ve ciddi görünebilir ama yakınlarına karşı kuru bir mizahı ve büyük bir şefkati vardır. Duygularını göstermek ona zor gelir; sevgisini sözle değil, güvence vererek ifade eder.",
    ],
    iliski:
      "Aşkta temkinli ve ciddidir, geleceği olan ilişkilere yatırım yapar. Sözünü tutan, planlı bir partnerdir. Karşılığında saygı, sadakat ve hedeflerine destek bekler.",
    guclu: ["Disiplinli ve kararlı", "Sorumluluk sahibi", "Güvenilir"],
    zayif: ["Mesafeli görünebilen", "İşkolik", "Duygularını saklayan"],
    askta: "geleceği planlayarak sever",
    arkadaslikta: "sözüne en çok güvenilen kişidir",
    verir: "istikrar ve kararlılık",
    ister: "saygı ve ciddiyet",
    zaaf: "mesafeliliği",
  },
  {
    slug: "kova",
    ad: "Kova",
    gen: "Kova'nın",
    dat: "Kova'ya",
    emoji: "♒",
    tarih: "20 Ocak – 18 Şubat",
    element: "Hava",
    nitelik: "Sabit",
    gezegen: "Uranüs (geleneksel olarak Satürn)",
    renk: "#0E7490",
    ozet: "Özgün, bağımsız ve vizyoner.",
    genel: [
      "Kova, kalıpları sorgulayan burçtur. Farklı düşünmekten çekinmez, çoğu zaman zamanının biraz ilerisindedir. İnsanlığa, toplumsal meselelere ve yeni fikirlere ilgisi büyüktür.",
      "Arkadaşlığa çok değer verir ve geniş bir çevresi vardır, ama duygusal yakınlıkta mesafeli kalabilir. Bağımsızlığı onun için pazarlık konusu değildir. Sıra dışı, sadık ve öngörülemez bir dosttur.",
    ],
    iliski:
      "Aşkta önce arkadaşlık arar. Partnerinin zihnine ve bireyselliğine saygı duyar. Karşılığında alan, özgünlük ve kıskançlıktan uzak bir ilişki bekler; boğucu yakınlık onu kaçırır.",
    guclu: ["Özgün ve yaratıcı", "Bağımsız", "Açık fikirli"],
    zayif: ["Duygusal olarak mesafeli", "İnatçı", "Öngörülemez"],
    askta: "önce en iyi arkadaş olur",
    arkadaslikta: "herkesi bir araya getiren sıra dışı dosttur",
    verir: "özgünlük ve yeni fikirler",
    ister: "bağımsızlık ve alan",
    zaaf: "duygusal mesafesi",
  },
  {
    slug: "balik",
    ad: "Balık",
    gen: "Balık'ın",
    dat: "Balık'a",
    emoji: "♓",
    tarih: "19 Şubat – 20 Mart",
    element: "Su",
    nitelik: "Değişken",
    gezegen: "Neptün (geleneksel olarak Jüpiter)",
    renk: "#6B2FA0",
    ozet: "Hayalperest, empatik ve romantik.",
    genel: [
      "Balık, zodyağın hayalperestidir. Empati yeteneği o kadar güçlüdür ki başkalarının duygularını kendi duygusu gibi yaşar. Sanata, müziğe ve hayal gücüne yakındır; gerçeklik bazen ona fazla sert gelir.",
      "Sınırları çizmekte zorlanır, herkese yardım etmek ister ve bu yüzden kolayca yorulabilir. Sezgileri güçlüdür, söylenmeyeni hisseder. Yumuşak, şefkatli ve son derece romantiktir.",
    ],
    iliski:
      "Aşkta tamamen teslim olur, partnerini idealleştirebilir. Romantik jestler, derin sohbetler ve ruhsal bir bağ arar. Karşılığında şefkat, sabır ve hayallerine saygı bekler.",
    guclu: ["Empatik ve şefkatli", "Yaratıcı", "Romantik ve sezgisel"],
    zayif: ["Gerçeklerden kaçabilen", "Sınır koymakta zorlanan", "Fazla hassas"],
    askta: "masal gibi sever",
    arkadaslikta: "seni en iyi anlayan dinleyicidir",
    verir: "empati ve hayal gücü",
    ister: "şefkat ve ruhsal bağ",
    zaaf: "gerçeklerden kaçışı",
  },
];

export function getBurc(slug: string): Burc | undefined {
  return burclar.find((b) => b.slug === slug);
}

export function burcIndex(slug: string): number {
  return burclar.findIndex((b) => b.slug === slug);
}
