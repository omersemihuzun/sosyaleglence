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
      text: "Akşam yemeği için nereye gideceğinize karar veriyorsunuz.",
      options: [
        { text: "Mekânı ben seçer, rezervasyonu yaparım.", scores: { kontrol: 3 } },
        { text: "\"Sen nereyi istersen\" derim, gerçekten fark etmez.", scores: { uyum: 2 } },
        { text: "O bir yer söyler, ben neden olmayacağını anlatırım.", scores: { catisma: 2, kontrol: 1 } },
        { text: "Üç seçenek sunarım ama üçü de benim istediğim yerler.", scores: { yonlendirme: 3 } },
      ],
    },
    {
      text: "Sevgilin hafta sonu için ailesini ziyaret etmeyi öneriyor. Senin planın başkaydı.",
      options: [
        { text: "\"Tamam, gideriz\" derim, kendi planımı ertelerim.", scores: { uyum: 3 } },
        { text: "\"Bu hafta olmaz, gelecek hafta gideriz\" derim.", scores: { kontrol: 2 } },
        { text: "Neden hep onun ailesine gittiğimizi tartışmaya açarım.", scores: { catisma: 3 } },
        { text: "Kabul ederim ama yorgun olduğumu sık sık hissettiririm, kendisi vazgeçsin.", scores: { yonlendirme: 3 } },
      ],
    },
    {
      text: "Birlikte ev için mobilya seçiyorsunuz. Zevkleriniz farklı.",
      options: [
        { text: "Benim zevkim daha iyi, sonunda benim seçtiğim alınır.", scores: { kontrol: 3 } },
        { text: "Onun mutlu olması yeter, benimki önemli değil.", scores: { uyum: 3 } },
        { text: "Mağazanın ortasında tartışmaya başlarız.", scores: { catisma: 3 } },
        { text: "Onun seçtiğinin kusurlarını tek tek fark ettiririm, kendi fikrini değiştirsin.", scores: { yonlendirme: 3 } },
      ],
    },
    {
      text: "Bir tartışmanın ortasındasınız ve sen haklısın.",
      options: [
        { text: "Kabul edene kadar konuyu kapatmam.", scores: { catisma: 3, kontrol: 1 } },
        { text: "Uzamasın diye \"Tamam, sen haklısın\" derim.", scores: { uyum: 3 } },
        { text: "Son sözü ben söyler, konuyu ben kapatırım.", scores: { kontrol: 3 } },
        { text: "Susarım. Bir süre sonra kendisi gelip özür diler.", scores: { yonlendirme: 2 } },
      ],
    },
    {
      text: "Sevgilin yeni bir hobiye başlamak istiyor, haftada üç akşamını alacak.",
      options: [
        { text: "\"Haftada bir yeterli\" diye sınır koyarım.", scores: { kontrol: 3 } },
        { text: "Desteklerim, kendi akşamlarımı ona göre ayarlarım.", scores: { uyum: 2 } },
        { text: "Bize ayırdığı zamanın azalacağını tartışırız.", scores: { catisma: 2 } },
        { text: "\"Tabii, ama o akşamlar ben de arkadaşlarla çıkarım\" derim, düşünsün.", scores: { yonlendirme: 3 } },
      ],
    },
    {
      text: "Ortak bir hesap ya da büyük bir alışveriş söz konusu.",
      options: [
        { text: "Bütçeyi ben yönetirim, öyle daha düzenli.", scores: { kontrol: 3 } },
        { text: "O ne derse onu yaparım, para konuşmak beni geriyor.", scores: { uyum: 3 } },
        { text: "Her harcama kalemi için uzun bir pazarlık yaparız.", scores: { catisma: 3 } },
        { text: "Almak istediğim şeyi \"ikimiz için\" diye sunarım.", scores: { yonlendirme: 2 } },
      ],
    },
    {
      text: "Sevgilin arkadaşlarıyla tatile gitmek istiyor, sen davetli değilsin.",
      options: [
        { text: "\"Bence gitmesen daha iyi\" derim, o kadar.", scores: { kontrol: 3 } },
        { text: "İyi eğlenceler derim. İçim rahat olmasa da söylemem.", scores: { uyum: 3 } },
        { text: "Neden davet edilmediğimi konuşmak isterim.", scores: { catisma: 2 } },
        { text: "Gitmeden önceki günlerde biraz hüzünlü davranırım, belki vazgeçer.", scores: { yonlendirme: 3 } },
      ],
    },
    {
      text: "Ortak arkadaş ortamında sevgilin bir hikâyeyi yanlış anlatıyor.",
      options: [
        { text: "Sözünü kesip doğrusunu ben anlatırım.", scores: { kontrol: 2, catisma: 1 } },
        { text: "Bir şey demem, önemli değil.", scores: { uyum: 2 } },
        { text: "\"Öyle olmadı ama\" diye düzeltirim, küçük bir atışma çıkar.", scores: { catisma: 3 } },
        { text: "Gülümseyip bir soru sorarım, hikâye kendiliğinden doğru yere gelir.", scores: { yonlendirme: 2 } },
      ],
    },
    {
      text: "Hangi diziyi izleyeceğinize karar vermeniz gerekiyor.",
      options: [
        { text: "Kumanda bende. Başlatırım.", scores: { kontrol: 3 } },
        { text: "Onun istediğini izleriz, ben telefona bakarım.", scores: { uyum: 2 } },
        { text: "Yarım saat ne izleyeceğimizi tartışırız, sonra uyuruz.", scores: { catisma: 2 } },
        { text: "\"Herkes bundan bahsediyor\" diyerek istediğim diziyi ona önermiş olurum.", scores: { yonlendirme: 3 } },
      ],
    },
    {
      text: "Sevgilin senin bir arkadaşını pek sevmiyor.",
      options: [
        { text: "Sevmek zorunda değil ama ben görüşmeye devam ederim, konu kapanır.", scores: { kontrol: 2 } },
        { text: "Onu kırmamak için o arkadaşla daha az görüşmeye başlarım.", scores: { uyum: 3 } },
        { text: "Neden sevmediğini tartışırız, ben arkadaşımı savunurum.", scores: { catisma: 3 } },
        { text: "İkisini birkaç kez bir araya getiririm, fikri yavaş yavaş değişsin.", scores: { yonlendirme: 2 } },
      ],
    },
    {
      text: "Bir kavgadan sonra kim ilk adımı atar?",
      options: [
        { text: "Genelde ben atarım, sessizliğe dayanamam.", scores: { uyum: 2 } },
        { text: "O atar. Çünkü ben atmam.", scores: { kontrol: 2 } },
        { text: "Barışırken bile kavganın devamı çıkar.", scores: { catisma: 3 } },
        { text: "Ben atarım ama öyle bir şekilde ki özür dileyen o olur.", scores: { yonlendirme: 3 } },
      ],
    },
    {
      text: "Sevgilin \"Bu kıyafet bence sana yakışmadı\" dedi.",
      options: [
        { text: "Hemen değiştiririm.", scores: { uyum: 3 } },
        { text: "\"Bence yakıştı\" der, giyip çıkarım.", scores: { kontrol: 2 } },
        { text: "Neden böyle söylediğini sorgular, ufak bir tartışma çıkarırım.", scores: { catisma: 2 } },
        { text: "Değiştiririm ama bir dahaki sefere onun kıyafetini ben yorumlarım.", scores: { yonlendirme: 2, catisma: 1 } },
      ],
    },
    {
      text: "Bir sonraki büyük adım konuşuluyor: birlikte eve çıkmak.",
      options: [
        { text: "Tarihi, semti, bütçeyi ben belirlerim.", scores: { kontrol: 3 } },
        { text: "O hazır olduğunda ben de hazırım.", scores: { uyum: 2 } },
        { text: "Her detayda farklı fikirdeyiz, haftalarca konuşuruz.", scores: { catisma: 3 } },
        { text: "Bir süredir onun aklına bu fikri ben yerleştirmiştim.", scores: { yonlendirme: 3 } },
      ],
    },
    {
      text: "Arkadaşların ilişkiniz hakkında ne der?",
      options: [
        { text: "\"İlişkinin patronu belli.\"", scores: { kontrol: 3 } },
        { text: "\"Sen hep onun dediğini yapıyorsun.\"", scores: { uyum: 3 } },
        { text: "\"Siz hep atışıyorsunuz ama birbirinizi seviyorsunuz.\"", scores: { catisma: 3 } },
        { text: "\"O karar veriyor gibi görünüyor ama aslında sen veriyorsun.\"", scores: { yonlendirme: 3 } },
      ],
    },
    {
      text: "İdeal bir ilişkide kararlar sence nasıl verilir?",
      options: [
        { text: "Biri net olmalı, yoksa hiçbir şey ilerlemez.", scores: { kontrol: 2 } },
        { text: "Karşımdakinin mutlu olması benim mutluluğum.", scores: { uyum: 2 } },
        { text: "Tartışa tartışa, sonunda en iyi fikir kazanır.", scores: { catisma: 2 } },
        { text: "Yumuşak bir yönlendirme kimseye zarar vermez.", scores: { yonlendirme: 2 } },
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
