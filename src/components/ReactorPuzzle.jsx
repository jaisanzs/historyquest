import { useState } from "react";
import { C, titleFont, bodyFont, pixelBorder } from "../theme.js";
import Icon from "./Icon.jsx";

// Press the control buttons in the correct order to fire the reaction.
// Icon-driven, minimal text. The reactor pulses as you progress, then spins on success.
//   config = { prompt, vessel:{from,to}, steps:[{id,label,icon}], successMsg }
function lerp(a, b, t) {
  const h = (x) => [parseInt(x.slice(1, 3), 16), parseInt(x.slice(3, 5), 16), parseInt(x.slice(5, 7), 16)];
  const [r1, g1, b1] = h(a), [r2, g2, b2] = h(b);
  const m = (u, v) => Math.round(u + (v - u) * t).toString(16).padStart(2, "0");
  return `#${m(r1, r2)}${m(g1, g2)}${m(b1, b2)}`;
}

export default function ReactorPuzzle({ config, onSolve }) {
  const steps = config.steps;
  const [order] = useState(() => steps.map((_, i) => i).sort(() => Math.random() - 0.5));
  const [n, setN] = useState(0); // correct presses so far
  const [wrong, setWrong] = useState(null);
  const done = n === steps.length;
  const nextId = done ? null : steps[n].id;
  const color = lerp(config.vessel.from, config.vessel.to, n / steps.length);

  const press = (i) => {
    if (done) return;
    if (steps[i].id === nextId) setN((v) => v + 1);
    else { setWrong(i); setTimeout(() => setWrong(null), 400); }
  };

  const pressedIds = new Set(steps.slice(0, n).map((s) => s.id));

  return (
    <div style={{ marginTop: 18 }}>
      <style>{`
        @keyframes hqSpin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
        @keyframes hqPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
        @keyframes hqBuzz{0%,100%{transform:translateX(0)}25%{transform:translateX(-3px)}75%{transform:translateX(3px)}}
        .hq-spin{animation:hqSpin 1.1s linear infinite}
        .hq-pulse{animation:hqPulse .5s}
        .hq-buzz{animation:hqBuzz .35s}
      `}</style>

      <div style={{ ...pixelBorder(C.greenDeep), background: "#eef6df", padding: "10px 14px", marginBottom: 14 }}>
        <span style={{ ...titleFont, fontSize: 9, color: C.greenDeep }}>&#9670; Reactor</span>
        <div style={{ ...bodyFont, fontSize: 20, color: C.ink, marginTop: 6, lineHeight: 1.15 }}>{config.prompt}</div>
        <div style={{ ...bodyFont, fontSize: 16, color: C.inkSoft, marginTop: 4 }}>Press the controls in the right order.</div>
      </div>

      {/* reactor vessel */}
      <div style={{ display: "flex", justifyContent: "center", padding: "6px 0 14px" }}>
        <div key={n} className={done ? "hq-spin" : "hq-pulse"}>
          <svg viewBox="0 0 48 48" width={150} height={150} shapeRendering="crispEdges" style={{ imageRendering: "pixelated" }}>
            <rect x="18" y="3" width="12" height="6" fill="#cfd7d9" stroke="#3a2b1c" strokeWidth="1" />
            <rect x="10" y="9" width="28" height="30" rx="4" fill="#e3ebed" stroke="#3a2b1c" strokeWidth="1" />
            <rect x="13" y={39 - (n / steps.length) * 26} width="22" height={(n / steps.length) * 26 + 0.01} fill={color} />
            <rect x="13" y="37" width="22" height="2" fill={color} />
            {done && (<>
              <circle cx="18" cy="30" r="2" fill="#fff" fillOpacity="0.85" />
              <circle cx="26" cy="26" r="2.5" fill="#fff" fillOpacity="0.85" />
              <circle cx="30" cy="32" r="1.6" fill="#fff" fillOpacity="0.85" />
            </>)}
          </svg>
        </div>
      </div>

      {/* progress dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 14 }}>
        {steps.map((_, i) => (
          <span key={i} style={{ width: 12, height: 12, background: i < n ? C.green : C.paperDark, border: `2px solid ${C.border}` }} />
        ))}
      </div>

      {/* control buttons */}
      {!done && (
        <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
          {order.map((i) => {
            const st = steps[i];
            const doneStep = pressedIds.has(st.id);
            return (
              <button
                key={st.id}
                onClick={() => press(i)}
                disabled={doneStep}
                className={wrong === i ? "hq-buzz" : ""}
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 6, width: 104,
                  background: doneStep ? "#dff0c8" : C.paper,
                  border: `3px solid ${doneStep ? C.greenDeep : C.border}`, boxShadow: `3px 3px 0 ${C.border}`,
                  padding: "10px 6px", cursor: doneStep ? "default" : "pointer", ...bodyFont,
                }}
              >
                <Icon name={st.icon} color={doneStep ? C.greenDeep : C.ink} />
                <span style={{ fontSize: 16, color: C.ink, lineHeight: 1.05, textAlign: "center" }}>{st.label}</span>
                {doneStep && <span style={{ fontSize: 14, color: C.greenDeep }}>✓</span>}
              </button>
            );
          })}
        </div>
      )}

      {done && (
        <div style={{ marginTop: 14 }}>
          <div style={{ ...pixelBorder(C.greenDeep), background: "#eef6df", padding: "12px 14px" }}>
            <div style={{ ...titleFont, fontSize: 9, color: C.greenDeep, marginBottom: 6 }}>✓ Reaction complete!</div>
            <div style={{ ...bodyFont, fontSize: 19, color: C.ink, lineHeight: 1.2 }}>{config.successMsg}</div>
          </div>
          <button onClick={onSolve} style={{ ...bodyFont, fontSize: 21, color: "#fff", background: C.greenDeep, border: `3px solid ${C.border}`, boxShadow: `3px 3px 0 ${C.border}`, padding: "10px 16px", cursor: "pointer", marginTop: 12 }}>&#9656; Continue</button>
        </div>
      )}
    </div>
  );
}
