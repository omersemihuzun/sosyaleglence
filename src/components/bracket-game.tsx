"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Bracket, BracketItem } from "@/lib/bracket-types";
import { reportBracket } from "@/lib/client/stats";

// Bilinçli olarak @/content/brackets'tan import edilmiyor: o modül 8 turnuvanın bütün metnini
// tarayıcı paketine taşıyordu (+38 KB). Oyun yalnızca props ile gelen tek turnuvayı bilir.
function roundName(size: number): string {
  if (size === 2) return "Final";
  if (size === 4) return "Yarı final";
  if (size === 8) return "Çeyrek final";
  return `Son ${size}`;
}

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Pick = { winner: string; loser: string; roundSize: number };

/**
 * Eleme turnuvası. Her turda seçenekler ikişer ikişer eşleşir, kazananlar bir sonraki tura geçer.
 * Durum yalnızca seçim geçmişinden türetilir: "geri al" tek satırlık bir işlem.
 */
export function BracketGame({ bracket }: { bracket: Bracket }) {
  const router = useRouter();
  const byId = new Map(bracket.items.map((i) => [i.id, i]));
  const [started, setStarted] = useState(false);
  const [seed] = useState(() => shuffled(bracket.items.map((i) => i.id)));
  const [picks, setPicks] = useState<Pick[]>([]);
  const [chosen, setChosen] = useState<string | null>(null);
  const [finishing, setFinishing] = useState(false);
  const promptRef = useRef<HTMLHeadingElement>(null);

  // Seçilen kart DOM'dan kalkınca odak kaybolmasın: her yeni eşleşmede soruya odaklan
  useEffect(() => {
    if (started) promptRef.current?.focus({ preventScroll: true });
  }, [started, picks.length]);

  // Geçmişten mevcut turu ve eşleşmeyi hesapla
  let round = seed;
  let consumed = 0;
  while (round.length > 1 && consumed + round.length / 2 <= picks.length) {
    const winners = picks.slice(consumed, consumed + round.length / 2).map((p) => p.winner);
    consumed += round.length / 2;
    round = winners;
  }
  const matchIndex = picks.length - consumed;
  const totalMatches = round.length / 2;
  const left = byId.get(round[matchIndex * 2]);
  const right = byId.get(round[matchIndex * 2 + 1]);
  const totalPicks = bracket.items.length - 1;

  function choose(winner: BracketItem, loser: BracketItem) {
    if (chosen || finishing) return;
    setChosen(winner.id);
    window.setTimeout(() => {
      const next = [...picks, { winner: winner.id, loser: loser.id, roundSize: round.length }];
      setChosen(null);
      setPicks(next);
      if (next.length === totalPicks) finish(next);
    }, 380);
  }

  function finish(all: Pick[]) {
    setFinishing(true);
    const final = all[all.length - 1];
    const semis = all.filter((p) => p.roundSize === 4).map((p) => p.loser);
    const qs = new URLSearchParams({ f: final.loser, y: semis.join(",") });
    reportBracket(bracket.slug, all.map((p) => [p.winner, p.loser]));
    try {
      localStorage.setItem(`eleme:${bracket.slug}`, JSON.stringify({ champion: final.winner, ...Object.fromEntries(qs) }));
    } catch {
      /* gizli sekme */
    }
    router.push(`/eleme/${bracket.slug}/sonuc/${final.winner}?${qs.toString()}`);
  }

  if (!started) {
    return (
      <div className="sticker bg-white p-6 sm:p-8">
        <p className="text-lg leading-relaxed text-plum-soft">{bracket.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5 text-2xl" aria-label="Turnuvadaki seçenekler">
          {bracket.items.map((i) => (
            <li key={i.id} title={i.name} className="grid size-11 place-items-center rounded-xl border-2 border-line bg-paper">
              <span aria-hidden>{i.emoji}</span>
              <span className="sr-only">{i.name}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm font-semibold text-plum-soft">
          {bracket.items.length} seçenek, {totalPicks} karşılaşma, tek şampiyon
        </p>
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="sticker sticker-press mt-6 w-full bg-cherry px-6 py-4 font-display text-xl font-bold text-white sm:w-auto"
        >
          Turnuvayı başlat
        </button>
      </div>
    );
  }

  if (!left || !right) {
    return (
      <p className="font-display text-xl font-bold" role="status">
        Şampiyonun hazırlanıyor…
      </p>
    );
  }

  const progress = (picks.length / totalPicks) * 100;

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <p className="font-display text-lg font-bold">
          <span className="rounded-full bg-plum px-3 py-1 text-paper">{roundName(round.length)}</span>
          {round.length > 2 && (
            <span className="ml-3 text-plum-soft tabular-nums">
              {matchIndex + 1}/{totalMatches}
            </span>
          )}
        </p>
        <button
          type="button"
          onClick={() => setPicks(picks.slice(0, -1))}
          disabled={picks.length === 0 || chosen !== null}
          aria-label="Son seçimi geri al"
          className="text-sm font-semibold text-plum-soft underline-offset-4 hover:underline disabled:invisible"
        >
          Geri al
        </button>
      </div>
      <div className="mt-3 h-2.5 overflow-hidden rounded-full border-2 border-plum bg-white" aria-hidden>
        <div className="h-full bg-cherry transition-[width] duration-300" style={{ width: `${progress}%` }} />
      </div>

      <h2
        ref={promptRef}
        tabIndex={-1}
        className="mt-6 text-center font-display text-2xl font-bold text-balance outline-none sm:text-3xl"
      >
        {bracket.prompt}
      </h2>
      <p className="sr-only" aria-live="polite">
        {`${roundName(round.length)}${round.length > 2 ? `, eşleşme ${matchIndex + 1}/${totalMatches}` : ""}: ${left.name} ya da ${right.name}`}
      </p>

      <div key={`${left.id}-${right.id}`} className="animate-pop relative mt-6 grid gap-4 sm:grid-cols-2 sm:gap-6">
        {[left, right].map((item, idx) => {
          const other = idx === 0 ? right : left;
          const state = chosen === null ? "idle" : chosen === item.id ? "won" : "lost";
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => choose(item, other)}
              className={`sticker sticker-press flex min-h-44 flex-col items-center justify-center px-5 py-6 text-center transition-[opacity,transform] duration-300 sm:min-h-72 ${
                state === "won" ? "scale-[1.03] bg-butter" : "bg-white"
              } ${state === "lost" ? "scale-95 opacity-30" : ""}`}
              style={{ rotate: `${idx === 0 ? -0.8 : 0.8}deg` }}
            >
              <span aria-hidden className="text-6xl leading-none sm:text-7xl">
                {item.emoji}
              </span>
              <span className="mt-4 font-display text-xl leading-tight font-bold text-balance sm:text-2xl">{item.name}</span>
              <span className="mt-2 max-w-xs text-[15px] leading-snug text-plum-soft">{item.detail}</span>
            </button>
          );
        })}
        <span
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 -rotate-6 place-items-center rounded-full border-2 border-plum bg-cherry font-display text-lg font-extrabold text-white shadow-[3px_4px_0_0_var(--color-plum)]"
        >
          VS
        </span>
      </div>
    </div>
  );
}
