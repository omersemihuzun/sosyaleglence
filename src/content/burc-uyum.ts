import { burclar, type Burc, type Element, type Nitelik } from "./burclar";

/**
 * 78 burç çifti (aynı burç dahil) için uyum içeriği.
 *
 * Metinler elle yazılmış parçalardan kurulur: her burcun kendi aşk/arkadaşlık tarzı, iki burcun
 * element ve nitelik kombinasyonu ve aralarındaki geleneksel astrolojik açı. Böylece her çiftin
 * metni o iki burca özgü olur. Puanlar geleneksel kurala göre: üçgen (aynı element) en yüksek,
 * sekstil yüksek, karşıtlık çekici ama dengeli, kare ve kinkunks zorlu.
 */

export type Aci = "kavusum" | "yarim-sekstil" | "sekstil" | "kare" | "ucgen" | "kinkunks" | "karsit";

export type UyumCift = {
  slug: string;
  a: string;
  b: string;
  puan: number;
  baslik: string;
  aci: Aci;
  aciAdi: string;
  ask: string;
  arkadaslik: string;
  guclu: [string, string];
  zorluk: [string, string];
};

const ACI_ADI: Record<Aci, string> = {
  kavusum: "Kavuşum (aynı burç)",
  "yarim-sekstil": "Yarım sekstil (komşu burçlar)",
  sekstil: "Sekstil",
  kare: "Kare",
  ucgen: "Üçgen (aynı element)",
  kinkunks: "Kinkunks",
  karsit: "Karşıt burçlar",
};

const ACI_BY_DISTANCE: Aci[] = ["kavusum", "yarim-sekstil", "sekstil", "kare", "ucgen", "kinkunks", "karsit"];

const BASE: Record<Aci, number> = {
  kavusum: 76,
  "yarim-sekstil": 52,
  sekstil: 81,
  kare: 43,
  ucgen: 90,
  kinkunks: 47,
  karsit: 67,
};

const ELEMENT_SAME_BONUS: Record<Element, number> = { Ateş: 4, Toprak: 1, Hava: -1, Su: 3 };

/** Element ikilisinin dinamiği. Anahtar: alfabetik sıralı "A-B". */
const ELEMENT_CUMLE: Record<string, string> = {
  "Ateş-Ateş": "İkisi de ateş: birlikte her şey daha hızlı, daha yüksek sesli ve daha eğlenceli.",
  "Ateş-Hava": "Hava ateşi besler: biri fikri ortaya atar, diğeri onu alevlendirir.",
  "Ateş-Toprak": "Ateş hızlı, toprak sağlamdır: biri koşmak, diğeri adım adım yürümek ister.",
  "Ateş-Su": "Ateşle su buhar çıkarır: tutku yüksektir ama duyguları ifade etme biçimleri çok farklıdır.",
  "Hava-Hava": "İki hava burcu: bitmeyen sohbetler, ortak fikirler ve bazen yere pek basmayan planlar.",
  "Hava-Toprak": "Hava hayal eder, toprak inşa eder; ama biri değişimi, diğeri düzeni sever.",
  "Hava-Su": "Hava düşünür, su hisseder: biri mantıkla, diğeri kalbiyle konuşur.",
  "Toprak-Toprak": "İki toprak burcu: güvenli, planlı ve sağlam; ama bazen fazla tahmin edilebilir.",
  "Su-Toprak": "Su toprağı besler: duygusal derinlik ile somut güven birbirini tamamlar.",
  "Su-Su": "İki su burcu: söze gerek kalmadan anlaşan, derin ve sezgisel bir bağ.",
};

const NITELIK_CUMLE: Record<string, string> = {
  "Öncü-Öncü": "İkisi de öncü burç: ikisi de yön vermek ister, kimin direksiyona geçeceği zaman zaman tartışma konusu olur.",
  "Sabit-Sabit": "İkisi de sabit burç: sadakat çok yüksektir, ama iki inatçı karşı karşıya geldiğinde geri adım atmak zorlaşır.",
  "Değişken-Değişken": "İkisi de değişken burç: esnek ve uyumludurlar, ama ikisinin birden kararsız kaldığı anlar olur.",
  "Öncü-Sabit": "Biri başlatır, diğeri sürdürür: doğru kullanıldığında çok verimli bir ikili.",
  "Değişken-Öncü": "Biri yön verir, diğeri uyum sağlar; bu günlük hayatı epey kolaylaştırır.",
  "Değişken-Sabit": "Biri yerinde sağlam durur, diğeri akışa uyar; denge ile esneklik bir araya gelir.",
};

