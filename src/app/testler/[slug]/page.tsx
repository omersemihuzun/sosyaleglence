import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArticleCta } from "@/components/article-card";
import { PageSkeleton } from "@/components/page-skeleton";
import { getArticle, readingMinutes } from "@/content/articles";
import { articleByTest } from "@/content/articles/by-test";
import { Quiz } from "@/components/quiz";
import { TestCard } from "@/components/test-card";
import { getTest, tests } from "@/content/tests";
import { breadcrumbJsonLd, pageTitle, toJsonLd } from "@/lib/jsonld";
import { absoluteUrl } from "@/lib/site";

/** Tüm parametreler build sırasında bilinir: sayfa tamamen statik üretilir. */
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return tests.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/testler/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const test = getTest(slug);
  if (!test) return {};
  return {
    title: { absolute: pageTitle(test.title) },
    description: test.metaDescription,
    alternates: { canonical: `/testler/${test.slug}` },
    openGraph: { title: test.title, description: test.summary, url: `/testler/${test.slug}` },
  };
}

export default function TestPage({ params }: PageProps<"/testler/[slug]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <TestPageContent params={params} />
    </Suspense>
  );
}

async function TestPageContent({ params }: { params: PageProps<"/testler/[slug]">["params"] }) {
  const { slug } = await params;
  const test = getTest(slug);
  if (!test) notFound();

  const others = tests.filter((t) => t.slug !== test.slug).slice(0, 3);
  const articleSlug = articleByTest[test.slug];
  const article = articleSlug ? getArticle(articleSlug) : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: test.title,
    description: test.metaDescription,
    url: absoluteUrl(`/testler/${test.slug}`),
    inLanguage: "tr-TR",
    isPartOf: { "@id": absoluteUrl("/#website") },
  };
  const crumbs = breadcrumbJsonLd([
    { name: "Testler", path: "/testler" },
    { name: test.title, path: `/testler/${test.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd([jsonLd, crumbs]) }} />
      <section className="mx-auto max-w-2xl px-4 pt-8 sm:pt-12">
        <nav aria-label="Konum" className="text-sm font-semibold text-plum-soft">
          <Link href="/testler" className="hover:text-cherry">
            ← Tüm testler
          </Link>
        </nav>
        <div className="mt-4 flex items-center gap-4">
          <span
            aria-hidden
            className="grid size-16 shrink-0 -rotate-6 place-items-center rounded-2xl border-2 border-plum text-4xl shadow-[3px_4px_0_0_var(--color-plum)]"
            style={{ background: test.color }}
          >
            {test.emoji}
          </span>
          <h1 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl">
            {test.title}
          </h1>
        </div>
        <div className="mt-8">
          <Suspense fallback={<div className="sticker h-64 bg-white" />}>
            <Quiz test={test} />
          </Suspense>
        </div>
        {article && (
          <ArticleCta
            href={`/rehber/${article.slug}`}
            label="Daha fazlasını oku"
            text={`${article.title}: ${readingMinutes(article)} dakikalık rehber.`}
          />
        )}
      </section>

      {others.length > 0 && (
        <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold">Başka testler</h2>
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
