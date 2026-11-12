"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Test } from "@/lib/types";

/** Ana sayfadaki canlı soru: şıkka dokunmak testi 2. sorudan başlatır. */
export function LiveQuestion({ test }: { test: Test }) {
  const router = useRouter();
  const [picked, setPicked] = useState<number | null>(null);
  const q = test.questions[0];

  function choose(i: number) {
    if (picked !== null) return;
    setPicked(i);
    window.setTimeout(() => router.push(`/testler/${test.slug}?ilk=${i}`), 260);
  }

  return (
    <div
      className="sticker relative rotate-[0.6deg] bg-white p-5 sm:p-7"
      style={{ boxShadow: "6px 8px 0 0 var(--color-plum)" }}
    >
      <div className="flex items-center justify-between gap-3 text-sm font-semibold">
        <span className="rounded-full bg-cherry px-3 py-1 text-white">
          {test.emoji} {test.title}
        </span>
        <span className="text-plum-soft tabular-nums">1/{test.questions.length}</span>
      </div>
      <p className="mt-4 font-display text-[22px] leading-snug font-bold text-balance sm:text-2xl">{q.text}</p>
      <ul className="mt-5 grid gap-2.5">
        {q.options.map((o, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => choose(i)}
              className={`sticker sticker-press w-full px-4 py-3 text-left text-[15px] leading-snug ${
                picked === i ? "bg-butter" : "bg-paper"
              }`}
            >
              {o.text}
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-plum-soft">Birini seç, test kaldığın yerden devam etsin.</p>
    </div>
  );
}
