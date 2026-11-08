# Erişilebilirlik ve performans denetimi

Tarih: 2026-11-08. Ölçümler production build (`next build` + `next start`) üzerinden alındı.

## Kontrast (WCAG 2.2 AA)

Oranlar WCAG göreli parlaklık formülüyle hesaplandı. Normal metin için eşik 4.5:1, büyük/kalın başlık için 3:1.

| Kombinasyon | Oran | Durum |
|---|---|---|
| `plum-soft #5A3E5E` / `paper #FFF7F3` | 8.69 | Geçer |
| `plum-soft` / beyaz kart | 9.19 | Geçer |
| `plum-soft` / `blush #FFD6DE` | 6.97 | Geçer |
| Beyaz / `cherry #D7102F` (butonlar) | 5.24 | Geçer |
| `cherry` / `paper` (link metni) | 4.96 | Geçer |
| `plum` / WhatsApp yeşili | 8.68 | Geçer |

Renkli sonuç kartlarında `paper` rengi yazı:

| Kart rengi | Oran | Durum |
|---|---|---|
| `#E0567A` (pembe: Dengeli Romantik, Söz Ustası, Sevgilinle…) | **3.43** | Başlık geçer, normal metin **geçmez** |
| `#3B6FD9` (mavi) | **4.45** | Sınırda |
| `#2F7D6D`, `#C2410C`, `#D7102F` | 4.6 – 5.0 | Geçer |
| `#B0287A`, `#8E3B63`, `#6B2FA0` ve koyu tonlar | 5.8 – 16 | Geçer |

**Yapılan:**
- Kartlardaki `text-paper/85` ve `text-paper/90` şeffaflıkları, renkli kart içinde tam opaklığa çekildi (`globals.css`). Şeffaflık gerçek oranı tablodakinin de altına düşürüyordu.
- Renkli kartlara hafif mürdüm yazı gölgesi eklendi (`0 1px 2px rgb(43 16 48 / .45)`). Bu okunurluğu artırır ama WCAG ölçümünde sayılmaz.
- Mağaza butonlarının hover durumunda beyaz yazı turuncu Trendyol zemininde yaklaşık 2.8:1 kalıyordu. Hover artık mağaza renginin %22'lik açık tonu üzerinde mürdüm yazı kullanıyor.

**Açık kalan (renk değiştirilmeden çözülemeyen):** `#E0567A` kartlarında alt başlık (tagline) 20px normal ağırlıkta. Tam AA için bu kartlarda yazının `plum` renginde olması gerekir (`plum` / `#E0567A` = 4.74). Bu, sonuç sayfası bileşeninde kart rengine göre yazı rengi seçen küçük bir değişiklik: `testler/[slug]/sonuc/[result]/page.tsx` ve `eleme/[slug]/sonuc/[item]/page.tsx`.

## Klavye ve ekran okuyucu

**Yapılan:**
- **İçeriğe geç bağlantısı:** Sayfanın ilk odaklanılabilir öğesi. Odaklanınca görünür, `main#icerik` öğesine atlar.
- **Test (quiz):**
  - Her yeni soruda odak soru başlığına taşınıyor (zaten vardı).
  - Başlığa ekran okuyucu için "Soru 3 / 15:" öneki eklendi.
  - İlerleme çubuğuna `aria-valuetext` eklendi.
  - Görsel "3/15" sayacı tekrar okunmasın diye `aria-hidden` yapıldı.
  - "Önceki" butonuna açık isim verildi, ok işareti gizlendi.
- **Turnuva:**
  - Seçilen kart DOM'dan kalktığı için odak `body`'ye düşüyordu. Artık her yeni eşleşmede odak soru başlığına taşınıyor.
  - `aria-live="polite"` bölgesi her eşleşmeyi duyuruyor: "Çeyrek final, eşleşme 2/4: Ege'de taş ev ya da Tekne ev".
  - "Geri al" butonuna açık isim verildi.
