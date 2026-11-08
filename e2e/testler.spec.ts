import { answerAll, expect, test } from "./fixtures";

test("ana sayfadaki canlı soru testi 2. sorudan başlatır", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/");
  const live = page.locator("main").getByRole("button").filter({ hasText: "Hayranın yazmış" });
  await live.click();
  await expect(page).toHaveURL(/\/testler\/kiskanclik-testi\?ilk=2$/);
  await expect(page.getByRole("progressbar", { name: "İlerleme" })).toHaveAttribute("aria-valuenow", "2");
});

test("bir test baştan sona çözülür ve sonuç sayfası doğru çalışır", async ({ page, request, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/testler/red-flag-testi");
  await page.getByRole("button", { name: "Teste başla" }).click();
  await answerAll(page, 1, 15);

  // Son cevaptan sonra sonuç sayfasına geçiş ve içeriğin yüklenmesi yük altında birkaç saniye sürebilir
  await expect(page).toHaveURL(/\/testler\/red-flag-testi\/sonuc\/[a-z-]+\?s=\d+-\d+-\d+-\d+$/, { timeout: 15_000 });
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible({ timeout: 15_000 });
  // 4 boyut çubuğu + headline
  for (const label of ["Manipülasyon", "Öfke patlaması", "Duygusal mesafe", "Drama"]) {
    await expect(page.getByText(label, { exact: true }).first()).toBeVisible();
  }
  await expect(page.getByRole("button", { name: "Story kartını paylaş" })).toBeVisible();
  await expect(page.getByRole("link", { name: /WhatsApp/ }).first()).toHaveAttribute("href", /^https:\/\/wa\.me\//);

  // Story görseli üretilebiliyor
  const url = new URL(page.url());
  const resultId = url.pathname.split("/").pop();
  const card = await request.get(`/api/kart/red-flag-testi/${resultId}?${url.searchParams.toString()}`);
  expect(card.status()).toBe(200);
  expect(card.headers()["content-type"]).toContain("image/png");
});

test("önceki soruya dönülebilir", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/testler/sevgi-dili-testi");
  await page.getByRole("button", { name: "Teste başla" }).click();
  await answerAll(page, 1, 2);
  await page.getByRole("button", { name: "Önceki soruya dön" }).click();
  await expect(page.getByRole("progressbar", { name: "İlerleme" })).toHaveAttribute("aria-valuenow", "2");
});

test("bağlantıyla gelen ziyaretçiye testi çöz daveti gösterilir", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/testler/kiskanclik-testi/sonuc/radar");
  await expect(page.getByRole("link", { name: "Testi çöz" })).toHaveAttribute("href", "/testler/kiskanclik-testi");
});
