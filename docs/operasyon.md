# Operasyon rehberi

## Yerel geliştirme

```bash
npm install
npm run dev          # http://localhost:3000
npm test             # birim + içerik bütünlüğü testleri (vitest)
npm run kalibre      # test sonuç profillerini kalibre eder
npm run build        # production build
```

Node 24 kullanılır (CI ile aynı sürüm).

## Ortam değişkenleri

| Değişken                 | Zorunlu | Açıklama                                                                                                                                                                |
| ------------------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`   | Hayır   | Kanonik adres. Varsayılan `https://sosyaleglence.com`. Sitemap, canonical ve paylaşım linkleri bunu kullanır. Önizleme ortamında kendi adresini vermek istersen ayarla. |
| `NEXT_PUBLIC_AMAZON_TAG` | Hayır   | Amazon Associates takip etiketi (ör. `sosyaleglence-21`). Tanımlıysa tüm Amazon linklerine `tag=` eklenir.                                                              |

`NEXT_PUBLIC_` ile başlayanlar tarayıcıya gömülür; buraya gizli bilgi konmaz. Değişken değişince yeniden build gerekir.

Vercel'de: Project → Settings → Environment Variables, ya da `vercel env add NEXT_PUBLIC_AMAZON_TAG production`.

## Deploy (Vercel)

1. `vercel link` ile projeyi bağla (bir kez).
2. Önizleme: `vercel deploy`. Production: `vercel deploy --prod`.
3. Git bağlıysa her push otomatik önizleme, ana dala merge production deploy üretir.
4. Alan adı: Vercel → Domains'e `sosyaleglence.com` ve `www.sosyaleglence.com` ekle, DNS kayıtlarını Vercel'in verdiği değerlere göre güncelle. Eski WordPress hostingindeki kayıtları ancak yeni site doğrulandıktan sonra kaldır.

Deploy sonrası kontrol listesi:

- `/`, `/testler`, `/eleme`, `/hediye` 200 dönüyor mu?
- `/quizmaker` ve `/hediye-önerileri` kalıcı yönlendirme yapıyor mu?
- Bir testi bitirip "Story kartını paylaş" ile görselin indiğini doğrula.
- `/sitemap.xml` ve `/robots.txt` açılıyor mu? Google Search Console'a sitemap'i gönder.

Geri alma: Vercel → Deployments → önceki deploy → "Promote to Production" (ya da `vercel rollback`).

## Güvenlik başlıkları

`next.config.ts` içindeki `headers()` her yanıta ekler:

- **Content-Security-Policy**: yalnızca kendi alan adımızdan script, stil, font ve görsel. Statik sayfalarda nonce kullanılamadığı için `script-src 'unsafe-inline'` açık (Next'in hydration script'leri ve JSON-LD için gerekli). Dış bir script ya da analiz aracı eklenecekse ilgili alan adını `script-src` / `connect-src` listesine eklemek gerekir, yoksa tarayıcı engeller.
- **Strict-Transport-Security** (yalnızca production), **X-Content-Type-Options**, **Referrer-Policy**, **X-Frame-Options: DENY** ve `frame-ancestors 'none'` (site başka sitelerde iframe içine alınamaz), **Permissions-Policy** (kamera, mikrofon, konum kapalı).

Görsel üreten uçlar (`/api/kart/...`, `/api/eleme-kart/...`) yalnızca içerikte tanımlı slug/id'leri kabul eder, bilinmeyenlerde 404, 256 karakterden uzun sorgularda 414 döner.

## Yedekleme

Site tamamen statik içerikten üretilir; veritabanı yoktur. Tüm içerik git deposundadır:

- Testler: `src/content/tests/*.ts` + `kalibrasyon.json`
- Eleme oyunları: `src/content/brackets/*.ts`
- Hediye fikirleri ve rehberler: `src/content/gifts/`

Yedek = git deposunun uzak kopyası (GitHub). Ek olarak düzenli aralıklarla `git bundle create yedek.bundle --all` alınabilir. Vercel'deki ortam değişkenlerini ayrıca bir parola yöneticisinde sakla.

İleride veritabanı eklenirse (ör. oy istatistikleri) o servisin kendi yedekleme ayarı ayrıca açılmalı.

## Yeni içerik ekleme akışı

1. Yeni bir dal aç: `git checkout -b icerik/yeni-test`.
2. İçeriği ekle (adımlar `README.md` içinde):
   - Test: dosyayı yaz, `src/content/tests/index.ts` ve `scripts/kalibre.ts` listelerine ekle, `npm run kalibre`.
   - Eleme oyunu: `src/content/brackets/` altına 4/8/16/32 seçenekli dosya, `index.ts` listesine ekle.
   - Hediye: `src/content/gifts/ideas.ts` dosyasına nesne ekle.
3. `npm test` çalıştır. İçerik testleri bilinmeyen boyut id'si, eksik kalibrasyon, tekrar eden id/slug, geçersiz alıcı veya bütçe gibi hataları yakalar.
4. Commit, push, PR. CI yeşilse merge.

## CI

`.github/workflows/ci.yml` her push ve PR'da çalışır:

1. `npm ci`
2. `next typegen` + `tsc --noEmit` (tip kontrolü)
3. `npm run lint`
4. `npm test` (vitest: puanlama, turnuva mantığı, mağaza linkleri, içerik bütünlüğü)
5. `npm run kalibre` (sonuçlar birbirinden ayrışıyor mu; isabet %75 altındaysa başarısız)
6. `npm run build` (tüm sayfalar statik üretilebiliyor mu)

Bir adım kırmızıysa merge etme; hata mesajı genellikle hangi içerik dosyasının bozulduğunu söyler.
