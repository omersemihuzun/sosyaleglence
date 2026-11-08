import { expect, test } from "./fixtures";

test("Bunu mu O mu: oy verilir ve sıradaki soruya geçilir", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/bunu-mu-o-mu");
  const options = page.locator("main button[aria-pressed]");
  await expect(options).toHaveCount(2);
  const firstLabel = await options.first().innerText();
  await options.first().click();
  await expect(options.first()).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "Sıradaki" }).click();
  await expect(options.first()).toHaveAttribute("aria-pressed", "false");
  await expect(options.first()).not.toHaveText(firstLabel);
});

test("hediye bulucu adresten ön seçimi okur, bütçe sonuçları değiştirir", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/hediye?kime=anne");
  await expect(page.getByRole("button", { name: "Annem" })).toHaveAttribute("aria-pressed", "true");

  const heading = page.getByText(/fikir bulduk$/);
  const before = await heading.innerText();
  await page.getByRole("button", { name: "500 TL altı" }).click();
  await expect(heading).not.toHaveText(before);
  await expect(page).toHaveURL(/kime=anne&butce=1/);

  const hrefs = await page.locator("a.store-btn").evaluateAll((els) => els.slice(0, 3).map((e) => (e as HTMLAnchorElement).href));
  expect(hrefs[0]).toMatch(/^https:\/\/www\.trendyol\.com\/sr\?q=/);
  expect(hrefs[1]).toMatch(/^https:\/\/www\.hepsiburada\.com\/ara\?q=/);
  expect(hrefs[2]).toMatch(/^https:\/\/www\.amazon\.com\.tr\/s\?k=/);
});

test("karşılaştırma: geçersiz kod 404 verir", async ({ page, consoleErrors }) => {
  void consoleErrors;
  const res = await page.goto("/testler/kiskanclik-testi/karsilastir/gecersiz");
  expect(res?.status()).toBe(404);
});

test("karşılaştırma: biçimi doğru ama olmayan kod anlaşılır bir hata gösterir", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/testler/kiskanclik-testi/karsilastir/0123456789");
  // Veritabanı yoksa "kullanılamıyor", varsa "süresi dolmuş" mesajı
  await expect(page.getByText(/kullanılamıyor|süresi dolmuş|bulunamadı/)).toBeVisible();
  await expect(page.getByRole("link", { name: "Testi baştan çöz" })).toBeVisible();
});

test("eski WordPress adresleri yeni sayfalara yönlenir", async ({ page }) => {
  await page.goto("/quizmaker/");
  await expect(page).toHaveURL(/\/testler\/kiskanclik-testi$/);
  await page.goto("/hediye-%C3%B6nerileri/");
  await expect(page).toHaveURL(/\/hediye$/);
  await page.goto("/iletiu015fim/");
  await expect(page).toHaveURL(/\/iletisim$/);
});

test("isimle aşk testi: boş isimde uyarır, iki isimle sıradan bağımsız aynı puanı verir", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/ask-testi");
  const hesapla = page.locator("[data-hesapla]");
  await hesapla.click();
  await expect(page.locator("main [role=alert]")).toContainText("İki ismi de yaz");

  await page.getByLabel("Senin adın").fill("elif");
  await page.getByLabel("Onun adı").fill("KEREM");
  await hesapla.click();
  const sonuc = page.locator("[data-sonuc]");
  await expect(sonuc).toContainText("Elif");
  await expect(sonuc).toContainText("Kerem");
  const puan = sonuc.locator("p.text-cherry");
  await expect(puan).toHaveText(/%\d+/, { timeout: 15_000 });
  await page.waitForTimeout(1300);
  const ilk = await puan.innerText();

  await page.getByLabel("Senin adın").fill("Kerem");
  await page.getByLabel("Onun adı").fill("Elif");
  await hesapla.click();
  await page.waitForTimeout(1300);
  await expect(puan).toHaveText(ilk);
  await expect(sonuc.getByRole("link", { name: /WhatsApp/ })).toHaveAttribute("href", /wa\.me/);
});
