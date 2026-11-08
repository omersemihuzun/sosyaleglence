import type { Article } from "./types";
import { baglanmaStilleri } from "./baglanma-stilleri";
import { kiskanclikRehber } from "./kiskanclik";
import { redFlagRehber } from "./red-flag";
import { sevgiDilleri } from "./sevgi-dilleri";
import { situationshipRehber } from "./situationship";
import { exRehber } from "./ex";
import { toksikArkadaslik } from "./toksik-arkadaslik";
import { sosyalEnerji } from "./sosyal-enerji";

export const articles: Article[] = [
  baglanmaStilleri,
  kiskanclikRehber,
  redFlagRehber,
  sevgiDilleri,
  situationshipRehber,
  exRehber,
  toksikArkadaslik,
  sosyalEnerji,
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

/** Makalenin okunan metni (başlıklar, paragraflar, maddeler, SSS) */
export function articleText(a: Article): string {
  const parts: string[] = [a.title, ...a.intro];
  for (const s of a.sections) {
    parts.push(s.heading, ...s.paragraphs, ...(s.bullets ?? []));
    for (const sub of s.subsections ?? []) parts.push(sub.heading, ...sub.paragraphs);
  }
  for (const f of a.faq) parts.push(f.q, f.a);
  return parts.join(" ");
}

export function wordCount(a: Article): number {
  return articleText(a).split(/\s+/).filter(Boolean).length;
}

/** Dakikada ~200 kelime (Türkçe için makul bir okuma hızı) */
export function readingMinutes(a: Article): number {
  return Math.max(1, Math.round(wordCount(a) / 200));
}

/** HTML id için başlıktan güvenli kısa ad */
export function anchorId(heading: string): string {
  const map: Record<string, string> = { ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u", â: "a", î: "i", û: "u" };
  return heading
    .toLocaleLowerCase("tr")
    .replace(/[çğıöşüâîû]/g, (c) => map[c] ?? c)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}
