import type { Page } from "@playwright/test";
import { expect, test } from "./fixtures";

/** VS kartları: turnuva ekranında sadece iki seçenek butonu büyük emoji içerir. */
function cards(page: Page) {
  return page.locator("main button").filter({ has: page.locator("span.text-6xl") });
}

test("eleme turnuvası oynanır, geri alma çalışır, sonuç yolu gösterilir", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/eleme/gelecekteki-evini-sec");
  await expect(page.getByRole("heading", { level: 1, name: "Gelecekteki Evini Seç" })).toBeVisible();
  await page.getByRole("button", { name: "Turnuvayı başlat" }).click();

  await expect(page.getByText("Son 16", { exact: true })).toBeVisible();
  await expect(page.getByText("1/8", { exact: true })).toBeVisible();
  await cards(page).first().click();
  await expect(page.getByText("2/8", { exact: true })).toBeVisible();

  await page.getByRole("button", { name: "Son seçimi geri al" }).click();
  await expect(page.getByText("1/8", { exact: true })).toBeVisible();

  // Seçimden sonra 380 ms'lik animasyon var; bu sırada gelen tıklamalar bilerek yok sayılır.
  // Bu yüzden her seçimden sonra eşleşmeyi duyuran canlı bölgenin değişmesini bekle.
  const live = page.locator('main p.sr-only[aria-live="polite"]');
  for (let i = 0; i < 15; i++) {
    await expect(cards(page)).toHaveCount(2);
    const before = await live.innerText();
    await cards(page).nth(i % 2).click();
    if (i < 14) await expect(live).not.toHaveText(before);
  }

  await expect(page).toHaveURL(/\/eleme\/gelecekteki-evini-sec\/sonuc\/[a-z0-9-]+\?f=[a-z0-9-]+&y=[a-z0-9-]+%2C[a-z0-9-]+$/);
  await expect(page.getByText("Şampiyona giden yol")).toBeVisible();
  await expect(page.getByText("Şampiyon", { exact: true })).toBeVisible();
  await expect(page.getByText("Finalist", { exact: true })).toBeVisible();
  await expect(page.getByText("Yarı final", { exact: true })).toHaveCount(2);
});

test("eleme sonuç sayfası doğrudan açılınca oynamaya davet eder", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/eleme/turk-mutfaginin-sampiyonu/sonuc/manti");
  await expect(page.getByRole("heading", { level: 1, name: "Mantı" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Turnuvayı oyna" })).toBeVisible();
});
