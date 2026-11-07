import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BracketCard } from "@/components/bracket-card";
import { BracketGame } from "@/components/bracket-game";
import { PageSkeleton } from "@/components/page-skeleton";
import { brackets, getBracket } from "@/content/brackets";

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
    title: b.title,
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

  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pt-8 sm:pt-12">
        <Link href="/eleme" className="text-sm font-semibold text-plum-soft hover:text-cherry">
          ← Tüm eleme oyunları
        </Link>
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
          <BracketGame bracket={bracket} />
        </div>
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
