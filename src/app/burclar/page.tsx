import type { Metadata } from "next";
import Link from "next/link";
import { BurcNotu, burcSecenekleri } from "@/components/burc/burc-parcalar";
import { BurcUyumAraci } from "@/components/burc/burc-uyum-araci";
import { BURCLAR_DESC, BURCLAR_TITLE } from "@/content/burc-uyum";
import { burclar } from "@/content/burclar";
import { breadcrumbJsonLd, toJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: { absolute: BURCLAR_TITLE },
  description: BURCLAR_DESC,
  alternates: { canonical: "/burclar" },
  openGraph: { title: "Burçlar ve burç uyumu", description: BURCLAR_DESC, url: "/burclar" },
};

export default function BurclarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbJsonLd([{ name: "Burçlar", path: "/burclar" }])) }}
      />
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
        <h1 className="max-w-3xl font-display text-5xl leading-[1] font-extrabold tracking-tight sm:text-6xl">
          Burçlar ve burç uyumu
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-plum-soft">
          İki burç seç, aşkta ve arkadaşlıkta nasıl anlaştığınızı gör. Ya da kendi burcunun özelliklerine ve bütün
          uyumlarına göz at.
        </p>
        <div className="mt-10">
          <BurcUyumAraci burclar={burcSecenekleri} />
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold">12 burç</h2>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {burclar.map((b, i) => (
            <li key={b.slug} style={{ rotate: `${i % 2 ? 0.6 : -0.6}deg` }}>
              <Link href={`/burclar/${b.slug}`} className="sticker sticker-press flex h-full flex-col bg-white p-4">
                <span
                  aria-hidden
                  className="grid size-12 place-items-center rounded-xl border-2 border-plum text-2xl"
                  style={{ background: b.renk }}
                >
                  {b.emoji}
                </span>
                <span className="mt-3 font-display text-xl font-bold">{b.ad}</span>
                <span className="text-sm text-plum-soft">{b.tarih}</span>
                <span className="mt-2 text-sm">{b.ozet}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <BurcNotu />
    </>
  );
}
