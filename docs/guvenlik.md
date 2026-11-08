# Güvenlik

Son denetim: 8 Kasım 2026. Site hesap, giriş ya da ödeme içermez; korunan şeyler veritabanındaki sayaçlar,
karşılaştırma oturumları (isim + skor, 30 gün) ve sunucu maliyetidir.

## Katmanlar

| Konu | Önlem | Nerede |
|---|---|---|
| XSS | React her metni kaçırır. JSON-LD `toJsonLd` ile `<` kaçırılarak basılır. Kullanıcıdan gelen tek metin karşılaştırmadaki isimdir; HTML karakterleri, kontrol/görünmez/yön değiştiren Unicode karakterler atılır, 24 karakterle sınırlıdır | `src/lib/jsonld.ts`, `src/lib/compare.ts` (`cleanName`) |
| İçerik güvenlik politikası | `default-src 'self'`, `object-src 'none'`, `frame-ancestors 'none'`, `form-action 'self'`, `base-uri 'self'`. `script-src 'unsafe-inline'` bilinçli: nonce tüm sayfaları dinamik yapıp statik üretimi bozardı; dışarıdan script yüklenmez | `next.config.ts` |
| Diğer başlıklar | HSTS (1 yıl; e-posta alt alan adları nedeniyle `includeSubDomains`/preload yok), `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`, `Permissions-Policy` | `next.config.ts` |
| İstek doğrulama | Her API ucu slug/id'yi beyaz listeden, cevapları soru/şık sayısından, skorları biçimden doğrular. Gövde boyutu önce `Content-Length` başlığından, sonra okunan metinden sınırlanır | `src/app/api/**`, `src/lib/server/redis.ts` |
| Hız sınırı (IP başına, dakikada) | Yazma 40 · karşılaştırma okuma 30 · yeni görsel üretimi 30. IP Vercel'in yazdığı `x-real-ip`/`x-forwarded-for` başlığından | `allowWrite`, `allow` |
| Karşılaştırma linkleri | Kod 64 bit rastgele (`crypto.getRandomValues`), tahmin edilemez; okuma hız sınırlı. İkinci kişi atomik kilitle bir kez yazar (yarış durumunda üstüne yazma yok) | `src/lib/compare.ts`, `src/app/api/cift/**` |
| Sayaç bütünlüğü | Oy değiştirme sayacı sıfırın altına indiremez. Test/turnuva sonuçları aynı tarayıcıdan 10 dakikada bir sayılır (yenileyerek şişirme) | `src/app/api/anket`, `src/lib/client/stats.ts` |
| Görsel uçları | Sorgu 256 karakterle sınırlı, sonuçlar CDN'de 1 yıl önbellekte; önbellek dışı üretim hız sınırlı | `src/app/api/_lib/guard.ts` |
| Sırlar | Veritabanı anahtarları sadece Vercel ortam değişkenlerinde; `.env*` ve `.vercel` git dışı. Repo geçmişinde sır taraması temiz | `.gitignore` |
| Bağımlılıklar | `npm audit --omit=dev`: 0 açık. Geliştirme araçlarında (eslint'in `minimatch`'i) 8 orta seviye bulgu var; siteye dahil değil, kötü niyetli glob girdisi gerektirir | |

## Bilinen ve kabul edilen riskler

- Anonim sayaçlar (oy, sonuç dağılımı) hız sınırına rağmen çok sayıda IP ile şişirilebilir. Etkisi: yüzdeler.
  Önemli olursa Vercel Firewall'da `/api/*` için ek kural ya da BotID eklenebilir.
- `unsafe-inline`: dışarıdan içerik enjekte edilebilecek bir yüzey olmadığı için düşük risk.

## Kontrol listesi (her büyük değişiklikte)

1. `npm audit --omit=dev`
2. Yeni API ucu: girdi beyaz listesi, `readJson(max)`, `allowWrite`/`allow`, `json()` ile yanıt
3. Kullanıcı metni basılıyorsa: React ile (asla `dangerouslySetInnerHTML` değil) ve temizlenmiş
4. `curl -sI https://sosyaleglence.com` ile başlıklar
