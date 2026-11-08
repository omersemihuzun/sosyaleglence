"use client";

import { useState } from "react";
import type { Poll } from "@/content/polls";

type Counts = { a: number; b: number };

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Bunu mu O mu? Bir soru, iki seçenek. Oy verince herkesin dağılımı görünür.
 * İstatistik altyapısı kapalıysa sadece seçimini işaretler ve devam eder.
 */
export function PollPlayer({ polls, firstId }: { polls: Poll[]; firstId?: string | null }) {
  // ?soru=<id> ile gelindiyse (ör. ana sayfadaki günün sorusu) o soru ilk sırada
  const [queue] = useState(() => {
    const rest = shuffled(polls.filter((p) => p.id !== firstId));
    const first = polls.find((p) => p.id === firstId);
    return first ? [first, ...rest] : rest;
  });
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<"a" | "b" | null>(null);
  const [counts, setCounts] = useState<Counts | null>(null);
  const [busy, setBusy] = useState(false);
  const [majority, setMajority] = useState(0);
  const [answered, setAnswered] = useState(0);

  const poll = queue[index % queue.length];

  async function vote(c: "a" | "b") {
    if (choice || busy) return;
    setChoice(c);
    setBusy(true);
    try {
      const res = await fetch("/api/anket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: poll.id, choice: c }),
      });
      const data = res.ok ? await res.json() : null;
      if (data?.enabled) {
        setCounts({ a: data.a, b: data.b });
        const mine = c === "a" ? data.a : data.b;
        const other = c === "a" ? data.b : data.a;
        if (mine >= other) setMajority((m) => m + 1);
      }
    } catch {
      /* ağ hatası: sadece seçimi göster */
    } finally {
      setAnswered((n) => n + 1);
      setBusy(false);
    }
  }

  function next() {
    setChoice(null);
    setCounts(null);
    setIndex((i) => i + 1);
  }

  const total = counts ? counts.a + counts.b : 0;
  const pctOf = (n: number) => (total ? Math.round((n / total) * 100) : 0);

  return (
    <div>
      <div className="flex items-center justify-between gap-3 text-sm font-semibold text-plum-soft">
        <span>
          {answered > 0 && counts !== null
            ? `${answered} soruda ${majority} kez çoğunlukla aynı fikirdeydin`
            : `${queue.length} soru seni bekliyor`}
        </span>
        <span className="tabular-nums">{(index % queue.length) + 1}/{queue.length}</span>
      </div>

      <div key={poll.id} className="animate-pop relative mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6" aria-live="polite">
        {(["a", "b"] as const).map((side, idx) => {
          const label = side === "a" ? poll.a : poll.b;
          const emoji = side === "a" ? poll.aEmoji : poll.bEmoji;
          const n = counts ? counts[side] : 0;
          const p = pctOf(n);
          const mine = choice === side;
          return (
            <button
              key={side}
              type="button"
              onClick={() => vote(side)}
              disabled={choice !== null}
              aria-pressed={mine}
              className={`sticker relative flex min-h-44 flex-col items-center justify-center overflow-hidden px-5 py-6 text-center sm:min-h-64 ${
                choice === null ? "sticker-press bg-white" : mine ? "bg-butter" : "bg-white"
              }`}
              style={{ rotate: `${idx === 0 ? -0.8 : 0.8}deg` }}
            >
              {counts && (
                <span
                  aria-hidden
                  className="animate-bar absolute inset-y-0 left-0 bg-blush/70"
                  style={{ width: `${p}%` }}
                />
              )}
              <span aria-hidden className="relative text-6xl leading-none">
                {emoji}
              </span>
              <span className="relative mt-4 font-display text-xl leading-tight font-bold text-balance sm:text-2xl">
                {label}
              </span>
              {counts && (
                <span className="relative mt-3 font-display text-3xl font-extrabold tabular-nums">%{p}</span>
              )}
              {mine && <span className="relative mt-1 text-xs font-bold text-cherry">Senin seçimin</span>}
            </button>
          );
        })}
        <span
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 rotate-6 place-items-center rounded-full border-2 border-plum bg-cherry font-display text-base font-extrabold text-white shadow-[3px_4px_0_0_var(--color-plum)]"
        >
          YA
        </span>
      </div>

      <div className="mt-6 flex min-h-14 items-center justify-center">
        {choice && (
          <div className="flex flex-col items-center gap-2 text-center">
            {counts && (
              <p className="text-plum-soft">
                {total.toLocaleString("tr-TR")} oy. {pctOf(choice === "a" ? counts.a : counts.b) >= 50 ? "Çoğunluk seninle." : "Azınlıktasın, ama haklı olabilirsin."}
              </p>
            )}
            <button
              type="button"
              onClick={next}
              disabled={busy}
              className="sticker sticker-press bg-cherry px-8 py-3 font-display text-lg font-bold text-white"
            >
              Sıradaki
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
