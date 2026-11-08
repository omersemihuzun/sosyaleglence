import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { Suspense } from "react";
import { BurcNotu, burcSecenekleri, IlgiliTestler, yaziRengi } from "@/components/burc-parcalar";
import { BurcUyumAraci } from "@/components/burc-uyum-araci";
import { PageSkeleton } from "@/components/page-skeleton";
import { ciftDescription, ciftTitle, parseCiftSlug, uyumEtiketi, uyumlar } from "@/content/burc-uyum";
import { getBurc } from "@/content/burclar";
import { breadcrumbJsonLd, toJsonLd } from "@/lib/jsonld";

/** Tüm parametreler build sırasında bilinir: sayfa tamamen statik üretilir. */
export const ensureStatic = "navigation";

/** Sadece kanonik sıradaki 78 çift üretilir (koc-ve-aslan). Ters sıra (aslan-ve-koc) istekte yönlendirilir. */
export function generateStaticParams() {
  return uyumlar.map((u) => ({ cift: u.slug }));
}

export async function generateMetadata({ params }: PageProps<"/burc-uyumu/[cift]">): Promise<Metadata> {
  const { cift } = await params;
  const parsed = parseCiftSlug(cift);
  if (!parsed) return {};
  const { uyum } = parsed;
  const A = getBurc(uyum.a)!;
  const B = getBurc(uyum.b)!;
  return {
    title: { absolute: ciftTitle(A, B) },
    description: ciftDescription(A, B, uyum),
    alternates: { canonical: `/burc-uyumu/${uyum.slug}` },
    openGraph: {
      title: `${A.emoji} ${A.ad} ve ${B.emoji} ${B.ad} uyumu: %${uyum.puan}`,
      description: uyum.baslik,
      url: `/burc-uyumu/${uyum.slug}`,
    },
  };
}

export default function CiftPage({ params }: PageProps<"/burc-uyumu/[cift]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <CiftContent params={params} />
    </Suspense>
  );
}

async function CiftContent({ params }: { params: PageProps<"/burc-uyumu/[cift]">["params"] }) {
  const { cift } = await params;
  const parsed = parseCiftSlug(cift);
  if (!parsed) notFound();
  if (!parsed.kanonik) permanentRedirect(`/burc-uyumu/${parsed.uyum.slug}`);

  const u = parsed.uyum;
  const A = getBurc(u.a)!;
  const B = getBurc(u.b)!;
  const ayni = A.slug === B.slug;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbJsonLd([
              { name: "Burçlar", path: "/burclar" },
              { name: `${A.ad} burcu`, path: `/burclar/${A.slug}` },
              { name: `${A.ad} ve ${B.ad} uyumu`, path: `/burc-uyumu/${u.slug}` },
            ]),
          ),
        }}
      />
      <section className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 sm:pt-12">
        <nav aria-label="Konum" className="flex flex-wrap gap-x-1 text-sm font-semibold text-plum-soft">
          <Link href="/burclar" className="hover:text-cherry">
            Burçlar
          </Link>
          <span aria-hidden>/</span>
          <Link href={`/burclar/${A.slug}`} className="hover:text-cherry">
            {A.ad}
          </Link>
          <span aria-hidden>/</span>
          <span>{ayni ? `${A.ad} ve ${A.ad}` : `${A.ad} ve ${B.ad}`}</span>
        </nav>

        <div className="mt-5 grid items-start gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <div
              className="sticker -rotate-1 bg-white p-6 sm:p-8"
              style={{ boxShadow: "6px 8px 0 0 var(--color-plum)" }}
            >
              <div className="flex items-center justify-center gap-3 sm:gap-5">
                {[A, B].map((x, i) => (
                  <Link
                    key={`${x.slug}-${i}`}
                    href={`/burclar/${x.slug}`}
                    className="flex flex-col items-center gap-1 rounded-2xl border-2 border-plum px-4 py-3"
                    style={{ background: x.renk, color: yaziRengi(x.renk) }}
                  >
                    <span aria-hidden className="text-4xl leading-none">
                      {x.emoji}
                    </span>
                    <span className="font-display font-bold">{x.ad}</span>
                  </Link>
                ))}
              </div>
              <h1 className="mt-6 text-center font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl">
                {A.ad} ve {B.ad} uyumu
              </h1>
              <p className="mt-4 text-center">
                <span className="font-display text-7xl font-extrabold text-cherry tabular-nums">%{u.puan}</span>
              </p>
              <p className="text-center font-display text-lg font-bold">{uyumEtiketi(u.puan)}</p>
              <div
                className="mx-auto mt-4 h-4 max-w-sm overflow-hidden rounded-full border-2 border-plum bg-paper"
                aria-hidden
              >
                <div className="animate-bar h-full bg-cherry" style={{ width: `${u.puan}%` }} />
              </div>
              <p className="mt-5 text-center text-xl font-semibold text-balance">{u.baslik}</p>
              <p className="mt-1 text-center text-sm text-plum-soft">Astrolojik açı: {u.aciAdi}</p>
            </div>

            <div className="mt-10 max-w-prose space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold">
                  Aşkta {A.ad} ve {B.ad}
                </h2>
                <p className="mt-3 text-[17px] leading-[1.7]">{u.ask}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold">
                  Arkadaşlıkta {A.ad} ve {B.ad}
                </h2>
                <p className="mt-3 text-[17px] leading-[1.7]">{u.arkadaslik}</p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border-2 border-plum bg-[#E4F6EC] p-5">
                <h2 className="font-display text-lg font-bold">Güçlü yanlar</h2>
                <ul className="mt-3 space-y-2 text-[15px]">
                  {u.guclu.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span aria-hidden>✓</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-plum bg-blush p-5">
                <h2 className="font-display text-lg font-bold">Zorluklar</h2>
                <ul className="mt-3 space-y-2 text-[15px]">
                  {u.zorluk.map((s) => (
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
              <p className="font-display text-lg font-bold">Diğer uyumlar</p>
              <ul className="mt-3 space-y-2">
                {(ayni ? [A] : [A, B]).map((x) => (
                  <li key={x.slug}>
                    <Link href={`/burclar/${x.slug}`} className="font-semibold text-cherry hover:underline">
                      {x.ad} burcunun bütün uyumları
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <IlgiliTestler />
            <Link
              href="/testler/kiskanclik-testi"
              className="sticker sticker-press block bg-butter p-5 font-display font-bold"
            >
              Burçlar bir yana: sevgilinle bir testi çöz, gerçek uyum yüzdenizi görün
            </Link>
          </aside>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-bold">Başka bir çifte bak</h2>
        <div className="mt-6">
          <BurcUyumAraci burclar={burcSecenekleri} />
        </div>
      </section>
      <BurcNotu />
    </>
  );
}
