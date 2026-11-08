import type { Test } from "@/lib/types";

export const baskinlik: Test = {
  slug: "iliskide-kim-baskin-testi",
  title: "İlişkide Kim Baskın?",
  summary: "Restoranı kim seçiyor, kavgayı kim bitiriyor, son sözü kim söylüyor? Cevap düşündüğünden farklı olabilir.",
  intro:
    "Baskınlık her zaman yüksek sesle gelmez. Kimi açıkça yönetir, kimi sessizce yönlendirir, kimi hep geri adım atar, kimi her konuda tartışır. 15 sıradan ilişki anında gerçekte ne yaptığını seç.",
  emoji: "🧭",
  color: "#4C1D95",
  category: "ilişki",
  metaDescription:
    "İlişkide kim baskın testi: Kontrol, uyum, çatışma ve dolaylı yönlendirme eğilimini 15 gündelik ilişki senaryosuyla ölç. İlişkideki güç dengesini keşfet.",
  dimensions: [
    { id: "kontrol", label: "Açık kontrol", low: "Kararları paylaşırsın", high: "Direksiyon sende" },
    { id: "uyum", label: "Geri adım", low: "İsteğini söylersin", high: "Hep sen vazgeçersin" },
    { id: "catisma", label: "Tartışma", low: "Çatışmadan kaçınırsın", high: "Her konuyu tartışırsın" },
    { id: "yonlendirme", label: "Dolaylı yönlendirme", low: "Açık oynarsın", high: "İstediğini ona söyletirsin" },
  ],
  questions: [
    {
      text: "Akşam yemeği için nereye gideceğinize karar veriyorsunuz. İkiniz de açsınız.",
      options: [
        { text: "Mekânı ben seçer, rezervasyonu yaparım; açken tartışma çekilmez.", scores: { kontrol: 3 } },
        { text: "\"Sen seç\" derim; seçtiği yerin menüsüne biraz burun kıvırsam da.", scores: { uyum: 2, yonlendirme: 1 } },
        { text: "O bir yer söyler, ben neden olmayacağını anlatırım; sıra bana gelir.", scores: { catisma: 2, kontrol: 1 } },
        { text: "Üç seçenek sunarım; üçü de benim gitmek istediğim yerler.", scores: { yonlendirme: 2, kontrol: 1 } },
      ],
    },
    {
      text: "Sevgilin hafta sonu ailesini ziyaret etmeyi öneriyor. Senin planın başkaydı.",
      options: [
        { text: "\"Tamam, gideriz\" derim; kendi planımı sessizce ertelerim.", scores: { uyum: 3 } },
        { text: "\"Bu hafta olmaz, gelecek hafta\" derim ve tarihi takvime yazarım.", scores: { kontrol: 2, uyum: 1 } },
        { text: "Neden hep onun ailesine gittiğimizi masaya yatırırım.", scores: { catisma: 2, kontrol: 1 } },
        { text: "Kabul ederim ama yorgun olduğumu sık sık belli ederim; belki vazgeçer.", scores: { yonlendirme: 2, uyum: 1 } },
      ],
    },
    {
      text: "Birlikte ev için koltuk seçiyorsunuz. Zevkleriniz taban tabana zıt.",
      options: [
        { text: "Bu konuda benim gözüm daha iyi; sonunda benim seçtiğim alınır.", scores: { kontrol: 2, catisma: 1 } },
        { text: "Onun mutlu olması yeter; ama çalışma köşem bana kalsın.", scores: { uyum: 2, kontrol: 1 } },
        { text: "Mağazanın ortasında tartışırız; sonunda ikimizin de sevdiği çıkar.", scores: { catisma: 3 } },
        { text: "Onun seçtiğinin kusurlarını tek tek fark ettiririm; fikrini değiştirsin.", scores: { yonlendirme: 3 } },
      ],
    },
    {
      text: "Bir tartışmanın ortasındasınız ve bu sefer gerçekten sen haklısın.",
      options: [
        { text: "Kabul edene kadar konuyu kapatmam; haklıyken geri adım atmam.", scores: { catisma: 2, kontrol: 1 } },
        { text: "Uzamasın diye \"Tamam, sen haklısın\" derim; içimden bilirim.", scores: { uyum: 3 } },
        { text: "Son sözü söyler, konuyu kapatırım; tartışma orada biter.", scores: { kontrol: 3 } },
        { text: "Susarım; bir süre sonra kendisi gelip özür diler.", scores: { yonlendirme: 2, uyum: 1 } },
      ],
    },
    {
      text: "Sevgilin yeni bir hobiye başlamak istiyor. Haftada üç akşamını alacak.",
      options: [
        { text: "\"Haftada bir yeterli\" derim; ilişkinin de bir takvimi var.", scores: { kontrol: 2, catisma: 1 } },
        { text: "Desteklerim, akşamlarımı ona göre ayarlarım; biraz da söylenirim.", scores: { uyum: 2, catisma: 1 } },
        { text: "Bize kalan zamanı tartışırız; sonunda ikimiz de biraz geri adım atarız.", scores: { catisma: 2, uyum: 1 } },
        { text: "\"Tabii, o akşamlar ben de arkadaşlarla çıkarım\" derim; düşünsün.", scores: { yonlendirme: 2, kontrol: 1 } },
      ],
    },
    {
      text: "Ortak bir birikim yapıyorsunuz ve büyük bir alışveriş söz konusu.",
      options: [
        { text: "Bütçeyi ben yönetirim; tablo da şifreler de bende.", scores: { kontrol: 3 } },
        { text: "O ne derse onu yaparız; ama sevdiğim şey bir şekilde sepete girer.", scores: { uyum: 2, yonlendirme: 1 } },
        { text: "Her kalem için uzun bir pazarlık yaparız; bu bizim sporumuz.", scores: { catisma: 2, kontrol: 1 } },
        { text: "Almak istediğim şeyi \"ikimiz için\" diye sunarım.", scores: { yonlendirme: 3 } },
      ],
    },
    {
      text: "Sevgilin arkadaşlarıyla tatile gitmek istiyor, sen davetli değilsin.",
      options: [
        { text: "\"Bence gitmesen daha iyi\" derim; nedenini de uzatmam.", scores: { kontrol: 3 } },
        { text: "\"İyi eğlenceler\" derim; içim rahat olmasa da söylemem.", scores: { uyum: 3 } },
        { text: "Neden davetli olmadığımı sorarım; sonra gitmesine razı olurum.", scores: { catisma: 2, uyum: 1 } },
        { text: "Gitmeden önceki günlerde biraz hüzünlü takılırım; belki vazgeçer.", scores: { yonlendirme: 2, uyum: 1 } },
      ],
    },
    {
      text: "Ortak arkadaş ortamında sevgilin bir hikâyeyi yanlış anlatıyor.",
      options: [
        { text: "Sözünü kesip doğrusunu ben anlatırım.", scores: { kontrol: 2, catisma: 1 } },
        { text: "Bir şey demem; hikâye onun, nasıl isterse öyle anlatsın.", scores: { uyum: 3 } },
        { text: "\"Öyle olmadı ama\" derim; küçük bir atışma çıkar, sonra güleriz.", scores: { catisma: 3 } },
        { text: "Gülümseyip bir soru sorarım; hikâye kendiliğinden doğru yere gelir.", scores: { yonlendirme: 2, uyum: 1 } },
      ],
    },
    {
      text: "Hangi diziyi izleyeceğinize karar vermeniz gerekiyor.",
      options: [
        { text: "Kumanda bende; başlatırım, beğenmezse değiştiririz.", scores: { kontrol: 2, uyum: 1 } },
        { text: "Onun istediğini izleriz, ben de telefona bakarım.", scores: { uyum: 3 } },
        { text: "Yarım saat tartışırız; sonunda yorulan razı olur, genelde ben.", scores: { catisma: 2, uyum: 1 } },
        { text: "\"Herkes bundan bahsediyor\" diyerek istediğimi önermiş olurum.", scores: { yonlendirme: 3 } },
      ],
    },
    {
      text: "Sevgilin senin yakın bir arkadaşını pek sevmiyor.",
      options: [
        { text: "Sevmek zorunda değil; ben görüşmeye devam ederim, konu kapanır.", scores: { kontrol: 2, catisma: 1 } },
        { text: "Onu kırmamak için o arkadaşla daha az görüşürüm.", scores: { uyum: 3 } },
        { text: "Neden sevmediğini tartışırız, ben arkadaşımı savunurum.", scores: { catisma: 3 } },
        { text: "İkisini birkaç kez bir araya getiririm; fikri yavaş yavaş değişsin.", scores: { yonlendirme: 2, uyum: 1 } },
      ],
    },
    {
      text: "Bir kavgadan sonra genelde kim ilk adımı atar?",
      options: [
        { text: "Genelde ben atarım; sessizliğe dayanamam.", scores: { uyum: 3 } },
        { text: "O atar. Çünkü ben atmam.", scores: { kontrol: 2, catisma: 1 } },
        { text: "Barışırken bile \"kim haklıydı\" kısmı yeniden açılır.", scores: { catisma: 2, kontrol: 1 } },
        { text: "Ben atarım ama öyle bir şekilde ki özür dileyen o olur.", scores: { yonlendirme: 2, uyum: 1 } },
      ],
    },
    {
      text: "Çıkmak üzeresiniz. Sevgilin \"Bu kıyafet bence sana yakışmadı\" dedi.",
      options: [
        { text: "Hemen değiştiririm; dışarıda rahat hissetmek daha önemli.", scores: { uyum: 3 } },
        { text: "\"Bence yakıştı\" der, giyip çıkarım.", scores: { kontrol: 2, catisma: 1 } },
        { text: "Neden böyle dediğini sorarım; ikna ederse değiştiririm.", scores: { catisma: 2, uyum: 1 } },
        { text: "Değiştiririm ama bir dahakine onun kıyafetini ben yorumlarım.", scores: { yonlendirme: 2, catisma: 1 } },
      ],
    },
    {
      text: "Bir sonraki büyük adım konuşuluyor: birlikte eve çıkmak.",
      options: [
        { text: "Tarihi, semti, bütçeyi ben belirlerim; biri belirlemeli.", scores: { kontrol: 3 } },
        { text: "O hazır olduğunda ben de hazırım; o zamana kadar ilanlara bakarım.", scores: { uyum: 2, yonlendirme: 1 } },
        { text: "Her detayda farklı fikirdeyiz; haftalarca konuşuruz.", scores: { catisma: 2, kontrol: 1 } },
        { text: "Bu fikri bir süredir onun aklına ben yerleştiriyordum.", scores: { yonlendirme: 2, kontrol: 1 } },
      ],
    },
    {
      text: "Arkadaşların ilişkiniz hakkında ne der?",
      options: [
        { text: "\"İlişkinin patronu belli.\"", scores: { kontrol: 2, catisma: 1 } },
        { text: "\"Sen hep onun dediğini yapıyorsun.\"", scores: { uyum: 3 } },
        { text: "\"Hep atışıyorsunuz ama birbirinizi seviyorsunuz.\"", scores: { catisma: 3 } },
        { text: "\"O karar veriyor gibi ama aslında sen veriyorsun.\"", scores: { yonlendirme: 2, uyum: 1 } },
      ],
    },
    {
      text: "İdeal bir ilişkide kararlar sence nasıl verilir?",
      options: [
        { text: "Biri net olmalı, yoksa hiçbir şey ilerlemez.", scores: { kontrol: 3 } },
        { text: "Karşımdakinin mutlu olması benim mutluluğum; ben esnerim.", scores: { uyum: 3 } },
        { text: "Tartışa tartışa; sonunda en iyi fikir kazanır.", scores: { catisma: 2, kontrol: 1 } },
        { text: "Yumuşak bir yönlendirme kimseye zarar vermez.", scores: { yonlendirme: 2, uyum: 1 } },
      ],
    },
  ],
  results: [
    {
      id: "kaptan",
      name: "Kaptan",
      emoji: "🧭",
      tagline: "Direksiyon sende ve bunu gizlemiyorsun.",
      profile: { kontrol: 75, uyum: 10, catisma: 30, yonlendirme: 15 },
      color: "#D7102F",
      description: [
        "İlişkinin yönünü sen belirliyorsun: restoran, tatil, bütçe, büyük kararlar. Kararsızlık seni sıkıyor ve biri net olmalıysa o kişinin sen olmasını tercih ediyorsun.",
        "Bunun güzel bir tarafı var: Seninle olmak öngörülebilir ve güvenli hissettiriyor. İşler yürüyor, planlar gerçekleşiyor, kimse ne yapacağını bilmeden beklemiyor.",
        "Ama partnerin zamanla kendi fikrini söylemeyi bırakabilir. Arada bir \"Sen ne istersin?\" diye sorup cevabı gerçekten dinlemek, ilişkideki dengeyi korur.",
      ],
      strengths: ["Net ve kararlısın", "Sorumluluk almaktan kaçmıyorsun", "İlişkiyi ileri taşıyorsun"],
      watchOut: ["Partnerinin fikrini almadan karar vermek onu değersiz hissettirebilir", "Her konuda haklı çıkmak zorunda değilsin"],
      bestMatch: "denge",
    },
    {
      id: "fedakar",
      name: "Fedakâr",
      emoji: "🕊️",
      tagline: "\"O mutlu olsun yeter\" dersin. Peki ya sen?",
      profile: { kontrol: 10, uyum: 75, catisma: 10, yonlendirme: 15 },
      color: "#2F7D6D",
      description: [
        "İlişkide genellikle geri adım atan sensin. Restoranı o seçsin, tatili o planlasın, tartışma uzamasın. Bunu çoğu zaman huzur için, bazen de onu kaybetme korkusuyla yapıyorsun.",
        "Uyumlu olmak bir erdem ve partnerin seninle kendini rahat hissediyor. Ama sürekli vazgeçmek bir noktadan sonra içinde sessiz bir kırgınlık biriktirebilir.",
        "Kendi isteğini söylemek bencillik değil. \"Bu sefer ben seçeyim\" demek ilişkiye zarar vermez, aksine partnerinin seni gerçekten tanımasını sağlar.",
      ],
      strengths: ["Anlayışlı ve uyumlusun", "Çatışmaları büyütmüyorsun", "Partnerinin mutluluğunu önemsiyorsun"],
      watchOut: ["Kendi ihtiyaçlarını sürekli ertelemek kırgınlık biriktirir", "\"Fark etmez\" demek bazen gerçekten hissettiğini saklar"],
      bestMatch: "kaptan",
    },
    {
      id: "munazara",
      name: "Münazara Şampiyonu",
      emoji: "🎙️",
      tagline: "Hangi diziyi izleyeceğiniz bile bir müzakere.",
      profile: { kontrol: 30, uyum: 10, catisma: 75, yonlendirme: 15 },
      color: "#C2410C",
      description: [
        "İlişkinizde güç tek bir kişide değil, sürekli el değiştiriyor. Her konu tartışılıyor, her karar bir pazarlıkla çıkıyor. Dışarıdan bakan biri sürekli kavga ettiğinizi sanabilir.",
        "Aslında bu, ikinizin de fikrini söylemekten çekinmediğini gösteriyor. Kimse kendini bastırmıyor ve bu sağlıklı bir şey.",
        "Ama her konunun bir savaşa dönmesi yorucu olabilir. Hangi tartışmanın gerçekten değdiğini seçmek, enerjinizi önemli konulara saklamanızı sağlar.",
      ],
      strengths: ["Fikrini açıkça söylüyorsun", "Sorunları halının altına süpürmüyorsun", "Tutkulu ve canlı bir ilişki dinamiğin var"],
      watchOut: ["Her şeyi tartışmak ilişkiyi yorabilir", "Kazanmak ile anlaşmak aynı şey değil"],
      bestMatch: "denge",
    },
    {
      id: "gizli-patron",
      name: "Gizli Patron",
      emoji: "🎩",
      tagline: "Kararı o veriyor gibi görünüyor. Gibi.",
      profile: { kontrol: 25, uyum: 15, catisma: 10, yonlendirme: 75 },
      color: "#4C1D95",
      description: [
        "Açıkça \"Ben karar veriyorum\" demiyorsun ama sonuçlar genellikle senin istediğin gibi oluyor. Doğru soruyu soruyor, doğru seçenekleri sunuyor, fikri onun kafasına zamanında yerleştiriyorsun.",
        "Bu, çatışmadan kaçınırken istediğini almanın zekice bir yolu. Ama uzun vadede partnerin neden hep aynı noktaya vardığınızı merak etmeye başlayabilir.",
        "Dolaylı yönlendirme bazen işe yarar ama doğrudan söylemek çoğu zaman daha kısa yoldur. \"Ben şunu istiyorum\" demek, en ince stratejiden daha fazla güven kurar.",
      ],
      strengths: ["İnsanları çok iyi okuyorsun", "Çatışmayı büyütmeden çözüm buluyorsun", "Sabırlı ve stratejiksin"],
      watchOut: ["Fark edildiğinde güveni zedeleyebilir", "Suçluluk duygusu ya da küsme ile yönlendirme manipülasyona dönüşebilir"],
      bestMatch: "fedakar",
    },
    {
      id: "denge",
      name: "Eşit Ortak",
      emoji: "⚖️",
      tagline: "Sizde patron yok, ekip var.",
      profile: { kontrol: 25, uyum: 25, catisma: 25, yonlendirme: 10 },
      color: "#3B6FD9",
      description: [
        "İlişkinizde kararlar çoğunlukla birlikte veriliyor. Bazen sen geri adım atıyorsun, bazen o. Fikrini söylüyorsun ama her konuyu kazanmak zorunda hissetmiyorsun.",
        "Bu denge kendiliğinden oluşmaz, ikinizin de bunun için emek verdiğini gösterir. Partnerin hem fikrinin dinlenildiğini hem de kendi sözünün ağırlığı olduğunu hissediyor.",
        "Denge bazen bozulabilir, özellikle stresli dönemlerde. Böyle anlarda \"Son zamanlarda kararları hep ben veriyorum, sen ne düşünüyorsun?\" diye sormak dengeyi geri getirir.",
      ],
      strengths: ["Kararları paylaşıyorsun", "Hem konuşmayı hem dinlemeyi biliyorsun", "Güç oyunlarına girmiyorsun"],
      watchOut: ["Her şeyi uzlaşıyla çözmeye çalışmak bazı kararları geciktirebilir", "Dengeyi korumak için kendi isteğini fazla yumuşatma"],
      bestMatch: "denge",
    },
  ],
};
