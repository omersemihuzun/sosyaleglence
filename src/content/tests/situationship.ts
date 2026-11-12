import type { Test } from "@/lib/types";

export const situationship: Test = {
  slug: "situationship-testi",
  title: "Situationship'te misin?",
  summary: "Sevgili değilsiniz ama arkadaş da değilsiniz. Peki tam olarak nesiniz? Gel birlikte bakalım.",
  intro:
    "Situationship: adı konmamış, ne zaman biteceği ya da başlayacağı belli olmayan o ara durum. 15 tanıdık anda ne yaşadığını seç; testi ilişkinize değil, şu anki hikâyene göre çöz.",
  emoji: "🫠",
  color: "#7C3AED",
  category: "ilişki",
  metaDescription:
    "Situationship testi: Belirsizlik, tek taraflılık ve sıcak-soğuk döngüsünü 15 gerçekçi senaryoyla ölç. Aranızdaki şey ilişki mi, yoksa gri bölge mi?",
  headline: {
    label: "Situationship seviyen",
    weights: { belirsizlik: 1, tektaraf: 1, sicaksoguk: 1 },
  },
  dimensions: [
    { id: "belirsizlik", label: "Belirsizlik", low: "Ne olduğunuz belli", high: "Adı yok, tarifi yok" },
    { id: "tektaraf", label: "Tek taraflılık", low: "Emek karşılıklı", high: "Hep sen uğraşıyorsun" },
    { id: "sicaksoguk", label: "Sıcak-soğuk", low: "İstikrarlı", high: "Bir var bir yok" },
  ],
  questions: [
    {
      text: 'Arkadaşın soruyor: "Siz ne oluyorsunuz şimdi?" Cevabın:',
      options: [
        { text: '"Sevgiliyiz" derim; geçen ay konuştuk, ikimiz de biliyoruz.', scores: {} },
        {
          text: '"Görüşüyoruz işte" derim; adını koymak isteyen hep ben oluyorum.',
          scores: { belirsizlik: 2, tektaraf: 1 },
        },
        { text: '"Ben ciddiyim, o bazen ciddi bazen değil" derim.', scores: { tektaraf: 2, sicaksoguk: 1 } },
        {
          text: '"Bu hafta iyiyiz, geçen hafta değildik" derim; adı da yok zaten.',
          scores: { sicaksoguk: 2, belirsizlik: 1 },
        },
      ],
    },
    {
      text: "Hafta sonu için bir şeyler planlamak istiyorsun.",
      options: [
        { text: '"Cumartesi ne yapıyoruz?" diye sorarım; bazen o, bazen ben planlarım.', scores: {} },
        {
          text: 'Plan yapmayız; cuma gecesi "müsait misin?" mesajı gelir ya da gelmez.',
          scores: { belirsizlik: 2, sicaksoguk: 1 },
        },
        { text: 'Ben üç öneri sunarım, o "bakarız" der; hiç bakılmaz.', scores: { tektaraf: 2, belirsizlik: 1 } },
        {
          text: "Bazen bütün hafta sonu beraberiz, bazen cevabı pazartesi gelir.",
          scores: { sicaksoguk: 2, tektaraf: 1 },
        },
      ],
    },
    {
      text: "Onun arkadaşlarıyla tanıştın mı?",
      options: [
        { text: "Birkaçıyla tanıştım; hepsine bayıldığımı söyleyemem ama gruptayım.", scores: {} },
        { text: "Hayır; ilişkimiz sadece ikimiz arasında var gibi.", scores: { belirsizlik: 3 } },
        { text: "Ben onu benimkilerle tanıştırdım; o beni hâlâ tanıştırmadı.", scores: { tektaraf: 2, sicaksoguk: 1 } },
        {
          text: "Bir kere tanıştım, çok iyi geçti; sonra bir daha hiç çağrılmadım.",
          scores: { sicaksoguk: 2, belirsizlik: 1 },
        },
      ],
    },
    {
      text: "Sosyal medyada birbirinizin varlığı:",
      options: [
        { text: "Birlikte fotoğrafımız var; çok paylaşmıyoruz ama saklamıyoruz.", scores: {} },
        {
          text: "Takipleşiyoruz, o kadar; ben bir şey paylaşmaya çekiniyorum.",
          scores: { belirsizlik: 2, tektaraf: 1 },
        },
        { text: "Ben onun her paylaşımını beğeniyorum, o benimkini nadiren.", scores: { tektaraf: 2, belirsizlik: 1 } },
        { text: "Bazen story'sinde ben varım, sonra bir anda arşivliyor.", scores: { sicaksoguk: 3 } },
      ],
    },
    {
      text: 'Gece 23:30, telefonun titredi. Ondan: "naber 👀"',
      options: [
        { text: "Bu bizim normal saatimiz; gün içinde de zaten konuşuyoruz.", scores: {} },
        {
          text: "Genelde sadece bu saatlerde yazıyor; gündüz pek sesi çıkmıyor.",
          scores: { belirsizlik: 2, sicaksoguk: 1 },
        },
        { text: "Hemen cevap veririm; bütün gün bu mesajı bekledim.", scores: { tektaraf: 3 } },
        {
          text: "Üç gündür yoktu, şimdi hiçbir şey olmamış gibi yazıyor; yine de dönerim.",
          scores: { sicaksoguk: 2, tektaraf: 1 },
        },
      ],
    },
    {
      text: '"Biz neyiz?" konuşmasını açmayı düşündün.',
      options: [
        { text: "Açtık, konuştuk; tam istediğim cevap değildi ama netleştik.", scores: {} },
        { text: "Açmıyorum; cevabından korkuyorum.", scores: { belirsizlik: 3 } },
        {
          text: 'Açtım; "Şimdilik böyle güzel" dedi, ben de güzelmiş gibi yaptım.',
          scores: { tektaraf: 2, belirsizlik: 1 },
        },
        {
          text: "Açtım; bir hafta çok ilgiliydi, sonra yine eskisi gibi oldu.",
          scores: { sicaksoguk: 2, belirsizlik: 1 },
        },
      ],
    },
    {
      text: "Kötü bir gün geçirdin ve ona anlatmak istiyorsun.",
      options: [
        { text: "Ararım; her zaman doğru şeyi söylemez ama dinler.", scores: {} },
        { text: "Anlatıp anlatmamakta kararsızım; o kadar yakın mıyız?", scores: { belirsizlik: 2, tektaraf: 1 } },
        { text: "Anlatırım ama konu bir şekilde onun gününe döner.", scores: { tektaraf: 3 } },
        { text: 'Hangi moddaysa: ya çok ilgilenir ya "üzüldüm" yazar geçer.', scores: { sicaksoguk: 2, tektaraf: 1 } },
      ],
    },
    {
      text: "Doğum günün yaklaşıyor.",
      options: [
        { text: "Birlikte kutlayacağız; yer konusunda hâlâ anlaşamadık.", scores: {} },
        {
          text: "Hiç konuşmadık; o güne kadar ne olacağımız da belli değil.",
          scores: { belirsizlik: 2, sicaksoguk: 1 },
        },
        {
          text: "Ben onunkini kutlamıştım; benimki aklında mı, emin değilim.",
          scores: { tektaraf: 2, belirsizlik: 1 },
        },
        {
          text: "Geçen özel günde ortadan kaybolmuştu; bu sefer ne yapacak merak ediyorum.",
          scores: { sicaksoguk: 2, tektaraf: 1 },
        },
      ],
    },
    {
      text: "Başka biriyle de konuşuyor olabilir mi?",
      options: [
        { text: "Hayır, bunu konuştuk; ara ara içim kıpır etse de güveniyorum.", scores: {} },
        { text: "Olabilir, hiç sormadım; sormaya hakkım var mı onu da bilmiyorum.", scores: { belirsizlik: 3 } },
        { text: "Ben kimseyle konuşmuyorum ama o konuşuyor olabilir.", scores: { tektaraf: 2, belirsizlik: 1 } },
        { text: "Arada kayboluşları bana bunu düşündürüyor.", scores: { sicaksoguk: 2, belirsizlik: 1 } },
      ],
    },
    {
      text: "Geleceğe dair bir şey konuştuğunuzda:",
      options: [
        { text: "Seneye bir tatil konuştuk; detaylarda hâlâ farklıyız.", scores: {} },
        { text: "Gelecekten hiç bahsetmiyoruz; sadece bugün var.", scores: { belirsizlik: 2, tektaraf: 1 } },
        { text: "Ben bahsediyorum; o gülüp konuyu değiştiriyor.", scores: { tektaraf: 2, sicaksoguk: 1 } },
        { text: 'Bir gün "Seninle evlenirim" diyor, ertesi gün iki gün yazmıyor.', scores: { sicaksoguk: 3 } },
      ],
    },
    {
      text: "Bir buluşmayı son anda iptal etti.",
      options: [
        { text: "Nedenini söyledi, yeni gün önerdi; biraz bozuldum yine de.", scores: {} },
        { text: '"Başka zaman" dedi; o başka zaman henüz gelmedi.', scores: { belirsizlik: 2, sicaksoguk: 1 } },
        { text: "Hazırlanmıştım bile; yine anlayışlı davranan ben oldum.", scores: { tektaraf: 2, sicaksoguk: 1 } },
        { text: "Ertesi gün çok güzel bir sürpriz yaptı; sonra yine iptal.", scores: { sicaksoguk: 2, tektaraf: 1 } },
      ],
    },
    {
      text: "WhatsApp'ta mesajlaşma düzeniniz:",
      options: [
        { text: "Gün içinde ara ara; ikimiz de yazıyoruz, bazen ikimiz de unutuyoruz.", scores: {} },
        { text: "Ne zaman konuşacağımız hiç belli değil.", scores: { belirsizlik: 2, sicaksoguk: 1 } },
        { text: "Konuşmaları hep ben başlatıyorum.", scores: { tektaraf: 3 } },
        {
          text: "Ya saatlerce yazışıyoruz ya da günlerce hiç; ben bekliyorum.",
          scores: { sicaksoguk: 2, tektaraf: 1 },
        },
      ],
    },
    {
      text: "Arkadaşların bu durum hakkında ne diyor?",
      options: [
        { text: '"Yakışıyorsunuz" diyen de var, "acele etme" diyen de.', scores: {} },
        { text: '"Bu nasıl bir ilişki, anlamadık."', scores: { belirsizlik: 2, tektaraf: 1 } },
        { text: '"Bu kadar emek vermene değer mi?"', scores: { tektaraf: 2, sicaksoguk: 1 } },
        { text: '"Yine mi küstünüz, yine mi barıştınız?"', scores: { sicaksoguk: 2, belirsizlik: 1 } },
      ],
    },
    {
      text: "Bu ilişki sana genelde nasıl hissettiriyor?",
      options: [
        { text: "Genelde huzurlu; sakin, bazen fazla sakin.", scores: {} },
        { text: "Askıda; ne ileri gidiyor ne bitiyor.", scores: { belirsizlik: 2, tektaraf: 1 } },
        { text: "Yorgun; sanki tek başıma ayakta tutuyorum.", scores: { tektaraf: 2, sicaksoguk: 1 } },
        { text: "Lunapark gibi: çok yüksek ve çok alçak.", scores: { sicaksoguk: 2, belirsizlik: 1 } },
      ],
    },
    {
      text: 'Bir sabah "Bu durumu bitirsem mi?" diye düşündün.',
      options: [
        { text: "Her ilişkide olduğu gibi aklımdan geçti; konuştuk, geçti.", scores: {} },
        { text: "Bitirmek için önce başlamış olmamız lazım, değil mi?", scores: { belirsizlik: 2, sicaksoguk: 1 } },
        { text: "Düşündüm ama benim için ondan vazgeçmek çok zor.", scores: { tektaraf: 2, belirsizlik: 1 } },
        { text: "Her düşündüğümde tam o gün çok tatlı bir şey yapıyor.", scores: { sicaksoguk: 2, tektaraf: 1 } },
      ],
    },
  ],
  results: [
    {
      id: "net-iliski",
      name: "Net İlişki",
      emoji: "💚",
      tagline: "Siz situationship değil, düpedüz ilişkisiniz.",
      profile: { belirsizlik: 8, tektaraf: 8, sicaksoguk: 8 },
      color: "#2F7D6D",
      description: [
        'Ne olduğunuzu biliyorsunuz, planlarınız var, emek karşılıklı. Arkadaşların sana "Siz ne oluyorsunuz?" diye sormuyor bile, çünkü cevap belli.',
        "Her şey kusursuz demek değil bu. Ama belirsizliğin yarattığı o sürekli tahmin etme yorgunluğunu yaşamıyorsun. Enerjini ilişkiyi anlamaya değil, yaşamaya harcıyorsun.",
        "Bu netliği korumanın yolu da aynı: konuşmaya devam etmek. Bugün net olan şey, konuşulmazsa yarın griye dönebilir.",
      ],
      strengths: ["İletişiminiz açık", "Karşılıklı emek var", "Geleceği birlikte konuşabiliyorsunuz"],
      watchOut: ["Rahatlık rutine dönüşmesin", "Netliği korumak için düzenli konuşmaya devam edin"],
      bestMatch: "net-iliski",
    },
    {
      id: "gri-bolge",
      name: "Gri Bölge",
      emoji: "🌫️",
      tagline: "Bir şey var ama adı yok. Sizin bile.",
      profile: { belirsizlik: 80, tektaraf: 20, sicaksoguk: 20 },
      color: "#64748B",
      description: [
        "Görüşüyorsunuz, yakınsınız, belki de çok iyi anlaşıyorsunuz. Ama ne olduğunuzu ikiniz de söylemiyorsunuz. Etiket koymamak bir süre özgürlük gibi geldi; şimdi bir boşluk gibi.",
        "Bu durumun en yorucu yanı, neye hakkın olduğunu bilememek. Kıskanabilir misin, plan yapabilir misin, özel günlerde bir şey bekleyebilir misin? Hep bir tahmin oyunu.",
        "Gri bölgeden çıkmanın tek yolu bir soru sormak. Cevap ne olursa olsun, netlik belirsizlikten daha az acıtır.",
      ],
      strengths: ["Baskısız ve rahat bir bağınız var", "Birbirinize alan tanıyorsunuz"],
      watchOut: [
        "Konuşulmayan beklentiler birikiyor",
        '"Hakkım var mı?" sorusu seni yıpratabilir',
        "Netlik istemek talepkârlık değil",
      ],
      bestMatch: "net-iliski",
    },
    {
      id: "tek-tarafli",
      name: "Tek Kişilik Orkestra",
      emoji: "🎻",
      tagline: "Bu ilişkiyi ayakta tutan sensin. Fark ediyor musun?",
      profile: { belirsizlik: 25, tektaraf: 80, sicaksoguk: 20 },
      color: "#B0287A",
      description: [
        "Mesajları sen başlatıyorsun, planları sen yapıyorsun, sabreden ve anlayan hep sen oluyorsun. O da bu durumdan memnun görünüyor; ama memnuniyet ile emek aynı şey değil.",
        "Muhtemelen onun ilgisini kazanmak için daha çok çabalamanın işe yarayacağını düşünüyorsun. Ama tek taraflı emek çoğu zaman karşı tarafı daha rahat, seni daha yorgun yapıyor.",
        "Küçük bir deney yap: Bir süre ilk adımı atma. Ne olacağı sana çok şey anlatacak.",
      ],
      strengths: ["Sadık ve emek veren birisin", "Sevdiğin için çabalamaktan korkmuyorsun"],
      watchOut: [
        "Emeğin karşılıksız kalıyor olabilir",
        "Kendi ihtiyaçlarını sürekli erteliyorsun",
        "Sevgi pazarlıkla kazanılmaz",
      ],
      bestMatch: "net-iliski",
    },
    {
      id: "sicak-soguk",
      name: "Isıt-Soğut Döngüsü",
      emoji: "🎢",
      tagline: "Bir gün dünyanın merkezisin, ertesi gün mesajın görülmüyor bile.",
      profile: { belirsizlik: 30, tektaraf: 25, sicaksoguk: 80 },
      color: "#C2410C",
      description: [
        "En güzel günleriniz gerçekten çok güzel. O yüzden kayboluşlar daha çok acıtıyor. Bir hafta çok ilgili, bir hafta ortada yok; sen de bu iniş çıkışın içinde sürekli tetikte yaşıyorsun.",
        "Psikolojide buna aralıklı pekiştirme deniyor: Ne zaman geleceği belli olmayan ilgi, insanı istikrarlı ilgiden bile daha sıkı bağlayabiliyor. Bırakmanın bu kadar zor olması bundan.",
        "Kendine sor: Beni mutlu eden o, yoksa geri döndüğü anın rahatlaması mı? İstikrar sıkıcı değil; huzurlu.",
      ],
      strengths: ["Güçlü bir çekim yaşıyorsunuz", "İyi anlarınız gerçekten çok iyi"],
      watchOut: [
        "Döngü seni duygusal olarak tüketebilir",
        "Kayboluşları normalleştirme",
        "Rahatlama hissi, mutlulukla karıştırılabilir",
      ],
      bestMatch: "net-iliski",
    },
    {
      id: "tam-situationship",
      name: "Resmen Situationship",
      emoji: "🫠",
      tagline: "Adı yok, emek tek taraflı, ilgi bir var bir yok. Tam bir paket.",
      profile: { belirsizlik: 60, tektaraf: 60, sicaksoguk: 60 },
      color: "#7C3AED",
      description: [
        "Testin tüm işaretleri aynı yeri gösteriyor: Ne olduğunuz belli değil, emeğin çoğunu sen veriyorsun ve onun ilgisi havaya göre değişiyor. Bu tam anlamıyla bir situationship.",
        "Bunu okumak canını sıkabilir ama aslında iyi bir haber var: Durumu artık adıyla biliyorsun. Adı konan şeyle baş etmek, adı konmayan şeyle baş etmekten çok daha kolay.",
        "İki yol var: Ya açık bir konuşmayla netlik istersin ya da kendine daha net davranan birini hak ettiğini kabul edersin. İkisi de cesaret ister, ikisi de seni bu askıdan kurtarır.",
      ],
      strengths: ["Durumu fark edecek kadar kendine dürüstsün", "Duygularını derin yaşıyorsun"],
      watchOut: [
        "Belirsizlik özgüvenini aşındırabilir",
        "Beklemek bir plan değil",
        "Hak ettiğin netliği istemekten çekinme",
      ],
      bestMatch: "net-iliski",
    },
  ],
};
