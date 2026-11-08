import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BracketCard } from "@/components/bracket-card";
import { BracketGame } from "@/components/bracket-game";
import { hasPhotos } from "@/components/item-visual";
import { PageSkeleton } from "@/components/page-skeleton";
import { brackets, getBracket } from "@/content/brackets";
import { breadcrumbJsonLd, pageTitle, toJsonLd } from "@/lib/jsonld";
import { absoluteUrl } from "@/lib/site";

/** Tüm parametreler build sırasında bilinir: sayfa tamamen statik üretilir. */
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return brackets.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps<"/eleme/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const b = getBracket(slug);
  if (!b) return {};
  return {
    title: { absolute: pageTitle(b.title) },
    description: b.metaDescription,
    alternates: { canonical: `/eleme/${b.slug}` },
    openGraph: { title: b.title, description: b.summary, url: `/eleme/${b.slug}` },
  };
}

export default function BracketPage({ params }: PageProps<"/eleme/[slug]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <BracketPageContent params={params} />
    </Suspense>
  );
}

async function BracketPageContent({ params }: { params: PageProps<"/eleme/[slug]">["params"] }) {
  const { slug } = await params;
  const bracket = getBracket(slug);
  if (!bracket) notFound();
  const others = brackets.filter((b) => b.slug !== bracket.slug).slice(0, 3);
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Eleme oyunları", path: "/eleme" },
      { name: bracket.title, path: `/eleme/${bracket.slug}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: bracket.title,
      description: bracket.metaDescription,
      url: absoluteUrl(`/eleme/${bracket.slug}`),
      numberOfItems: bracket.items.length,
      itemListElement: bracket.items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: absoluteUrl(`/eleme/${bracket.slug}/sonuc/${item.id}`),
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }} />
      <section className="mx-auto max-w-3xl px-4 pt-8 sm:pt-12">
        <nav aria-label="Konum" className="text-sm font-semibold text-plum-soft">
          <Link href="/eleme" className="hover:text-cherry">
            ← Tüm eleme oyunları
          </Link>
        </nav>
        <div className="mt-4 flex items-center gap-4">
          <span
            aria-hidden
            className="grid size-16 shrink-0 -rotate-6 place-items-center rounded-2xl border-2 border-plum text-4xl shadow-[3px_4px_0_0_var(--color-plum)]"
            style={{ background: bracket.color }}
          >
            {bracket.emoji}
          </span>
          <h1 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl">
            {bracket.title}
          </h1>
        </div>
        <div className="mt-8">
          {/* Oyun karıştırma için Math.random kullanır ve yalnızca istemcide çizilir. Kendi Suspense
              sınırı olmazsa başlık, açıklama ve JSON-LD de HTML'den düşer (SEO kaybı). */}
          <Suspense fallback={<div className="sticker min-h-64 bg-white p-6 text-plum-soft">{bracket.summary}</div>}>
            <BracketGame bracket={bracket} />
          </Suspense>
        </div>
        {hasPhotos(bracket) && (
          <p className="mt-6 text-xs text-plum-soft">
            Fotoğraflar açık lisanslıdır.{" "}
            <Link href={`/gorsel-kaynaklari#${bracket.slug}`} className="underline">
              Fotoğraf kaynakları
            </Link>
          </p>
        )}
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-bold">Başka eleme oyunları</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((b) => (
            <BracketCard key={b.slug} bracket={b} />
          ))}
        </div>
      </section>
    </>
  );
}
