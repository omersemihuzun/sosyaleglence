"use client";

import { useState } from "react";

/** Sonuç sayfasında: "Sevgilinle / arkadaşınla karşılaştır" davet linki oluşturur. */
export function CompareInvite({ slug, s, testTitle }: { slug: string; s: string; testTitle: string }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  async function create() {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/cift", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, s, name }),
      });
      const data = await res.json();
      if (!res.ok || !data.code) throw new Error(data.error ?? "Bağlantı oluşturulamadı");
      try {
        localStorage.setItem(`cift:sahip:${data.code}`, "1");
      } catch {
        /* sorun değil */
      }
      setLink(`${window.location.origin}/testler/${slug}/karsilastir/${data.code}`);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }

  if (link) {
    const text = `"${testTitle}" testini çözdüm. Sen de çöz, ne kadar uyumlu olduğumuzu görelim:`;
    return (
      <div className="rounded-2xl border-2 border-plum bg-blush p-5">
        <p className="font-display text-lg font-bold">Bağlantın hazır</p>
        <p className="mt-1 text-sm text-plum-soft">O testi çözdüğünde ikiniz de karşılaştırmayı bu bağlantıda görürsünüz.</p>
        <p className="mt-3 rounded-xl border-2 border-plum bg-white px-3 py-2 text-sm break-all">{link}</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`${text} ${link}`)}`}
            target="_blank"
            rel="noopener"
            className="sticker sticker-press bg-[#25D366] px-3 py-2.5 text-center font-display font-bold"
          >
            WhatsApp&apos;ta gönder
          </a>
          <button
            type="button"
            onClick={() => navigator.clipboard?.writeText(link).then(() => setCopied(true))}
            className="sticker sticker-press bg-white px-3 py-2.5 font-display font-bold"
          >
            {copied ? "Kopyalandı" : "Kopyala"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border-2 border-plum bg-blush p-5">
      <p className="font-display text-lg font-bold">Sevgilinle ya da arkadaşınla karşılaştır</p>
      <p className="mt-1 text-sm text-plum-soft">
        Bir bağlantı oluştur, o da testi çözsün. Uyum yüzdenizi ve farklarınızı birlikte görün.
      </p>
      <label className="mt-4 block text-sm font-semibold" htmlFor="cift-isim">
        Adın (isteğe bağlı, onun ekranında görünür)
      </label>
      <input
        id="cift-isim"
        value={name}
        onChange={(e) => setName(e.target.value.slice(0, 24))}
        maxLength={24}
        autoComplete="off"
        className="mt-1 w-full rounded-xl border-2 border-plum bg-white px-3 py-2.5"
        placeholder="ör. Deniz"
      />
      <button
        type="button"
        onClick={create}
        disabled={busy}
        className="sticker sticker-press mt-3 w-full bg-plum px-4 py-3 font-display font-bold text-paper disabled:opacity-60"
      >
        {busy ? "Oluşturuluyor…" : "Karşılaştırma bağlantısı oluştur"}
      </button>
      <p className="mt-2 text-xs text-plum-soft">
        Skorların ve yazdığın isim 30 gün saklanır, sonra silinir.{" "}
        <a href="/gizlilik" className="underline">
          Gizlilik
        </a>
      </p>
      {error && (
        <p className="mt-2 text-sm font-semibold text-cherry" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
