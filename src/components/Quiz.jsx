import { useState } from "react";
import { C, titleFont, bodyFont, pixelBorder } from "../theme.js";

// End-of-story quiz. One question at a time; shows right/wrong, tallies a score,
// then reports the result. onComplete(score, total) fires once at the end.
export default function Quiz({ questions, onComplete, onHome, onRestart }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[i];

  const choose = (idx) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (i + 1 < questions.length) {
      setI(i + 1);
      setPicked(null);
    } else {
      setDone(true);
      onComplete(score, questions.length);
    }
  };

  if (done) {
    const perfect = score === questions.length;
    return (
      <div style={{ ...pixelBorder(), background: C.card, overflow: "hidden" }}>
        <div style={{ background: C.greenDeep, padding: "10px 16px", borderBottom: `4px solid ${C.border}` }}>
          <span style={{ ...titleFont, color: "#fff", fontSize: 10 }}>Quiz complete</span>
        </div>
        <div style={{ padding: "22px", textAlign: "center" }}>
          <div style={{ ...titleFont, fontSize: 20, color: C.goldDeep, marginBottom: 10 }}>
            {score} / {questions.length}
          </div>
          <div style={{ ...bodyFont, fontSize: 22, color: C.ink, marginBottom: 6 }}>
            {perfect ? "Perfect score! Badge earned." : "Nice work — badge earned."}
          </div>
          <div style={{ ...bodyFont, fontSize: 19, color: C.inkSoft, marginBottom: 18 }}>
            This scientist is now marked complete on your home screen.
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={onRestart} style={btn(false)}>&#8635; Replay story</button>
            <button onClick={onHome} style={btn(true)}>&#9668; Home</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ ...pixelBorder(), background: C.card, overflow: "hidden" }}>
      <div style={{ background: C.greenDeep, padding: "10px 16px", borderBottom: `4px solid ${C.border}`, display: "flex", justifyContent: "space-between" }}>
        <span style={{ ...titleFont, color: "#fff", fontSize: 10 }}>Quiz</span>
        <span style={{ ...titleFont, color: "#fff", fontSize: 10 }}>{i + 1} / {questions.length}</span>
      </div>
      <div style={{ padding: "20px 22px" }}>
        <p style={{ ...bodyFont, fontSize: 23, color: C.ink, lineHeight: 1.2, margin: "0 0 16px" }}>{q.q}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {q.options.map((opt, idx) => {
            const isAnswer = idx === q.answer;
            const isPicked = idx === picked;
            let bg = C.paper, col = C.ink, bd = C.border;
            if (picked !== null) {
              if (isAnswer) { bg = "#dff0c8"; bd = C.greenDeep; col = C.greenDeep; }
              else if (isPicked) { bg = "#f4d6cf"; bd = C.rose; col = "#9c4a4a"; }
            }
            return (
              <button
                key={idx}
                onClick={() => choose(idx)}
                disabled={picked !== null}
                style={{
                  ...bodyFont, fontSize: 21, textAlign: "left",
                  background: bg, color: col,
                  border: `3px solid ${bd}`, boxShadow: `3px 3px 0 ${bd}`,
                  padding: "10px 14px",
                  cursor: picked !== null ? "default" : "pointer",
                }}
              >
                {picked !== null && isAnswer ? "✓ " : picked !== null && isPicked ? "✕ " : "▸ "}
                {opt}
              </button>
            );
          })}
        </div>
        {picked !== null && (
          <button onClick={next} style={{ ...btn(true), marginTop: 16 }}>
            {i + 1 < questions.length ? "Next question ▸" : "See result ▸"}
          </button>
        )}
      </div>
    </div>
  );
}

function btn(primary) {
  return {
    ...bodyFont,
    fontSize: 21,
    color: primary ? "#fff" : C.ink,
    background: primary ? C.greenDeep : C.paper,
    border: `3px solid ${C.border}`,
    boxShadow: `3px 3px 0 ${C.border}`,
    padding: "10px 16px",
    cursor: "pointer",
  };
}
