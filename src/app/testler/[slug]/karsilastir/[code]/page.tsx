import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CompareView } from "@/components/tests/compare-view";
import { PageSkeleton } from "@/components/layout/page-skeleton";
import { getTest } from "@/content/tests";
import { COMPARE_CODE } from "@/lib/compare";

export async function generateMetadata({ params }: PageProps<"/testler/[slug]/karsilastir/[code]">): Promise<Metadata> {
  const { slug, code } = await params;
  const test = getTest(slug);
  // Burada (gövde akışı başlamadan) doğrulamak gerçek 404 durum kodu verir;
  // sayfa içindeki notFound() Suspense'te kaldığı için 200 + "bulunamadı" (soft 404) üretiyordu.
  if (!test || !COMPARE_CODE.test(code)) notFound();
  return {
    title: `${test.title}: Karşılaştırma`,
    description: test ? `"${test.title}" testinde ikinizi karşılaştırın, uyum yüzdenizi görün.` : undefined,
    // Kişiye özel sayfalar arama motorlarına girmesin
    robots: { index: false, follow: false },
  };
}

export default function ComparePage({ params }: PageProps<"/testler/[slug]/karsilastir/[code]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <CompareContent params={params} />
    </Suspense>
  );
}

async function CompareContent({ params }: { params: PageProps<"/testler/[slug]/karsilastir/[code]">["params"] }) {
  const { slug, code } = await params;
  const test = getTest(slug);
  if (!test || !COMPARE_CODE.test(code)) notFound();

  return (
    <section className="mx-auto max-w-2xl px-4 pt-8 sm:pt-12">
      <Link href={`/testler/${test.slug}`} className="text-sm font-semibold text-plum-soft hover:text-cherry">
        ← {test.title}
      </Link>
      <h1 className="mt-4 font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl">
        <span aria-hidden>{test.emoji} </span>
        {test.title}: karşılaştırma
      </h1>
      <div className="mt-8">
        <CompareView test={test} code={code} />
      </div>
    </section>
  );
}
