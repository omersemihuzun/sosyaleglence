/** WCAG 2.x göreli parlaklık. */
function luminance(hex: string): number {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(full.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrast(a: string, b: string): number {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

function darken(hex: string, amount: number): string {
  const h = hex.replace("#", "");
  const out = [0, 2, 4]
    .map((i) => Math.round(parseInt(h.slice(i, i + 2), 16) * (1 - amount)))
    .map((v) => v.toString(16).padStart(2, "0"))
    .join("");
  return `#${out}`;
}

const PAPER = "#fff7f3";
const PLUM = "#2b1030";
const AA = 4.5;

/**
 * Renkli bir zemin için erişilebilir (WCAG AA, 4.5:1) zemin + yazı çifti.
 * 1. Kâğıt beyazı yazı yetiyorsa onu, 2. mürdüm yetiyorsa onu kullanır.
 * 3. İkisi de yetmiyorsa (orta tonlar: ör. #3B6FD9, #DB2777) zemini açık yazı okunur hâle
 *    gelene kadar hafifçe koyulaştırır. İçerikteki renk tanımları değişmez.
 */
export function textOn(bg: string): { color: string; background: string; isLight: boolean } {
  if (contrast(PAPER, bg) >= AA) return { color: PAPER, background: bg, isLight: true };
  if (contrast(PLUM, bg) >= AA) return { color: PLUM, background: bg, isLight: false };
  let amount = 0.04;
  let darker = darken(bg, amount);
  while (contrast(PAPER, darker) < AA && amount < 0.6) {
    amount += 0.04;
    darker = darken(bg, amount);
  }
  return { color: PAPER, background: darker, isLight: true };
}

/** Satır içi stil olarak: `style={onColor(result.color)}` */
export function onColor(bg: string): { background: string; color: string } {
  const { background, color } = textOn(bg);
  return { background, color };
}
