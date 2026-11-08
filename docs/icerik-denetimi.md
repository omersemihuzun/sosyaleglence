# İçerik kalite denetimi

Tarih: 8 Kasım 2026

**Kapsam:**
- 17 test
- 16 eleme oyunu
- 100 hediye fikri
- 18 rehber ve SSS'leri
- 40 "Bunu mu O mu?" sorusu
- 12 burç profili ve 78 burç uyumu metnini üreten şablonlar

**Yöntem:**
- **Otomatik taramalar:** marka adları, yazım varyantları, kalıp tekrarları ve tarih ifadeleri tarandı.
- **Elle okuma:** dosyalar baştan sona okundu.
- **Kalibrasyon güvencesi:** `id`, `slug`, `scores`, `profile`, renk ve `bestMatch` alanlarına dokunulmadı. `npm run kalibre` sonrasında `kalibrasyon.json` için `git diff` boş, yani bütün sonuç dağılımları aynı kaldı.

## Özet

| Kategori | Düzeltme |
|---|---|
| Yazım ve dilbilgisi (TDK) | 33 |
| Anlatım ve akıcılık | 15 |
| Mantık ve tutarlılık (şık, sonuç, şablon) | 10 |
| Olgu ve kaynaksız iddia | 3 |
| Marka ve platform adı | 3 |
| Hassasiyet (cinsiyet nötrlüğü) | 1 |
| **Toplam** | **65** (22 dosya) |

Genel kalite yüksek. Sonuç metinleri yapıcı. Toksik ve red flag sonuçları damgalamıyor, değişim önerisiyle bitiyor. Tıbbi tanı gibi okunan bir ifade yok. Tarihler doğru:
- Anneler Günü mayısın ikinci pazarı
- Babalar Günü haziranın üçüncü pazarı
- Öğretmenler Günü 24 Kasım
- 12 burcun tarih aralıkları, elementleri, nitelikleri ve yönetici gezegenleri

## Bulgu kategorileri

### 1. Yazım ve dilbilgisi (33)
- **Özel gün adları (19):** "Anneler günü", "sevgililer günü" gibi yazımlar TDK'ya göre büyük harfle "Anneler Günü", "Sevgililer Günü'nde" olarak düzeltildi. Rehber başlığı "Sevgililer Günü hediyesi" oldu.
- **Ay adları (2):** Belirli tarih bildirmedikleri için küçük harfle yazıldı ("Şubat başında" → "şubat başında", "Şubat'ın" → "şubatın").
- **âşık (4):** Sevgili anlamındaki "aşık" yazımı "âşık" olarak tek tipe getirildi. İçerikte iki yazım karışık kullanılıyordu.
- **ruh hâli (1):** "ruh hali" yazımı "ruh hâli" yapıldı (site genelindeki yazım).
- **Diğer:**
  - hâl eki ("kimle küs" → "kime küs")
  - yanlış ek ("değer olduğunu" → "değdiğini")
  - eksik soru işareti
  - anlam karışıklığı ("açsın" → "açıksın")
  - nesne eksikliği ("binlerce insanı hissettirmek" → "binlerce insana aynı şeyi hissettirmek")

### 2. Anlatım (15)
- **Tekrarlanan kalıp:** "Bu, ... anlamına gelmiyor" cümlesi 107 sonuçta 6 kez geçiyordu. 3'ü çeşitlendirildi.
- **Aynı cümlede kelime tekrarı:** Oğlak'ta "sağlam ... sağlam", eleme oyunlarında "sevgiyi seviyorsun" gibi.
- **Çeviri kokan ya da bozuk kurulumlar:**
  - "görüldü bile atılmıyor"
  - "Sen yokken o sana yazdığında"
  - "şarj olmalık"
