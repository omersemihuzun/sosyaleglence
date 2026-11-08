/**
 * Her eleme fotoğrafı için kartlarda kullanılan küçük sürümü (400x300, "-k.webp") üretir.
 * Tam boy (800x600) sadece turnuva eşleşmesinde ve sonuç sayfasında yüklenir.
 * Kullanım: node scripts/kucuk-gorsel.mjs   (eksik olanları üretir; --hepsi ile hepsini yeniden)
 */
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const all = process.argv.includes("--hepsi");
const root = join("public", "eleme");
let made = 0;
for (const slug of readdirSync(root)) {
  for (const f of readdirSync(join(root, slug))) {
    if (!f.endsWith(".webp") || f.endsWith("-k.webp")) continue;
    const out = join(root, slug, f.replace(/\.webp$/, "-k.webp"));
    if (!all && existsSync(out)) continue;
    await sharp(join(root, slug, f))
      .resize(400, 300, { fit: "cover" })
      .webp({ quality: 66 })
      .toFile(out);
    made++;
  }
}
console.log(`${made} küçük görsel üretildi.`);
