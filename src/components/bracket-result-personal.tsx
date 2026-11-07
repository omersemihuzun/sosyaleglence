"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { Bracket, BracketItem } from "@/lib/bracket-types";
import { ShareBar } from "./share-bar";

export function BracketResultPersonal({
  bracket,
  champion,
  shareUrl,
}: {
  bracket: Bracket;
  champion: BracketItem;
  shareUrl: string;
}) {
  const params = useSearchParams();
  const byId = new Map(bracket.items.map((i) => [i.id, i]));
  const finalist = byId.get(params.get("f") ?? "");
  const semis = (params.get("y") ?? "")
    .split(",")
    .map((id) => byId.get(id))
    .filter((x): x is BracketItem => Boolean(x) && x!.id !== champion.id);

  if (!finalist) {
    return (
      <div className="sticker bg-white p-6">
        <p className="font-display text-2xl font-bold">Senin şampiyonun hangisi?</p>
        <p className="mt-2 text-plum-soft">
          {bracket.items.length} seçenek arasından ikisinden birini seçerek ilerle, kendi şampiyonunu bul.
        </p>
        <Link
          href={`/eleme/${bracket.slug}`}
          className="sticker sticker-press mt-5 inline-block bg-cherry px-6 py-3.5 font-display text-lg font-bold text-white"
        >
          Turnuvayı oyna
        </Link>
      </div>
    );
  }

  const shareText = `${bracket.championLabel}: ${champion.emoji} ${champion.name}! Seninki hangisi?`;
  const qs = new URLSearchParams({ f: finalist.id });

  return (
    <div className="sticker bg-white p-6">
      <p className="font-display text-lg font-bold">Şampiyona giden yol</p>
      <ol className="mt-4 space-y-3">
        <li className="flex items-center gap-3 rounded-xl border-2 border-plum bg-butter px-3 py-2.5">
          <span aria-hidden className="text-2xl">🏆</span>
          <span className="flex-1 font-semibold">{champion.name}</span>
          <span className="text-xs font-bold">Şampiyon</span>
        </li>
        <li className="flex items-center gap-3 rounded-xl border-2 border-plum px-3 py-2.5">
          <span aria-hidden className="text-2xl">{finalist.emoji}</span>
          <span className="flex-1 font-semibold">{finalist.name}</span>
          <span className="text-xs font-bold text-plum-soft">Finalist</span>
        </li>
        {semis.map((s) => (
          <li key={s.id} className="flex items-center gap-3 rounded-xl border-2 border-line px-3 py-2.5">
            <span aria-hidden className="text-2xl">{s.emoji}</span>
            <span className="flex-1">{s.name}</span>
            <span className="text-xs font-bold text-plum-soft">Yarı final</span>
          </li>
        ))}
      </ol>
      <div className="mt-6 border-t-2 border-dashed border-line pt-6">
        <p className="mb-4 font-display text-lg font-bold">Sonucunu paylaş</p>
        <ShareBar
          shareUrl={shareUrl}
          shareText={shareText}
          imageUrl={`/api/eleme-kart/${bracket.slug}/${champion.id}?${qs.toString()}`}
          fileName={`${bracket.slug}-${champion.id}.png`}
        />
      </div>
      <Link href={`/eleme/${bracket.slug}`} className="mt-2 inline-block font-display font-bold text-cherry hover:underline">
        Tekrar oyna
      </Link>
    </div>
  );
}
