import type { Metadata } from "next";
import { TestCard } from "@/components/tests/test-card";
import { tests } from "@/content/tests";

export const metadata: Metadata = {
  title: "İlişki ve Kişilik Testleri",
  description:
    "Kıskançlık, bağlanma stili, sevgi dili, toksik davranışlar ve daha fazlası. Gerçekçi senaryolarla hazırlanmış, detaylı sonuçlu ilişki ve kişilik testleri.",
  alternates: { canonical: "/testler" },
};

const TILTS = [-1.2, 0.8, -0.5, 1, -0.9, 0.6];

export default function TestsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
      <h1 className="max-w-2xl font-display text-5xl leading-[1] font-extrabold tracking-tight sm:text-6xl">
        Kendini tanı, sonra herkese göster.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-plum-soft">
        Her test gerçek hayattan senaryolarla ilerler ve tek bir puan yerine seni birkaç açıdan ölçer. Sonunda kendi
        tipini, güçlü yanlarını ve paylaşabileceğin bir kartı alırsın.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tests.map((t, i) => (
          <TestCard key={t.slug} test={t} tilt={TILTS[i % TILTS.length]} />
        ))}
      </div>
    </section>
  );
}
