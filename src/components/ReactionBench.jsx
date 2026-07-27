import { useRef, useState } from "react";
import { C, titleFont, bodyFont, pixelBorder } from "../theme.js";

/*
  A real drag-and-drop reaction bench.
  Drag a reagent bottle into the flask. The correct reagent triggers the
  reaction (bubbles, the acid + alcohol snap into an ester, water pops off).
  Works with mouse AND touch via pointer events + setPointerCapture.

  config = { prompt, start:{name,formula,color}, goal:{name,formula,color},
             reagents:[{name,formula,color,correct,explain}], successMsg }
*/

function Bottle({ color, size = 50 }) {
  // cut-corner glass bottle with a soft rim (no harsh black box)
  const glass = "#e9eef0", rim = "#9aa6a8";
  return (
    <svg viewBox="0 0 20 30" width={size} height={size * 1.5} shapeRendering="crispEdges" style={{ imageRendering: "pixelated", display: "block", margin: "0 auto" }}>
      <rect x="8" y="0" width="4" height="3" fill="#b5843f" />
      <rect x="8" y="3" width="4" height="1" fill="#8a6a38" />
      <rect x="9" y="4" width="2" height="3" fill={glass} />
      <rect x="8" y="7" width="4" height="1" fill={glass} />
      <rect x="7" y="8" width="6" height="1" fill={glass} />
      <rect x="6" y="9" width="8" height="1" fill={glass} />
      <rect x="5" y="10" width="10" height="17" fill={glass} />
      <rect x="6" y="27" width="8" height="1" fill={glass} />
      <rect x="5" y="10" width="1" height="17" fill={rim} />
      <rect x="14" y="10" width="1" height="17" fill={rim} />
      <rect x="6" y="9" width="8" height="1" fill={rim} />
      <rect x="6" y="27" width="8" height="1" fill={rim} />
      <rect x="7" y="8" width="1" height="1" fill={rim} />
      <rect x="12" y="8" width="1" height="1" fill={rim} />
      <rect x="6" y="16" width="8" height="11" fill={color} />
      <rect x="6" y="15" width="8" height="1" fill="#ffffff" fillOpacity="0.5" />
      <rect x="7" y="11" width="1" height="14" fill="#ffffff" fillOpacity="0.45" />
    </svg>
  );
}

// round-bottom flask with a liquid level + optional bubbles
function Flask({ color, active, bubbling, size = 150 }) {
  return (
    <svg viewBox="0 0 40 46" width={size} height={size * 1.15} shapeRendering="crispEdges" style={{ imageRendering: "pixelated", display: "block" }}>
      {/* neck */}
      <rect x="17" y="2" width="6" height="12" fill="#d7eef0" stroke="#3a2b1c" strokeWidth="1" />
      <rect x="15" y="1" width="10" height="2" fill="#3a2b1c" />
      {/* bulb */}
      <circle cx="20" cy="30" r="13" fill="#d7eef0" stroke="#3a2b1c" strokeWidth="1" />
      {/* liquid */}
      <path d="M9 30 a11 11 0 0 0 22 0 z" fill={color} />
      <rect x="9" y="29" width="22" height="1" fill="#ffffff" fillOpacity="0.45" />
      {/* highlight glint on top of the drop target */}
      {active && <circle cx="20" cy="30" r="15" fill="none" stroke={C.greenDeep} strokeWidth="1.5" strokeDasharray="2 2" />}
      {bubbling && (
        <g>
          <circle className="hq-bub" cx="15" cy="34" r="1.4" fill="#ffffff" fillOpacity="0.8" />
          <circle className="hq-bub" cx="21" cy="36" r="1.8" fill="#ffffff" fillOpacity="0.8" style={{ animationDelay: ".25s" }} />
          <circle className="hq-bub" cx="26" cy="34" r="1.2" fill="#ffffff" fillOpacity="0.8" style={{ animationDelay: ".5s" }} />
          <circle className="hq-bub" cx="18" cy="33" r="1" fill="#ffffff" fillOpacity="0.8" style={{ animationDelay: ".7s" }} />
        </g>
      )}
    </svg>
  );
}

