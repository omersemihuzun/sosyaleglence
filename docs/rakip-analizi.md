# Rakip Analizi ve SEO Raporu

Tarih: Kasım 2026. Kaynaklar sayfa sonunda. İçerikler özetlenmiştir, alıntı yapılmamıştır.

## Yöntem ve sınırlar

- Siteler WebFetch ile açıldı. **Erişilemeyenler:** uquiz.com (HTTP 403), piku.co.kr (HTTP 403). PIKU hakkındaki bilgi ikincil kaynaktan (Namuwiki) alındı.
- "Testotesto" adıyla bir site bulunamadı. "Bunu mu şunu mu / hangisini seçerdin" formatında Türkçe bir site de arama sonuçlarında çıkmadı. Bu, Türkçe pazarda bu formatın **boş** olduğuna işaret ediyor (ama arama motorunun sınırı da olabilir).
- Trafik, gelir ve sıralama verisi ölçülmedi. Aşağıdaki değerlendirmeler sayfalarda görülen özelliklere dayanıyor.

---

## 1. Onedio Testler (onedio.com/test) — Türkiye'nin en büyük oyuncusu

**Formatlar:** Bilgi yarışmaları (müzik, genel kültür, KPSS, dil), "hangisisin / ne anlatıyor" kişilik testleri, burç içerikleri, şarkı veya tarot kartı seçtirip "ruh hâlini" söyleyen testler, okur oylamaları ("şık mı rüküş mü"), markalı testler.

**Viral mekanikler:** Büyük görsel kartlar ve kancalı başlıklar. "Güncel konular", "Günün popüler başlıkları" ve "Son eklenenler" şeritleri. Ayrı bir oyun merkezi (sudoku, kelime oyunları) ile geri dönüş sağlıyor. İncelenen sayfada belirgin bir sonuç paylaşım butonu görünmedi.

**SEO:** URL'ler `/haber/{slug}-{numaraid}` biçiminde. Kısa Türkçe kategori yolları kullanılıyor (`/test`, `/yemek`). Etiket ve marka merkezleri `-haberleri` ekiyle oluşturulmuş. Başlık kalıpları: "Kaçını bileceksin?", "Hangi X'sin?", "Bir şey seç, sana Y'yi söyleyelim", gizem kancası.

**Gelir:** Yoğun reklam (yaklaşık her üç kartta bir "Reklam" etiketi). Markalı testler (ev aletleri, banka) yani test kılığında native reklam. Medya grubu içi çapraz trafik.

**Zayıf yanları:** Sonuçlar genelde tek paragraf ve sığ. Testler haber akışına gömülü ve kalıcı bir "test kütüphanesi" hissi yok. Reklam yoğunluğu deneyimi bozuyor. URL'deki numara ve `/haber/` öneki, test içeriğinin arama motorunda kalıcı (evergreen) sayfa gibi konumlanmasını zayıflatıyor.

**Bizim alacağımız:** "Bir şey seç, sana söyleyelim" dolaylı tahmin formatı. Burç ve tarot gibi yüksek arama hacimli temalar. Günlük ve haftalık "yeni" şeridi. Markalı test, ileride bir gelir kalemi olabilir.

## 2. BuzzFeed Quizzes (buzzfeed.com/quizzes) — formatın küresel referansı

**Formatlar:** Kişilik ("Hangi X'sin?"). Dolaylı tahmin: "bir sandviç yap, sana hangi şehri yakıştıralım" gibi, sen seçim yaparsın, test bir sonuç çıkarır. Bilgi yarışması (puan eşiği, zaman baskısı). Günlük bulmacalar, anketler, kontrol listeleri.

**Viral mekanikler:** Görünür yorum sayıları ve yoruma doğrudan link. "Gelmiş geçmiş en iyi testler" ve "Trend" sıralamaları. Yer imi. İçerik üreticisi liderlik tablosu. Günlük, numaralı seriler alışkanlık yaratıyor.

**SEO:** `/{üretici}/{anahtar-kelimeli-slug}` yapısı. Serilerde numara son eki. Kısa kategori yolları (`/quizzes/food`).

