import { expect, test } from "@playwright/test";

/**
 * scripts/seo-kontrol.ts içerikten üretilen sayfaları denetler; elle yazılmış sayfalar (ana sayfa, çift oyunları,
 * aşk testi, listeler…) onun kapsamı dışında. Bu test build edilmiş sitenin gerçek HTML'inde, site haritasındaki
 * sonuç sayfası olmayan her adresin başlığını, açıklamasını, h1'ini ve kanonik adresini kontrol eder.
 */
const TITLE_MAX = 60;
const DESC_MIN = 70;
const DESC_MAX = 160;
const uzunluk = (s: string) => [...new Intl.Segmenter("tr", { granularity: "grapheme" }).segment(s)].length;
const coz = (s: string) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

test("site haritasındaki sayfaların başlık, açıklama, h1 ve kanonik adresi", async ({ request }, info) => {
  test.skip(info.project.name !== "masaustu", "tek projede çalışması yeterli");
  test.setTimeout(180_000);
  const xml = await (await request.get("/sitemap.xml")).text();
  const yollar = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => new URL(m[1]).pathname)
    .filter((p) => !p.includes("/sonuc/") && !p.startsWith("/burc-uyumu/"));
  expect(yollar.length).toBeGreaterThan(50);

  const sorunlar: string[] = [];
  for (const yol of yollar) {
    const res = await request.get(yol);
    if (res.status() !== 200) {
      sorunlar.push(`${yol}: HTTP ${res.status()}`);
      continue;
    }
    const html = await res.text();
    const title = coz(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
    const desc = coz(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
    const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
    const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
    if (!title || uzunluk(title) > TITLE_MAX) sorunlar.push(`${yol}: başlık ${uzunluk(title)} karakter "${title}"`);
    if (uzunluk(desc) < DESC_MIN || uzunluk(desc) > DESC_MAX)
      sorunlar.push(`${yol}: açıklama ${uzunluk(desc)} karakter`);
    if (h1 !== 1) sorunlar.push(`${yol}: ${h1} adet h1`);
    if (!canonical || new URL(canonical).pathname !== yol) sorunlar.push(`${yol}: kanonik ${canonical}`);
  }
  expect(sorunlar, sorunlar.join("\n")).toEqual([]);
});
