import { describe, expect, it } from "vitest";
import type { Test } from "./types";
import { decodeScores, encodeScores, headlineScore, pickResult, scoreDimensions } from "./scoring";

const base = {
  summary: "",
  intro: "",
  emoji: "",
  color: "",
  category: "ilişki" as const,
  metaDescription: "",
};

const resultBase = { emoji: "", tagline: "", description: [], strengths: [], watchOut: [], color: "" };

const test: Test = {
  ...base,
  slug: "t",
  title: "T",
  dimensions: [
    { id: "a", label: "A", low: "", high: "" },
    { id: "b", label: "B", low: "", high: "" },
  ],
  questions: [
    { text: "q1", options: [{ text: "x", scores: { a: 3 } }, { text: "y", scores: { b: 2 } }, { text: "z", scores: {} }] },
    { text: "q2", options: [{ text: "x", scores: { a: 1, b: 1 } }, { text: "y", scores: { b: 3 } }] },
  ],
  results: [
    { ...resultBase, id: "low", name: "Low", profile: { a: 0, b: 0 }, bestMatch: "high" },
    { ...resultBase, id: "aa", name: "A", profile: { a: 90, b: 10 }, bestMatch: "low" },
    { ...resultBase, id: "bb", name: "B", profile: { a: 10, b: 90 }, bestMatch: "low" },
  ],
  headline: { label: "H", weights: { a: 1, b: 3 } },
};

describe("scoreDimensions", () => {
  it("her boyutu en yüksek alınabilir puana göre 0-100 arası ölçekler", () => {
    // a max = 3 + 1 = 4, b max = 2 + 3 = 5
    expect(scoreDimensions(test, [0, 0])).toEqual({ a: 100, b: 20 });
    expect(scoreDimensions(test, [1, 1])).toEqual({ a: 0, b: 100 });
    expect(scoreDimensions(test, [2, 0])).toEqual({ a: 25, b: 20 });
  });

  it("eksik ya da geçersiz cevapları 0 sayar", () => {
    expect(scoreDimensions(test, [])).toEqual({ a: 0, b: 0 });
    expect(scoreDimensions(test, [99, -1])).toEqual({ a: 0, b: 0 });
  });

  it("hiç puan verilmeyen boyut için 0 döner (sıfıra bölme yok)", () => {
    const t: Test = { ...test, dimensions: [...test.dimensions, { id: "c", label: "C", low: "", high: "" }] };
    expect(scoreDimensions(t, [0, 0]).c).toBe(0);
  });
});

describe("pickResult", () => {
  it("en yakın profili seçer", () => {
    expect(pickResult(test, { a: 100, b: 0 }).id).toBe("aa");
    expect(pickResult(test, { a: 0, b: 100 }).id).toBe("bb");
    expect(pickResult(test, { a: 2, b: 3 }).id).toBe("low");
  });

  it("eksik skorları 0 kabul eder", () => {
    expect(pickResult(test, {}).id).toBe("low");
  });
});

describe("headlineScore", () => {
  it("ağırlıklı ortalama döner", () => {
    expect(headlineScore(test, { a: 100, b: 0 })).toBe(25);
    expect(headlineScore(test, { a: 0, b: 100 })).toBe(75);
  });

  it("headline yoksa null döner", () => {
    expect(headlineScore({ ...test, headline: undefined }, { a: 50, b: 50 })).toBeNull();
  });
});

describe("encodeScores / decodeScores", () => {
  it("gidiş-dönüş aynı skoru verir", () => {
    const s = { a: 64, b: 7 };
    const raw = encodeScores(test, s);
    expect(raw).toBe("64-7");
    expect(decodeScores(test, raw)).toEqual(s);
  });

  it("sınır değerleri kabul eder", () => {
    expect(decodeScores(test, "0-100")).toEqual({ a: 0, b: 100 });
  });

  it.each([null, undefined, "", "1", "1-2-3", "a-b", "-1-5", "101-0", "50-NaN", "1e9-0"])(
    "geçersiz girdiyi reddeder: %s",
    (raw) => {
      expect(decodeScores(test, raw as string | null | undefined)).toBeNull();
    },
  );

  it("ondalıklı değeri yuvarlar", () => {
    expect(decodeScores(test, "10.6-3.2")).toEqual({ a: 11, b: 3 });
  });
});
