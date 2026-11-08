import type { IsimUyumu } from "@/lib/isim-uyumu";

/**
 * İsim uyumu story kartı (1080x1920 PNG). Tarayıcıda canvas ile çizilir; isimler sunucuya gitmez.
 * Site yazı tipleri next/font değişkenlerinden okunur, yüklenmemişse sistem yazı tipine düşer.
 */
export async function isimKartiOlustur(s: IsimUyumu, host: string): Promise<Blob> {
  const W = 1080;
  const H = 1920;
  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const g = c.getContext("2d");
  if (!g) throw new Error("canvas");

  const css = getComputedStyle(document.documentElement);
  const display = css.getPropertyValue("--font-bricolage").trim() || "system-ui";
  const body = css.getPropertyValue("--font-instrument").trim() || "system-ui";
  await document.fonts.ready;

  const PLUM = "#2b1030";
  const CHERRY = "#d7102f";

  g.fillStyle = "#ffd6de";
  g.fillRect(0, 0, W, H);
  // Dağınık kalpler
  g.font = `120px ${body}`;
  g.fillStyle = CHERRY;
  g.globalAlpha = 0.12;
  for (const [x, y] of [[120, 260], [900, 330], [170, 1560], [930, 1700], [880, 980], [110, 1050]]) g.fillText("❤", x, y);
  g.globalAlpha = 1;

  // Kart
  const kx = 80, ky = 360, kw = W - 160, kh = 1180, r = 48;
  const yuvarlak = (x: number, y: number, w: number, h: number) => {
    g.beginPath();
    g.roundRect(x, y, w, h, r);
  };
  g.fillStyle = PLUM;
  yuvarlak(kx + 14, ky + 18, kw, kh);
  g.fill();
  g.fillStyle = "#ffffff";
  yuvarlak(kx, ky, kw, kh);
  g.fill();
  g.lineWidth = 6;
  g.strokeStyle = PLUM;
  g.stroke();

  g.textAlign = "center";
  g.fillStyle = PLUM;
  g.font = `800 64px ${display}`;
  g.fillText("İsimle aşk testi", W / 2, 230);

  const sigdir = (metin: string, max: number, boyut: number, agirlik = 800, aile = display) => {
    let b = boyut;
    do g.font = `${agirlik} ${b}px ${aile}`;
    while (g.measureText(metin).width > max && (b -= 4) > 30);
  };

  const isimler = `${s.a}  ❤  ${s.b}`;
  sigdir(isimler, kw - 100, 72);
  g.fillText(isimler, W / 2, ky + 150);

  g.fillStyle = CHERRY;
  g.font = `800 300px ${display}`;
  g.fillText(`%${s.puan}`, W / 2, ky + 470);

  g.fillStyle = PLUM;
  sigdir(s.baslik, kw - 100, 64);
  g.fillText(s.baslik, W / 2, ky + 580);

  // Alt puanlar
  const bx = kx + 80, bw = kw - 160;
  s.alt.forEach((a, i) => {
    const y = ky + 690 + i * 115;
    g.textAlign = "left";
    g.font = `700 42px ${display}`;
    g.fillText(`${a.emoji} ${a.ad}`, bx, y);
    g.textAlign = "right";
    g.fillText(`%${a.puan}`, bx + bw, y);
    g.fillStyle = "#fff7f3";
    g.beginPath();
    g.roundRect(bx, y + 22, bw, 22, 11);
    g.fill();
    g.fillStyle = CHERRY;
    g.beginPath();
    g.roundRect(bx, y + 22, (bw * a.puan) / 100, 22, 11);
    g.fill();
    g.fillStyle = PLUM;
  });

  g.textAlign = "center";
  g.font = `600 44px ${body}`;
  g.fillText("Seninki kaç çıkacak?", W / 2, 1700);
  g.font = `800 56px ${display}`;
  g.fillStyle = CHERRY;
  g.fillText(host, W / 2, 1790);

  return new Promise((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error("png"))), "image/png"));
}