- **Çift anlamlı ifadeler:**
  - "Konuyu değiştirip ortamı dağıtırım": "dağıtmak" hem neşelendirmek hem de bozmak anlamına geliyordu.
  - "ana bağlanıyorsun" ifadesi "anne" diye de okunabiliyordu.
  - "Daha yeni ayrıldık" ifadesi "ilişkiyi bitirdik" diye okunabiliyordu.

### 3. Mantık ve tutarlılık (10)
- **Burç şablonları:** Başak'ın `ister` alanı şablona yerleşince bozuk cümle çıkıyordu: "...dürüstlük ve emeğinin görülmesi ortamını sağlar". Oğlak'ın `zaaf` alanı da "Oğlak'ın mesafeliliği" diye yapay bir kelime üretiyordu. İki alan da yeniden yazıldı; 12 burcun etkilediği uyum metinleri düzeldi.
- **Grup rolü testi:** "Organizatör" sonucunun güçlü yanında "yapıştırıcısın" yazıyordu. Bu, aynı testteki "Grubun Yapıştırıcısı" sonucuyla karışıyordu.
- **Ruh yaşı testi:** Aynı sahnede hem "balkonda" hem "kafenin kedisi" vardı.
- **Emoji uyumsuzlukları:** "Hamsili pilav" yanında 🌽 (mısır), "Acılı ezme" yanında 🌰 (kestane) vardı. Sırasıyla 🍚 ve 🌶️ yapıldı.
- **Van kedisi:** Göz rengi "yeşil" yerine "kehribar" yapıldı (bilinen özellik: bir gözü mavi, bir gözü kehribar).

### 4. Olgu ve kaynaksız iddia (3)
- **Bağlanma stili:** "İnsanların yaklaşık yarısı bu stile yakın" kaynaksız bir istatistikti. Kaldırıldı.
- **Situationship:** "Bu döngü beyinde bir tür bağımlılık gibi çalışır" cümlesi bilimsel iddia gibi okunuyordu. Psikolojideki gerçek kavramla (aralıklı pekiştirme) ve ölçülü bir dille yeniden yazıldı.
- **Red flag testi:** Girişteki "Bu testi kimse görmüyor" ifadesi, artık sonuçların anonim sayaç olarak toplandığı için tam doğru değildi. "Cevaplarını kimse görmüyor" yapıldı.

### 5. Marka ve platform adı (3)
- "Instagram'ı patladı" ifadesi "sosyal medya hesabı patladı" yapıldı.
- "Spotify'da" ifadesi "müzik uygulamasında" yapıldı.
- "Yetişkinler için LEGO seti" adı "Yetişkinler için yapı seti" yapıldı. Mağaza arama ifadesi (`query`) "lego" olarak kaldı ki doğru ürünler çıksın.

### 6. Hassasiyet (1)
- "Delulu Kraliçesi" sonucu, test cinsiyet belirtmediği için "Delulu Hükümdarı" yapıldı.

## Örnek önce / sonra

