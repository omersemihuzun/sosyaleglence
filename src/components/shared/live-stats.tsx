"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/** Bu sayının altında yüzde göstermek yanıltıcı olur. */
const MIN_TOTAL = 10;

type Row = { id: string; name: string; emoji: string };

function pct(n: number, total: number) {
  return total ? Math.round((n / total) * 100) : 0;
}

function useJson<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    let alive = true;
    fetch(url)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => alive && setData(d))
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [url]);
  return data;
}

function Bars({
  rows,
  counts,
  total,
  highlight,
  hrefFor,
}: {
  rows: Row[];
  counts: Record<string, number>;
  total: number;
  highlight: string;
  hrefFor: (id: string) => string;
}) {
  const sorted = [...rows].sort((a, b) => (counts[b.id] ?? 0) - (counts[a.id] ?? 0));
  return (
    <ul className="mt-4 space-y-2.5">
      {sorted.map((r) => {
        const p = pct(counts[r.id] ?? 0, total);
        const mine = r.id === highlight;
        return (
          <li key={r.id}>
            <Link href={hrefFor(r.id)} className="group block">
              <div className="flex items-baseline justify-between gap-3 text-[15px]">
                <span className={mine ? "font-bold" : ""}>
                  <span aria-hidden>{r.emoji} </span>
                  {r.name}
                  {mine && <span className="ml-1 text-xs font-bold text-cherry">(sen)</span>}
                </span>
                <span className="font-display font-bold tabular-nums">%{p}</span>
              </div>
              <div className="mt-1 h-2.5 overflow-hidden rounded-full border-2 border-plum bg-paper">
                <div
                  className={`h-full ${mine ? "bg-cherry" : "bg-plum-soft/50"}`}
                  style={{ width: `${Math.max(2, p)}%` }}
                />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function TestStats({ slug, current, results }: { slug: string; current: string; results: Row[] }) {
  const data = useJson<{ enabled: boolean; total: number; results: Record<string, number> }>(
    `/api/istatistik/test?slug=${slug}`,
  );
  if (!data?.enabled || data.total < MIN_TOTAL) return null;
  const mine = pct(data.results[current] ?? 0, data.total);
  return (
    <section className="rounded-[18px] border-2 border-plum bg-white p-6">
      <h2 className="font-display text-xl font-bold">Herkes ne çıktı?</h2>
      <p className="mt-1 text-plum-soft">
        Bu testi çözen {data.total.toLocaleString("tr-TR")} kişinin <strong className="text-plum">%{mine}</strong>
        &apos;i bu sonucu aldı.
      </p>
      <Bars
        rows={results}
        counts={data.results}
        total={data.total}
        highlight={current}
        hrefFor={(id) => `/testler/${slug}/sonuc/${id}`}
      />
    </section>
  );
}

export function BracketStats({ slug, current, items }: { slug: string; current: string; items: Row[] }) {
  const data = useJson<{
    enabled: boolean;
    total: number;
    items: { id: string; champion: number; winRate: number | null }[];
  }>(`/api/istatistik/eleme?slug=${slug}`);
  if (!data?.enabled || data.total < MIN_TOTAL) return null;
  const counts = Object.fromEntries(data.items.map((i) => [i.id, i.champion]));
  const me = data.items.find((i) => i.id === current);
  const top = items
    .filter((i) => (counts[i.id] ?? 0) > 0 || i.id === current)
    .sort((a, b) => (counts[b.id] ?? 0) - (counts[a.id] ?? 0));
  return (
    <section className="rounded-[18px] border-2 border-plum bg-white p-6">
      <h2 className="font-display text-xl font-bold">Herkesin şampiyonu</h2>
      <p className="mt-1 text-plum-soft">
        {data.total.toLocaleString("tr-TR")} oyunun{" "}
        <strong className="text-plum">%{pct(counts[current] ?? 0, data.total)}</strong>
        &apos;inde şampiyon bu oldu.
        {me?.winRate != null && <> Karşılaşmaların %{me.winRate}&apos;ini kazanıyor.</>}
      </p>
      <Bars
        rows={top.slice(0, 8)}
        counts={counts}
        total={data.total}
        highlight={current}
        hrefFor={(id) => `/eleme/${slug}/sonuc/${id}`}
      />
    </section>
  );
}
