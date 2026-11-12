import type { Metadata } from "next";
import { HangimizIstemci } from "@/components/cift/istemci";
import { OyunSayfasi } from "@/components/cift/oyun-sayfasi";
import { getCiftOyunu } from "@/content/cift";
import { hangimizSorulari } from "@/content/cift/hangimiz";

const oyun = getCiftOyunu("hangimiz-daha-cok")!;

export const metadata: Metadata = {
  title: "Hangimiz Daha Çok? 80 Soruluk Çift Oyunu",
  description:
    "Hangimiz daha çok geç kalır, kim önce özür diler? 80 soruluk çift oyunu: üçten geriye sayın, birbirinizi gösterin, tur sonunda karnenizi görün.",
  alternates: { canonical: "/cift-oyunlari/hangimiz-daha-cok" },
};

export default function Page() {
  return (
    <OyunSayfasi
      oyun={oyun}
      giris="Kim daha çok alarmı erteler, kim dizide önden izler? Soruyu okuyun, aynı anda birbirinizi gösterin, sonra ekranda işaretleyin."
      nasil={[
        "İki ismi yazın. Her tur 12 soru.",
        "Soruyu sesli okuyun, üçten geriye sayın ve aynı anda cevabı parmağınızla gösterin.",
        "Anlaşamazsanız tartışmanın tadını çıkarın, sonra ekranda birini ya da “İkimiz de” seçeneğini işaretleyin.",
        "Tur sonunda kim kaç soruda “daha çok” çıktı, karnede görün.",
      ]}
      sss={[
        {
          q: "Uzaktan oynanır mı?",
          a: "Görüntülü konuşmada oynanır: biriniz soruları okur, ikiniz aynı anda ekrana gösterirsiniz.",
        },
        { q: "Sorular tekrar eder mi?", a: "Aynı oturumda 80 soru bitene kadar tekrar etmez." },
      ]}
    >
      <HangimizIstemci sorular={hangimizSorulari} />
    </OyunSayfasi>
  );
}
