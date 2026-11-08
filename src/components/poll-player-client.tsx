"use client";

import dynamic from "next/dynamic";
import type { Poll } from "@/content/polls";

/** Sıra rastgele olduğu için sadece tarayıcıda çizilir (sunucu ve istemci sırası uyuşmazdı). */
const PollPlayer = dynamic(() => import("./poll-player").then((m) => m.PollPlayer), {
  ssr: false,
  loading: () => <div className="sticker h-72 bg-white" aria-busy="true" />,
});

export function PollPlayerClient({ polls }: { polls: Poll[] }) {
  return <PollPlayer polls={polls} />;
}
