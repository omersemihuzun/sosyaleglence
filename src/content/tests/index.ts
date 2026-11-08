import type { Test } from "@/lib/types";
import calibration from "./kalibrasyon.json";
import { kiskanclik } from "./kiskanclik";
import { baglanma } from "./baglanma";
import { redFlag } from "./red-flag";
import { ex } from "./ex";
import { sevgiDili } from "./sevgi-dili";
import { flort } from "./flort";
import { sosyalPil } from "./sosyal-pil";
import { grupRolu } from "./grup-rolu";
import { baskinlik } from "./baskinlik";
import { toksikArkadas } from "./toksik-arkadas";
import { sofraSehir } from "./sofra-sehir";
import { tatilCantasi } from "./tatil-cantasi";
import { mevsim } from "./mevsim";
import { ruhYasi } from "./ruh-yasi";
import { situationship } from "./situationship";
import { delulu } from "./delulu";
import { sevgiliTipi } from "./sevgili-tipi";
import { kavgaTarzi } from "./kavga-tarzi";
import { iliskiyeHazir } from "./iliskiye-hazir";
import { guvenSorunu } from "./guven-sorunu";

/** Listeleme sırası */
export const rawTests: Test[] = [
  kiskanclik,
  situationship,
  redFlag,
  delulu,
  sevgiliTipi,
  baglanma,
  guvenSorunu,
  kavgaTarzi,
  iliskiyeHazir,
  ex,
  toksikArkadas,
  baskinlik,
  grupRolu,
  sosyalPil,
  sevgiDili,
  flort,
  sofraSehir,
  tatilCantasi,
  ruhYasi,
  mevsim,
];

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
