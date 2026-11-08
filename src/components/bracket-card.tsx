import Link from "next/link";
import type { Bracket } from "@/lib/bracket-types";
import { hasPhotos, ItemVisual } from "./item-visual";

export function BracketCard({ bracket, tilt = 0 }: { bracket: Bracket; tilt?: number }) {
  const photos = hasPhotos(bracket);
  // Kapakta fotoğraflı ilk iki seçeneği göster
  const preview = photos ? bracket.items.filter((i) => i.image).slice(0, 2) : bracket.items.slice(0, 2);
  return (
    <Link
      href={`/eleme/${bracket.slug}`}
      className="sticker sticker-press group flex h-full flex-col overflow-hidden bg-white"
      style={{ rotate: `${tilt}deg` }}
    >
      {photos ? (
        <div className="relative grid h-36 grid-cols-2 border-b-2 border-plum" aria-hidden>
          <ItemVisual item={preview[0]} className="size-full border-r-2 border-plum" thumb />
          <ItemVisual item={preview[1]} className="size-full" thumb />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-6 rounded-full border-2 border-plum bg-cherry px-2.5 py-1 font-display text-sm font-extrabold text-white">
            VS
          </span>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-2 border-b-2 border-plum px-4 py-5" style={{ background: bracket.color }}>
          <span aria-hidden className="grid size-12 place-items-center rounded-xl bg-white/90 text-2xl">
            {preview[0].emoji}
          </span>
          <span aria-hidden className="rounded-full bg-plum px-2 py-0.5 font-display text-sm font-extrabold text-paper">
            VS
          </span>
          <span aria-hidden className="grid size-12 place-items-center rounded-xl bg-white/90 text-2xl">
            {preview[1].emoji}
          </span>
        </div>
      )}
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
