# Test kalite metrikleri

Bu dosya `npm run kalibre` tarafından üretilir, elle düzenleme.

| | Test | Soru | İsabet | Zor isabet | Dağılım (min–max) | Sınırda | Tek boyutlu şık | Etkisiz soru | Ölü şık | Uzunluk ipucu |
|---|---|---|---|---|---|---|---|---|---|---|
| ✖ | kiskanclik-testi | 15 | %94 | %65 | %2–%30 | %27 | %55 | 0 | 0 | 1 |
| ⚠ | red-flag-testi | 15 | %99 | %84 | %4–%22 | %15 | %62 | 0 | 0 | 2 |
| ⚠ | baglanma-stili-testi | 16 | %99 | %93 | %18–%30 | %6 | %86 | 0 | 0 | 6 |
| ⚠ | exini-unuttun-mu-testi | 15 | %95 | %81 | %7–%30 | %16 | %67 | 0 | 0 | 7 |
| ⚠ | sevgi-dili-testi | 15 | %100 | %91 | %19–%21 | %10 | %95 | 0 | 0 | 5 |
| ⚠ | flort-tarzi-testi | 15 | %100 | %86 | %16–%32 | %11 | %88 | 0 | 0 | 6 |
| ⚠ | sosyal-pil-testi | 16 | %95 | %81 | %11–%27 | %17 | %81 | 0 | 0 | 1 |
| ✓ | arkadas-grubundaki-rolun-testi | 15 | %100 | %84 | %16–%32 | %13 | %38 | 0 | 0 | 0 |
| ✓ | iliskide-kim-baskin-testi | 15 | %100 | %88 | %15–%28 | %12 | %38 | 0 | 0 | 0 |
| ✓ | toksik-arkadas-testi | 15 | %99 | %81 | %4–%29 | %18 | %43 | 0 | 0 | 0 |
| ⚠ | sofra-kur-sehir-testi | 11 | %97 | %74 | %10–%25 | %12 | %84 | 0 | 0 | 0 |
| ⚠ | tatil-cantasi-ask-testi | 10 | %99 | %71 | %14–%38 | %8 | %88 | 0 | 0 | 0 |
| ⚠ | gun-planla-mevsim-testi | 10 | %100 | %72 | %13–%44 | %17 | %95 | 0 | 0 | 0 |
| ⚠ | kahve-siparisi-ruh-yasi-testi | 10 | %99 | %74 | %15–%33 | %12 | %88 | 0 | 0 | 0 |
| ✓ | situationship-testi | 15 | %99 | %80 | %8–%25 | %13 | %38 | 0 | 0 | 0 |
| ✓ | ne-kadar-delulusun-testi | 15 | %99 | %83 | %8–%25 | %11 | %43 | 0 | 0 | 0 |
| ✓ | hangi-tip-sevgilisin-testi | 15 | %100 | %99 | %24–%26 | %8 | %28 | 0 | 0 | 0 |
| ✓ | kavga-tarzi-testi | 12 | %100 | %97 | %17–%24 | %10 | %35 | 0 | 0 | 0 |
| ⚠ | iliskiye-hazir-misin-testi | 12 | %100 | %99 | %19–%21 | %8 | %92 | 0 | 0 | 0 |
| ⚠ | guven-sorunu-testi | 12 | %100 | %100 | %19–%21 | %8 | %94 | 0 | 0 | 0 |

## Metrikler ve eşikler

| Metrik | Ne ölçer | Hedef |
|---|---|---|
| İsabet | Bir sonucun niyetiyle cevap veren kişi o sonucu alıyor mu | ≥ %75 (zorunlu) |
| Zor isabet | İki kat kararsız cevaplayan kişide isabet: test gerçek, karışık insanlara dayanıklı mı | ≥ %55 |
| Dağılım | Rastgele kişilerde en nadir ve en sık sonuç | min ≥ %2, max ≤ %45 (zorunlu) |
| Sınırda | İlk iki sonuca uzaklığı %10'dan az farklı olan kişiler | ≤ %25 |
| Tek boyutlu şık | Sadece bir boyuta puan veren şıklar. Yüksekse her şık "bu sonuca gider" diye okunur | ≤ %50 |
| Etkisiz soru | Sonuçla karşılıklı bilgisi sonuç entropisinin %1.5'inden az olan soru | 0 |
| Ölü şık | Rastgele kişilerin %5'inden azının seçtiği şık | 0 |
| Uzunluk ipucu | Diğer şıkların ortalamasından 1.6 kat uzun şık | 0 |

