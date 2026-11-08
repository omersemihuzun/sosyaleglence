/** Eleme turnuvasının saf mantığı: React'ten bağımsız, test edilebilir. */

export type Pick = { winner: string; loser: string; roundSize: number };

export type BracketState = {
  /** Mevcut turdaki seçenek id'leri (eşleşme sırasıyla) */
  round: string[];
  /** Mevcut turdaki eşleşme indeksi (0'dan) */
  matchIndex: number;
  /** Mevcut turdaki toplam eşleşme */
  totalMatches: number;
  /** Mevcut eşleşmenin iki tarafı; turnuva bittiyse undefined */
  left?: string;
  right?: string;
  /** Turnuva boyunca toplam karşılaşma sayısı (n - 1) */
  totalPicks: number;
  done: boolean;
};

/**
 * Seed (başlangıç sırası) ve seçim geçmişinden mevcut durumu türetir.
 * Her turda seçenekler ikişer ikişer eşleşir, kazananlar sırayla bir sonraki tura geçer.
 */
export function deriveState(seed: string[], picks: Pick[]): BracketState {
  let round = seed;
  let consumed = 0;
  while (round.length > 1 && consumed + round.length / 2 <= picks.length) {
    const winners = picks.slice(consumed, consumed + round.length / 2).map((p) => p.winner);
    consumed += round.length / 2;
    round = winners;
  }
  const matchIndex = picks.length - consumed;
  const totalPicks = Math.max(0, seed.length - 1);
  const done = round.length <= 1;
  return {
    round,
    matchIndex,
    totalMatches: round.length / 2,
    left: done ? undefined : round[matchIndex * 2],
    right: done ? undefined : round[matchIndex * 2 + 1],
    totalPicks,
    done,
  };
}

/** Bitmiş bir turnuvanın özeti: şampiyon, finalist, yarı finalistler. */
export function summarize(picks: Pick[]) {
  const final = picks[picks.length - 1];
  if (!final) return null;
  return {
    champion: final.winner,
    finalist: final.loser,
    semis: picks.filter((p) => p.roundSize === 4).map((p) => p.loser),
  };
}
