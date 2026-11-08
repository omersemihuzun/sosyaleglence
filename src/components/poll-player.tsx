"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Poll } from "@/content/polls";

type Counts = { a: number; b: number };
type Side = "a" | "b";
/** Bir turda verilen cevap: çoğunlukla aynı fikirde mi (istatistik kapalıysa null) */
type Cevap = { id: string; choice: Side; counts: Counts | null };

/** Bir tur kaç soru: 40 soruyu art arda çözmek yorucu */
export const TUR = 10;
const GORULDU = "bmo:goruldu";

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function okuGoruldu(): string[] {
  try {
    const v = JSON.parse(localStorage.getItem(GORULDU) ?? "[]");
    return Array.isArray(v) ? v.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function yazGoruldu(id: string) {
  try {
    const s = new Set(okuGoruldu());
    s.add(id);
    localStorage.setItem(GORULDU, JSON.stringify([...s]));
  } catch {
    /* depolama kapalı */
  }
}

async function gonder(id: string, choice: Side, degistir: boolean): Promise<Counts | null> {
  try {
    const res = await fetch("/api/anket", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(degistir ? { id, choice, degistir: true } : { id, choice }),
    });
    const data = res.ok ? await res.json() : null;
    return data?.enabled ? { a: data.a, b: data.b } : null;
  } catch {
    return null;
  }
}

const cogunlukta = (c: Cevap) => (c.counts ? c.counts[c.choice] >= c.counts[c.choice === "a" ? "b" : "a"] : null);

/**
 * Bunu mu O mu? 10 soruluk turlar. Oy verince herkesin dağılımı görünür, fikrini değiştirebilirsin,
 * soruyu atlayabilir ya da turu istediğin an bitirebilirsin. Görülen sorular hatırlanır, yeni gelen önce
 * görmediklerini alır. İstatistik altyapısı kapalıysa sadece seçim işaretlenir.
 */
export function PollPlayer({ polls, firstId }: { polls: Poll[]; firstId?: string | null }) {
  // ?soru=<id> ile gelindiyse (ör. ana sayfadaki günün sorusu) o soru ilk sırada; sonra görülmemişler
  const [queue] = useState(() => {
    const goruldu = new Set(okuGoruldu());
    const rest = polls.filter((p) => p.id !== firstId);
    const yeni = shuffled(rest.filter((p) => !goruldu.has(p.id)));
    const eski = shuffled(rest.filter((p) => goruldu.has(p.id)));
    const first = polls.find((p) => p.id === firstId);
    return [...(first ? [first] : []), ...yeni, ...eski];
  });
  const [index, setIndex] = useState(0);
  const [turBasi, setTurBasi] = useState(0);
  const [choice, setChoice] = useState<Side | null>(null);
  const [counts, setCounts] = useState<Counts | null>(null);
  const [busy, setBusy] = useState(false);
  const [cevaplar, setCevaplar] = useState<Cevap[]>([]);
  const [ozet, setOzet] = useState(false);
  const ozetRef = useRef<HTMLHeadingElement>(null);
  const [kalan, setKalan] = useState(0);
  const ozeteGec = () => {
    const goruldu = new Set(okuGoruldu());
    setKalan(polls.filter((p) => !goruldu.has(p.id)).length);
    setOzet(true);
  };

  const poll = queue[index % queue.length];
  const turdaki = index - turBasi; // bu turda kaçıncı soru (0'dan)
  const turCevaplari = cevaplar;

  useEffect(() => {
    if (ozet) ozetRef.current?.focus();
  }, [ozet]);

  async function vote(c: Side) {
    if (busy || c === choice) return;
    const degistir = choice !== null;
    setChoice(c);
    setBusy(true);
    const yeni = await gonder(poll.id, c, degistir);
    setCounts(yeni);
    setCevaplar((list) => {
      const kayit: Cevap = { id: poll.id, choice: c, counts: yeni };
      // Fikir değiştirildiyse son kaydı güncelle, değilse ekle
      return degistir && list.at(-1)?.id === poll.id ? [...list.slice(0, -1), kayit] : [...list, kayit];
    });
    if (!degistir) yazGoruldu(poll.id);
    setBusy(false);
  }

  function next() {
    setChoice(null);
    setCounts(null);
    if (turdaki + 1 >= TUR) ozeteGec();
    setIndex((i) => i + 1);
  }

  function yeniTur() {
    setOzet(false);
    setTurBasi(index);
    setCevaplar([]);
  }

  function bitir() {
    // Oy verilmiş soru yeni turda tekrar gelmesin
    if (choice) setIndex((i) => i + 1);
    setChoice(null);
    setCounts(null);
    ozeteGec();
  }

  const total = counts ? counts.a + counts.b : 0;
  const pctOf = (n: number) => (total ? Math.round((n / total) * 100) : 0);

  if (ozet) {
    const olculen = turCevaplari.filter((c) => c.counts);
    const ayni = olculen.filter((c) => cogunlukta(c)).length;
    const byId = new Map(polls.map((p) => [p.id, p]));
    return (
      <div className="sticker bg-white p-6 sm:p-8" data-ozet>
        <h2 ref={ozetRef} tabIndex={-1} className="font-display text-3xl font-extrabold outline-none">
          {turCevaplari.length ? "Tur bitti!" : "Bugünlük bu kadar mı?"}
        </h2>
        {olculen.length > 0 ? (
          <p className="mt-2 text-lg text-plum-soft">
            {olculen.length} sorunun {ayni} tanesinde çoğunlukla aynı fikirdeydin.{" "}
            {ayni / olculen.length >= 0.7
              ? "Tam bir halkın sesi."
              : ayni / olculen.length >= 0.4
                ? "Ne tam akıntıya kapılan ne de aykırı: dengelisin."
                : "Sen bir aykırısın; kalabalık genelde öbür tarafta."}
          </p>
        ) : (
          <p className="mt-2 text-lg text-plum-soft">
            {turCevaplari.length ? `${turCevaplari.length} soruya cevap verdin.` : "Henüz bir soru cevaplamadın."}
          </p>
        )}
        {turCevaplari.length > 0 && (
          <ul className="mt-5 space-y-2">
            {turCevaplari.map((c) => {
              const p = byId.get(c.id);
              if (!p) return null;
              const t = c.counts ? c.counts.a + c.counts.b : 0;
              const yuzde = c.counts && t ? Math.round((c.counts[c.choice] / t) * 100) : null;
              return (
                <li key={c.id} className="flex items-center justify-between gap-3 rounded-xl border-2 border-plum bg-paper px-3 py-2 text-[15px]">
                  <span>
                    <span aria-hidden>{c.choice === "a" ? p.aEmoji : p.bEmoji} </span>
                    <strong>{c.choice === "a" ? p.a : p.b}</strong>
                    <span className="text-plum-soft"> ({c.choice === "a" ? p.b : p.a} yerine)</span>
                  </span>
                  {yuzde !== null && <span className="shrink-0 font-display font-bold tabular-nums">%{yuzde}</span>}
                </li>
              );
            })}
          </ul>
        )}
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={yeniTur}
            className="sticker sticker-press bg-cherry px-6 py-3 font-display text-lg font-bold text-white"
          >
            {kalan > 0 ? `${Math.min(TUR, kalan)} yeni soru daha` : `${TUR} soru daha`}
          </button>
          <Link href="/testler" className="sticker sticker-press bg-white px-6 py-3 font-display text-lg font-bold">
            Testlere göz at
          </Link>
        </div>
        {kalan === 0 && <p className="mt-3 text-sm text-plum-soft">Bütün soruları gördün; şimdi eskiler karışık sırayla geliyor.</p>}
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-3 text-sm font-semibold text-plum-soft">
        <span>
          Tur: {turdaki + 1}/{TUR}
        </span>
        <div className="flex items-center gap-4">
          {!choice && (
            <button type="button" onClick={next} className="underline-offset-4 hover:text-cherry hover:underline">
              Atla
            </button>
          )}
          <button type="button" onClick={bitir} className="underline-offset-4 hover:text-cherry hover:underline">
            Turu bitir
          </button>
        </div>
      </div>
      <div
        className="mt-2 h-2 overflow-hidden rounded-full border border-plum bg-white"
        role="progressbar"
        aria-label="Tur ilerlemesi"
        aria-valuemin={0}
        aria-valuemax={TUR}
        aria-valuenow={turdaki + (choice ? 1 : 0)}
      >
        <div className="h-full bg-cherry transition-[width]" style={{ width: `${((turdaki + (choice ? 1 : 0)) / TUR) * 100}%` }} />
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
              disabled={busy}
              aria-pressed={mine}
              className={`sticker sticker-press relative flex min-h-44 flex-col items-center justify-center overflow-hidden px-5 py-6 text-center sm:min-h-64 ${
                mine ? "bg-butter" : "bg-white"
              }`}
              style={{ rotate: `${idx === 0 ? -0.8 : 0.8}deg` }}
            >
              {counts && (
                <span aria-hidden className="animate-bar absolute inset-y-0 left-0 bg-blush/70" style={{ width: `${p}%` }} />
              )}
              <span aria-hidden className="relative text-6xl leading-none">
                {emoji}
              </span>
              <span className="relative mt-4 font-display text-xl leading-tight font-bold text-balance sm:text-2xl">
                {label}
              </span>
              {counts && <span className="relative mt-3 font-display text-3xl font-extrabold tabular-nums">%{p}</span>}
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
                {total.toLocaleString("tr-TR")} oy.{" "}
                {pctOf(counts[choice]) >= 50 ? "Çoğunluk seninle." : "Azınlıktasın, ama haklı olabilirsin."}
              </p>
            )}
            <p className="text-xs text-plum-soft">Fikrin mi değişti? Öbür tarafa dokun.</p>
            <button
              type="button"
              onClick={next}
              disabled={busy}
              className="sticker sticker-press bg-cherry px-8 py-3 font-display text-lg font-bold text-white"
            >
              {turdaki + 1 >= TUR ? "Turu tamamla" : "Sıradaki"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
