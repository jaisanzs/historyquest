import { useState } from "react";
import { C, titleFont, bodyFont, pixelBorder } from "../theme.js";
import { FIGURES } from "../data/figures.js";
import { getProgress, resetProgress } from "../progress.js";
import PixelPortrait from "./PixelPortrait.jsx";

export default function Home({ onPick }) {
  const [, setTick] = useState(0); // bump to re-read progress after reset
  const progress = getProgress();
  const completedCount = FIGURES.filter((f) => progress[f.id]?.completed).length;
  const total = FIGURES.length;

  const doReset = () => {
    if (window.confirm("Reset all progress? This clears your badges and quiz scores.")) {
      resetProgress();
      setTick((t) => t + 1);
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 18 }}>
        <h1 style={{ ...titleFont, color: C.ink, fontSize: 26, lineHeight: 1.5, margin: "0 0 10px" }}>HistoryQuest</h1>
        <p style={{ ...bodyFont, color: C.inkSoft, fontSize: 22, margin: 0 }}>
          Pick a life. Live a chapter of it. Learn how they changed the world.
        </p>
      </div>

      {/* progress bar */}
      <div style={{ ...pixelBorder(), background: C.card, padding: "10px 14px", marginBottom: 22, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <span style={{ ...titleFont, fontSize: 10, color: C.ink }}>{completedCount} / {total} complete</span>
        <div style={{ flex: 1, minWidth: 120, height: 14, background: C.paperDark, border: `2px solid ${C.border}` }}>
          <div style={{ width: `${(completedCount / total) * 100}%`, height: "100%", background: C.green }} />
        </div>
        <button
          onClick={doReset}
          disabled={completedCount === 0}
          style={{
            ...bodyFont, fontSize: 17, color: completedCount ? C.ink : C.inkSoft,
            background: C.paperDark, border: `3px solid ${C.border}`, boxShadow: `2px 2px 0 ${C.border}`,
            padding: "6px 12px", cursor: completedCount ? "pointer" : "not-allowed", opacity: completedCount ? 1 : 0.5,
          }}
        >
          ↻ Reset progress
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 20 }}>
        {FIGURES.map((f) => {
          const done = progress[f.id]?.completed;
          const best = progress[f.id];
          return (
            <button
              key={f.id}
              onClick={() => f.playable && onPick(f.id)}
              style={{
                ...pixelBorder(), ...bodyFont, background: C.card, padding: 0,
                cursor: f.playable ? "pointer" : "not-allowed", textAlign: "left",
                opacity: f.playable ? 1 : 0.72, transform: "translate(0,0)",
                transition: "transform .08s, box-shadow .08s", overflow: "hidden",
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
              <div style={{ position: "relative", height: 130, background: `linear-gradient(${f.accent}, ${f.accent2})`, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                {f.image ? (
                  <img src={f.image} alt={f.name} style={{ height: 130, imageRendering: "pixelated", display: "block" }} />
                ) : (
                  <PixelPortrait p={f.portrait} bg="transparent" size={130} />
                )}
                {done && (
                  <span style={{ ...titleFont, position: "absolute", top: 8, left: 8, fontSize: 8, color: "#fff", background: C.greenDeep, padding: "5px 6px", border: `2px solid ${C.border}` }}>
                    ★ {best.bestScore}/{best.total}
                  </span>
                )}
                <span style={{ ...titleFont, position: "absolute", top: 8, right: 8, fontSize: 8, color: "#fff", background: f.playable ? C.greenDeep : C.woodDark, padding: "5px 6px", border: `2px solid ${C.border}` }}>
                  {done ? "REPLAY" : f.playable ? "PLAY" : "SOON"}
                </span>
              </div>
              <div style={{ padding: "12px 14px 16px", borderTop: `4px solid ${C.border}` }}>
                <div style={{ ...titleFont, fontSize: 12, color: C.ink, lineHeight: 1.5 }}>{f.name}</div>
                <div style={{ fontSize: 19, color: C.inkSoft, margin: "4px 0 8px" }}>{f.field} · {f.years}</div>
                <div style={{ fontSize: 20, color: C.ink, lineHeight: 1.15 }}>{f.hook}</div>
              </div>
            </button>
          );
        })}
      </div>

      <p style={{ ...bodyFont, textAlign: "center", color: C.inkSoft, fontSize: 19, marginTop: 26 }}>
        Finish a story and its quiz to earn a ★ badge.
      </p>
    </div>
  );
}
