import AxeBuilder from "@axe-core/playwright";
import { expect, noHorizontalOverflow, test } from "./fixtures";

const pages = [
  "/",
  "/testler",
  "/testler/kiskanclik-testi",
  "/testler/kiskanclik-testi/sonuc/atesli-koruyucu?s=82-10-38-6",
  "/testler/sevgi-dili-testi/sonuc/soz",
  // Orta tonlu sonuç renkleri (ne açık ne koyu yazı tek başına 4.5:1 vermiyordu)
  "/testler/baglanma-stili-testi/sonuc/kacingan",
  "/eleme/sevgiliden-gelecek-en-guzel-mesaj/sonuc/komik-video",
  "/eleme",
  "/eleme/gelecekteki-evini-sec",
  "/eleme/hayalindeki-dugun/sonuc/kir?f=sahil&y=yali,koy",
  "/bunu-mu-o-mu",
  "/hediye",
  "/hediye/sevgiliye-yilbasi-hediyesi",
  "/iletisim",
  "/gizlilik",
  // Sonradan eklenen modüller
  "/testler/sofra-kur-sehir-testi",
  "/testler/hangi-tip-sevgilisin-testi",
  "/burclar",
  "/burclar/aslan",
  "/burc-uyumu/koc-ve-aslan",
  "/burc-uyumu/basak-ve-yay",
];

for (const path of pages) {
  test(`erişilebilirlik ve taşma: ${path}`, async ({ page, consoleErrors }) => {
    void consoleErrors;
    await page.goto(path);
    await page.waitForLoadState("networkidle");
    // Giriş animasyonları (pop-in, çubuk büyümesi) bitsin; yarı saydam karede kontrast yanlış ölçülür
    await page.waitForTimeout(900);

    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
    const serious = results.violations
      .filter((v) => v.impact === "critical" || v.impact === "serious")
      .map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.slice(0, 5).map((n) => `${n.target.join(" ")} :: ${n.failureSummary?.split("\n")[1]?.trim() ?? ""}`),
      }));
    expect(serious, "kritik/ciddi erişilebilirlik ihlali olmamalı").toEqual([]);

    await noHorizontalOverflow(page);
  });
}
