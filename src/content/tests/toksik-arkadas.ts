import type { Test } from "@/lib/types";

export const toksikArkadas: Test = {
  slug: "toksik-arkadas-testi",
  title: "Toksik Arkadaş Sen misin?",
  summary: "Herkesin hayatında bir toksik arkadaş var. Eğer aklına kimse gelmiyorsa... bu testi çöz.",
  intro:
    'Toksiklik çoğu zaman masum görünür: küçük bir kıskançlık, "aramızda kalsın" diye başlayan bir hikâye, sadece işin düşünce atılan bir mesaj. 15 arkadaşlık anında dürüstçe ne yapacağını seç.',
  emoji: "☢️",
  color: "#65A30D",
  category: "arkadaşlık",
  metaDescription:
    "Toksik arkadaş testi: Kıskançlık, dedikodu, çıkarcılık ve yargılayıcılık eğilimini 15 gerçekçi senaryoyla ölç. Arkadaşlıklarında toksik olan sen misin?",
  headline: {
    label: "Toksik arkadaşlık seviyen",
    weights: { kiskanclik: 1, dedikodu: 1, cikar: 1, yargi: 1 },
  },
  dimensions: [
    { id: "kiskanclik", label: "Rekabet", low: "Başarısına sevinirsin", high: "İçin içini yer" },
    { id: "dedikodu", label: "Dedikodu", low: "Sır saklarsın", high: "Haber senden çıkar" },
    { id: "cikar", label: "Çıkarcılık", low: "Her zaman oradasın", high: "Sadece lazım olunca" },
    { id: "yargi", label: "Yargılama", low: "Kabul edersin", high: "Herkese not verirsin" },
  ],
  questions: [
    {
      text: "Yakın arkadaşın hayalindeki işe kabul edildi. Aynı yere senin başvurun reddedilmişti.",
      options: [
        { text: "Tebrik ederim; hayal kırıklığımı ona hiç yansıtmam, evde yaşarım.", scores: {} },
        {
          text: '"Torpil var mı?" diye şakayla karışık sorarım; içimdeki soru da bu.',
          scores: { kiskanclik: 2, yargi: 1 },
        },
        {
          text: "Tebrik ederim; orada bir kapı açılırsa beni hatırlamasını söylerim.",
          scores: { cikar: 2, kiskanclik: 1 },
        },
        { text: "Tebrik ederim, sonra bir süre az görüşürüm; kendime odaklanmalıyım.", scores: { kiskanclik: 3 } },
      ],
    },
    {
      text: "Bir arkadaşın sana çok özel bir sır verdi. Sır, ortak bir arkadaşınızı da ilgilendiriyor.",
      options: [
        { text: "Kimseye söylemem; o arkadaşın yanında rol yapmak zorunda kalsam da.", scores: {} },
        { text: "En güvendiğim bir kişiye danışırım; tek başıma taşımak zor.", scores: { dedikodu: 3 } },
        { text: "İlgili arkadaşa üstü kapalı bir ima yaparım; bilmeye hakkı var.", scores: { dedikodu: 2, yargi: 1 } },
        {
          text: "Söylemem; ama bu bilgi bir gün işe yarar, aklımın köşesinde dursun.",
          scores: { cikar: 2, dedikodu: 1 },
        },
      ],
    },
    {
      text: "Haftalardır görüşmediğin bir arkadaşın var. Şimdi taşınıyorsun ve yardım lazım.",
      options: [
        { text: "İstemeye utanırım; nakliyeye fazla para verip kendim hallederim.", scores: {} },
        { text: '"Uzun zaman oldu, bu arada cumartesi boş musun?" diye yazarım.', scores: { cikar: 3 } },
        {
          text: "Önce kahveye çağırırım; biraz sohbet, biraz dedikodu, sonra yardım.",
          scores: { cikar: 2, dedikodu: 1 },
        },
        {
          text: "Yardım isterim; gelmezse bu arkadaşlığın ne olduğunu anlamış olurum.",
          scores: { yargi: 2, cikar: 1 },
        },
      ],
    },
    {
      text: "Arkadaşın yeni sevgilisinin fotoğrafını gösteriyor. Sana pek sıcak gelmedi.",
      options: [
        { text: '"Çok tatlı" derim; aklıma takılanı o sormadıkça söylemem.', scores: {} },
        { text: '"Senden biraz kısa ama olsun" gibi dürüst bir yorum yaparım.', scores: { yargi: 2, kiskanclik: 1 } },
        { text: 'Fotoğrafı diğer arkadaşlara da atar, "Sizce?" diye sorarım.', scores: { dedikodu: 2, yargi: 1 } },
        { text: "Benim sevgilim yokken onunkini dinlemek zor; konuyu değiştiririm.", scores: { kiskanclik: 3 } },
      ],
    },
    {
      text: "Grubun bir üyesi o akşam gelmedi. Masada onun konusu açıldı ve herkes bir şey biliyor.",
      options: [
        { text: '"Burada değilken konuşmayalım" derim; ortam biraz soğusa da.', scores: {} },
        {
          text: "Hikâyeye bildiğim yeni detayları eklerim; bende daha fazlası var.",
          scores: { dedikodu: 2, kiskanclik: 1 },
        },
        { text: '"O zaten hep böyle" derim; herkes biliyor, kimse söylemiyor.', scores: { yargi: 2, dedikodu: 1 } },
        { text: "Dinler, susarım; kimin ne düşündüğünü bilmek işime yarar.", scores: { cikar: 2, dedikodu: 1 } },
      ],
    },
    {
      text: "Arkadaşın sana aylardır uğraştığı bir işi gösterdi. Pek beğenmedin.",
      options: [
        { text: "Beğendiğim kısmı söylerim; gerisini söylemem, belki boşa umut veririm.", scores: {} },
        { text: '"Bence bu sana göre değil" derim; daha fazla zaman kaybetmesin.', scores: { yargi: 3 } },
        { text: '"Çok güzel" derim; başkalarına ise gerçek fikrimi söylerim.', scores: { dedikodu: 2, yargi: 1 } },
        { text: "Benimkinden iyi olmadığını görünce içten içe rahatlarım.", scores: { kiskanclik: 2, yargi: 1 } },
      ],
    },
    {
      text: "Arkadaşın zor bir dönemden geçiyor ve aylardır sürekli aynı şeyleri anlatıyor.",
      options: [
        { text: "Dinlemeye devam ederim; kendi enerjim tükense de.", scores: {} },
        { text: "Aramalarına geç dönmeye başlarım; benim de taşıyacak derdim var.", scores: { cikar: 2, yargi: 1 } },
        { text: '"Artık bunu aşman lazım" derim; acı ama birinin söylemesi gerek.', scores: { yargi: 2, cikar: 1 } },
        {
          text: 'Başkalarına "Çok yorucu oldu" diye anlatırım; içimi dökmem lazım.',
          scores: { dedikodu: 2, yargi: 1 },
        },
      ],
    },
    {
      text: "Arkadaşının sosyal medya hesabı patladı, takipçileri hızla artıyor.",
      options: [
        { text: "Desteklerim ama içerikleri beni sarmıyor; sık yorum yapmam.", scores: {} },
        { text: "Artık paylaşımlarını beğenmem; algoritma zaten yeterince seviyor.", scores: { kiskanclik: 3 } },
        { text: '"Değiştin" diye takılırım; şakam yarı ciddi.', scores: { yargi: 2, kiskanclik: 1 } },
        { text: "Benim hesabımı da paylaşmasını isterim; arkadaş değil miyiz?", scores: { cikar: 2, kiskanclik: 1 } },
      ],
    },
    {
      text: "Grupta biri bir hata yaptı ve herkesin önünde mahcup oldu. Gerçekten de komikti.",
      options: [
        { text: "Gülmemi tutar, konuyu değiştiririm; o an kimse gülmesin.", scores: {} },
        { text: "Bu anı grubun iç esprisi yaparım; zamanla o da güler.", scores: { yargi: 2, dedikodu: 1 } },
        { text: "Başka bir grupta da anlatırım; bu kadar komik şey saklanmaz.", scores: { dedikodu: 3 } },
        { text: "İçten içe biraz hoşuma gider; hep kusursuz görünüyordu.", scores: { kiskanclik: 2, yargi: 1 } },
      ],
    },
    {
      text: "En yakın arkadaşın son aylarda başka biriyle çok yakınlaştı.",
      options: [
        { text: "Sevinirim; aradığımda eskisi gibi açmayınca da sessizce üzülürüm.", scores: {} },
        { text: "O kişinin kusurlarını arkadaşıma fark ettirmeye çalışırım.", scores: { kiskanclik: 2, yargi: 1 } },
        { text: "Bana vakit ayırmıyorsa ben de başka insanlara yatırım yaparım.", scores: { kiskanclik: 2, cikar: 1 } },
        { text: "O kişi hakkında bir şey duyarsam hemen arkadaşıma iletirim.", scores: { dedikodu: 2, kiskanclik: 1 } },
      ],
    },
    {
      text: "Arkadaşının doğum günü. Bu hafta işten başını kaldıramıyorsun.",
      options: [
        { text: "Gidemem; ertesi gün uzun uzun ararım, geç olsun güç olmasın.", scores: {} },
        { text: "Story'ye güzel bir paylaşım yaparım; herkes görür, yeterli.", scores: { cikar: 3 } },
        {
          text: "Gitmem ama kimlerin gelip nasıl geçtiğini sonra ayrıntılı sorarım.",
          scores: { dedikodu: 2, cikar: 1 },
        },
        { text: "Her yıl aynı kutlama; bu yıl atlasam bir şey olmaz bence.", scores: { yargi: 2, cikar: 1 } },
      ],
    },
    {
      text: "Arkadaşın kilo aldı ve bu konuda hassas. Sağlığı için biraz endişelisin.",
      options: [
        { text: "Hiç değinmem; bir gün kendisi açarsa o zaman konuşurum.", scores: {} },
        { text: '"Birlikte spora başlayalım" derim; iyiliği için söylüyorum.', scores: { yargi: 3 } },
        { text: 'Arkasından "Fark ettiniz mi?" diye sorarım; merak ediyorum.', scores: { dedikodu: 2, yargi: 1 } },
        { text: "Yanında kendimi daha iyi hissettiğimi fark ederim.", scores: { kiskanclik: 2, yargi: 1 } },
      ],
    },
    {
      text: "Arkadaşın borç para istedi. Daha önce de istemişti ve geç ödemişti.",
      options: [
        { text: "Veririm; geri gelmezse kaybettiğim para olarak görürüm.", scores: {} },
        { text: 'Veririm ama ortak arkadaşlara "Yine istedi" diye anlatırım.', scores: { dedikodu: 2, yargi: 1 } },
        { text: '"Sen paranı yönetemiyorsun" derim; birinin söylemesi lazım.', scores: { yargi: 3 } },
        { text: "Veririm; karşılığında bir iyilik isteyeceğimi aklımda tutarım.", scores: { cikar: 3 } },
      ],
    },
    {
      text: "Uzun süredir çalıştığın bir şeyde büyük bir başarı elde ettin.",
      options: [
        { text: "Paylaşırım; kim nasıl karşılarsa karşılasın, umursamam.", scores: {} },
        {
          text: "Özellikle beni kıskanacağını bildiğim kişiye, herkesin içinde anlatırım.",
          scores: { kiskanclik: 2, dedikodu: 1 },
        },
        { text: "Anlatırken diğerlerinin neden yapamadığını da eklerim.", scores: { yargi: 2, kiskanclik: 1 } },
        { text: "Bana kim faydalı olabilir diye düşünüp ona göre paylaşırım.", scores: { cikar: 2, kiskanclik: 1 } },
      ],
    },
    {
      text: "Dürüst ol: Arkadaşlarından biri sana bu testi gönderse ne düşünürsün?",
      options: [
        { text: "Çözer, sonucumu paylaşırım; çıkan neyse o.", scores: {} },
        { text: '"Neden bana gönderdi?" diye alınırım.', scores: { yargi: 2, kiskanclik: 1 } },
        {
          text: 'Grupta "Bana bunu gönderdi, inanabiliyor musunuz?" diye anlatırım.',
          scores: { dedikodu: 2, yargi: 1 },
        },
        { text: "Onun sonucunun benimkinden kötü çıkmasını umarım.", scores: { kiskanclik: 2, yargi: 1 } },
      ],
    },
  ],
  results: [
    {
      id: "altin-kalp",
      name: "Altın Kalp",
      emoji: "💛",
      tagline: "Herkesin bir tane olmasını istediği arkadaş.",
      profile: { kiskanclik: 8, dedikodu: 8, cikar: 8, yargi: 8 },
      color: "#2F7D6D",
      description: [
        "Arkadaşlarının başarısına gerçekten seviniyor, sırlarını saklıyor, kötü günlerinde de yanlarında oluyorsun. Bunlar basit görünüyor ama her arkadaşlıkta bulunmuyor.",
        "Seninle arkadaş olan biri kendini güvende hissediyor. Söylediklerinin başkalarına gitmeyeceğini, yargılanmayacağını ve ihtiyaç anında yalnız kalmayacağını biliyor.",
        "Tek bir uyarı: Altın kalpli insanlar bazen tek taraflı arkadaşlıklara fazla emek verir. Senin verdiğin değeri sana da veren insanları seçmeyi unutma.",
      ],
      strengths: [
        "Güvenilirsin, sır saklıyorsun",
        "Arkadaşlarının başarısına içtenlikle seviniyorsun",
        "Kötü günde ortadan kaybolmuyorsun",
      ],
      watchOut: ["Tek taraflı arkadaşlıklara fazla emek verme", "Sınır koymak da sağlıklı arkadaşlığın parçası"],
      bestMatch: "altin-kalp",
    },
    {
      id: "gizli-rakip",
      name: "Gizli Rakip",
      emoji: "🏁",
      tagline: "Arkadaşının başarısı, senin içinde küçük bir yarış başlatıyor.",
      profile: { kiskanclik: 80, dedikodu: 15, cikar: 15, yargi: 25 },
      color: "#C2410C",
      description: [
        'Arkadaşların iyi bir şey yaşadığında tebrik ediyorsun ama içinden bir ses "Neden o, neden ben değil?" diyor. Bazen beğenmemek, bazen küçük bir yorum, bazen sadece konuyu değiştirmek...',
        "Bu his çok insani ve genellikle kendinle ilgili bir eksiklik duygusundan geliyor. Sorun kıskançlığın kendisi değil, onun arkadaşlığına sızması.",
        'Bir dahaki sefere o hissi fark ettiğinde içinden şunu söyle: "Onun kazanması benim kaybetmem demek değil." Arkadaşının başarısı, senin için de bir ilham olabilir.',
      ],
      strengths: [
        "Hırslısın ve kendini geliştirmek istiyorsun",
        "Hislerini fark edebiliyorsun",
        "Rekabet seni motive ediyor",
      ],
      watchOut: ["Kıskançlık sessizce arkadaşlıkları aşındırır", "Kendini sürekli kıyaslamak seni mutsuz eder"],
      bestMatch: "altin-kalp",
    },
    {
      id: "haber-ajansi",
      name: "Haber Ajansı",
      emoji: "📢",
      tagline: "Grupta olan her şey önce sana ulaşır, sonra herkese.",
      profile: { kiskanclik: 15, dedikodu: 80, cikar: 15, yargi: 25 },
      color: "#B0287A",
      description: [
        "Kim kimle görüşüyor, kim kime küs, kim işten ayrılıyor... Hepsini biliyorsun ve paylaşmak sana bir bağ kurma yolu gibi geliyor. Hikâye anlatmayı seviyorsun ve çok da iyi anlatıyorsun.",
        "Ama arkadaşların bir süre sonra bir şeyi fark eder: Sana anlatılan sır, bir şekilde başkalarına ulaşıyor. Ve sana bir şey anlatmadan önce iki kez düşünmeye başlarlar.",
        'Dedikodu kısa süreli bir yakınlık hissi verir ama uzun vadede güveni yok eder. Bir hikâyeyi anlatmadan önce sor: "O burada olsaydı bunu anlatır mıydım?"',
      ],
      strengths: ["Sosyal ve iletişimi güçlüsün", "Grubun nabzını tutuyorsun", "Hikâye anlatmakta çok iyisin"],
      watchOut: ["Sır taşımak güveni kalıcı olarak zedeler", "Konuşulan kişi sonunda her şeyi öğrenir"],
      bestMatch: "altin-kalp",
    },
    {
      id: "lazim-olunca",
      name: "Sadece Lazım Olunca",
      emoji: "📞",
      tagline: "Telefonun çaldığında arkadaşların ne isteyeceğini merak ediyor.",
      profile: { kiskanclik: 15, dedikodu: 15, cikar: 80, yargi: 15 },
      color: "#3B6FD9",
      description: [
        "Arkadaşlıklarını genellikle ihtiyaç anında hatırlıyorsun: taşınma, borç, bir tanıdık, bir iyilik. Bunu kötü niyetle yapmıyorsun, sadece hayatın yoğun ve aklına o zaman geliyor.",
        "Ama karşı taraf için bu tek yönlü bir ilişki gibi hissettiriyor. O sana yazdığında cevabın gecikiyor, ama sen bir şeye ihtiyaç duyduğunda hemen ortaya çıkıyorsun.",
        'Arkadaşlık bir banka hesabı gibi: Sadece çekim yaparsan bir gün bakiye biter. Hiçbir şey istemeden atılmış bir "Nasılsın?" mesajı, en büyük iyilikten daha değerli olabilir.',
      ],
      strengths: ["Pratik ve çözüm odaklısın", "Ne istediğini açıkça söyleyebiliyorsun", "Geniş bir çevren var"],
      watchOut: ["Tek taraflı arkadaşlıklar zamanla kaybolur", "Arkadaşlarının kötü günlerinde de orada ol"],
      bestMatch: "altin-kalp",
    },
    {
      id: "acimasiz-juri",
      name: "Acımasız Jüri",
      emoji: "🧐",
      tagline: '"Ben sadece dürüstüm" diyorsun. Arkadaşların başka bir şey diyor.',
      profile: { kiskanclik: 25, dedikodu: 20, cikar: 15, yargi: 80 },
      color: "#4C1D95",
      description: [
        "Kıyafetler, sevgililer, kariyer kararları, kilolar... Her konuda bir fikrin var ve onu söylemekten çekinmiyorsun. Bunu dürüstlük olarak görüyorsun ve bazen gerçekten işe yarıyor.",
        "Ama dürüstlük ile yargılamak arasında ince bir çizgi var. İstenmeyen tavsiyeler ve küçük iğnelemeler, arkadaşlarının yanında kendini sürekli değerlendiriliyormuş gibi hissetmesine yol açabilir.",
        'Bir yorum yapmadan önce kendine sor: Bu söz ona yardım edecek mi, yoksa sadece benim fikrimi mi gösterecek? Bazen en dürüst cümle "Seni seviyorum, ne karar verirsen yanındayım" olur.',
      ],
      strengths: ["Dürüst ve açık sözlüsün", "Arkadaşlarının hata yapmasını istemiyorsun", "Net fikirlerin var"],
      watchOut: [
        "İstenmeyen eleştiri arkadaşlarını kendini savunmaya iter",
        "Herkesin seninle aynı standartlara sahip olması gerekmiyor",
      ],
      bestMatch: "altin-kalp",
    },
    {
      id: "zehirli-sarmasik",
      name: "Zehirli Sarmaşık",
      emoji: "🌿",
      tagline: "Biraz kıskançlık, biraz dedikodu, biraz da yargı. Tam paket.",
      profile: { kiskanclik: 55, dedikodu: 55, cikar: 55, yargi: 55 },
      color: "#65A30D",
      description: [
        "Testin dürüst sonucu şu: Arkadaşlıklarında zorlandığında birçok toksik kalıbı bir arada kullanıyorsun. Kıyaslıyor, konuşuyor, yargılıyor ve bazen sadece ihtiyacın olduğunda ortaya çıkıyorsun.",
        "Bu davranışların arkasında genellikle bir güvensizlik ya da yalnız kalma korkusu yatar. Başkalarını küçültmek, kısa süreliğine insana kendini daha iyi hissettirir.",
        "Bu testi dürüstçe çözmüş olman değişmeye hazır olduğunu gösteriyor. Tek bir davranışla başla: Bu hafta bir arkadaşına hiçbir şey istemeden, sadece onu düşündüğün için yaz.",
      ],
      strengths: ["Kendinle yüzleşme cesaretin var", "Sosyal olarak çok canlısın", "Değişmek için ilk adımı attın"],
      watchOut: [
        "Birden fazla toksik kalıp arkadaşlarını uzaklaştırabilir",
        "Güvensizliğin kaynağına bakmak işe yarar",
      ],
      bestMatch: "altin-kalp",
    },
  ],
};
