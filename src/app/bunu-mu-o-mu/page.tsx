import type { Metadata } from "next";
import { PollPlayerClient } from "@/components/poll-player-client";
import { polls } from "@/content/polls";

export const metadata: Metadata = {
  title: "Bunu mu O mu? Herkes Ne Seçti?",
  description:
    "Çay mı kahve mi, kedi mi köpek mi, ilk mesajı kim atar? İkisinden birini seç, herkesin oy dağılımını anında gör.",
  alternates: { canonical: "/bunu-mu-o-mu" },
};

export default function PollsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 pt-10 sm:pt-14">
      <h1 className="font-display text-5xl leading-[1] font-extrabold tracking-tight sm:text-6xl">Bunu mu, o mu?</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-plum-soft">
        İkisinden birini seç. Seçtiğin an herkesin ne dediğini görürsün. Düşünmek yok, ilk içgüdü.
      </p>
      <div className="mt-10">
        <PollPlayerClient polls={polls} />
      </div>
    </section>
  );
}
