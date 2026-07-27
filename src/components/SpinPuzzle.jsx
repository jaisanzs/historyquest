import { useState } from "react";
import { C, titleFont, bodyFont, pixelBorder } from "../theme.js";

// Press SPIN again and again; each spin whirls the vessel and raises a meter.
//   config = { prompt, spins, label, successMsg }
export default function SpinPuzzle({ config, onSolve }) {
  const [count, setCount] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const pct = Math.min(100, Math.round((count / config.spins) * 100));
  const done = count >= config.spins;

  const spin = () => {
    if (done || spinning) return;
    setSpinning(true);
    setTimeout(() => { setCount((c) => c + 1); setSpinning(false); }, 650);
  };

  return (
    <div style={{ marginTop: 18 }}>
      <style>{`@keyframes hqWhirl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.hq-whirl{animation:hqWhirl .65s ease-in-out}`}</style>

      <div style={{ ...pixelBorder(C.greenDeep), background: "#eef6df", padding: "10px 14px", marginBottom: 14 }}>
        <span style={{ ...titleFont, fontSize: 9, color: C.greenDeep }}>&#9670; Crystallizer</span>
        <div style={{ ...bodyFont, fontSize: 20, color: C.ink, marginTop: 6, lineHeight: 1.15 }}>{config.prompt}</div>
      </div>

      {/* spinning vessel */}
      <div style={{ display: "flex", justifyContent: "center", padding: "8px 0 14px" }}>
        <div className={spinning ? "hq-whirl" : ""}>
          <svg viewBox="0 0 48 48" width={140} height={140} shapeRendering="crispEdges" style={{ imageRendering: "pixelated" }}>
            <circle cx="24" cy="24" r="20" fill="#e3ebed" stroke="#3a2b1c" strokeWidth="1" />
            <circle cx="24" cy="24" r="20" fill="none" stroke="#9aa6a8" strokeWidth="1" />
            {/* radium glow grows with purity */}
            <circle cx="24" cy="24" r={4 + (pct / 100) * 12} fill="#bfe3a0" fillOpacity="0.9" />
            <circle cx="24" cy="24" r={2 + (pct / 100) * 6} fill="#eaf7d6" />
            {/* sediment specks */}
            <rect x="16" y="30" width="2" height="2" fill="#c88a3a" />
            <rect x="30" y="28" width="2" height="2" fill="#c88a3a" />
            <rect x="22" y="34" width="2" height="2" fill="#c88a3a" />
          </svg>
        </div>
      </div>

      {/* purity meter */}
      <div style={{ ...pixelBorder(), background: C.card, padding: "10px 14px", marginBottom: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", ...titleFont, fontSize: 9, color: C.ink, marginBottom: 8 }}>
          <span>{config.label}</span><span>{pct}%</span>
        </div>
        <div style={{ height: 16, background: C.paperDark, border: `2px solid ${C.border}` }}>
          <div style={{ width: `${pct}%`, height: "100%", background: done ? C.green : C.gold, transition: "width .3s" }} />
        </div>
      </div>

      {!done ? (
        <div style={{ textAlign: "center" }}>
          <button
            onClick={spin}
            disabled={spinning}
            style={{ ...titleFont, fontSize: 14, color: "#fff", background: spinning ? C.inkSoft : C.greenDeep, border: `4px solid ${C.border}`, boxShadow: `4px 4px 0 ${C.border}`, padding: "14px 28px", cursor: spinning ? "default" : "pointer" }}
          >
            {spinning ? "spinning…" : "↻ SPIN"}
          </button>
          <div style={{ ...bodyFont, fontSize: 16, color: C.inkSoft, marginTop: 8 }}>Dissolve &amp; re-crystallize — again and again.</div>
        </div>
      ) : (
        <div>
          <div style={{ ...pixelBorder(C.greenDeep), background: "#eef6df", padding: "12px 14px" }}>
            <div style={{ ...titleFont, fontSize: 9, color: C.greenDeep, marginBottom: 6 }}>✓ Radium isolated!</div>
            <div style={{ ...bodyFont, fontSize: 19, color: C.ink, lineHeight: 1.2 }}>{config.successMsg}</div>
          </div>
          <button onClick={onSolve} style={{ ...bodyFont, fontSize: 21, color: "#fff", background: C.greenDeep, border: `3px solid ${C.border}`, boxShadow: `3px 3px 0 ${C.border}`, padding: "10px 16px", cursor: "pointer", marginTop: 12 }}>&#9656; Continue</button>
        </div>
      )}
    </div>
  );
}
