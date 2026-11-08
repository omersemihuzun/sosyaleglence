import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BracketCard } from "@/components/bracket-card";
import { BracketResultPersonal } from "@/components/bracket-result-personal";
import { PageSkeleton } from "@/components/page-skeleton";
import { brackets, getBracket } from "@/content/brackets";
import { bracketResultDescription, bracketResultTitle, breadcrumbJsonLd, toJsonLd } from "@/lib/jsonld";
import { absoluteUrl } from "@/lib/site";

/** Tüm parametreler build sırasında bilinir: sayfa tamamen statik üretilir. */
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return brackets.flatMap((b) => b.items.map((i) => ({ slug: b.slug, item: i.id })));
}

export async function generateMetadata({ params }: PageProps<"/eleme/[slug]/sonuc/[item]">): Promise<Metadata> {
  const { slug, item: id } = await params;
  const b = getBracket(slug);
  const item = b?.items.find((i) => i.id === id);
  if (!b || !item) return {};
  return {
    title: { absolute: bracketResultTitle(item.name, b.title) },
    description: bracketResultDescription(item.name, b.championLabel, b.title),
    alternates: { canonical: `/eleme/${b.slug}/sonuc/${item.id}` },
    openGraph: { title: `${item.emoji} ${item.name} | ${b.title}`, description: item.meaning },
  };
}

export default function BracketResultPage({ params }: PageProps<"/eleme/[slug]/sonuc/[item]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <BracketResultContent params={params} />
    </Suspense>
  );
}

async function BracketResultContent({ params }: { params: PageProps<"/eleme/[slug]/sonuc/[item]">["params"] }) {
  const { slug, item: id } = await params;
  const bracket = getBracket(slug);
  const champion = bracket?.items.find((i) => i.id === id);
  if (!bracket || !champion) notFound();
  const others = brackets.filter((b) => b.slug !== bracket.slug).slice(0, 3);
  const crumbs = breadcrumbJsonLd([
    { name: "Eleme oyunları", path: "/eleme" },
    { name: bracket.title, path: `/eleme/${bracket.slug}` },
    { name: champion.name, path: `/eleme/${bracket.slug}/sonuc/${champion.id}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(crumbs) }} />
      <section className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 sm:pt-12">
        <nav aria-label="Konum" className="text-sm font-semibold text-plum-soft">
          <Link href="/eleme" className="hover:text-cherry">
            Eleme oyunları
          </Link>
          <span aria-hidden> / </span>
          <Link href={`/eleme/${bracket.slug}`} className="hover:text-cherry">
            {bracket.title}
          </Link>
        </nav>
        <div className="mt-5 grid items-start gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <div
              className="sticker animate-pop -rotate-1 p-7 text-paper sm:p-10"
              style={{ background: bracket.color, boxShadow: "6px 8px 0 0 var(--color-plum)" }}
            >
              <p className="text-paper/85">🏆 {bracket.championLabel}</p>
              <p aria-hidden className="mt-4 text-7xl leading-none sm:text-8xl">
                {champion.emoji}
              </p>
              <h1 className="mt-4 font-display text-5xl leading-[0.95] font-extrabold tracking-tight text-balance sm:text-6xl">
                {champion.name}
              </h1>
              <p className="mt-4 max-w-md text-xl leading-snug text-paper/90">{champion.detail}</p>
            </div>
            <div className="mt-10 max-w-prose">
              <h2 className="font-display text-2xl font-bold">Bu seçim seni nasıl anlatıyor?</h2>
              <p className="mt-3 text-[17px] leading-[1.7]">{champion.meaning}</p>
            </div>
            {bracket.related && (
              <Link
                href={bracket.related.href}
                className="sticker sticker-press mt-8 inline-block bg-white px-5 py-3 font-display font-bold"
              >
                {bracket.related.label}
              </Link>
            )}
          </div>
          <aside className="lg:sticky lg:top-6">
            <Suspense fallback={<div className="sticker h-80 bg-white" />}>
              <BracketResultPersonal
                bracket={bracket}
                champion={champion}
                shareUrl={absoluteUrl(`/eleme/${bracket.slug}/sonuc/${champion.id}`)}
              />
            </Suspense>
          </aside>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-bold">Sıradaki oyunun</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((b) => (
            <BracketCard key={b.slug} bracket={b} />
          ))}
        </div>
      </section>
    </>
  );
}
