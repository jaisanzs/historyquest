import { useState } from "react";
import { C, titleFont, bodyFont, pixelBorder, barBtn, choiceBtn } from "../theme.js";
import { STORIES } from "../data/stories.js";

// Game screen: renders one story graph as a sequence of scenes with choices.
// Each story provides its own citations via story.meta.sources.
export default function Game({ figureId, onHome }) {
  const story = STORIES[figureId];
  const [sceneId, setSceneId] = useState("start");
  const [history, setHistory] = useState([]);
  const scene = story[sceneId];
  const sources = story.meta.sources || [];

  const go = (to) => {
    setHistory((h) => [...h, sceneId]);
    setSceneId(to);
  };
  const back = () => {
    if (!history.length) return;
    setSceneId(history[history.length - 1]);
    setHistory(history.slice(0, -1));
  };
  const restart = () => {
    setHistory([]);
    setSceneId("start");
  };

  return (
    <div>
      {/* top bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        <button onClick={onHome} style={barBtn}>&#9668; Player cards</button>
        <div style={{ ...titleFont, fontSize: 10, color: C.ink }}>{story.meta.name}</div>
        <button onClick={history.length ? back : restart} style={barBtn}>
          {history.length ? "↶ Back" : "↻ Restart"}
        </button>
      </div>

      {/* scene panel */}
      <div style={{ ...pixelBorder(), background: C.card, overflow: "hidden" }}>
        <div style={{ background: C.greenDeep, padding: "10px 16px", borderBottom: `4px solid ${C.border}` }}>
          <span style={{ ...titleFont, color: "#fff", fontSize: 10, lineHeight: 1.5 }}>{scene.chapter}</span>
        </div>

        <div style={{ padding: "20px 22px" }}>
          <p style={{ ...bodyFont, color: C.ink, fontSize: 23, lineHeight: 1.25, margin: 0 }}>{scene.text}</p>

          {scene.note && (
            <div style={{ ...pixelBorder(C.goldDeep), background: "#fdf1d6", padding: "12px 14px", margin: "18px 0 4px" }}>
              <div style={{ ...titleFont, color: C.goldDeep, fontSize: 9, marginBottom: 8 }}>&#10022; {scene.note.title}</div>
              <div style={{ ...bodyFont, color: C.ink, fontSize: 20, lineHeight: 1.2 }}>{scene.note.body}</div>
            </div>
          )}

          {/* choices */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 22 }}>
            {scene.choices.map((c, i) => (
              <button
                key={i}
                onClick={() => go(c.to)}
                style={choiceBtn}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = C.green;
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translate(-2px,-2px)";
                  e.currentTarget.style.boxShadow = `5px 5px 0 ${C.border}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = C.paper;
                  e.currentTarget.style.color = C.ink;
                  e.currentTarget.style.transform = "translate(0,0)";
                  e.currentTarget.style.boxShadow = `3px 3px 0 ${C.border}`;
                }}
              >
                &#9656; {c.label}
              </button>
            ))}
          </div>

          {/* finale */}
          {scene.end && (
            <div style={{ marginTop: 22 }}>
              <div style={{ ...pixelBorder(C.greenDeep), background: "#eef6df", padding: "14px 16px" }}>
                <div style={{ ...titleFont, color: C.greenDeep, fontSize: 10, marginBottom: 10 }}>Sources</div>
                <div style={{ ...bodyFont, fontSize: 19, lineHeight: 1.35 }}>
                  {sources.map((s, i) => (
                    <div key={i} style={{ marginBottom: 4 }}>
                      <a href={s.u} target="_blank" rel="noreferrer" style={{ color: C.greenDeep }}>
                        &#8594; {s.t}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
                <button onClick={restart} style={{ ...choiceBtn, flex: 1 }}>&#8635; Play again</button>
                <button onClick={onHome} style={{ ...choiceBtn, flex: 1 }}>&#9668; Other figures</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <p style={{ ...bodyFont, textAlign: "center", color: C.inkSoft, fontSize: 18, marginTop: 16 }}>
        Choices grounded in real history. Learn about the way they shaped the world.
      </p>
    </div>
  );
}
