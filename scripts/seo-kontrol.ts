/**
 * SEO başlık ve açıklama uzunluğu denetimi.
 *
 * Her sayfanın arama sonucunda görünecek <title> ve meta description metnini, sayfaların
 * generateMetadata'sındaki kalıplarla aynı şekilde üretir ve sınırları denetler:
 *   - title: en fazla 60 karakter (site adı eki dahil)
 *   - description: 70–160 karakter
 * Karakterler grafem olarak sayılır (bir emoji = 1).
 *
 * Kullanım: npm run seo         (sadece rapor)
 *           npm run seo -- --sıkı  (sınır aşımı varsa çıkış kodu 1)
 *
 * Sonuç sayfaları için başlık/açıklama src/lib/jsonld.ts'teki fonksiyonlardan gelir (sayfayla ortak).
 * Test, eleme ve rehber sayfalarında içerik dosyasındaki title/metaTitle + site adı eki kullanılır.
 */
import { existsSync } from "node:fs";
import * as nodeModule from "node:module";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const SUFFIX = " | Sosyal Eğlence";
const TITLE_MAX = 60;
const DESC_MIN = 70;
const DESC_MAX = 160;

// module.registerHooks Node 22.15+ ile geldi; projedeki @types/node 20 tipini içermediği için yerel tip
type Ctx = { parentURL?: string; importAttributes?: Record<string, string> };
type Next<T> = (specifierOrUrl: string, context: Ctx) => T;
const { registerHooks } = nodeModule as unknown as {
  registerHooks: (hooks: {
    resolve: (specifier: string, context: Ctx, next: Next<unknown>) => unknown;
    load: (url: string, context: Ctx, next: Next<unknown>) => unknown;
  }) => void;
};

// "@/x" -> src/x ve uzantısız göreli import'ları .ts/.tsx/.json olarak çöz
registerHooks({
  resolve(specifier, context, next) {
    let spec = specifier;
    if (spec.startsWith("@/")) spec = pathToFileURL(join(root, "src", spec.slice(2))).href;
    const isPath = spec.startsWith("file:") || spec.startsWith(".");
    if (isPath && !/\.(ts|tsx|json|js|mjs)$/.test(spec)) {
      const base = new URL(spec, context.parentURL);
      for (const ext of [".ts", ".tsx", "/index.ts"]) {
        const candidate = new URL(base.href + ext);
        if (existsSync(candidate)) return next(candidate.href, context);
      }
    }
    return next(spec, context);
  },
  load(url, context, next) {
    if (url.endsWith(".json")) return next(url, { ...context, importAttributes: { type: "json" } });
    return next(url, context);
  },
});

const load = (p: string) => import(pathToFileURL(join(root, p)).href);
const { tests } = await load("src/content/tests/index.ts");
const { brackets } = await load("src/content/brackets/index.ts");
const { guides } = await load("src/content/gifts/guides.ts");
const burcMod = await load("src/content/burc-uyum.ts");
const { burclar, getBurc } = await load("src/content/burclar.ts");
// Sonuç sayfaları başlık/açıklamayı bu fonksiyonlarla üretir: denetim sayfayla birebir aynı metni görür
const seo = await load("src/lib/jsonld.ts");
const len: (s: string) => number = seo.textLength;

type Row = { url: string; title: string; desc: string };
const rows: Row[] = [];

for (const t of tests) {
  rows.push({ url: `/testler/${t.slug}`, title: seo.pageTitle(t.title), desc: t.metaDescription });
  for (const r of t.results)
    rows.push({
      url: `/testler/${t.slug}/sonuc/${r.id}`,
      title: seo.testResultTitle(r.name, t.title),
      desc: seo.testResultDescription(r.tagline, t.title),
    });
}
for (const b of brackets) {
  rows.push({ url: `/eleme/${b.slug}`, title: seo.pageTitle(b.title), desc: b.metaDescription });
  for (const i of b.items)
    rows.push({
      url: `/eleme/${b.slug}/sonuc/${i.id}`,
      title: seo.bracketResultTitle(i.name, b.title),
      desc: seo.bracketResultDescription(i.name, b.championLabel, b.title),
    });
}
for (const g of guides) rows.push({ url: `/hediye/${g.slug}`, title: seo.guideTitle(g.metaTitle, g.title), desc: g.metaDescription });

rows.push({ url: "/burclar", title: burcMod.BURCLAR_TITLE, desc: burcMod.BURCLAR_DESC });
for (const b of burclar) rows.push({ url: `/burclar/${b.slug}`, title: burcMod.burcTitle(b), desc: burcMod.burcDescription(b) });
for (const u of burcMod.uyumlar) {
  const A = getBurc(u.a);
  const B = getBurc(u.b);
  rows.push({ url: `/burc-uyumu/${u.slug}`, title: burcMod.ciftTitle(A, B), desc: burcMod.ciftDescription(A, B, u) });
}

const problems: string[] = [];
for (const r of rows) {
  const tl = len(r.title);
  const dl = len(r.desc);
  if (tl > TITLE_MAX) problems.push(`BAŞLIK ${tl}/${TITLE_MAX}  ${r.url}\n    "${r.title}"`);
  if (dl > DESC_MAX) problems.push(`AÇIKLAMA UZUN ${dl}/${DESC_MAX}  ${r.url}`);
  if (dl < DESC_MIN) problems.push(`AÇIKLAMA KISA ${dl}/${DESC_MIN}  ${r.url}`);
}
const titles = new Map<string, string[]>();
for (const r of rows) titles.set(r.title, [...(titles.get(r.title) ?? []), r.url]);
for (const [title, urls] of titles) if (urls.length > 1) problems.push(`TEKRAR EDEN BAŞLIK "${title}": ${urls.join(", ")}`);

console.log(`${rows.length} sayfa denetlendi, ${problems.length} uyarı.\n`);
for (const p of problems) console.log("- " + p);
if (problems.length && process.argv.includes("--sıkı")) process.exitCode = 1;
