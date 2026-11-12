import type { Metadata } from "next";
import { SohbetDestesiIstemci } from "@/components/cift/istemci";
import { OyunSayfasi } from "@/components/cift/oyun-sayfasi";
import { getCiftOyunu } from "@/content/cift";
import { sohbetKartlari } from "@/content/cift/sohbet";

const oyun = getCiftOyunu("sohbet-kartlari")!;

export const metadata: Metadata = {
  title: "Sevgiliye Sorulacak 150 Soru",
  description:
    "Randevu akşamı için sevgiliye sorulacak 150 soru: eğlenceli, derin, anılar, gelecek ve hayaller. Kategorini seç, kart kart ilerleyin.",
  alternates: { canonical: "/cift-oyunlari/sohbet-kartlari" },
};

export default function Page() {
  return (
    <OyunSayfasi
      oyun={oyun}
      giris="Sohbet tıkandığında ya da birbirinizi biraz daha tanımak istediğinizde: kategoriyi seçin, kartı sesli okuyun, sırayla cevaplayın."
      nasil={[
        "Hangi tür soruların gelmesini istediğinizi seçin; hepsi açık başlarsanız deste karışık gelir.",
        "Kartı biriniz sesli okusun, önce okuyan cevaplasın, sonra diğeri.",
        "Cevap kısa kalırsa “Neden?” ya da “Biraz daha anlat” deyin; en güzel kısım genelde ikinci cümlede gelir.",
        "Cevap vermek istemediğiniz kartı geçin. Amaç sorgu değil sohbet.",
      ]}
      sss={[
        {
          q: "Sevgiliye hangi sorular sorulur?",
          a: "Hem eğlenceli hem derin sorular iyi gider. Anılar ve gelecek kategorileri ilişkinin hikâyesini konuşturur, hayaller kategorisi ise ikinizin de bilmediği planları ortaya çıkarır.",
        },
        {
          q: "Kaç soru var, tekrar eder mi?",
          a: "150 soru var. Bir destede aynı kart tekrar gelmez; deste bitince yeniden karıştırabilirsiniz.",
        },
        {
          q: "Uzak mesafe ilişkide oynanır mı?",
          a: "Evet. Görüntülü konuşmada biriniz kartı açıp okuyabilir, ekran paylaşımına gerek yok.",
        },
      ]}
    >
      <SohbetDestesiIstemci kartlar={sohbetKartlari} />
    </OyunSayfasi>
  );
}
