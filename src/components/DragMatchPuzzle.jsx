import { useRef, useState } from "react";
import { C, titleFont, bodyFont, pixelBorder } from "../theme.js";

/*
  Drag items into the correct target box. Handles both:
   - "sort" : a couple of labeled bins (e.g. drains soil / feeds soil)
   - "order": numbered step slots (drag each step to its place)
  config = { prompt, ordered?, targets:[{id,label,color}], items:[{label,sub,target}], successMsg }
  Mouse + touch via pointer events.
*/
export default function DragMatchPuzzle({ config, onSolve }) {
  const targetRefs = useRef({});
  const [placed, setPlaced] = useState({}); // itemIndex -> targetId
  const [drag, setDrag] = useState(null); // {index, x, y}
  const [overId, setOverId] = useState(null);
  const [shakeId, setShakeId] = useState(null);
  const [nudge, setNudge] = useState(null);

  const items = config.items;
  const [order] = useState(() => items.map((_, i) => i).sort(() => Math.random() - 0.5));
  const allPlaced = Object.keys(placed).length === items.length;

  const hitTarget = (x, y) => {
    for (const t of config.targets) {
      const el = targetRefs.current[t.id];
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return t;
    }
    return null;
  };

  const onDown = (e, index) => {
    if (placed[index] !== undefined || allPlaced) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setDrag({ index, x: e.clientX, y: e.clientY });
  };
  const onMove = (e) => {
    if (!drag) return;
    setDrag((d) => (d ? { ...d, x: e.clientX, y: e.clientY } : d));
    setOverId(hitTarget(e.clientX, e.clientY)?.id ?? null);
  };
  const onUp = (e) => {
    if (!drag) return;
    const t = hitTarget(e.clientX, e.clientY);
    const idx = drag.index;
    setDrag(null);
    setOverId(null);
    if (!t) return;
    if (items[idx].target === t.id) {
      setPlaced((p) => ({ ...p, [idx]: t.id }));
    } else {
      setShakeId(t.id);
      setNudge("Not there — try another spot.");
      setTimeout(() => setShakeId(null), 450);
    }
  };

  return (
    <div style={{ marginTop: 18 }}>
      <style>{`@keyframes hqmShake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}.hqm-shake{animation:hqmShake .4s}`}</style>

      <div style={{ ...pixelBorder(C.greenDeep), background: "#eef6df", padding: "10px 14px", marginBottom: 14 }}>
        <span style={{ ...titleFont, fontSize: 9, color: C.greenDeep }}>&#9670; {config.ordered ? "Put it in order" : "Sort it out"}</span>
        <div style={{ ...bodyFont, fontSize: 20, color: C.ink, marginTop: 6, lineHeight: 1.15 }}>{config.prompt}</div>
        <div style={{ ...bodyFont, fontSize: 16, color: C.inkSoft, marginTop: 4 }}>Drag each card into a box.</div>
      </div>

      {/* target boxes */}
      <div style={{ display: config.ordered ? "block" : "grid", gridTemplateColumns: config.ordered ? undefined : "1fr 1fr", gap: 12, marginBottom: 16 }}>
        {config.targets.map((t, ti) => {
          const here = Object.entries(placed).filter(([, tid]) => tid === t.id).map(([i]) => items[i]);
          return (
            <div
              key={t.id}
              ref={(el) => (targetRefs.current[t.id] = el)}
              className={shakeId === t.id ? "hqm-shake" : ""}
              style={{
                ...pixelBorder(overId === t.id ? C.greenDeep : C.border),
                background: overId === t.id ? "#e4f1cf" : C.paper,
                padding: "10px 12px", marginBottom: config.ordered ? 10 : 0, minHeight: 54,
              }}
            >
              <div style={{ ...titleFont, fontSize: 8, color: t.color || C.goldDeep, marginBottom: 6 }}>
                {config.ordered ? `${ti + 1}.` : ""} {t.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {here.map((it, k) => (
                  <span key={k} style={{ ...bodyFont, fontSize: 17, color: "#fff", background: C.greenDeep, border: `2px solid ${C.border}`, padding: "3px 8px" }}>
                    {it.label}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* item tray */}
      {!allPlaced && (
        <div style={{ borderTop: `3px solid ${C.border}`, paddingTop: 12, display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {order.map((i) =>
            placed[i] !== undefined ? null : (
              ((it) => (
              <div
                key={i}
                onPointerDown={(e) => onDown(e, i)}
                onPointerMove={onMove}
                onPointerUp={onUp}
                style={{
                  ...bodyFont, fontSize: 18, color: C.ink,
                  background: drag?.index === i ? C.paperDark : C.card,
                  border: `3px solid ${C.border}`, boxShadow: `3px 3px 0 ${C.border}`,
                  padding: "8px 12px", cursor: "grab", touchAction: "none", userSelect: "none",
                  opacity: drag?.index === i ? 0.3 : 1, maxWidth: 260,
                }}
              >
                {it.label}
                {it.sub && <div style={{ fontSize: 14, color: C.inkSoft }}>{it.sub}</div>}
              </div>
              ))(items[i])
            )
          )}
        </div>
      )}

      {nudge && !allPlaced && (
        <div style={{ ...bodyFont, fontSize: 16, color: C.goldDeep, textAlign: "center", marginTop: 10 }}>{nudge}</div>
      )}

      {/* floating clone */}
      {drag && (
        <div style={{ position: "fixed", left: drag.x, top: drag.y, transform: "translate(-50%,-50%)", pointerEvents: "none", zIndex: 50,
          ...bodyFont, fontSize: 18, color: C.ink, background: C.card, border: `3px solid ${C.border}`, boxShadow: `3px 3px 0 ${C.border}`, padding: "8px 12px", maxWidth: 260 }}>
          {items[drag.index].label}
        </div>
      )}

      {allPlaced && (
        <div style={{ marginTop: 14 }}>
          <div style={{ ...pixelBorder(C.greenDeep), background: "#eef6df", padding: "12px 14px" }}>
            <div style={{ ...titleFont, fontSize: 9, color: C.greenDeep, marginBottom: 6 }}>✓ Solved!</div>
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
