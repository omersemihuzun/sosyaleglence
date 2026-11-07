import Link from "next/link";
import type { Bracket } from "@/lib/bracket-types";

export function BracketCard({ bracket, tilt = 0 }: { bracket: Bracket; tilt?: number }) {
  const preview = bracket.items.slice(0, 4);
  return (
    <Link
      href={`/eleme/${bracket.slug}`}
      className="sticker sticker-press group flex h-full flex-col overflow-hidden bg-white"
      style={{ rotate: `${tilt}deg` }}
    >
      <div className="flex items-center justify-center gap-2 border-b-2 border-plum px-4 py-5" style={{ background: bracket.color }}>
        <span aria-hidden className="grid size-12 place-items-center rounded-xl bg-white/90 text-2xl">
          {preview[0].emoji}
        </span>
        <span aria-hidden className="font-display text-sm font-extrabold text-white">
          VS
        </span>
        <span aria-hidden className="grid size-12 place-items-center rounded-xl bg-white/90 text-2xl">
          {preview[1].emoji}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl leading-tight font-bold">
          <span aria-hidden>{bracket.emoji} </span>
          {bracket.title}
        </h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-plum-soft">{bracket.summary}</p>
        <span className="mt-4 font-display font-bold text-cherry group-hover:underline">Oyna</span>
      </div>
    </Link>
  );
}
