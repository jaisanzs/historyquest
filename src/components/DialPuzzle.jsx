import { useState } from "react";
import { C, titleFont, bodyFont, pixelBorder } from "../theme.js";

/*
  Slider puzzle: set each dial into its target zone to maximize the yield.
  config = { prompt, note?, dials:[{label,min,max,step,unit,target:[lo,hi],start}], successMsg }
*/
export default function DialPuzzle({ config, onSolve }) {
  const [vals, setVals] = useState(config.dials.map((d) => d.start));
  const inRange = config.dials.map((d, i) => vals[i] >= d.target[0] && vals[i] <= d.target[1]);
  const yieldPct = Math.round((inRange.filter(Boolean).length / config.dials.length) * 100);
  const solved = inRange.every(Boolean);

  const set = (i, v) => setVals((a) => a.map((x, j) => (j === i ? Number(v) : x)));

  return (
    <div style={{ marginTop: 18 }}>
      <div style={{ ...pixelBorder(C.greenDeep), background: "#eef6df", padding: "10px 14px", marginBottom: 14 }}>
        <span style={{ ...titleFont, fontSize: 9, color: C.greenDeep }}>&#9670; Reactor controls</span>
        <div style={{ ...bodyFont, fontSize: 20, color: C.ink, marginTop: 6, lineHeight: 1.15 }}>{config.prompt}</div>
        {config.note && <div style={{ ...bodyFont, fontSize: 16, color: C.inkSoft, marginTop: 4 }}>{config.note}</div>}
      </div>

      {config.dials.map((d, i) => (
        <div key={i} style={{ ...pixelBorder(inRange[i] ? C.greenDeep : C.border), background: C.paper, padding: "12px 14px", marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ ...titleFont, fontSize: 9, color: C.ink }}>{d.label}</span>
            <span style={{ ...bodyFont, fontSize: 20, color: inRange[i] ? C.greenDeep : C.goldDeep }}>
              {vals[i]}{d.unit} {inRange[i] ? "✓" : ""}
            </span>
          </div>
          <input
            type="range"
            min={d.min} max={d.max} step={d.step} value={vals[i]}
            onChange={(e) => set(i, e.target.value)}
            style={{ width: "100%", marginTop: 10, accentColor: C.green, touchAction: "none" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", ...bodyFont, fontSize: 14, color: C.inkSoft }}>
            <span>{d.min}{d.unit}</span><span>{d.max}{d.unit}</span>
          </div>
        </div>
      ))}

      {/* yield meter */}
      <div style={{ ...pixelBorder(), background: C.card, padding: "10px 14px", marginTop: 4 }}>
        <div style={{ display: "flex", justifyContent: "space-between", ...titleFont, fontSize: 9, color: C.ink, marginBottom: 8 }}>
          <span>{config.meterLabel || "Yield"}</span><span>{yieldPct}%</span>
        </div>
        <div style={{ height: 16, background: C.paperDark, border: `2px solid ${C.border}` }}>
          <div style={{ width: `${yieldPct}%`, height: "100%", background: solved ? C.green : C.gold, transition: "width .2s" }} />
        </div>
      </div>

      {solved && (
        <div style={{ marginTop: 14 }}>
          <div style={{ ...pixelBorder(C.greenDeep), background: "#eef6df", padding: "12px 14px" }}>
            <div style={{ ...titleFont, fontSize: 9, color: C.greenDeep, marginBottom: 6 }}>✓ {config.doneLabel || "Max yield!"}</div>
            <div style={{ ...bodyFont, fontSize: 19, color: C.ink, lineHeight: 1.2 }}>{config.successMsg}</div>
          </div>
          <button onClick={onSolve} style={{ ...bodyFont, fontSize: 21, color: "#fff", background: C.greenDeep, border: `3px solid ${C.border}`, boxShadow: `3px 3px 0 ${C.border}`, padding: "10px 16px", cursor: "pointer", marginTop: 12 }}>
            &#9656; Continue
          </button>
        </div>
      )}
    </div>
  );
}
