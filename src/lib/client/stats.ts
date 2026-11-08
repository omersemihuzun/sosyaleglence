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

export function reportBracket(slug: string, picks: [winner: string, loser: string][]) {
  if (once(`b:${slug}`)) send("/api/istatistik/eleme", { slug, picks });
}

export function reportPollVote(id: string, choice: "a" | "b") {
  send("/api/anket", { id, choice });
}
