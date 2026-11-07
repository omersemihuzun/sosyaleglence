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
};

export const guides: Guide[] = [
  {
    slug: "sevgiliye-yilbasi-hediyesi",
    title: "Sevgiliye yılbaşı hediyesi",
    metaTitle: "Sevgiliye Yılbaşı Hediyesi: En Anlamlı Fikirler",
    metaDescription:
      "Sevgiliye yılbaşı hediyesi arıyorsan doğru yerdesin. Kişiye özel, romantik ve işe yarayan yılbaşı hediye fikirleri, her bütçeye uygun öneriler.",
    emoji: "🎄",
    intro: [
      "Yılbaşı hediyesi, sevgililer gününden farklı olarak hem romantik hem de kış aylarında gerçekten kullanılacak bir şey olabilir. En iyi hediyeler genelde bu ikisini birleştirir: bir battaniyenin yanına eklenmiş bir not ya da bir albümün içine saklanmış bir bilet.",
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
    title: "Sevgililer günü hediyesi",
    metaTitle: "Sevgililer Günü Hediyesi: 14 Şubat İçin Fikirler",
    metaDescription:
      "Sevgililer günü için anlamlı hediye fikirleri. Kişiye özel hediyeler, romantik deneyimler ve her bütçeye uygun 14 Şubat önerileri.",
    emoji: "❤️",
    intro: [
      "14 Şubat hediyesi pahalı olmak zorunda değil, ama düşünülmüş olmak zorunda. Kişiye özel bir poster, birlikte gidilecek bir atölye ya da \"Şu an aç\" mektupları, sıradan bir çiçek buketinden çok daha uzun süre hatırlanır.",
      "Aşağıda romantik olduğu kadar özgün olan fikirler var. Bütçene ve sevgilinin tarzına göre seçebilirsin.",
    ],
    tips: [
      "Sevgililer günü haftasında restoranlar dolar. Rezervasyonu en az bir hafta önceden yap.",
      "Kişiye özel ürünlerin üretim süresi uzayabilir, siparişi Şubat başında ver.",
      "Bir deneyim ve küçük bir somut hediye birleşimi genelde en iyi sonucu verir.",
    ],
    filter: { recipients: ["kiz-arkadas", "erkek-arkadas"], occasions: ["romantik"], only: true },
  },
  {
    slug: "yildonumu-hediyesi",
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
    title: "Anneye hediye",
    metaTitle: "Anneye Hediye: Anneler Günü ve Doğum Günü İçin Fikirler",
    metaDescription:
      "Anneye ne hediye alınır? Anneler günü ve doğum günü için kişiye özel, işe yarayan ve duygusal hediye önerileri.",
    emoji: "🌷",
    intro: [
      "Annelerin çoğu \"Bana bir şey alma\" der. Ama bu, onları en çok mutlu edecek şeyin düşünülmüş olmak olduğu anlamına gelir. Kendine almaya kıyamadığı şeyler (spa, iyi bir parfüm, kaliteli bir mutfak aleti) çoğu zaman en isabetli seçimdir.",
      "Duygusal hediyeler de anneler için çok değerli: aile fotoğraflarından bir albüm ya da torunların fotoğraflarını uzaktan yükleyebileceğin dijital bir çerçeve.",
    ],
    tips: [
      "Anneler günü mayısın ikinci pazarıdır. Çiçek ve kişiye özel ürün siparişlerini birkaç gün önceden ver.",
      "Ona birlikte zaman geçireceğiniz bir deneyim hediye etmek, uzun yıllar hatırlanan bir anı olur.",
    ],
    filter: { recipients: ["anne"], occasions: ["anneler-gunu"] },
  },
  {
    slug: "babaya-hediye",
    title: "Babaya hediye",
    metaTitle: "Babaya Hediye: Babalar Günü ve Doğum Günü İçin Fikirler",
    metaDescription:
      "Babaya ne hediye alınır? Babalar günü ve doğum günü için teknoloji, bakım, aksesuar ve kişiye özel hediye önerileri.",
    emoji: "👔",
    intro: [
      "Babalar genelde ihtiyacı olan şeyi kendisi alır ya da hiç almaz. Bu yüzden en iyi hediyeler, eskiyen bir şeyin kaliteli bir versiyonu (cüzdan, saat, termos) ya da hiç denemediği ama seveceği bir şeydir (masaj tabancası, dijital çerçeve).",
    ],
    tips: [
      "Babalar günü haziranın üçüncü pazarıdır.",
      "Teknolojiyle arası iyi değilse kurulumu kolay ürünler seç ya da kurulumu sen yap.",
    ],
    filter: { recipients: ["baba"], occasions: ["babalar-gunu"] },
  },
  {
    slug: "arkadasa-hediye",
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
];

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