| Yer | Önce | Sonra |
|---|---|---|
| Bağlanma stili, Güvenli | İnsanların yaklaşık yarısı bu stile yakın. | Bu stil, sağlıklı ilişkilerin en sağlam zemini olarak görülür. |
| Situationship, Isıt-Soğut | Bu döngü beyinde bir tür bağımlılık gibi çalışır: Belirsiz ödüller, istikrarlı olanlardan daha çok bağlar. | Psikolojide buna aralıklı pekiştirme deniyor: Ne zaman geleceği belli olmayan ilgi, insanı istikrarlı ilgiden bile daha sıkı bağlayabiliyor. |
| Situationship, tagline | ...ertesi gün görüldü bile atılmıyor. | ...ertesi gün mesajın görülmüyor bile. |
| Burç şablonu (Başak) | ...Başak'ın aradığı dürüstlük ve emeğinin görülmesi ortamını sağlar | ...Başak'ın aradığı dürüstlük ve takdir ortamını sağlar |
| Burç şablonu (Oğlak) | Oğlak'ın mesafeliliği | Oğlak'ın mesafeli duruşu |
| Toksik arkadaş, Haber Ajansı | Kim kiminle görüşüyor, kim kimle küs... | Kim kimle görüşüyor, kim kime küs... |
| Toksik arkadaş, Sadece Lazım Olunca | Sen yokken o sana yazdığında cevap gecikiyor | O sana yazdığında cevabın gecikiyor |
| Kim baskın, Fedakâr | Sen mutlu olsun yeter dersin. Peki sen? | "O mutlu olsun yeter" dersin. Peki ya sen? |
| Kim baskın, Eşit Ortak | Partnerin seninle hem dinlendiğini hem de dinlediğini hissediyor. | Partnerin hem fikrinin dinlenildiğini hem de kendi sözünün ağırlığı olduğunu hissediyor. |
| Grup rolü, şık | Konuyu değiştirip ortamı dağıtırım. | Bir espriyle konuyu değiştiririm. |
| Gün planla, İlkbahar | Sen yeniliğe ... küçük başlangıçlara açsın. | ...küçük başlangıçlara açıksın. |
| Sevgiliden mesaj | Sen açık sözlü bir sevgiyi seviyorsun. | Sen açıkça dile getirilen bir sevgi istiyorsun. |
| Rehber SSS | Türkiye'de anneler günü her yıl... | Türkiye'de Anneler Günü her yıl... |
| Sofra testi, başlık | Bir Sofra Kur, Sana Hangi Şehri Yakıştıralım | Bir Sofra Kur, Sana Hangi Şehri Yakıştıralım? |

## Karar gerektiren noktalar (değiştirilmedi)

1. **Evcil hayvan oyunundaki "Kirpi" seçeneği:** Türkiye'de yabani kirpi koruma altında ve evde beslenmesi uygun değil. Seçeneğin `id`'si istatistik anahtarı olduğu için dokunmadım. Öneriler:
   - Seçeneği çıkarmak (turnuvanın 16 seçeneği korunacaksa yerine başka bir hayvan koymak gerekir)
   - Adını "Afrika cüce kirpisi" yapmak
2. **Kapibara emojisi:** Unicode'da kapibara emojisi yok; sevgili tipi testinde 🦫 (kunduz) kullanılıyor. Kabul edilebilir bir yaklaşım ama tasarım tarafında özel bir ikon düşünülebilir.
3. **Hediye metinlerinde ürün ve platform adları:** "PlayStation, Xbox" (oyun kolu için uyumluluk uyarısı) ve "airfryer" (artık cins isim gibi kullanılıyor) kullanıcıya pratik bilgi verdiği için bırakıldı. Arama ifadelerindeki (`query`) marka adları da doğru sonuç için bırakıldı.
4. **İngilizce internet terimleri:** "situationship", "delulu", "golden retriever", "story", "cold brew", "bubble tea" bu kitlenin kendi kullandığı kelimeler olduğu için bırakıldı.
5. **"gerçekten" kelimesi:** Testlerde 31 kez geçiyor. Tek tek bakıldığında yanlış değil ama yoğun. Bir sonraki içerik turunda azaltılabilir.
6. **Seçim testlerinde etiket biçimi:** Bazı etiketler emir kipinde ("Balkonda çiçek sula"), bazıları isim-fiil ("Sahaf gezmek"). Anlamı bozmadığı için bırakıldı; istenirse tek kipe getirilebilir.

## Birleştirme notu

Ana branch'te başka bir çalışma eleme oyunu dosyalarına (`src/content/brackets/*.ts`) fotoğraf alanları ekliyor olabilir. Bu denetimin eleme dosyalarındaki değişiklikleri yalnızca `detail` ve `meaning` metinlerinde, tek satırlık nesnelerin içinde. Satır bazlı çakışma çıkarsa metin düzeltmeleri elle yeniden uygulanmalı:
- tatil-gunu: 1
- evcil-hayvan: 1
- sevgiliden-mesaj: 3
- kariyer: 1
