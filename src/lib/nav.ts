/** Ana menü: header, mobil menü ve ana sayfa modül şeridi aynı listeyi kullanır. */
export const navItems = [
  { href: "/testler", label: "Testler", emoji: "🧠", blurb: "Senaryolarla kişilik ve ilişki testleri" },
  { href: "/cift-oyunlari", label: "Çiftler", emoji: "💞", blurb: "Sevgilinle birlikte oynanacak oyunlar" },
  { href: "/eleme", label: "Eleme", emoji: "🏆", blurb: "16 seçenek, tek şampiyon" },
  { href: "/bunu-mu-o-mu", label: "Bunu mu O mu", emoji: "⚖️", blurb: "Birini seç, herkes ne dedi gör" },
  { href: "/burclar", label: "Burçlar", emoji: "♈", blurb: "Burç profilleri ve uyum hesabı" },
  { href: "/hediye", label: "Hediye", emoji: "🎁", blurb: "Kime, hangi bütçeyle, ne alınır" },
  { href: "/rehber", label: "Rehber", emoji: "📖", blurb: "İlişki ve hediye üzerine yazılar" },
] as const;

export function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
