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

  const hrefs = await page
    .locator("a.store-btn")
    .evaluateAll((els) => els.slice(0, 3).map((e) => (e as HTMLAnchorElement).href));
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

test("isimle aşk testi: boş isimde uyarır, iki isimle sıradan bağımsız aynı puanı verir", async ({
  page,
  consoleErrors,
}) => {
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

test("isimle aşk testi: story kartı tarayıcıda PNG olarak üretilir", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/ask-testi");
  await page.getByLabel("Senin adın").fill("Şeyma");
  await page.getByLabel("Onun adı").fill("Çağrı");
  await page.locator("[data-hesapla]").click();
  // Masaüstünde Web Share dosya desteği yok, kart indirilir
  await page.evaluate(() => Object.defineProperty(navigator, "canShare", { value: undefined, configurable: true }));
  const [d] = await Promise.all([page.waitForEvent("download"), page.locator("[data-story]").click()]);
  expect(d.suggestedFilename()).toBe("isim-uyumu.png");
});

test("Bunu mu O mu: oy değiştirilebilir, soru atlanır, tur istenince biter ve 10 soruda özet gelir", async ({
  page,
  consoleErrors,
}) => {
  void consoleErrors;
  const istekler: { id: string; choice: string; degistir?: boolean }[] = [];
  await page.route("**/api/anket", async (route) => {
    if (route.request().method() !== "POST") return route.continue();
    const b = JSON.parse(route.request().postData() ?? "{}");
    istekler.push(b);
    await route.fulfill({ contentType: "application/json", body: JSON.stringify({ enabled: true, a: 60, b: 40 }) });
  });
  await page.goto("/bunu-mu-o-mu");
  const options = page.locator("main button[aria-pressed]");
  await options.first().click();
  await expect(options.first()).toHaveAttribute("aria-pressed", "true");
  // Fikir değiştir
  await options.last().click();
  await expect(options.last()).toHaveAttribute("aria-pressed", "true");
  await expect(options.first()).toHaveAttribute("aria-pressed", "false");
  expect(istekler.map((i) => [i.choice, Boolean(i.degistir)])).toEqual([
    ["a", false],
    ["b", true],
  ]);

  // Sıradaki, sonra atla
  await page.getByRole("button", { name: "Sıradaki" }).click();
  await expect(page.getByText("Tur: 2/10")).toBeVisible();
  await page.getByRole("button", { name: "Atla" }).click();
  await expect(page.getByText("Tur: 3/10")).toBeVisible();

  // Turu bitir: özet ilk sorudaki son seçimi gösterir
  await page.getByRole("button", { name: "Turu bitir" }).click();
  const ozet = page.locator("[data-ozet]");
  await expect(ozet.getByRole("heading", { name: "Tur bitti!" })).toBeVisible();
  await expect(ozet.locator("li")).toHaveCount(1);

  // Yeni tur, 10 soruyu tamamla
  await ozet.getByRole("button", { name: /soru daha/ }).click();
  for (let i = 1; i <= 10; i++) {
    await expect(page.getByText(`Tur: ${i}/10`)).toBeVisible();
    await options.first().click();
    await page.getByRole("button", { name: i === 10 ? "Turu tamamla" : "Sıradaki" }).click();
  }
  await expect(ozet.locator("li")).toHaveCount(10);
  await expect(ozet).toContainText("10 sorunun 10 tanesinde");
});
