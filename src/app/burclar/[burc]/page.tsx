import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BurcNotu, burcSecenekleri, IlgiliTestler, UyumBar, yaziRengi } from "@/components/burc/burc-parcalar";
import { BurcUyumAraci } from "@/components/burc/burc-uyum-araci";
import { PageSkeleton } from "@/components/layout/page-skeleton";
import { burcDescription, burcTitle, uyumEtiketi, uyumlar } from "@/content/burc-uyum";
import { burclar, getBurc } from "@/content/burclar";
import { breadcrumbJsonLd, toJsonLd } from "@/lib/jsonld";

/** Tüm parametreler build sırasında bilinir: sayfa tamamen statik üretilir. */
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return burclar.map((b) => ({ burc: b.slug }));
}

export async function generateMetadata({ params }: PageProps<"/burclar/[burc]">): Promise<Metadata> {
  const { burc } = await params;
  const b = getBurc(burc);
  if (!b) return {};
  return {
    title: { absolute: burcTitle(b) },
    description: burcDescription(b),
    alternates: { canonical: `/burclar/${b.slug}` },
    openGraph: { title: `${b.emoji} ${b.ad} burcu`, description: burcDescription(b), url: `/burclar/${b.slug}` },
  };
}

export default function BurcPage({ params }: PageProps<"/burclar/[burc]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <BurcContent params={params} />
    </Suspense>
  );
}

async function BurcContent({ params }: { params: PageProps<"/burclar/[burc]">["params"] }) {
  const { burc } = await params;
  const b = getBurc(burc);
  if (!b) notFound();

  const liste = uyumlar
    .filter((u) => u.a === b.slug || u.b === b.slug)
    .map((u) => ({ u, diger: getBurc(u.a === b.slug ? u.b : u.a)! }))
    .sort((x, y) => y.u.puan - x.u.puan);

  const bilgiler = [
    ["Tarih", b.tarih],
    ["Element", b.element],
    ["Nitelik", b.nitelik],
    ["Yönetici gezegen", b.gezegen],
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbJsonLd([
              { name: "Burçlar", path: "/burclar" },
              { name: `${b.ad} burcu`, path: `/burclar/${b.slug}` },
            ]),
          ),
        }}
      />
      <section className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 sm:pt-12">
        <nav aria-label="Konum" className="text-sm font-semibold text-plum-soft">
          <Link href="/burclar" className="hover:text-cherry">
            ← Tüm burçlar
          </Link>
        </nav>

        <div className="mt-5 grid items-start gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <div
              className="sticker -rotate-1 p-7 sm:p-10"
              style={{ background: b.renk, color: yaziRengi(b.renk), boxShadow: "6px 8px 0 0 var(--color-plum)" }}
            >
              <p aria-hidden className="text-7xl leading-none">
                {b.emoji}
              </p>
              <h1 className="mt-4 font-display text-5xl leading-[0.95] font-extrabold tracking-tight sm:text-6xl">
                {b.ad} burcu
              </h1>
              <p className="mt-3 text-xl leading-snug">{b.ozet}</p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {bilgiler.map(([k, v]) => (
                <div key={k} className="rounded-xl border-2 border-plum bg-white px-3 py-2.5">
                  <dt className="text-xs font-semibold text-plum-soft">{k}</dt>
                  <dd className="font-display font-bold">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 max-w-prose space-y-4 text-[17px] leading-[1.7]">
              {b.genel.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <h2 className="mt-10 font-display text-2xl font-bold">{b.ad} ilişkide nasıldır?</h2>
            <p className="mt-3 max-w-prose text-[17px] leading-[1.7]">{b.iliski}</p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border-2 border-plum bg-[#E4F6EC] p-5">
                <h2 className="font-display text-lg font-bold">Güçlü yanları</h2>
                <ul className="mt-3 space-y-2 text-[15px]">
                  {b.guclu.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span aria-hidden>✓</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-plum bg-blush p-5">
                <h2 className="font-display text-lg font-bold">Zorlandığı yanlar</h2>
                <ul className="mt-3 space-y-2 text-[15px]">
                  {b.zayif.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span aria-hidden>!</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-6">
            <div className="sticker bg-white p-6">
              <h2 className="font-display text-xl font-bold">{b.ad} hangi burçlarla uyumlu?</h2>
              <ol className="mt-4 space-y-3">
                {liste.map(({ u, diger }) => (
                  <li key={u.slug}>
                    <Link href={`/burc-uyumu/${u.slug}`} className="group block">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-semibold group-hover:text-cherry">
                          <span aria-hidden>{diger.emoji} </span>
                          {diger.ad}
                        </span>
                        <span className="text-sm text-plum-soft">
                          <span className="font-display font-bold text-plum tabular-nums">%{u.puan}</span>{" "}
                          {uyumEtiketi(u.puan).toLocaleLowerCase("tr")}
                        </span>
                      </div>
                      <div className="mt-1">
                        <UyumBar puan={u.puan} renk={diger.renk} />
                      </div>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
            <IlgiliTestler />
          </aside>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-bold">Başka bir burçla uyumuna bak</h2>
        <div className="mt-6">
          <BurcUyumAraci burclar={burcSecenekleri} baslangic={b.slug} />
        </div>
      </section>
      <BurcNotu />
    </>
  );
}
