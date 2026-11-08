"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { Test } from "@/lib/types";
import { encodeScores, pickResult, scoreDimensions } from "@/lib/scoring";

function shuffle(n: number): number[] {
  const arr = Array.from({ length: n }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const LETTERS = ["A", "B", "C", "D", "E"];

export function Quiz({ test }: { test: Test }) {
  const router = useRouter();
  const params = useSearchParams();
  const total = test.questions.length;

  // Ana sayfadaki canlı sorudan gelindiyse ilk cevap hazırdır (?ilk=2)
  const preset = params.get("ilk");
  const presetIndex = preset !== null ? Number(preset) : NaN;
  const hasPreset = Number.isInteger(presetIndex) && presetIndex >= 0 && presetIndex < test.questions[0].options.length;

  const [started, setStarted] = useState(hasPreset);
  // Şık sırası her açılışta karışır: cevap konumu ezberlenemesin.
  // Bileşen useSearchParams nedeniyle yalnızca istemcide çizilir, hydration uyumsuzluğu olmaz.
  const [order] = useState<number[][]>(() => test.questions.map((q) => shuffle(q.options.length)));
  const [answers, setAnswers] = useState<number[]>(hasPreset ? [presetIndex] : []);
  const [current, setCurrent] = useState(hasPreset ? 1 : 0);
  const [picked, setPicked] = useState<number | null>(null);
  const [finishing, setFinishing] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (started) headingRef.current?.focus({ preventScroll: true });
  }, [current, started]);

  function finish(final: number[]) {
    setFinishing(true);
    const scores = scoreDimensions(test, final);
    const result = pickResult(test, scores);
    const s = encodeScores(test, scores);
    try {
      localStorage.setItem(`sonuc:${test.slug}`, JSON.stringify({ result: result.id, s }));
    } catch {
      /* gizli sekme vb. */
    }
    router.push(`/testler/${test.slug}/sonuc/${result.id}?s=${s}`);
  }

  function choose(optionIndex: number) {
    if (picked !== null || finishing) return;
    setPicked(optionIndex);
    const next = [...answers];
    next[current] = optionIndex;
    setAnswers(next);
    window.setTimeout(() => {
      setPicked(null);
      if (current + 1 >= total) finish(next);
      else setCurrent(current + 1);
    }, 320);
  }

  function back() {
    if (current === 0 || picked !== null) return;
    setCurrent(current - 1);
  }

  if (!started) {
    return (
      <div className="sticker bg-white p-6 sm:p-8">
        <p className="text-lg leading-relaxed text-plum-soft">{test.intro}</p>
        <ul className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
          <li className="rounded-full bg-blush px-3 py-1">{total} soru</li>
          <li className="rounded-full bg-blush px-3 py-1">yaklaşık {Math.max(2, Math.round(total * 0.25))} dakika</li>
          <li className="rounded-full bg-blush px-3 py-1">{test.results.length} farklı sonuç</li>
        </ul>
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="sticker sticker-press mt-7 w-full bg-cherry px-6 py-4 font-display text-xl font-bold text-white sm:w-auto"
        >
          Teste başla
        </button>
      </div>
    );
  }

  const q = test.questions[current];
  const optOrder = order[current];
  const progress = ((current + (picked !== null ? 1 : 0)) / total) * 100;

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <button
          type="button"
          onClick={back}
          disabled={current === 0}
          aria-label="Önceki soruya dön"
          className="rounded-full px-2 py-1 text-sm font-semibold text-plum-soft underline-offset-4 hover:underline disabled:invisible"
        >
          <span aria-hidden>←</span> Önceki
        </button>
        <div
          className="h-3 flex-1 overflow-hidden rounded-full border-2 border-plum bg-white"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={current + 1}
          aria-valuetext={`Soru ${current + 1} / ${total}`}
          aria-label="İlerleme"
        >
          <div className="h-full bg-cherry transition-[width] duration-300" style={{ width: `${progress}%` }} />
        </div>
        <span aria-hidden className="min-w-12 text-right font-display text-sm font-bold tabular-nums">
          {current + 1}/{total}
        </span>
      </div>

      <div key={current} className="animate-pop">
        <h2
          ref={headingRef}
          tabIndex={-1}
          className="font-display text-2xl leading-snug font-bold text-balance outline-none sm:text-3xl"
        >
          <span className="sr-only">{`Soru ${current + 1} / ${total}: `}</span>
          {q.text}
        </h2>
        <ul className="mt-6 grid gap-3">
          {optOrder.map((oi, pos) => {
            const isPicked = picked === oi;
            const wasAnswer = answers[current] === oi && picked === null;
            return (
              <li key={oi} style={{ rotate: `${pos % 2 === 0 ? -0.4 : 0.5}deg` }}>
                <button
                  type="button"
                  onClick={() => choose(oi)}
                  className={`sticker sticker-press flex w-full items-start gap-3 px-4 py-4 text-left text-[17px] leading-snug ${
                    isPicked ? "bg-butter" : wasAnswer ? "bg-blush" : "bg-white"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`grid size-7 shrink-0 place-items-center rounded-full border-2 border-plum font-display text-sm font-bold ${
                      isPicked ? "bg-cherry text-white" : "bg-paper"
                    }`}
                  >
                    {LETTERS[pos]}
                  </span>
                  <span className="pt-0.5">{q.options[oi].text}</span>
                </button>
              </li>
            );
          })}
        </ul>
        {finishing && (
          <p className="mt-6 font-display text-lg font-semibold" role="status">
            Sonucun hazırlanıyor…
          </p>
        )}
      </div>
    </div>
  );
}
