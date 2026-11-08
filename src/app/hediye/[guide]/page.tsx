import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { GiftCard } from "@/components/gift-card";
import { PageSkeleton } from "@/components/page-skeleton";
import { getGuide, guides, ideasForGuide } from "@/content/gifts/guides";
import { guideTitle, toJsonLd } from "@/lib/jsonld";
import { absoluteUrl } from "@/lib/site";

/** Tüm parametreler build sırasında bilinir: sayfa tamamen statik üretilir. */
export const ensureStatic = "navigation";

const TR_MONTHS = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

/** "2026-11-08" -> "8 Kasım 2026" (Date kullanmadan: statik üretimde saat dilimi sürprizi olmasın) */
function formatTrDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${TR_MONTHS[m - 1]} ${y}`;
}

export function generateStaticParams() {
  return guides.map((g) => ({ guide: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/hediye/[guide]">): Promise<Metadata> {
  const { guide: slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: { absolute: guideTitle(guide.metaTitle, guide.title) },
    description: guide.metaDescription,
    alternates: { canonical: `/hediye/${guide.slug}` },
    openGraph: { title: guide.metaTitle, description: guide.metaDescription, url: `/hediye/${guide.slug}` },
  };
}

export default function GuidePage({ params }: PageProps<"/hediye/[guide]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <GuidePageContent params={params} />
    </Suspense>
  );
}

async function GuidePageContent({ params }: { params: PageProps<"/hediye/[guide]">["params"] }) {
  const { guide: slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const list = ideasForGuide(guide);
  const related = guides.filter((g) => g.slug !== guide.slug).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: guide.title,
    url: absoluteUrl(`/hediye/${guide.slug}`),
    numberOfItems: list.length,
    ...(guide.updated ? { dateModified: guide.updated } : {}),
    itemListElement: list.map((idea, i) => ({ "@type": "ListItem", position: i + 1, name: idea.name })),
  };

  const faq = guide.faq ?? [];
  const faqLd =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqLd) }} />}
      <article className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-12">
        <nav aria-label="Konum" className="text-sm font-semibold text-plum-soft">
          <Link href="/hediye" className="hover:text-cherry">
            Hediyeler
          </Link>
          <span aria-hidden> / </span>
          <span>{guide.title}</span>
        </nav>
        <div className="mt-5 flex items-center gap-4">
          <span
            aria-hidden
            className="grid size-16 shrink-0 rotate-3 place-items-center rounded-2xl border-2 border-plum bg-butter text-4xl shadow-[3px_4px_0_0_var(--color-plum)]"
          >
            {guide.emoji}
          </span>
          <h1 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
            {guide.title}
          </h1>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-plum-soft">
          {guide.updated && (
            <p>
              Son güncelleme: <time dateTime={guide.updated}>{formatTrDate(guide.updated)}</time>
            </p>
          )}
          <p className="rounded-full border border-line bg-white px-3 py-1">
            Bu sayfadaki mağaza bağlantılarından alışveriş yaparsan komisyon alabiliriz. Fiyatlar mağazalara göre
            değişir.
          </p>
        </div>
        <div className="mt-6 max-w-prose space-y-4 text-[17px] leading-[1.7]">
          {guide.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <h2 className="mt-12 font-display text-2xl font-bold">{list.length} hediye fikri</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((idea) => (
            <GiftCard key={idea.id} idea={idea} />
          ))}
        </div>

        <div className="mt-12 max-w-prose rounded-2xl border-2 border-plum bg-blush p-6">
          <h2 className="font-display text-xl font-bold">Almadan önce</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[16px] leading-relaxed">
            {guide.tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            href="/hediye#bulucu"
            className="sticker sticker-press bg-cherry px-6 py-3.5 font-display text-lg font-bold text-white"
          >
            Hediye bulucuyu dene
          </Link>
          <p className="text-plum-soft">Bütçene ve ilgi alanlarına göre listeyi daralt.</p>
        </div>

        {faq.length > 0 && (
          <section className="mt-14 max-w-prose" aria-labelledby="sss">
            <h2 id="sss" className="font-display text-2xl font-bold">
              Sık sorulanlar
            </h2>
            <div className="mt-5 space-y-3">
              {faq.map((f) => (
                <details key={f.q} className="group rounded-2xl border-2 border-plum bg-white p-5 open:bg-paper">
                  <summary className="cursor-pointer list-none font-display text-lg leading-snug font-bold marker:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {f.q}
                      <span aria-hidden className="shrink-0 transition-transform group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-[16px] leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}
      </article>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-bold">Diğer rehberler</h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {related.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/hediye/${g.slug}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-plum bg-white px-4 py-2 font-semibold hover:bg-blush"
              >
                <span aria-hidden>{g.emoji}</span>
                {g.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
