import Link from "next/link";
import { burclar } from "@/content/burclar";

/** Uyum aracına geçirilecek hafif liste (tüm metni istemciye taşımamak için). */
export const burcSecenekleri = burclar.map((b) => ({ slug: b.slug, ad: b.ad, emoji: b.emoji }));

export function BurcNotu() {
  return (
    <p className="mx-auto mt-16 max-w-6xl px-4 text-sm text-plum-soft sm:px-6">
      Burçlar eğlence amaçlıdır, bilimsel bir dayanağı yoktur. Bir ilişkinin nasıl gideceğini doğum tarihleri değil, iki
      insanın birbirine nasıl davrandığı belirler.
    </p>
  );
}

export function UyumBar({ puan, renk }: { puan: number; renk: string }) {
  return (
    <div className="h-3 overflow-hidden rounded-full border-2 border-plum bg-paper" aria-hidden>
      <div className="h-full" style={{ width: `${Math.max(3, puan)}%`, background: renk }} />
    </div>
  );
}

/** WCAG göreli parlaklığı. */
function luminance(hex: string) {
  const c = hex
    .replace("#", "")
    .match(/../g)!
    .map((x) => parseInt(x, 16) / 255);
  const [r, g, b] = c.map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Zemin rengine göre daha yüksek kontrastlı yazı rengi: beyaz ya da mürdüm. */
export function yaziRengi(zemin: string): string {
  const L = luminance(zemin);
  const beyaz = 1.05 / (L + 0.05);
  const murdum = (L + 0.05) / (luminance("#2B1030") + 0.05);
  return beyaz >= murdum ? "#FFFFFF" : "#2B1030";
}

/** İlgili testlere köprü: burç sayfalarından gerçek kişilik testlerine. */
export function IlgiliTestler() {
  const linkler = [
    { href: "/testler/sevgi-dili-testi", label: "Sevgi dilin ne?" },
    { href: "/testler/baglanma-stili-testi", label: "Bağlanma stilin ne?" },
    { href: "/testler/kiskanclik-testi", label: "Ne kadar kıskançsın?" },
  ];
  return (
    <div className="rounded-2xl border-2 border-plum bg-blush p-5">
      <p className="font-display text-lg font-bold">Burçtan fazlasını merak ediyorsan</p>
      <p className="mt-1 text-sm text-plum-soft">Gerçek senaryolarla seni ve ilişkini ölçen testler:</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {linkler.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="inline-block rounded-full border-2 border-plum bg-white px-4 py-2 font-semibold hover:bg-butter"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
