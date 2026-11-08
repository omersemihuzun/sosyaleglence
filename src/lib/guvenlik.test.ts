import { describe, expect, it } from "vitest";
import { cleanName, COMPARE_CODE, newCompareCode } from "./compare";
import { toJsonLd } from "./jsonld";

describe("güvenlik yardımcıları", () => {
  it("isim temizleme: HTML, kontrol, görünmez ve yön değiştiren karakterleri atar", () => {
    expect(cleanName('<script>alert("x")</script>')).toBe("scriptalert(x)/script");
    expect(cleanName("Ali‮nimda")).toBe("Alinimda"); // RTL override
    expect(cleanName("Ay​şe\u0000")).toBe("Ayşe"); // sıfır genişlik + NUL
    expect(cleanName("  Çağrı   Nur  ")).toBe("Çağrı Nur");
    expect(cleanName("x".repeat(100))).toHaveLength(24);
    expect(cleanName(42)).toBe("");
  });

  it("karşılaştırma kodu: yeni kodlar 16 hex ve tekrar etmiyor; eski 10 haneliler geçerli", () => {
    const kodlar = new Set(Array.from({ length: 500 }, newCompareCode));
    expect(kodlar.size).toBe(500);
    for (const k of kodlar) expect(k).toMatch(/^[a-f0-9]{16}$/);
    expect(COMPARE_CODE.test("0123456789")).toBe(true);
    expect(COMPARE_CODE.test("0123456789abcdef")).toBe(true);
    for (const kotu of ["0123456789a", "../etc", "ABCDEF0123", "0123456789abcdef0"])
      expect(COMPARE_CODE.test(kotu)).toBe(false);
  });

  it("JSON-LD içinde </script> etiketi kapanamaz", () => {
    expect(toJsonLd({ a: "</script><script>alert(1)</script>" })).not.toContain("</script>");
  });
});
