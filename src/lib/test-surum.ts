import type { Test } from "./types";

/**
 * Soruların ve şık puanlarının kısa parmak izi. Şık sayaçları bu sürümle anahtarlanır:
 * sorular değişince eski sayımlar yeni şıklara karışmaz.
 */
export function testSurum(test: Pick<Test, "questions">): string {
  const s = JSON.stringify(test.questions.map((q) => [q.text, q.options.map((o) => [o.text, o.scores])]));
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, "0");
}
