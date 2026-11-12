"use client";

import { useState } from "react";

type Props = {
  shareUrl: string;
  shareText: string;
  /** Story görselinin adresi (aynı origin) */
  imageUrl: string;
  fileName: string;
};

export function ShareBar({ shareUrl, shareText, imageUrl, fileName }: Props) {
  const [status, setStatus] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function shareStory() {
    setBusy(true);
    setStatus(null);
    try {
      const res = await fetch(imageUrl);
      if (!res.ok) throw new Error("görsel");
      const blob = await res.blob();
      const file = new File([blob], fileName, { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], text: `${shareText} ${shareUrl}` });
      } else {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(a.href);
        setStatus("Görsel indirildi. Story'ne ekleyebilirsin.");
      }
    } catch (e) {
      if ((e as Error).name !== "AbortError") setStatus("Görsel hazırlanamadı, biraz sonra tekrar dene.");
    } finally {
      setBusy(false);
    }
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setStatus("Bağlantı kopyalandı.");
    } catch {
      setStatus(shareUrl);
    }
  }

  const wa = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
  const x = `https://x.com/intent/post?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={shareStory}
          disabled={busy}
          className="sticker sticker-press bg-butter px-5 py-3.5 font-display text-lg font-bold disabled:opacity-60 sm:col-span-2"
        >
          {busy ? "Kart hazırlanıyor…" : "Story kartını paylaş"}
        </button>
        <a
          href={wa}
          target="_blank"
          rel="noopener"
          className="sticker sticker-press bg-[#25D366] px-5 py-3 text-center font-display font-bold text-plum"
        >
          WhatsApp&apos;ta gönder
        </a>
        <div className="grid grid-cols-2 gap-3">
          <a
            href={x}
            target="_blank"
            rel="noopener"
            className="sticker sticker-press bg-white px-4 py-3 text-center font-display font-bold"
          >
            X&apos;te paylaş
          </a>
          <button
            type="button"
            onClick={copy}
            className="sticker sticker-press bg-white px-4 py-3 font-display font-bold"
          >
            Linki kopyala
          </button>
        </div>
      </div>
      <p className="mt-3 min-h-5 text-sm text-plum-soft" role="status">
        {status}
      </p>
    </div>
  );
}
