import type { Test } from "@/lib/types";
import calibration from "./kalibrasyon.json";
import { kiskanclik } from "./kiskanclik";
import { baglanma } from "./baglanma";
import { redFlag } from "./red-flag";
import { ex } from "./ex";
import { sevgiDili } from "./sevgi-dili";
import { flort } from "./flort";

/** Listeleme sırası */
export const rawTests: Test[] = [kiskanclik, redFlag, baglanma, ex, sevgiDili, flort];

type Calibration = Record<string, Record<string, Record<string, number>>>;

/**
 * Testlerde yazılan `profile` değerleri sonucun "niyetidir".
 * `npm run kalibre` gerçekçi cevaplayıcı simülasyonuyla bu niyetlerin
 * ulaşılabilir karşılıklarını hesaplayıp kalibrasyon.json'a yazar.
 */
export const tests: Test[] = rawTests.map((t) => {
  const cal = (calibration as Calibration)[t.slug];
  if (!cal) return t;
  return { ...t, results: t.results.map((r) => ({ ...r, profile: cal[r.id] ?? r.profile })) };
});

export function getTest(slug: string): Test | undefined {
  return tests.find((t) => t.slug === slug);
}
