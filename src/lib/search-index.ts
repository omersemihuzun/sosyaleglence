import { brackets } from "@/content/brackets";
import { burclar, getBurc } from "@/content/burclar";
import { uyumlar } from "@/content/burc-uyum";
import { ideas } from "@/content/gifts/ideas";
import { guides } from "@/content/gifts/guides";
import { budgets } from "@/content/gifts/types";
import { polls } from "@/content/polls";
import { ciftOyunlari } from "@/content/cift";
import { tests } from "@/content/tests";
import type { SearchItem } from "./search";

const short = (s: string, n = 90) => (s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s);

/** Sunucuda (build sırasında) çalışır; istemciye sadece bu hafif liste gider. */
export function buildSearchIndex(): SearchItem[] {
  const out: SearchItem[] = [];
  for (const t of tests) out.push({ k: "test", t: t.title, s: short(t.summary), u: `/testler/${t.slug}`, e: t.emoji });
  out.push({
    k: "test",
    t: "İsimle aşk testi",
    s: "İki ismi yaz, aşk uyumunuzu yüzde olarak gör",
    u: "/ask-testi",
    e: "💘",
  });
  for (const o of ciftOyunlari) {
    out.push({ k: "cift", t: o.baslik, s: short(o.ozet), u: `/cift-oyunlari/${o.slug}`, e: o.emoji });
  }
  for (const b of brackets)
    out.push({ k: "eleme", t: b.title, s: short(b.summary), u: `/eleme/${b.slug}`, e: b.emoji });
  for (const b of burclar) {
    out.push({
      k: "burc",
      t: `${b.ad} burcu`,
      s: `${b.tarih}, ${b.element} grubu, yönetici ${b.gezegen}`,
      u: `/burclar/${b.slug}`,
      e: b.emoji,
    });
  }
  for (const u of uyumlar) {
    const A = getBurc(u.a);
    const B = getBurc(u.b);
    if (!A || !B) continue;
    out.push({
      k: "uyum",
      t: `${A.ad} ve ${B.ad} uyumu`,
      s: `%${u.puan} uyum: ${u.baslik}`,
      u: `/burc-uyumu/${u.slug}`,
      e: `${A.emoji}${B.emoji}`,
    });
  }
  for (const p of polls) {
    out.push({
      k: "anket",
      t: `${p.a} ya da ${p.b}`,
      s: "Bunu mu O mu: birini seç, herkes ne dedi gör",
      u: `/bunu-mu-o-mu?soru=${p.id}`,
      e: p.aEmoji,
    });
  }
  for (const g of guides)
    out.push({ k: "rehber", t: g.title, s: short(g.metaDescription), u: `/hediye/${g.slug}`, e: g.emoji });
  for (const i of ideas) {
    const params = new URLSearchParams({ kime: i.recipients[0], ilgi: i.interests[0] });
    out.push({
      k: "hediye",
      t: i.name,
      s: `yaklaşık ${budgets[i.budget]}`,
      u: `/hediye?${params.toString()}#bulucu`,
      e: i.emoji,
    });
  }
  return out;
}
