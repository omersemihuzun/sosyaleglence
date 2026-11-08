import type { Test } from "@/lib/types";

export const baglanma: Test = {
  slug: "baglanma-stili-testi",
  title: "İlişkide Bağlanma Stilin Ne?",
  summary: "Neden hep aynı tip insana çekiliyorsun? Cevap büyük ihtimalle bağlanma stilinde saklı.",
  intro:
    "Bağlanma stili, yakınlaştıkça ne hissettiğini ve uzaklaştıkça ne yaptığını belirler. Psikolojideki kaygı ve kaçınma eksenlerine dayanan 16 senaryoda sana en yakın tepkiyi seç.",
  emoji: "🧲",
  color: "#3B6FD9",
  category: "ilişki",
  metaDescription:
    "Bağlanma stili testi: güvenli, kaygılı, kaçıngan ya da korkulu-kaçıngan mısın? 16 gerçekçi ilişki senaryosuyla bağlanma stilini öğren.",
  dimensions: [
    { id: "kaygi", label: "Terk edilme kaygısı", low: "İçin rahat", high: "Sürekli güvence ararsın" },
    { id: "kacinma", label: "Yakınlıktan kaçınma", low: "Yakınlık sana iyi gelir", high: "Fazla yakınlık boğar" },
  ],
  questions: [
    {
      text: "Üçüncü buluşmanız harikaydı. Ertesi gün öğlene kadar ondan hiç mesaj gelmedi.",
      options: [
        { text: "Ben yazarım, \"Dün çok güzeldi\" derim; oyun oynamaya üşenirim.", scores: { kaygi: 1 } },
        { text: "Dünkü konuşmaları kafamda oynatır, soğuk görünmek için yazmam.", scores: { kaygi: 2, kacinma: 1 } },
        { text: "Rahatlarım açıkçası; çok hızlı gitmesin, ben de acele etmem.", scores: { kacinma: 2, kaygi: 1 } },
        { text: "Yazmam; zaten bir gün gidecekse şimdiden alışayım derim.", scores: { kaygi: 2, kacinma: 2 } },
      ],
    },
    {
      text: "Sevgilin \"Seninle bir konuyu konuşmamız lazım\" yazdı ve akşama kadar ayrıntı vermedi.",
      options: [
        { text: "Gün boyu aklım orada kalır; \"Şimdi söyle\" diye üstelerim.", scores: { kaygi: 3 } },
        { text: "En kötüsünü kurarım ama akşam o konuşmaya gitmek de istemem.", scores: { kaygi: 2, kacinma: 2 } },
        { text: "\"Tamam, akşam konuşuruz\" der, merak etsem de işime dönerim.", scores: { kaygi: 1, kacinma: 1 } },
        { text: "İçimden kaçmak gelir; akşamı bir bahaneyle ertelemeye çalışırım.", scores: { kacinma: 2, kaygi: 1 } },
      ],
    },
    {
      text: "Altı aylık sevgilin \"Anahtarımı sende bıraksam mı, sık geliyorum zaten\" dedi.",
      options: [
        { text: "Sevinirim; düzenimin biraz değişeceğini de baştan kabul ederim.", scores: {} },
        { text: "\"Henüz biraz erken değil mi?\" der, konuyu nazikçe kapatırım.", scores: { kacinma: 2, kaygi: 1 } },
        { text: "Hemen kabul ederim; beni bırakmayacağının işareti gibi gelir.", scores: { kaygi: 2 } },
        { text: "Kabul ederim ama bir gün geri isteyeceği anı şimdiden kurarım.", scores: { kaygi: 2, kacinma: 2 } },
      ],
    },
    {
      text: "Kötü bir gün geçirdin ve gerçekten dertlisin.",
      options: [
        { text: "Sevgilimi arar, anlatırım; dinlemesine ihtiyacım olduğunu söylerim.", scores: { kaygi: 1 } },
        { text: "Kendi başıma hallederim; birine yük olmayı hiç sevmem.", scores: { kacinma: 3, kaygi: 1 } },
        { text: "Anlatırım ama yeterince ilgilenmezse bu sefer ona kırılırım.", scores: { kaygi: 3, kacinma: 1 } },
        { text: "Söylemem ama yüzümden fark etmesini için için beklerim.", scores: { kaygi: 2, kacinma: 2 } },
      ],
    },
    {
      text: "Sevgilin bir haftalığına iş için şehir dışına gidiyor.",
      options: [
        { text: "Özlerim ama o haftayı kendime ayırırım; iyi de gelir.", scores: { kaygi: 1, kacinma: 1 } },
        { text: "Biraz nefes alırım; sonra da buna için için suçlu hissederim.", scores: { kacinma: 2, kaygi: 1 } },
        { text: "Her akşam görüntülü konuşalım isterim, yoksa içim rahat etmez.", scores: { kaygi: 3 } },
        { text: "Orada kimlerle olacağını düşünür ama sormaya çekinirim.", scores: { kaygi: 2, kacinma: 1 } },
      ],
    },
    {
      text: "Bir tartışmanın ortasındasınız ve ortam iyice gerildi.",
      options: [
        { text: "Hemen çözmek isterim; bu konu kapanmadan uyuyamam.", scores: { kaygi: 2 } },
        { text: "Odadan çıkarım; kafamı toplamak için yalnız kalmam lazım.", scores: { kacinma: 2 } },
        { text: "Mola isterim ama ne zaman döneceğimizi de söylerim.", scores: { kacinma: 1, kaygi: 1 } },
        { text: "Bir yanım bağırmak, bir yanım her şeyi bırakıp gitmek ister.", scores: { kaygi: 2, kacinma: 2 } },
      ],
    },
    {
      text: "Sevgilin sana ilk kez \"Seni seviyorum\" dedi. Sen henüz o noktada değilsin.",
      options: [
        { text: "Dürüstçe \"Ben de oraya doğru gidiyorum\" derim; kırılsa da.", scores: {} },
        { text: "Paniklerim; bir sonraki buluşmayı bir bahaneyle ertelerim.", scores: { kacinma: 3, kaygi: 1 } },
        { text: "Kaybetmemek için ben de hemen \"Seni seviyorum\" derim.", scores: { kaygi: 3 } },
        { text: "Gülümseyip sarılırım ve konuyu usulca başka yöne çekerim.", scores: { kacinma: 2, kaygi: 1 } },
      ],
    },
    {
      text: "Sevgilin arkadaşlarıyla çok eğlenceli bir gece geçirmiş, sana pek yazmamış.",
      options: [
        { text: "İyi ki eğlenmiş; yarın anlatır, ben de kendi akşamıma bakarım.", scores: {} },
        { text: "Bensiz bu kadar mutlu olması içimi burkar; ben de az yazarım.", scores: { kaygi: 3, kacinma: 1 } },
        { text: "Fark etmem bile; o gece ben de kendi işimdeyimdir.", scores: { kacinma: 2 } },
        { text: "Ertesi gün biraz mesafeli dururum; ne hissettiğimi o da görsün.", scores: { kaygi: 2, kacinma: 1 } },
      ],
    },
    {
      text: "İlişkiniz uzun zamandır çok iyi gidiyor. Bu durumda içinden ne geçer?",
      options: [
        { text: "Keyfini çıkarırım; her şeyin yolunda olması bana yeter.", scores: {} },
        { text: "\"Bu kadar iyi gitmesi normal mi, bir şey olacak\" diye beklerim.", scores: { kaygi: 3 } },
        { text: "Bir süre sonra içim daralır, küçük kusurlar aramaya başlarım.", scores: { kacinma: 3, kaygi: 1 } },
        { text: "Mutlu olurum ama bir gün biterse diye kendimi geri tutarım.", scores: { kaygi: 2, kacinma: 2 } },
      ],
    },
    {
      text: "Sevgilin geçmişindeki zor bir şeyi anlatıp senin de açılmanı istiyor.",
      options: [
        { text: "Ben de anlatırım; sonrasında biraz çıplak hissetsem de.", scores: { kaygi: 1, kacinma: 1 } },
        { text: "Anlatırım ama bunu bir gün bana karşı kullanır mı diye düşünürüm.", scores: { kaygi: 2, kacinma: 1 } },
        { text: "Geçiştiririm; geçmişimi konuşmak bana hiç iyi gelmiyor.", scores: { kacinma: 3 } },
        { text: "Onu dikkatle dinlerim ama kendi tarafımı yüzeysel tutarım.", scores: { kacinma: 2, kaygi: 1 } },
      ],
    },
    {
      text: "Eski bir ilişkini düşündüğünde en çok ne hatırlıyorsun?",
      options: [
        { text: "İyi ve kötü yanlarıyla bir dönemdi; artık pek aklıma gelmiyor.", scores: {} },
        { text: "Ne kadar uğraşsam da yetmediğim hissi hâlâ içimde duruyor.", scores: { kaygi: 3 } },
        { text: "Bir noktada boğulduğumu ve çıkmak istediğimi hatırlarım.", scores: { kacinma: 3 } },
        { text: "Hem gitmesinden korkup hem de onu ittiğimi hatırlarım.", scores: { kaygi: 2, kacinma: 2 } },
      ],
    },
    {
      text: "Üç aydır birliktesiniz. Sevgilin \"Bayramda ailemle tanışmak ister misin?\" diye soruyor.",
      options: [
        { text: "İsterim; biraz heyecanlansam da bunu doğal bir adım sayarım.", scores: {} },
        { text: "Sevinirim ama \"Ya ciddileşince biterse?\" diye geri çekilirim.", scores: { kaygi: 2, kacinma: 2 } },
        { text: "\"Biraz daha bekleyelim\" der, bayramı kendi aileme ayırırım.", scores: { kacinma: 3 } },
        { text: "Kabul ederim ama beni beğenmezlerse diye günlerce düşünürüm.", scores: { kaygi: 3 } },
      ],
    },
    {
      text: "Uzun bir mesajına sevgilin kısa ve emojisiz bir cevap verdi: \"tamam\".",
      options: [
        { text: "Meşguldür; tek kelimelik bir mesaja anlam yüklemem.", scores: {} },
        { text: "Bana kızdı mı diye o mesajı on kere okurum.", scores: { kaygi: 3 } },
        { text: "Ben de kısa cevap veririm; uzun yazışmalar beni yorar.", scores: { kacinma: 2 } },
        { text: "\"Bir şey mi oldu?\" diye sormak isterim ama yazıp silerim.", scores: { kaygi: 2, kacinma: 1 } },
      ],
    },
    {
      text: "Sevgilinle geçirdiğin uzun bir tatilin son günü.",
      options: [
        { text: "Güzel bir tatildi; özleyeceğim ama kendi düzenim de güzel.", scores: { kaygi: 1, kacinma: 1 } },
        { text: "Kendi evime, kendi düzenime dönmeyi dört gözle beklerim.", scores: { kacinma: 2 } },
        { text: "Döndüğümüzde bu yakınlık kaybolacak diye hüzünlenirim.", scores: { kaygi: 2 } },
        { text: "Son günlerde birbirimize fazla mı geldik diye düşünürüm.", scores: { kacinma: 2, kaygi: 1 } },
      ],
    },
    {
      text: "Sevgilin \"Bana daha çok açılmanı isterdim\" dedi.",
      options: [
        { text: "Neyi kastettiğini sorarım; ama biraz da savunmaya geçerim.", scores: { kacinma: 1, kaygi: 1 } },
        { text: "Baskı hissederim; bir süre farkında olmadan geri çekilirim.", scores: { kacinma: 3 } },
        { text: "Bundan sonra her şeyimi anlatırım, yeter ki memnun olsun.", scores: { kaygi: 3 } },
        { text: "\"Ben böyleyim\" derim ama içimden onu kaybetmekten korkarım.", scores: { kaygi: 2, kacinma: 2 } },
      ],
    },
    {
      text: "Uzun süredir bekâr olduğunu düşün. Bu sana nasıl hissettirir?",
      options: [
        { text: "Hayatım dolu; doğru kişi gelirse gelir, aramaya çıkmam.", scores: {} },
        { text: "Özgürlüğüme fazla alıştım; birine yer açmak hem zor hem ürkütücü.", scores: { kacinma: 3, kaygi: 1 } },
        { text: "Kimse beni gerçekten istemeyecek mi diye düşünürüm.", scores: { kaygi: 3 } },
        { text: "Birini isterim ama biri yaklaşınca farkında olmadan uzaklaşırım.", scores: { kaygi: 2, kacinma: 2 } },
      ],
    },
  ],
  results: [
    {
      id: "guvenli",
      name: "Güvenli Bağlanan",
      emoji: "🏡",
      tagline: "Yakın olmak da, biraz uzak durmak da sana iyi geliyor.",
      profile: { kaygi: 15, kacinma: 15 },
      color: "#2F7D6D",
      description: [
        "Yakınlık seni korkutmuyor, uzaklık da paniğe sokmuyor. Bir mesaj geç geldiğinde felaket senaryoları kurmuyorsun, ilişki ciddileştiğinde de kaçacak kapı aramıyorsun.",
        "Bu, hiç endişelenmediğin anlamına gelmiyor. Endişelendiğinde bunu söylemeyi biliyorsun. Tartışmaları bir tehdit olarak değil, çözülmesi gereken bir mesele olarak görüyorsun.",
        "Bu stil, sağlıklı ilişkilerin en sağlam zemini olarak görülür. İyi haber şu: Güvenli bağlanan biri, kaygılı ya da kaçıngan bir partnerin de zamanla daha güvende hissetmesine yardımcı olabilir.",
      ],
      strengths: ["İhtiyaçlarını açıkça söyleyebiliyorsun", "Tartışmalar ilişkini sarsmıyor", "Partnerine hem yakınlık hem alan tanıyorsun"],
      watchOut: ["Kaygılı ya da kaçıngan bir partnerin tepkilerini kişisel algılamamaya çalış", "Her şeyi çözebileceğine dair fazla iyimser olabilirsin"],
      bestMatch: "guvenli",
    },
    {
      id: "kaygili",
      name: "Kaygılı Bağlanan",
      emoji: "🌀",
      tagline: "Sevdikçe kaybetme korkun da büyüyor.",
      profile: { kaygi: 80, kacinma: 15 },
      color: "#D7102F",
      description: [
        "Çok sevebiliyorsun. Ama sevdikçe aklının bir köşesinde \"Ya giderse?\" sorusu dönüp duruyor. Kısa bir cevap, geç gelen bir mesaj ya da yorgun bir ses tonu, sende alarm zillerini çalabiliyor.",
        "Bu yüzden güvence arıyorsun: daha sık konuşmak, daha çok \"seni seviyorum\" duymak, nerede olduğunu bilmek. Bunlar yanlış ihtiyaçlar değil. Sadece kaygı yükseldiğinde ne kadar güvence alırsan al yetmiyormuş gibi geliyor.",
        "Kaygılı bağlananlar çoğu zaman kaçıngan birine çekilir, çünkü o tanıdık kovalama hissi aşk gibi gelir. Seni gerçekten sakinleştiren şey, tutarlı ve sözünü tutan biridir.",
      ],
      strengths: ["Derin bağ kuruyorsun ve çok sadıksın", "Partnerinin ruh hâlini hemen fark ediyorsun", "İlişkine emek vermekten kaçmıyorsun"],
      watchOut: ["Belirsizliği kötüye yorma eğilimin var", "Güvence için fazla mesaj ya da test etme davranışı", "Kaçıngan partnerlere çekilme döngüsü"],
      bestMatch: "guvenli",
    },
    {
      id: "kacingan",
      name: "Kaçıngan Bağlanan",
      emoji: "🏃",
      tagline: "Bağımsızlığın kalen, yakınlık biraz fazla geldiğinde kapıyı kapatırsın.",
      profile: { kaygi: 15, kacinma: 80 },
      color: "#3B6FD9",
      description: [
        "Kendi başına iyi idare ediyorsun ve bundan gurur duyuyorsun. İlişkiler güzel ama biri fazla yaklaştığında, fazla beklentiye girdiğinde ya da ciddi bir konuşma kapıya dayandığında içinden bir ses \"Çık\" diyor.",
        "Sevmediğinden değil. Muhtemelen bir noktada duygularını göstermenin karşılıksız kalacağını ya da seni zayıf göstereceğini öğrendin. Mesafe güvenli geliyor.",
        "Partnerlerin çoğu zaman \"Seni tam tanıyamıyorum\" der. Duvarı yıkman gerekmiyor. Bazen içeri birini almak, bir kapı aralamak yeterli.",
      ],
      strengths: ["Bağımsız ve kendine yetensin", "Krizlerde soğukkanlısın", "Partnerinin alanına saygı duyuyorsun"],
      watchOut: ["Yakınlık arttığında geri çekilme refleksi", "Duygularını paylaşmamak partnerini yalnız hissettirebilir", "Kusur aramaya başladığında bunun bir kaçış olup olmadığını sor"],
      bestMatch: "guvenli",
    },
    {
      id: "korkulu",
      name: "Korkulu-Kaçıngan",
      emoji: "🎢",
      tagline: "\"Gel\" ile \"git\" arasında gidip gelen bir kalp.",
      profile: { kaygi: 70, kacinma: 70 },
      color: "#6B2FA0",
      description: [
        "Yakınlık istiyorsun, hem de çok. Ama biri gerçekten yaklaştığında içinde bir şey kasılıyor ve geri çekiliyorsun. Uzaklaşınca bu sefer de kaybetme korkusu başlıyor. Bu dalgalanma en çok seni yoruyor.",
        "Bu stil genellikle sevginin ve incinmenin bir arada yaşandığı deneyimlerden doğar. Beynin hem bağ kurmak hem de kendini korumak istiyor ve ikisi aynı anda çalışıyor.",
        "Bunu bilmek bile çok şey değiştirir. Geri çekilme isteği geldiğinde \"Şu an korkuyorum\" diyebilmek, kaçmaktan ya da kavga çıkarmaktan çok daha iyi bir yol.",
      ],
      strengths: ["Duygusal derinliğin ve empatin çok güçlü", "İnsanların karmaşık hislerini anlayabiliyorsun", "Bir kez güvendiğinde çok bağlı oluyorsun"],
      watchOut: ["Yakınlaşma ve uzaklaşma döngüsü partnerinin kafasını karıştırabilir", "Kendini korumak için ilişkiyi baltalama eğilimi", "Destek almak, örneğin bir terapist, gerçekten fark yaratabilir"],
      bestMatch: "guvenli",
    },
  ],
};
