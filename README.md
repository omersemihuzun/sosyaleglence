# Sosyal Eğlence

İlişki ve kişilik testleri ile hediye rehberi. Next.js 16 (App Router, Cache Components), Tailwind CSS 4, TypeScript.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run kalibre    # test sonuçlarını kalibre et (yeni test ekleyince ya da soru değiştirince)
```

## Klasörler

```
src/content/tests/      Testler (her test tek dosya) + kalibrasyon.json
src/content/gifts/      Hediye fikirleri (ideas.ts) ve SEO rehberleri (guides.ts)
src/lib/scoring.ts      Puanlama: boyut skorları + en yakın sonuç profili
src/lib/shop.ts         Mağaza linkleri (affiliate eklenecek yer)
src/lib/og.tsx          Paylaşım görselleri (story kartı ve bağlantı önizlemesi)
src/lib/site.ts         Site adı, e-posta, sosyal medya hesapları
scripts/kalibre.ts      Sonuç profili kalibrasyonu
```

## Test nasıl çalışır?

- Her test 3-5 **boyut** ölçer (ör. Kıskançlık: sahiplenme, güvensizlik, kontrol, sessiz kırgınlık).
- Her şık bu boyutlara 0-3 puan verir. Şıkların sırası her açılışta karışır.
- Boyut skoru = alınan puan / o boyutta alınabilecek en yüksek puan (0-100).
- Sonuç, skorlara **en yakın profile** sahip sonuçtur.
- Skorlar sonuç adresinde taşınır (`?s=64-20-80-33`). Veritabanı gerekmez.

## Yeni test eklemek

1. `src/content/tests/` içinde mevcut bir testi kopyala, içeriği değiştir.
2. Her sonucun `profile` alanına o sonucun **niyetini** yaz (ör. "kontrol yüksek, diğerleri düşük" için `{ kontrol: 80, sahiplenme: 20, ... }`).
3. Testi `src/content/tests/index.ts` içindeki listeye ve `scripts/kalibre.ts` içindeki `files` listesine ekle.
4. `npm run kalibre` çalıştır. Script sanal cevaplayıcılarla her sonucun gerçekte ulaşılabilir profilini hesaplar, dağılımı ve isabet oranını raporlar.
   - İsabet %75'in altındaysa sonuçlar birbirinden ayrışmıyor demektir. Şıkların puanlarını gözden geçir.

İyi bir soru için ipuçları: Gerçekçi bir senaryo yaz. 4 şıktan hiçbiri açıkça "doğru" ya da "kötü" görünmesin. Her şık farklı bir eğilimi ölçsün.

## Hediye eklemek

`src/content/gifts/ideas.ts` dosyasına yeni bir nesne ekle: alıcılar, ilgi alanları, bütçe aralığı ve mağazada aranacak ifade (`query`). Rehber sayfaları ve hediye bulucu otomatik güncellenir.

## Affiliate

`src/lib/shop.ts`:
- Amazon: `.env` içinde `NEXT_PUBLIC_AMAZON_TAG=xxx-21` tanımla.
- Trendyol / Hepsiburada: partner panelindeki link biçimi belli olunca `wrapTrendyol` / `wrapHepsiburada` fonksiyonlarını güncelle.

## Eski siteden yönlendirmeler

`next.config.ts` içinde: `/quizmaker`, `/hediye-önerileri`, `/iletişim` adresleri yeni sayfalara kalıcı (301) yönlendirilir.
