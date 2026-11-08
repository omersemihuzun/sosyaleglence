import type { Test } from "@/lib/types";

export const kavgaTarzi: Test = {
  slug: "kavga-tarzi",
  title: "Kavga Ederken Nasıl Birisin?",
  summary: "Sesini mi yükseltirsin, konuyu mu değiştirirsin, yoksa mavi tikle mi cevap verirsin? Çatışma tarzını bul.",
  intro:
    "Herkes tartışır; fark, tartışırken ne yaptığımızda. Kimi anında parlar, kimi halının altına süpürür, kimi günlerce tek kelimeyle konuşur. 12 gerçek hayat senaryosunda ilk içgüdünü seç; doğru ya da yanlış cevap yok.",
  emoji: "🥊",
  color: "#B91C1C",
  category: "ilişki",
  metaDescription:
    "Kavga tarzı testi: Patlayan mı, kaçınan mı, sessizce küsen mi, çözüm odaklı mı? 12 gerçekçi senaryoyla tartışmalarda nasıl biri olduğunu öğren.",
  dimensions: [
    { id: "patlama", label: "Anında patlama", low: "Sakin kalırsın", high: "Ses tonun hemen yükselir" },
    { id: "kacinma", label: "Kaçınma", low: "Konuyu açarsın", high: "Konuyu değiştirirsin" },
    { id: "kusme", label: "Sessiz küsme", low: "Tavır koymazsın", high: "Sessizliğin konuşur" },
    { id: "cozum", label: "Çözüm ısrarı", low: "Zamana bırakırsın", high: "Bitmeden bırakmazsın" },
    { id: "uzlasma", label: "Alttan alma", low: "Geri adım atmazsın", high: "Huzur için geri çekilirsin" },
  ],
  questions: [
    {
      text: "Sevgilin buluşmaya 40 dakika geç kaldı ve yine \"trafik\" dedi. Bu ay üçüncü kez oluyor.",
      options: [
        { text: "\"Her seferinde mi trafik?\" diye oracıkta sesimi yükseltirim.", scores: { patlama: 3 } },
        { text: "Bir şey demem ama yemek boyunca tek kelimelik cevaplar veririm.", scores: { kusme: 3 } },
        { text: "\"Neyse boş ver, ne yiyoruz?\" der, akşamı bozmamaya çalışırım.", scores: { kacinma: 2, uzlasma: 1 } },
        { text: "Yemekten sonra \"Bu geç kalma meselesini konuşalım, nasıl çözeriz?\" derim.", scores: { cozum: 3 } },
      ],
    },
    {
      text: "WhatsApp'ta tartışıyorsunuz, mesajlar uzadıkça uzuyor. Saat gece 01.00.",
      options: [
        { text: "Peş peşe uzun mesajlar atarım, büyük harfler de devreye girer.", scores: { patlama: 3 } },
        { text: "\"Yarın konuşalım, iyi geceler\" yazıp telefonu ters çeviririm.", scores: { kacinma: 3 } },
        { text: "Son mesajını görürüm ama cevap vermem. Mavi tik konuşsun.", scores: { kusme: 3 } },
        { text: "\"Tamam, haklısın, ben abarttım\" yazarım. Yeter ki bitsin.", scores: { uzlasma: 3 } },
      ],
    },
    {
      text: "Arkadaş grubunda biri herkesin önünde seninle dalga geçti, herkes güldü. Biraz ağır kaçtı.",
      options: [
        { text: "Anında sert bir cevap veririm, ortam gerilse de.", scores: { patlama: 3 } },
        { text: "Gülüp geçerim, sonra da konuyu hiç açmam.", scores: { kacinma: 3 } },
        { text: "Sonra özelden yazıp \"Bu beni kırdı, bir daha olmasın\" derim.", scores: { cozum: 3 } },
        { text: "Ben de gülerim, ortam bozulmasın diye kendimle dalga geçmeye devam ederim.", scores: { uzlasma: 3 } },
      ],
    },
    {
      text: "Sevgilin bayramda ailene uğramadı. Annen buna çok bozulmuş ve telefonda sana sitem ediyor.",
      options: [
        { text: "\"Anne yeter ama, her şeyi mesele yapıyorsun!\" diye çıkışırım.", scores: { patlama: 3 } },
        { text: "Annemle birkaç gün telefonda kısa kısa konuşurum.", scores: { kusme: 3 } },
        { text: "Sevgilimle bir ziyaret planlar, iki tarafı da arayıp konuyu bağlarım.", scores: { cozum: 3 } },
        { text: "Annemden özür dilerim, sevgilime de hiçbir şey çaktırmam.", scores: { uzlasma: 3 } },
      ],
    },
    {
      text: "Eve yorgun argın geldin. Ev arkadaşın bulaşıkları yine lavaboda bırakmış.",
      options: [
        { text: "Kendim yıkarım. Söylesem tartışma çıkacak, değmez.", scores: { uzlasma: 2, kacinma: 1 } },
        { text: "Tabakları onun odasının önüne bırakırım. Anlayan anlar.", scores: { kusme: 3 } },
        { text: "Görmezden gelirim, ertesi gün de unutur giderim.", scores: { kacinma: 3 } },
        { text: "Akşam oturup bir iş bölümü listesi öneririm.", scores: { cozum: 3 } },
      ],
    },
    {
      text: "Tartışmanın ortasında sevgilin \"Sen hep böylesin zaten\" dedi.",
      options: [
        { text: "\"Asıl sen hep böylesin!\" derim, sesler yükselir.", scores: { patlama: 3 } },
        { text: "Susarım ve o akşam bir daha ağzımı açmam.", scores: { kusme: 3 } },
        { text: "\"Hep ne demek? Somut bir örnek ver, netleştirelim\" derim.", scores: { cozum: 3 } },
        { text: "Ortam yumuşasın diye \"Neyse, ben acıktım\" deyip konuyu dağıtırım.", scores: { kacinma: 3 } },
      ],
    },
    {
      text: "En yakın arkadaşın, ona anlattığın bir sırrı başka birine söylemiş. Tesadüfen öğrendin.",
      options: [
        { text: "Hemen ararım, telefonda sesimi yükseltirim.", scores: { patlama: 3 } },
        { text: "Story'lerini izlemeyi bırakır, mesajlarına sadece emojiyle dönerim.", scores: { kusme: 3 } },
        { text: "Hiçbir şey olmamış gibi davranırım ama artık ona bir şey anlatmam.", scores: { kacinma: 3 } },
        { text: "Belki istemeden ağzından kaçmıştır deyip affederim, aramız bozulmasın.", scores: { uzlasma: 3 } },
      ],
    },
    {
      text: "Tatil planı yapıyorsunuz. Sen deniz istiyorsun, o \"Kesin Kapadokya\" diyor.",
      options: [
        { text: "\"Hep senin dediğin oluyor!\" derim, iş tartışmaya döner.", scores: { patlama: 3 } },
        { text: "\"Kapadokya olsun, sorun değil\" derim. Aslında biraz sorun.", scores: { uzlasma: 3 } },
        { text: "İki yerin artısını eksisini, bütçesini çıkarıp karşılaştırmayı öneririm.", scores: { cozum: 3 } },
        { text: "\"Sonra bakarız\" deyip konuyu haftalarca açmam.", scores: { kacinma: 3 } },
      ],
    },
    {
      text: "Dünkü tartışmadan sonra sevgilin hiçbir şey olmamış gibi \"Akşam ne yiyoruz?\" diye yazdı.",
      options: [
        { text: "\"Bu kadar mı? Hiçbir şey olmadı mı yani?\" diye yeniden alevlenirim.", scores: { patlama: 3 } },
        { text: "\"Fark etmez.\" yazarım. Sonunda nokta olan cinsten.", scores: { kusme: 3 } },
        { text: "\"Önce dünkü konuyu kapatalım, sonra yemek\" derim.", scores: { cozum: 3 } },
        { text: "İçim rahatlar, hemen bir yemek önerip konuyu kapatırım.", scores: { uzlasma: 2, kacinma: 1 } },
      ],
    },
    {
      text: "Aile WhatsApp grubunda dayın senin iş tercihini eleştiren bir mesaj attı. Herkes okudu.",
      options: [
        { text: "Gruba saygılı ama net bir cevap yazıp ne demek istediğimi açıklarım.", scores: { cozum: 3 } },
        { text: "Görmezden gelirim. Aile grubunda tartışma açılmaz.", scores: { kacinma: 3 } },
        { text: "\"Haklısınız dayıcım\" yazar, geçerim.", scores: { uzlasma: 3 } },
        { text: "Gruba bir süre hiç yazmam, bayram mesajı bile atmam.", scores: { kusme: 3 } },
      ],
    },
    {
      text: "Kavga bitti, barıştınız. Ama içinde hâlâ bir burukluk var.",
      options: [
        { text: "Bir sonraki küçük tartışmada hepsi birden ağzımdan çıkar.", scores: { patlama: 3 } },
        { text: "O fark edene kadar birkaç gün mesafeli dururum.", scores: { kusme: 3 } },
        { text: "Barıştık ya, bir daha açıp ortamı germem.", scores: { kacinma: 3 } },
        { text: "\"İçimde bir şey kaldı, beş dakika konuşabilir miyiz?\" derim.", scores: { cozum: 3 } },
      ],
    },
    {
      text: "Biri sana \"Kavga ederken nasıl birisin?\" diye sorsa en dürüst cevabın ne olur?",
      options: [
        { text: "Sesim yükselir ama çabuk sönerim.", scores: { patlama: 3 } },
        { text: "Kavga etmem ki. Ortamdan çekilirim.", scores: { kacinma: 3 } },
        { text: "Susarım. Sessizliğim her şeyi anlatır.", scores: { kusme: 3 } },
        { text: "Genelde ilk özür dileyen ben olurum.", scores: { uzlasma: 3 } },
      ],
    },
  ],
  results: [
    {
      id: "anlik-firtina",
      name: "Anlık Fırtına",
      emoji: "🌪️",
      tagline: "Hızlı parlarsın, hızlı sönersin. Arada kalan cümleler bazen can yakar.",
      profile: { patlama: 80, kacinma: 15, kusme: 15, cozum: 20, uzlasma: 15 },
      color: "#DC2626",
      description: [
        "Seni bir şey kırdığında bunu herkes anlar, çünkü hissettiğin şey o an yüzüne ve sesine yansır. Beklemek, sindirmek, uygun anı kollamak sana göre değil. İçindeki fırtına dışarı çıkmak ister ve genelde de çıkar.",
        "Bunun iyi bir yanı var: Seninle tartışan kişi ne düşündüğünü tahmin etmek zorunda kalmaz. Kin tutmazsın, günlerce surat asmazsın. Çoğu zaman öfken geldiği hızla gider ve beş dakika sonra \"Hadi çay koyalım\" diyen de sen olursun.",
        "Zorlayıcı yanı ise o birkaç dakikada söylenenler. \"Sen hep...\", \"Zaten hiçbir zaman...\" gibi cümleler sen sakinleştikten sonra bile karşı tarafın aklında kalabiliyor. Senin için fırtına geçmiştir ama onun için yankısı sürüyor olabilir.",
        "Küçük bir öneri: Sesinin yükseldiğini fark ettiğin anda \"Bir dakika, sakinleşip geliyorum\" demeyi dene. Bu kaçmak değil, fırtınayı söndürmek için kendine tanıdığın bir mola. Duyguların hâlâ geçerli olacak, sadece daha iyi duyulacak.",
      ],
      strengths: ["Dürüst ve açıksın, kimse ne hissettiğini tahmin etmek zorunda kalmıyor", "Kin tutmuyorsun, çabuk barışıyorsun", "Sorunları ertelemeden yüzeye çıkarıyorsun"],
      watchOut: ["Öfkeyle söylenen cümleler sen unuttuktan sonra da karşı tarafta kalabiliyor", "Ses tonu yükseldiğinde asıl mesajın kaybolabiliyor", "Hızlı sakinleşmen, karşındakinin de aynı hızda toparlanacağı anlamına gelmiyor"],
      bestMatch: "cozum-muhendisi",
    },
    {
      id: "hali-alti",
      name: "Halı Altı Uzmanı",
      emoji: "🧹",
      tagline: "Kavga mı? Ne kavgası? Sen o konuyu çoktan halının altına süpürdün.",
      profile: { patlama: 15, kacinma: 80, kusme: 20, cozum: 15, uzlasma: 25 },
      color: "#4B5563",
      description: [
        "Gerginlik havaya girdiği anda içinde bir alarm çalıyor ve ilk refleksin ortamı yumuşatmak oluyor. Konuyu değiştirirsin, espri yaparsın, \"Sonra konuşuruz\" dersin. Çoğu zaman o \"sonra\" hiç gelmez.",
        "Bunu genelde kimseyi kırmamak, huzuru korumak ya da küçük şeyleri büyütmemek için yapıyorsun. Gerçekten de her pürüzün masaya yatırılması gerekmiyor ve senin yanında insanlar kendini rahat hissediyor. Ortamı yatıştırmakta gerçek bir yeteneğin var.",
        "Ama halının altı sınırsız değil. Konuşulmayan küçük kırgınlıklar birikince bir gün beklenmedik bir anda, alakasız bir konuda kendini gösterebiliyor. Bir de karşındaki kişi, kapatılan konuları \"umursamıyor\" diye okuyabiliyor.",
        "Her şeyi konuşmak zorunda değilsin. Sadece sana gerçekten dokunan şeyleri ayırt etmeyi dene: \"Bu bir hafta sonra da aklımda olacak mı?\" Cevap evetse, o konu halının altına değil, masaya ait. Sakin bir anda, kısa bir cümleyle açmak çoğu zaman sandığından kolay geçer.",
      ],
      strengths: ["Ortamı gerginlikten koruyorsun", "Küçük şeyleri büyütmüyorsun", "İnsanlar yanında kendini rahat hissediyor"],
      watchOut: ["Konuşulmayan kırgınlıklar birikip bir gün toptan çıkabilir", "Karşı taraf sessizliğini ilgisizlik sanabilir", "Önemli konular da \"sonra\" listesine düşebiliyor"],
      bestMatch: "cozum-muhendisi",
    },
    {
      id: "soguk-savas",
      name: "Soğuk Savaş",
      emoji: "🧊",
      tagline: "Bağırmazsın, tartışmazsın. Sadece \"Tamam.\" yazarsın. Noktalı.",
      profile: { patlama: 20, kacinma: 25, kusme: 80, cozum: 15, uzlasma: 15 },
      color: "#1E4E79",
      description: [
        "Kırıldığında sesin yükselmiyor, tam tersine kısılıyor. Mesajlar kısalıyor, \"Tamam\"ların sonuna nokta geliyor, son görülmen açık ama cevapların gecikiyor. Ne hissettiğini söylemek yerine, karşı tarafın bunu fark etmesini bekliyorsun.",
        "Bunun altında genelde şu düşünce var: \"Beni gerçekten önemsiyorsa anlar.\" Ya da: \"Söylesem de bir şey değişmeyecek.\" Belki geçmişte duygularını dile getirdiğinde karşılık bulamadın. Sessizlik bu yüzden hem bir kalkan hem de bir mesaj oluyor.",
        "Sorun şu ki sessizlik çok farklı okunabiliyor. Sen \"Kırıldım\" demek isterken karşı taraf \"Bana ceza veriyor\" diye anlayabiliyor ve savunmaya geçiyor. Ya da gerçekten neyin yanlış gittiğini bilmeden günlerce tahmin yürütüyor.",
        "Duygularını hemen söze dökmek zor geliyorsa bir ara yol dene: \"Şu an konuşmaya hazır değilim ama kırgınım, yarın konuşalım.\" Bu tek cümle, soğuk savaşı bir ateşkese çevirir. Hem sana alan açar hem de karşındakini belirsizlikte bırakmaz.",
      ],
      strengths: ["Öfke anında kırıcı cümleler kurmuyorsun", "Duygularını sindirmek için kendine zaman tanıyorsun", "Sakin ve kontrollü görünüyorsun"],
      watchOut: ["Sessizlik ceza gibi algılanabilir", "Karşı taraf neyin yanlış gittiğini anlamayabilir", "Küslük uzadıkça barışmak zorlaşabilir"],
      bestMatch: "cozum-muhendisi",
    },
    {
      id: "cozum-muhendisi",
      name: "Çözüm Mühendisi",
      emoji: "🛠️",
      tagline: "Senin için kavga bir arıza. Tamir edilmeden yatağa girilmez.",
      profile: { patlama: 20, kacinma: 15, kusme: 15, cozum: 80, uzlasma: 25 },
      color: "#0F766E",
      description: [
        "Bir sorun olduğunda onu bırakamıyorsun. Ne oldu, neden oldu, bir daha olmaması için ne yapabiliriz? Kafanda hemen bir toplantı gündemi oluşuyor ve o konu kapanmadan rahat edemiyorsun.",
        "Bu, ilişkilerde çok değerli bir özellik. Sorunları büyümeden konuşuyor, suçlamak yerine çözüm arıyorsun. Seninle tartışan biri sonunda genelde bir yere varıldığını hissediyor. İş bölümü listeleri, \"Bir dahaki sefere şöyle yapalım\" anlaşmaları senin imzan.",
        "Ama herkes senin hızında çalışmıyor. Bazı insanlar duygusunu önce sindirmek, biraz yalnız kalmak ister. Sen \"Hemen şimdi çözelim\" dediğinde, karşındaki kendini sıkıştırılmış hissedebilir. Bir de bazen karşı taraf çözüm değil, sadece anlaşılmak istiyordur.",
        "Bir sonraki tartışmada çözüm önermeden önce şunu sormayı dene: \"Şu an konuşmak mı istersin, biraz zaman mı?\" Ve bazen hiçbir öneri getirmeden sadece \"Seni anlıyorum\" demek, en iyi tamir aletin olabilir.",
      ],
      strengths: ["Sorunları büyümeden konuşuyorsun", "Suçlamak yerine çözüm arıyorsun", "Tartışmaları bir sonuca bağlıyorsun"],
      watchOut: ["Karşı tarafa sindirme süresi tanımamak baskı gibi hissettirebilir", "Her duygu bir çözüm beklemiyor, bazen sadece dinlenmek istiyor", "Konu kapanmadan uyuyamamak seni de yorabilir"],
      bestMatch: "baris-elcisi",
    },
    {
      id: "baris-elcisi",
      name: "Barış Elçisi",
      emoji: "🕊️",
      tagline: "Haklı olmaktansa huzurlu olmayı seçersin. Bazen kendi pahasına.",
      profile: { patlama: 15, kacinma: 30, kusme: 15, cozum: 20, uzlasma: 80 },
      color: "#6D28D9",
      description: [
        "Tartışma başladığında aklındaki ilk soru \"Kim haklı?\" değil, \"Bu nasıl en çabuk biter?\" oluyor. \"Tamam, sen haklısın\", \"Kapadokya olsun\", \"Özür dilerim\" cümleleri senden kolay çıkıyor. İlişkilerin bozulmaması senin için çok önemli.",
        "Bu esneklik çok kıymetli. İnatlaşmıyor, egoyu araya sokmuyorsun. Yanındaki insanlar seninle tartışmanın uzun sürmeyeceğini biliyor ve bu onlara güven veriyor. Ailede, arkadaş grubunda ortamı yumuşatan kişi büyük ihtimalle sensin.",
        "Ama huzur için geri adım atmak alışkanlık hâline geldiğinde, kendi isteklerin listenin en altına düşebiliyor. Hep sen özür dilediğinde karşı taraf kendi payını görmeyebiliyor. Bir süre sonra da \"Ben ne istiyorum?\" sorusunun cevabını bulmak zorlaşıyor.",
        "Her tartışmayı kazanmak zorunda değilsin ama bazılarında yerinde durmak senin hakkın. Kendine şunu sor: \"Bu konuda gerçekten fikrimi mi değiştirdim, yoksa sadece bitsin mi istiyorum?\" İkincisiyse, nazikçe ama net bir şekilde ne istediğini söylemek ilişkini bozmaz, aksine dengeler.",
      ],
      strengths: ["Esneksin, inatlaşmıyorsun", "Tartışmaları uzatmadan yumuşatıyorsun", "Egoyu ilişkinin önüne koymuyorsun"],
      watchOut: ["Kendi isteklerini sürekli erteleyebilirsin", "Hep alttan almak zamanla içinde kırgınlık biriktirebilir", "Karşı taraf kendi payını görmeyi öğrenemeyebilir"],
      bestMatch: "cozum-muhendisi",
    },
  ],
};
