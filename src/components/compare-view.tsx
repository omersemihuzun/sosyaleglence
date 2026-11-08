"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onColor } from "@/lib/color";
import { compatibility, compatibilityText, type CompareSession } from "@/lib/compare";
import { decodeScores, pickResult } from "@/lib/scoring";
import type { Test } from "@/lib/types";
import { Quiz } from "./quiz";

type State =
  { kind: "loading" } | { kind: "error"; message: string } | { kind: "ready"; session: CompareSession; owner: boolean };

export function CompareView({ test, code }: { test: Test; code: string }) {
  const [state, setState] = useState<State>({ kind: "loading" });
  const [name, setName] = useState("");
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch(`/api/cift/${code}`)
      .then(async (r) => {
        const data = await r.json();
        if (!alive) return;
        if (!r.ok) return setState({ kind: "error", message: data.error ?? "Karşılaştırma bulunamadı" });
        let owner = false;
        try {
          owner = localStorage.getItem(`cift:sahip:${code}`) === "1";
        } catch {
          /* sorun değil */
        }
        setState({ kind: "ready", session: data, owner });
      })
      .catch(() => alive && setState({ kind: "error", message: "Bağlantı kurulamadı, tekrar dene." }));
    return () => {
      alive = false;
    };
  }, [code]);

  if (state.kind === "loading") return <div className="sticker h-64 bg-white" aria-busy="true" />;
  if (state.kind === "error") {
    return (
      <div className="sticker bg-white p-6">
        <p className="font-display text-xl font-bold">{state.message}</p>
        <Link
          href={`/testler/${test.slug}`}
          className="mt-4 inline-block font-display font-bold text-cherry hover:underline"
        >
          Testi baştan çöz
        </Link>
      </div>
    );
  }

  const { session, owner } = state;
  const aName = session.a.name || "Arkadaşın";

  // Henüz ikinci kişi yok
  if (!session.b) {
    if (owner) {
      return (
        <div className="sticker bg-white p-6">
          <p className="font-display text-2xl font-bold">Onun cevabını bekliyoruz</p>
          <p className="mt-2 text-plum-soft">
            Bağlantıyı gönderdiğin kişi testi çözünce karşılaştırma bu sayfada görünecek. Sayfayı sonra
            yenileyebilirsin.
          </p>
        </div>
      );
    }
    if (playing) return <Quiz test={test} compare={{ code, name }} />;
    return (
      <div className="sticker bg-white p-6 sm:p-8">
        <p className="font-display text-2xl font-bold text-balance">
          {aName} seni &quot;{test.title}&quot; testinde karşılaştırmaya çağırıyor
        </p>
        <p className="mt-2 text-plum-soft">
          Testi çöz, ikinizin sonuçlarını ve uyum yüzdenizi yan yana görün. {aName}&apos;in sonucunu testi bitirince
          göreceksin.
        </p>
        <label className="mt-5 block text-sm font-semibold" htmlFor="cift-isim-b">
          Adın (isteğe bağlı)
        </label>
        <input
          id="cift-isim-b"
          value={name}
          onChange={(e) => setName(e.target.value.slice(0, 24))}
          maxLength={24}
          autoComplete="off"
          className="mt-1 w-full rounded-xl border-2 border-plum bg-white px-3 py-2.5 sm:max-w-xs"
        />
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="sticker sticker-press mt-5 block bg-cherry px-6 py-3.5 font-display text-lg font-bold text-white"
        >
          Testi çöz ve karşılaştır
        </button>
      </div>
    );
  }

  const sa = decodeScores(test, session.a.s)!;
  const sb = decodeScores(test, session.b.s)!;
  const ra = pickResult(test, sa);
  const rb = pickResult(test, sb);
  const uyum = compatibility(test, sa, sb, ra, rb);
  const bName = session.b.name || "Sen";
  const people = [
    { name: aName, result: ra, color: "var(--color-cherry)" },
    { name: bName, result: rb, color: "var(--color-plum)" },
  ];

  return (
    <div className="space-y-6">
      <div className="sticker animate-pop bg-butter p-6 text-center sm:p-8">
        <p className="font-semibold">Uyumunuz</p>
        <p className="font-display text-7xl font-extrabold tabular-nums sm:text-8xl">%{uyum}</p>
        <p className="mx-auto mt-2 max-w-md text-lg">{compatibilityText(uyum)}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {people.map((p) => (
          <Link
            key={p.name + p.result.id}
            href={`/testler/${test.slug}/sonuc/${p.result.id}`}
            className="sticker sticker-press flex items-center gap-4 p-5"
            style={onColor(p.result.color)}
          >
            <span aria-hidden className="text-5xl">
              {p.result.emoji}
            </span>
            <span>
              <span className="block text-sm">{p.name}</span>
              <span className="font-display text-2xl leading-tight font-bold">{p.result.name}</span>
            </span>
          </Link>
        ))}
      </div>

      <div className="sticker bg-white p-6">
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          {people.map((p) => (
            <span key={p.name} className="flex items-center gap-2">
              <span aria-hidden className="size-3 rounded-full" style={{ background: p.color }} />
              {p.name}
            </span>
          ))}
        </div>
        <ul className="mt-5 space-y-5">
          {test.dimensions.map((d) => (
            <li key={d.id}>
              <div className="flex justify-between gap-3">
                <span className="font-display font-bold">{d.label}</span>
                <span className="text-sm text-plum-soft tabular-nums">
                  %{sa[d.id]} / %{sb[d.id]}
                </span>
              </div>
              {[sa, sb].map((sc, i) => (
                <div key={i} className="mt-1.5 h-3 overflow-hidden rounded-full border-2 border-plum bg-paper">
                  <div
                    className="animate-bar h-full"
                    style={{ width: `${Math.max(3, sc[d.id])}%`, background: people[i].color }}
                  />
                </div>
              ))}
              <div className="mt-1 flex justify-between text-xs text-plum-soft">
                <span>{d.low}</span>
                <span className="text-right">{d.high}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Link href="/testler" className="inline-block font-display font-bold text-cherry hover:underline">
        Başka bir testte karşılaştır
      </Link>
    </div>
  );
}
