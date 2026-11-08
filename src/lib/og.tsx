import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { Result, Test } from "./types";
import type { DimensionScores } from "./scoring";

type Font = { name: string; data: Buffer; weight: 500 | 800; style: "normal" };

let cached: Font[] | null = null;

/**
 * Görsel üretici için fontlar. Türkçe harfler iki dosyaya bölünmüş durumda (ı/ç/ö/ü latin,
 * ş/ğ/İ latin-ext). Satori aynı isimli fontlardan birini kullandığı için ayrı isim verip
 * fontFamily içinde yedek zincir kuruyoruz: "Display, DisplayExt".
 */
export async function loadOgFonts(): Promise<Font[]> {
  if (cached) return cached;
  const dir = join(process.cwd(), "assets/fonts");
  const files: [string, string, 500 | 800][] = [
    ["Display", "bricolage-grotesque-latin-800-normal.woff", 800],
    ["DisplayExt", "bricolage-grotesque-latin-ext-800-normal.woff", 800],
    ["Body", "instrument-sans-latin-500-normal.woff", 500],
    ["BodyExt", "instrument-sans-latin-ext-500-normal.woff", 500],
  ];
  cached = await Promise.all(
    files.map(async ([name, file, weight]) => ({
      name,
      data: await readFile(join(dir, file)),
      weight,
      style: "normal" as const,
    })),
  );
  return cached;
}

const PLUM = "#2B1030";
const PAPER = "#FFF7F3";

/** 1080×1920 Instagram/WhatsApp story kartı */
export function StoryCard({
  test,
  result,
  scores,
  headline,
  host,
}: {
  test: Test;
  result: Result;
  scores: DimensionScores | null;
  headline: number | null;
  host: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: result.color,
        padding: 72,
        fontFamily: "Body, BodyExt",
        color: PLUM,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: PAPER }}>
        <div style={{ fontFamily: "Display, DisplayExt", fontSize: 44 }}>sosyaleglence</div>
        <div style={{ fontSize: 32, opacity: 0.85 }}>{test.title}</div>
      </div>

      <div
        style={{
          marginTop: 70,
          display: "flex",
          flexDirection: "column",
          background: PAPER,
          border: `6px solid ${PLUM}`,
          borderRadius: 48,
          boxShadow: `14px 16px 0 0 ${PLUM}`,
          padding: 64,
          transform: "rotate(-1.5deg)",
        }}
      >
        <div style={{ fontSize: 34, color: "#5A3E5E" }}>Benim sonucum</div>
        <div style={{ display: "flex", alignItems: "center", marginTop: 16 }}>
          <div style={{ fontSize: 150, lineHeight: 1 }}>{result.emoji}</div>
        </div>
        <div
          style={{
            fontFamily: "Display, DisplayExt",
            fontSize: 104,
            lineHeight: 1.0,
            marginTop: 24,
            letterSpacing: -2,
          }}
        >
          {result.name}
        </div>
        <div style={{ fontSize: 40, lineHeight: 1.35, marginTop: 28, color: "#5A3E5E" }}>{result.tagline}</div>

        {headline !== null && test.headline && (
          <div style={{ display: "flex", alignItems: "baseline", marginTop: 40 }}>
            <div
              style={{ fontFamily: "Display, DisplayExt", fontSize: 120, color: "#D7102F", lineHeight: 1 }}
            >{`%${headline}`}</div>
            <div style={{ fontSize: 36, marginLeft: 20 }}>{test.headline.label.toLocaleLowerCase("tr")}</div>
          </div>
        )}

        {scores && (
          <div style={{ display: "flex", flexDirection: "column", marginTop: 40 }}>
            {test.dimensions.map((d) => (
              <div key={d.id} style={{ display: "flex", flexDirection: "column", marginTop: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 32 }}>
                  <div>{d.label}</div>
                  <div style={{ fontFamily: "Display, DisplayExt" }}>{`%${scores[d.id] ?? 0}`}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: 10,
                    height: 30,
                    borderRadius: 999,
                    border: `4px solid ${PLUM}`,
                    background: "#FFFFFF",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ width: `${Math.max(4, scores[d.id] ?? 0)}%`, background: result.color }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ flex: 1 }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: PAPER,
        }}
      >
        <div style={{ fontFamily: "Display, DisplayExt", fontSize: 56 }}>Sen hangisisin?</div>
        <div
          style={{
            marginTop: 20,
            background: "#FFE066",
            color: PLUM,
            border: `5px solid ${PLUM}`,
            borderRadius: 999,
            padding: "18px 40px",
            fontSize: 36,
            fontFamily: "Display, DisplayExt",
          }}
        >
          {`${host}/testler/${test.slug}`}
        </div>
      </div>
    </div>
  );
}

/** 1200×630 bağlantı önizleme kartı (WhatsApp, X, Facebook) */
export function OgResultCard({ test, result }: { test: Test; result: Result }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: result.color,
        padding: 48,
        fontFamily: "Body, BodyExt",
        color: PLUM,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          background: PAPER,
          border: `5px solid ${PLUM}`,
          borderRadius: 40,
          boxShadow: `10px 12px 0 0 ${PLUM}`,
          padding: 56,
        }}
      >
        <div style={{ fontSize: 190, lineHeight: 1, marginRight: 48 }}>{result.emoji}</div>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 30, color: "#5A3E5E" }}>{test.title}</div>
          <div
            style={{ fontFamily: "Display, DisplayExt", fontSize: 84, lineHeight: 1, marginTop: 12, letterSpacing: -1 }}
          >
            {result.name}
          </div>
          <div style={{ fontSize: 32, lineHeight: 1.3, marginTop: 20, color: "#5A3E5E" }}>{result.tagline}</div>
          <div style={{ fontFamily: "Display, DisplayExt", fontSize: 30, marginTop: 28, color: "#D7102F" }}>
            Sen hangisisin? Testi çöz →
          </div>
        </div>
      </div>
    </div>
  );
}

export function OgTestCard({ test }: { test: Test }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: test.color,
        padding: 48,
        fontFamily: "Body, BodyExt",
        color: PLUM,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          border: `5px solid ${PLUM}`,
          borderRadius: 40,
          boxShadow: `10px 12px 0 0 ${PLUM}`,
          padding: 56,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: 110, lineHeight: 1, marginRight: 32 }}>{test.emoji}</div>
          <div style={{ fontFamily: "Display, DisplayExt", fontSize: 80, lineHeight: 1, letterSpacing: -1, flex: 1 }}>
            {test.title}
          </div>
        </div>
        <div style={{ fontSize: 34, lineHeight: 1.35, color: "#5A3E5E" }}>{test.summary}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "Display, DisplayExt", fontSize: 36 }}>sosyaleglence.com</div>
          <div style={{ fontSize: 30 }}>{`${test.questions.length} soru, ${test.results.length} farklı sonuç`}</div>
        </div>
      </div>
    </div>
  );
}
