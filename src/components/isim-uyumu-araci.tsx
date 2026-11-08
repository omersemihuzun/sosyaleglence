"use client";

import { useEffect, useId, useRef, useState } from "react";
import { isimUyumu, type IsimUyumu } from "@/lib/isim-uyumu";

/** Puanı 0'dan yukarı sayar; hareket azaltma tercihinde doğrudan gösterir. */
function useSayac(hedef: number | null) {
  const [deger, setDeger] = useState(0);
  useEffect(() => {
    if (hedef === null) return;
    let raf = 0;
    const bas = performance.now();
    const sure = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1100;
    const adim = (t: number) => {
      const p = sure ? Math.min(1, (t - bas) / sure) : 1;
      setDeger(Math.round(hedef * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(adim);
    };
    raf = requestAnimationFrame(adim);
    return () => cancelAnimationFrame(raf);
  }, [hedef]);
  return deger;
}

export function IsimUyumuAraci({ siteUrl }: { siteUrl: string }) {
  const [ad1, setAd1] = useState("");
  const [ad2, setAd2] = useState("");
  const [sonuc, setSonuc] = useState<IsimUyumu | null>(null);
  const [hata, setHata] = useState<string | null>(null);
  const [durum, setDurum] = useState<string | null>(null);
  const [kartHazir, setKartHazir] = useState(false);
  const sayac = useSayac(sonuc?.puan ?? null);
  const sonucRef = useRef<HTMLDivElement>(null);
  const id = useId();

  function hesapla(e: React.FormEvent) {
    e.preventDefault();
    const r = isimUyumu(ad1, ad2);
    if (!r) {
      setHata("İki ismi de yaz (harflerle).");
      setSonuc(null);
      return;
    }
    setHata(null);
    setDurum(null);
    setSonuc(r);
    requestAnimationFrame(() => sonucRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }));
  }

  const paylasMetni = sonuc
    ? `${sonuc.a} ❤️ ${sonuc.b}: isim uyumumuz %${sonuc.puan} çıktı (${sonuc.baslik}). Sen de dene:`
    : "";

  async function story() {
    if (!sonuc) return;
    setKartHazir(true);
    setDurum(null);
    try {
      const { isimKartiOlustur } = await import("@/lib/client/isim-kart");
      const blob = await isimKartiOlustur(sonuc, new URL(siteUrl).host.replace(/^www\./, ""));
      const file = new File([blob], "isim-uyumu.png", { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], text: `${paylasMetni} ${siteUrl}` });
      } else {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = file.name;
        a.click();
        URL.revokeObjectURL(a.href);
        setDurum("Kart indirildi. Story'ne ekleyebilirsin.");
      }
    } catch (e) {
      if ((e as Error).name !== "AbortError") setDurum("Kart hazırlanamadı, tekrar dene.");
    } finally {
      setKartHazir(false);
    }
  }

  async function kopyala() {
    try {
      await navigator.clipboard.writeText(`${paylasMetni} ${siteUrl}`);
      setDurum("Sonuç kopyalandı.");
    } catch {
      setDurum(`${paylasMetni} ${siteUrl}`);
    }
  }

  const girdi =
    "mt-1.5 w-full rounded-xl border-2 border-plum bg-white px-4 py-3 text-lg font-semibold outline-none focus-visible:ring-4 focus-visible:ring-cherry/30";

  return (
    <div className="space-y-6">
      <form onSubmit={hesapla} className="sticker space-y-4 bg-white p-5 sm:p-7" noValidate>
        <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
          <label className="block" htmlFor={`${id}-1`}>
            <span className="font-display text-lg font-bold">Senin adın</span>
            <input
              id={`${id}-1`}
              value={ad1}
              onChange={(e) => setAd1(e.target.value)}
              maxLength={30}
              autoComplete="off"
              placeholder="ör. Elif"
              className={girdi}
            />
          </label>
          <span aria-hidden className="hidden pb-3 text-3xl sm:block">
            ❤️
          </span>
          <label className="block" htmlFor={`${id}-2`}>
            <span className="font-display text-lg font-bold">Onun adı</span>
            <input
              id={`${id}-2`}
              value={ad2}
              onChange={(e) => setAd2(e.target.value)}
              maxLength={30}
              autoComplete="off"
              placeholder="ör. Kerem"
              className={girdi}
            />
          </label>
        </div>
        <button
          type="submit"
          data-hesapla
          className="sticker sticker-press w-full bg-cherry px-6 py-3.5 font-display text-lg font-bold text-white sm:w-auto"
        >
          Uyumumuzu hesapla
        </button>
        <p className="min-h-5 text-sm font-semibold text-cherry" role="alert">
          {hata}
        </p>
      </form>

      <div ref={sonucRef} aria-live="polite">
        {sonuc && (
          <div className="sticker -rotate-[0.4deg] bg-blush p-6 sm:p-8" data-sonuc>
            <p className="text-center font-display text-xl font-bold">
              {sonuc.a} <span aria-hidden>❤️</span>
              <span className="sr-only">ve</span> {sonuc.b}
            </p>
            <p className="mt-2 text-center font-display text-7xl font-extrabold text-cherry tabular-nums sm:text-8xl">
              <span className="sr-only">Uyum puanı: </span>%{sayac}
            </p>
            <h2 className="mt-2 text-center font-display text-2xl font-extrabold">{sonuc.baslik}</h2>
            <p className="mx-auto mt-3 max-w-prose text-center leading-relaxed">{sonuc.metin}</p>
            {sonuc.ayniIsim && (
              <p className="mt-3 text-center text-sm font-semibold">Adaş çift! İsim uyumunda bu her zaman artı puan.</p>
            )}

            <ul className="mx-auto mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
              {sonuc.alt.map((s) => (
                <li key={s.id} className="rounded-xl border-2 border-plum bg-white p-3">
                  <div className="flex justify-between font-display font-bold">
                    <span>
                      <span aria-hidden>{s.emoji} </span>
                      {s.ad}
                    </span>
                    <span>%{s.puan}</span>
                  </div>
                  <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-paper" aria-hidden>
                    <div className="h-full rounded-full bg-cherry" style={{ width: `${s.puan}%` }} />
                  </div>
                </li>
              ))}
            </ul>

            <div className="mx-auto mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={story}
                disabled={kartHazir}
                data-story
                className="sticker sticker-press bg-butter px-5 py-3.5 font-display text-lg font-bold disabled:opacity-60 sm:col-span-2"
              >
                {kartHazir ? "Kart hazırlanıyor…" : "Story kartını paylaş"}
              </button>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${paylasMetni} ${siteUrl}`)}`}
                target="_blank"
                rel="noopener"
                className="sticker sticker-press bg-[#25D366] px-5 py-3 text-center font-display font-bold text-plum"
              >
                WhatsApp&apos;ta gönder
              </a>
              <button type="button" onClick={kopyala} className="sticker sticker-press bg-white px-5 py-3 font-display font-bold">
                Sonucu kopyala
              </button>
            </div>
            <p className="mt-3 min-h-5 text-center text-sm text-plum-soft" role="status">
              {durum}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
