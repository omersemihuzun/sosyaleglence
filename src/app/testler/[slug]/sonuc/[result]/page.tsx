import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { TestStats } from "@/components/live-stats";
import { PageSkeleton } from "@/components/page-skeleton";
import { ResultPersonal } from "@/components/result-personal";
import { TestCard } from "@/components/test-card";
import { getTest, tests } from "@/content/tests";
import { absoluteUrl } from "@/lib/site";

/** Tüm parametreler build sırasında bilinir: sayfa tamamen statik üretilir. */
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return tests.flatMap((t) => t.results.map((r) => ({ slug: t.slug, result: r.id })));
}

export async function generateMetadata({ params }: PageProps<"/testler/[slug]/sonuc/[result]">): Promise<Metadata> {
  const { slug, result: id } = await params;
  const test = getTest(slug);
  const result = test?.results.find((r) => r.id === id);
  if (!test || !result) return {};
  const title = `${result.emoji} ${result.name} | ${test.title}`;
  return {
    title,
    description: `${result.tagline} ${test.title} testini çöz, sen hangisisin öğren.`,
    alternates: { canonical: `/testler/${test.slug}/sonuc/${result.id}` },
    openGraph: { title, description: result.tagline },
  };
}

export default function ResultPage({ params }: PageProps<"/testler/[slug]/sonuc/[result]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <ResultPageContent params={params} />
    </Suspense>
  );
}

async function ResultPageContent({ params }: { params: PageProps<"/testler/[slug]/sonuc/[result]">["params"] }) {
  const { slug, result: id } = await params;
  const test = getTest(slug);
  const result = test?.results.find((r) => r.id === id);
  if (!test || !result) notFound();

  const match = test.results.find((r) => r.id === result.bestMatch);
  const others = tests.filter((t) => t.slug !== test.slug).slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 sm:pt-12">
        <Link href={`/testler/${test.slug}`} className="text-sm font-semibold text-plum-soft hover:text-cherry">
          ← {test.title}
        </Link>

        <div className="mt-5 grid items-start gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <div
              className="sticker animate-pop -rotate-1 p-7 text-paper sm:p-10"
              style={{ background: result.color, boxShadow: "6px 8px 0 0 var(--color-plum)" }}
            >
              <p className="text-paper/85">{test.title} sonucu</p>
              <p aria-hidden className="mt-4 text-7xl leading-none sm:text-8xl">
                {result.emoji}
              </p>
              <h1 className="mt-4 font-display text-5xl leading-[0.95] font-extrabold tracking-tight sm:text-6xl">
                {result.name}
              </h1>
              <p className="mt-4 max-w-md text-xl leading-snug text-paper/90">{result.tagline}</p>
            </div>

            <div className="mt-10 max-w-prose space-y-4 text-[17px] leading-[1.7]">
              {result.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border-2 border-plum bg-[#E4F6EC] p-5">
                <h2 className="font-display text-lg font-bold">Güçlü yanların</h2>
                <ul className="mt-3 space-y-2 text-[15px] leading-snug">
                  {result.strengths.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span aria-hidden>✓</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-plum bg-blush p-5">
                <h2 className="font-display text-lg font-bold">Dikkat etmen gerekenler</h2>
                <ul className="mt-3 space-y-2 text-[15px] leading-snug">
                  {result.watchOut.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span aria-hidden>!</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-6">
            <Suspense fallback={<div className="sticker h-80 bg-white" />}>
              <ResultPersonal
                test={test}
                result={result}
                shareUrl={absoluteUrl(`/testler/${test.slug}/sonuc/${result.id}`)}
              />
            </Suspense>

            {match && (
              <Link
                href={`/testler/${test.slug}/sonuc/${match.id}`}
                className="sticker sticker-press flex items-center gap-4 bg-white p-5"
              >
                <span aria-hidden className="text-4xl">
                  {match.emoji}
                </span>
                <span>
                  <span className="block text-sm text-plum-soft">En iyi anlaştığın tip</span>
                  <span className="font-display text-xl font-bold">{match.name}</span>
                </span>
              </Link>
            )}
          </aside>
        </div>
      </section>

      <div className="mx-auto mt-12 max-w-5xl px-4 sm:px-6">
        <TestStats
          slug={test.slug}
          current={result.id}
          results={test.results.map((r) => ({ id: r.id, name: r.name, emoji: r.emoji }))}
        />
      </div>

      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-bold">Bu testin tüm sonuçları</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {test.results.map((r) => (
            <li key={r.id}>
              <Link
                href={`/testler/${test.slug}/sonuc/${r.id}`}
                aria-current={r.id === result.id ? "page" : undefined}
                className={`inline-flex items-center gap-2 rounded-full border-2 border-plum px-4 py-2 font-semibold ${
                  r.id === result.id ? "bg-plum text-paper" : "bg-white hover:bg-blush"
                }`}
              >
                <span aria-hidden>{r.emoji}</span>
                {r.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {others.length > 0 && (
        <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold">Sıradaki testin</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((t) => (
              <TestCard key={t.slug} test={t} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
