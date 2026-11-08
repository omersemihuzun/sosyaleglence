import { defineConfig, devices } from "@playwright/test";

const PORT = Number(process.env.E2E_PORT ?? 3314);

/**
 * Uçtan uca testler production build üzerinde çalışır (dev sunucusu değil):
 * CSP, statik üretim ve hydration davranışı gerçek ortamla aynı olsun.
 * Build'i önceden almak için: `npm run build`. CI'da build ayrı adımda yapılır.
 */
export default defineConfig({
  testDir: "e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["list"]] : "list",
  timeout: 60_000,
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "retain-on-failure",
    locale: "tr-TR",
  },
  projects: [
    { name: "masaustu", use: { ...devices["Desktop Chrome"] } },
    { name: "mobil", use: { ...devices["Pixel 7"] } },
  ],
  webServer: {
    command: `npx next start -p ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    env: {
      // Testler veritabanı olmadan da geçmeli: istatistik özellikleri sessizce kapanır
      UPSTASH_REDIS_REST_URL: "",
      UPSTASH_REDIS_REST_TOKEN: "",
      KV_REST_API_URL: "",
      KV_REST_API_TOKEN: "",
    },
  },
});
