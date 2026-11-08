import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { TaniyorTahminIstemci } from "@/components/cift/istemci";
import { PageSkeleton } from "@/components/page-skeleton";
import { taniyorSorulari } from "@/content/cift/taniyor";
import { TANIYOR_KOD } from "@/lib/taniyor";

type P = PageProps<"/cift-oyunlari/beni-ne-kadar-taniyorsun/[kod]">;

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { kod } = await params;
  if (!TANIYOR_KOD.test(kod)) notFound();
  return {
    title: "Beni Ne Kadar Tanıyorsun? Tahmin sırası sende",
    description: "Sevgilin kendisiyle ilgili 10 soruyu cevapladı. Bakalım kaç tanesini bileceksin.",
    // Kişiye özel sayfa: arama motorlarına girmesin
    robots: { index: false, follow: false },
  };
}

export default function Page({ params }: P) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Icerik params={params} />
    </Suspense>
  );
}

async function Icerik({ params }: { params: P["params"] }) {
  const { kod } = await params;
  if (!TANIYOR_KOD.test(kod)) notFound();
  return (
    <section className="mx-auto max-w-3xl px-4 pt-8 sm:pt-12">
      <nav aria-label="Konum" className="text-sm font-semibold text-plum-soft">
        <Link href="/cift-oyunlari" className="hover:text-cherry">
          ← Çift oyunları
        </Link>
      </nav>
      <h1 className="mt-4 font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl">
        <span aria-hidden>🕵️ </span>Beni Ne Kadar Tanıyorsun?
      </h1>
      <div className="mt-8">
        <TaniyorTahminIstemci kod={kod} sorular={taniyorSorulari} />
      </div>
    </section>
  );
}
