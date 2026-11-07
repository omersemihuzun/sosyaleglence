import type { Bracket, BracketItem } from "./bracket-types";

const PLUM = "#2B1030";
const PAPER = "#FFF7F3";

/** 1080×1920 eleme oyunu story kartı */
export function BracketStoryCard({
  bracket,
  champion,
  finalist,
  host,
}: {
  bracket: Bracket;
  champion: BracketItem;
  finalist?: BracketItem;
  host: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: bracket.color,
        padding: 72,
        fontFamily: "Body, BodyExt",
        color: PLUM,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: PAPER }}>
        <div style={{ fontFamily: "Display, DisplayExt", fontSize: 44 }}>sosyaleglence</div>
        <div style={{ fontSize: 32, opacity: 0.85 }}>{bracket.title}</div>
      </div>

      <div style={{ flex: 1 }} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          background: PAPER,
          border: `6px solid ${PLUM}`,
          borderRadius: 48,
          boxShadow: `14px 16px 0 0 ${PLUM}`,
          padding: "72px 56px",
          transform: "rotate(-1.5deg)",
        }}
      >
        <div style={{ fontSize: 36, color: "#5A3E5E" }}>{`🏆 ${bracket.championLabel}`}</div>
        <div style={{ fontSize: 220, lineHeight: 1, marginTop: 36 }}>{champion.emoji}</div>
        <div style={{ fontFamily: "Display, DisplayExt", fontSize: 92, lineHeight: 1.02, marginTop: 36, letterSpacing: -2 }}>
          {champion.name}
        </div>
        <div style={{ fontSize: 38, lineHeight: 1.35, marginTop: 28, color: "#5A3E5E" }}>{champion.detail}</div>
        {finalist && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 48,
              padding: "18px 28px",
              borderRadius: 999,
              border: `4px solid ${PLUM}`,
              fontSize: 32,
            }}
          >
            {`Finalde yendiği: ${finalist.emoji} ${finalist.name}`}
          </div>
        )}
      </div>

      <div style={{ flex: 1 }} />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: PAPER }}>
        <div style={{ fontFamily: "Display, DisplayExt", fontSize: 56 }}>Seninki hangisi?</div>
        <div
          style={{
            marginTop: 20,
            background: "#FFE066",
            color: PLUM,
            border: `5px solid ${PLUM}`,
            borderRadius: 999,
            padding: "18px 40px",
            fontSize: 34,
            fontFamily: "Display, DisplayExt",
          }}
        >
          {`${host}/eleme/${bracket.slug}`}
        </div>
      </div>
    </div>
  );
}

/** 1200×630 bağlantı önizlemesi */
export function OgBracketCard({ bracket, champion }: { bracket: Bracket; champion?: BracketItem }) {
  const a = champion ?? bracket.items[0];
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: bracket.color,
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
        {champion ? (
          <div style={{ fontSize: 190, lineHeight: 1, marginRight: 48 }}>{a.emoji}</div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", marginRight: 44 }}>
            <div style={{ fontSize: 110 }}>{bracket.items[0].emoji}</div>
            <div style={{ fontFamily: "Display, DisplayExt", fontSize: 40, color: "#D7102F", margin: "0 18px" }}>VS</div>
            <div style={{ fontSize: 110 }}>{bracket.items[1].emoji}</div>
          </div>
        )}
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 30, color: "#5A3E5E" }}>
            {champion ? `🏆 ${bracket.championLabel}` : "Eleme oyunu"}
          </div>
          <div style={{ fontFamily: "Display, DisplayExt", fontSize: 72, lineHeight: 1.02, marginTop: 12, letterSpacing: -1 }}>
            {champion ? champion.name : bracket.title}
          </div>
          <div style={{ fontFamily: "Display, DisplayExt", fontSize: 30, marginTop: 28, color: "#D7102F" }}>
            {champion ? "Seninki hangisi? Oyna →" : `${bracket.items.length} seçenek, tek şampiyon →`}
          </div>
        </div>
      </div>
    </div>
  );
}
