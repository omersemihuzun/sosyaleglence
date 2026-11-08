import { afterEach, describe, expect, it, vi } from "vitest";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("stores", () => {
  it("her mağaza için arama adresini kodlayarak üretir", async () => {
    const { stores } = await import("./shop");
    const q = "kişiye özel kupa & set";
    const urls = Object.fromEntries(stores.map((s) => [s.id, new URL(s.url(q))]));
    expect(urls.trendyol.hostname).toBe("www.trendyol.com");
    expect(urls.trendyol.searchParams.get("q")).toBe(q);
    expect(urls.hepsiburada.hostname).toBe("www.hepsiburada.com");
    expect(urls.hepsiburada.searchParams.get("q")).toBe(q);
    expect(urls.amazon.hostname).toBe("www.amazon.com.tr");
    expect(urls.amazon.searchParams.get("k")).toBe(q);
    expect(urls.amazon.searchParams.has("tag")).toBe(false);
  });

  it("NEXT_PUBLIC_AMAZON_TAG tanımlıysa Amazon linkine ekler", async () => {
    vi.stubEnv("NEXT_PUBLIC_AMAZON_TAG", "deneme-21");
    const { stores } = await import("./shop");
    const amazon = stores.find((s) => s.id === "amazon")!;
    expect(new URL(amazon.url("kahve")).searchParams.get("tag")).toBe("deneme-21");
  });

  it("tüm adresler https", async () => {
    const { stores } = await import("./shop");
    for (const s of stores) expect(new URL(s.url("x")).protocol).toBe("https:");
  });
});
