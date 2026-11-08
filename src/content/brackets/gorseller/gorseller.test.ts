import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { brackets } from "@/content/brackets";
import { bracketImages } from "./index";

/** Değiştirme ve ticari kullanıma izin veren lisanslar. NC ve ND kesinlikle yok. */
const ALLOWED = /^(CC0|Kamu malı|CC BY( \d\.\d)?|CC BY-SA( \d\.\d)?)$/;

describe("eleme fotoğrafları", () => {
  const entries = Object.entries(bracketImages).flatMap(([slug, items]) =>
    Object.entries(items).map(([id, img]) => ({ slug, id, img })),
  );

  it("her kayıt var olan bir oyuna ve seçeneğe ait", () => {
    for (const { slug, id } of entries) {
      const b = brackets.find((x) => x.slug === slug);
      expect(b, `bilinmeyen oyun: ${slug}`).toBeDefined();
      expect(b!.items.some((i) => i.id === id), `${slug}: bilinmeyen seçenek ${id}`).toBe(true);
    }
  });

  it("her kaydın dosyası diskte var", () => {
    for (const { slug, id, img } of entries) {
      expect(img.src).toBe(`/eleme/${slug}/${id}.webp`);
      expect(existsSync(join(process.cwd(), "public", img.src)), img.src).toBe(true);
    }
  });

  it("lisanslar uygun ve atıf eksiksiz", () => {
    for (const { slug, id, img } of entries) {
      const where = `${slug}/${id}`;
      expect(img.license, where).toMatch(ALLOWED);
      expect(img.creator.trim().length, `${where}: yapan`).toBeGreaterThan(0);
      expect(img.sourceUrl, `${where}: kaynak`).toMatch(/^https:\/\//);
    }
  });
});
