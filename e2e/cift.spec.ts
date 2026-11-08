import { expect, test } from "./fixtures";

test.use({ reducedMotion: "reduce" });

test("çift oyunları sayfası beş oyunu listeler ve menüde görünür", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/cift-oyunlari");
  await expect(page.getByRole("heading", { level: 1, name: "Çift oyunları" })).toBeVisible();
  await expect(page.locator("main ul > li > a[href^='/cift-oyunlari/']")).toHaveCount(5);
});

test("sohbet kartları: ilerler, geri gelir, kategori filtresi desteyi küçültür", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/cift-oyunlari/sohbet-kartlari");
  const kart = page.locator("[data-kart]");
  await expect(kart).toContainText("1 / 150");
  const ilk = await kart.locator("p").nth(1).innerText();
  await page.getByRole("button", { name: "Sıradaki soru" }).click();
  await expect(kart).toContainText("2 / 150");
  await page.getByRole("button", { name: "Önceki" }).click();
  await expect(kart.locator("p").nth(1)).toHaveText(ilk);
  // Dört kategoriyi kapat: sadece biri kalır (30 kart)
  for (const ad of ["Derin", "Anılar", "Gelecek", "Hayaller"]) await page.getByRole("button", { name: ad }).click();
  await expect(kart).toContainText("1 / 30");
  await expect(kart).toContainText("Eğlenceli");
});

test("doğruluk mu cesaret mi: sıra değişir, puan tutulur", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/cift-oyunlari/dogruluk-mu-cesaret-mi");
  await page.getByLabel("1. oyuncu").fill("Elif");
  await page.getByLabel("2. oyuncu").fill("Kerem");
  await page.getByRole("button", { name: "Oyunu başlat" }).click();
  await expect(page.getByText("Sıra sende")).toBeVisible();
  await expect(page.locator("main")).toContainText("Elif");
  await page.getByRole("button", { name: "Cesaret" }).click();
  await expect(page.locator("[data-kart]")).toContainText("Elif · Cesaret");
  await page.getByRole("button", { name: /Yaptı/ }).click();
  await expect(page.getByText("Elif 1 · 0 Kerem")).toBeVisible();
  await page.getByRole("button", { name: "Doğruluk" }).click();
  await expect(page.locator("[data-kart]")).toContainText("Kerem · Doğruluk");
  await page.getByRole("button", { name: "Pas" }).click();
  await expect(page.getByText("Elif 1 · 0 Kerem")).toBeVisible();
});

test("hangimiz daha çok: 12 soruluk tur karneyle biter", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/cift-oyunlari/hangimiz-daha-cok");
  await page.getByLabel("1. kişi").fill("Elif");
  await page.getByLabel("2. kişi").fill("Kerem");
  await page.getByRole("button", { name: "Başlayalım" }).click();
  for (let i = 1; i <= 12; i++) {
    await expect(page.getByText(`Soru ${i}/12`)).toBeVisible();
    await page.getByRole("button", { name: i % 3 === 0 ? "İkimiz de" : "Elif" }).click();
  }
  const karne = page.locator("[data-karne]");
  await expect(karne.getByRole("heading", { name: "Tur karnesi" })).toBeVisible();
  await expect(karne.locator("li")).toHaveCount(12);
  await expect(karne).toContainText("Elif");
});

test("randevu çarkı: filtreye uyan fikirlerle döner ve bir plan çıkarır", async ({ page, consoleErrors }) => {
  void consoleErrors;
  await page.goto("/cift-oyunlari/randevu-carki");
  await page.getByRole("button", { name: "Evde" }).click();
  await page.getByRole("button", { name: "Ücretsiz" }).click();
  await expect(page.getByRole("list", { name: "Çarktaki fikirler" }).locator("li")).toHaveCount(8);
  await page.getByRole("button", { name: "Çarkı çevir" }).click();
  const sonuc = page.locator("[data-sonuc]");
  await expect(sonuc).toContainText("Evde · Ücretsiz");
  await expect(page.getByRole("button", { name: "Bir daha çevir" })).toBeVisible();
});

test("beni ne kadar tanıyorsun: kur, paylaş; tahmin eden cevapları ancak gönderince görür", async ({
  page,
  consoleErrors,
}) => {
  void consoleErrors;
  const KOD = "0123456789abcdef";
  let kurulum: { sorular: string[]; cevaplar: number[] } | null = null;
  await page.route("**/api/taniyor", async (route) => {
    kurulum = JSON.parse(route.request().postData() ?? "{}");
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({ kod: KOD, anahtar: "a".repeat(32) }),
    });
  });
  await page.route(`**/api/taniyor/${KOD}/sonuclar`, (route) =>
    route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({ ad: "Elif", sorular: kurulum!.sorular, cevaplar: kurulum!.cevaplar, sonuclar: [] }),
    }),
  );

  await page.goto("/cift-oyunlari/beni-ne-kadar-taniyorsun");
  await page.getByLabel(/Adın/).fill("Elif");
  await page.getByRole("button", { name: "Soruları cevapla" }).click();
  for (let i = 1; i <= 10; i++) {
    await expect(page.getByText(`Soru ${i}/10`)).toBeVisible();
    await page
      .locator("[data-secenek]")
      .nth(i % 4)
      .click();
  }
  await expect(page.locator("[data-paylas]")).toContainText("Oyunun hazır!");
  await expect(page.locator("[data-paylas] a")).toHaveAttribute("href", new RegExp(`wa\\.me.*${KOD}`));
  expect(kurulum!.sorular).toHaveLength(10);
  await expect(page.locator("[data-sonuclar]")).toContainText("Henüz kimse çözmedi");

  // Başka bir tarayıcı (sahip kaydı yok) linki açar
  const misafir = await page.context().browser()!.newPage();
  let davetYaniti = "";
  await misafir.route(`**/api/taniyor/${KOD}`, async (route) => {
    if (route.request().method() === "GET") {
      davetYaniti = JSON.stringify({ ad: "Elif", sorular: kurulum!.sorular });
      return route.fulfill({ contentType: "application/json", body: davetYaniti });
    }
    const { tahminler } = JSON.parse(route.request().postData() ?? "{}");
    const puan = kurulum!.cevaplar.filter((c, i) => c === tahminler[i]).length;
    return route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({ puan, toplam: 10, cevaplar: kurulum!.cevaplar }),
    });
  });
  await misafir.goto(`/cift-oyunlari/beni-ne-kadar-taniyorsun/${KOD}`);
  await expect(misafir.getByText("Elif seni ne kadar tanıdığını merak ediyor")).toBeVisible();
  expect(davetYaniti).not.toContain("cevaplar");
  await misafir.getByLabel("Senin adın").fill("Kerem");
  await misafir.getByRole("button", { name: "Tahmin etmeye başla" }).click();
  for (let i = 1; i <= 10; i++) {
    await expect(misafir.getByText(`Soru ${i}/10`)).toBeVisible();
    await misafir.locator("[data-secenek]").first().click();
  }
  const sonuc = misafir.locator("[data-sonuc]");
  await expect(sonuc).toContainText("/10");
  await expect(sonuc.locator("li")).toHaveCount(10);
  await misafir.close();
});

test("beni ne kadar tanıyorsun: bozuk kod 404", async ({ page, consoleErrors }) => {
  void consoleErrors;
  const res = await page.goto("/cift-oyunlari/beni-ne-kadar-taniyorsun/bozuk-kod");
  expect(res?.status()).toBe(404);
});