**Gelir:** Reklam ve veri onay katmanı, "Partnerlerimizden" sponsorlu içerikler, alışveriş bölümü, bülten. Kullanıcıların ürettiği testler sayesinde içerik maliyeti düşük.

**Zayıf yanları:** Sonuçlar eğlenceli ama tek boyutlu. Kullanıcı içeriğinin kalitesi dengesiz. Türkçe yok.

**Bizim alacağımız:** Dolaylı tahmin formatı (bizim hediye bulucuyla da birleşebilir). Numaralı günlük seri. "En çok çözülenler" sıralaması (istatistik altyapısı gelince). Yorumlar yerine daha düşük riskli bir mekanik: hazır tepki emojileri.

## 3. 16Personalities (16personalities.com) — derin kişilik testinin standardı

**Formatlar:** Yaklaşık 10 dakikalık tek bir ana test. 16 tip ve kimlik eki (-A / -T). Bu sayfada soru biçimi görünmüyor.

**Viral mekanikler:** Tip kodları kimliğe dönüşüyor (insanlar biyografilerine yazıyor). "Türkiye'de 10M+ test" gibi sosyal kanıt rakamları. Güçlü marka.

**SEO:** Her tip için ayrı ve kapsamlı sayfalar, makaleler, ülke profilleri, çerçeve açıklaması. Yani her sonuç bir SEO sayfası.

**Gelir:** Ücretsiz test, ücretli ileri raporlar (kariyer, takım, profesyonel). Fiyatlar ana sayfada görünmüyor.

**Zayıf yanları:** Tek test, eğlence ve ilişki tarafı zayıf. Paylaşım kartı ana sayfada öne çıkarılmıyor.

**Bizim alacağımız:** Her sonucun kendi zengin sayfası olması (bizde zaten var, içerik derinleştirilebilir). Toplam çözülme sayısı gibi sosyal kanıt. İleride ücretli "detaylı rapor" (örneğin çift uyum raporu).

## 4. IDRLabs (idrlabs.com/tr) — psikometrik test kataloğu

**Formatlar:** Yüzlerce test. Klinik ve psikometrik ölçekler, siyasi testler, pop kültür testleri. İncelenen Kişilik Tarzı Testi 105 madde içeriyor ve yalnızca "Katılıyorum / Katılmıyorum" seçenekleri sunuyor.

**Viral mekanikler:** Zayıf. Test sayfasında paylaşım butonu görülmedi. Akademik inceleme bilgisi ile güven oluşturuyor.

**SEO:** 20'den fazla dil için yerelleştirilmiş yollar, sayfalı katalog. URL biçimi `/{slug}/test.php`.

**Gelir:** Reklam görünmüyor, "Ödemeler ve Faturalandırma" bağlantısı var (ücretli özellikler).

**Zayıf yanları:** Türkçe kalitesi düzensiz (İngilizce bölümler, makine çevirisi izleri, tutarsız buton metinleri). 105 soru mobilde ağır geliyor. Tasarım eski.

**Bizim alacağımız:** Sorumluluk metni ve güven sinyalleri ("eğlence amaçlıdır, tanı değildir"). Bizde var, test sayfalarında daha görünür yapılabilir. Onların zayıflığı bizim fırsatımız: doğal Türkçe ve mobil öncelikli tasarım.

## 5. JobCannon (jobcannon.io/tr) — trend testleri yakalayan site

**Formatlar:** Kısa (12–36 soru), kayıtsız ve ücretsiz testler. Viral trendleri hızla test hâline getiriyor; örneğin Kore kaynaklı "Egen / Teto" enerji tipi testi.

**Bizim alacağımız:** **Trend yakalama hızı.** Sosyal medyada patlayan bir kavram (Egen/Teto, "delulu", "situationship" gibi) birkaç gün içinde teste dönüşürse arama trafiği alır.

## 6. Eleme / turnuva siteleri (PIKU, Kore "ideal tip dünya kupası")

**Erişim:** piku.co.kr erişilemedi (HTTP 403). Bilgi Namuwiki'den.

**Format:** Bire bir "vs" eleme (genelde 16 veya 32 aday). 2009'da bir Kore TV programında popülerleşti, 2017'de PIKU ile web sitesine dönüştü. Yayıncılar (streamer) içerik olarak çok kullanıyor. Konular idollerden yemeğe, filmlere ve durumlara yayıldı.

