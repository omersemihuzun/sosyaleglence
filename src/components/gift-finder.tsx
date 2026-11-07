"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { findIdeas } from "@/content/gifts/guides";
import {
  budgets,
  interests,
  recipients,
  type Budget,
  type Interest,
  type Recipient,
} from "@/content/gifts/types";
import { GiftCard } from "./gift-card";

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border-2 border-plum px-4 py-2 text-[15px] font-semibold transition-colors ${
        active ? "bg-plum text-paper" : "bg-white hover:bg-blush"
      }`}
    >
      {children}
    </button>
  );
}

const PAGE = 12;

export function GiftFinder() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const initialRecipient = params.get("kime");
  const initialBudget = Number(params.get("butce"));
  const [recipient, setRecipient] = useState<Recipient | undefined>(
    initialRecipient && initialRecipient in recipients ? (initialRecipient as Recipient) : undefined,
  );
  const [budget, setBudget] = useState<Budget | undefined>(
    initialBudget in budgets ? (initialBudget as Budget) : undefined,
  );
  const [selected, setSelected] = useState<Interest[]>(
    (params.get("ilgi") ?? "").split(",").filter((x): x is Interest => x in interests),
  );
  const [limit, setLimit] = useState(PAGE);

  const results = useMemo(() => findIdeas({ recipient, budget, interests: selected }), [recipient, budget, selected]);

  // Seçimleri adrese yaz: paylaşılabilir ve geri tuşuyla uyumlu
  function sync(next: { r?: Recipient; b?: Budget; i: Interest[] }) {
    const sp = new URLSearchParams();
    if (next.r) sp.set("kime", next.r);
    if (next.b) sp.set("butce", String(next.b));
    if (next.i.length) sp.set("ilgi", next.i.join(","));
    const qs = sp.toString();
    router.replace(qs ? `${pathname}?${qs}#bulucu` : `${pathname}#bulucu`, { scroll: false });
    setLimit(PAGE);
  }

  return (
    <div id="bulucu" className="scroll-mt-6">
      <div className="sticker space-y-6 bg-white p-5 sm:p-7">
        <fieldset>
          <legend className="font-display text-xl font-bold">Kime alıyorsun?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {(Object.keys(recipients) as Recipient[]).map((r) => (
              <Chip
                key={r}
                active={recipient === r}
                onClick={() => {
                  const v = recipient === r ? undefined : r;
                  setRecipient(v);
                  sync({ r: v, b: budget, i: selected });
                }}
              >
                {recipients[r]}
              </Chip>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="font-display text-xl font-bold">Bütçen ne kadar?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {(Object.keys(budgets).map(Number) as Budget[]).map((b) => (
              <Chip
                key={b}
                active={budget === b}
                onClick={() => {
                  const v = budget === b ? undefined : b;
                  setBudget(v);
                  sync({ r: recipient, b: v, i: selected });
                }}
              >
                {budgets[b]}
              </Chip>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="font-display text-xl font-bold">
            Neleri sever? <span className="text-base font-medium text-plum-soft">(birden fazla seçebilirsin)</span>
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {(Object.keys(interests) as Interest[]).map((x) => (
              <Chip
                key={x}
                active={selected.includes(x)}
                onClick={() => {
                  const v = selected.includes(x) ? selected.filter((s) => s !== x) : [...selected, x];
                  setSelected(v);
                  sync({ r: recipient, b: budget, i: v });
                }}
              >
                {interests[x]}
              </Chip>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-10" aria-live="polite">
        <p className="font-display text-2xl font-bold">
          {results.length > 0 ? `${results.length} fikir bulduk` : "Bu seçimlere uyan fikir yok"}
        </p>
        {results.length === 0 && (
          <p className="mt-2 text-plum-soft">Bütçeyi ya da ilgi alanı seçimini kaldırırsan daha çok fikir görebilirsin.</p>
        )}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.slice(0, limit).map((idea) => (
            <GiftCard key={idea.id} idea={idea} />
          ))}
        </div>
        {results.length > limit && (
          <button
            type="button"
            onClick={() => setLimit(limit + PAGE)}
            className="sticker sticker-press mx-auto mt-8 block bg-white px-6 py-3 font-display font-bold"
          >
            Daha fazla göster ({results.length - limit})
          </button>
        )}
      </div>
    </div>
  );
}
