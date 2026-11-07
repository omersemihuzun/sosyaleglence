import Link from "next/link";
import { BracketCard } from "@/components/bracket-card";
import { LiveQuestion } from "@/components/live-question";
import { brackets } from "@/content/brackets";
import { TestCard } from "@/components/test-card";
import { guides } from "@/content/gifts/guides";
import { recipients, type Recipient } from "@/content/gifts/types";
import { getTest, tests } from "@/content/tests";

const TILTS = [-1, 0.7, -0.4, 0.9, -0.8, 0.5];
const FEATURED_GUIDES = ["sevgiliye-yilbasi-hediyesi", "erkek-arkadasa-hediye", "kiz-arkadasa-hediye", "500-tl-alti-hediye"];

export default function Home() {
  const featured = getTest("kiskanclik-testi")!;
  const featuredGuides = FEATURED_GUIDES.map((s) => guides.find((g) => g.slug === s)!).filter(Boolean);

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-6 sm:px-6 sm:pt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <div>
          <h1 className="font-display text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.95] font-extrabold tracking-[-0.03em] text-balance">
            Kendini tanıdığını mı sanıyorsun?
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-plum-soft">
            Gerçek hayattan senaryolarla hazırlanmış ilişki ve kişilik testleri. Kolay cevap yok, tek bir puan da
            yok. Sonunda seni anlatan bir profil ve paylaşabileceğin bir kart var.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/testler" className="sticker sticker-press bg-cherry px-6 py-3.5 font-display text-lg font-bold text-white">
              Testlere göz at
            </Link>
            <Link href="/hediye" className="sticker sticker-press bg-white px-6 py-3.5 font-display text-lg font-bold">
              Hediye bul
            </Link>
          </div>
        </div>
        <LiveQuestion test={featured} />
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Testler</h2>
          <Link href="/testler" className="font-display font-bold text-cherry hover:underline">
            Hepsini gör
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tests.map((t, i) => (
            <TestCard key={t.slug} test={t} tilt={TILTS[i % TILTS.length]} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Eleme oyunları</h2>
            <p className="mt-2 text-plum-soft">16 seçenek, her turda ikisinden biri. Sonunda tek şampiyon.</p>
          </div>
          <Link href="/eleme" className="shrink-0 font-display font-bold text-cherry hover:underline">
            Hepsini gör
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brackets.slice(0, 3).map((b, i) => (
            <BracketCard key={b.slug} bracket={b} tilt={TILTS[(i + 1) % TILTS.length]} />
          ))}
        </div>
      </section>

      <section className="mt-24 border-y-2 border-plum bg-butter">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-4xl leading-[1] font-extrabold tracking-tight sm:text-5xl">
              Kime hediye alıyorsun?
            </h2>
            <p className="mt-4 max-w-sm text-lg leading-relaxed">
              Seç, bütçeni söyle. Ne sevdiğine göre fikirleri ve üç mağazadaki fiyatları birlikte gösterelim.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {(Object.keys(recipients) as Recipient[]).map((r) => (
                <li key={r}>
                  <Link
                    href={`/hediye?kime=${r}#bulucu`}
                    className="inline-block rounded-full border-2 border-plum bg-paper px-4 py-2 font-semibold hover:bg-white"
                  >
                    {recipients[r]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="grid gap-3 self-center sm:grid-cols-2">
            {featuredGuides.map((g, i) => (
              <li key={g.slug} style={{ rotate: `${i % 2 ? 0.8 : -0.8}deg` }}>
                <Link href={`/hediye/${g.slug}`} className="sticker sticker-press flex h-full flex-col bg-white p-5">
                  <span aria-hidden className="text-3xl">
                    {g.emoji}
                  </span>
                  <span className="mt-3 font-display text-xl leading-tight font-bold">{g.title}</span>
                  <span className="mt-1 text-sm text-plum-soft line-clamp-2">{g.intro[0]}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
