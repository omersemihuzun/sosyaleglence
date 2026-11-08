/**
 * Anonim istatistik bildirimi. Kişisel veri gönderilmez; sadece hangi sonucun / seçimin çıktığı.
 * Aynı tarayıcıdan aynı içerik için 10 dakikada bir kez sayılır (yenileme ile şişirmeyi önler).
 */
function once(key: string): boolean {
  try {
    const k = `sayildi:${key}`;
    const last = Number(localStorage.getItem(k) ?? 0);
    const now = new Date().getTime();
    if (now - last < 10 * 60 * 1000) return false;
    localStorage.setItem(k, String(now));
  } catch {
    /* depolama kapalıysa yine de say */
  }
  return true;
}

function send(url: string, body: unknown) {
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    keepalive: true,
  }).catch(() => {});
}

export function reportTestResult(slug: string, result: string) {
  if (once(`t:${slug}`)) send("/api/istatistik/test", { slug, result });
}

/** Test hunisi: başlatma (10 dakikada bir sayılır) */
export function reportTestStart(slug: string): boolean {
  if (!once(`h:${slug}`)) return false;
  send("/api/istatistik/huni", { slug, olay: "basla" });
  return true;
}

/** Sayfadan ayrılırken yarıda bırakılan soru. Sayfa kapanırken de gitsin diye sendBeacon. */
export function reportTestAbandon(slug: string, soru: number) {
  const body = JSON.stringify({ slug, olay: "birak", soru });
  try {
    if (navigator.sendBeacon?.("/api/istatistik/huni", new Blob([body], { type: "text/plain" }))) return;
  } catch {
    /* yedek yola düş */
  }
  send("/api/istatistik/huni", JSON.parse(body));
}

/** Bitiş: her sorudaki şık (orijinal sıra) ve başlangıçtan bu yana geçen saniye */
export function reportTestFinish(slug: string, cevaplar: number[], baslangic: number) {
  const sure = (Date.now() - baslangic) / 1000;
  send("/api/istatistik/huni", { slug, olay: "bitir", cevaplar, sure });
}

export function reportBracket(slug: string, picks: [winner: string, loser: string][]) {
  if (once(`b:${slug}`)) send("/api/istatistik/eleme", { slug, picks });
}

