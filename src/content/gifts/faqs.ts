export type Faq = { q: string; a: string };

/** Rehber başına sık sorulan sorular. Rehberin kendi `faq` alanı varsa o öncelikli. */
export const guideFaqs: Record<string, Faq[]> = {
  "sevgiliye-yilbasi-hediyesi": [
    {
      q: "Sevgiliye yılbaşında ne kadarlık hediye alınmalı?",
      a: "Belirli bir tutar yok. İlişkinin süresi ve bütçen kadar, hediyenin onu ne kadar tanıdığını göstermesi önemli. Küçük ama kişiye özel bir hediye, pahalı ama genel bir hediyeden çoğu zaman daha çok sevilir.",
    },
    {
      q: "Yeni başlayan bir ilişkide yılbaşı hediyesi almak gerekir mi?",
      a: "Zorunlu değil ama küçük bir jest iyi karşılanır. Yeni ilişkilerde kupa, kitap ya da birlikte yapılacak bir etkinlik gibi baskı yaratmayan hediyeler daha uygundur.",
    },
    {
      q: "Yılbaşı hediyesini ne zaman sipariş etmeliyim?",
      a: "Aralık ayının son iki haftasında kargolar yoğunlaşır. Özellikle kişiye özel üretilen ürünleri en az 10 gün önceden sipariş etmek en güvenlisi.",
    },
  ],
  "erkek-arkadasa-hediye": [
    {
      q: "Erkek arkadaşıma ne alacağımı bilmiyorum, nereden başlamalıyım?",
      a: "Son zamanlarda neyden şikâyet ettiğini ya da neyi \"bir ara alırım\" dediğini hatırla. Bozulan kulaklık, eskiyen cüzdan ya da hep ertelediği bir etkinlik iyi başlangıç noktalarıdır.",
    },
    {
      q: "Erkekler kişiye özel hediyeleri sever mi?",
      a: "Abartılı olmadıkça evet. Koordinat bileklik ya da baş harf işlenmiş bir kartlık gibi sade kişiselleştirmeler çoğu erkek tarafından çok beğenilir.",
    },
    {
      q: "Deneyim hediyesi mi, eşya mı?",
      a: "İkisi de iyi olabilir. Deneyim hediyeleri birlikte zaman geçirmeyi sağlar ve anı bırakır, eşyalar ise her gün kullanılarak hatırlanır. İkisini birleştirmek, örneğin bir konser biletini küçük bir hediyeyle vermek, en etkili yollardan biri.",
    },
  ],
  "kiz-arkadasa-hediye": [
    {
      q: "Kız arkadaşıma takı almak riskli mi?",
      a: "Tarzını biliyorsan değil. Mevcut takılarına bak: altın mı gümüş mü, sade mi iddialı mı tercih ediyor? Emin değilsen sade bir harf kolye ya da değişim imkânı olan bir mağaza güvenli seçimdir.",
    },
    {
      q: "Parfüm hediye etmek doğru mu?",
      a: "Kullandığı kokuyu biliyorsan çok isabetli bir hediye. Bilmiyorsan deneme setleri, ona farklı kokuları deneyip favorisini bulma şansı verir.",
    },
    {
      q: "Pahalı olmayan ama etkileyici bir hediye var mı?",
      a: "El yazısı mektuplar, ortak fotoğraflarınızdan bir albüm ya da yıldız haritası gibi kişisel hediyeler düşük bütçeyle güçlü bir etki bırakır.",
    },
  ],
  "sevgililer-gunu-hediyesi": [
    {
      q: "Sevgililer Günü'nde hediye almak zorunda mıyım?",
      a: "Zorunluluk yok, ama günü nasıl kutlamak istediğinizi önceden konuşmak hayal kırıklıklarını önler. Bazı çiftler hediye yerine birlikte bir deneyimi tercih ediyor.",
    },
    {
      q: "14 Şubat için ne zaman hazırlık yapmalıyım?",
      a: "Restoran rezervasyonunu en az bir hafta önce, kişiye özel ürün siparişini ise şubatın ilk günlerinde vermek en güvenlisi.",
    },
    {
      q: "Çiçek yerine ne alınabilir?",
      a: "Uzun süre kalan bir saksı bitkisi, yetişkinler için çiçek buketi şeklindeki yapboz setleri ya da kişiye özel bir poster, çiçeğin yerini tutan kalıcı alternatiflerdir.",
    },
  ],
  "yildonumu-hediyesi": [
    {
      q: "İlk yıldönümü için ne alınır?",
      a: "İlk yılı anlatan hediyeler çok anlamlıdır: o yılın fotoğraflarından bir albüm, ilk buluşmanızın tarihli yıldız haritası ya da yıl boyunca yaşadıklarınızı anlatan bir mektup.",
    },
    {
      q: "Yıldönümünde hediye mi, tatil mi?",
      a: "Bütçe uygunsa kısa bir kaçamak, birlikte yeni bir anı biriktirmenin en güzel yolu. Küçük bir somut hediyeyle birleştirirsen o anı hep hatırlanır.",
    },
    {
      q: "Yıldönümü hediyesinde tema geleneği nedir?",
      a: "Bazı kültürlerde her yıl bir malzemeyle ilişkilendirilir: birinci yıl kâğıt, ikinci yıl pamuk, üçüncü yıl deri gibi. Bu bir zorunluluk değil, ilham kaynağı olarak kullanılabilir.",
    },
  ],
  "dogum-gunu-hediyesi": [
    {
      q: "Doğum günü hediyesi seçerken en önemli şey nedir?",
      a: "Kişinin ilgi alanı. Ne sevdiğini düşünmek, ne kadar harcayacağını düşünmekten daha iyi sonuç verir. Hediye bulucuda alıcıyı ve ilgi alanlarını seçerek listeyi daraltabilirsin.",
    },
    {
      q: "Ne sevdiğini bilmediğim biri için ne alınır?",
      a: "Kokulu mum, butik çikolata, kaliteli bir termos ya da hediye kutuları gibi çoğu kişinin kullanabileceği güvenli seçenekler iyi bir başlangıçtır.",
    },
    {
      q: "Son dakika doğum günü hediyesi için ne yapabilirim?",
      a: "Deneyim hediyeleri ve hediye kartları kargo beklemeden verilebilir. Bir konser bileti ya da atölye kaydı, son dakikada bile özenli görünür.",
    },
  ],
  "anneye-hediye": [
    {
      q: "Anneler Günü ne zaman?",
      a: "Türkiye'de Anneler Günü her yıl mayıs ayının ikinci pazarı kutlanır.",
    },
    {
      q: "\"Bana bir şey alma\" diyen anneye ne alınır?",
      a: "Kendine almaya kıyamadığı şeyler: iyi bir parfüm, spa günü ya da kaliteli bir mutfak aleti. Aile fotoğraflarından bir albüm gibi duygusal hediyeler de annelerin en çok sakladığı hediyelerdir.",
    },
    {
      q: "Uzakta yaşayan anneme ne hediye edebilirim?",
      a: "Fotoğrafları uzaktan yükleyebildiğin dijital çerçeveler, düzenli görüntülü konuşma sözüyle birlikte çok anlamlı bir hediye olur. Kargo ile gönderilebilen hediye kutuları da pratik bir çözüm.",
    },
  ],
  "babaya-hediye": [
    {
      q: "Babalar Günü ne zaman?",
      a: "Türkiye'de Babalar Günü her yıl haziran ayının üçüncü pazarı kutlanır.",
    },
    {
      q: "Her şeyi olan babaya ne alınır?",
      a: "Eskiyen bir şeyin kaliteli versiyonu (cüzdan, kemer, termos) ya da hiç denemediği ama seveceği bir şey (masaj aleti, dijital çerçeve) genellikle en isabetli seçimlerdir.",
    },
    {
      q: "Teknolojiyle arası iyi olmayan babaya teknoloji hediyesi alınır mı?",
      a: "Alınabilir ama kurulumu kolay ürünleri seç ve kurulumu sen yap. Kullanmayı birlikte öğrenmek de hediyenin bir parçası olur.",
    },
  ],
  "arkadasa-hediye": [
    {
      q: "En yakın arkadaşıma ne hediye alayım?",
      a: "Ortak anılarınızı ve iç esprilerinizi kullan. Baskılı bir kupa, birlikte gideceğiniz bir konser ya da birlikte oynayacağınız bir kutu oyunu, \"Seni tanıyorum\" demenin eğlenceli yollarıdır.",
    },
    {
      q: "Arkadaş grubu olarak ortak hediye almak mantıklı mı?",
      a: "Evet. Bütçeyi birleştirmek daha büyük ve kaliteli bir hediyeye yönelmeyi sağlar. Kimin ne kadar katılacağını baştan netleştirmek işleri kolaylaştırır.",
    },
    {
      q: "Arkadaşa hediye için ne kadar harcamalıyım?",
      a: "Bir kural yok. Arkadaşlık hediyelerinde fiyattan çok düşünülmüşlük önemlidir; küçük ama kişisel bir hediye çoğu zaman daha çok sevilir.",
    },
  ],
  "500-tl-alti-hediye": [
    {
      q: "500 TL altına anlamlı bir hediye bulunur mu?",
      a: "Bulunur. Kişiye özel kupa, defter, kokulu mum ya da yıldız haritası gibi hediyeler hem bütçe dostu hem de kişiseldir.",
    },
    {
      q: "Ucuz bir hediyeyi daha değerli göstermenin yolu var mı?",
      a: "Güzel bir paketleme ve el yazısı bir not, hediyenin algısını ciddi şekilde değiştirir. İki küçük hediyeyi bir tema altında birleştirmek de etkili bir yöntem.",
    },
    {
      q: "Fiyatlar güncel mi?",
      a: "Fiyat aralıkları yaklaşıktır ve mağazaya, döneme göre değişebilir. Satın almadan önce mağaza butonlarından güncel fiyatlara bakmanı öneririz.",
    },
  ],
  "is-arkadasina-hediye": [
    {
      q: "İş arkadaşına hediye alırken nelere dikkat etmeli?",
      a: "Kişisel ama samimiyetsiz olmayan, kullanışlı ama sıkıcı olmayan bir şey seçmek en iyisi. Parfüm ve kıyafet gibi kişisel tercih gerektiren hediyelerden uzak durmak daha güvenli.",
    },
    {
      q: "Ofiste yılbaşı hediye değişimi için ne alınır?",
      a: "Belirlenen bütçeye uygun masa bitkisi, termos bardak, defter ya da butik çikolata gibi herkese uyabilecek hediyeler hediye değişimleri için idealdir.",
    },
    {
      q: "Ayrılan bir iş arkadaşına veda hediyesi ne olmalı?",
      a: "Ekipçe imzalanan bir kart ve kaliteli bir kalem ya da defter gibi yeni işinde kullanabileceği bir hediye, hem duygusal hem işlevsel olur.",
    },
  ],
  "ev-hediyesi": [
    {
      q: "Yeni eve taşınana ne hediye götürülür?",
      a: "Evi ev yapan küçük dokunuşlar (bitki, mum) ya da ilk günlerde ihtiyaç duyulan pratik aletler (tava, baharat seti) en sık tercih edilen ve işe yarayan hediyelerdir.",
    },
    {
      q: "Ev hediyesinde dekorasyon ürünü almak riskli mi?",
      a: "Evin tarzını bilmiyorsan biraz riskli. Nötr renkler ve sade tasarımlar seçmek ya da bitki gibi her eve uyan seçeneklere yönelmek daha güvenli.",
    },
    {
      q: "Bitki hediye etmek iyi bir fikir mi?",
      a: "Evet, özellikle bakımı kolay türler. Paşa kılıcı ve zamia gibi az ışık ve az su isteyen bitkiler, bitki yetiştirmeyi bilmeyenler için bile uygundur.",
    },
  ],
};
