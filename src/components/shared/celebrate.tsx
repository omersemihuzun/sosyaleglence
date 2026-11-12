/** Sonuca ulaşınca bir kez oynayan konfeti. Sadece CSS; prefers-reduced-motion'da hiç görünmez. */
const PIECES = [
  { x: -150, y: -110, r: 220, c: "#D7102F", d: 0 },
  { x: -95, y: -150, r: -160, c: "#FFE066", d: 40 },
  { x: -40, y: -170, r: 300, c: "#FFB3C3", d: 80 },
  { x: 30, y: -165, r: -260, c: "#2F7D6D", d: 20 },
  { x: 90, y: -145, r: 190, c: "#FFE066", d: 60 },
  { x: 145, y: -105, r: -210, c: "#D7102F", d: 100 },
  { x: -120, y: -60, r: 140, c: "#3B6FD9", d: 120 },
  { x: 125, y: -55, r: -120, c: "#FFB3C3", d: 140 },
];

export function Celebrate() {
  return (
    <div className="celebrate" aria-hidden>
      {PIECES.map((p, i) => (
        <span
          key={i}
          style={
            {
              background: p.c,
              "--x": `${p.x}px`,
              "--y": `${p.y}px`,
              "--r": `${p.r}deg`,
              "--d": `${p.d}ms`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
