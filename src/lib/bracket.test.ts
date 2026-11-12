import { describe, expect, it } from "vitest";
import { deriveState, summarize, type Pick } from "./bracket";

const seed = Array.from({ length: 16 }, (_, i) => `s${i}`);

/** Her eşleşmede soldakini seçen tam bir turnuva oynar */
function playLeft(items: string[]): Pick[] {
  const picks: Pick[] = [];
  for (;;) {
    const st = deriveState(items, picks);
    if (st.done) return picks;
    picks.push({ winner: st.left!, loser: st.right!, roundSize: st.round.length });
  }
}

describe("deriveState", () => {
  it("başlangıçta ilk eşleşmeyi verir", () => {
    const st = deriveState(seed, []);
    expect(st).toMatchObject({ matchIndex: 0, totalMatches: 8, left: "s0", right: "s1", totalPicks: 15, done: false });
    expect(st.round).toHaveLength(16);
  });

  it("tur bitince kazananlarla yeni tura geçer", () => {
    const picks: Pick[] = [];
    for (let i = 0; i < 8; i++) picks.push({ winner: `s${i * 2 + 1}`, loser: `s${i * 2}`, roundSize: 16 });
    const st = deriveState(seed, picks);
    expect(st.round).toEqual(["s1", "s3", "s5", "s7", "s9", "s11", "s13", "s15"]);
    expect(st).toMatchObject({ matchIndex: 0, totalMatches: 4, left: "s1", right: "s3" });
  });

  it("tur ortasında doğru eşleşmeyi verir", () => {
    const st = deriveState(seed, [{ winner: "s0", loser: "s1", roundSize: 16 }]);
    expect(st).toMatchObject({ matchIndex: 1, left: "s2", right: "s3" });
  });

  it("n - 1 seçimden sonra biter ve geri alma bir önceki eşleşmeye döner", () => {
    const picks = playLeft(seed);
    expect(picks).toHaveLength(15);
    expect(deriveState(seed, picks).done).toBe(true);
    const back = deriveState(seed, picks.slice(0, -1));
    expect(back).toMatchObject({ done: false, totalMatches: 1, left: "s0", right: "s8" });
  });

  it("tur boyutlarını 16, 8, 4, 2 olarak kaydeder", () => {
    const sizes = playLeft(seed).map((p) => p.roundSize);
    expect(sizes.filter((s) => s === 16)).toHaveLength(8);
    expect(sizes.filter((s) => s === 8)).toHaveLength(4);
    expect(sizes.filter((s) => s === 4)).toHaveLength(2);
    expect(sizes.filter((s) => s === 2)).toHaveLength(1);
  });

  it("4 ve 8 seçenekli turnuvalarda da çalışır", () => {
    expect(playLeft(seed.slice(0, 4))).toHaveLength(3);
    expect(playLeft(seed.slice(0, 8))).toHaveLength(7);
  });
});

describe("summarize", () => {
  it("şampiyon, finalist ve yarı finalistleri döner", () => {
    const sum = summarize(playLeft(seed))!;
    expect(sum.champion).toBe("s0");
    expect(sum.finalist).toBe("s8");
    expect(sum.semis.sort()).toEqual(["s12", "s4"].sort());
  });

  it("boş geçmişte null döner", () => {
    expect(summarize([])).toBeNull();
  });
});
