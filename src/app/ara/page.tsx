import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchPanel } from "@/components/layout/search-box";

export const metadata: Metadata = {
  title: "Sitede Ara",
  description: "Testler, eleme oyunları, burç uyumları, Bunu mu O mu soruları ve hediye fikirleri arasında ara.",
  alternates: { canonical: "/ara" },
  // Arama sonuç sayfaları dizine girmesin
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 pt-10 sm:pt-14">
      <h1 className="font-display text-5xl leading-[1] font-extrabold tracking-tight">Ne arıyorsun?</h1>
      <div className="mt-8">
        <Suspense fallback={<div className="sticker h-16 bg-white" />}>
          <SearchPanel />
        </Suspense>
      </div>
    </section>
  );
}
