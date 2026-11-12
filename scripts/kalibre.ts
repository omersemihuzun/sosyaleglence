/**
 * Sonuç profillerini kalibre eder, testlerin kalitesini ölçer ve raporlar.
 *
 * Neden gerekli: Her soruda tek şık seçildiği için puanlar boyutlara dağılır.
 * "Her boyutta %70" gibi bir profil gerçekte ulaşılamaz olabilir. Bu script her
 * sonuç için o sonucun niyetine göre cevap veren sanal kişiler üretir, onların
 * ortalama skorunu kalibre profil olarak kaydeder ve dağılımı raporlar.
 *
 * Ölçülenler (docs/test-metrikleri.md dosyasına yazılır):
 *  - isabet:        niyetiyle cevap veren kişi kendi sonucunu alıyor mu (ayrışma)
 *  - zor isabet:    iki kat kararsız (gürültülü) cevaplayan kişide isabet (dayanıklılık)
 *  - dağılım:       rastgele kişilerde en sık / en nadir sonuç
 *  - sınırda:       ilk iki sonuca uzaklığı neredeyse eşit kalan kişilerin oranı (kararsız sonuç)
 *  - tek boyutlu:   tek bir boyuta puan veren şıkların oranı. Yüksekse şık "hangi sonuca
 *                   gittiği belli" demektir; gerçek insan cevapları karışıktır.
 *  - etkisiz soru:  sonucu neredeyse hiç etkilemeyen soru (karşılıklı bilgi / sonuç entropisi)
 *  - ölü şık:       rastgele kişilerin %5'inden azının seçtiği şık (bariz yanlış ya da bariz doğru)
 *  - uzunluk ipucu: diğerlerinden belirgin uzun şık (özenle yazılmış "doğru cevap" izlenimi)
 *
 * Kullanım: npm run kalibre          (kalibre et + rapor)
 *           npm run kalibre -- --sıkı (zorluk uyarılarını da hata say)
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const scoring = await import(pathToFileURL(join(root, "src/lib/scoring.ts")).href);
const strict = process.argv.includes("--sıkı") || process.argv.includes("--strict");

const { testDosyalari: files } = (await import(pathToFileURL(join(root, "scripts/test-dosyalari.ts")).href)) as {
  testDosyalari: [string, string][];
};

type Opt = { text: string; scores: Record<string, number> };
type Q = { text: string; options: Opt[] };
type R = { id: string; profile: Record<string, number> };
type T = { slug: string; format?: string; dimensions: { id: string }[]; questions: Q[]; results: R[] };

/** Eşikler: README ve docs/test-metrikleri.md bu değerlere atıf yapar. */
export const ESIK = {
  isabet: 75,
  zorIsabet: 55,
  baskin: 45,
  nadir: 2,
  sinirda: 25,
  tekBoyutlu: 50,
  etkisizSoru: 0.015,
  oluSik: 5,
  uzunluk: 1.6,
};

