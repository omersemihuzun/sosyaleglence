/**
 * Wikimedia/Openverse "yapan" alanını okunur bir atıfa çevirir.
 * Commons'ın Artist alanı bazen fotoğrafçının notunu, makine notlarını ya da HTML artıklarını içerir.
 *
 * Tek başına çalıştırılırsa: tüm gorseller/*.json kayıtlarını temizler (geriye dönük düzeltme).
 *   node scripts/atif-temizle.mjs
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTITIES = { "&amp;": "&", "&quot;": '"', "&#39;": "'", "&apos;": "'", "&lt;": "<", "&gt;": ">", "&nbsp;": " " };

export function cleanCreator(raw, uploader = "") {
  let s = String(raw ?? "");
  for (const [k, v] of Object.entries(ENTITIES)) s = s.split(k).join(v);
  s = s.replace(/\s+/g, " ").trim();

  // "No machine-readable author provided. X assumed (based on copyright claims)."
  const assumed = s.match(/No machine-readable author provided\.\s*(.+?)\s+assumed/i);
  if (assumed) s = assumed[1];
  // "This Photo was taken by X. Feel free to use..." / "Photo by X"
  const takenBy = s.match(/(?:photo was taken by|photo by|photograph by)\s+([^.,;]+)/i);
  if (takenBy) s = takenBy[1];
  // Fotoğrafçının ek notunu kes: e-posta, "I'd appreciate", parantezli takma adlar
  s = s.replace(/\s*I'?d appreciate.*$/i, "").replace(/\s*\(?[\w.+-]+@[\w-]+\.[\w.]+\)?/g, "");
  // "Ad This photo was taken with <kamera>" ve kapanmamış parantezle kesilmiş ekler: "Ad(from T…"
  s = s.replace(/\s*This (?:photo|picture|image) was (?:taken|made|shot) with.*$/i, "");
  s = s.replace(/\s*\([^)]*$/, "");
  s = s.replace(/\s*\(([^)]+)\)\s*$/, (m, inner) => (s.startsWith(inner) ? "" : m));
  // "Dosya.JPG: Ad derivative work: Ad2" -> "Ad (türev: Ad2)"
  const deriv = s.match(/^.*?\.(?:jpe?g|png|tiff?):\s*(.+?)\s+derivative work:\s*(.+)$/i);
  if (deriv) s = `${deriv[1]} (türev: ${deriv[2]})`;
  // Wiki kullanıcı önekleri ve "~commonswiki" ekleri
  s = s.replace(/^(?:User|Kullanıcı):/i, "").replace(/~commonswiki/gi, "");
  // pixabay profil adresi -> kullanıcı adı
  const pix = s.match(/pixabay\.com\/users\/([a-z0-9_-]+?)(?:-\d+)?\/?$/i);
  if (pix) s = `${pix[1]} (Pixabay)`;
  s = s
    .replace(/\s+/g, " ")
    .replace(/[\s.,;:]+$/, "")
    .trim();

  if (!s || /^bilinmiyor$/i.test(s)) {
    const u = String(uploader)
      .replace(/~commonswiki/gi, "")
      .trim();
    // Commons'ta yazar belirtilmemişse telif beyanına göre yükleyen kişi yazar sayılır
    return u ? `${u} (Wikimedia Commons)` : "Bilinmiyor";
  }
  return s.length > 80 ? s.slice(0, 77).trimEnd() + "…" : s;
}

// Doğrudan çalıştırıldıysa: mevcut kayıtları düzelt
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const dir = join("src", "content", "brackets", "gorseller");
  // Elle doğrulanan, API'de yazar alanı boş olan kayıtlar (yükleyen kullanıcı)
  const uploaders = { "en-iyi-kahvaltilik/simit": "Barbarossa" };
  let changed = 0;
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".json"))) {
    const slug = f.replace(".json", "");
    const data = JSON.parse(readFileSync(join(dir, f), "utf8"));
    for (const [id, v] of Object.entries(data)) {
      const next = cleanCreator(v.creator, uploaders[`${slug}/${id}`]);
      if (next !== v.creator) {
        console.log(`${slug}/${id}: "${v.creator.slice(0, 60)}" -> "${next}"`);
        v.creator = next;
        changed++;
      }
    }
    writeFileSync(join(dir, f), JSON.stringify(data, null, 2) + "\n");
  }
  console.log(`${changed} atıf düzeltildi.`);
}
