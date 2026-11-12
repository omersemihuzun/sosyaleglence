import type { Metadata } from "next";
import { TaniyorKurIstemci } from "@/components/cift/istemci";
import { OyunSayfasi } from "@/components/cift/oyun-sayfasi";
import { getCiftOyunu } from "@/content/cift";
import { taniyorSorulari } from "@/content/cift/taniyor";

const oyun = getCiftOyunu("beni-ne-kadar-taniyorsun")!;

export const metadata: Metadata = {
  title: "Beni Ne Kadar Tanıyorsun? Sevgili Testi",
  description:
    "Kendinle ilgili 10 soruyu cevapla, linki sevgiline gönder. O tahmin etsin, seni ne kadar tanıdığını puanıyla görün. Ücretsiz, üyeliksiz.",
  alternates: { canonical: "/cift-oyunlari/beni-ne-kadar-taniyorsun" },
};

export default function Page() {
  return (
    <OyunSayfasi
      oyun={oyun}
      giris="En sevdiğin kahvaltılık, tartışmadan sonra ne yaptığın, stresliyken neye sığındığın… Sevgilin bunları biliyor mu? Önce sen cevapla, sonra o tahmin etsin."
      nasil={[
        "Adını yaz ve kendinle ilgili 10 soruyu cevapla.",
        "Çıkan linki WhatsApp'tan sevgiline gönder.",
        "O, her soruda senin için doğru olanı tahmin eder. Puanı ve doğru cevapları ancak tahminlerini bitirince görür.",
        "Sen de aynı linki açarak kimin kaç bildiğini görürsün. Sonra rolleri değişin.",
      ]}
      sss={[
        {
          q: "Sevgilim cevaplarımı önceden görebilir mi?",
          a: "Hayır. Cevapların sunucumuzda kalır ve tahmin eden kişiye ancak tahminlerini gönderdikten sonra açılır.",
        },
        {
          q: "Linki birden fazla kişiye gönderebilir miyim?",
          a: "Evet. Arkadaşların da çözebilir; son 20 denemenin puanını görürsün.",
        },
        {
          q: "Veriler ne kadar saklanıyor?",
          a: "Oyun ve sonuçlar 30 gün sonra kendiliğinden silinir. Sadece yazdığınız adlar ve şık seçimleri saklanır.",
        },
      ]}
    >
      <TaniyorKurIstemci sorular={taniyorSorulari} />
    </OyunSayfasi>
  );
}
