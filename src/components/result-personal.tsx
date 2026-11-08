"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { Result, Test } from "@/lib/types";
import { decodeScores, headlineScore } from "@/lib/scoring";
import { CompareInvite } from "./compare-invite";
import { ShareBar } from "./share-bar";

export function ResultPersonal({ test, result, shareUrl }: { test: Test; result: Result; shareUrl: string }) {
  const params = useSearchParams();
  const raw = params.get("s");
  const scores = decodeScores(test, raw);

  // Bağlantıyla gelen ziyaretçi: kendi sonucunu bulmaya davet et
  if (!scores) {
    return (
      <div className="sticker bg-white p-6">
        <p className="font-display text-2xl font-bold">Sen hangisisin?</p>
        <p className="mt-2 text-plum-soft">
          Bu, &quot;{test.title}&quot; testinin {test.results.length} sonucundan biri. {test.questions.length} soruda kendi tipini bul.
        </p>
        <Link
          href={`/testler/${test.slug}`}
          className="sticker sticker-press mt-5 inline-block bg-cherry px-6 py-3.5 font-display text-lg font-bold text-white"
        >
          Testi çöz
        </Link>
      </div>
    );
  }

  const headline = headlineScore(test, scores);
  const shareText = `${test.title} sonucum: ${result.emoji} ${result.name}! Sen hangisisin?`;

  return (
    <div className="sticker bg-white p-6">
      {headline !== null && test.headline && (
        <p className="flex items-baseline gap-3">
          <span className="font-display text-6xl font-extrabold text-cherry tabular-nums">%{headline}</span>
          <span className="font-display text-lg font-semibold">{test.headline.label.toLocaleLowerCase("tr")}</span>
        </p>
      )}
      <ul className={`space-y-4 ${headline !== null ? "mt-6" : ""}`}>
        {test.dimensions.map((d, i) => {
          const v = scores[d.id] ?? 0;
          return (
            <li key={d.id}>
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-display font-bold">{d.label}</span>
                <span className="font-display font-bold tabular-nums">%{v}</span>
              </div>
              <div className="mt-1.5 h-4 overflow-hidden rounded-full border-2 border-plum bg-paper">
                <div
                  className="animate-bar h-full"
                  style={{ width: `${Math.max(3, v)}%`, background: result.color, animationDelay: `${i * 90}ms` }}
                />
              </div>
              <div className="mt-1 flex justify-between text-xs text-plum-soft">
                <span>{d.low}</span>
                <span className="text-right">{d.high}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-7 border-t-2 border-dashed border-line pt-6">
        <p className="mb-4 font-display text-lg font-bold">Sonucunu paylaş</p>
        <ShareBar
          shareUrl={shareUrl}
          shareText={shareText}
          imageUrl={`/api/kart/${test.slug}/${result.id}?s=${raw}`}
          fileName={`${test.slug}-${result.id}.png`}
        />
      </div>
      <div className="mt-4">
        <CompareInvite slug={test.slug} s={raw!} testTitle={test.title} />
      </div>
    </div>
  );
}
