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
        { text: "Ben yazarım, \"Dün çok güzeldi\" derim.", scores: {} },
        { text: "Bir şeyi yanlış mı yaptım diye dünkü konuşmaları kafamda tekrar oynatırım.", scores: { kaygi: 3 } },
        { text: "Rahatlarım açıkçası. Çok hızlı gitmesin.", scores: { kacinma: 3 } },
        { text: "Önce o yazsın diye beklerim ama bekledikçe gerilirim.", scores: { kaygi: 2, kacinma: 1 } },
      ],
    },
    {
      text: "Sevgilin \"Seninle bir konuyu konuşmamız lazım\" diye yazdı ve akşama kadar ayrıntı vermedi.",
      options: [
        { text: "Gün boyu aklım orada kalır. Ayrılık mı, başka biri mi?", scores: { kaygi: 3 } },
        { text: "\"Şimdi söyle\" diye ısrar ederim, bekleyemem.", scores: { kaygi: 2 } },
        { text: "Konuşuruz bakalım deyip günüme devam ederim.", scores: {} },
        { text: "Ciddi bir konuşma olacak diye içimden kaçmak gelir, akşamı ertelemeye çalışırım.", scores: { kacinma: 3 } },
      ],
    },
    {
      text: "Altı aylık sevgilin \"Anahtarımı sende bıraksam mı, sık geliyorum zaten\" dedi.",
      options: [
        { text: "Sevinirim, bu güzel bir adım.", scores: {} },
        { text: "Mantıklı ama alanımın daralacağını hissederim.", scores: { kacinma: 2 } },
        { text: "\"Henüz erken değil mi?\" deyip konuyu kapatırım.", scores: { kacinma: 3 } },
        { text: "Çok sevinirim. Bu, beni bırakmayacağı anlamına gelir.", scores: { kaygi: 2 } },
      ],
    },
    {
      text: "Kötü bir gün geçirdin ve gerçekten dertlisin.",
      options: [
        { text: "Sevgilimi arar, anlatırım.", scores: {} },
        { text: "Kendi başıma hallederim. Başkasına yük olmayı sevmem.", scores: { kacinma: 3 } },
        { text: "Anlatırım ama yeterince ilgilenmezse bu sefer de ona kırılırım.", scores: { kaygi: 3 } },
        { text: "Söylemem, ama fark etmesini beklerim.", scores: { kaygi: 1, kacinma: 2 } },
      ],
    },
    {
      text: "Sevgilin bir haftalığına iş için şehir dışına gidiyor.",
      options: [
        { text: "Özlerim ama kendime vakit ayırırım, güzel bir hafta olur.", scores: {} },
        { text: "Açıkçası biraz nefes alırım.", scores: { kacinma: 2 } },
        { text: "Her akşam görüntülü konuşalım isterim, yoksa içim rahat etmez.", scores: { kaygi: 3 } },
        { text: "Orada kimlerle olacağını, ne yapacağını düşünür dururum.", scores: { kaygi: 2, kacinma: 1 } },
      ],
    },
    {
      text: "Bir tartışmanın ortasındasınız ve ortam gerildi.",
      options: [
        { text: "Hemen çözmek isterim. Konuşmadan uyuyamam.", scores: { kaygi: 2 } },
        { text: "Odadan çıkarım. Kafamı toplamam için yalnız kalmam lazım.", scores: { kacinma: 2 } },
        { text: "Mola isterim ama ne zaman geri döneceğimizi de söylerim.", scores: {} },
        { text: "Bir yandan bağırmak, bir yandan da gidip her şeyi bırakmak isterim.", scores: { kaygi: 2, kacinma: 2 } },
      ],
    },
    {
      text: "Sevgilin sana ilk kez \"Seni seviyorum\" dedi. Sen henüz o noktada değilsin.",
      options: [
        { text: "Dürüstçe \"Ben de oraya doğru gidiyorum\" derim.", scores: {} },
        { text: "Paniklerim, bir sonraki buluşmayı bahaneyle ertelerim.", scores: { kacinma: 3 } },
        { text: "Kaybetmemek için ben de seni seviyorum derim.", scores: { kaygi: 3 } },
        { text: "Gülümseyip konuyu değiştiririm.", scores: { kacinma: 2 } },
      ],
    },
    {
      text: "Sevgilin arkadaşlarıyla çok eğlenceli bir gece geçirmiş, sana pek yazmamış.",
      options: [
        { text: "İyi ki eğlenmiş. Yarın anlatır.", scores: {} },
        { text: "Bensiz bu kadar mutlu olması içimi biraz burkar.", scores: { kaygi: 3 } },
        { text: "Fark etmem bile, ben de kendi işimdeyimdir.", scores: { kacinma: 2 } },
        { text: "Ertesi gün biraz mesafeli dururum, ne hissettiğini o da görsün.", scores: { kaygi: 2, kacinma: 1 } },
      ],
    },
    {
      text: "İlişkiniz çok iyi gidiyor. Her şey yolunda. Bu durumda içinden ne geçer?",
      options: [
        { text: "Keyfini çıkarırım.", scores: {} },
        { text: "\"Bu kadar iyi gitmesi normal mi, bir şey olacak\" diye beklerim.", scores: { kaygi: 3 } },
        { text: "Bir süre sonra sıkılırım, kusur aramaya başlarım.", scores: { kacinma: 3 } },
        { text: "Hem mutlu olurum hem de bir gün biterse diye kendimi biraz geri tutarım.", scores: { kaygi: 1, kacinma: 2 } },
      ],
    },
    {
      text: "Sevgilin geçmişindeki zor bir şeyi anlatıp senin de açılmanı istiyor.",
      options: [
        { text: "Ben de anlatırım. Bu bizi yakınlaştırır.", scores: {} },
        { text: "Anlatırım ama sonra bunu bana karşı kullanır mı diye endişelenirim.", scores: { kaygi: 2 } },
        { text: "Geçiştiririm. Geçmişimi konuşmayı sevmem.", scores: { kacinma: 3 } },
        { text: "Onu dinlerim ama kendi tarafımı yüzeysel tutarım.", scores: { kacinma: 2 } },
      ],
    },
    {
      text: "Eski bir ilişkini düşündüğünde en çok ne hatırlıyorsun?",
      options: [
        { text: "İyi ve kötü taraflarıyla bir dönemdi, ondan bir şeyler öğrendim.", scores: {} },
        { text: "Ne kadar uğraşsam da yetmediği hissini.", scores: { kaygi: 3 } },
        { text: "Bir noktada boğulduğumu ve çıkmak istediğimi.", scores: { kacinma: 3 } },
        { text: "Hem gitmesinden korkup hem de onu ittiğimi.", scores: { kaygi: 2, kacinma: 2 } },
      ],
    },
    {
      text: "Sevgilin \"Bu hafta sonu ailemle tanışmak ister misin?\" diye soruyor.",
      options: [
        { text: "Heyecanlanırım, isterim.", scores: {} },
        { text: "Çok sevinirim, demek ki ciddi düşünüyor.", scores: { kaygi: 1 } },
        { text: "Geri adım atmak isterim, \"Biraz daha bekleyelim\" derim.", scores: { kacinma: 3 } },
        { text: "Kabul ederim ama beni beğenmezlerse diye günlerce düşünürüm.", scores: { kaygi: 3 } },
      ],
    },
    {
      text: "Sevgilin mesajına kısa ve emojisiz cevap verdi: \"tamam\".",
      options: [
        { text: "Meşguldür, takılmam.", scores: {} },
        { text: "Bana kızdı mı diye mesajı on kere okurum.", scores: { kaygi: 3 } },
        { text: "Ben de kısa cevap veririm, sorun yok.", scores: { kacinma: 1 } },
        { text: "\"Bir şey mi oldu?\" diye sorar, cevabına göre rahatlarım.", scores: { kaygi: 1 } },
      ],
    },
    {
      text: "Çok sevdiğin biriyle geçirdiğin uzun bir tatilin son günü.",
      options: [
        { text: "Güzel bir tatildi, eve dönmek de güzel olacak.", scores: {} },
        { text: "Kendi evime, kendi düzenime dönmeyi dört gözle beklerim.", scores: { kacinma: 2 } },
        { text: "Döndüğümüzde bu yakınlık kaybolacak diye hüzünlenirim.", scores: { kaygi: 2 } },
        { text: "Son günler birbirimize biraz fazla geldik gibi hissederim.", scores: { kacinma: 2, kaygi: 1 } },
      ],
    },
    {
      text: "Sevgilin \"Bana daha çok açılmanı isterdim\" dedi.",
      options: [
        { text: "Haklı olabilir, neyi kastettiğini sorarım.", scores: {} },
        { text: "Baskı hissederim, bir süre geri çekilirim.", scores: { kacinma: 3 } },
        { text: "Bundan sonra ona her şeyimi anlatmaya çalışırım, yeter ki memnun olsun.", scores: { kaygi: 2 } },
        { text: "\"Ben zaten böyleyim\" derim.", scores: { kacinma: 2 } },
      ],
    },
    {
      text: "Uzun süredir bekâr olduğunu düşün. Bu sana nasıl hissettirir?",
      options: [
        { text: "Hayatım dolu, doğru kişi gelirse gelir.", scores: {} },
        { text: "Özgürlüğüme fazla alıştım, birine yer açmak zor gelir.", scores: { kacinma: 3 } },
        { text: "Kimse beni gerçekten istemeyecek mi diye düşünürüm.", scores: { kaygi: 3 } },
        { text: "Hem birini isterim hem de biri yaklaşınca uzaklaşırım.", scores: { kaygi: 2, kacinma: 2 } },
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
        "İnsanların yaklaşık yarısı bu stile yakın. İyi haber şu: Güvenli bağlanan biri, kaygılı ya da kaçıngan bir partnerin de zamanla daha güvende hissetmesine yardımcı olabilir.",
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
      strengths: ["Derin bağ kuruyorsun ve çok sadıksın", "Partnerinin ruh halini hemen fark ediyorsun", "İlişkine emek vermekten kaçmıyorsun"],
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
        "Bu, sevmediğin anlamına gelmiyor. Muhtemelen bir noktada duygularını göstermenin karşılıksız kalacağını ya da seni zayıf göstereceğini öğrendin. Mesafe güvenli geliyor.",
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
