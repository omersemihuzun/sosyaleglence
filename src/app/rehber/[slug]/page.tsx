import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArticleCard, ArticleCta } from "@/components/article-card";
import { PageSkeleton } from "@/components/page-skeleton";
import { anchorId, articles, getArticle, readingMinutes, wordCount } from "@/content/articles";
import { onColor } from "@/lib/color";
import { breadcrumbJsonLd, pageTitle, toJsonLd } from "@/lib/jsonld";
import { absoluteUrl } from "@/lib/site";

/** Tüm parametreler build sırasında bilinir: sayfa tamamen statik üretilir. */
export const ensureStatic = "navigation";

const TR_MONTHS = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

/** "2026-11-08" -> "8 Kasım 2026" (Date kullanmadan: statik üretimde saat dilimi sürprizi olmasın) */
function formatTrDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${TR_MONTHS[m - 1]} ${y}`;
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/rehber/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: { absolute: pageTitle(a.metaTitle) },
    description: a.metaDescription,
    alternates: { canonical: `/rehber/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.metaDescription,
      url: `/rehber/${a.slug}`,
      modifiedTime: a.updated,
    },
  };
}

export default function ArticlePage({ params }: PageProps<"/rehber/[slug]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <ArticleContent params={params} />
    </Suspense>
  );
}

async function ArticleContent({ params }: { params: PageProps<"/rehber/[slug]">["params"] }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const url = absoluteUrl(`/rehber/${article.slug}`);
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  // Çağrı kartı makalenin ortasında da görünür
  const midIndex = Math.floor(article.sections.length / 2);
  const hero = onColor(article.color);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.metaDescription,
      url,
      mainEntityOfPage: url,
      inLanguage: "tr-TR",
      dateModified: article.updated,
      datePublished: article.updated,
      wordCount: wordCount(article),
      image: absoluteUrl(`/rehber/${article.slug}/opengraph-image`),
      author: { "@id": absoluteUrl("/#organization") },
      publisher: { "@id": absoluteUrl("/#organization") },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    breadcrumbJsonLd([
      { name: "Rehberler", path: "/rehber" },
      { name: article.title, path: `/rehber/${article.slug}` },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }} />
      <article className="mx-auto max-w-3xl px-4 pt-8 sm:px-6 sm:pt-12">
        <nav aria-label="Konum" className="text-sm font-semibold text-plum-soft">
          <Link href="/rehber" className="hover:text-cherry">
            Rehberler
          </Link>
          <span aria-hidden> / </span>
          <span>{article.title}</span>
        </nav>

        <header className="sticker mt-5 -rotate-[0.6deg] p-7 sm:p-9" style={{ background: hero.background, color: hero.color }}>
          <p aria-hidden className="text-5xl leading-none">
            {article.emoji}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-sm font-semibold">
            {readingMinutes(article)} dakika okuma · Son güncelleme: {formatTrDate(article.updated)}
          </p>
        </header>

        <div className="mx-auto mt-10 max-w-prose text-[17px] leading-[1.75]">
          <div className="space-y-4">
            {article.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <nav aria-labelledby="icindekiler" className="mt-8 rounded-2xl border-2 border-plum bg-white p-5">
            <h2 id="icindekiler" className="font-display text-lg font-bold">
              İçindekiler
            </h2>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-[15px]">
              {article.sections.map((s) => (
                <li key={s.heading}>
                  <a href={`#${anchorId(s.heading)}`} className="underline-offset-4 hover:text-cherry hover:underline">
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {article.sections.map((s, i) => (
            <section key={s.heading} className="mt-10">
              <h2 id={anchorId(s.heading)} className="scroll-mt-6 font-display text-2xl leading-tight font-bold sm:text-3xl">
                {s.heading}
              </h2>
              <div className="mt-3 space-y-4">
                {s.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
              {s.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {s.subsections?.map((sub) => (
                <div key={sub.heading} className="mt-6">
                  <h3 className="font-display text-xl font-bold">{sub.heading}</h3>
                  <div className="mt-2 space-y-3">
                    {sub.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
              {i === midIndex && <ArticleCta {...article.cta} />}
            </section>
          ))}

          <ArticleCta {...article.cta} />

          <section className="mt-12" aria-labelledby="sss">
            <h2 id="sss" className="font-display text-2xl font-bold sm:text-3xl">
              Sık sorulanlar
            </h2>
            <div className="mt-4 space-y-3">
              {article.faq.map((f) => (
                <details key={f.q} className="group rounded-2xl border-2 border-plum bg-white p-4">
                  <summary className="cursor-pointer font-display text-lg font-bold">{f.q}</summary>
                  <p className="mt-2 text-[16px]">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-12" aria-labelledby="ilgili">
            <h2 id="ilgili" className="font-display text-xl font-bold">
              İlgili
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {article.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="inline-block rounded-full border-2 border-plum bg-white px-4 py-2 text-[15px] font-semibold hover:bg-blush"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <p className="mt-10 rounded-xl bg-blush px-4 py-3 text-sm">
            Bu içerik bilgilendirme amaçlıdır, uzman görüşü yerine geçmez. Kendini zor bir durumda hissediyorsan bir
            psikolog ya da doktorla görüşmekten çekinme.
          </p>
        </div>
      </article>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-bold">Diğer rehberler</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
    </>
  );
}