const key = (x: string, y: string) => [x, y].sort((p, q) => p.localeCompare(q, "tr")).join("-");
const pick = <T,>(list: T[], h: number) => list[h % list.length];

const BASLIK: Record<Aci, string[]> = {
  kavusum: ["Aynaya bakmak gibi", "Birbirini en iyi anlayan ikili", "Aynı ritimde iki kalp"],
  "yarim-sekstil": ["Komşu ama farklı", "Öğretici bir ilişki", "Yavaş yavaş ısınan bir bağ"],
  sekstil: ["Birbirini besleyen ikili", "Keyifli ve dengeli bir uyum", "Destekleyici bir ortaklık"],
  kare: ["Çekim var, sürtüşme de", "Emek isteyen bir tutku", "Kıvılcımlı ama zorlu"],
  ucgen: ["Doğal bir uyum", "Aynı dili konuşan iki ruh", "Kolay akan bir bağ"],
  kinkunks: ["Farklı frekanslar", "Sürprizlerle dolu bir eşleşme", "Uyum için çaba gerekir"],
  karsit: ["Zıtlar birbirini çeker", "Birbirinin aynası", "Tamamlayıcı karşıtlar"],
};

/** Çok aranan çiftler için elle yazılmış başlıklar. Anahtar: kanonik slug. */
const OZEL_BASLIK: Record<string, string> = {
  "koc-ve-aslan": "İki lider, tek sahne",
  "koc-ve-terazi": "Cesaret ile zarafetin dansı",
  "boga-ve-akrep": "Sarsılmaz bir tutku",
  "boga-ve-basak": "Sağlam temeller",
  "ikizler-ve-yay": "Bitmeyen bir yolculuk",
  "ikizler-ve-kova": "Zihinlerin buluşması",
  "yengec-ve-akrep": "Derin suların bağı",
  "yengec-ve-oglak": "Yuva ile kale",
  "aslan-ve-kova": "Sahne ışığı ile özgür ruh",
  "aslan-ve-yay": "Bitmeyen bir şenlik",
  "basak-ve-balik": "Gerçekçi ile hayalperest",
  "terazi-ve-kova": "Fikirlerin ve idealin uyumu",
  "akrep-ve-balik": "Ruh eşi enerjisi",
  "oglak-ve-boga": "Birlikte inşa eden ikili",
  "koc-ve-yengec": "Hız ile hassasiyet",
  "aslan-ve-akrep": "İki güçlü irade",
};

