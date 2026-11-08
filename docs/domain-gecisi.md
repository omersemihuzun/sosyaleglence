# sosyaleglence.com'u yeni siteye taşıma

Yeni site şu an **https://sosyaleglence.vercel.app** adresinde yayında. Eski WordPress sitesi Hostinger'da duruyor.

## Mevcut durum (8 Kasım 2026'da okundu)

| Kayıt | Değer | Ne işe yarıyor |
|---|---|---|
| NS | ns1/ns2.dns-parking.com | DNS'i Hostinger yönetiyor |
| A `@` ve `www` | 92.113.19.98 | Eski WordPress sitesi (Hostinger, LiteSpeed) |
| MX | mx1/mx2.hostinger.com | **info@sosyaleglence.com e-postası. DOKUNMA.** |

## Adımlar

1. **Yedek al:** Hostinger panelinden WordPress dosya ve veritabanı yedeğini indir. Görseller `wp-content/uploads` altında duruyor, ileride lazım olabilir.
2. **Vercel'e alan adını ekle:**
   ```bash
   vercel domains add sosyaleglence.com
   vercel domains add www.sosyaleglence.com
   ```
   Vercel'in göstereceği DNS kayıtlarını not et.
3. **Hostinger DNS paneli** (DNS / Nameservers > DNS kayıtları):
   - `@` için **A** kaydını Vercel'in verdiği IP ile değiştir (genelde `76.76.21.21`).
   - `www` için **CNAME** kaydını `cname.vercel-dns.com` yap.
   - **MX, TXT (SPF/DKIM) ve diğer mail kayıtlarına dokunma.** E-posta Hostinger'da çalışmaya devam eder.
4. **Site adresini güncelle:**
   ```bash
   vercel env rm NEXT_PUBLIC_SITE_URL production --yes
   vercel env add NEXT_PUBLIC_SITE_URL production --value https://sosyaleglence.com --yes
   vercel deploy --prod
   ```
   (Kodda varsayılan zaten `https://sosyaleglence.com`. Değişkeni silmek de yeterli.)
5. **Kontrol:**
   - https://sosyaleglence.com açılıyor mu, SSL kilidi var mı (Vercel sertifikayı birkaç dakikada otomatik üretir)
   - https://sosyaleglence.com/quizmaker → yeni kıskançlık testine yönleniyor mu
   - info@sosyaleglence.com'a test e-postası gönder, ulaşıyor mu
6. **Google Search Console:** Alan adını doğrula, `https://sosyaleglence.com/sitemap.xml` adresini gönder.
7. **Hostinger barındırma paketi:** Site taşındıktan sonra paket, sadece e-posta için gerekiyorsa e-posta paketine düşürülebilir. Bu bir maliyet kararı, aceleye gerek yok.

## Geri dönüş

Bir sorun olursa Hostinger'da A kaydını yeniden `92.113.19.98` yapmak eski siteyi geri getirir (DNS yayılımı birkaç dakika ile birkaç saat sürer).
