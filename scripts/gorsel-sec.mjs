/**
 * Aday tablosundan seçilen fotoğrafı indirir, 800x600 WebP'ye çevirir ve atıf bilgisini kaydeder.
 *
 * Kullanım: node scripts/gorsel-sec.mjs <oyun-slug> <secenek-id> <aday-no> [--odak=center|north|south|east|west|attention]
 * Çıktı:    public/eleme/<slug>/<id>.webp
 *           src/content/brackets/gorseller/<slug>.json  (atıf ve lisans kaydı)
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const [slug, id, nStr, ...flags] = process.argv.slice(2);
const n = Number(nStr);
if (!slug || !id || !Number.isInteger(n)) {
  console.error("Kullanım: node scripts/gorsel-sec.mjs <slug> <id> <aday-no> [--odak=attention]");
  process.exit(1);
}
const UA = "SosyalEglenceGorselArama/1.0 (https://sosyaleglence.com; info@sosyaleglence.com)";
const candidates = JSON.parse(readFileSync(join(".gorsel-aday", slug, id, "adaylar.json"), "utf8"));
const c = candidates.find((x) => x.n === n);
if (!c) {
  console.error(`Aday ${n} yok.`);
  process.exit(1);
}
const focus = (flags.find((f) => f.startsWith("--odak=")) ?? "--odak=attention").split("=")[1];

const res = await fetch(c.full, { headers: { "User-Agent": UA } });
if (!res.ok) {
  console.error(`İndirilemedi: ${res.status}`);
  process.exit(1);
}
const buf = Buffer.from(await res.arrayBuffer());
const outDir = join("public", "eleme", slug);
mkdirSync(outDir, { recursive: true });
const position = focus === "attention" ? sharp.strategy.attention : focus;
await sharp(buf).rotate().resize(800, 600, { fit: "cover", position }).webp({ quality: 72 }).toFile(join(outDir, `${id}.webp`));

const metaDir = join("src", "content", "brackets", "gorseller");
mkdirSync(metaDir, { recursive: true });
const metaFile = join(metaDir, `${slug}.json`);
const meta = existsSync(metaFile) ? JSON.parse(readFileSync(metaFile, "utf8")) : {};
meta[id] = {
  src: `/eleme/${slug}/${id}.webp`,
  creator: c.creator.slice(0, 120),
  license: c.license,
  licenseUrl: c.licenseUrl,
  source: c.source,
  sourceUrl: c.landing,
  title: c.title.slice(0, 140),
};
// Kararlı sıralama: farklar okunaklı kalsın
const sorted = Object.fromEntries(Object.keys(meta).sort().map((k) => [k, meta[k]]));
writeFileSync(metaFile, JSON.stringify(sorted, null, 2) + "\n");
console.log(`Kaydedildi: ${join(outDir, `${id}.webp`)}  (${c.license}, ${c.creator.slice(0, 40)})`);
