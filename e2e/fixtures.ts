import { test as base, expect, type Page } from "@playwright/test";

/**
 * Her testte konsol hatalarını ve yakalanmamış istisnaları toplar; test sonunda boş olmalı.
 * CSP ihlalleri ve hydration hataları konsola "error" olarak düşer.
 */
export const test = base.extend<{ consoleErrors: string[] }>({
  consoleErrors: async ({ page }, provide) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() !== "error") return;
      const text = msg.text();
      // Testin kasıtlı ürettiği 404/503 yanıtlarının tarayıcı kaydı hata sayılmaz
      if (/Failed to load resource: the server responded with a status of (404|503)/.test(text)) return;
      errors.push(text);
    });
    page.on("pageerror", (err) => errors.push(`pageerror: ${err.message}`));
    await provide(errors);
    expect(errors, "konsolda hata olmamalı").toEqual([]);
  },
});

export { expect };

/** Testteki ilk şıkkı (karıştırılmış sırada) seçerek ilerler. */
export async function answerAll(page: Page, from: number, total: number) {
  for (let i = from; i <= total; i++) {
    await expect(page.getByRole("progressbar", { name: "İlerleme" })).toHaveAttribute("aria-valuenow", String(i));
    await page.locator("main ul.grid > li button").first().click();
  }
}

export async function noHorizontalOverflow(page: Page) {
  const { scroll, client } = await page.evaluate(() => ({
    scroll: document.documentElement.scrollWidth,
    client: document.documentElement.clientWidth,
  }));
  expect(scroll, "yatay taşma olmamalı").toBeLessThanOrEqual(client);
}
