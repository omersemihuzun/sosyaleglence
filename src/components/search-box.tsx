"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { kindLabels, kindOrder, prepare, search, type SearchItem } from "@/lib/search";

let cache: Promise<SearchItem[]> | null = null;

/** İndeks tek seferlik, ayrı bir istekle gelir: sayfanın JS paketine içerik metni girmez. */
function loadIndex(): Promise<SearchItem[]> {
  cache ??= fetch("/ara/indeks.json")
    .then((r) => (r.ok ? r.json() : []))
    .catch(() => {
      cache = null;
      return [];
    });
  return cache;
}

/** Arama sayfasının tamamı: kutu + gruplu sonuçlar. Sorgu ?q= ile adreste tutulur. */
export function SearchPanel() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [items, setItems] = useState<SearchItem[] | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let alive = true;
    loadIndex().then((d) => alive && setItems(d));
    return () => {
      alive = false;
    };
  }, []);

  // Adresi kısa bir gecikmeyle güncelle: paylaşılabilir, geri tuşuyla uyumlu
  useEffect(() => {
    const id = window.setTimeout(() => {
      const q = query.trim();
      const next = q ? `${pathname}?q=${encodeURIComponent(q)}` : pathname;
      router.replace(next, { scroll: false });
    }, 250);
    return () => window.clearTimeout(id);
  }, [query, pathname, router]);

  const prepared = useMemo(() => (items ? prepare(items) : []), [items]);
  const results = useMemo(() => search(prepared, query), [prepared, query]);
  const groups = kindOrder
    .map((k) => ({ k, rows: results.filter((r) => r.k === k) }))
    .filter((g) => g.rows.length > 0);

  // Ok tuşlarıyla kutu ve sonuçlar arasında gezinme
  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    const links = [...(listRef.current?.querySelectorAll<HTMLAnchorElement>("a[data-sonuc]") ?? [])];
    if (links.length === 0) return;
    e.preventDefault();
    const i = links.indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === "ArrowDown") links[i < 0 ? 0 : Math.min(i + 1, links.length - 1)].focus();
    else if (i <= 0) document.getElementById("arama-kutusu")?.focus();
    else links[i - 1].focus();
  }

  const q = query.trim();

  return (
    <div onKeyDown={onKeyDown}>
      <form role="search" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="arama-kutusu" className="sr-only">
          Sitede ara
        </label>
        <input
          id="arama-kutusu"
          type="search"
          autoFocus
          autoComplete="off"
          enterKeyHint="search"
          value={query}
          onChange={(e) => setQuery(e.target.value.slice(0, 80))}
          placeholder="Test, oyun, burç, hediye…"
          className="sticker w-full bg-white px-5 py-4 font-display text-xl font-semibold outline-none focus-visible:outline-3 focus-visible:outline-cherry"
          aria-describedby="arama-durum"
        />
      </form>

      <p id="arama-durum" className="mt-4 min-h-6 text-plum-soft" role="status">
        {items === null
          ? "Arama hazırlanıyor…"
          : !q
            ? "Ne aradığını yaz: kıskançlık, koç, hediye, kahve…"
            : results.length === 0
              ? `"${q}" için bir şey bulamadık. Başka bir kelime dene.`
              : `"${q}" için ${results.length} sonuç`}
      </p>

      <div ref={listRef} className="mt-6 space-y-10">
        {groups.map((g) => (
          <section key={g.k} aria-labelledby={`grup-${g.k}`}>
            <h2 id={`grup-${g.k}`} className="font-display text-xl font-bold">
              {kindLabels[g.k]} <span className="text-base font-semibold text-plum-soft">({g.rows.length})</span>
            </h2>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {g.rows.map((r) => (
                <li key={r.u} className="min-w-0">
                  <Link
                    href={r.u}
                    data-sonuc
                    className="flex h-full items-center gap-3 rounded-2xl border-2 border-plum bg-white px-4 py-3 hover:bg-blush focus-visible:bg-blush"
                  >
                    <span aria-hidden className="shrink-0 text-2xl">
                      {r.e}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display font-bold leading-tight">{r.t}</span>
                      <span className="block truncate text-sm text-plum-soft">{r.s}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

/** Küçük arama kutusu (ör. 404 sayfası): /ara?q= sayfasına gönderir. */
export function SearchForm({ label = "Aradığın şeyi yaz" }: { label?: string }) {
  return (
    <form role="search" action="/ara" method="get" className="flex gap-2">
      <label htmlFor="mini-arama" className="sr-only">
        {label}
      </label>
      <input
        id="mini-arama"
        name="q"
        type="search"
        placeholder={label}
        maxLength={80}
        className="min-w-0 flex-1 rounded-xl border-2 border-plum bg-white px-4 py-3"
      />
      <button type="submit" className="sticker sticker-press bg-plum px-5 py-3 font-display font-bold text-paper">
        Ara
      </button>
    </form>
  );
}