**Bilinen sorunlar:** Kullanıcıların ürettiği turnuvalarda kötüye kullanıma karşı denetim ve şikâyet mekanizması yok. Müzik turnuvalarında telif sorunları yaşanıyor.

**Bizim alacağımız:** Yayıncı ve TikTok dostu format, yani ekran kaydına uygun büyük kartlar (bizde var). Kullanıcı turnuvası açılırsa baştan bir **moderasyon ve şikâyet** akışı kurulmalı. Gerçek kişi fotoğrafı içeren turnuvalardan kaçınılmalı (mahremiyet ve telif).

## 7. Türk hediye rehberleri (ListeList, OGGUSTO, haber siteleri)

**ListeList:** Sevgililer günü için erkeklere 8 hediye. Başlık kalıbı "[Durum] + [kime] + [sayı] + hediye önerisi". Kişilik tipi alt başlıklar ("seyahat tutkunu sevgiliye"). Amazon kısa linkleri ve doğrudan mağaza linkleri. Fiyat yok, makalede tarih yok, görsel yükleme sorunları var. Görsel klasöründen 2019 içeriği olduğu tahmin ediliyor, yani eski içerik yeni şablonda.

**OGGUSTO:** Kadınlara hediye rehberi. 15 tema bölümü × 3 ürün kartı (45 ürün), içindekiler tablosu, 10 soruluk SSS. Yayın ve güncelleme tarihi var. Açık "REKLAM / affiliate" beyanı var. Marka sponsorlu bölüm yapısı ("by Versace"). SSS için yapılandırılmış veri (FAQ şeması) **yok**, sadece Article şeması var. Fiyat ve filtre yok.

**Haber siteleri (NTV, Posta, Cumhuriyet, Tamindir):** Galeri tipi sezonluk listeler. Arama sonuçlarında çok yer kaplıyorlar ama içerikleri sığ.

**Zayıf yanları (sektör geneli):** Kişiye göre filtre yok, bütçe filtresi yok, fiyatlar eski veya hiç yok, eski içerik yeni tarihle yayınlanıyor.

