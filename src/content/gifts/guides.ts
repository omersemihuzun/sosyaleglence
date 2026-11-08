import { guideFaqs, type Faq } from "./faqs";
import { ideas } from "./ideas";
import type { Budget, GiftIdea, Interest, Occasion, Recipient } from "./types";

export type Guide = {
  slug: string;
  /** Sayfa başlığı (h1) */
  title: string;
  /** Arama sonucunda görünecek başlık */
  metaTitle: string;
  metaDescription: string;
  emoji: string;
  intro: string[];
  tips: string[];
  filter: {
    recipients?: Recipient[];
    budgets?: Budget[];
    interests?: Interest[];
    /** Bu durumlarla etiketlenmiş fikirler öne çıkar. `only` ise sadece onlar listelenir. */
    occasions?: Occasion[];
    only?: boolean;
  };
  /** Sık sorulan sorular. Boşsa faqs.ts içindeki karşılığı kullanılır. */
  faq?: Faq[];
  /** Son içerik güncellemesi (YYYY-MM-DD) */
  updated?: string;
};

const baseGuides: Guide[] = [
  {
    slug: "sevgiliye-yilbasi-hediyesi",
    updated: "2026-11-08",
    title: "Sevgiliye yılbaşı hediyesi",
    metaTitle: "Sevgiliye Yılbaşı Hediyesi: En Anlamlı Fikirler",
    metaDescription:
      "Sevgiliye yılbaşı hediyesi arıyorsan doğru yerdesin. Kişiye özel, romantik ve işe yarayan yılbaşı hediye fikirleri, her bütçeye uygun öneriler.",
    emoji: "🎄",
    intro: [
      "Yılbaşı hediyesi, Sevgililer Günü'nden farklı olarak hem romantik hem de kış aylarında gerçekten kullanılacak bir şey olabilir. En iyi hediyeler genelde bu ikisini birleştirir: bir battaniyenin yanına eklenmiş bir not ya da bir albümün içine saklanmış bir bilet.",
      "Aşağıdaki fikirler, sevgilinin ilgi alanlarına ve bütçene göre seçildi. Her birinde neden iyi bir seçim olduğunu ve nereden bakabileceğini bulabilirsin.",
    ],
    tips: [
      "Yılın son haftası kargolar yavaşlar. Kişiye özel ürünleri en az 10 gün önceden sipariş et.",
      "Küçük bir hediyeyi el yazısı bir notla birleştirmek, pahalı bir hediyeden daha çok akılda kalır.",
      "Birlikte kullanabileceğiniz şeyler (kutu oyunu, puzzle, pijama) yılbaşı akşamını da hediyenin bir parçası yapar.",
    ],
    filter: { recipients: ["kiz-arkadas", "erkek-arkadas"], occasions: ["yilbasi", "romantik"], only: true },
  },
  {
    slug: "erkek-arkadasa-hediye",
    updated: "2026-11-08",
    title: "Erkek arkadaşa hediye",
    metaTitle: "Erkek Arkadaşa Hediye: Gerçekten Kullanacağı Fikirler",
    metaDescription:
      "Erkek arkadaşa ne hediye alınır? Teknolojiden kişiye özel aksesuarlara, deneyimden bakım setlerine kadar onun ilgi alanına göre hediye önerileri.",
    emoji: "🎁",
    intro: [
      "Erkeklere hediye seçerken en sık yapılan hata, \"erkek hediyesi\" kalıplarına takılmak. Oysa en iyi hediye, onun gerçekten ilgilendiği bir şeyi bir adım ileri taşıyan hediyedir: kahve seviyorsa iyi bir demleme seti, oyun oynuyorsa yeni bir oyun kolu.",
      "Ne sevdiğinden emin değilsen kullanım süresi uzun olan ürünlere yönel. Kartlık, kulaklık, sırt çantası gibi her gün elde olan şeyler hediyenin sık sık hatırlanmasını sağlar.",
    ],
    tips: [
      "Son zamanlarda neyin bozulduğunu ya da neyi \"bir ara alırım\" dediğini hatırla. En isabetli hediyeler genelde orada saklıdır.",
      "Kişiselleştirme (isim, tarih, koordinat) sıradan bir aksesuarı özel bir hediyeye dönüştürür.",
      "Deneyim hediyeleri (konser, atölye, maç bileti) erkekler arasında beklenenden çok daha fazla seviliyor.",
    ],
    filter: { recipients: ["erkek-arkadas"] },
  },
  {
    slug: "kiz-arkadasa-hediye",
    updated: "2026-11-08",
    title: "Kız arkadaşa hediye",
    metaTitle: "Kız Arkadaşa Hediye: Romantik ve Anlamlı Fikirler",
    metaDescription:
      "Kız arkadaşa ne hediye alınır? Kişiye özel takılardan deneyim hediyelerine, bakım setlerinden romantik sürprizlere kadar her bütçeye hediye önerileri.",
    emoji: "💝",
    intro: [
      "Kız arkadaşına hediye alırken en önemli şey, onu dinlediğini göstermek. Aylar önce bahsettiği bir şeyi hatırlayıp almak, en pahalı hediyeden bile daha etkili olabilir.",
      "Aşağıdaki fikirler romantik, kişisel ve günlük hayatta kullanılabilecek seçeneklerden oluşuyor. İlgi alanlarına göre seçim yapabilirsin.",
    ],
    tips: [
      "Takı alırken tarzına dikkat et: sade mi seviyor, gösterişli mi? Mevcut takılarına bakmak en iyi ipucu.",
      "Parfüm ya da cilt bakımı gibi kişisel ürünlerde kullandığı markayı biliyorsan oradan devam et.",
      "Hediyenin yanına el yazısı bir not eklemeyi unutma.",
    ],
    filter: { recipients: ["kiz-arkadas"] },
  },
  {
    slug: "sevgililer-gunu-hediyesi",
    updated: "2026-11-08",
    title: "Sevgililer Günü hediyesi",
    metaTitle: "Sevgililer Günü Hediyesi: 14 Şubat İçin Fikirler",
    metaDescription:
      "Sevgililer Günü için anlamlı hediye fikirleri. Kişiye özel hediyeler, romantik deneyimler ve her bütçeye uygun 14 Şubat önerileri.",
    emoji: "❤️",
    intro: [
      "14 Şubat hediyesi pahalı olmak zorunda değil, ama düşünülmüş olmak zorunda. Kişiye özel bir poster, birlikte gidilecek bir atölye ya da \"Şu an aç\" mektupları, sıradan bir çiçek buketinden çok daha uzun süre hatırlanır.",
      "Aşağıda romantik olduğu kadar özgün olan fikirler var. Bütçene ve sevgilinin tarzına göre seçebilirsin.",
    ],
    tips: [
      "Sevgililer Günü haftasında restoranlar dolar. Rezervasyonu en az bir hafta önceden yap.",
      "Kişiye özel ürünlerin üretim süresi uzayabilir, siparişi şubat başında ver.",
      "Bir deneyim ve küçük bir somut hediye birleşimi genelde en iyi sonucu verir.",
    ],
    filter: { recipients: ["kiz-arkadas", "erkek-arkadas"], occasions: ["romantik"], only: true },
  },
  {
    slug: "yildonumu-hediyesi",
    updated: "2026-11-08",
    title: "Yıldönümü hediyesi",
    metaTitle: "Yıldönümü Hediyesi: Birlikteliğinizi Kutlayacak Fikirler",
    metaDescription:
      "Sevgiliye ya da eşe yıldönümü hediyesi önerileri. Anı odaklı, kişiye özel ve deneyim hediyeleriyle ilişkinizin yıldönümünü özel kılın.",
    emoji: "💍",
    intro: [
      "Yıldönümü, geride bıraktığınız zamanı kutlamak için bir fırsat. Bu yüzden en iyi yıldönümü hediyeleri geçmişe gönderme yapar: tanıştığınız gecenin yıldız haritası, ortak fotoğraflarınızdan bir albüm ya da ilk buluştuğunuz yerin koordinatları.",
      "Bir de geleceğe bakan hediyeler var: birlikte çıkılacak bir kaçamak ya da birlikte öğrenilecek bir şey.",
    ],
    tips: [
      "Geleneksel yıldönümü temalarından ilham alabilirsin: 1. yıl kâğıt, 2. yıl pamuk, 3. yıl deri.",
      "Birlikte geçen yılı anlatan kısa bir mektup her hediyeyi güçlendirir.",
    ],
    filter: { recipients: ["kiz-arkadas", "erkek-arkadas"], occasions: ["romantik"], only: true },
  },
  {
    slug: "dogum-gunu-hediyesi",
    updated: "2026-11-08",
    title: "Doğum günü hediyesi",
    metaTitle: "Doğum Günü Hediyesi: Herkes İçin Fikirler",
    metaDescription:
      "Doğum günü hediyesi önerileri: sevgili, arkadaş, anne, baba ve kardeş için ilgi alanına ve bütçeye göre seçilmiş hediye fikirleri.",
    emoji: "🎂",
    intro: [
      "Doğum günü hediyesi, o kişiyi ne kadar tanıdığını gösterme fırsatı. Bu yüzden en iyi yöntem, ilgi alanından yola çıkmak. Kitap okuyan birine bir kitap seti, kahve tutkununa bir demleme seti, gezmeyi sevene bir valiz.",
      "Aşağıdaki listeyi kullanabilir ya da daha kişisel öneriler için hediye bulucuyu deneyebilirsin.",
    ],
    tips: [
      "Kime alacağını, bütçeni ve onun ilgi alanlarını hediye bulucuya girersen liste sadece ona göre daralır.",
      "Bir hediyeyi deneyimle birleştirmek, örneğin bir kitabın yanına bir kahve davetiyesi eklemek, etkisini ikiye katlar.",
    ],
    filter: {},
  },
  {
    slug: "anneye-hediye",
    updated: "2026-11-08",
    title: "Anneye hediye",
    metaTitle: "Anneye Hediye: Anneler Günü ve Doğum Günü İçin Fikirler",
    metaDescription:
      "Anneye ne hediye alınır? Anneler Günü ve doğum günü için kişiye özel, işe yarayan ve duygusal hediye önerileri.",
    emoji: "🌷",
    intro: [
      "Annelerin çoğu \"Bana bir şey alma\" der. Ama bu, onları en çok mutlu edecek şeyin düşünülmüş olmak olduğu anlamına gelir. Kendine almaya kıyamadığı şeyler (spa, iyi bir parfüm, kaliteli bir mutfak aleti) çoğu zaman en isabetli seçimdir.",
      "Duygusal hediyeler de anneler için çok değerli: aile fotoğraflarından bir albüm ya da torunların fotoğraflarını uzaktan yükleyebileceğin dijital bir çerçeve.",
    ],
    tips: [
      "Anneler Günü mayısın ikinci pazarıdır. Çiçek ve kişiye özel ürün siparişlerini birkaç gün önceden ver.",
      "Ona birlikte zaman geçireceğiniz bir deneyim hediye etmek, uzun yıllar hatırlanan bir anı olur.",
    ],
    filter: { recipients: ["anne"], occasions: ["anneler-gunu"] },
  },
  {
    slug: "babaya-hediye",
    updated: "2026-11-08",
    title: "Babaya hediye",
    metaTitle: "Babaya Hediye: Babalar Günü ve Doğum Günü İçin Fikirler",
    metaDescription:
      "Babaya ne hediye alınır? Babalar Günü ve doğum günü için teknoloji, bakım, aksesuar ve kişiye özel hediye önerileri.",
    emoji: "👔",
    intro: [
      "Babalar genelde ihtiyacı olan şeyi kendisi alır ya da hiç almaz. Bu yüzden en iyi hediyeler, eskiyen bir şeyin kaliteli bir versiyonu (cüzdan, saat, termos) ya da hiç denemediği ama seveceği bir şeydir (masaj tabancası, dijital çerçeve).",
    ],
    tips: [
      "Babalar Günü haziranın üçüncü pazarıdır.",
      "Teknolojiyle arası iyi değilse kurulumu kolay ürünler seç ya da kurulumu sen yap.",
    ],
    filter: { recipients: ["baba"], occasions: ["babalar-gunu"] },
  },
  {
    slug: "arkadasa-hediye",
    updated: "2026-11-08",
    title: "Arkadaşa hediye",
    metaTitle: "Arkadaşa Hediye: Eğlenceli ve Anlamlı Fikirler",
    metaDescription:
      "En yakın arkadaşa ne hediye alınır? Doğum günü ve yılbaşı için eğlenceli, kişiye özel ve bütçe dostu arkadaş hediyesi fikirleri.",
    emoji: "🫶",
    intro: [
      "Arkadaş hediyeleri, iç esprilerin ve ortak anıların en iyi değerlendirildiği hediyelerdir. Baskılı bir kupa, birlikte oynayacağınız bir kutu oyunu ya da birlikte gideceğiniz bir konser, \"Seni tanıyorum\" demenin en eğlenceli yolları.",
    ],
    tips: [
      "Arkadaş grubunda ortak hediye alıyorsanız bütçeyi birleştirip daha büyük bir şeye yönelebilirsiniz.",
      "Ortak bir anıyı hatırlatan küçük bir detay, hediyeyi her zaman daha kişisel yapar.",
    ],
    filter: { recipients: ["arkadas"] },
  },
  {
    slug: "500-tl-alti-hediye",
    updated: "2026-11-08",
    title: "500 TL altı hediye fikirleri",
    metaTitle: "500 TL Altı Hediye Fikirleri: Ucuz Ama Etkili",
    metaDescription:
      "Bütçe dostu hediye önerileri. 500 TL altında sevgiliye, arkadaşa ve iş arkadaşına alınabilecek anlamlı ve işe yarayan hediyeler.",
    emoji: "🪙",
    intro: [
      "İyi bir hediye için çok para harcamak gerekmiyor. Kişiye özel bir kupa, güzel bir defter ya da el yazısı mektuplardan oluşan bir set, doğru kişiye verildiğinde pahalı hediyelerden daha çok iz bırakır.",
      "Fiyatlar mağazaya ve döneme göre değişebilir. Aralıklar yaklaşık değerlerdir.",
    ],
    tips: [
      "Küçük hediyeleri güzel bir paketle sunmak, algılanan değerini ciddi şekilde artırır.",
      "İki küçük hediyeyi bir tema altında birleştir: termos bardak ve çekirdek kahve gibi.",
    ],
    filter: { budgets: [1] },
  },
  {
    slug: "is-arkadasina-hediye",
    updated: "2026-11-08",
    title: "İş arkadaşına hediye",
    metaTitle: "İş Arkadaşına Hediye: Yılbaşı Hediye Değişimi İçin Fikirler",
    metaDescription:
      "İş arkadaşına ne hediye alınır? Yılbaşı hediye değişimi, veda ve doğum günleri için şık, bütçe dostu ve ofiste kullanılabilir hediyeler.",
    emoji: "💼",
    intro: [
      "İş arkadaşı hediyesinde altın kural: kişisel ama samimiyetsiz olmayan, kullanışlı ama sıkıcı olmayan bir şey. Masa bitkisi, termos, defter ya da butik çikolata gibi seçenekler hem güvenli hem de beğenilir.",
    ],
    tips: [
      "Hediye değişimlerinde belirlenen bütçenin üstüne çıkmamaya dikkat et.",
      "Parfüm ve kıyafet gibi kişisel tercih gerektiren hediyelerden uzak durmak daha güvenli.",
    ],
    filter: { recipients: ["is-arkadasi"] },
  },
  {
    slug: "ev-hediyesi",
    updated: "2026-11-08",
    title: "Yeni eve hediye",
    metaTitle: "Yeni Eve Hediye: Ev Hediyesi Fikirleri",
    metaDescription:
      "Yeni eve taşınan arkadaşa ya da aileye ne hediye alınır? Mutfak, dekorasyon ve bitki önerileriyle yeni ev hediyesi fikirleri.",
    emoji: "🏠",
    intro: [
      "Yeni eve taşınan biri genellikle iki şeye ihtiyaç duyar: evi ev yapan küçük dokunuşlar ve eksik kalan pratik aletler. Bir saksı bitkisi, kokulu bir mum ya da iyi bir tava, ilk günlerde çok işe yarar.",
    ],
    tips: [
      "Dekorasyon ürünlerinde evin tarzını bilmiyorsan nötr renkleri tercih et.",
      "Bakımı kolay bitkiler, bitki yetiştirmeyi bilmeyenler için bile güvenli bir seçim.",
    ],
    filter: { occasions: ["ev"], only: true },
  },
  {
    slug: "erkege-dogum-gunu-hediyesi",
    updated: "2026-11-08",
    title: "Erkeğe doğum günü hediyesi",
    metaTitle: "Erkeğe Doğum Günü Hediyesi: İlgi Alanına Göre Fikirler",
    metaDescription:
      "Erkeğe doğum günü hediyesi önerileri: sevgili, eş, baba ve kardeş için teknoloji, aksesuar, bakım ve deneyim hediyeleri. Her bütçeye uygun fikirler.",
    emoji: "🎂",
    intro: [
      "Erkekler için doğum günü hediyesi seçerken en işe yarayan yöntem, onun zaten sevdiği bir şeyi bir adım ileri taşımaktır. Kahve içiyorsa iyi bir demleme seti, spor yapıyorsa bir masaj aleti, çok çalışıyorsa ergonomik bir laptop standı.",
      "Ne sevdiğinden emin değilsen her gün kullanılan ürünlere yönel: kartlık, kemer, kulaklık ya da sırt çantası. Hediye ne kadar sık kullanılırsa o kadar sık hatırlanır.",
    ],
    tips: [
      "Telefon ve bilgisayar aksesuarlarında cihazın modeline ve uyumluluğuna mutlaka bak.",
      "Kıyafet ve ayakkabıda değişim imkânı olan mağazayı tercih et.",
      "Bir deneyim hediyesini (maç, konser, atölye) küçük bir somut hediyeyle birleştirmek etkisini artırır.",
    ],
    filter: { recipients: ["erkek-arkadas", "baba"] },
    faq: [
      {
        q: "Erkeğe doğum gününde ne alınır, hiç fikrim yok?",
        a: "Son zamanlarda bozulan ya da eskiyen eşyalarını düşün: kulaklık, cüzdan, kemer, çanta. Bunların kaliteli bir versiyonu neredeyse her zaman beğenilir.",
      },
      {
        q: "Erkekler hangi hediyeleri gerçekten kullanır?",
        a: "Günlük hayatta elde olan şeyleri: kulaklık, powerbank, termos, kartlık ve sırt çantası gibi. Süs eşyası yerine işlevsel hediyeler genellikle daha çok kullanılır.",
      },
      {
        q: "Babaya ve sevgiliye aynı hediye alınır mı?",
        a: "Bazı hediyeler ikisine de uyar (saat, cüzdan, masaj aleti), ama kişiselleştirme farklı olmalı. Sevgiliye ortak bir anıya gönderme, babaya ise aile odaklı bir detay eklemek hediyeyi özel kılar.",
      },
    ],
  },
  {
    slug: "kadina-dogum-gunu-hediyesi",
    updated: "2026-11-08",
    title: "Kadına doğum günü hediyesi",
    metaTitle: "Kadına Doğum Günü Hediyesi: Anlamlı ve Şık Fikirler",
    metaDescription:
      "Kadına doğum günü hediyesi önerileri: sevgili, eş ve anne için takı, bakım, deneyim ve kişiye özel hediyeler. İlgi alanına ve bütçeye göre fikirler.",
    emoji: "🌷",
    intro: [
      "Bir kadına doğum günü hediyesi alırken en çok etki bırakan şey, onu dinlediğini gösterebilmek. Aylar önce bahsettiği bir kitabı, sevdiği kokuyu ya da gitmek istediği bir yeri hatırlamak, en pahalı hediyeden daha değerli olabilir.",
      "Aşağıda takıdan deneyime, bakım setlerinden kişiye özel hediyelere kadar farklı tarzlara uygun fikirler var. Onun tarzını düşünerek seçebilir ya da hediye bulucuyla listeyi daraltabilirsin.",
    ],
    tips: [
      "Takı alırken mevcut takılarına bak: altın mı gümüş mü, sade mi gösterişli mi seviyor?",
      "Cilt bakımı ve parfümde kullandığı markayı biliyorsan oradan devam et, bilmiyorsan deneme setleri güvenli bir seçim.",
      "Hediyenin yanına eklenen el yazısı bir not, hediyenin en çok hatırlanan kısmı olabilir.",
    ],
    filter: { recipients: ["kiz-arkadas", "anne"] },
    faq: [
      {
        q: "Kadına doğum gününde ne alınır?",
        a: "İlgi alanına göre değişir ama kişiye özel takılar, bakım setleri, spa gibi deneyim hediyeleri ve anlamlı kitaplar en sık beğenilen seçenekler arasında.",
      },
      {
        q: "Kadınlar deneyim hediyesini mi eşyayı mı tercih eder?",
        a: "Kişiden kişiye değişir. Birlikte bir deneyim (atölye, konser, kısa bir kaçamak) çoğu zaman uzun süre hatırlanır; küçük bir somut hediyeyle birleştirmek ikisinin de avantajını verir.",
      },
      {
        q: "Bütçem kısıtlı, yine de özel bir hediye verebilir miyim?",
        a: "Evet. Ortak fotoğraflardan bir albüm, yıldız haritası posteri ya da \"Şu an aç\" mektupları gibi hediyeler düşük bütçeyle çok kişisel olabilir.",
      },
    ],
  },
  {
    slug: "ogretmene-hediye",
    updated: "2026-11-08",
    title: "Öğretmene hediye",
    metaTitle: "Öğretmene Hediye: Öğretmenler Günü İçin Anlamlı Fikirler",
    metaDescription:
      "Öğretmenler Günü ve yıl sonu için öğretmene hediye önerileri. Kişiye özel kalem, kupa, anı albümü ve bütçe dostu, samimi hediye fikirleri.",
    emoji: "🍎",
    intro: [
      "Öğretmene verilen hediyenin değeri fiyatında değil, içtenliğinde. Öğrencinin kendi eliyle yazdığı bir kart ya da sınıfça hazırlanan bir anı albümü, öğretmenlerin yıllarca sakladığı hediyelerin başında gelir.",
      "Aşağıda öğretmenlerin gerçekten kullanabileceği, bütçe dostu ve samimi hediye fikirleri var. Öğretmenler Günü 24 Kasım'da kutlanır; yıl sonu ve mezuniyet için de aynı fikirler uygundur.",
    ],
    tips: [
      "Okulun ya da velilerin hediye konusundaki kurallarını önceden öğren; bazı okullar pahalı hediyeleri kabul etmez.",
      "Sınıfça ortak bir hediye almak hem bütçeyi rahatlatır hem de daha anlamlı olur.",
      "Hediyeye çocuğun kendi yazdığı ya da çizdiği bir not eklemeyi unutma.",
    ],
    filter: { occasions: ["ogretmen-gunu"], only: true },
    faq: [
      {
        q: "Öğretmenler Günü ne zaman?",
        a: "Türkiye'de Öğretmenler Günü her yıl 24 Kasım'da kutlanır.",
      },
      {
        q: "Öğretmene pahalı hediye almak doğru mu?",
        a: "Genellikle gerek yoktur ve bazı okullarda uygun karşılanmaz. Samimi, kişisel ve bütçe dostu hediyeler öğretmenler tarafından çok daha fazla takdir edilir.",
      },
      {
        q: "Sınıfça ortak hediye için ne alınabilir?",
        a: "Her öğrencinin bir sayfa hazırladığı anı albümü ya da sınıfın imzaladığı bir kartla birlikte kaliteli bir çanta veya kalem seti iyi bir ortak hediye olur.",
      },
    ],
  },
  {
    slug: "mezuniyet-hediyesi",
    updated: "2026-11-08",
    title: "Mezuniyet hediyesi",
    metaTitle: "Mezuniyet Hediyesi: Yeni Mezunlar İçin Anlamlı Fikirler",
    metaDescription:
      "Mezuniyet hediyesi önerileri: lise ve üniversite mezunları için iş hayatına hazırlayan, anı bırakan ve yeni başlangıcı kutlayan hediye fikirleri.",
    emoji: "🎓",
    intro: [
      "Mezuniyet bir bitiş kadar bir başlangıç. Bu yüzden en iyi mezuniyet hediyeleri ya bu dönemi hatırlatır ya da bir sonraki adıma hazırlar: gravürlü bir bileklik, diploma çerçevesi ya da iş hayatına başlangıç için şık bir set.",
      "Aşağıdaki fikirler lise ve üniversite mezunlarına uygun. Mezunun planlarını düşün: yurt dışına mı gidiyor, işe mi başlıyor, yoksa bir mola mı verecek?",
    ],
    tips: [
      "İşe başlayacak bir mezuna kartvizitlik, kaliteli bir kalem ya da laptop çantası gibi profesyonel hediyeler çok yakışır.",
      "Seyahat planı olan biri için valiz ya da düzenleyici çantalar pratik bir seçim.",
      "Gravürlü hediyelerde mezuniyet yılını eklemek, hediyeyi kalıcı bir hatıraya dönüştürür.",
    ],
    filter: { occasions: ["mezuniyet"], only: true },
    faq: [
      {
        q: "Üniversite mezununa ne hediye alınır?",
        a: "İş hayatına hazırlayan hediyeler (laptop standı, kaliteli kalem, şık bir çanta) ya da yeni bir şey öğrenmesini sağlayan bir kurs aboneliği çok işe yarar.",
      },
      {
        q: "Lise mezuniyetinde ne alınabilir?",
        a: "Üniversiteye hazırlanan biri için tablet, kulaklık ya da sırt çantası gibi okul hayatında kullanılacak hediyeler; anı olarak da gravürlü bir bileklik uygundur.",
      },
      {
        q: "Mezuniyet hediyesinde para vermek doğru mu?",
        a: "Pek çok ailede gelenektir ve yeni mezun için faydalı olabilir. Daha kişisel olmasını istersen parayı bir hediyeyle ya da hedefine yönelik bir kartla birlikte verebilirsin.",
      },
    ],
  },
  {
    slug: "1000-tl-alti-hediye",
    updated: "2026-11-08",
    title: "1000 TL altı hediye fikirleri",
    metaTitle: "1000 TL Altı Hediye Fikirleri: Bütçe Dostu Ama Özel",
    metaDescription:
      "1000 TL altı hediye önerileri: sevgiliye, arkadaşa, anneye ve iş arkadaşına alınabilecek kullanışlı, kişiye özel ve bütçe dostu hediyeler.",
    emoji: "💸",
    intro: [
      "Bin liranın altında da gerçekten kullanılacak, düşünülmüş hediyeler bulmak mümkün. Kişiye özel ürünler, kaliteli küçük aksesuarlar ve deneyim hediyeleri bu bütçede en çok tercih edilenler.",
      "Listede 500 TL altı ve 500-1.500 TL aralığındaki fikirler var. İkinci gruptaki ürünlerde marka ve modele göre 1.000 TL altında seçenekler de bulunur; mağazalarda fiyat filtresiyle daraltmanı öneririz.",
    ],
    tips: [
      "Mağaza sayfalarında fiyata göre sıralama ve filtreleme kullanarak bütçene uyan modelleri bul.",
      "İki küçük hediyeyi bir tema altında birleştirmek, tek bir orta fiyatlı hediyeden daha etkileyici olabilir.",
      "Kampanya dönemlerinde (yılbaşı, Sevgililer Günü öncesi) fiyatlar değişebilir; birkaç mağazayı karşılaştır.",
    ],
    filter: { budgets: [1, 2] },
    faq: [
      {
        q: "1000 TL'ye ne hediye alınır?",
        a: "Kablosuz kulaklıkların uygun modelleri, termos bardak, kaliteli bir kartlık, kişiye özel takılar ya da bir atölye kaydı bu bütçede alınabilecek seçenekler arasında.",
      },
      {
        q: "Fiyatlar neden aralık olarak verilmiş?",
        a: "Aynı ürünün fiyatı markaya, modele ve mağazaya göre çok değişebiliyor. Bu yüzden yaklaşık aralıklar veriyoruz; güncel fiyatlar için mağaza butonlarını kullanabilirsin.",
      },
      {
        q: "Bu bütçede kişiye özel hediye bulunur mu?",
        a: "Evet. İsim kolye, koordinat bileklik, baskılı kupa ve yıldız haritası gibi kişiye özel hediyelerin çoğu bu bütçenin rahatça altında kalır.",
      },
    ],
  },
  {
    slug: "teknoloji-sevene-hediye",
    updated: "2026-11-08",
    title: "Teknoloji sevene hediye",
    metaTitle: "Teknoloji Sevene Hediye: Gerçekten İşe Yarayan Fikirler",
    metaDescription:
      "Teknoloji meraklısına ne hediye alınır? Kulaklık, akıllı saat, mekanik klavye, akıllı ev ürünleri ve daha fazlası. Her bütçeye teknoloji hediyeleri.",
    emoji: "🔌",
    intro: [
      "Teknoloji seven birine hediye almak hem kolay hem zordur: Ne sevdiği belli ama elinde zaten çok şey var. En iyi seçim genellikle sahip olduğu cihazları daha kullanışlı yapan aksesuarlar ya da henüz denemediği bir kategori.",
      "Aşağıda küçük aksesuarlardan büyük cihazlara kadar farklı bütçelere uygun fikirler var. Satın almadan önce uyumluluk bilgilerini kontrol etmeyi unutma.",
    ],
    tips: [
      "Telefon ve bilgisayarının marka ve modelini öğren; şarj, kablo ve aksesuarlarda uyumluluk çok önemli.",
      "Zaten sahip olduğu cihazların bir üst modelini almak yerine tamamlayıcı bir ürün seçmek genellikle daha isabetli.",
      "Garanti ve iade koşulları net olan mağazaları tercih et.",
    ],
    filter: { interests: ["teknoloji"] },
    faq: [
      {
        q: "Her şeyi olan teknoloji meraklısına ne alınır?",
        a: "Sahip olduğu cihazları tamamlayan ürünler (kablosuz şarj standı, laptop standı, akıllı takip cihazı) ya da henüz denemediği bir kategori (projeksiyon, drone, akıllı ev) iyi seçeneklerdir.",
      },
      {
        q: "Teknoloji hediyesinde uyumluluğu nasıl kontrol ederim?",
        a: "Ürün sayfasındaki uyumlu cihaz listesine bak ve kişinin telefon ile bilgisayar modelini önceden öğren. Emin değilsen değişim imkânı olan bir mağazadan al.",
      },
      {
        q: "Bütçe dostu teknoloji hediyeleri neler?",
        a: "Akıllı priz, LED gece lambası, bilek destekli mouse pad ve hızlı şarjlı powerbank gibi ürünler uygun fiyatlı ve günlük hayatta gerçekten kullanılan hediyelerdir.",
      },
    ],
  },
];

