"use client";

import { useState } from "react";
import type { DcKart, DcSeviye } from "@/content/cift/types";

const SEVIYELER: { id: DcSeviye; ad: string; aciklama: string; emoji: string }[] = [
  { id: 1, ad: "Tatlı", aciklama: "Isınma turu, gülümseten sorular", emoji: "🍬" },
  { id: 2, ad: "Eğlenceli", aciklama: "Kahkaha garantili görevler", emoji: "🎉" },
  { id: 3, ad: "Cesur", aciklama: "Biraz utandırır, çok güldürür", emoji: "🔥" },
];

const girdi =
  "mt-1.5 w-full rounded-xl border-2 border-plum bg-white px-4 py-3 text-lg font-semibold outline-none focus-visible:ring-4 focus-visible:ring-cherry/30";

/**
 * Çiftler için doğruluk mu cesaret mi: isimler, seviye, sırayla oynanır.
 * Her kart pas geçilebilir; aynı oyunda kart tekrar etmez.
 */
export function DogrulukCesaret({ kartlar }: { kartlar: DcKart[] }) {
  const [adlar, setAdlar] = useState<[string, string]>(["", ""]);
  const [basladi, setBasladi] = useState(false);
  const [seviye, setSeviye] = useState<DcSeviye>(1);
  const [sira, setSira] = useState(0);
  const [kart, setKart] = useState<DcKart | null>(null);
  const [goruldu, setGoruldu] = useState<Set<string>>(new Set());
  const [puan, setPuan] = useState<[number, number]>([0, 0]);

  const isim = (i: number) => adlar[i].trim() || (i === 0 ? "1. oyuncu" : "2. oyuncu");

  function cek(tur: DcKart["tur"]) {
    let havuz = kartlar.filter((k) => k.tur === tur && k.seviye === seviye && !goruldu.has(k.id));
    if (havuz.length === 0) {
      // Bu seviyede kart bitti: görülenleri bu tür ve seviye için sıfırla
      havuz = kartlar.filter((k) => k.tur === tur && k.seviye === seviye);
      setGoruldu(new Set([...goruldu].filter((id) => !havuz.some((k) => k.id === id))));
    }
    const k = havuz[Math.floor(Math.random() * havuz.length)];
    setKart(k);
    setGoruldu((g) => new Set(g).add(k.id));
  }

  function bitir(yapti: boolean) {
    if (yapti) setPuan((p) => (sira === 0 ? [p[0] + 1, p[1]] : [p[0], p[1] + 1]));
    setKart(null);
    setSira((s) => 1 - s);
  }

  if (!basladi) {
    return (
      <form
        className="sticker space-y-5 bg-white p-5 sm:p-7"
        onSubmit={(e) => {
          e.preventDefault();
          setBasladi(true);
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {[0, 1].map((i) => (
            <label key={i} className="block">
              <span className="font-display text-lg font-bold">{i + 1}. oyuncu</span>
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
        <SeviyeSecici seviye={seviye} onSec={setSeviye} />
        <button
          type="submit"
          className="sticker sticker-press bg-cherry px-6 py-3.5 font-display text-lg font-bold text-white"
        >
          Oyunu başlat
        </button>
        <p className="text-sm text-plum-soft">Kural: istemediğin kartı pas geçebilirsin, kimse sorgulamaz.</p>
      </form>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 font-display font-bold">
        <span className="rounded-full border-2 border-plum bg-white px-4 py-1.5 tabular-nums">
          {isim(0)} {puan[0]} · {puan[1]} {isim(1)}
        </span>
        <SeviyeSecici seviye={seviye} onSec={setSeviye} kucuk />
      </div>

      {!kart ? (
        <div className="sticker bg-white p-6 text-center sm:p-8">
          <p className="text-plum-soft">Sıra sende</p>
          <p className="font-display text-4xl font-extrabold">{isim(sira)}</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => cek("dogruluk")}
              className="sticker sticker-press bg-[#cdeffd] px-4 py-6 font-display text-2xl font-extrabold"
            >
              <span aria-hidden className="block text-4xl">
                🗣️
              </span>
              Doğruluk
            </button>
            <button
              type="button"
              onClick={() => cek("cesaret")}
              className="sticker sticker-press bg-butter px-4 py-6 font-display text-2xl font-extrabold"
            >
              <span aria-hidden className="block text-4xl">
                ⚡
              </span>
              Cesaret
            </button>
          </div>
        </div>
      ) : (
        <div className="animate-pop sticker bg-blush p-6 sm:p-10" aria-live="polite" data-kart>
          <p className="text-sm font-bold tracking-wide uppercase">
            {isim(sira)} · {kart.tur === "dogruluk" ? "Doğruluk" : "Cesaret"}
          </p>
          <p className="my-6 font-display text-3xl leading-tight font-bold text-balance">{kart.metin}</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => bitir(true)}
              className="sticker sticker-press bg-cherry px-4 py-3 font-display text-lg font-bold text-white"
            >
              {kart.tur === "dogruluk" ? "Cevapladı" : "Yaptı"} (+1)
            </button>
            <button
              type="button"
              onClick={() => bitir(false)}
              className="sticker sticker-press bg-white px-4 py-3 font-display text-lg font-bold"
            >
              Pas
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function SeviyeSecici({
  seviye,
  onSec,
  kucuk = false,
}: {
  seviye: DcSeviye;
  onSec: (s: DcSeviye) => void;
  kucuk?: boolean;
}) {
  return (
    <fieldset>
      <legend className={kucuk ? "sr-only" : "font-display text-lg font-bold"}>Seviye</legend>
      <div className={`flex flex-wrap gap-2 ${kucuk ? "" : "mt-2"}`}>
        {SEVIYELER.map((s) => (
          <button
            key={s.id}
            type="button"
            aria-pressed={seviye === s.id}
            onClick={() => onSec(s.id)}
            title={s.aciklama}
            className={`min-h-10 rounded-full border-2 border-plum px-4 font-display font-semibold ${
              seviye === s.id ? "bg-plum text-paper" : "bg-white hover:bg-blush"
            }`}
          >
            <span aria-hidden>{s.emoji} </span>
            {s.ad}
          </button>
        ))}
      </div>
      {!kucuk && <p className="mt-2 text-sm text-plum-soft">{SEVIYELER.find((s) => s.id === seviye)?.aciklama}</p>}
    </fieldset>
  );
}
