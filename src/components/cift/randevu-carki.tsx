"use client";

import { useState } from "react";
import type { RandevuButce, RandevuFikri, RandevuYer } from "@/content/cift/types";

const DILIM = 8;
const RENKLER = ["#ffd6de", "#ffe066", "#cdeffd", "#d9f99d", "#e9d5ff", "#fed7aa", "#bbf7d0", "#fbcfe8"];
const BUTCE: Record<RandevuButce, string> = { 0: "Ücretsiz", 1: "Uygun", 2: "Özel gün" };

function karistir<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Secici<T extends string | number>({
  baslik,
  secenekler,
  deger,
  onSec,
}: {
  baslik: string;
  secenekler: { id: T | "hepsi"; ad: string }[];
  deger: T | "hepsi";
  onSec: (v: T | "hepsi") => void;
}) {
  return (
    <fieldset>
      <legend className="font-display font-bold">{baslik}</legend>
      <div className="mt-1.5 flex flex-wrap gap-2">
        {secenekler.map((s) => (
          <button
            key={String(s.id)}
            type="button"
            aria-pressed={deger === s.id}
            onClick={() => onSec(s.id)}
            className={`min-h-10 rounded-full border-2 border-plum px-4 font-display font-semibold ${
              deger === s.id ? "bg-plum text-paper" : "bg-white hover:bg-blush"
            }`}
          >
            {s.ad}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

/** Randevu çarkı: filtrele, çevir, 8 dilimden biri bu akşamın planı olur. */
export function RandevuCarki({ fikirler }: { fikirler: RandevuFikri[] }) {
  const [yer, setYer] = useState<RandevuYer | "hepsi">("hepsi");
  const [butce, setButce] = useState<RandevuButce | "hepsi">("hepsi");
  const [dilimler, setDilimler] = useState<RandevuFikri[]>(() => karistir(fikirler).slice(0, DILIM));
  const [aci, setAci] = useState(0);
  const [donuyor, setDonuyor] = useState(false);
  const [sonuc, setSonuc] = useState<RandevuFikri | null>(null);

  function filtreUygula(y: RandevuYer | "hepsi", b: RandevuButce | "hepsi") {
    const havuz = fikirler.filter((f) => (y === "hepsi" || f.yer === y) && (b === "hepsi" || f.butce === b));
    setDilimler(karistir(havuz).slice(0, DILIM));
    setSonuc(null);
  }

  function cevir() {
    if (donuyor || dilimler.length === 0) return;
    const hedef = Math.floor(Math.random() * dilimler.length);
    const dilimAci = 360 / dilimler.length;
    // Gösterge üstte (0°). Hedef dilimin ortası göstergeye gelecek şekilde, en az 5 tam tur
    const durus = 360 - (hedef * dilimAci + dilimAci / 2);
    const azalt = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const yeni = aci - (aci % 360) + (azalt ? 360 : 360 * 5) + durus;
    setSonuc(null);
    setDonuyor(true);
    setAci(yeni);
    window.setTimeout(
      () => {
        setDonuyor(false);
        setSonuc(dilimler[hedef]);
      },
      azalt ? 50 : 3600,
    );
  }

  const n = dilimler.length;
  const dilimAci = n ? 360 / n : 360;
  const gradient = dilimler
    .map((_, i) => `${RENKLER[i % RENKLER.length]} ${i * dilimAci}deg ${(i + 1) * dilimAci}deg`)
    .join(", ");

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
      <div className="space-y-4">
        <Secici<RandevuYer>
          baslik="Nerede?"
          secenekler={[
            { id: "hepsi", ad: "Fark etmez" },
            { id: "ev", ad: "Evde" },
            { id: "disari", ad: "Dışarıda" },
          ]}
          deger={yer}
          onSec={(v) => {
            setYer(v);
            filtreUygula(v, butce);
          }}
        />
        <Secici<RandevuButce>
          baslik="Bütçe?"
          secenekler={[
            { id: "hepsi", ad: "Fark etmez" },
            { id: 0, ad: BUTCE[0] },
            { id: 1, ad: BUTCE[1] },
            { id: 2, ad: BUTCE[2] },
          ]}
          deger={butce}
          onSec={(v) => {
            setButce(v);
            filtreUygula(yer, v);
          }}
        />
        <ol className="grid gap-1.5 text-[15px] sm:grid-cols-2" aria-label="Çarktaki fikirler">
          {dilimler.map((f, i) => (
            <li key={f.id} className="flex items-center gap-2">
              <span
                aria-hidden
                className="size-3 shrink-0 rounded-full border border-plum"
                style={{ background: RENKLER[i % RENKLER.length] }}
              />
              <span aria-hidden>{f.emoji}</span> {f.baslik}
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative size-72 sm:size-80">
          <span
            aria-hidden
            className="absolute top-[-6px] left-1/2 z-10 size-0 -translate-x-1/2 border-x-[14px] border-t-[24px] border-x-transparent border-t-plum"
          />
          <div
            aria-hidden
            className="size-full rounded-full border-4 border-plum shadow-[5px_6px_0_0_var(--color-plum)]"
            style={{
              background: n ? `conic-gradient(${gradient})` : "#fff",
              transform: `rotate(${aci}deg)`,
              transition: donuyor ? "transform 3.5s cubic-bezier(0.17, 0.67, 0.12, 1)" : "none",
            }}
          >
            {dilimler.map((f, i) => (
              <span
                key={f.id}
                className="absolute top-1/2 left-1/2 text-3xl"
                style={{
                  // Önce ortala, sonra dilimin açısına döndür, sonra merkezden dışa it
                  transform: `translate(-50%, -50%) rotate(${i * dilimAci + dilimAci / 2}deg) translateY(-92px)`,
                }}
              >
                {f.emoji}
              </span>
            ))}
          </div>
          <span
            aria-hidden
            className="absolute top-1/2 left-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-plum bg-cherry"
          />
        </div>
        <button
          type="button"
          onClick={cevir}
          disabled={donuyor || n === 0}
          className="sticker sticker-press mt-6 bg-cherry px-8 py-3.5 font-display text-xl font-bold text-white disabled:opacity-60"
        >
          {donuyor ? "Dönüyor…" : sonuc ? "Bir daha çevir" : "Çarkı çevir"}
        </button>
        {n === 0 && <p className="mt-3 text-plum-soft">Bu seçimlere uyan fikir yok, filtreyi değiştir.</p>}
      </div>

      <div className="lg:col-span-2" aria-live="polite">
        {sonuc && (
          <div className="animate-pop sticker bg-butter p-6 sm:p-8" data-sonuc>
            <p className="text-sm font-bold tracking-wide uppercase">
              Bu akşamın planı · {sonuc.yer === "ev" ? "Evde" : "Dışarıda"} · {BUTCE[sonuc.butce]}
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold">
              <span aria-hidden>{sonuc.emoji} </span>
              {sonuc.baslik}
            </h2>
            <p className="mt-2 text-lg">{sonuc.aciklama}</p>
          </div>
        )}
      </div>
    </div>
  );
}
