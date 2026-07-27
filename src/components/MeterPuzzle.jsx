import { useState } from "react";
import { C, titleFont, bodyFont, pixelBorder } from "../theme.js";
import Icon from "./Icon.jsx";

// Tap options to push a meter into the goal zone. Icon-driven resource micro-game.
//   config = { prompt, meterLabel, start, goal, options:[{label,delta,kind,icon}], hint, successMsg }
export default function MeterPuzzle({ config, onSolve }) {
  const [val, setVal] = useState(config.start);
  const [flash, setFlash] = useState(null);
  const solved = val >= config.goal;

  const tap = (o, i) => {
    if (solved) return;
    setVal((v) => Math.max(0, Math.min(100, v + o.delta)));
    setFlash({ i, delta: o.delta });
    setTimeout(() => setFlash(null), 500);
  };

  return (
    <div style={{ marginTop: 18 }}>
      <div style={{ ...pixelBorder(C.greenDeep), background: "#eef6df", padding: "10px 14px", marginBottom: 14 }}>
        <span style={{ ...titleFont, fontSize: 9, color: C.greenDeep }}>&#9670; The field</span>
        <div style={{ ...bodyFont, fontSize: 20, color: C.ink, marginTop: 6, lineHeight: 1.15 }}>{config.prompt}</div>
        {config.hint && <div style={{ ...bodyFont, fontSize: 16, color: C.inkSoft, marginTop: 4 }}>{config.hint}</div>}
      </div>

      {/* meter with goal marker */}
      <div style={{ ...pixelBorder(), background: C.card, padding: "12px 14px", marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", ...titleFont, fontSize: 9, color: C.ink, marginBottom: 8 }}>
          <span>{config.meterLabel}</span><span>{val}%</span>
        </div>
        <div style={{ position: "relative", height: 20, background: C.paperDark, border: `2px solid ${C.border}` }}>
          <div style={{ width: `${val}%`, height: "100%", background: solved ? C.green : C.gold, transition: "width .3s" }} />
          <div style={{ position: "absolute", top: -4, bottom: -4, left: `${config.goal}%`, width: 2, background: C.greenDeep }} />
        </div>
        <div style={{ ...bodyFont, fontSize: 14, color: C.inkSoft, marginTop: 4, textAlign: "right" }}>goal: {config.goal}%</div>
      </div>

      {/* crop buttons */}
      {!solved && (
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          {config.options.map((o, i) => (
            <button
              key={i}
              onClick={() => tap(o, i)}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 5, width: 92, position: "relative",
                background: o.kind === "good" ? "#eef6df" : "#f6ece6",
                border: `3px solid ${o.kind === "good" ? C.greenDeep : C.rose}`, boxShadow: `3px 3px 0 ${C.border}`,
                padding: "10px 6px", cursor: "pointer", ...bodyFont,
              }}
            >
              <Icon name={o.icon} color={o.kind === "good" ? C.greenDeep : "#9c4a4a"} />
              <span style={{ fontSize: 17, color: C.ink }}>{o.label}</span>
              <span style={{ fontSize: 14, color: o.delta > 0 ? C.greenDeep : C.rose }}>{o.delta > 0 ? `+${o.delta}` : o.delta} N</span>
              {flash?.i === i && (
                <span style={{ position: "absolute", top: -14, right: 6, ...bodyFont, fontSize: 18, color: o.delta > 0 ? C.greenDeep : C.rose }}>
                  {o.delta > 0 ? `+${o.delta}` : o.delta}
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {solved && (
        <div style={{ marginTop: 14 }}>
          <div style={{ ...pixelBorder(C.greenDeep), background: "#eef6df", padding: "12px 14px" }}>
            <div style={{ ...titleFont, fontSize: 9, color: C.greenDeep, marginBottom: 6 }}>✓ Soil restored!</div>
            <div style={{ ...bodyFont, fontSize: 19, color: C.ink, lineHeight: 1.2 }}>{config.successMsg}</div>
          </div>
          <button onClick={onSolve} style={{ ...bodyFont, fontSize: 21, color: "#fff", background: C.greenDeep, border: `3px solid ${C.border}`, boxShadow: `3px 3px 0 ${C.border}`, padding: "10px 16px", cursor: "pointer", marginTop: 12 }}>&#9656; Continue</button>
        </div>
      )}
    </div>
  );
}
