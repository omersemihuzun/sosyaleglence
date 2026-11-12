import type { Burc } from "@/content/burclar";
import { yaziRengi } from "@/components/burc/burc-parcalar";

const PLUM = "#2B1030";
const PAPER = "#FFF7F3";

/** Satori (ImageResponse) için 1200×630 burç kartları. Sadece flex düzeni kullanılır. */
function Frame({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: bg,
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
          justifyContent: "center",
          background: PAPER,
          border: `5px solid ${PLUM}`,
          borderRadius: 40,
          boxShadow: `10px 12px 0 0 ${PLUM}`,
          padding: 56,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Rozet({ b, size = 120 }: { b: Burc; size?: number }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: b.renk,
        color: yaziRengi(b.renk),
        border: `5px solid ${PLUM}`,
        borderRadius: 32,
        padding: "20px 28px",
      }}
    >
      <div style={{ fontSize: size, lineHeight: 1 }}>{b.emoji}</div>
      <div style={{ fontFamily: "Display, DisplayExt", fontSize: 40, marginTop: 10 }}>{b.ad}</div>
    </div>
  );
}

export function OgBurc({ b }: { b: Burc }) {
  return (
    <Frame bg={b.renk}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Rozet b={b} size={140} />
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 48, flex: 1 }}>
          <div style={{ fontSize: 30, color: "#5A3E5E" }}>{b.tarih}</div>
          <div
            style={{ fontFamily: "Display, DisplayExt", fontSize: 84, lineHeight: 1, marginTop: 10, letterSpacing: -1 }}
          >
            {`${b.ad} burcu`}
          </div>
          <div style={{ fontSize: 34, lineHeight: 1.3, marginTop: 20, color: "#5A3E5E" }}>{b.ozet}</div>
          <div style={{ fontFamily: "Display, DisplayExt", fontSize: 30, marginTop: 24, color: "#D7102F" }}>
            Özellikleri ve tüm uyumları →
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function OgCift({ a, b, puan, baslik }: { a: Burc; b: Burc; puan: number; baslik: string }) {
  return (
    <Frame bg={a.renk}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Rozet b={a} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, margin: "0 24px" }}>
          <div
            style={{ fontFamily: "Display, DisplayExt", fontSize: 130, color: "#D7102F", lineHeight: 1 }}
          >{`%${puan}`}</div>
          <div style={{ fontFamily: "Display, DisplayExt", fontSize: 40, marginTop: 14, textAlign: "center" }}>
            {baslik}
          </div>
          <div style={{ fontSize: 28, marginTop: 14, color: "#5A3E5E" }}>{`${a.ad} ve ${b.ad} burç uyumu`}</div>
        </div>
        <Rozet b={b} />
      </div>
    </Frame>
  );
}

export function OgBurclar({ burclar }: { burclar: Burc[] }) {
  return (
    <Frame bg="#3B2A6B">
      <div style={{ fontFamily: "Display, DisplayExt", fontSize: 84, lineHeight: 1, letterSpacing: -1 }}>
        Burçlar ve burç uyumu
      </div>
      <div style={{ fontSize: 34, marginTop: 18, color: "#5A3E5E" }}>
        İki burç seç, aşkta ve arkadaşlıkta uyumunu gör.
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: 36 }}>
        {burclar.map((b) => (
          <div key={b.slug} style={{ fontSize: 64, marginRight: 18, marginBottom: 8 }}>
            {b.emoji}
          </div>
        ))}
      </div>
    </Frame>
  );
}
