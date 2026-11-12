import Link from "next/link";
import { SearchForm } from "@/components/layout/search-box";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 pt-16 text-center">
      <p aria-hidden className="text-7xl">
        🫥
      </p>
      <h1 className="mt-6 font-display text-4xl font-extrabold">Bu sayfa bulunamadı</h1>
      <p className="mt-4 text-lg text-plum-soft">Adres değişmiş ya da yanlış yazılmış olabilir. Aradığını bulalım:</p>
      <div className="mx-auto mt-6 max-w-md text-left">
        <SearchForm label="Test, oyun, burç, hediye…" />
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/testler" className="sticker sticker-press bg-cherry px-6 py-3 font-display font-bold text-white">
          Testlere git
        </Link>
        <Link href="/hediye" className="sticker sticker-press bg-white px-6 py-3 font-display font-bold">
          Hediye bul
        </Link>
      </div>
    </section>
  );
}