export default function ReactionBench({ config, onSolve }) {
  const flaskRef = useRef(null);
  const [drag, setDrag] = useState(null); // {i, x, y}
  const [overFlask, setOverFlask] = useState(false);
  const [solved, setSolved] = useState(false);
  const [tried, setTried] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [shake, setShake] = useState(false);

  const isOverFlask = (x, y) => {
    const f = flaskRef.current?.getBoundingClientRect();
    return !!f && x >= f.left && x <= f.right && y >= f.top && y <= f.bottom;
  };

  const onDown = (e, i) => {
    if (solved || tried.includes(i)) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setDrag({ i, x: e.clientX, y: e.clientY });
  };
  const onMove = (e) => {
    if (!drag) return;
    setDrag((d) => (d ? { ...d, x: e.clientX, y: e.clientY } : d));
    setOverFlask(isOverFlask(e.clientX, e.clientY));
  };
  const onUp = (e, r, i) => {
    if (!drag) return;
    const dropped = isOverFlask(e.clientX, e.clientY);
    setDrag(null);
    setOverFlask(false);
    if (dropped) pour(r, i);
  };

  const pour = (r, i) => {
    if (solved) return;
    if (r.correct) {
      setSolved(true);
      setFeedback({ ok: true, text: r.explain });
    } else {
      setTried((t) => (t.includes(i) ? t : [...t, i]));
      setFeedback({ ok: false, text: r.explain });
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const flaskColor = solved ? config.goal.color : config.start.color;

  return (
    <div style={{ marginTop: 18 }}>
      <style>{`
        @keyframes hqBub { 0%{transform:translateY(0);opacity:.9} 100%{transform:translateY(-14px);opacity:0} }
        .hq-bub{ animation:hqBub 1s ease-in infinite; }
        @keyframes hqShake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-4px)} 40%{transform:translateX(4px)} 60%{transform:translateX(-3px)} 80%{transform:translateX(3px)} }
        .hq-shake{ animation:hqShake .45s; }
        @keyframes hqDrop { 0%{transform:translate(0,0);opacity:1} 100%{transform:translate(18px,-26px);opacity:0} }
        .hq-drop{ animation:hqDrop 1s ease-out forwards; }
      `}</style>

      <div style={{ ...pixelBorder(C.greenDeep), background: "#eef6df", padding: "10px 14px", marginBottom: 14 }}>
        <span style={{ ...titleFont, fontSize: 9, color: C.greenDeep }}>&#9670; Lab bench</span>
        <div style={{ ...bodyFont, fontSize: 20, color: C.ink, marginTop: 6, lineHeight: 1.15 }}>{config.prompt}</div>
        <div style={{ ...bodyFont, fontSize: 17, color: C.inkSoft, marginTop: 4 }}>Drag a bottle into the flask.</div>
      </div>

      {/* flask stage */}
      <div style={{ position: "relative", display: "flex", justifyContent: "center", padding: "6px 0 2px", minHeight: 180 }}>
        <div ref={flaskRef} className={shake ? "hq-shake" : ""} style={{ position: "relative", textAlign: "center" }}>
          <Flask color={flaskColor} active={overFlask && !solved} bubbling={solved} />
          {/* escaping water molecule on success */}
          {solved && (
            <div className="hq-drop" style={{ position: "absolute", top: 40, right: 8, ...bodyFont, fontSize: 15, color: "#6fa8dc" }}>H₂O ↗</div>
          )}
          <div style={{ ...bodyFont, fontSize: 17, color: C.ink, marginTop: 2 }}>
            {solved ? config.goal.name : config.start.name}
            <div style={{ ...titleFont, fontSize: 8, color: C.goldDeep, marginTop: 3 }}>{solved ? config.goal.formula : config.start.formula}</div>
          </div>
        </div>
      </div>

      {/* reagent shelf */}
      {!solved && (
        <div>
          <div style={{ borderTop: `3px solid ${C.border}`, marginTop: 6, paddingTop: 12 }} />
          <div style={{ display: "flex", justifyContent: "center", gap: 30, flexWrap: "wrap", padding: "4px 0 2px" }}>
            {config.reagents.map((r, i) => {
              const used = tried.includes(i);
              return (
                <div
                  key={i}
                  onPointerDown={(e) => onDown(e, i)}
                  onPointerMove={onMove}
                  onPointerUp={(e) => onUp(e, r, i)}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center",
                    cursor: used ? "not-allowed" : "grab",
                    opacity: used ? 0.35 : drag?.i === i ? 0.25 : 1,
                    touchAction: "none", userSelect: "none", width: 96,
                  }}
                >
                  <Bottle color={r.color} />
                  <div style={{ ...bodyFont, fontSize: 18, color: C.ink, marginTop: 2 }}>{r.name}</div>
                  <div style={{ ...titleFont, fontSize: 8, color: C.goldDeep, marginTop: 3 }}>{r.formula}</div>
                  {used && <div style={{ ...bodyFont, fontSize: 15, color: C.rose, marginTop: 2 }}>✕ nope</div>}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* floating dragged bottle */}
      {drag && (
        <div style={{ position: "fixed", left: drag.x, top: drag.y, transform: "translate(-50%,-50%)", pointerEvents: "none", zIndex: 50 }}>
          <Bottle color={config.reagents[drag.i].color} size={60} />
        </div>
      )}

      {/* feedback */}
      {feedback && (
        <div style={{ ...pixelBorder(feedback.ok ? C.greenDeep : C.goldDeep), background: feedback.ok ? "#eef6df" : "#fdf1d6", padding: "12px 14px", marginTop: 14 }}>
          <div style={{ ...titleFont, fontSize: 9, color: feedback.ok ? C.greenDeep : C.goldDeep, marginBottom: 6 }}>
            {feedback.ok ? "✓ Reaction!" : "✕ Not quite"}
          </div>
          <div style={{ ...bodyFont, fontSize: 19, color: C.ink, lineHeight: 1.2 }}>{feedback.text}</div>
        </div>
      )}

      {solved && (
        <div style={{ marginTop: 14 }}>
          <div style={{ ...bodyFont, fontSize: 20, color: C.greenDeep, marginBottom: 10 }}>{config.successMsg}</div>
          <button
            onClick={onSolve}
            style={{ ...bodyFont, fontSize: 21, color: "#fff", background: C.greenDeep, border: `3px solid ${C.border}`, boxShadow: `3px 3px 0 ${C.border}`, padding: "10px 16px", cursor: "pointer" }}
          >
            &#9656; Continue
          </button>
        </div>
      )}
    </div>
  );
}