function aspectTexts(aci: Aci, A: Burc, B: Burc, h: number) {
  const ask: Record<Aci, string[]> = {
    kavusum: [
      `İki ${A.ad} bir araya geldiğinde ilişkinin ortasında aynı ihtiyaç durur: ${A.ister}. Birbirlerini çok iyi anlarlar, ama ${A.gen} ${A.zaaf} bu ilişkide iki katına çıkar.`,
      `Aynı burçtan iki kişi birbirine ayna tutar. ${A.ad} için bu hem çok rahatlatıcı hem de zaman zaman yorucudur; çünkü karşısındaki de tam olarak aynı şeyi ister: ${A.ister}.`,
    ],
    "yarim-sekstil": [
      `Yan yana iki burç olarak birbirlerine hem tanıdık hem yabancıdırlar. ${A.ad} ${A.ister} ararken ${B.ad} ${B.ister} bekler; bu farkı merakla karşılarlarsa birbirlerinden çok şey öğrenirler.`,
      `${A.ad} ile ${B.ad} arasındaki çekim yavaş gelişir. ${A.ad} ilişkiye ${A.verir} getirir, ${B.ad} ise ${B.verir}; ama ikisinin öncelikleri farklı olduğu için birbirini tanımak zaman alır.`,
    ],
    sekstil: [
      `${A.ad} ilişkiye ${A.verir} katarken ${B.ad} ${B.verir} getirir. İkisi de karşısındakine nefes alacak alan bırakır, bu yüzden ilişki zorlamadan büyür.`,
      `Bu ikili birbirini doğal olarak destekler: ${B.ad}, ${A.gen} aradığı ${A.ister} ortamını kolayca sağlar; ${A.ad} da ${B.gen} ihtiyaç duyduğu ${B.ister} hissini verir.`,
    ],
    kare: [
      `Çekim güçlüdür ama ${A.ad} ${A.ister} beklerken ${B.ad} ${B.ister} peşindedir. Bu farkı konuşmadan geçiştirmek kırgınlık biriktirir; açıkça konuşmak ise ilişkiyi şaşırtıcı derecede güçlendirir.`,
      `${A.ad} ile ${B.ad} arasında kıvılcım hiç eksik olmaz, ama tartışma da eksik olmaz. İkisi de kendi doğrusunda ısrar ettiğinde ilişki yorulur; birbirinin farklılığını kabul ettiklerinde ise çok öğretici bir aşk yaşarlar.`,
    ],
    ucgen: [
      `${A.ad} ilişkiye ${A.verir}, ${B.ad} ise ${B.verir} getirir ve bunlar aynı elementin iki farklı tonu gibidir. İkisi de karşısındakinin ne istediğini sezgiyle anlar, bu yüzden çok az şey açıklanmak zorunda kalır.`,
      `Aynı elementi paylaşan bu iki burç arasında ilk günden tanıdık bir his vardır. ${A.ad} ${A.ister} istediğinde ${B.ad} bunu zaten fark etmiştir; ${B.gen} ${B.ister} ihtiyacı da ${A.dat} doğal gelir.`,
    ],
    kinkunks: [
      `Bu çift sık sık farklı dillerde konuşuyormuş gibi hisseder. ${A.ad} ilişkiye ${A.verir} getirir, ama ${B.ad} öncelikle ${B.ister} arar; uyum için iki tarafın da bilinçli çaba göstermesi gerekir.`,
      `${A.ad} ile ${B.ad} arasındaki çekim çoğu zaman beklenmediktir. Birbirlerinin ihtiyaçlarını tahmin etmekte zorlanırlar; ${A.ad} ${A.ister}, ${B.ad} ise ${B.ister} ister. Sabırla öğrenirlerse sıra dışı bir ilişki kurarlar.`,
    ],
    karsit: [
      `Zıt kutuplar gibi birbirini çekerler: ${A.ad} ilişkiye ${A.verir} getirir, ${B.ad} ise ${B.verir}. Biri diğerinde kendinde eksik olanı görür; denge kurulursa çok güçlü bir ikili olurlar.`,
      `Zodyakta karşı karşıya duran bu iki burç arasında güçlü bir manyetizma vardır. ${A.ad} ${A.ister} isterken ${B.ad} ${B.ister} arar; bu iki ihtiyacı dengelemek ilişkinin hem sınavı hem büyüsüdür.`,
    ],
  };
  const arkadas: Record<Aci, string[]> = {
    kavusum: [
      "Arkadaş olarak birbirlerini tek bakışta anlarlar. Ama ikisi aynı konuda inat ettiğinde araya girecek üçüncü bir arkadaş gerekir.",
      "Bu dostlukta açıklamaya gerek yoktur; espriler, tepkiler, hatta sinirlendikleri şeyler bile aynıdır.",
    ],
    "yarim-sekstil": [
      "Arkadaşlıkta birbirlerini tamamlayan küçük farkları keşfettikçe bağları güçlenir.",
      "İlk başta \"Hiç benzemiyoruz\" derler, birkaç yıl sonra birbirlerinin en sağlam dostu olurlar.",
    ],
    sekstil: [
      "Arkadaşlıkta birbirlerini kolayca motive ederler; ortak projeler ve planlar bu ikiliye çok iyi gelir.",
      "Bu dostluk zahmetsizdir: uzun süre görüşmeseler bile kaldıkları yerden devam ederler.",
    ],
    kare: [
      "Arkadaşlıkta tartışmalar kaçınılmazdır ama bu tartışmalar ikisini de geliştirir, yeter ki kırıcı olmasın.",
      "Bu dostluk bir antrenman gibidir: birbirlerini zorlar, sınar ve sonunda daha güçlü hâle getirirler.",
    ],
    ucgen: [
      "Arkadaş olarak sanki yıllardır tanışıyormuş gibi hissederler; ortak bir ritimleri vardır.",
      "Bu dostluk hayat boyu sürecek türdendir: birbirlerinin sevincine de derdine de ilk koşan onlardır.",
    ],
    kinkunks: [
      "Arkadaşlıkta ortak alan bulmak zaman alır, ama bulduklarında beklenmedik derecede sağlam bir dostluk çıkar.",
      "Bu dostlukta sık sık birbirlerini şaşırtırlar; biri diğerine hiç aklına gelmeyecek bir bakış açısı kazandırır.",
    ],
    karsit: [
      "Arkadaş olarak birbirlerinin kör noktalarını görürler; dürüst bir ayna gibidirler.",
      "Bu dostlukta biri gaza basar, diğeri frene; ama birlikte çok daha dengeli kararlar verirler.",
    ],
  };
  const guclu: Record<Aci, string[]> = {
    kavusum: ["Birbirini çok iyi anlama", "Ortak değerler ve alışkanlıklar"],
    "yarim-sekstil": ["Birbirinden öğrenmeye açıklık", "Zamanla derinleşen güven"],
    sekstil: ["Zahmetsiz iletişim", "Birbirini destekleme"],
    kare: ["Yüksek çekim ve tutku", "Birbirini geliştirme"],
    ucgen: ["Doğal uyum ve anlayış", "Ortak hayat ritmi"],
    kinkunks: ["Birbirine yeni bakış açısı kazandırma", "Sıra dışı bir çekim"],
    karsit: ["Güçlü manyetizma", "Birbirini tamamlama"],
  };
  const zorluk: Record<Aci, string[]> = {
    kavusum: ["Aynı zaafların iki katına çıkması", "Rekabet ya da monotonluk riski"],
    "yarim-sekstil": ["Önceliklerin farklı olması", "Isınmanın zaman alması"],
    sekstil: ["Rahatlığın tembelliğe dönüşmesi", "Zor konuları erteleme"],
    kare: ["Sık tartışma", "Kimin haklı olduğu üzerine inat"],
    ucgen: ["Fazla rahatlıktan doğan durağanlık", "Aynı kör noktaları paylaşma"],
    kinkunks: ["İhtiyaçları yanlış anlama", "Sürekli ayar gerektirmesi"],
    karsit: ["Uçlar arasında gidip gelme", "Birbirini değiştirmeye çalışma"],
  };
  return {
    ask: pick(ask[aci], h),
    arkadas: pick(arkadas[aci], h + 1),
    guclu: pick(guclu[aci], h),
    zorluk: pick(zorluk[aci], h + 1),
  };
}