/** Sabit tohumlu üreteç (mulberry32): aynı içerik her çalıştırmada aynı kalibrasyonu verir. */
let seed = 20261108;
function rand() {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

const N = 4000;
const M = 20000;
const out: Record<string, Record<string, Record<string, number>>> = {};
let failed = false;
const satirlar: string[] = [];
const detaylar: string[] = [];

/** İlk iki sonuca uzaklık */
function ikiUzaklik(test: T, scores: Record<string, number>) {
  const d = test.results
    .map((r) =>
      Math.sqrt(test.dimensions.reduce((t, dim) => t + ((scores[dim.id] ?? 0) - (r.profile[dim.id] ?? 50)) ** 2, 0)),
    )
    .sort((a, b) => a - b);
  return [d[0], d[1] ?? Infinity];
}

for (const [file, name] of files) {
  const test: T = (await import(pathToFileURL(join(root, "src/content/tests", file)).href))[name];
  const dims = test.dimensions.map((d) => d.id);

  // Niyet profili 40'ın üstündeki boyutlara çekilen, altındakilerden kaçan cevaplayıcı
  const answer = (concept: Record<string, number>, gurultu = 3) =>
    test.questions.map((q) => {
      let best = 0;
      let bv = -Infinity;
      q.options.forEach((o, oi) => {
        let v = (rand() - 0.5) * gurultu;
        for (const d of dims) v += ((o.scores[d] ?? 0) * ((concept[d] ?? 50) - 40)) / 50;
        if (v > bv) {
          bv = v;
          best = oi;
        }
      });
      return best;
    });

  const cal: Record<string, Record<string, number>> = {};
  for (const r of test.results) {
    const sum: Record<string, number> = Object.fromEntries(dims.map((d) => [d, 0]));
    for (let i = 0; i < N; i++) {
      const s = scoring.scoreDimensions(test, answer(r.profile));
      for (const d of dims) sum[d] += s[d];
    }
    cal[r.id] = Object.fromEntries(dims.map((d) => [d, Math.round(sum[d] / N)]));
  }
  out[test.slug] = cal;
  const calibrated: T = { ...test, results: test.results.map((r) => ({ ...r, profile: cal[r.id] })) };

  // Rastgele kişiler: sonuç dağılımı, sınırda kalanlar, şık seçim oranları, soru-sonuç ortak sayımları
  const counts: Record<string, number> = Object.fromEntries(test.results.map((r) => [r.id, 0]));
  const resIndex = new Map(test.results.map((r, i) => [r.id, i]));
  const pick = test.questions.map((q) => q.options.map(() => 0));
  const joint = test.questions.map((q) => q.options.map(() => test.results.map(() => 0)));
  let sinirda = 0;
  for (let i = 0; i < M; i++) {
    const c: Record<string, number> = {};
    for (const d of dims) c[d] = rand() * 100;
    const ans = answer(c);
    const sc = scoring.scoreDimensions(calibrated, ans);
    const res = scoring.pickResult(calibrated, sc).id;
    counts[res]++;
    const [d1, d2] = ikiUzaklik(calibrated, sc);
    if (d2 > 0 && (d2 - d1) / d2 < 0.1) sinirda++;
    const ri = resIndex.get(res)!;
    ans.forEach((oi, qi) => {
      pick[qi][oi]++;
      joint[qi][oi][ri]++;
    });
  }

  const isabetOlc = (gurultu: number) => {
    let hit = 0;
    for (const r of test.results)
      for (let i = 0; i < 400; i++)
        if (scoring.pickResult(calibrated, scoring.scoreDimensions(calibrated, answer(r.profile, gurultu))).id === r.id)
          hit++;
    return (hit / (400 * test.results.length)) * 100;
  };
  const hitRate = isabetOlc(3);
  const zorHit = isabetOlc(6);

  // Sonuç entropisi ve soru başına karşılıklı bilgi (normalize)
  const pr = test.results.map((r) => counts[r.id] / M);
  const H = -pr.reduce((t, p) => t + (p > 0 ? p * Math.log(p) : 0), 0);
  const etkisiz: number[] = [];
  const katki = joint.map((qj, qi) => {
    let mi = 0;
    qj.forEach((row, oi) => {
      const po = pick[qi][oi] / M;
      row.forEach((n, ri) => {
        const p = n / M;
        if (p > 0) mi += p * Math.log(p / (po * pr[ri]));
      });
    });
    const k = H > 0 ? mi / H : 0;
    if (k < ESIK.etkisizSoru) etkisiz.push(qi + 1);
    return k;
  });

  const olu: string[] = [];
  pick.forEach((row, qi) =>
    row.forEach((n, oi) => {
      if ((n / M) * 100 < ESIK.oluSik) olu.push(`S${qi + 1}${"ABCD"[oi] ?? oi}`);
    }),
  );

  let opts = 0;
  let tek = 0;
  const uzun: string[] = [];
  test.questions.forEach((q, qi) => {
    q.options.forEach((o, oi) => {
      opts++;
      if (Object.values(o.scores).filter((v) => v > 0).length <= 1) tek++;
      const digerleri = q.options.filter((_, j) => j !== oi);
      const ort = digerleri.reduce((t, x) => t + x.text.length, 0) / digerleri.length;
      if (o.text.length > ort * ESIK.uzunluk && o.text.length > 40) uzun.push(`S${qi + 1}${"ABCD"[oi] ?? oi}`);
    });
  });
  const tekOran = (tek / opts) * 100;
  const sinirOran = (sinirda / M) * 100;
  const maxPct = Math.max(...pr) * 100;
  const minPct = Math.min(...pr) * 100;

  // Hatalar (her zaman) ve zorluk uyarıları (--sıkı ile hata)
  const hatalar: string[] = [];
  const uyarilar: string[] = [];
  if (hitRate < ESIK.isabet) hatalar.push(`isabet %${hitRate.toFixed(0)} < %${ESIK.isabet}`);
  if (maxPct > ESIK.baskin) hatalar.push(`baskın sonuç %${maxPct.toFixed(0)}`);
  if (minPct < ESIK.nadir) hatalar.push(`nadir sonuç %${minPct.toFixed(1)}`);
  if (zorHit < ESIK.zorIsabet) uyarilar.push(`zor isabet %${zorHit.toFixed(0)}`);
  if (sinirOran > ESIK.sinirda) uyarilar.push(`sınırda %${sinirOran.toFixed(0)}`);
  if (tekOran > ESIK.tekBoyutlu) uyarilar.push(`tek boyutlu şık %${tekOran.toFixed(0)}`);
  if (etkisiz.length) uyarilar.push(`etkisiz soru: ${etkisiz.map((n) => `S${n}`).join(", ")}`);
  if (olu.length) uyarilar.push(`ölü şık: ${olu.join(", ")}`);
  if (uzun.length) uyarilar.push(`uzunluk ipucu: ${uzun.join(", ")}`);
  if (hatalar.length || (strict && uyarilar.length)) failed = true;

  console.log(
    `\n${test.slug}  isabet %${hitRate.toFixed(1)} · zor %${zorHit.toFixed(1)} · sınırda %${sinirOran.toFixed(1)} · tek boyutlu şık %${tekOran.toFixed(0)}`,
  );
  for (const r of test.results) {
    const pct = (counts[r.id] / M) * 100;
    console.log(`  ${r.id.padEnd(22)} %${pct.toFixed(1).padStart(5)}  ${JSON.stringify(cal[r.id])}`);
  }
  for (const h of hatalar) console.log(`  ✖ ${h}`);
  for (const u of uyarilar) console.log(`  ⚠ ${u}`);

  const durum = hatalar.length ? "✖" : uyarilar.length ? "⚠" : "✓";
  satirlar.push(
    `| ${durum} | ${test.slug} | ${test.questions.length} | %${hitRate.toFixed(0)} | %${zorHit.toFixed(0)} | %${minPct.toFixed(0)}–%${maxPct.toFixed(0)} | %${sinirOran.toFixed(0)} | %${tekOran.toFixed(0)} | ${etkisiz.length} | ${olu.length} | ${uzun.length} |`,
  );
  const enAz = katki
    .map((k, i) => ({ k, i }))
    .sort((a, b) => a.k - b.k)
    .slice(0, 3)
    .map((x) => `S${x.i + 1} (${(x.k * 100).toFixed(1)})`);
  detaylar.push(
    `### ${test.slug}\n\n` +
      (hatalar.length || uyarilar.length
        ? [...hatalar.map((h) => `- ✖ ${h}`), ...uyarilar.map((u) => `- ⚠ ${u}`)].join("\n") + "\n"
        : "- Uyarı yok\n") +
      `- Sonuca en az katkı veren sorular (bilgi, %): ${enAz.join(", ")}\n`,
  );
}

writeFileSync(join(root, "src/content/tests/kalibrasyon.json"), JSON.stringify(out, null, 2) + "\n");

const rapor = `# Test kalite metrikleri

Bu dosya \`npm run kalibre\` tarafından üretilir, elle düzenleme.

| | Test | Soru | İsabet | Zor isabet | Dağılım (min–max) | Sınırda | Tek boyutlu şık | Etkisiz soru | Ölü şık | Uzunluk ipucu |
|---|---|---|---|---|---|---|---|---|---|---|
${satirlar.join("\n")}

## Metrikler ve eşikler

| Metrik | Ne ölçer | Hedef |
|---|---|---|
| İsabet | Bir sonucun niyetiyle cevap veren kişi o sonucu alıyor mu | ≥ %${ESIK.isabet} (zorunlu) |
| Zor isabet | İki kat kararsız cevaplayan kişide isabet: test gerçek, karışık insanlara dayanıklı mı | ≥ %${ESIK.zorIsabet} |
| Dağılım | Rastgele kişilerde en nadir ve en sık sonuç | min ≥ %${ESIK.nadir}, max ≤ %${ESIK.baskin} (zorunlu) |
| Sınırda | İlk iki sonuca uzaklığı %10'dan az farklı olan kişiler | ≤ %${ESIK.sinirda} |
| Tek boyutlu şık | Sadece bir boyuta puan veren şıklar. Yüksekse her şık "bu sonuca gider" diye okunur | ≤ %${ESIK.tekBoyutlu} |
| Etkisiz soru | Sonuçla karşılıklı bilgisi sonuç entropisinin %${(ESIK.etkisizSoru * 100).toFixed(1)}'inden az olan soru | 0 |
| Ölü şık | Rastgele kişilerin %${ESIK.oluSik}'inden azının seçtiği şık | 0 |
| Uzunluk ipucu | Diğer şıkların ortalamasından ${ESIK.uzunluk} kat uzun şık | 0 |

Not: "Bariz doğru şık" (sosyal beğenirlik) sayıyla ölçülemez; içerik incelemesinde elle kontrol edilir.

## Ayrıntılar

${detaylar.join("\n")}`;
writeFileSync(join(root, "docs/test-metrikleri.md"), rapor);
console.log("\nkalibrasyon.json ve docs/test-metrikleri.md güncellendi.");
if (failed) process.exitCode = 1;
