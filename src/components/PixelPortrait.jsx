// Dignified, stylized pixel portraits on a 16x16 grid — Stardew-flavored, not
// photorealistic. Each figure supplies a `portrait` traits object (see figures.js).
// If a figure has an `image` field instead, Home renders that PNG directly, so
// you can drop in real pixel art later with zero code changes here.
export default function PixelPortrait({ p, bg = "#7fa650", size = 120 }) {
  const rects = [];
  const px = (x, y, w, h, fill, opacity) =>
    rects.push(
      <rect key={rects.length} x={x} y={y} width={w} height={h} fill={fill} fillOpacity={opacity} />
    );

  const skin = p.skin, sd = p.skinDark, hair = p.hair;
  const EYE = "#2b2320";

  // torso / attire
  px(2, 13, 12, 3, p.attire);
  px(6, 13, 1, 2, p.collar); px(9, 13, 1, 2, p.collar); px(7, 13, 2, 1, p.collar);
  // neck
  px(7, 11, 2, 2, sd); px(7, 11, 2, 1, skin);
  // head base (rounded)
  px(5, 3, 6, 1, skin);
  px(4, 4, 8, 7, skin);
  px(5, 11, 6, 1, skin);
  // ears
  px(3, 7, 1, 2, skin); px(12, 7, 1, 2, skin);
  if (p.earring) { px(3, 9, 1, 1, p.earring); px(12, 9, 1, 1, p.earring); }
  // hair
  if (p.longSides) { px(3, 4, 2, 9, hair); px(11, 4, 2, 9, hair); }
  if (p.hairTop) {
    px(6, 1, 4, 1, hair); px(5, 2, 6, 1, hair); px(4, 3, 8, 1, hair);
    if (!p.receding) { px(4, 4, 1, 2, hair); px(11, 4, 1, 2, hair); }
  }
  if (p.receding) { px(5, 2, 6, 1, hair); px(4, 3, 3, 1, hair); px(9, 3, 3, 1, hair); }
  if (p.temples) { px(4, 4, 1, 3, hair); px(11, 4, 1, 3, hair); }
  if (p.bun) { px(6, 0, 4, 2, hair); }
  if (p.bald) {
    const sh = p.sideHair || hair;
    px(3, 6, 1, 3, sh); px(12, 6, 1, 3, sh); px(4, 5, 1, 1, sh); px(11, 5, 1, 1, sh);
  }
  // brows
  px(6, 6, 1, 1, p.brow || hair); px(9, 6, 1, 1, p.brow || hair);
  // eyes
  px(6, 7, 1, 1, EYE); px(9, 7, 1, 1, EYE);
  // nose
  px(8, 8, 1, 1, sd);
  // mouth
  px(7, 10, 2, 1, p.mouth || "#8a4b47");
  // mustache
  if (p.mustache) { px(6, 9, 4, 1, p.stache || hair); }
  // beard
  if (p.beard) { px(5, 10, 6, 2, hair); px(4, 8, 1, 3, hair); px(11, 8, 1, 3, hair); }
  // glasses (round wire frames)
  if (p.glasses) {
    const g = p.glassColor || "#3a2b1c";
    px(6, 6, 1, 1, g); px(5, 7, 1, 1, g); px(7, 7, 1, 1, g); px(6, 8, 1, 1, g);
    px(9, 6, 1, 1, g); px(8, 7, 1, 1, g); px(10, 7, 1, 1, g); px(9, 8, 1, 1, g);
    px(4, 7, 1, 1, g); px(11, 7, 1, 1, g);
    px(6, 7, 1, 1, EYE); px(9, 7, 1, 1, EYE);
  }
  // lapel flower
  if (p.flower) { px(5, 14, 1, 1, p.flower); px(5, 13, 1, 1, "#5c7a3a"); }

  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      style={{ imageRendering: "pixelated", display: "block" }}
    >
      <rect x="0" y="0" width="16" height="16" fill={bg} />
      {rects}
    </svg>
  );
}
