import type { Test } from "@/lib/types";

export const magaraAdami: Test = {
  slug: "magara-adami-testi",
  title: "İlişkide Ne Kadar Mağara Adamısın?",
  summary:
    "Hesabı kim öder, telefonun şifresi kimde, ağlamak ayıp mı, elalem ne der? İlişkideki mağara adamı seviyeni ölçüyoruz.",
  intro:
    'Mağara çoktan kapandı ama bazı alışkanlıklar hâlâ ateşin başında oturuyor: "Bu iş böyle olur", "Bensiz nereye?", "Ağlamak bize yakışmaz", "Elalem ne der?" 14 ilişki senaryosunda ilk içgüdünü seç; kimse seni yargılamıyor, sadece ölçüyoruz.',
  emoji: "🪨",
  color: "#8B5A2B",
  category: "ilişki",
  metaDescription:
    "İlişkide ne kadar mağara adamısın? Geleneksel roller, kontrolcülük, duygusal kapalılık ve elalem kaygısı: 14 senaryoyla ilişkideki gericilik seviyeni öğren.",
  headline: {
    label: "İlişkide mağara adamı seviyen",
    mode: "toplam",
    weights: { roller: 1, kontrol: 1, duygu: 1, elalem: 1 },
  },
  dimensions: [
    { id: "roller", label: "Geleneksel roller", low: "Görevleri birlikte paylaşırsın", high: "Bu iş böyle olur" },
    { id: "kontrol", label: "Sahiplenme ve kontrol", low: "Alan tanırsın", high: "Bensiz nereye?" },
    { id: "duygu", label: "Duygusal kapalılık", low: "Duygularını konuşursun", high: "Duygular mağarada kalır" },
    { id: "elalem", label: "Elalem ne der", low: "Kendi doğrunu yaşarsın", high: "Önce ayıp, sonra aşk" },
  ],
  questions: [
    {
      text: "İlk buluşmanız güzel geçti, garson hesabı masaya bıraktı.",
      options: [
        { text: "Hesabı ben öderim; bu konuda tartışma kabul etmem.", scores: { roller: 2, kontrol: 1 } },
        { text: "Kim davet ettiyse o öder, bir sonrakini öteki.", scores: {} },
        { text: "Ödemesine izin veririm ama içimden yakışmadı derim.", scores: { roller: 2, elalem: 1 } },
        { text: "Garsonun önünde bölüşmeyiz; ayıp olur, sonra hallederiz.", scores: { elalem: 2, roller: 1 } },
      ],
    },
    {
      text: "Sevgilin cumartesi akşamı kalabalık bir arkadaş grubuyla dışarı çıkacak.",
      options: [
        { text: "Kimler var diye sorarım, eve varınca da haber versin.", scores: { kontrol: 2, roller: 1 } },
        { text: '"İyi eğlenceler" derim, ben de kendi planımı yaparım.', scores: {} },
        { text: "Bir şey demem ama o akşam surat asarım, anlasın.", scores: { duygu: 2, kontrol: 1 } },
        { text: "Gece yarısından sonra dışarıda olmak yakışık almaz derim.", scores: { elalem: 2, kontrol: 1 } },
      ],
    },
    {
      text: "Sevgilin çok beğendiği, biraz dikkat çekici bir kıyafet aldı.",
      options: [
        { text: "Çok yakıştığını söylerim; kim ne düşünürse düşünsün.", scores: {} },
        { text: "Giyme demem ama sadece yanımdayken giysin isterim.", scores: { kontrol: 2, elalem: 1 } },
        { text: "Akrabaların yanına bununla gelmesin; ayıp olur.", scores: { elalem: 2, roller: 1 } },
        { text: "Bir şey söylemem, o akşam sadece az konuşurum.", scores: { duygu: 2, kontrol: 1 } },
      ],
    },
    {
      text: "Tartışmanın ortasında haksız olduğunu fark ettin.",
      options: [
        { text: "Özür dilerim ama kelimeyle değil, çay getirerek.", scores: { duygu: 2, roller: 1 } },
        { text: '"Haklıymışsın, özür dilerim" der, konuyu kapatırım.', scores: {} },
        { text: "Haksız olsam da geri adım atmam; otoritem sarsılmasın.", scores: { roller: 2, kontrol: 1 } },
        { text: "Birkaç gün geçince unutulur; konuşup büyütmeye gerek yok.", scores: { duygu: 2, elalem: 1 } },
      ],
    },
    {
      text: "Birlikte yaşamaya başladınız, ev işleri nasıl paylaşılacak?",
      options: [
        { text: "Yemek ve temizlik bir tarafta, tamir ve faturalar öbüründe.", scores: { roller: 2, elalem: 1 } },
        { text: "Bir çizelge yaparız; kim boşsa o yapar, sırayla.", scores: {} },
        { text: "Benim işim para kazanmak; evin düzeni karşı tarafın işi.", scores: { roller: 2, kontrol: 1 } },
        { text: "Ben yaparım ama nasıl yapılacağını da ben belirlerim.", scores: { kontrol: 2, roller: 1 } },
      ],
    },
    {
      text: "Sevgilinin telefonuna bir mesaj geldi, okurken gülümsedi.",
      options: [
        { text: "Kimden olduğunu sorarım, cevap vermezse sorgularım.", scores: { kontrol: 2, elalem: 1 } },
        { text: "Merak etsem de sormam; anlatmak isterse anlatır.", scores: {} },
        { text: "Sormam ama şifresini bilmem gerektiğini düşünürüm.", scores: { kontrol: 2, roller: 1 } },
        { text: "Bir şey demem; kafamda kurar, haftalarca söylemem.", scores: { duygu: 2, kontrol: 1 } },
      ],
    },
    {
      text: "Sevgilin seninle ilgili onu üzen bir şeyi konuşmak istiyor, sesi titriyor.",
      options: [
        { text: "Dinlerim, sonra ben de neler hissettiğimi anlatırım.", scores: {} },
        { text: '"Abartma, her şey yolunda" der, konuyu kapatırım.', scores: { duygu: 2, roller: 1 } },
        { text: "Ağlamaya başlarsa ne yapacağımı bilemem, odadan çıkarım.", scores: { duygu: 2, elalem: 1 } },
        { text: "Hemen bir çözüm planı yaparım; duygular bana göre değil.", scores: { duygu: 2, kontrol: 1 } },
      ],
    },
    {
      text: "İlişkiniz ciddileşti, sıra aileyle tanışmaya geldi.",
      options: [
        { text: "Önce ailemin onayı lazım; beğenmezlerse olmaz.", scores: { elalem: 2, kontrol: 1 } },
        { text: "İkimiz hazır hissettiğimizde tanıştırırım, onay beklemem.", scores: {} },
        { text: "Tanıştırırım ama ortada bir söz yoksa olmaz.", scores: { elalem: 2, roller: 1 } },
        { text: "O gün ben konuşurum, o sadece güler yüzlü olsun yeter.", scores: { roller: 2, kontrol: 1 } },
      ],
    },
    {
      text: "Sosyal medyada ilişkinizi paylaşıp paylaşmama konusu açıldı.",
      options: [
        { text: "Profilinde fotoğrafımız olması şart; herkes bilsin.", scores: { kontrol: 2, elalem: 1 } },
        { text: "Paylaşmak da paylaşmamak da ikimizin keyfine kalmış.", scores: {} },
        { text: "Eski sevgililerini takipten çıkarsın, başka şey istemem.", scores: { kontrol: 2, duygu: 1 } },
        { text: "Hiç paylaşmayız; ailem görürse laf olur.", scores: { elalem: 2, duygu: 1 } },
      ],
    },
    {
      text: "Sevgiline başka bir şehirde çok iyi bir iş teklifi geldi.",
      options: [
        { text: "Gitmesin; ilişkimiz her işten önce gelir.", scores: { kontrol: 2, roller: 1 } },
        { text: "Artılarını eksilerini konuşur, kararı ona bırakırım.", scores: {} },
        { text: "Benden çok kazanacaksa içim pek rahat etmez.", scores: { roller: 2, duygu: 1 } },
        { text: "Evlenmeden ayrı şehirde yaşamak ailelere nasıl anlatılır?", scores: { elalem: 2, roller: 1 } },
      ],
    },
    {
      text: "Birlikte izlediğiniz filmin sonunda gözlerin doldu.",
      options: [
        { text: "Hemen silerim; yanımdakinin görmesini istemem.", scores: { duygu: 2, roller: 1 } },
        { text: "Ağlarım, sonra filmi uzun uzun konuşuruz.", scores: {} },
        { text: '"Gözüme bir şey kaçtı" der, gülerek geçiştiririm.', scores: { duygu: 2, elalem: 1 } },
        { text: "Bu tür filmleri seçmem zaten; o işler bana göre değil.", scores: { roller: 2, duygu: 1 } },
      ],
    },
    {
      text: "Arkadaş ortamında sevgilin seninle tatlı tatlı dalga geçti, herkes güldü.",
      options: [
        { text: "Ben de gülerim; birbirimize takılmak bizim tarzımız.", scores: {} },
        { text: 'Eve gidince "Beni herkesin önünde küçük düşürdün" derim.', scores: { elalem: 2, kontrol: 1 } },
        { text: "O an bir şey demem ama günlerce soğuk davranırım.", scores: { duygu: 2, kontrol: 1 } },
        { text: "Hemen sert bir cevapla haddini bildiririm.", scores: { kontrol: 2, roller: 1 } },
      ],
    },
    {
      text: "Evlilik konuşulmaya başlandı.",
      options: [
        { text: "Söz, nişan, kına, düğün; hepsi usulüne uygun olmalı.", scores: { elalem: 2, roller: 1 } },
        { text: "Nasıl istiyorsak öyle yaparız; belki sadece nikâh.", scores: {} },
        { text: "Büyük kararları ben alırım, o ayrıntılarla ilgilensin.", scores: { roller: 2, kontrol: 1 } },
        { text: 'Kimseye sormam ama aile "olmaz" derse vazgeçerim.', scores: { elalem: 2, duygu: 1 } },
      ],
    },
    {
      text: "Sevgilin arkadaşlarıyla dört günlük bir tatile gitmek istiyor, sensiz.",
      options: [
        { text: "Bensiz tatil mi? Bu ilişkide öyle bir şey olmaz.", scores: { kontrol: 2, roller: 1 } },
        { text: "Gitsin; dönünce anlatacak çok şeyi olur.", scores: {} },
        { text: "Sesimi çıkarmam ama içime atar, dönünce mesafeli olurum.", scores: { duygu: 2, kontrol: 1 } },
        { text: "Gidebilir ama çevremizde nasıl konuşulur, onu düşünürüm.", scores: { elalem: 2, kontrol: 1 } },
      ],
    },
  ],
  results: [
    {
      id: "modern-partner",
      name: "Modern Partner",
      emoji: "🤝",
      tagline: "Mağaradan çıkmışsın, kapıyı da arkandan kapatmışsın.",
      profile: { roller: 10, kontrol: 10, duygu: 10, elalem: 10 },
      color: "#2F7D6D",
      description: [
        "Senin için ilişki bir ortaklık. Hesabı kimin ödeyeceği, evi kimin toplayacağı ya da kimin nereye gideceği kurallarla değil, konuşarak belirleniyor. Sevgilinin de bir hayatı olduğunu biliyor ve buna alan tanıyorsun.",
        "Duygularını söylemekten çekinmiyorsun; haksız olduğunda özür dileyebiliyor, gözlerin dolduğunda saklamıyorsun. Elalem ne der sorusu kararlarında pek yer tutmuyor.",
        'Tek risk şu: Herkes senin kadar rahat değil. Ailenden ya da sevgilinden gelen geleneksel beklentileri "gereksiz" diye geçiştirmek yerine, onların neden önemli olduğunu sormak ilişkine derinlik katar.',
      ],
      strengths: [
        "Eşit ve güvenli bir ortaklık kuruyorsun",
        "Duygularını açıkça ifade edebiliyorsun",
        "Partnerine nefes alacak alan tanıyorsun",
      ],
      watchOut: [
        "Geleneksel beklentileri küçümsediğin anlar olabilir",
        "Her şeyi konuşmak bazen spontanlığı azaltabilir",
      ],
      bestMatch: "eski-usul-romantik",
    },
    {
      id: "eski-usul-romantik",
      name: "Eski Usul Romantik",
      emoji: "🌹",
      tagline: "Kapıyı açarsın, hesabı ödersin, ama işler senin bildiğin gibi yürür.",
      profile: { roller: 80, kontrol: 30, duygu: 25, elalem: 30 },
      color: "#B4234A",
      description: [
        "Romantizmin eski usulünü seviyorsun: Hesap sende, kapıyı sen açarsın, ev işlerinde de herkesin bir yeri var. Bu senin için baskı değil, düzen ve özen demek.",
        'Bu tavrın çoğu zaman sevgilini değerli hissettiriyor. Ancak roller önceden yazıldığında, karşındakinin farklı bir şey istemeye hakkı olup olmadığı belirsizleşiyor. "Bu iş böyle olur" cümlesi, sorulmamış bir soruyu kapatabiliyor.',
        "Kibarlığını koru ama rolleri birlikte yaz. Sevgilinin hesabı ödemek ya da evin büyük kararlarını vermek istediği bir gün, buna gücenmek yerine merak etmek ilişkine iyi gelecek.",
      ],
      strengths: [
        "Özenli ve cömertsin, karşındakini değerli hissettiriyorsun",
        "İlişkide düzen ve güven duygusu yaratıyorsun",
        "Sorumluluk almaktan kaçmıyorsun",
      ],
      watchOut: [
        "Rolleri karşındakine sormadan dağıtabiliyorsun",
        "Senden farklı bir düzen istendiğinde kırılabiliyorsun",
      ],
      bestMatch: "modern-partner",
    },
    {
      id: "magaranin-bekcisi",
      name: "Mağaranın Bekçisi",
      emoji: "🛡️",
      tagline: "Sevdiğini korursun, ama bazen kafeste.",
      profile: { roller: 30, kontrol: 80, duygu: 25, elalem: 30 },
      color: "#7C2D12",
      description: [
        "Sahiplenmek senin sevgi dilin. Kimlerle çıktığını, mesajın kimden geldiğini, tatilin neden sensiz olduğunu bilmek istiyorsun. Bunu çoğu zaman merak ve korumak için yapıyorsun.",
        "Ama koruma ile kontrol arasındaki çizgi ince. Sevgilin her açıklama yaptığında biraz daha az özgür hissedebilir. Güven sorulan sorularla değil, sorulmayanlarla büyür.",
        'Bir dahaki sefere "Kimler var?" demek yerine "İyi eğlenceler, dönünce anlatırsın" demeyi dene. İlk başta zor gelecek; sonra ilişkinin ne kadar hafiflediğini göreceksin.',
      ],
      strengths: [
        "İlişkine yatırım yapıyor ve sahip çıkıyorsun",
        "Sadakati ciddiye alıyorsun",
        "Zor zamanda ilk koşan sen olursun",
      ],
      watchOut: ["Sorgulamak güveni zamanla aşındırır", "Kıskançlığını sevgi sanabilirsin"],
      bestMatch: "modern-partner",
    },
    {
      id: "tas-kalp",
      name: "Taş Kalp",
      emoji: "🗿",
      tagline: "Hissediyorsun, ama mağaranın duvarına yazıyorsun.",
      profile: { roller: 30, kontrol: 25, duygu: 80, elalem: 25 },
      color: "#4B5563",
      description: [
        "Duygular sende derinde ama dışarı pek çıkmıyor. Özür dilemek yerine çay getiriyor, ağlamak yerine gözüne bir şey kaçırıyor, kırıldığında konuşmak yerine birkaç gün soğuk davranıyorsun.",
        "Bunun nedeni duygusuzluk değil; büyük ihtimalle duyguların gösterilmediği bir yerden öğrendin. Ama sevgilin senin içini okuyamıyor. Söylenmeyen her şey, onun kafasında başka bir hikâyeye dönüşüyor.",
        '"Bu beni üzdü" ya da "Haklıymışsın" gibi kısa cümleler, saatlerce sessizlikten çok daha az yorucu. Başlangıç için küçük bir adım: Bir sonraki tartışmada, susmadan önce tek bir duygunu söyle.',
      ],
      strengths: [
        "Kriz anında sakin ve soğukkanlısın",
        "Sevgini davranışlarla gösterebiliyorsun",
        "Dramaya kolay kapılmıyorsun",
      ],
      watchOut: ["Sessizliğin cezalandırma gibi algılanabilir", "Biriktirdiğin duygular bir gün birden patlayabilir"],
      bestMatch: "eski-usul-romantik",
    },
    {
      id: "elalem-ne-der",
      name: "Elalem Ne Der?",
      emoji: "👀",
      tagline: "İlişkin iki kişilik, ama oy kullanan bütün mahalle.",
      profile: { roller: 30, kontrol: 30, duygu: 25, elalem: 80 },
      color: "#A16207",
      description: [
        'Kararlarında ailenin, akrabaların ve çevrenin sesi güçlü. Kıyafetten tatile, tanışmadan düğüne kadar her adımda önce "Nasıl görünür?" sorusu geliyor. Bu sana güven ve aidiyet veriyor.',
        "Aileye saygı değerli bir şey. Ama ilişkinin bütün kararları başkalarının olası yorumlarına göre verildiğinde, iki kişinin kendi hikâyesi yazılamıyor. Sevgilin kendini sürekli bir sınavda hissedebilir.",
        'Bir dahaki sefere "Elalem ne der?" diye düşündüğünde, ikinci bir soru ekle: "Biz ne istiyoruz?" Çoğu zaman ikisini birlikte gözetmenin bir yolu vardır.',
      ],
      strengths: [
        "Ailene ve köklerine bağlısın",
        "Toplumsal ortamlarda uyumlu ve saygılısın",
        "İlişkiyi ciddiye alıyor, geleceği düşünüyorsun",
      ],
      watchOut: [
        "Başkalarının yorumu ilişkinin önüne geçebilir",
        "Partnerin kendini sürekli değerlendirilmiş hissedebilir",
      ],
      bestMatch: "eski-usul-romantik",
    },
    {
      id: "tam-magara",
      name: "Tam Mağara Adamı",
      emoji: "🦣",
      tagline: "Ateş sende, sopa sende, kurallar da senin.",
      profile: { roller: 72, kontrol: 72, duygu: 70, elalem: 70 },
      color: "#57351C",
      description: [
        "Bu testin şampiyonu sensin. Rolleri sen belirliyor, kimin nereye gideceğini sen onaylıyor, duygularını mağaranın en derin köşesinde saklıyor ve her kararda önce elalemi düşünüyorsun.",
        "Büyük ihtimalle bunların çoğunu sevdiğin için, korumak ve düzeni sürdürmek için yapıyorsun. Ama mağaranın kuralları on bin yıl önce hayatta kalmak içindi; bugün bir ilişkiyi ayakta tutan şey güven, eşitlik ve konuşmak.",
        'Hepsini birden bırakmak zorunda değilsin. Bu hafta tek bir tanesini dene: Bir kez "Sen ne istersin?" diye sor, bir kez sormadan güven, bir kez "Özür dilerim" de. Mağaranın kapısı içeriden açılıyor.',
      ],
      strengths: ["Sadık ve fedakârsın", "İlişkiyi ve geleceği ciddiye alıyorsun", "Sorumluluk almaktan kaçmıyorsun"],
      watchOut: [
        "Kontrol ve sessizlik sevgilini yalnız hissettirebilir",
        "Kuralların, karşındakinin sesini bastırabilir",
      ],
      bestMatch: "modern-partner",
    },
  ],
};