/** Her rehbere SSS'si bağlanmış hâli */
export const guides: Guide[] = baseGuides.map((g) => ({ ...g, faq: g.faq ?? guideFaqs[g.slug] }));

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}

const GUIDE_LIMIT = 24;

export function ideasForGuide(guide: Guide): GiftIdea[] {
  const f = guide.filter;
  const tagged = (i: GiftIdea) => f.occasions?.some((o) => i.occasions?.includes(o)) ?? false;
  const list = ideas.filter((i) => {
    if (f.recipients && !i.recipients.some((r) => f.recipients!.includes(r))) return false;
    if (f.budgets && !f.budgets.includes(i.budget)) return false;
    if (f.interests && !i.interests.some((x) => f.interests!.includes(x))) return false;
    if (f.only && f.occasions && !tagged(i)) return false;
    // Romantik olarak işaretlenmiş fikirler romantik olmayan alıcılara gösterilmez
    if (f.recipients && i.occasions?.length === 1 && i.occasions[0] === "romantik") {
      if (!f.recipients.some((r) => r === "kiz-arkadas" || r === "erkek-arkadas")) return false;
    }
    return true;
  });
  // Duruma özel fikirler önce, sonra daha hedefli (daha az alıcıya hitap eden) fikirler
  return [...list]
    .sort((a, b) => Number(tagged(b)) - Number(tagged(a)) || a.recipients.length - b.recipients.length)
    .slice(0, GUIDE_LIMIT);
}

export type FinderQuery = { recipient?: Recipient; budget?: Budget; interests: Interest[] };

/** Hediye bulucu: alıcı ve bütçe zorunlu filtre, ilgi alanları sıralama ölçütü. */
export function findIdeas(q: FinderQuery): GiftIdea[] {
  const romantic = q.recipient === "kiz-arkadas" || q.recipient === "erkek-arkadas";
  return ideas
    .filter((i) => (q.recipient ? i.recipients.includes(q.recipient) : true))
    .filter((i) => (q.budget ? i.budget === q.budget : true))
    .filter((i) => romantic || !(i.occasions?.length === 1 && i.occasions[0] === "romantik"))
    .map((i) => ({ i, score: i.interests.filter((x) => q.interests.includes(x)).length }))
    .filter(({ score }) => q.interests.length === 0 || score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ i }) => i);
}