**Bizim alacağımız:** SSS bölümü ve **FAQ yapılandırılmış verisi** (rakipte eksik, bizim için hızlı kazanç). Açık affiliate beyanı (bizde footer'da var, rehber sayfasının başına da konmalı). Görünür "son güncelleme" tarihi. Kişilik tipi alt başlıklar. Bizim farkımız etkileşimli hediye bulucu ve bütçe filtresi. Bunu "testi çöz, sevgiline uygun hediyeyi gör" köprüsüyle güçlendirmek mümkün.

---

## En önemli bulgular

1. **Türkçe pazarda eleme ve "bunu mu o mu" formatı boşta.** Aramalarda Türkçe bir rakip çıkmadı. Erken giren otorite olabilir.
2. **Onedio'nun sonuçları sığ.** Bizim çok boyutlu sonuç profillerimiz ve paylaşım kartlarımız açık bir kalite farkı.
3. **"Her sonuç bir SEO sayfası" modeli** (16Personalities) bizde zaten var. Sonuç sayfası içeriği zenginleştirildikçe uzun kuyruk trafik büyür.
4. **Dolaylı tahmin formatı** ("bir şey seç, sana söyleyelim") Onedio'da da BuzzFeed'de de en tutan türlerden. Bizde yok.
5. **Trend hızı** (JobCannon / Egen-Teto örneği): viral kavramları hızla teste dönüştürmek ucuz ve etkili bir trafik kaynağı.
6. **Hediye rehberlerinde SSS + FAQ şeması, tarih ve fiyat tazeliği** rakiplerde eksik ya da yarım. Hızlı SEO kazancı sağlar.
7. **Sosyal kanıt rakamları** ("X kişi çözdü", "%Y bunu seçti") rakiplerin tamamında güven ve viralite aracı. Bunun için istatistik altyapısı şart.
8. **Gelir:** Reklam + affiliate + markalı test (Onedio, OGGUSTO), ücretli detaylı rapor (16Personalities). Markalı test, bizim kaliteli test motorumuzla doğal bir B2B ürünü olabilir.
9. **Kullanıcı içeriği ölçek getiriyor ama risk de taşıyor** (BuzzFeed, PIKU). Açılırsa onay ve moderasyon kuyruğu şart.
10. **Teknik SEO kazancı:** Eleme sayfalarında başlık ve içerik HTML'de yoktu (aşağıda düzeltildi). Sonuç sayfası başlıklarının %50'den fazlası 60 karakteri aşıyordu (düzeltildi).

## Sosyal Eğlence için yapılacaklar (öncelik sırasıyla)

| #   | İş                                                                                                                     | Etki                | Efor              |
| --- | ---------------------------------------------------------------------------------------------------------------------- | ------------------- | ----------------- |
| 1   | Oy ve istatistik altyapısı ("%34 bunu seçti", "12.400 kişi çözdü")                                                     | Yüksek              | Orta (veritabanı) |
| 2   | "Bunu mu O mu?" günlük anket serisi (numaralı, her gün yeni)                                                           | Yüksek              | Düşük-orta        |
| 3   | Hediye rehberlerine SSS bölümü + FAQPage JSON-LD + "son güncelleme" tarihi                                             | Yüksek (SEO)        | Düşük             |
| 4   | Dolaylı tahmin testleri ("Bir sofra kur, sana hangi şehri yakıştıralım", "Bir kombin seç, aşk hayatını tahmin edelim") | Yüksek              | Orta (içerik)     |
| 5   | Trend testi hattı: viral kavramları 48 saat içinde teste çevirme (Egen/Teto, situationship, delulu…)                   | Orta-yüksek         | Düşük (içerik)    |
| 6   | Burç temalı testler ve elemeler (arama hacmi yüksek)                                                                   | Orta-yüksek         | Düşük             |
| 7   | Sonuç sayfalarına "Bu sonucu alanların %X'i" ve "uyumlu tip" karşılaştırması (istatistik ile)                          | Orta                | Orta              |
| 8   | Testten hediyeye köprü: "Sevgi dilin 'hediye' çıktı → sana uygun hediyeler"                                            | Orta (gelir)        | Düşük             |
| 9   | Affiliate beyanını rehber sayfasının başına taşımak                                                                    | Orta (güven, yasal) | Çok düşük         |
| 10  | Markalı test teklif paketi (B2B gelir)                                                                                 | Orta                | Orta (satış)      |
| 11  | Kullanıcı turnuvası oluşturma, sadece moderasyon kuyruğuyla                                                            | Yüksek ama riskli   | Yüksek            |

---

## Teknik SEO denetimi (bu çalışmada yapılanlar)

### Yapılan değişiklikler

- **Organization + WebSite JSON-LD** tüm sayfalarda (`src/app/layout.tsx`, `src/lib/jsonld.ts`).
- **BreadcrumbList JSON-LD + görünür konum (breadcrumb) çubuğu:** test sayfası, test sonuç sayfası, eleme oyunu sayfası ve eleme sonuç sayfası.
- **Eleme oyunu sayfasına ItemList JSON-LD:** 16 seçenek, her biri kendi sonuç sayfasına bağlı.
- **Kritik düzeltme:** Eleme oyunu sayfalarında h1, açıklama ve JSON-LD **HTML'de yoktu**, sadece yükleme iskeleti vardı. Oyun bileşeni `Math.random()` kullandığı için Cache Components, sayfayı saran Suspense sınırına kadar her şeyi istemciye erteliyordu. Oyun kendi Suspense sınırına alındı. Artık 8 sayfanın hepsi başlığı ve yapılandırılmış veriyi sunucudan veriyor (production sunucusunda doğrulandı).
- **Sonuç sayfası başlıkları:** Emoji başlıktan çıkarıldı (OG başlığında kaldı). 60 karaktere sığmayan başlıklar sırasıyla önce site adını, sonra test adını bırakıyor (`fitTitle`). Başlık ve açıklama üreten fonksiyonlar `src/lib/jsonld.ts` içinde ve hem sayfalar hem denetim script'i aynı fonksiyonu kullanıyor.
- Test sayfasındaki `Quiz` şemasından schema.org'da tanımlı olmayan `numberOfQuestions` alanı kaldırıldı.
- **`npm run seo`** (`scripts/seo-kontrol.ts`): Tüm sayfaların başlık ve açıklamalarını gerçek içerik dosyalarından üretip denetler. Kurallar: başlık ≤ 60 karakter, açıklama 70–160 karakter, tekrar eden başlık yok. Karakterler grafem olarak sayılır. `--sıkı` bayrağıyla uyarı varsa hata kodu döner (CI'da kullanılabilir).
- Organization şemasında `logo` alanı boş bırakıldı, çünkü projede logo görseli yok. 112px veya daha büyük kare bir logo eklendiğinde doldurulmalı.

### Sonuç

Uyarı sayısı **102'den 11'e** indi (185 sayfa denetlendi). Kalan 11 uyarı içerik dosyalarından geliyor. Bu dosyalar sonraki turda düzeltildi; o anki liste:

| Sayfa                              | Sorun            | Kaynak dosya                                          |
| ---------------------------------- | ---------------- | ----------------------------------------------------- |
| /testler/sevgi-dili-testi          | Açıklama 162/160 | `src/content/tests/sevgi-dili.ts` → `metaDescription` |
| /hediye/sevgiliye-yilbasi-hediyesi | Başlık 64/60     | `src/content/gifts/guides.ts` → `metaTitle`           |
| /hediye/erkek-arkadasa-hediye      | Başlık 70/60     | aynı                                                  |
| /hediye/kiz-arkadasa-hediye        | Başlık 66/60     | aynı                                                  |
| /hediye/sevgililer-gunu-hediyesi   | Başlık 65/60     | aynı                                                  |
| /hediye/yildonumu-hediyesi         | Başlık 73/60     | aynı                                                  |
| /hediye/anneye-hediye              | Başlık 72/60     | aynı                                                  |
| /hediye/babaya-hediye              | Başlık 72/60     | aynı                                                  |
| /hediye/arkadasa-hediye            | Başlık 63/60     | aynı                                                  |
| /hediye/500-tl-alti-hediye         | Başlık 62/60     | aynı                                                  |
| /hediye/is-arkadasina-hediye       | Başlık 76/60     | aynı                                                  |

**Öneri:** Rehber sayfası `metaTitle` alanlarına " | Sosyal Eğlence" eki eklenmeden önce en fazla 43 karakter yazılmalı. Bir başka yol, `src/app/hediye/[guide]/page.tsx` içinde de `fitTitle` kullanmak. Bu dosya bu görevin kapsamı dışında kaldı.

---

## Kaynaklar

- Onedio Testler: https://onedio.com/test
- BuzzFeed Quizzes: https://www.buzzfeed.com/quizzes
- Uquiz: https://www.uquiz.com/ (erişilemedi, HTTP 403)
- 16Personalities: https://www.16personalities.com/
- IDRLabs Türkçe katalog: https://www.idrlabs.com/tests.php?loc=tr&p=6
- IDRLabs Kişilik Tarzı Testi: https://www.idrlabs.com/tr/kisilik-tarzi/testi.php
- JobCannon Egen-Teto testi: https://jobcannon.io/tr/tests/egen-teto
- PIKU: https://www.piku.co.kr/ (erişilemedi, HTTP 403) · Namuwiki: https://namu.moe/w/PIKU
- ListeList: https://listelist.com/sevgililer-gunu-erkekler-icin-hediye/
- OGGUSTO: https://www.oggusto.com/sevgililer-gunu/kadinlar-icin-hediye-rehberi
- Arama sonuçlarında görülen diğer hediye listeleri: https://www.tamindir.com/blog/sevgililer-gunu-hediye-onerileri_93136/ · https://www.ntv.com.tr/galeri/yasam/14-subat-sevgililer-gunu-icin-hediye-rehberi,0beHtwJKdEqtp6saDWf3gw · https://www.cumhuriyet.com.tr/yasam/galeri-hem-anlamli-hem-de-askinizi-ifade-eden-bu-onerilerle-partnerinizi-2280769
