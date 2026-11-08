import type { Metadata } from "next";
import Link from "next/link";
import { PhotoCredit } from "@/components/photo-credit";
import { brackets } from "@/content/brackets";

export const metadata: Metadata = {
  title: "Görsel Kaynakları",
  description:
    "Eleme oyunlarında kullanılan açık lisanslı fotoğrafların yapanları, kaynakları ve lisansları. Tüm fotoğraflar Creative Commons ya da kamu malı lisanslıdır.",
  alternates: { canonical: "/gorsel-kaynaklari" },
};

export default function CreditsPage() {
  const groups = brackets
    .map((b) => ({ bracket: b, items: b.items.filter((i) => i.image) }))
    .filter((g) => g.items.length > 0);
  const total = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <article className="mx-auto max-w-3xl px-4 pt-10 sm:pt-14">
      <h1 className="font-display text-5xl leading-[1] font-extrabold tracking-tight">Görsel kaynakları</h1>
      <p className="mt-5 text-lg leading-relaxed text-plum-soft">
        Eleme oyunlarındaki {total} fotoğrafın tamamı Creative Commons (CC BY, CC BY-SA, CC0) ya da kamu malı
        lisanslıdır ve Wikimedia Commons gibi açık arşivlerden alınmıştır. Fotoğraflar sitemizde kırpılıp
        küçültülmüştür. Emeği geçen herkese teşekkürler.
      </p>
      <p className="mt-3 text-sm text-plum-soft">
        Bir fotoğrafın sahibiysen ve atıfta hata görüyorsan ya da kaldırılmasını istiyorsan{" "}
        <Link href="/iletisim" className="underline">
          bize yaz
        </Link>
        .
      </p>

      <div className="mt-10 space-y-10">
        {groups.map(({ bracket, items }) => (
          <section key={bracket.slug} id={bracket.slug} className="scroll-mt-6">
            <h2 className="font-display text-2xl font-bold">
              <Link href={`/eleme/${bracket.slug}`} className="hover:text-cherry">
                {bracket.emoji} {bracket.title}
              </Link>
            </h2>
            <ul className="mt-4 space-y-3">
              {items.map((i) => (
                <li key={i.id} className="rounded-xl border-2 border-line bg-white px-4 py-3">
                  <p className="font-semibold">{i.name}</p>
                  <PhotoCredit image={i.image!} className="mt-1" />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
