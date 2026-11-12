import type { Metadata } from "next";
import { BracketCard } from "@/components/brackets/bracket-card";
import { brackets } from "@/content/brackets";

export const metadata: Metadata = {
  title: "Eleme Oyunları: Hangisini Seçerdin?",
  description:
    "Gelecekteki evini seç, sevgilinle yapılacak en güzel şeyi bul, en affedilmez red flag'i belirle. 16 seçenekli eleme turnuvaları, tek şampiyon.",
  alternates: { canonical: "/eleme" },
};

const TILTS = [0.8, -0.9, 0.5, -0.6, 1, -0.4];

export default function BracketsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
      <h1 className="max-w-2xl font-display text-5xl leading-[1] font-extrabold tracking-tight sm:text-6xl">
        İkisinden birini seç. Sonuna kadar.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-plum-soft">
        Her turnuvada 16 seçenek var. Her turda iki seçenek karşılaşır, sen birini seçersin. Sonunda tek bir şampiyon
        kalır ve o seçim seni anlatır.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {brackets.map((b, i) => (
          <BracketCard key={b.slug} bracket={b} tilt={TILTS[i % TILTS.length]} />
        ))}
      </div>
    </section>
  );
}
