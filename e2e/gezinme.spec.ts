import { expect, noHorizontalOverflow, test } from "./fixtures";

test("mobil menü açılır, Esc ile kapanır, odak butona döner", async ({ page, consoleErrors, isMobile }) => {
  void consoleErrors;
  test.skip(!isMobile, "mobil menü sadece dar ekranda");
  await page.goto("/");
  const button = page.getByRole("button", { name: "Menü" });
  await expect(button).toHaveAttribute("aria-expanded", "false");
  await button.click();
  const dialog = page.getByRole("dialog", { name: "Menü" });
  await expect(dialog).toBeVisible();
  await expect(button).toHaveAttribute("aria-expanded", "true");
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("hidden");

  // Odak menünün içinde kalır
  for (let i = 0; i < 12; i++) await page.keyboard.press("Tab");
  expect(await page.evaluate(() => document.getElementById("mobil-menu")?.contains(document.activeElement))).toBe(true);

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(button).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
});

test("mobil menüden bir bölüme gidince menü kapanır ve aktif bölüm işaretlenir", async ({
  page,
  consoleErrors,
  isMobile,
}) => {
  void consoleErrors;
  test.skip(!isMobile, "mobil menü sadece dar ekranda");
  await page.goto("/");
  await page.getByRole("button", { name: "Menü" }).click();
  await page
    .getByRole("dialog", { name: "Menü" })
    .getByRole("link", { name: /Burçlar/ })
    .click();
  await expect(page).toHaveURL(/\/burclar$/);
  await expect(page.getByRole("dialog", { name: "Menü" })).toBeHidden();
  await page.getByRole("button", { name: "Menü" }).click();
  await expect(page.getByRole("dialog", { name: "Menü" }).getByRole("link", { name: /Burçlar/ })).toHaveAttribute(
    "aria-current",
    "page",
  );
});

test("masaüstü menüsü bütün bölümleri gösterir ve aktif olanı işaretler", async ({ page, consoleErrors, isMobile }) => {
  void consoleErrors;
  test.skip(isMobile, "masaüstü menüsü geniş ekranda");
  await page.goto("/eleme");
  const nav = page.getByRole("navigation", { name: "Ana menü" });
  for (const name of ["Testler", "Eleme", "Bunu mu O mu", "Burçlar", "Hediye", "Rehber"]) {
    await expect(nav.getByRole("link", { name, exact: true })).toBeVisible();
  }
  await expect(nav.getByRole("link", { name: "Eleme", exact: true })).toHaveAttribute("aria-current", "page");
});

test("arama: koc yazınca Koç burcu ve Koç uyumları gelir, adres güncellenir", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/");
  await page.getByRole("link", { name: "Sitede ara" }).first().click();
  await expect(page).toHaveURL(/\/ara/);
  const box = page.getByRole("searchbox", { name: "Sitede ara" });
  await box.fill("koc");
  await expect(page.getByRole("heading", { name: /Burçlar/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Koç burcu/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Burç uyumları/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Koç ve Aslan uyumu/ })).toBeVisible();
  await expect(page).toHaveURL(/\?q=koc/);

  // Ok tuşuyla ilk sonuca inilir
  await box.press("ArrowDown");
  await expect(page.locator("a[data-sonuc]").first()).toBeFocused();
  await noHorizontalOverflow(page);
});

test("arama: ?q=kiskanc adresi doğrudan Kıskançlık testini bulur", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/ara?q=kiskanc");
  await expect(page.getByRole("searchbox", { name: "Sitede ara" })).toHaveValue("kiskanc");
  const link = page.getByRole("link", { name: /Ne Kadar Kıskançsın/ });
  await expect(link).toBeVisible();
  await link.click();
  await expect(page).toHaveURL(/\/testler\/kiskanclik-testi$/);
});

test("arama: bulunamayan sorgu yol gösterir", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/ara?q=zzqqxx");
  await expect(page.getByRole("status").filter({ hasText: "bulamadık" })).toBeVisible();
});

test("404 sayfasındaki arama kutusu arama sayfasına götürür", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/olmayan-bir-sayfa");
  await page.getByRole("searchbox").fill("hediye");
  await page.getByRole("button", { name: "Ara" }).click();
  await expect(page).toHaveURL(/\/ara\?q=hediye/);
  await expect(page.getByRole("heading", { name: /Hediye rehberleri/ })).toBeVisible();
});