function nitelikKey(a: Nitelik, b: Nitelik) {
  return [a, b].sort((p, q) => p.localeCompare(q, "tr")).join("-");
}

export function ciftSlug(a: string, b: string) {
  return `${a}-ve-${b}`;
}

function build(): UyumCift[] {
  const out: UyumCift[] = [];
  for (let i = 0; i < burclar.length; i++) {
    for (let j = i; j < burclar.length; j++) {
      const A = burclar[i];
      const B = burclar[j];
      const d = Math.min(j - i, 12 - (j - i));
      const aci = ACI_BY_DISTANCE[d];
      const h = i * 7 + j * 13;

      let puan = BASE[aci];
      if (aci === "kavusum") puan += ELEMENT_SAME_BONUS[A.element];
      if (A.nitelik === "Sabit" && B.nitelik === "Sabit" && aci !== "kavusum") puan -= 4;
      if (A.nitelik === "Değişken" && B.nitelik === "Değişken") puan += 3;
      if (A.gezegen === B.gezegen && aci !== "kavusum") puan += 5;
      puan += ((i * 5 + j * 3) % 7) - 3; // çiftler arası küçük, sabit fark
      puan = Math.max(18, Math.min(97, puan));

      const slug = ciftSlug(A.slug, B.slug);
      const t = aspectTexts(aci, A, B, h);
      const sameSign = i === j;

      const askGiris = sameSign
        ? `${A.ad} ${A.askta}. `
        : `${A.ad} ${A.askta}, ${B.ad} ise ${B.askta}. `;
      const arkadasGiris = sameSign
        ? `${A.ad} ${A.arkadaslikta}; iki ${A.ad} bir araya geldiğinde bu iki katına çıkar. `
        : `${A.ad} ${A.arkadaslikta}; ${B.ad} ise ${B.arkadaslikta}. `;

      out.push({
        slug,
        a: A.slug,
        b: B.slug,
        puan,
        baslik: OZEL_BASLIK[slug] ?? (sameSign && A.element === "Ateş" ? "İki kat ateş" : pick(BASLIK[aci], h)),
        aci,
        aciAdi: ACI_ADI[aci],
        ask: `${askGiris}${ELEMENT_CUMLE[key(A.element, B.element)]} ${t.ask}`,
        arkadaslik: `${arkadasGiris}${NITELIK_CUMLE[nitelikKey(A.nitelik, B.nitelik)]} ${t.arkadas}`,
        guclu: [
          t.guclu,
          sameSign ? `İki kat ${A.verir}` : `${A.ad} tarafında ${A.verir}, ${B.ad} tarafında ${B.verir}`,
        ],
        zorluk: [
          t.zorluk,
          sameSign ? `${A.gen} ${A.zaaf} iki katına çıkabilir` : `${A.gen} ${A.zaaf} ile ${B.gen} ${B.zaaf} çatışabilir`,
        ],
      });
    }
  }
  return out;
}

