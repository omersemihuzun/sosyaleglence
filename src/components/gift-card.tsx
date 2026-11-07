import type { GiftIdea } from "@/content/gifts/types";
import { budgets } from "@/content/gifts/types";
import { stores } from "@/lib/shop";

export function GiftCard({ idea }: { idea: GiftIdea }) {
  return (
    <article className="flex h-full flex-col rounded-[18px] border-2 border-plum bg-white p-5">
      <div className="flex items-start gap-4">
        <span
          aria-hidden
          className="grid size-14 shrink-0 place-items-center rounded-2xl border-2 border-plum bg-butter text-3xl"
        >
          {idea.emoji}
        </span>
        <div>
          <h3 className="font-display text-lg leading-tight font-bold">{idea.name}</h3>
          <p className="mt-1 text-sm font-semibold text-plum-soft">yaklaşık {budgets[idea.budget]}</p>
        </div>
      </div>
      <p className="mt-4 flex-1 text-[15px] leading-relaxed">{idea.why}</p>
      <div className="mt-5">
        <p className="text-xs font-semibold text-plum-soft">Fiyatları karşılaştır</p>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {stores.map((s) => (
            <a
              key={s.id}
              href={s.url(idea.query)}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="store-btn rounded-xl border-2 border-plum px-2 py-2 text-center text-[13px] font-bold"
              style={{ ["--store" as string]: s.color }}
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
