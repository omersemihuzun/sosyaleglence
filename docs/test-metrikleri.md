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
| ⚠ | arkadas-grubundaki-rolun-testi | 15 | %100 | %92 | %16–%33 | %11 | %90 | 0 | 0 | 3 |
| ⚠ | iliskide-kim-baskin-testi | 15 | %100 | %90 | %16–%29 | %11 | %93 | 0 | 0 | 5 |
| ⚠ | toksik-arkadas-testi | 15 | %99 | %82 | %4–%26 | %17 | %82 | 0 | 0 | 2 |
| ⚠ | sofra-kur-sehir-testi | 11 | %97 | %74 | %10–%25 | %12 | %84 | 0 | 0 | 0 |
| ⚠ | tatil-cantasi-ask-testi | 10 | %99 | %71 | %14–%38 | %8 | %88 | 0 | 0 | 0 |
| ⚠ | gun-planla-mevsim-testi | 10 | %100 | %72 | %13–%44 | %17 | %95 | 0 | 0 | 0 |
| ⚠ | kahve-siparisi-ruh-yasi-testi | 10 | %99 | %74 | %15–%33 | %12 | %88 | 0 | 0 | 0 |
| ⚠ | situationship-testi | 15 | %100 | %89 | %6–%26 | %8 | %92 | 0 | 0 | 2 |
| ⚠ | ne-kadar-delulusun-testi | 15 | %99 | %92 | %6–%26 | %8 | %88 | 0 | 0 | 3 |
| ⚠ | hangi-tip-sevgilisin-testi | 15 | %100 | %98 | %24–%26 | %5 | %100 | 0 | 0 | 0 |
| ⚠ | kavga-tarzi-testi | 12 | %100 | %100 | %18–%22 | %8 | %94 | 0 | 0 | 0 |
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

- ⚠ tek boyutlu şık %90
- ⚠ uzunluk ipucu: S2D, S3C, S6C
- Sonuca en az katkı veren sorular (bilgi, %): S9 (24.3), S13 (25.6), S11 (26.5)

### iliskide-kim-baskin-testi

- ⚠ tek boyutlu şık %93
- ⚠ uzunluk ipucu: S3D, S8D, S9D, S11D, S12D
- Sonuca en az katkı veren sorular (bilgi, %): S15 (23.2), S8 (25.3), S12 (25.5)

### toksik-arkadas-testi

- ⚠ tek boyutlu şık %82
- ⚠ uzunluk ipucu: S5D, S9B
- Sonuca en az katkı veren sorular (bilgi, %): S3 (5.5), S11 (6.1), S10 (12.5)

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

- ⚠ tek boyutlu şık %92
- ⚠ uzunluk ipucu: S6D, S11D
- Sonuca en az katkı veren sorular (bilgi, %): S3 (28.8), S5 (28.9), S9 (28.9)

### ne-kadar-delulusun-testi

- ⚠ tek boyutlu şık %88
- ⚠ uzunluk ipucu: S3C, S11D, S14C
- Sonuca en az katkı veren sorular (bilgi, %): S12 (28.2), S9 (28.2), S14 (28.6)

### hangi-tip-sevgilisin-testi

- ⚠ tek boyutlu şık %100
- Sonuca en az katkı veren sorular (bilgi, %): S4 (26.9), S2 (27.0), S9 (27.0)

### kavga-tarzi-testi

- ⚠ tek boyutlu şık %94
- Sonuca en az katkı veren sorular (bilgi, %): S5 (27.8), S7 (29.4), S10 (29.4)

### iliskiye-hazir-misin-testi

- ⚠ tek boyutlu şık %92
- Sonuca en az katkı veren sorular (bilgi, %): S4 (26.4), S2 (26.8), S8 (27.2)

### guven-sorunu-testi

- ⚠ tek boyutlu şık %94
- Sonuca en az katkı veren sorular (bilgi, %): S5 (28.1), S7 (28.9), S10 (29.1)
