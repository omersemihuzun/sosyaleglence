# Test kalite metrikleri

Bu dosya `npm run kalibre` tarafından üretilir, elle düzenleme.

| | Test | Soru | İsabet | Zor isabet | Dağılım (min–max) | Sınırda | Tek boyutlu şık | Etkisiz soru | Ölü şık | Uzunluk ipucu |
|---|---|---|---|---|---|---|---|---|---|---|
| ✓ | kiskanclik-testi | 15 | %87 | %60 | %3–%29 | %20 | %18 | 0 | 0 | 0 |
| ✓ | red-flag-testi | 15 | %97 | %71 | %5–%24 | %14 | %25 | 0 | 0 | 0 |
| ✓ | baglanma-stili-testi | 16 | %99 | %89 | %18–%28 | %5 | %47 | 0 | 0 | 0 |
| ✓ | exini-unuttun-mu-testi | 15 | %93 | %77 | %7–%31 | %14 | %23 | 0 | 0 | 0 |
| ✓ | sevgi-dili-testi | 15 | %100 | %88 | %18–%21 | %12 | %0 | 0 | 0 | 0 |
| ✓ | flort-tarzi-testi | 15 | %99 | %76 | %17–%27 | %11 | %0 | 0 | 0 | 0 |
| ✓ | sosyal-pil-testi | 16 | %90 | %72 | %14–%29 | %11 | %34 | 0 | 0 | 0 |
| ✓ | arkadas-grubundaki-rolun-testi | 15 | %100 | %84 | %16–%32 | %13 | %38 | 0 | 0 | 0 |
| ✓ | iliskide-kim-baskin-testi | 15 | %100 | %88 | %15–%28 | %12 | %38 | 0 | 0 | 0 |
| ✓ | toksik-arkadas-testi | 15 | %99 | %81 | %4–%29 | %18 | %43 | 0 | 0 | 0 |
| ✓ | sofra-kur-sehir-testi | 11 | %97 | %94 | %12–%23 | %9 | %16 | 0 | 0 | 0 |
| ✓ | tatil-cantasi-ask-testi | 11 | %98 | %96 | %19–%21 | %9 | %11 | 0 | 0 | 0 |
| ✓ | gun-planla-mevsim-testi | 11 | %99 | %95 | %17–%25 | %12 | %14 | 0 | 0 | 0 |
| ✓ | kahve-siparisi-ruh-yasi-testi | 11 | %98 | %92 | %15–%23 | %8 | %18 | 0 | 0 | 0 |
| ✓ | situationship-testi | 15 | %98 | %79 | %8–%25 | %14 | %38 | 0 | 0 | 0 |
| ✓ | ne-kadar-delulusun-testi | 15 | %99 | %82 | %8–%25 | %11 | %43 | 0 | 0 | 0 |
| ✓ | hangi-tip-sevgilisin-testi | 15 | %100 | %99 | %23–%26 | %8 | %28 | 0 | 0 | 0 |
| ✓ | kavga-tarzi-testi | 12 | %100 | %97 | %18–%24 | %11 | %35 | 0 | 0 | 0 |
| ✓ | iliskiye-hazir-misin-testi | 12 | %100 | %99 | %18–%22 | %11 | %13 | 0 | 0 | 0 |
| ✓ | guven-sorunu-testi | 12 | %100 | %99 | %19–%21 | %11 | %19 | 0 | 0 | 0 |
| ✓ | magara-adami-testi | 14 | %97 | %75 | %5–%21 | %18 | %25 | 0 | 0 | 0 |

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

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S14 (8.6), S12 (9.6), S10 (10.9)

### red-flag-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S8 (11.5), S13 (12.0), S4 (14.1)

### baglanma-stili-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S1 (13.1), S14 (17.1), S5 (17.7)

### exini-unuttun-mu-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S6 (12.2), S15 (12.3), S11 (12.8)

### sevgi-dili-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S2 (17.0), S3 (17.7), S5 (18.4)

### flort-tarzi-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S13 (17.5), S1 (19.2), S10 (20.0)

### sosyal-pil-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S7 (15.4), S1 (16.9), S15 (17.4)

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

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S8 (22.4), S5 (24.4), S1 (25.2)

### tatil-cantasi-ask-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S11 (24.4), S8 (25.5), S1 (26.5)

### gun-planla-mevsim-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S9 (20.2), S8 (20.3), S6 (24.3)

### kahve-siparisi-ruh-yasi-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S8 (25.4), S2 (25.9), S5 (27.6)

### situationship-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S11 (17.9), S14 (18.2), S8 (18.5)

### ne-kadar-delulusun-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S5 (16.9), S1 (17.5), S15 (17.9)

### hangi-tip-sevgilisin-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S14 (24.7), S2 (25.3), S7 (26.1)

### kavga-tarzi-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S5 (20.6), S2 (20.8), S11 (21.2)

### iliskiye-hazir-misin-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S7 (22.7), S8 (22.9), S2 (23.6)

### guven-sorunu-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S4 (20.7), S10 (20.9), S1 (22.1)

### magara-adami-testi

- Uyarı yok
- Sonuca en az katkı veren sorular (bilgi, %): S2 (9.8), S7 (12.3), S5 (13.2)
