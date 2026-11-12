import type { Metadata } from "next";
import Link from "next/link";
import { IsimUyumuAraci } from "@/components/isim-uyumu/isim-uyumu-araci";
import { breadcrumbJsonLd, toJsonLd } from "@/lib/jsonld";
import { absoluteUrl } from "@/lib/site";

const TITLE = "İsimle Aşk Testi: İsim Uyumu Hesapla";
const DESC =
  "İki ismi yaz, aşk uyumunuzu yüzde olarak gör: tutku, iletişim, güven ve eğlence puanlarıyla. Ücretsiz, kayıtsız; isimler hiçbir yere gönderilmez.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/ask-testi" },
  openGraph: { title: "İsimle aşk testi", description: DESC, url: "/ask-testi" },
};

const SSS = [
  {
    q: "İsimle aşk testi nasıl hesaplanıyor?",
    a: "İki ismi Türkçe harf kurallarına göre sadeleştirip (büyük/küçük harf ve boşluk farkı önemsiz) sabit bir formülden geçiriyoruz. Aynı iki isim her seferinde aynı puanı alır ve isimlerin sırası sonucu değiştirmez.",
  },
  {
    q: "Sonuç gerçek uyumu gösterir mi?",
    a: "Hayır. İsim uyumu bir eğlence hesabıdır; ilişkinin gerçek kalitesini isimler değil, iletişim, saygı ve ortak emek belirler. Daha anlamlı bir fikir için sevgi dili ya da bağlanma stili testlerini birlikte çözebilirsiniz.",
  },
  {
    q: "Yazdığım isimler kaydediliyor mu?",
    a: "Hayır. Hesap tamamen tarayıcınızda yapılır; isimler sunucumuza ya da başka bir yere gönderilmez ve saklanmaz.",
  },
  {
    q: "Neden her denediğimde aynı puan çıkıyor?",
    a: "Çünkü sonuç rastgele değil. Rastgele olsaydı istediğiniz puan çıkana kadar yenilemek anlamsız bir oyun olurdu; sabit sonuç, arkadaşlarınızla karşılaştırmayı adil kılar.",
  },
  {
    q: "Soyadı ya da lakap yazabilir miyim?",
    a: "Yazabilirsiniz, ama her yazım farklı bir sonuç verir. En çok kullanılan yöntem, iki kişinin günlük hayatta birbirine seslendiği ismi yazmaktır.",
  },
];

export default function AskTestiPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "İsimle aşk testi",
      url: absoluteUrl("/ask-testi"),
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Tümü",
      inLanguage: "tr-TR",
      offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
      description: DESC,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: SSS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    breadcrumbJsonLd([{ name: "İsimle aşk testi", path: "/ask-testi" }]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }} />
      <section className="mx-auto max-w-3xl px-4 pt-10 sm:px-6 sm:pt-14">
        <h1 className="font-display text-5xl leading-[1] font-extrabold tracking-tight sm:text-6xl">
          İsimle aşk testi
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-plum-soft">
          Senin adını ve onun adını yaz, isimlerinizin ne kadar uyumlu olduğunu görelim. Tutku, iletişim, güven ve
          eğlence: dört başlıkta puanınız hazır.
        </p>
        <div className="mt-10">
          <IsimUyumuAraci siteUrl={absoluteUrl("/ask-testi")} />
        </div>
        <p className="mt-4 text-sm text-plum-soft">
          İsimler sadece senin tarayıcında hesaplanır, hiçbir yere gönderilmez. Sonuç eğlence amaçlıdır.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold">Gerçek uyumu merak ediyorsan</h2>
        <p className="mt-3 max-w-prose leading-relaxed text-plum-soft">
          İsimler eğlencelidir ama ilişkiyi asıl anlatan, nasıl sevdiğiniz ve nasıl bağlandığınızdır. Bu testleri ikiniz
          ayrı ayrı çözün, sonra karşılaştırma bağlantısıyla uyumunuzu görün.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              href: "/testler/sevgi-dili-testi",
              e: "💌",
              t: "Sevgi Dilin Ne?",
              s: "Sevgini nasıl gösteriyor, nasıl bekliyorsun?",
            },
            {
              href: "/testler/baglanma-stili-testi",
              e: "🧷",
              t: "Bağlanma Stilin Ne?",
              s: "Yakınlık ve mesafeyle ilişkin",
            },
            {
              href: "/testler/hangi-tip-sevgilisin-testi",
              e: "💞",
              t: "Hangi Tip Sevgilisin?",
              s: "İlişkide nasıl birisin?",
            },
            { href: "/burclar", e: "♈", t: "Burç uyumu", s: "İki burç seç, aşk uyumunuzu oku" },
          ].map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="sticker sticker-press flex h-full items-start gap-3 bg-white p-4">
                <span aria-hidden className="text-3xl leading-none">
                  {l.e}
                </span>
                <span>
                  <span className="block font-display text-lg font-bold">{l.t}</span>
                  <span className="text-sm text-plum-soft">{l.s}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold">Sık sorulanlar</h2>
        <div className="mt-6 space-y-3">
          {SSS.map((f) => (
            <details key={f.q} className="rounded-2xl border-2 border-plum bg-white p-4 open:bg-blush/40">
              <summary className="cursor-pointer font-display text-lg font-bold">{f.q}</summary>
              <p className="mt-2 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