Not: "Bariz doğru şık" (sosyal beğenirlik) sayıyla ölçülemez; içerik incelemesinde elle kontrol edilir.

## Ayrıntılar

### kiskanclik-testi

- ✖ nadir sonuç %1.8
- ⚠ sınırda %27
- ⚠ tek boyutlu şık %55
- ⚠ uzunluk ipucu: S14A
- Sonuca en az katkı veren sorular (bilgi, %): S14 (8.6), S11 (11.2), S10 (12.2)

### red-flag-testi

- ⚠ tek boyutlu şık %62
- ⚠ uzunluk ipucu: S2C, S12D
- Sonuca en az katkı veren sorular (bilgi, %): S3 (15.0), S4 (17.5), S15 (17.6)

### baglanma-stili-testi

- ⚠ tek boyutlu şık %86
- ⚠ uzunluk ipucu: S1B, S2D, S4C, S9D, S13D, S15C
- Sonuca en az katkı veren sorular (bilgi, %): S13 (20.2), S14 (22.1), S6 (23.2)

### exini-unuttun-mu-testi

- ⚠ tek boyutlu şık %67
- ⚠ uzunluk ipucu: S2B, S3D, S5B, S8C, S9C, S10D, S13D
- Sonuca en az katkı veren sorular (bilgi, %): S13 (10.9), S3 (12.5), S15 (15.4)

### sevgi-dili-testi

- ⚠ tek boyutlu şık %95
- ⚠ uzunluk ipucu: S5C, S9C, S11C, S13D, S15A
- Sonuca en az katkı veren sorular (bilgi, %): S10 (16.7), S8 (18.9), S12 (19.5)

### flort-tarzi-testi

- ⚠ tek boyutlu şık %88
- ⚠ uzunluk ipucu: S5C, S9B, S10D, S11D, S12D, S15C
- Sonuca en az katkı veren sorular (bilgi, %): S7 (22.0), S12 (25.3), S4 (26.1)

### sosyal-pil-testi

- ⚠ tek boyutlu şık %81
- ⚠ uzunluk ipucu: S9D
- Sonuca en az katkı veren sorular (bilgi, %): S7 (19.3), S5 (24.1), S10 (24.6)

### arkadas-grubundaki-rolun-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S10 (21.5), S7 (22.8), S1 (23.2)

### iliskide-kim-baskin-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S5 (18.2), S1 (23.6), S12 (24.1)

### toksik-arkadas-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S10 (13.4), S15 (13.6), S7 (13.7)

### sofra-kur-sehir-testi

- ⚠ tek boyutlu şık %84
- Sonuca en az katkı veren sorular (bilgi, %): S4 (16.1), S7 (16.4), S8 (20.3)

### tatil-cantasi-ask-testi

- ⚠ tek boyutlu şık %88
- Sonuca en az katkı veren sorular (bilgi, %): S3 (20.9), S10 (21.1), S8 (21.2)

### gun-planla-mevsim-testi

- ⚠ tek boyutlu şık %95
- Sonuca en az katkı veren sorular (bilgi, %): S9 (22.6), S6 (25.8), S5 (26.0)

### kahve-siparisi-ruh-yasi-testi

- ⚠ tek boyutlu şık %88
- Sonuca en az katkı veren sorular (bilgi, %): S8 (20.1), S7 (21.2), S2 (21.3)

### situationship-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S11 (17.8), S1 (18.6), S2 (18.7)

### ne-kadar-delulusun-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S5 (16.9), S1 (17.2), S9 (17.7)

### hangi-tip-sevgilisin-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S14 (24.9), S2 (25.2), S15 (25.9)

### kavga-tarzi-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S2 (21.0), S11 (21.3), S5 (21.5)

### iliskiye-hazir-misin-testi

- ⚠ tek boyutlu şık %92
- Sonuca en az katkı veren sorular (bilgi, %): S4 (26.4), S2 (26.8), S8 (27.2)

### guven-sorunu-testi

- ⚠ tek boyutlu şık %94
- Sonuca en az katkı veren sorular (bilgi, %): S5 (28.1), S7 (28.9), S10 (29.1)