- **Hareket:** `prefers-reduced-motion` açıkken bütün animasyonlar kapalı. Yeni kutlama konfetisi bu modda hiç görünmüyor (başlangıç opaklığı 0).

**Zaten doğru olanlar:** Bütün etkileşimler gerçek `<button>` ve `<a>` öğeleri. `:focus-visible` halkası 3px kiraz rengi. Hediye bulucu çipleri `aria-pressed` kullanıyor. Sonuç sayısı `aria-live` ile duyuruluyor. Paylaşım durumu `role="status"`.

**Öneriler (bu turda yapılmadı):**
- Header menüsünde aktif sayfa için `aria-current="page"`. Bunun için `usePathname` gerekiyor ve header'ın client bileşene dönüşmesi lazım; küçük bir JS maliyeti karşılığında yapılabilir.
- Turnuva kartlarında görünür odak halkası çıkartma gölgesiyle birleşiyor. Halka görünüyor ama daha kalın bir varyant düşünülebilir.

## Görseller

- `icon` (32px), `apple-icon` (180px) ve `manifest.webmanifest` eklendi. Varsayılan Next `favicon.ico` kaldırıldı.
- Ana sayfa, `/testler`, `/eleme`, `/hediye` için ayrı OG görselleri eklendi.
- **Bulunan hata:** Hediye rehberi sayfalarında hiç `og:image` yoktu. Sayfa kendi `openGraph` metadata'sını tanımladığı için üst bölümün görselini devralmıyordu ve WhatsApp'ta görselsiz görünüyordu. Her rehbere kendi görseli eklendi (`hediye/[guide]/opengraph-image.tsx`).
- Bütün görseller indirilip gözle kontrol edildi. Türkçe harfler (İ, ğ, ş, ı) kalın marka fontuyla doğru çiziliyor.

## Performans

Ölçüm: production sunucusundan her sayfanın HTML'i ve yüklediği bütün `<script>` dosyaları indirildi, gzip -9 ile sıkıştırılmış boyutları toplandı.

| Sayfa | HTML (gz) | JS (gz) |
|---|---|---|
| `/` | 14.6 KB | 175.2 KB |
| `/testler` | 5.5 KB | 174.4 KB |
| `/testler/kiskanclik-testi` | 11.1 KB | 176.5 KB |
| Test sonucu | 12.3 KB | 176.8 KB |
| `/eleme` | 6.2 KB | 174.4 KB |
| `/eleme/gelecekteki-evini-sec` | 7.4 KB | **188.8 → 176.5 KB** |
| Turnuva sonucu | 8.2 KB | 176.4 KB |
| `/hediye` | 5.3 KB | 182.2 KB |
| `/hediye/anneye-hediye` | 15.1 KB | 174.4 KB |
| `/iletisim` | 4.1 KB | 174.4 KB |

**Bulgular:**
- Bütün sayfalarda ortak ~174 KB taban var: React 19 ve Next.js çalışma zamanı. Bu framework'ün sabiti; sayfa kodu bunun üstüne en fazla birkaç KB ekliyor.
- **Düzeltilen:** Turnuva bileşeni `roundName` için `@/content/brackets` modülünü import ediyordu. Bu, 8 turnuvanın bütün metnini (örneğin "Kenya safarisi") her turnuva sayfasının tarayıcı paketine taşıyordu. Fonksiyon bileşene alındı. Turnuva sayfası 12.3 KB (gz) hafifledi, metin artık client paketinde yok (`grep` ile doğrulandı).
- Hediye bulucu +8 KB taşıyor. Bunun sebebi 59 hediye fikri verisi ve bu veri filtreleme için tarayıcıda gerekli. Rehber metinleri pakete girmiyor, tree-shaking ile ayıklanıyor (doğrulandı).
- Rehber sayfalarının HTML'i ham 120 KB, gzip'li 15 KB. Fazlalık RSC payload'ının HTML içinde ikinci kez taşınmasından geliyor, normal bir durum. Gzip'li boyut sorun değil.
- Fontlar `next/font` ile kendi sunucumuzdan geliyor, `display: swap`. Harici font isteği yok.
