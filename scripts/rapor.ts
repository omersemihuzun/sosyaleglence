/**
 * İstatistik raporu: hangi test kaç kez çözüldü, hangi turnuvada kim önde, anketlerde ne durumda.
 *
 * Kullanım:
 *   vercel env pull .env.local --yes   (bir kez, veritabanı bilgilerini çeker)
 *   npm run rapor
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
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
    for (const k of keys) out.push([k, ((await redis.hgetall<Record<string, number>>(k)) ?? {}) as Record<string, number>]);
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
