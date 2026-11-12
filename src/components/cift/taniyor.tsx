"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { TaniyorSoru } from "@/content/cift/types";
import { puanYorumu, TANIYOR_SORU_SAYISI, type TaniyorSonuc } from "@/lib/taniyor";

const YOL = "/cift-oyunlari/beni-ne-kadar-taniyorsun";
const OYUNLARIM = "taniyor:oyunlarim";
type Kayit = { kod: string; anahtar: string; ad: string; at: number };

function okuOyunlar(): Kayit[] {
  try {
    const v = JSON.parse(localStorage.getItem(OYUNLARIM) ?? "[]");
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

function yazOyun(k: Kayit) {
  try {
    localStorage.setItem(OYUNLARIM, JSON.stringify([k, ...okuOyunlar().filter((x) => x.kod !== k.kod)].slice(0, 10)));
  } catch {
    /* depolama kapalı: paylaşım ekranı yine çalışır */
  }
}

function rastgeleSec<T>(arr: T[], n: number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

const girdi =
  "mt-1.5 w-full rounded-xl border-2 border-plum bg-white px-4 py-3 text-lg font-semibold outline-none focus-visible:ring-4 focus-visible:ring-cherry/30";
const anaButon =
  "sticker sticker-press bg-cherry px-6 py-3.5 font-display text-lg font-bold text-white disabled:opacity-60";

/** Soru soru ilerleyen ortak şık ekranı */
function SoruAdimi({
  baslik,
  secenekler,
  sira,
  secili,
  onSec,
  onGeri,
}: {
  baslik: string;
  secenekler: readonly string[];
  sira: number;
  secili: number | undefined;
  onSec: (i: number) => void;
  onGeri: () => void;
}) {
  return (
    <div className="sticker bg-white p-5 sm:p-7">
      <div className="flex items-center justify-between text-sm font-semibold text-plum-soft">
        <span>
          Soru {sira + 1}/{TANIYOR_SORU_SAYISI}
        </span>
        {sira > 0 && (
          <button
            type="button"
            onClick={onGeri}
            className="min-h-9 rounded-full border-2 border-plum px-3.5 hover:bg-blush"
          >
            Geri
          </button>
        )}
      </div>
      <div
        className="mt-2 h-2 overflow-hidden rounded-full border border-plum bg-paper"
        role="progressbar"
        aria-label="İlerleme"
        aria-valuemin={0}
        aria-valuemax={TANIYOR_SORU_SAYISI}
        aria-valuenow={sira + 1}
      >
        <div className="h-full bg-cherry" style={{ width: `${((sira + 1) / TANIYOR_SORU_SAYISI) * 100}%` }} />
      </div>
      <h2 className="mt-5 font-display text-2xl leading-snug font-bold text-balance">{baslik}</h2>
      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
        {secenekler.map((s, i) => (
          <li key={s}>
            <button
              type="button"
              data-secenek
              aria-pressed={secili === i}
              onClick={() => onSec(i)}
              className={`sticker sticker-press w-full px-4 py-3.5 text-left font-semibold ${secili === i ? "bg-butter" : "bg-paper"}`}
            >
              {s}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Paylas({ kod, ad }: { kod: string; ad: string }) {
  const [durum, setDurum] = useState<string | null>(null);
  const url = typeof window === "undefined" ? "" : `${window.location.origin}${YOL}/${kod}`;
  const metin = `${ad} seni ne kadar tanıdığını merak ediyor. 10 soru, bakalım kaç tane bileceksin:`;
  async function kopyala() {
    try {
      await navigator.clipboard.writeText(url);
      setDurum("Bağlantı kopyalandı.");
    } catch {
      setDurum(url);
    }
  }
  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(`${metin} ${url}`)}`}
          target="_blank"
          rel="noopener"
          className="sticker sticker-press bg-[#25D366] px-5 py-3 text-center font-display font-bold text-plum"
        >
          WhatsApp&apos;ta gönder
        </a>
        <button
          type="button"
          onClick={kopyala}
          className="sticker sticker-press bg-white px-5 py-3 font-display font-bold"
        >
          Linki kopyala
        </button>
      </div>
      <p className="min-h-5 text-sm break-all text-plum-soft" role="status">
        {durum}
      </p>
    </div>
  );
}

/** Kuranın gördüğü sonuç paneli */
function Sonuclar({ kod, anahtar, sorular }: { kod: string; anahtar: string; sorular: TaniyorSoru[] }) {
  const [veri, setVeri] = useState<{ sonuclar: TaniyorSonuc[]; sorular: string[]; cevaplar: number[] } | null>(null);
  const [hata, setHata] = useState<string | null>(null);
  const yukle = useCallback(async () => {
    setHata(null);
    try {
      const r = await fetch(`/api/taniyor/${kod}/sonuclar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ anahtar }),
      });
      const d = await r.json();
      if (!r.ok) return setHata(d.error ?? "Sonuçlar alınamadı");
      setVeri(d);
    } catch {
      setHata("Bağlantı kurulamadı.");
    }
  }, [kod, anahtar]);
  useEffect(() => {
    // Sayfa açılınca bir kez çek; sonrası "Yenile" ile
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void yukle();
  }, [yukle]);

  const byId = new Map(sorular.map((s) => [s.id, s]));
  return (
    <div className="sticker bg-white p-5 sm:p-7" data-sonuclar>
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-display text-2xl font-bold">Kim ne kadar bildi?</h2>
        <button
          type="button"
          onClick={yukle}
          className="min-h-9 rounded-full border-2 border-plum px-3.5 font-display font-semibold hover:bg-blush"
        >
          Yenile
        </button>
      </div>
      {hata && <p className="mt-3 text-cherry">{hata}</p>}
      {veri && veri.sonuclar.length === 0 && (
        <p className="mt-3 text-plum-soft">Henüz kimse çözmedi. Linki gönderdin mi?</p>
      )}
      {veri && veri.sonuclar.length > 0 && (
        <ul className="mt-4 space-y-2">
          {veri.sonuclar.map((s) => (
            <li
              key={s.at}
              className="flex items-center justify-between rounded-xl border-2 border-plum bg-paper px-4 py-2.5"
            >
              <span className="font-semibold">{s.ad}</span>
              <span className="font-display text-xl font-extrabold tabular-nums">
                {s.puan}/{s.toplam}
              </span>
            </li>
          ))}
        </ul>
      )}
      {veri && (
        <details className="mt-5">
          <summary className="cursor-pointer font-display font-bold">Senin cevapların</summary>
          <ul className="mt-2 space-y-1 text-[15px]">
            {veri.sorular.map((id, i) => {
              const s = byId.get(id);
              return s ? (
                <li key={id}>
                  {s.soru} <strong>{s.secenekler[veri.cevaplar[i]]}</strong>
                </li>
              ) : null;
            })}
          </ul>
        </details>
      )}
    </div>
  );
}

