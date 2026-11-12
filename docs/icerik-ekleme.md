# İçerik ekleme

Bütün içerik `src/content` altında tipli TypeScript modülleridir. Sayfalar, site haritası ve arama indeksi bu
modüllerden otomatik üretilir.

## Yeni test

1. `src/content/tests/` içinde mevcut bir testi kopyala. Gerçekçi senaryolar yaz; 4 şıktan hiçbiri bariz doğru olmasın,
   şıkların çoğu birden fazla boyuta puan versin, uzunlukları birbirine yakın olsun.
2. Her sonucun `profile` alanına niyetini yaz (ör. kontrol yüksek: `{ kontrol: 80, ... }`).
3. Testi `src/content/tests/index.ts` ve `scripts/test-dosyalari.ts` listelerine ekle.
4. `npm run kalibre`: profilleri kalibre eder ve `docs/test-metrikleri.md` raporunu üretir. İsabet ve dağılım zorunlu;
   zorluk metrikleri (zor isabet, sınırda sonuç, tek boyutlu şık, etkisiz soru, ölü şık, uzunluk ipucu) raporda
   açıklanır. Hedef: testin satırı ✓. `npm run kalibre -- --sıkı` zorluk uyarılarını da hata sayar.
5. `npm run check`.
6. Yayından sonra `npm run rapor`: gerçek kullanıcıların başlatma/bitirme oranı, bırakılan sorular, ortalama süre ve
   şık dağılımı (%5 altı ölü, %70 üstü bariz şık). Şık sayaçları soru sürümüne bağlıdır; sorular değişince sıfırlanır.

Slug, sonuç id'leri ve boyut id'leri/sayısı yayından sonra değiştirilmemeli: paylaşılmış sonuç linkleri bunlara bağlı.

## Yeni eleme oyunu ve fotoğraflar

1. `src/content/brackets/` içinde 16 seçenekli bir dosya oluştur, `index.ts`'e ekle.
2. Her seçenek için fotoğraf:
   ```bash
   node scripts/gorsel-ara.mjs <oyun-slug> <secenek-id> "ingilizce arama"   # aday tablosu üretir
   # .gorsel-aday/<slug>/<id>/tablo.jpg dosyasına bak, uygun numarayı seç
   node scripts/gorsel-sec.mjs <oyun-slug> <secenek-id> <no>
   node scripts/kucuk-gorsel.mjs                                           # 400x300 küçük sürümler
   ```
   Sadece CC0, kamu malı, CC BY ve CC BY-SA lisansları alınır. Atıf otomatik kaydedilir ve "Görsel kaynakları"
   sayfasında görünür. Kurallar: tanınır yüz ana konu olmasın, logo/marka/okunur yazı olmasın, çocuk olmasın.
3. `src/content/brackets/gorseller/index.ts` dosyasına yeni oyunun json'unu ekle.
4. Bir oyunda 12'den az fotoğraf varsa oyun otomatik olarak emoji düzeninde görünür.
5. `npm test` lisans, atıf ve dosya bütünlüğünü kontrol eder.

## Çift oyunları

Kartlar ve sorular `src/content/cift/` altında; tipleri `types.ts`. İçerik saygılı ve aile ortamında okunabilir
olmalı; kıskançlık ya da kontrol tetikleyen görevler (telefon gösterme, eski sevgililer) eklenmez.
`src/content/cift/cift.test.ts` sayıları, benzersiz id'leri ve dağılımı denetler.
