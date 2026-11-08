import type { Metadata } from "next";
import { RandevuCarkiIstemci } from "@/components/cift/istemci";
import { OyunSayfasi } from "@/components/cift/oyun-sayfasi";
import { getCiftOyunu } from "@/content/cift";
import { randevuFikirleri } from "@/content/cift/randevu";

const oyun = getCiftOyunu("randevu-carki")!;

export const metadata: Metadata = {
  title: "Randevu Çarkı: Sevgiliyle Ne Yapılır?",
  description:
    "Sevgiliyle ne yapsak diye düşünmeyin: evde ya da dışarıda, ücretsizden özel güne 84 randevu fikri. Filtreleyin, çarkı çevirin, planınız hazır.",
  alternates: { canonical: "/cift-oyunlari/randevu-carki" },
};

export default function Page() {
  return (
    <OyunSayfasi
      oyun={oyun}
      giris="“Ne yapalım?” “Bilmem, sen söyle.” Bu konuşmayı bitirelim: nerede ve hangi bütçeyle olacağını seçin, çark karar versin."
      nasil={[
        "Evde mi dışarıda mı, bütçe ne kadar: seçin. Seçimlerinize uyan 8 fikir çarka yerleşir.",
        "Çarkı çevirin; durduğu fikir bu akşamın planı.",
        "Beğenmediyseniz bir hak daha: tekrar çevirin. Üçüncüsünde itiraz yok.",
      ]}
      sss={[
        {
          q: "Sevgiliyle evde ne yapılır?",
          a: "Ev oyunları turnuvası, birlikte yemek yapmak, eski fotoğraflardan albüm hazırlamak ya da sohbet kartlarıyla bir akşam: çarkta “Evde” seçerek hepsini görebilirsiniz.",
        },
        {
          q: "Ücretsiz randevu fikri var mı?",
          a: "Evet, fikirlerin üçte biri ücretsiz: yürüyüşler, semt keşifleri, gün batımı izlemek gibi.",
        },
      ]}
    >
      <RandevuCarkiIstemci fikirler={randevuFikirleri} />
    </OyunSayfasi>
  );
}
