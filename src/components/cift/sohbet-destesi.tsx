"use client";

import { useEffect, useMemo, useState } from "react";
import type { SohbetKarti, SohbetKategori } from "@/content/cift/types";

const KATEGORILER: { id: SohbetKategori; ad: string; emoji: string; renk: string }[] = [
  { id: "eglenceli", ad: "Eğlenceli", emoji: "😄", renk: "#ffe066" },
  { id: "derin", ad: "Derin", emoji: "🌊", renk: "#cdeffd" },
  { id: "anilar", ad: "Anılar", emoji: "📸", renk: "#ffd6de" },
  { id: "gelecek", ad: "Gelecek", emoji: "🔭", renk: "#d9f99d" },
  { id: "hayaller", ad: "Hayaller", emoji: "✨", renk: "#e9d5ff" },
];

function karistir<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Randevu akşamı için soru destesi: kategori seç, kart kart ilerle. Ok tuşlarıyla da çalışır. */
export function SohbetDestesi({ kartlar }: { kartlar: SohbetKarti[] }) {
  const [secili, setSecili] = useState<Set<SohbetKategori>>(() => new Set(KATEGORILER.map((k) => k.id)));
  const [tohum, setTohum] = useState(0);
  const [sira, setSira] = useState(0);

  const deste = useMemo(
    () => karistir(kartlar.filter((k) => secili.has(k.kategori))),
    // tohum değişince yeniden karıştır
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [kartlar, secili, tohum],
  );
  const kart = deste[sira];
  const kat = KATEGORILER.find((k) => k.id === kart?.kategori);

  useEffect(() => {
    const tus = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      if (e.key === "ArrowRight") setSira((s) => Math.min(s + 1, deste.length - 1));
      if (e.key === "ArrowLeft") setSira((s) => Math.max(s - 1, 0));
    };
    window.addEventListener("keydown", tus);
    return () => window.removeEventListener("keydown", tus);
  }, [deste.length]);

  function degistir(id: SohbetKategori) {
    const s = new Set(secili);
    if (s.has(id)) {
      if (s.size === 1) return; // en az bir kategori kalsın
      s.delete(id);
    } else s.add(id);
    setSecili(s);
    setSira(0);
  }

  return (
    <div>
      <fieldset>
        <legend className="font-display text-lg font-bold">Hangi sorular gelsin?</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {KATEGORILER.map((k) => (
            <button
              key={k.id}
              type="button"
              aria-pressed={secili.has(k.id)}
              onClick={() => degistir(k.id)}
              className={`min-h-10 rounded-full border-2 border-plum px-4 font-display font-semibold ${
                secili.has(k.id) ? "bg-plum text-paper" : "bg-white hover:bg-blush"
              }`}
            >
              <span aria-hidden>{k.emoji} </span>
              {k.ad}
            </button>
          ))}
        </div>
      </fieldset>

      {kart && (
        <div
          key={kart.id}
          className="animate-pop sticker mt-6 flex min-h-72 flex-col justify-between p-6 sm:min-h-80 sm:p-10"
          style={{ background: kat?.renk }}
          aria-live="polite"
          data-kart
        >
          <p className="text-sm font-bold tracking-wide uppercase">
            <span aria-hidden>{kat?.emoji} </span>
            {kat?.ad}
          </p>
          <p className="my-6 font-display text-3xl leading-tight font-bold text-balance sm:text-4xl">{kart.metin}</p>
          <p className="text-sm font-semibold tabular-nums">
            {sira + 1} / {deste.length}
          </p>
        </div>
      )}

      <div className="mt-5 grid grid-cols-[auto_1fr_auto] gap-3">
        <button
          type="button"
          onClick={() => setSira((s) => Math.max(s - 1, 0))}
          disabled={sira === 0}
          className="sticker sticker-press bg-white px-5 py-3 font-display font-bold disabled:opacity-50"
        >
          Önceki
        </button>
        {sira + 1 < deste.length ? (
          <button
            type="button"
            onClick={() => setSira((s) => s + 1)}
            className="sticker sticker-press bg-cherry px-5 py-3 font-display text-lg font-bold text-white"
          >
            Sıradaki soru
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setTohum((t) => t + 1);
              setSira(0);
            }}
            className="sticker sticker-press bg-cherry px-5 py-3 font-display text-lg font-bold text-white"
          >
            Deste bitti: baştan karıştır
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            setTohum((t) => t + 1);
            setSira(0);
          }}
          className="sticker sticker-press bg-white px-5 py-3 font-display font-bold"
        >
          Karıştır
        </button>
      </div>
      <p className="mt-3 text-sm text-plum-soft">
        İpucu: sırayla cevaplayın, cevaplar kısa kalırsa &quot;Neden?&quot; diye sorun.
      </p>
    </div>
  );
}
