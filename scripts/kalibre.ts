/**
 * Sonuç profillerini kalibre eder ve doğrular.
 *
 * Neden gerekli: Her soruda tek şık seçildiği için puanlar boyutlara dağılır.
 * "Her boyutta %70" gibi bir profil gerçekte ulaşılamaz olabilir. Bu script her
 * sonuç için o sonucun niyetine göre cevap veren sanal kişiler üretir, onların
 * ortalama skorunu kalibre profil olarak kaydeder ve dağılımı raporlar.
 *
 * Kullanım: npm run kalibre
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const scoring = await import(pathToFileURL(join(root, "src/lib/scoring.ts")).href);

const files: [string, string][] = [
  ["kiskanclik.ts", "kiskanclik"],
  ["red-flag.ts", "redFlag"],
  ["baglanma.ts", "baglanma"],
  ["ex.ts", "ex"],
  ["sevgi-dili.ts", "sevgiDili"],
  ["flort.ts", "flort"],
  ["sosyal-pil.ts", "sosyalPil"],
  ["grup-rolu.ts", "grupRolu"],
  ["baskinlik.ts", "baskinlik"],
  ["toksik-arkadas.ts", "toksikArkadas"],
  ["sofra-sehir.ts", "sofraSehir"],
  ["tatil-cantasi.ts", "tatilCantasi"],
  ["mevsim.ts", "mevsim"],
  ["ruh-yasi.ts", "ruhYasi"],
];

type Opt = { scores: Record<string, number> };
type Q = { options: Opt[] };
type R = { id: string; profile: Record<string, number> };
type T = { slug: string; dimensions: { id: string }[]; questions: Q[]; results: R[] };

/** Sabit tohumlu üreteç (mulberry32): aynı içerik her çalıştırmada aynı kalibrasyonu verir. */
let seed = 20261108;
function rand() {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

const N = 4000;
const out: Record<string, Record<string, Record<string, number>>> = {};
let failed = false;

for (const [file, name] of files) {
  const test: T = (await import(pathToFileURL(join(root, "src/content/tests", file)).href))[name];
  const dims = test.dimensions.map((d) => d.id);

  // Niyet profili 40'ın üstündeki boyutlara çekilen, altındakilerden kaçan cevaplayıcı
  const answer = (concept: Record<string, number>) =>
    test.questions.map((q) => {
      let best = 0;
      let bv = -Infinity;
      q.options.forEach((o, oi) => {
        let v = (rand() - 0.5) * 3;
        for (const d of dims) v += ((o.scores[d] ?? 0) * ((concept[d] ?? 50) - 40)) / 50;
        if (v > bv) {
          bv = v;
          best = oi;
        }
      });
      return best;
    });

  const cal: Record<string, Record<string, number>> = {};
  for (const r of test.results) {
    const sum: Record<string, number> = Object.fromEntries(dims.map((d) => [d, 0]));
    for (let i = 0; i < N; i++) {
      const s = scoring.scoreDimensions(test, answer(r.profile));
      for (const d of dims) sum[d] += s[d];
    }
    cal[r.id] = Object.fromEntries(dims.map((d) => [d, Math.round(sum[d] / N)]));
  }
  out[test.slug] = cal;

  const calibrated = { ...test, results: test.results.map((r) => ({ ...r, profile: cal[r.id] })) };
  const counts: Record<string, number> = Object.fromEntries(test.results.map((r) => [r.id, 0]));
  const M = 20000;
  for (let i = 0; i < M; i++) {
    const c: Record<string, number> = {};
    for (const d of dims) c[d] = rand() * 100;
    counts[scoring.pickResult(calibrated, scoring.scoreDimensions(calibrated, answer(c))).id]++;
  }
  let hit = 0;
  for (const r of test.results)
    for (let i = 0; i < 400; i++)
      if (scoring.pickResult(calibrated, scoring.scoreDimensions(calibrated, answer(r.profile))).id === r.id) hit++;
  const hitRate = (hit / (400 * test.results.length)) * 100;

  console.log(`\n${test.slug}  (isabet: %${hitRate.toFixed(1)})`);
  for (const r of test.results) {
    const pct = (counts[r.id] / M) * 100;
    const warn = pct < 2 ? "  ⚠ çok nadir" : pct > 45 ? "  ⚠ çok baskın" : "";
    console.log(`  ${r.id.padEnd(20)} %${pct.toFixed(1).padStart(5)}  ${JSON.stringify(cal[r.id])}${warn}`);
  }
  if (hitRate < 75) {
    console.log("  ⚠ Sonuçlar birbirinden yeterince ayrışmıyor, soruları gözden geçir.");
    failed = true;
  }
}

writeFileSync(join(root, "src/content/tests/kalibrasyon.json"), JSON.stringify(out, null, 2) + "\n");
console.log("\nkalibrasyon.json güncellendi.");
if (failed) process.exitCode = 1;
