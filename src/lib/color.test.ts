import { describe, expect, it } from "vitest";
import { tests } from "@/content/tests";
import { brackets } from "@/content/brackets";
import { contrast, textOn } from "./color";

describe("textOn", () => {
  it("koyu zeminde açık, açık zeminde koyu yazı seçer", () => {
    expect(textOn("#2b1030").isLight).toBe(true);
    expect(textOn("#ffe066").isLight).toBe(false);
  });

  it("içerikteki her sonuç ve turnuva rengi için en az 4.5:1 kontrast verir", () => {
    const colors = [
      ...tests.flatMap((t) => [t.color, ...t.results.map((r) => r.color)]),
      ...brackets.map((b) => b.color),
    ];
    for (const c of colors) {
      const pair = textOn(c);
      expect(contrast(pair.color, pair.background)).toBeGreaterThanOrEqual(4.5);
    }
  });
});
