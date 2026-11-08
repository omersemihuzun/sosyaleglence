import type { Bracket } from "@/lib/bracket-types";

export const tatilGunu: Bracket = {
  slug: "hayalindeki-tatil-gunu",
  title: "Hayalindeki Tatil Günü",
  prompt: "Tatilde bir gün: hangisi?",
  summary: "Sabah denize girmek mi, öğlene kadar uyumak mı? Tatildeki mükemmel gününü eleme usulü kur.",
  emoji: "🏖️",
  color: "#0E7490",
  metaDescription:
    "Hayalindeki tatil günü nasıl geçer? Plaj, dağ, şehir turu ve daha fazlası. 16 tatil anını eleme usulüyle karşılaştır, mükemmel gününü bul.",
  championLabel: "Mükemmel tatil günüm",
  related: { href: "/eleme/balayi-rotani-sec", label: "Balayı rotanı da seç" },
  items: [
    { id: "gun-dogumu-deniz", name: "Gün doğarken denize girmek", emoji: "🌊", detail: "Plaj bomboş, su cam gibi", meaning: "Günün en sessiz anını kendine saklamayı seviyorsun. Kalabalık başlamadan dünyayla baş başa kalmak sana enerji veriyor." },
  { id: "ogle-uykusu", name: "Öğlene kadar uyumak", emoji: "😴", detail: "Alarm yok, perdeler kapalı", meaning: "Senin için tatil, hiçbir şeye yetişmek zorunda olmamak. Dinlenmeyi ertelemiyorsun, hakkını veriyorsun." },
    { id: "kahvalti-manzara", name: "Manzaralı uzun kahvaltı", emoji: "🥐", detail: "Terasta, saatlerce", meaning: "Yavaş ve keyifli başlangıçlar senin tarzın. Güzel bir masa ve güzel bir manzara, günün geri kalanını belirliyor." },
    { id: "tekne-turu", name: "Koy koy tekne turu", emoji: "🚤", detail: "Her durakta başka bir mavi", meaning: "Yorulmadan keşfetmeyi seviyorsun. Gün boyu değişen manzaralar seni mutlu ediyor." },
    { id: "dag-yuruyusu", name: "Zirveye yürüyüş", emoji: "🥾", detail: "Ter, nefes, en tepede manzara", meaning: "Emek verdiğin şeyin tadını daha çok alıyorsun. Tatilde bile kendini zorlamak sana iyi geliyor." },
    { id: "sehir-turu", name: "Bilmediğin bir şehrin sokakları", emoji: "🗺️", detail: "Harita kapalı, sadece yürümek", meaning: "Meraklısın. Rehber kitaplardaki yerlerden çok, kendi bulduğun küçük köşeler seni heyecanlandırıyor." },
    { id: "spa", name: "Bütün gün spa", emoji: "💆", detail: "Masaj, hamam, sauna", meaning: "Kendine iyi bakmayı biliyorsun. Tatil senin için bedenini ve zihnini sıfırlama zamanı." },
    { id: "yerel-pazar", name: "Yerel pazarda dolaşmak", emoji: "🧺", detail: "Taze meyve, el yapımı ürünler, pazarlık", meaning: "Bir yeri insanlarından tanımak istiyorsun. Turist değil, misafir gibi gezmeyi seviyorsun." },
    { id: "kitap-hamak", name: "Hamakta kitap okumak", emoji: "📖", detail: "Ağaç gölgesi, hafif rüzgâr", meaning: "Senin için en güzel macera bir hikâyenin içinde kaybolmak. Sessizlik ve kitap, tatilin ta kendisi." },
    { id: "su-sporlari", name: "Su sporları", emoji: "🏄", detail: "Sörf, kano, dalış", meaning: "Adrenalin seviyorsun. Tatilde yatmak yerine yeni bir şey öğrenmek ve hareket etmek seni canlandırıyor." },
    { id: "gun-batimi-icecek", name: "Gün batımında bir içecek", emoji: "🍹", detail: "Sahil barında, ayaklar kumda", meaning: "Anın tadını çıkarmayı biliyorsun. Günün sonunda gökyüzünü izlemek, sana her şeyin yolunda olduğunu hissettiriyor." },
    { id: "balik-aksam", name: "Deniz kenarında balık akşamı", emoji: "🐟", detail: "Uzun sofra, sohbet, gece yarısı", meaning: "Sofra senin için bir buluşma yeri. En güzel tatil anılarının uzun akşam yemeklerinde biriktiğini biliyorsun." },
    { id: "muze-galeri", name: "Müze ve galeri turu", emoji: "🏛️", detail: "Tarih, sanat, sessiz salonlar", meaning: "Gittiğin yerin hikâyesini merak ediyorsun. Tatilden zihnin dolu dönmek sana en büyük keyfi veriyor." },
    { id: "kamp-atesi", name: "Akşam kamp ateşi", emoji: "🔥", detail: "Yıldızlar, gitar, közde mısır", meaning: "Basit şeylerdeki büyüyü görüyorsun. Doğanın ortasında ateş başında oturmak sana hiçbir otelin veremeyeceği huzuru veriyor." },
    { id: "gece-hayati", name: "Sabaha kadar gece hayatı", emoji: "🪩", detail: "Dans, müzik, yeni insanlar", meaning: "Enerjin yüksek ve tatil senin için kutlama demek. Gündüzü uyuyarak geçirmek pahasına geceyi yaşamak istiyorsun." },
    { id: "hic-bir-sey", name: "Hiçbir şey yapmamak", emoji: "🛋️", detail: "Plan yok, program yok, telefon kapalı", meaning: "Senin için asıl lüks boş zaman. Yapılacaklar listesinden kurtulmak, en güzel tatil planı." },
  ],
};
