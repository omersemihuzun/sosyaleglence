import type { Bracket } from "@/lib/bracket-types";

export const dugun: Bracket = {
  slug: "hayalindeki-dugun",
  title: "Hayalindeki Düğün",
  prompt: "Düğünün hangisi gibi olsun?",
  summary: "Kır düğünü mü, Boğaz'da yalı mı, sadece nikâh mı? 16 düğün tarzı arasından hayalindekini seç.",
  emoji: "💍",
  color: "#8E3B63",
  metaDescription:
    "Hayalindeki düğün nasıl? Kır düğünü, sahil düğünü, köy düğünü, sade nikâh ve daha fazlası. 16 düğün tarzını eleme usulüyle karşılaştır.",
  championLabel: "Hayalimdeki düğün",
  related: { href: "/eleme/balayi-rotani-sec", label: "Sırada balayı var: rotanı seç" },
  items: [
    {
      id: "kir",
      name: "Kır düğünü",
      emoji: "🌾",
      detail: "Ağaçların altında, ışık zincirleri, uzun masalar",
      meaning:
        "Doğal ve samimi bir başlangıç istiyorsun. Gösterişten çok atmosfere, kalabalıktan çok sıcaklığa önem veriyorsun.",
    },
    {
      id: "sahil",
      name: "Gün batımında sahil düğünü",
      emoji: "🌅",
      detail: "Çıplak ayak, deniz kenarında yemin",
      meaning: "Romantik ve özgürsün. Hayatının en önemli anının bir tablo gibi olmasını istiyorsun.",
    },
    {
      id: "yali",
      name: "Boğaz'da yalı düğünü",
      emoji: "🌉",
      detail: "Işıklı köprü, şık davetliler, canlı orkestra",
      meaning: "Zarafeti ve büyük anları seviyorsun. Bu gecenin herkesin aklında kalmasını istiyorsun.",
    },
    {
      id: "koy",
      name: "Geleneksel köy düğünü",
      emoji: "🥁",
      detail: "Davul zurna, halay, üç gün sürer",
      meaning: "Köklerine bağlısın. Senin için düğün iki kişinin değil, iki ailenin ve bütün bir köyün kutlaması.",
    },
    {
      id: "nikah",
      name: "Sadece nikâh ve aile yemeği",
      emoji: "🖋️",
      detail: "20 kişi, sade, telaşsız",
      meaning:
        "Önemli olanın tören değil evlilik olduğunu düşünüyorsun. Parayı ve enerjiyi ortak geleceğinize saklamayı tercih ediyorsun.",
    },
    {
      id: "kacamak",
      name: "İkimiz, bir şahit, uzak bir şehir",
      emoji: "✈️",
      detail: "Kimseye söylemeden, sonra sürpriz haber",
      meaning:
        "Kuralları kendin koyuyorsun. Bu gün sadece ikinize ait olsun, başkalarının beklentileri sizi ilgilendirmez.",
    },
    {
      id: "salon",
      name: "Klasik düğün salonu",
      emoji: "💒",
      detail: "Gelin arabası, takı merasimi, pasta",
      meaning:
        "Gelenekleri seviyorsun ve hakkını vererek yaşamak istiyorsun. Herkesin beklediği o büyük gün, senin de hayalin.",
    },
    {
      id: "kapadokya",
      name: "Kapadokya'da balonlu düğün",
      emoji: "🎈",
      detail: "Sabah balonlar, akşam mağara otelde parti",
      meaning:
        'Sıra dışı olanı seçiyorsun. Düğününün fotoğraflarına bakan herkesin "Bu nerede?" diye sormasını istiyorsun.',
    },
    {
      id: "bag",
      name: "Bağ evinde şarap tadımlı düğün",
      emoji: "🍇",
      detail: "Asma altı, peynir tabakları, akustik müzik",
      meaning: "Hayattan keyif almayı bilen birisin. İyi yemek, iyi müzik ve iyi insanlar: başka bir şeye gerek yok.",
    },
    {
      id: "dag",
      name: "Dağ başında kış düğünü",
      emoji: "❄️",
      detail: "Kar, şömine, sıcak şarap",
      meaning:
        "Farklı ve sakin bir romantizm istiyorsun. Kalabalık bir yaz düğünü yerine samimi bir kış masalı seni daha çok çekiyor.",
    },
    {
      id: "tema",
      name: "Temalı parti düğünü",
      emoji: "🪩",
      detail: "Kıyafet kodu, DJ, sabaha kadar dans",
      meaning: "Eğlence senin dilin. Düğününün bir tören değil, hayatının partisi olmasını istiyorsun.",
    },
    {
      id: "tekne",
      name: "Teknede düğün",
      emoji: "⛵",
      detail: "Koyda demir, güvertede tören",
      meaning:
        "Özgür ruhlu ve maceracısın. Karayı geride bırakıp yeni bir hayata yelken açmak, senin için mükemmel bir sembol.",
    },
    {
      id: "tarihi-han",
      name: "Tarihi bir handa düğün",
      emoji: "🏛️",
      detail: "Taş avlu, avize, yüzlerce yıllık duvarlar",
      meaning: "Hikâyesi olan yerlere âşıksın. Senin düğünün de o duvarlara yazılan bir hikâye olsun istiyorsun.",
    },
    {
      id: "bahce",
      name: "Ailenin bahçesinde",
      emoji: "🏡",
      detail: "Kendi ellerimizle süslediğimiz, büyüdüğüm ev",
      meaning: "Senin için en anlamlı yer, büyüdüğün yer. Para ile alınamayacak anıları önemsiyorsun.",
    },
    {
      id: "lux-otel",
      name: "Lüks otelde gala düğünü",
      emoji: "🥂",
      detail: "500 davetli, kristal avizeler, şampanya kulesi",
      meaning:
        "Büyük düşünüyorsun ve hak ettiğin en iyi geceyi istiyorsun. Bir kez evleniyorsan, en görkemlisi olmalı.",
    },
    {
      id: "plaj-bar",
      name: "Plaj barında yalınayak parti",
      emoji: "🏖️",
      detail: "Mayo üstüne gelinlik, kokteyller, rahatlık",
      meaning:
        "Kuralsız ve keyiflisin. Düğün stresi sana göre değil, sadece eğlenmek ve sevdiklerinle olmak istiyorsun.",
    },
  ],
};
