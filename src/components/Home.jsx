import { C, titleFont, bodyFont, pixelBorder } from "../theme.js";
import { FIGURES } from "../data/figures.js";
import PixelScene from "./PixelScene.jsx";

// Home screen: a grid of "player cards". Playable ones are clickable.
export default function Home({ onPick }) {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <h1 style={{ ...titleFont, color: C.ink, fontSize: 26, lineHeight: 1.5, margin: "0 0 10px" }}>
          HistoryQuest
        </h1>
        <p style={{ ...bodyFont, color: C.inkSoft, fontSize: 22, margin: 0 }}>
          Pick a life. Live a chapter of it. Learn how they changed the world.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: 20,
        }}
      >
        {FIGURES.map((f) => (
          <button
            key={f.id}
            onClick={() => f.playable && onPick(f.id)}
            style={{
              ...pixelBorder(),
              ...bodyFont,
              background: C.card,
              padding: 0,
              cursor: f.playable ? "pointer" : "not-allowed",
              textAlign: "left",
              opacity: f.playable ? 1 : 0.72,
              transform: "translate(0,0)",
              transition: "transform .08s, box-shadow .08s",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              if (!f.playable) return;
              e.currentTarget.style.transform = "translate(-2px,-2px)";
              e.currentTarget.style.boxShadow = `6px 6px 0 ${C.border}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(0,0)";
              e.currentTarget.style.boxShadow = `4px 4px 0 ${C.border}`;
            }}
          >
            <div style={{ position: "relative", background: f.accent }}>
              <PixelScene
                accent={f.accent}
                accent2={f.accent2}
                style={{ width: "100%", height: 120, display: "block" }}
              />
              <span
                style={{
                  ...titleFont,
                  position: "absolute",
                  top: 8,
                  right: 8,
                  fontSize: 8,
                  color: "#fff",
                  background: f.playable ? C.greenDeep : C.woodDark,
                  padding: "5px 6px",
                  border: `2px solid ${C.border}`,
                }}
              >
                {f.playable ? "PLAY" : "SOON"}
              </span>
            </div>
            <div style={{ padding: "12px 14px 16px", borderTop: `4px solid ${C.border}` }}>
              <div style={{ ...titleFont, fontSize: 12, color: C.ink, lineHeight: 1.5 }}>{f.name}</div>
              <div style={{ fontSize: 19, color: C.inkSoft, margin: "4px 0 8px" }}>
                {f.field} · {f.years}
              </div>
              <div style={{ fontSize: 20, color: C.ink, lineHeight: 1.15 }}>{f.hook}</div>
            </div>
          </button>
        ))}
      </div>

      <p style={{ ...bodyFont, textAlign: "center", color: C.inkSoft, fontSize: 19, marginTop: 26 }}>
        One life is fully playable. The greyed cards are the frame waiting to be filled.
      </p>
    </div>
  );
}
