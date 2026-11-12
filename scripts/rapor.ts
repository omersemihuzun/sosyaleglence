/**
 * İstatistik raporu: hangi test kaç kez çözüldü, hangi turnuvada kim önde, anketlerde ne durumda.
 *
 * Kullanım:
 *   vercel env pull .env.local --yes   (bir kez, veritabanı bilgilerini çeker)
 *   npm run rapor
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { Redis } from "@upstash/redis";

// .env.local'i basitçe oku (Next dışında otomatik yüklenmez)
const envFile = join(process.cwd(), ".env.local");
if (existsSync(envFile)) {
  for (const line of readFileSync(envFile, "utf8").split(/\r?\n/)) {
    const m = line.match(/^([A-Z0-9_]+)="?(.*?)"?$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}

const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
if (!url || !token) {
  console.error("Veritabanı bilgisi yok. Önce: vercel env pull .env.local --yes");
  process.exit(1);
}
const redis = new Redis({ url, token });

async function hashes(pattern: string) {
  const out: [string, Record<string, number>][] = [];
  let cursor = "0";
  do {
    const [next, keys] = await redis.scan(cursor, { match: pattern, count: 200 });
    cursor = String(next);
    for (const k of keys)
      out.push([k, ((await redis.hgetall<Record<string, number>>(k)) ?? {}) as Record<string, number>]);
  } while (cursor !== "0");
  return out;
}

const pct = (n: number, t: number) => (t ? `%${Math.round((n / t) * 100)}` : "-");

console.log("\n=== TESTLER ===");
const tests = (await hashes("t:*")).sort((a, b) => Number(b[1]._n ?? 0) - Number(a[1]._n ?? 0));
for (const [key, h] of tests) {
  const total = Number(h._n ?? 0);
  const rows = Object.entries(h)
    .filter(([k]) => k !== "_n")
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .map(([k, v]) => `${k} ${pct(Number(v), total)}`)
    .join(", ");
  console.log(`${key.slice(2).padEnd(34)} ${String(total).padStart(6)} çözüm  | ${rows}`);
}

// Test içerikleri: şık sayaçlarını güncel soru sürümüyle eşleştirmek için
const { testDosyalari } = (await import(pathToFileURL(join(process.cwd(), "scripts/test-dosyalari.ts")).href)) as {
  testDosyalari: [string, string][];
};
const { testSurum } = (await import(pathToFileURL(join(process.cwd(), "src/lib/test-surum.ts")).href)) as {
  testSurum: (t: { questions: unknown[] }) => string;
};
type RTest = { slug: string; questions: { text: string; options: { text: string }[] }[] };
const icerik: RTest[] = [];
for (const [f, ad] of testDosyalari) {
  icerik.push((await import(pathToFileURL(join(process.cwd(), "src/content/tests", f)).href))[ad]);
}
const cozum = new Map(tests.map(([k, h]) => [k.slice(2), Number(h._n ?? 0)]));

console.log("\n=== TEST HUNİSİ (başlatan → bitiren, ortalama süre, en çok bırakılan sorular) ===");
for (const t of icerik) {
  const h = ((await redis.hgetall<Record<string, number>>(`h:${t.slug}`)) ?? {}) as Record<string, number>;
  const basla = Number(h.basla ?? 0);
  if (!basla) continue;
  const bitir = cozum.get(t.slug) ?? 0;
  const sureN = Number(h.sure_n ?? 0);
  const ort = sureN ? `${Math.round(Number(h.sure_t ?? 0) / sureN)} sn` : "-";
  const birak = Object.entries(h)
    .filter(([k]) => /^b\d+$/.test(k))
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .slice(0, 3)
    .map(([k, v]) => `S${k.slice(1)} (${v})`)
    .join(", ");
  console.log(
    `${t.slug.padEnd(34)} ${String(basla).padStart(6)} başlatan  ${pct(bitir, basla).padStart(5)} bitirme  ort ${ort.padStart(7)}  | bırakılan: ${birak || "-"}`,
  );
}

console.log("\n=== GERÇEK ŞIK DAĞILIMI (güncel soru sürümü; %5 altı = ölü şık, %70 üstü = bariz şık) ===");
for (const t of icerik) {
  const h = ((await redis.hgetall<Record<string, number>>(`s:${t.slug}:${testSurum(t)}`)) ?? {}) as Record<
    string,
    number
  >;
  const n = Number(h._n ?? 0);
  if (n < 30) {
    if (n) console.log(`${t.slug.padEnd(34)} ${n} çözüm (yorum için en az 30 gerekir)`);
    continue;
  }
  const sorunlar: string[] = [];
  t.questions.forEach((q, qi) => {
    q.options.forEach((o, oi) => {
      const p = (Number(h[`${qi + 1}:${oi}`] ?? 0) / n) * 100;
      if (p < 5 || p > 70) sorunlar.push(`S${qi + 1}${"ABCD"[oi]} %${p.toFixed(0)} "${o.text.slice(0, 40)}…"`);
    });
  });
  console.log(`${t.slug.padEnd(34)} ${n} çözüm  ${sorunlar.length ? "" : "✓ dengeli"}`);
  for (const s of sorunlar) console.log(`    ${s}`);
}

console.log("\n=== ELEME OYUNLARI (şampiyonlar) ===");
const brackets = (await hashes("b:*:sampiyon")).sort((a, b) => Number(b[1]._n ?? 0) - Number(a[1]._n ?? 0));
for (const [key, h] of brackets) {
  const total = Number(h._n ?? 0);
  const top = Object.entries(h)
    .filter(([k]) => k !== "_n")
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .slice(0, 3)
    .map(([k, v]) => `${k} ${pct(Number(v), total)}`)
    .join(", ");
  console.log(`${key.slice(2, -9).padEnd(34)} ${String(total).padStart(6)} oyun   | ${top}`);
}

console.log("\n=== BUNU MU O MU ===");
const polls = (await hashes("p:*")).sort(
  (a, b) => Number(b[1].a ?? 0) + Number(b[1].b ?? 0) - (Number(a[1].a ?? 0) + Number(a[1].b ?? 0)),
);
for (const [key, h] of polls) {
  const a = Number(h.a ?? 0);
  const b = Number(h.b ?? 0);
  console.log(`${key.slice(2).padEnd(22)} ${String(a + b).padStart(6)} oy  | A ${pct(a, a + b)}  B ${pct(b, a + b)}`);
}

let compares = 0;
let cursor = "0";
do {
  const [next, keys] = await redis.scan(cursor, { match: "c:*", count: 500 });
  cursor = String(next);
  compares += keys.length;
} while (cursor !== "0");
console.log(`\nAktif karşılaştırma bağlantısı: ${compares}\n`);
