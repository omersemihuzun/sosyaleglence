import type { Bracket } from "@/lib/bracket-types";
import { ev } from "./ev";
import { sevgiliyle } from "./sevgiliyle";
import { ilkBulusma } from "./ilk-bulusma";
import { balayi } from "./balayi";
import { cekiciOzellik } from "./cekici-ozellik";
import { redFlagEleme } from "./red-flag";
import { yemek } from "./yemek";
import { dugun } from "./dugun";
import { tatilGunu } from "./tatil-gunu";
import { mevsimlikAn } from "./mevsimlik-an";
import { sevgilidenMesaj } from "./sevgiliden-mesaj";
import { evcilHayvan } from "./evcil-hayvan";
import { kariyer } from "./kariyer";
import { kahvaltilik } from "./kahvaltilik";
import { superGuc } from "./super-guc";
import { muzikTuru } from "./muzik-turu";

export const brackets: Bracket[] = [
  ev,
  sevgiliyle,
  redFlagEleme,
  yemek,
  sevgilidenMesaj,
  superGuc,
  ilkBulusma,
  evcilHayvan,
  cekiciOzellik,
  kahvaltilik,
  dugun,
  kariyer,
  tatilGunu,
  muzikTuru,
  mevsimlikAn,
  balayi,
];

// Yanlış hazırlanmış bir turnuva build'i durdursun: seçenek sayısı 2'nin kuvveti, id'ler benzersiz olmalı
for (const b of brackets) {
  const n = b.items.length;
  if (n < 4 || (n & (n - 1)) !== 0) throw new Error(`${b.slug}: seçenek sayısı 4, 8, 16 veya 32 olmalı (şu an ${n})`);
  const ids = new Set(b.items.map((i) => i.id));
  if (ids.size !== n) throw new Error(`${b.slug}: tekrar eden seçenek id'si var`);
}

export function getBracket(slug: string): Bracket | undefined {
  return brackets.find((b) => b.slug === slug);
}

export function roundName(size: number): string {
  if (size === 2) return "Final";
  if (size === 4) return "Yarı final";
  if (size === 8) return "Çeyrek final";
  return `Son ${size}`;
}
