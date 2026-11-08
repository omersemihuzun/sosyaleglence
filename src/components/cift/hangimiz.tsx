"use client";

import { useState } from "react";
import type { HangimizSoru } from "@/content/cift/types";

const TUR = 12;
type Secim = 0 | 1 | 2; // 0: 1. kişi, 1: 2. kişi, 2: ikimiz de

function karistir<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const girdi =
  "mt-1.5 w-full rounded-xl border-2 border-plum bg-white px-4 py-3 text-lg font-semibold outline-none focus-visible:ring-4 focus-visible:ring-cherry/30";

/** Ünvan: kimin hangi konularda "daha çok" olduğuna göre tur sonu karnesi */
function karne(adA: string, adB: string, a: number, b: number, ortak: number) {
  if (ortak >= TUR / 2) return `İki damla su gibisiniz: ${ortak} soruda "ikimiz de" dediniz.`;
  if (Math.abs(a - b) <= 1) return "Dengeli bir ikili: kusurlar da kahkahalar da adil paylaşılmış.";
  const one = a > b ? adA : adB;
  return `${one} bu turun açık ara yıldızı. Bunu bir süre duyacak.`;
}

/** Hangimiz daha çok...? Tek telefonda, her soruda birini seçin; tur sonunda karne. */
export function Hangimiz({ sorular }: { sorular: HangimizSoru[] }) {
  const [adlar, setAdlar] = useState<[string, string]>(["", ""]);
  const [deste, setDeste] = useState<HangimizSoru[] | null>(null);
  const [sira, setSira] = useState(0);
  const [secimler, setSecimler] = useState<Secim[]>([]);
  const [kullanilan, setKullanilan] = useState<Set<string>>(new Set());

  const ad = (i: 0 | 1) => adlar[i].trim() || (i === 0 ? "Ben" : "O");

  function yeniTur() {
    let havuz = sorular.filter((s) => !kullanilan.has(s.id));
    if (havuz.length < TUR) havuz = sorular; // hepsi görüldüyse baştan
    const d = karistir(havuz).slice(0, TUR);
    setKullanilan((k) => new Set([...(havuz === sorular ? [] : k), ...d.map((x) => x.id)]));
    setDeste(d);
    setSira(0);
    setSecimler([]);
  }

  if (!deste) {
    return (
      <form
        className="sticker space-y-5 bg-white p-5 sm:p-7"
        onSubmit={(e) => {
          e.preventDefault();
          yeniTur();
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {[0, 1].map((i) => (
            <label key={i} className="block">
              <span className="font-display text-lg font-bold">{i + 1}. kişi</span>
              <input
                value={adlar[i]}
                onChange={(e) => setAdlar(i === 0 ? [e.target.value, adlar[1]] : [adlar[0], e.target.value])}
                maxLength={20}
                placeholder={i === 0 ? "ör. Elif" : "ör. Kerem"}
                className={girdi}
              />
            </label>
          ))}
        </div>
        <p className="text-sm text-plum-soft">
          Nasıl oynanır: soruyu sesli okuyun, üçten geriye sayın ve aynı anda birbirinizi gösterin. Sonra ekranda seçin.{" "}
          {TUR} soruluk turlar.
        </p>
        <button
          type="submit"
          className="sticker sticker-press bg-cherry px-6 py-3.5 font-display text-lg font-bold text-white"
        >
          Başlayalım
        </button>
      </form>
    );
  }

  if (sira >= deste.length) {
    const a = secimler.filter((s) => s === 0).length;
    const b = secimler.filter((s) => s === 1).length;
    const ortak = secimler.filter((s) => s === 2).length;
    return (
      <div className="space-y-5" data-karne>
        <div className="sticker bg-blush p-6 text-center sm:p-8">
          <h2 className="font-display text-3xl font-extrabold">Tur karnesi</h2>
          <div className="mt-4 grid grid-cols-3 gap-3 font-display">
            <div>
              <p className="text-4xl font-extrabold tabular-nums">{a}</p>
              <p className="font-bold">{ad(0)}</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold tabular-nums">{ortak}</p>
              <p className="font-bold">İkimiz de</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold tabular-nums">{b}</p>
              <p className="font-bold">{ad(1)}</p>
            </div>
          </div>
          <p className="mt-4 text-lg">{karne(ad(0), ad(1), a, b, ortak)}</p>
        </div>
        <ul className="space-y-1.5">
          {deste.map((s, i) => (
            <li
              key={s.id}
              className="flex items-center justify-between gap-3 rounded-xl border-2 border-plum bg-white px-4 py-2 text-[15px]"
            >
              <span>
                <span aria-hidden>{s.emoji} </span>
                Daha çok {s.metin}
              </span>
              <strong className="shrink-0">{secimler[i] === 2 ? "İkiniz" : ad(secimler[i] as 0 | 1)}</strong>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={yeniTur}
          className="sticker sticker-press bg-cherry px-6 py-3.5 font-display text-lg font-bold text-white"
        >
          {TUR} yeni soru
        </button>
      </div>
    );
  }

  const s = deste[sira];
  const sec = (x: Secim) => {
    setSecimler([...secimler, x]);
    setSira(sira + 1);
  };
  return (
    <div>
      <p className="text-sm font-semibold text-plum-soft tabular-nums">
        Soru {sira + 1}/{deste.length}
      </p>
      <div
        key={s.id}
        className="animate-pop sticker mt-2 bg-white p-6 text-center sm:p-10"
        aria-live="polite"
        data-kart
      >
        <p aria-hidden className="text-6xl">
          {s.emoji}
        </p>
        <p className="mt-4 font-display text-lg font-bold text-plum-soft">Hangimiz daha çok</p>
        <p className="font-display text-3xl leading-tight font-extrabold text-balance">{s.metin}</p>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        <button
          type="button"
          onClick={() => sec(0)}
          className="sticker sticker-press bg-butter px-3 py-4 font-display text-lg font-bold break-words"
        >
          {ad(0)}
        </button>
        <button
          type="button"
          onClick={() => sec(2)}
          className="sticker sticker-press bg-white px-3 py-4 font-display text-lg font-bold"
        >
          İkimiz de
        </button>
        <button
          type="button"
          onClick={() => sec(1)}
          className="sticker sticker-press bg-[#cdeffd] px-3 py-4 font-display text-lg font-bold break-words"
        >
          {ad(1)}
        </button>
      </div>
    </div>
  );
}
