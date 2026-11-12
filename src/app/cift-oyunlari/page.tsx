import type { Metadata } from "next";
import { OyunKarti } from "@/components/cift/oyun-sayfasi";
import { ciftOyunlari } from "@/content/cift";
import { breadcrumbJsonLd, toJsonLd } from "@/lib/jsonld";

const DESC =
  "Sevgilinle oynayabileceğin ücretsiz oyunlar: Beni Ne Kadar Tanıyorsun, sohbet kartları, çiftler için doğruluk mu cesaret mi, hangimiz daha çok ve randevu çarkı.";

export const metadata: Metadata = {
  title: "Çift Oyunları: Sevgilinle Oynanacak Oyunlar",
  description: DESC,
  alternates: { canonical: "/cift-oyunlari" },
  openGraph: { title: "Çift oyunları", description: DESC, url: "/cift-oyunlari" },
};

export default function CiftOyunlariPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(breadcrumbJsonLd([{ name: "Çift oyunları", path: "/cift-oyunlari" }])),
        }}
      />
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
        <h1 className="max-w-3xl font-display text-5xl leading-[1] font-extrabold tracking-tight sm:text-6xl">
          Çift oyunları
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-plum-soft">
          Telefonu ortaya koyun, birlikte oynayın. Kimi uzaktan linkle, kimi yan yana tek ekranda. Hepsi ücretsiz,
          üyelik yok.
        </p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ciftOyunlari.map((o, i) => (
            <li key={o.slug}>
              <OyunKarti oyun={o} tilt={i % 2 ? 0.6 : -0.6} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
