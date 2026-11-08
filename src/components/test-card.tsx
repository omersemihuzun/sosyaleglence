import Link from "next/link";
import type { Test } from "@/lib/types";

export function TestCard({ test, tilt = 0 }: { test: Test; tilt?: number }) {
  return (
    <Link
      href={`/testler/${test.slug}`}
      className="sticker sticker-press group flex h-full flex-col bg-white p-5"
      style={{ rotate: `${tilt}deg` }}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          aria-hidden
          className="grid size-14 place-items-center rounded-2xl border-2 border-plum text-3xl"
          style={{ background: test.color }}
        >
          {test.emoji}
        </span>
        <span className="flex flex-wrap justify-end gap-1.5">
          {test.format === "secim" && (
            <span className="rounded-full bg-butter px-2.5 py-1 text-xs font-semibold">Seç</span>
          )}
          <span className="rounded-full bg-blush px-2.5 py-1 text-xs font-semibold">
            {test.questions.length} soru
          </span>
        </span>
      </div>
      <h3 className="mt-4 font-display text-xl leading-tight font-bold">{test.title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-plum-soft">{test.summary}</p>
      <span className="mt-4 font-display font-bold text-cherry group-hover:underline">Çöz</span>
    </Link>
  );
}
