import { useState } from "react";
import { C, titleFont, bodyFont, pixelBorder } from "../theme.js";

// A reusable "reaction bench" puzzle. Pick the reagent that transforms the
// starting molecule into the goal. Wrong picks teach and let you retry.
//   config = { prompt, start:{name,formula}, goal:{name,formula},
//              reagents:[{name,formula,correct,explain}], successMsg }
function MoleculeTile({ name, formula, dim }) {
  return (
    <div
      style={{
        ...pixelBorder(C.border),
        ...bodyFont,
        background: dim ? C.paperDark : C.card,
        padding: "10px 12px",
        textAlign: "center",
        minWidth: 96,
        opacity: dim ? 0.55 : 1,
      }}
    >
      <div style={{ ...titleFont, fontSize: 8, color: C.goldDeep, marginBottom: 6 }}>{formula}</div>
      <div style={{ fontSize: 17, color: C.ink, lineHeight: 1.1 }}>{name}</div>
    </div>
  );
}

export default function ReactionPuzzle({ config, onSolve }) {
  const [solved, setSolved] = useState(false);
  const [tried, setTried] = useState([]); // indexes of wrong reagents tried
  const [feedback, setFeedback] = useState(null); // {ok, text}

  const pick = (r, i) => {
    if (solved) return;
    if (r.correct) {
      setSolved(true);
      setFeedback({ ok: true, text: r.explain });
    } else {
      setTried((t) => (t.includes(i) ? t : [...t, i]));
      setFeedback({ ok: false, text: r.explain });
    }
  };

  return (
    <div style={{ marginTop: 18 }}>
      <div style={{ ...pixelBorder(C.greenDeep), background: "#eef6df", padding: "10px 14px", marginBottom: 16 }}>
        <span style={{ ...titleFont, fontSize: 9, color: C.greenDeep }}>&#9670; Lab bench</span>
        <div style={{ ...bodyFont, fontSize: 20, color: C.ink, marginTop: 6, lineHeight: 1.15 }}>{config.prompt}</div>
      </div>

      {/* reaction row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
        <MoleculeTile name={config.start.name} formula={config.start.formula} />
        <span style={{ ...titleFont, fontSize: 14, color: C.ink }}>+</span>
        <div style={{ ...pixelBorder(C.goldDeep), background: solved ? C.card : "#fdf1d6", padding: "10px 12px", minWidth: 70, textAlign: "center" }}>
          <span style={{ ...bodyFont, fontSize: 17, color: solved ? C.ink : C.goldDeep }}>{solved ? config.reagents.find((r) => r.correct).formula : "?"}</span>
        </div>
        <span style={{ ...titleFont, fontSize: 14, color: C.ink }}>&#8594;</span>
        <MoleculeTile name={solved ? config.goal.name : "?"} formula={solved ? config.goal.formula : "?"} dim={!solved} />
      </div>

      {/* reagent shelf */}
      {!solved && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {config.reagents.map((r, i) => (
            <button
              key={i}
              onClick={() => pick(r, i)}
              disabled={tried.includes(i)}
              style={{
                ...bodyFont,
                fontSize: 20,
                textAlign: "left",
                color: tried.includes(i) ? C.inkSoft : C.ink,
                background: tried.includes(i) ? C.paperDark : C.paper,
                border: `3px solid ${C.border}`,
                boxShadow: `3px 3px 0 ${C.border}`,
                padding: "10px 14px",
                cursor: tried.includes(i) ? "not-allowed" : "pointer",
                opacity: tried.includes(i) ? 0.6 : 1,
              }}
            >
              &#9656; Add {r.name} <span style={{ color: C.goldDeep, fontSize: 16 }}>({r.formula})</span>
            </button>
          ))}
        </div>
      )}

      {/* feedback */}
      {feedback && (
        <div
          style={{
            ...pixelBorder(feedback.ok ? C.greenDeep : C.goldDeep),
            background: feedback.ok ? "#eef6df" : "#fdf1d6",
            padding: "12px 14px",
            marginTop: 14,
          }}
        >
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
            style={{
              ...bodyFont,
              fontSize: 21,
              color: "#fff",
              background: C.greenDeep,
              border: `3px solid ${C.border}`,
              boxShadow: `3px 3px 0 ${C.border}`,
              padding: "10px 16px",
              cursor: "pointer",
            }}
          >
            &#9656; Continue
          </button>
        </div>
      )}
    </div>
  );
}
