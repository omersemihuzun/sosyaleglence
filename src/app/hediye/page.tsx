import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { GiftFinder } from "@/components/gifts/gift-finder";
import { guides } from "@/content/gifts/guides";

export const metadata: Metadata = {
  title: "Hediye Bulucu: Kime Ne Alınır?",
  description:
    "Sevgiliye, anneye, babaya, arkadaşa ne hediye alınır? Kime aldığını, bütçeni ve ilgi alanlarını seç, sana uygun hediye fikirlerini gör.",
  alternates: { canonical: "/hediye" },
};

export default function GiftsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
        <h1 className="max-w-3xl font-display text-5xl leading-[1] font-extrabold tracking-tight sm:text-6xl">
          Ne alacağını bilmiyorsan, buradan başla.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-plum-soft">
          Kime aldığını, bütçeni ve neleri sevdiğini seç. Her fikirde neden iyi bir seçim olduğunu ve üç mağazadaki
          fiyatlarını görebilirsin.
        </p>
        <p className="mt-4 inline-block rounded-full border border-line bg-white px-3 py-1 text-sm text-plum-soft">
          Bu sayfadaki mağaza bağlantılarından alışveriş yaparsan komisyon alabiliriz. Fiyatlar mağazalara göre değişir.
        </p>
        <div className="mt-10">
          <Suspense fallback={<div className="sticker h-96 bg-white" />}>
            <GiftFinder />
          </Suspense>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold">Hediye rehberleri</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/hediye/${g.slug}`}
                className="sticker sticker-press flex items-center gap-3 bg-white px-4 py-3.5"
              >
                <span aria-hidden className="text-2xl">
                  {g.emoji}
                </span>
                <span className="font-display text-lg font-bold">{g.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
