import Link from "next/link";
import type { ReactNode } from "react";
import { ciftOyunlari, type CiftOyunu } from "@/content/cift";
import { breadcrumbJsonLd, toJsonLd } from "@/lib/jsonld";

type Sss = { q: string; a: string };

/** Her çift oyunu sayfasının ortak iskeleti: konum, başlık, oyun, nasıl oynanır, SSS, diğer oyunlar. */
export function OyunSayfasi({
  oyun,
  giris,
  nasil,
  sss,
  children,
}: {
  oyun: CiftOyunu;
  giris: string;
  nasil: string[];
  sss: Sss[];
  children: ReactNode;
}) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: sss.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    breadcrumbJsonLd([
      { name: "Çift oyunları", path: "/cift-oyunlari" },
      { name: oyun.baslik, path: `/cift-oyunlari/${oyun.slug}` },
    ]),
  ];
  const digerleri = ciftOyunlari.filter((o) => o.slug !== oyun.slug);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }} />
      <section className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 sm:pt-12">
        <nav aria-label="Konum" className="text-sm font-semibold text-plum-soft">
          <Link href="/cift-oyunlari" className="hover:text-cherry">
            ← Tüm çift oyunları
          </Link>
        </nav>
        <div className="mt-4 flex items-start gap-4">
          <span
            aria-hidden
            className="grid size-16 shrink-0 place-items-center rounded-2xl border-2 border-plum text-4xl shadow-[3px_4px_0_0_var(--color-plum)]"
            style={{ background: oyun.renk }}
          >
            {oyun.emoji}
          </span>
          <h1 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl">
            {oyun.baslik}
          </h1>
        </div>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-plum-soft">{giris}</p>
        <div className="mt-8">{children}</div>
      </section>

      <section className="mx-auto mt-16 max-w-4xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold">Nasıl oynanır?</h2>
        <ol className="mt-4 max-w-prose list-decimal space-y-2 pl-5 text-[17px] leading-relaxed">
          {nasil.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-14 max-w-4xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold">Sık sorulanlar</h2>
        <div className="mt-5 space-y-3">
          {sss.map((f) => (
            <details key={f.q} className="rounded-2xl border-2 border-plum bg-white p-4 open:bg-blush/40">
              <summary className="cursor-pointer font-display text-lg font-bold">{f.q}</summary>
              <p className="mt-2 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold">Diğer çift oyunları</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {digerleri.map((o) => (
            <li key={o.slug}>
              <OyunKarti oyun={o} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export function OyunKarti({ oyun, tilt = 0 }: { oyun: CiftOyunu; tilt?: number }) {
  return (
    <Link
      href={`/cift-oyunlari/${oyun.slug}`}
      className="sticker sticker-press group flex h-full flex-col bg-white p-5"
      style={{ rotate: `${tilt}deg` }}
    >
      <span
        aria-hidden
        className="grid size-14 place-items-center rounded-xl border-2 border-plum text-3xl"
        style={{ background: oyun.renk }}
      >
        {oyun.emoji}
      </span>
      <span className="mt-3 font-display text-xl leading-tight font-bold">{oyun.baslik}</span>
      <span className="mt-2 flex-1 text-[15px] leading-relaxed text-plum-soft">{oyun.ozet}</span>
      <span className="mt-3 inline-block self-start rounded-full bg-blush px-3 py-1 text-xs font-bold">
        {oyun.etiket}
      </span>
    </Link>
  );
}
