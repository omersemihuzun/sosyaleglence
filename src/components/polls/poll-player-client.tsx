"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import type { Poll } from "@/content/polls";

/** Sıra rastgele olduğu için sadece tarayıcıda çizilir (sunucu ve istemci sırası uyuşmazdı). */
const PollPlayer = dynamic(() => import("@/components/polls/poll-player").then((m) => m.PollPlayer), {
  ssr: false,
  loading: () => <div className="sticker h-72 bg-white" aria-busy="true" />,
});

export function PollPlayerClient({ polls }: { polls: Poll[] }) {
  // ?soru=<id>: günün sorusu gibi bir bağlantıdan gelindiyse o soru ilk sırada açılır
  const firstId = useSearchParams().get("soru");
  return <PollPlayer polls={polls} firstId={firstId} />;
}
