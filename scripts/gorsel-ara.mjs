/**
 * Eleme oyunu seçeneği için açık lisanslı fotoğraf adaylarını bulur ve numaralı bir aday tablosu üretir.
 *
 * Kullanım: node scripts/gorsel-ara.mjs <oyun-slug> <secenek-id> "<ingilizce arama>" [--openverse]
 * Çıktı:    .gorsel-aday/<slug>/<id>/tablo.jpg  (numaralı aday görselleri, gözle bakılır)
 *           .gorsel-aday/<slug>/<id>/adaylar.json
 *
 * Kaynaklar: Wikimedia Commons (varsayılan, sınırsız ama nazik kullanım) ve isteğe bağlı Openverse
 * (anonim kullanımda günde 200 istek). Sadece ticari kullanıma ve değiştirmeye izin veren lisanslar alınır.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const [slug, id, query, ...flags] = process.argv.slice(2);
if (!slug || !id || !query) {
  console.error('Kullanım: node scripts/gorsel-ara.mjs <slug> <id> "<arama>" [--openverse]');
  process.exit(1);
}
const UA = "SosyalEglenceGorselArama/1.0 (https://sosyaleglence.com; info@sosyaleglence.com)";
const dir = join(".gorsel-aday", slug, id);
mkdirSync(dir, { recursive: true });

/** Kabul edilen lisanslar: değiştirme + ticari kullanım serbest */
function normalizeLicense(raw) {
  const s = String(raw ?? "").toLowerCase().trim();
  if (/^cc0|cc-zero|public domain|^pd\b|pdm/.test(s)) return { code: s.includes("cc0") ? "CC0" : "Kamu malı", ok: true };
  const m = s.match(/cc[ -]by(-sa)?[ -]?(\d\.\d)?/);
  if (m && !/nc|nd/.test(s)) return { code: `CC BY${m[1] ? "-SA" : ""}${m[2] ? " " + m[2] : ""}`, ok: true };
  return { code: s, ok: false };
}

const strip = (html) => String(html ?? "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

async function commons(q) {
  const u = new URL("https://commons.wikimedia.org/w/api.php");
  Object.entries({
    action: "query",
    generator: "search",
    gsrsearch: `filetype:bitmap ${q}`,
    gsrnamespace: "6",
    gsrlimit: "14",
    prop: "imageinfo",
    iiprop: "url|extmetadata|size|mime",
    iiurlwidth: "900",
    format: "json",
  }).forEach(([k, v]) => u.searchParams.set(k, v));
  const res = await fetch(u, { headers: { "User-Agent": UA } });
  const j = await res.json();
  const pages = Object.values(j.query?.pages ?? {}).sort((a, b) => a.index - b.index);
  return pages
    .map((p) => {
      const i = p.imageinfo?.[0];
      if (!i || !/jpeg|png|webp/.test(i.mime)) return null;
      const m = i.extmetadata ?? {};
      const lic = normalizeLicense(m.LicenseShortName?.value);
      return {
        source: "Wikimedia Commons",
        title: p.title.replace(/^File:/, "").replace(/\.[a-z]+$/i, ""),
        thumb: i.thumburl,
        full: i.thumburl, // 900px genişlik yeterli; tam boy dosyayı indirmeye gerek yok
        width: i.width,
        height: i.height,
        creator: strip(m.Artist?.value) || "Bilinmiyor",
        license: lic.code,
        licenseOk: lic.ok,
        licenseUrl: m.LicenseUrl?.value ?? "",
        landing: i.descriptionurl,
      };
    })
    .filter((x) => x && x.licenseOk && x.width >= 640 && x.height >= 420);
}

async function openverse(q) {
  const u = new URL("https://api.openverse.org/v1/images/");
  u.searchParams.set("q", q);
  u.searchParams.set("license_type", "commercial,modification");
  u.searchParams.set("page_size", "8");
  const res = await fetch(u, { headers: { "User-Agent": UA } });
  if (!res.ok) return [];
  const j = await res.json();
  return (j.results ?? [])
    .filter((r) => (r.width ?? 0) >= 640)
    .map((r) => {
      const lic = normalizeLicense(`${r.license === "cc0" ? "cc0" : r.license === "pdm" ? "pdm" : "cc " + r.license} ${r.license_version ?? ""}`);
      return {
        source: r.source === "wikimedia" ? "Wikimedia Commons" : `Openverse (${r.source})`,
        title: r.title ?? "",
        thumb: r.thumbnail,
        full: r.url,
        width: r.width,
        height: r.height,
        creator: r.creator ?? "Bilinmiyor",
        license: lic.code,
        licenseOk: lic.ok,
        licenseUrl: r.license_url ?? "",
        landing: r.foreign_landing_url,
      };
    })
    .filter((x) => x.licenseOk);
}

const list = [...(await commons(query)), ...(flags.includes("--openverse") ? await openverse(query) : [])].slice(0, 12);
if (list.length === 0) {
  console.log("Aday bulunamadı. Farklı bir arama dene (İngilizce, somut nesne/yer adı).");
  process.exit(0);
}

// Numaralı aday tablosu (4 sütun, 300x225 hücreler)
const CELL_W = 300;
const CELL_H = 225;
const cols = 4;
const rows = Math.ceil(list.length / cols);
const tiles = [];
const kept = [];
for (const [n, c] of list.entries()) {
  try {
    const res = await fetch(c.thumb, { headers: { "User-Agent": UA } });
    if (!res.ok) continue;
    const buf = Buffer.from(await res.arrayBuffer());
    const img = await sharp(buf).resize(CELL_W, CELL_H, { fit: "cover" }).jpeg().toBuffer();
    const label = Buffer.from(
      `<svg width="${CELL_W}" height="${CELL_H}"><rect x="0" y="0" width="44" height="34" fill="#2B1030"/><text x="22" y="25" font-size="22" font-family="Arial" font-weight="bold" fill="#FFE066" text-anchor="middle">${kept.length}</text></svg>`,
    );
    const idx = kept.length;
    tiles.push({
      input: await sharp(img).composite([{ input: label }]).toBuffer(),
      left: (idx % cols) * CELL_W,
      top: Math.floor(idx / cols) * CELL_H,
    });
    kept.push({ n: idx, ...c });
  } catch {
    /* indirilemeyen adayı atla */
  }
  void n;
}
await sharp({ create: { width: cols * CELL_W, height: rows * CELL_H, channels: 3, background: "#ffffff" } })
  .composite(tiles)
  .jpeg({ quality: 80 })
  .toFile(join(dir, "tablo.jpg"));
writeFileSync(join(dir, "adaylar.json"), JSON.stringify(kept, null, 2));
console.log(`${kept.length} aday -> ${join(dir, "tablo.jpg")}`);
for (const c of kept) console.log(`  [${c.n}] ${c.license.padEnd(12)} ${c.title.slice(0, 70)}`);
