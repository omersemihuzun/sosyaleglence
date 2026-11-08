import type { Metadata } from "next";
import { DogrulukCesaretIstemci } from "@/components/cift/istemci";
import { OyunSayfasi } from "@/components/cift/oyun-sayfasi";
import { getCiftOyunu } from "@/content/cift";
import { dcKartlari } from "@/content/cift/dogruluk-cesaret";

const oyun = getCiftOyunu("dogruluk-mu-cesaret-mi")!;

export const metadata: Metadata = {
  title: "Sevgiliyle Doğruluk mu Cesaret mi? 120 Kart",
  description:
    "Çiftler için doğruluk mu cesaret mi: tatlı, eğlenceli ve cesur üç seviye, 120 soru ve görev. İsimlerinizi yazın, sırayla oynayın, puanı biz tutalım.",
  alternates: { canonical: "/cift-oyunlari/dogruluk-mu-cesaret-mi" },
};

export default function Page() {
  return (
    <OyunSayfasi
      oyun={oyun}
      giris="Klasik oyunun ikiniz için hazırlanmış hali. Sorular ve görevler evde, iki kişiyle, kimseyi rahatsız etmeden yapılabilir; istemediğiniz kartı pas geçin."
      nasil={[
        "İki ismi yazın ve seviyeyi seçin. Oyun içinde seviyeyi istediğiniz an değiştirebilirsiniz.",
        "Sırası gelen “Doğruluk” ya da “Cesaret” seçer, kart açılır.",
        "Cevaplarsa ya da görevi yaparsa +1 puan; pas geçerse puan yok, kimse sorgulamaz.",
        "Sıra otomatik olarak diğerine geçer. Aynı oyunda kartlar tekrar etmez.",
      ]}
      sss={[
        {
          q: "Sorular uygunsuz mu?",
          a: "Hayır. Bütün kartlar saygılı ve aile ortamında okunabilir. Cesur seviyesi biraz utandırır ama yine güvenli ve zararsızdır.",
        },
        { q: "Kaç kart var?", a: "Her seviyede 20 doğruluk ve 20 cesaret, toplam 120 kart." },
        { q: "Pas geçmek oyunu bozar mı?", a: "Bozmaz, oyunun parçası. Sadece o tur puan almazsınız." },
      ]}
    >
      <DogrulukCesaretIstemci kartlar={dcKartlari} />
    </OyunSayfasi>
  );
}
