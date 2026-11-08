"use client";

import Link from "next/link";
import { useState } from "react";

type Secenek = { slug: string; ad: string; emoji: string };

/**
 * İki burç seç, uyum sayfasına git. Çift adresi burç sırasına göre (Koç'tan Balık'a) kanonik kurulur,
 * böylece "Aslan + Koç" seçimi de /burc-uyumu/koc-ve-aslan sayfasına gider.
 */
export function BurcUyumAraci({ burclar, baslangic }: { burclar: Secenek[]; baslangic?: string }) {
  const [a, setA] = useState<string | null>(baslangic ?? null);
  const [b, setB] = useState<string | null>(null);

  const index = (s: string) => burclar.findIndex((x) => x.slug === s);
  const hedef =
    a && b ? (index(a) <= index(b) ? `/burc-uyumu/${a}-ve-${b}` : `/burc-uyumu/${b}-ve-${a}`) : null;
  const adOf = (s: string | null) => burclar.find((x) => x.slug === s)?.ad;

  function Satir({ label, value, onChange }: { label: string; value: string | null; onChange: (s: string) => void }) {
    return (
      <fieldset>
        <legend className="font-display text-lg font-bold">{label}</legend>
        <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12">
          {burclar.map((x) => {
            const secili = value === x.slug;
            return (
              <button
                key={x.slug}
                type="button"
                onClick={() => onChange(x.slug)}
                aria-pressed={secili}
                className={`flex flex-col items-center gap-0.5 rounded-xl border-2 border-plum px-1 py-2 text-xs font-semibold transition-colors ${
                  secili ? "bg-plum text-paper" : "bg-white hover:bg-blush"
                }`}
              >
                <span aria-hidden className="text-2xl leading-none">
                  {x.emoji}
                </span>
                {x.ad}
              </button>
            );
          })}
        </div>
      </fieldset>
    );
  }

  return (
    <div className="sticker space-y-5 bg-white p-5 sm:p-7">
      {Satir({ label: "Senin burcun", value: a, onChange: setA })}
      {Satir({ label: "Onun burcu", value: b, onChange: setB })}
      <div aria-live="polite" className="flex min-h-14 flex-wrap items-center gap-3">
        {hedef ? (
          <Link
            href={hedef}
            className="sticker sticker-press bg-cherry px-6 py-3.5 font-display text-lg font-bold text-white"
          >
            {adOf(a)} ve {adOf(b)} uyumunu gör
          </Link>
        ) : (
          <p className="text-plum-soft">İki burcu da seç, uyumunuzu gösterelim.</p>
        )}
      </div>
    </div>
  );
}
