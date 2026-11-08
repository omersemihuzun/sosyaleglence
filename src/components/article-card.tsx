import Link from "next/link";
import { readingMinutes } from "@/content/articles";
import type { Article } from "@/content/articles/types";
import { onColor } from "@/lib/color";

export function ArticleCard({ article, tilt = 0 }: { article: Article; tilt?: number }) {
  return (
    <Link
      href={`/rehber/${article.slug}`}
      className="sticker sticker-press group flex h-full flex-col bg-white p-5"
      style={{ rotate: `${tilt}deg` }}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          aria-hidden
          className="grid size-14 place-items-center rounded-2xl border-2 border-plum text-3xl"
          style={{ background: onColor(article.color).background }}
        >
          {article.emoji}
        </span>
        <span className="rounded-full bg-blush px-2.5 py-1 text-xs font-semibold">
          {readingMinutes(article)} dk okuma
        </span>
      </div>
      <h3 className="mt-4 font-display text-xl leading-tight font-bold">{article.title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-plum-soft">{article.excerpt}</p>
      <span className="mt-4 font-display font-bold text-cherry group-hover:underline">Oku</span>
    </Link>
  );
}

/** Makale içi ve test sayfasındaki çağrı kartı */
export function ArticleCta({ href, label, text }: { href: string; label: string; text: string }) {
  return (
    <Link
      href={href}
      className="sticker sticker-press my-8 flex flex-col gap-2 bg-butter p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
    >
      <span>
        <span className="block font-display text-xl font-bold">{label}</span>
        <span className="mt-1 block text-[15px] leading-snug">{text}</span>
      </span>
      <span className="shrink-0 rounded-full border-2 border-plum bg-cherry px-5 py-2 font-display font-bold text-white">
        Başla
      </span>
    </Link>
  );
}
