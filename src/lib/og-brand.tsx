/** Marka görselleri: site ikonu ve bölüm önizleme kartları (next/og ile üretilir). */

const PLUM = "#2B1030";
const PAPER = "#FFF7F3";
const CHERRY = "#D7102F";
const BUTTER = "#FFE066";

/** Kiraz zeminli, mürdüm çerçeveli "çıkartma" logo. Boyuta göre ölçeklenir. */
export function BrandMark({ size }: { size: number }) {
  const border = Math.max(2, Math.round(size / 16));
  const shadow = Math.max(1, Math.round(size / 14));
  const inner = size - shadow;
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", background: "transparent" }}>
      <div
        style={{
          width: inner,
          height: inner,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: CHERRY,
          border: `${border}px solid ${PLUM}`,
          borderRadius: Math.round(size * 0.28),
          boxShadow: `${shadow}px ${shadow}px 0 0 ${PLUM}`,
          fontSize: Math.round(size * 0.58),
          lineHeight: 1,
        }}
      >
        🧠
      </div>
    </div>
  );
}

/** Apple dokunmatik ikonu: şeffaflık desteklenmediği için dolu zemin. */
export function AppleMark() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: CHERRY,
        fontSize: 112,
        lineHeight: 1,
      }}
    >
      🧠
    </div>
  );
}

/** 1200×630 bölüm önizleme kartı: büyük başlık, kısa açıklama, emoji çıkartmaları. */
export function OgSectionCard({
  title,
  subtitle,
  emojis,
  accent = CHERRY,
  titleSize = 88,
}: {
  title: string;
  subtitle: string;
  emojis: string[];
  accent?: string;
  /** Uzun başlıklar için küçültülebilir (varsayılan 88) */
  titleSize?: number;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: accent,
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
          padding: "48px 56px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 64,
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: CHERRY,
                border: `4px solid ${PLUM}`,
                borderRadius: 18,
                boxShadow: `4px 5px 0 0 ${PLUM}`,
                fontSize: 36,
                transform: "rotate(-6deg)",
              }}
            >
              🧠
            </div>
            <div style={{ display: "flex", fontFamily: "Display, DisplayExt", fontSize: 40, marginLeft: 20 }}>
              <span>sosyal</span>
              <span style={{ color: CHERRY }}>eğlence</span>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            {emojis.slice(0, 3).map((e, i) => (
              <div
                key={i}
                style={{
                  width: 76,
                  height: 76,
                  marginLeft: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: i === 1 ? BUTTER : "#FFFFFF",
                  border: `4px solid ${PLUM}`,
                  borderRadius: 20,
                  fontSize: 42,
                  transform: `rotate(${i % 2 === 0 ? -5 : 5}deg)`,
                }}
              >
                {e}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Display, DisplayExt",
            fontSize: titleSize,
            lineHeight: 1.02,
            letterSpacing: -2,
            maxWidth: 960,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 34, lineHeight: 1.35, color: "#5A3E5E", maxWidth: 940 }}>
          {subtitle}
        </div>
      </div>
    </div>
  );
}