export const uyumlar: UyumCift[] = build();

/** Sıra fark etmeksizin iki burcun uyumu. */
export function getUyum(a: string, b: string): UyumCift | undefined {
  return uyumlar.find((u) => (u.a === a && u.b === b) || (u.a === b && u.b === a));
}

/** "koc-ve-aslan" ya da ters sırası "aslan-ve-koc": çift ve kanonik olup olmadığı. */
export function parseCiftSlug(slug: string): { uyum: UyumCift; kanonik: boolean } | undefined {
  const m = /^([a-z]+)-ve-([a-z]+)$/.exec(slug);
  if (!m) return undefined;
  const uyum = getUyum(m[1], m[2]);
  if (!uyum) return undefined;
  return { uyum, kanonik: uyum.slug === slug };
}

export function uyumEtiketi(puan: number): string {
  if (puan >= 85) return "Çok yüksek uyum";
  if (puan >= 70) return "Yüksek uyum";
  if (puan >= 55) return "Orta uyum";
  if (puan >= 40) return "Zorlu uyum";
  return "Çok zorlu uyum";
}

// ——— SEO metinleri (sayfalar ve scripts/seo-kontrol.ts aynı fonksiyonları kullanır)
const SUFFIX = " | Sosyal Eğlence";

export const BURCLAR_TITLE = `Burçlar ve Burç Uyumu Hesaplama${SUFFIX}`;
export const BURCLAR_DESC =
  "12 burcun özellikleri, aşkta ve arkadaşlıkta nasıl oldukları. İki burç seç, burç uyumunu ve ilişkinizin güçlü yanlarını hemen gör.";

export function burcTitle(b: Burc) {
  return `${b.ad} Burcu Özellikleri ve Uyumu${SUFFIX}`;
}

export function burcDescription(b: Burc) {
  return `${b.ad} burcu (${b.tarih}): ${b.ozet} Aşkta nasıl, hangi burçlarla uyumlu? Tüm ${b.ad} uyumları burada.`;
}

export function ciftTitle(A: Burc, B: Burc) {
  return `${A.ad} ve ${B.ad} Burç Uyumu${SUFFIX}`;
}

export function ciftDescription(A: Burc, B: Burc, u: UyumCift) {
  return `${A.ad} ve ${B.ad} uyumu %${u.puan}: ${u.baslik}. Aşkta ve arkadaşlıkta güçlü yanlarınız, zorluklarınız ve ilişki ipuçları.`;
}