/** Oyunu kur: ad → 10 soru → paylaş */
export function TaniyorKur({ sorular }: { sorular: TaniyorSoru[] }) {
  const [secilen] = useState(() => rastgeleSec(sorular, TANIYOR_SORU_SAYISI));
  const [ad, setAd] = useState("");
  const [adim, setAdim] = useState(-1);
  const [cevaplar, setCevaplar] = useState<number[]>([]);
  const [gonderiliyor, setGonderiliyor] = useState(false);
  const [hata, setHata] = useState<string | null>(null);
  const [kayit, setKayit] = useState<Kayit | null>(null);
  const [eskiler] = useState(okuOyunlar);

  async function gonder(son: number[]) {
    setGonderiliyor(true);
    setHata(null);
    try {
      const r = await fetch("/api/taniyor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ad, sorular: secilen.map((s) => s.id), cevaplar: son }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error);
      const k: Kayit = { kod: d.kod, anahtar: d.anahtar, ad: ad.trim() || "Sen", at: Date.now() };
      yazOyun(k);
      setKayit(k);
    } catch (e) {
      setHata((e as Error).message || "Oyun kurulamadı, tekrar dene.");
    } finally {
      setGonderiliyor(false);
    }
  }

  function sec(i: number) {
    const next = [...cevaplar];
    next[adim] = i;
    setCevaplar(next);
    if (adim + 1 < TANIYOR_SORU_SAYISI) window.setTimeout(() => setAdim(adim + 1), 200);
    else void gonder(next);
  }

  if (kayit) {
    return (
      <div className="space-y-6">
        <div className="sticker bg-blush p-6 sm:p-8" data-paylas>
          <h2 className="font-display text-3xl font-extrabold">Oyunun hazır!</h2>
          <p className="mt-2 text-lg">
            Linki sevgiline gönder. O tahmin ettikçe sonuçları burada görürsün; bu tarayıcı seni hatırlar.
          </p>
          <div className="mt-5">
            <Paylas kod={kayit.kod} ad={kayit.ad} />
          </div>
        </div>
        <Sonuclar kod={kayit.kod} anahtar={kayit.anahtar} sorular={sorular} />
      </div>
    );
  }

  if (adim === -1) {
    return (
      <div className="space-y-6">
        <form
          className="sticker space-y-4 bg-white p-5 sm:p-7"
          onSubmit={(e) => {
            e.preventDefault();
            setAdim(0);
          }}
        >
          <label className="block">
            <span className="font-display text-lg font-bold">Adın (sevgilin bu adı görecek)</span>
            <input
              value={ad}
              onChange={(e) => setAd(e.target.value)}
              maxLength={24}
              autoComplete="given-name"
              placeholder="ör. Elif"
              className={girdi}
            />
          </label>
          <p className="text-sm text-plum-soft">
            Sana kendinle ilgili 10 soru soracağız. Cevaplar sadece sevgilin tahminlerini gönderince açılır.
          </p>
          <button type="submit" className={anaButon}>
            Soruları cevapla
          </button>
        </form>
        {eskiler.length > 0 && (
          <div className="sticker bg-white p-5">
            <h2 className="font-display text-xl font-bold">Kurduğun oyunlar</h2>
            <ul className="mt-3 space-y-2">
              {eskiler.map((k) => (
                <li key={k.kod}>
                  <Link
                    href={`${YOL}/${k.kod}`}
                    className="font-semibold text-cherry underline-offset-4 hover:underline"
                  >
                    {new Date(k.at).toLocaleDateString("tr-TR")} tarihli oyunun: sonuçlara bak
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  const s = secilen[adim];
  return (
    <div className="space-y-3">
      <SoruAdimi
        baslik={s.soru}
        secenekler={s.secenekler}
        sira={adim}
        secili={cevaplar[adim]}
        onSec={sec}
        onGeri={() => setAdim(adim - 1)}
      />
      {gonderiliyor && <p className="text-plum-soft">Oyunun hazırlanıyor…</p>}
      {hata && (
        <p className="text-cherry" role="alert">
          {hata}{" "}
          <button type="button" className="underline" onClick={() => gonder(cevaplar)}>
            Tekrar dene
          </button>
        </p>
      )}
    </div>
  );
}

type Davet = { ad: string; sorular: string[] };

/** Linkle gelen: tahmin et → puan ve cevaplar. Kuran açarsa sonuç panelini görür. */
export function TaniyorTahmin({ kod, sorular }: { kod: string; sorular: TaniyorSoru[] }) {
  const [davet, setDavet] = useState<Davet | null>(null);
  const [hata, setHata] = useState<string | null>(null);
  const [sahip] = useState(() => okuOyunlar().find((k) => k.kod === kod) ?? null);
  const [ad, setAd] = useState("");
  const [adim, setAdim] = useState(-1);
  const [tahminler, setTahminler] = useState<number[]>([]);
  const [sonuc, setSonuc] = useState<{ puan: number; toplam: number; cevaplar: number[] } | null>(null);

  useEffect(() => {
    if (sahip) return;
    let alive = true;
    fetch(`/api/taniyor/${kod}`)
      .then(async (r) => {
        const d = await r.json();
        if (!alive) return;
        if (!r.ok) setHata(d.error ?? "Oyun bulunamadı");
        else setDavet(d);
      })
      .catch(() => alive && setHata("Bağlantı kurulamadı, tekrar dene."));
    return () => {
      alive = false;
    };
  }, [kod, sahip]);

  const byId = new Map(sorular.map((s) => [s.id, s]));

  if (sahip) {
    return (
      <div className="space-y-6">
        <div className="sticker bg-blush p-6">
          <p className="font-display text-xl font-bold">Bu senin oyunun. Linki paylaş, sonuçlar aşağıda.</p>
          <div className="mt-4">
            <Paylas kod={kod} ad={sahip.ad} />
          </div>
        </div>
        <Sonuclar kod={kod} anahtar={sahip.anahtar} sorular={sorular} />
      </div>
    );
  }
  if (hata) {
    return (
      <div className="sticker bg-white p-6">
        <p className="font-display text-xl font-bold">{hata}</p>
        <Link href={YOL} className="mt-4 inline-block font-display font-bold text-cherry hover:underline">
          Kendi oyununu kur
        </Link>
      </div>
    );
  }
  if (!davet) return <div className="sticker h-64 bg-white" aria-busy="true" />;

  async function gonder(son: number[]) {
    try {
      const r = await fetch(`/api/taniyor/${kod}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ad, tahminler: son }),
      });
      const d = await r.json();
      if (!r.ok) return setHata(d.error ?? "Gönderilemedi");
      setSonuc(d);
    } catch {
      setHata("Bağlantı kurulamadı, tekrar dene.");
    }
  }

  if (sonuc) {
    const y = puanYorumu(sonuc.puan, sonuc.toplam);
    return (
      <div className="space-y-6" data-sonuc>
        <div className="sticker bg-blush p-6 text-center sm:p-8">
          <p className="font-display text-7xl font-extrabold text-cherry tabular-nums">
            {sonuc.puan}/{sonuc.toplam}
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold">{y.baslik}</h2>
          <p className="mx-auto mt-2 max-w-prose">{y.metin}</p>
          <p className="mt-2 text-sm text-plum-soft">{davet.ad} sonucunu görebilir.</p>
        </div>
        <ul className="space-y-2">
          {davet.sorular.map((id, i) => {
            const s = byId.get(id);
            if (!s) return null;
            const dogru = sonuc.cevaplar[i] === tahminler[i];
            return (
              <li key={id} className={`rounded-2xl border-2 border-plum p-4 ${dogru ? "bg-[#dcfce7]" : "bg-white"}`}>
                <p className="font-semibold">{s.tahminSoru}</p>
                <p className="mt-1 text-[15px]">
                  <span aria-hidden>{dogru ? "✅ " : "❌ "}</span>
                  <span className="sr-only">{dogru ? "Doğru. " : "Yanlış. "}</span>
                  Doğrusu: <strong>{s.secenekler[sonuc.cevaplar[i]]}</strong>
                  {!dogru && <span className="text-plum-soft"> (senin tahminin: {s.secenekler[tahminler[i]]})</span>}
                </p>
              </li>
            );
          })}
        </ul>
        <div className="sticker bg-white p-6">
          <p className="font-display text-xl font-bold">Sıra sende: o seni ne kadar tanıyor?</p>
          <Link href={YOL} className={`${anaButon} mt-4 inline-block`}>
            Kendi oyununu kur
          </Link>
        </div>
      </div>
    );
  }

  if (adim === -1) {
    return (
      <form
        className="sticker space-y-4 bg-white p-5 sm:p-7"
        onSubmit={(e) => {
          e.preventDefault();
          setAdim(0);
        }}
      >
        <h2 className="font-display text-2xl font-bold">{davet.ad} seni ne kadar tanıdığını merak ediyor</h2>
        <p className="text-plum-soft">10 soru. Her birinde {davet.ad} için doğru olduğunu düşündüğün şıkkı seç.</p>
        <label className="block">
          <span className="font-display text-lg font-bold">Senin adın</span>
          <input
            value={ad}
            onChange={(e) => setAd(e.target.value)}
            maxLength={24}
            autoComplete="given-name"
            placeholder="ör. Kerem"
            className={girdi}
          />
        </label>
        <button type="submit" className={anaButon}>
          Tahmin etmeye başla
        </button>
      </form>
    );
  }

  const s = byId.get(davet.sorular[adim]);
  if (!s) return null;
  return (
    <SoruAdimi
      baslik={s.tahminSoru}
      secenekler={s.secenekler}
      sira={adim}
      secili={tahminler[adim]}
      onSec={(i) => {
        const next = [...tahminler];
        next[adim] = i;
        setTahminler(next);
        if (adim + 1 < TANIYOR_SORU_SAYISI) window.setTimeout(() => setAdim(adim + 1), 200);
        else void gonder(next);
      }}
      onGeri={() => setAdim(adim - 1)}
    />
  );
}
