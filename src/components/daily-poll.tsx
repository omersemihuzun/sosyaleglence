"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import type { Poll } from "@/content/polls";

/**
 * Günün sorusu: yerel tarihe göre deterministik seçilen bir "Bunu mu O mu?" sorusu.
 * Tarih sadece tarayıcıda okunur (statik üretimde şimdiki zaman kullanılamaz). Sunucu çiziminde
 * ve ilk hydration'da nötr bir yer tutucu görünür, ardından günün sorusu gelir.
 */
function todayKey(): number {
  const now = new Date();
  // Yerel gün numarası: saat dilimine göre gece yarısı değişir
  return Math.floor((now.getTime() - now.getTimezoneOffset() * 60_000) / 86_400_000);
}

const subscribe = () => () => {};

/** Ardışık günlerde aynı sıraya düşmemek için basit bir karıştırma */
function pickIndex(day: number, length: number) {
  return Math.abs((day * 2654435761) % length);
}

export function DailyPoll({ polls }: { polls: Poll[] }) {
  const day = useSyncExternalStore(subscribe, todayKey, () => null);
  const poll = day === null ? null : polls[pickIndex(day, polls.length)];

  return (
    <Link
      href={poll ? `/bunu-mu-o-mu?soru=${poll.id}` : "/bunu-mu-o-mu"}
      className="sticker sticker-press flex flex-col items-start gap-4 bg-plum p-6 text-paper sm:flex-row sm:items-center sm:justify-between sm:p-8"
    >
      <span>
        <span className="block text-sm font-semibold text-paper/80">{poll ? "Günün sorusu" : "Bunu mu, o mu?"}</span>
        <span className="mt-1 block font-display text-3xl font-extrabold text-balance sm:text-4xl">
          {poll ? (
            // "mı/mi" eki her seçeneğe uymadığı için "ya da" ile ayrılıyor
            <>
              <span aria-hidden>{poll.aEmoji} </span>
              {poll.a}
              <span className="mx-2 text-xl font-semibold text-paper/70">ya da</span>
              <span aria-hidden>{poll.bEmoji} </span>
              {poll.b}
            </>
          ) : (
            "İkisinden birini seç"
          )}
        </span>
        <span className="mt-1 block text-paper/80">Birini seç, herkesin ne seçtiğini anında gör.</span>
      </span>
      <span className="shrink-0 rounded-full border-2 border-paper bg-cherry px-5 py-2.5 font-display font-bold">Oyla</span>
    </Link>
  );
}
