import type { Result, Test } from "./types";

export type DimensionScores = Record<string, number>;

/**
 * Cevaplardan her boyut için 0–100 arası skor hesaplar.
 * Bir boyutun skoru = alınan puan / o boyutta alınabilecek en yüksek puan.
 * `answers[i]` i. sorunun seçilen şıkkının (orijinal) indeksidir.
 */
export function scoreDimensions(test: Test, answers: number[]): DimensionScores {
  const scores: DimensionScores = {};
  for (const dim of test.dimensions) {
    let got = 0;
    let max = 0;
    test.questions.forEach((q, qi) => {
      const best = Math.max(...q.options.map((o) => o.scores[dim.id] ?? 0));
      max += best;
      const picked = q.options[answers[qi]];
      if (picked) got += picked.scores[dim.id] ?? 0;
    });
    scores[dim.id] = max === 0 ? 0 : Math.round((got / max) * 100);
  }
  return scores;
}

/** Skorlara en yakın profile sahip sonucu bulur (Öklid uzaklığı). */
export function pickResult(test: Test, scores: DimensionScores): Result {
  let best = test.results[0];
  let bestDist = Infinity;
  for (const r of test.results) {
    let d = 0;
    for (const dim of test.dimensions) {
      const diff = (scores[dim.id] ?? 0) - (r.profile[dim.id] ?? 50);
      d += diff * diff;
    }
    if (d < bestDist) {
      bestDist = d;
      best = r;
    }
  }
  return best;
}

export function headlineScore(test: Test, scores: DimensionScores): number | null {
  if (!test.headline) return null;
  if (test.headline.mode === "toplam") {
    // Toplanan puan / her soruda en yüksek toplamı veren şık seçilseydi alınacak puan.
    // Boyut skorları yüzde olduğu için her boyutun ham puanı, o boyutun en yüksek puanıyla geri hesaplanır.
    let got = 0;
    let max = 0;
    for (const dim of test.dimensions) {
      const dimMax = test.questions.reduce((t, q) => t + Math.max(...q.options.map((o) => o.scores[dim.id] ?? 0)), 0);
      got += ((scores[dim.id] ?? 0) / 100) * dimMax;
    }
    for (const q of test.questions) {
      max += Math.max(...q.options.map((o) => Object.values(o.scores).reduce((t, v) => t + v, 0)));
    }
    return max === 0 ? null : Math.min(100, Math.round((got / max) * 100));
  }
  let sum = 0;
  let w = 0;
  for (const [id, weight] of Object.entries(test.headline.weights)) {
    sum += (scores[id] ?? 0) * weight;
    w += weight;
  }
  return w === 0 ? null : Math.round(sum / w);
}

/** Skorları URL'de taşımak için kısa biçim: "64-20-80-33" (boyut sırasıyla). */
export function encodeScores(test: Test, scores: DimensionScores): string {
  return test.dimensions.map((d) => scores[d.id] ?? 0).join("-");
}

export function decodeScores(test: Test, raw: string | null | undefined): DimensionScores | null {
  if (!raw) return null;
  const parts = raw.split("-").map((p) => Number(p));
  if (parts.length !== test.dimensions.length) return null;
  if (parts.some((n) => !Number.isFinite(n) || n < 0 || n > 100)) return null;
  const out: DimensionScores = {};
  test.dimensions.forEach((d, i) => (out[d.id] = Math.round(parts[i])));
  return out;
}
