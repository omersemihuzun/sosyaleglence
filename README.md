# Sosyal Eğlence

İlişki ve kişilik testleri, eleme oyunları, "Bunu mu O mu?" anketleri, burç uyumu, hediye rehberi ve uzun içerikli rehberler.
Next.js 16 (App Router, Cache Components), Tailwind CSS 4, TypeScript, Upstash Redis (istatistikler), Vercel.

Canlı (geçici adres): https://sosyaleglence.vercel.app

## Komutlar

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (~1000 statik sayfa)
npm test           # birim + içerik bütünlüğü testleri (vitest)
npm run e2e        # uçtan uca testler (Playwright; önce build)
npm run kalibre    # test sonuç profillerini kalibre et (yeni test/soru değişikliğinde)
npm run seo        # tüm sayfaların başlık/açıklama uzunluk denetimi
npm run rapor      # istatistik raporu (önce: vercel env pull .env.local --yes)
```

## Modüller

| Modül | Adres | İçerik | Kaynak |
|---|---|---|---|
| Testler | `/testler` | Çok boyutlu senaryo testleri ve "Seç" formatı | `src/content/tests/` |
| Eleme oyunları | `/eleme` | 16 seçenekli turnuvalar, açık lisanslı fotoğraflar | `src/content/brackets/` |
| Bunu mu O mu? | `/bunu-mu-o-mu` | İkili anketler, günün sorusu | `src/content/polls.ts` |
| Burçlar | `/burclar`, `/burc-uyumu/...` | 12 profil, 78 uyum çifti | `src/content/burclar.ts`, `burc-uyum.ts` |
| Hediye | `/hediye` | Hediye bulucu, rehberler, SSS | `src/content/gifts/` |
| Rehber | `/rehber` | Uzun içerikli SEO makaleleri | `src/content/articles/` |
| Karşılaştırma | `/testler/[slug]/karsilastir/[kod]` | İki kişinin test uyumu (30 gün saklanır) | `src/lib/compare.ts` |
| Arama | `/ara` | Tüm içerikte Türkçe duyarsız arama | `src/lib/search*.ts` |

## Klasörler

```
src/content/          Tüm içerik (kod değil veri): testler, oyunlar, anketler, burçlar, hediyeler, makaleler
src/lib/scoring.ts    Test puanlama: boyut skorları + en yakın kalibre profil
src/lib/bracket.ts    Turnuva durumu (seçim geçmişinden türetilir)
src/lib/server/       Redis, istek sınırlama, API yardımcıları (sadece sunucu)
src/lib/og*.tsx       Paylaşım görselleri (story kartı, bağlantı önizlemesi)
src/app/api/          İstatistik, anket, karşılaştırma ve görsel kart uçları
scripts/              Kalibrasyon, SEO denetimi, rapor, fotoğraf araçları
e2e/                  Playwright testleri (masaüstü + mobil, erişilebilirlik dahil)
docs/                 Operasyon, domain geçişi, rakip analizi, erişilebilirlik, içerik denetimi
```

## Yeni test eklemek

1. `src/content/tests/` içinde mevcut bir testi kopyala. Gerçekçi senaryolar yaz; 4 şıktan hiçbiri bariz doğru olmasın.
2. Her sonucun `profile` alanına niyetini yaz (ör. kontrol yüksek: `{ kontrol: 80, ... }`).
3. Testi `src/content/tests/index.ts` ve `scripts/test-dosyalari.ts` listelerine ekle.
4. `npm run kalibre`: kalibre eder ve `docs/test-metrikleri.md` raporunu üretir. İsabet, dağılım (zorunlu) ve zorluk
   metrikleri (zor isabet, sınırda sonuç, tek boyutlu şık, etkisiz soru, ölü şık, uzunluk ipucu) orada açıklanır.
   Hedef: testin satırı ✓. `npm run kalibre -- --sıkı` zorluk uyarılarını da hata sayar.
5. `npm test && npm run seo`.
6. Yayından sonra `npm run rapor`: gerçek kullanıcıların başlatma/bitirme oranı, bırakılan sorular, ortalama süre ve
   şık dağılımı (%5 altı ölü, %70 üstü bariz şık). Şık sayaçları soru sürümüne bağlıdır; sorular değişince sıfırdan başlar.

## Yeni eleme oyunu ve fotoğraf eklemek

1. `src/content/brackets/` içinde 16 seçenekli bir dosya oluştur, `index.ts`'e ekle.
2. Her seçenek için fotoğraf:
   ```bash
   node scripts/gorsel-ara.mjs <oyun-slug> <secenek-id> "ingilizce arama"   # aday tablosu üretir
   # .gorsel-aday/<slug>/<id>/tablo.jpg dosyasına bak, uygun numarayı seç
   node scripts/gorsel-sec.mjs <oyun-slug> <secenek-id> <no>
   ```
   Sadece CC0, kamu malı, CC BY ve CC BY-SA lisansları alınır. Atıf otomatik kaydedilir ve "Görsel kaynakları" sayfasında görünür.
   Kurallar: tanınır yüz ana konu olmasın, logo/marka/okunur yazı olmasın, çocuk olmasın.
3. `src/content/brackets/gorseller/index.ts` dosyasına yeni oyunun json'unu ekle.
4. Bir oyunda 12'den az fotoğraf varsa oyun otomatik olarak emoji düzeninde görünür.
5. `npm test` lisans, atıf ve dosya bütünlüğünü kontrol eder.

## Ortam değişkenleri

| Değişken | Ne işe yarar |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Kanonik adres (varsayılan https://sosyaleglence.com) |
| `KV_REST_API_URL`, `KV_REST_API_TOKEN` | Upstash Redis (Vercel Marketplace kurar). Yoksa istatistik, anket yüzdeleri ve karşılaştırma kapanır. |
| `NEXT_PUBLIC_AMAZON_TAG` | Amazon affiliate etiketi (isteğe bağlı) |

Ayrıntılar: `docs/operasyon.md`, domain geçişi: `docs/domain-gecisi.md`.
