import { C } from "../theme.js";

// A tiny cozy pixel-art scene (warm window + potted plant + flask), drawn on a
// coarse grid so it reads as pixel art. `accent`/`accent2` recolor the plant.
export default function PixelScene({ accent, accent2, style }) {
  return (
    <svg
      viewBox="0 0 32 32"
      style={{ imageRendering: "pixelated", ...style }}
      shapeRendering="crispEdges"
    >
      {/* sky */}
      <rect x="0" y="0" width="32" height="32" fill={C.sky} />
      {/* warm window light */}
      <rect x="3" y="3" width="12" height="12" fill={C.woodDark} />
      <rect x="4" y="4" width="10" height="10" fill="#ffe6a3" />
      <rect x="9" y="4" width="1" height="10" fill={C.woodDark} />
      <rect x="4" y="9" width="10" height="1" fill={C.woodDark} />
      {/* shelf */}
      <rect x="0" y="22" width="32" height="2" fill={C.wood} />
      <rect x="0" y="24" width="32" height="8" fill={C.woodDark} />
      {/* potted plant */}
      <rect x="20" y="6" width="2" height="10" fill={accent2} />
      <rect x="17" y="7" width="8" height="3" fill={accent} />
      <rect x="18" y="4" width="6" height="3" fill={accent} />
      <rect x="19" y="16" width="4" height="4" fill={C.wood} />
      {/* round-bottom flask */}
      <rect x="6" y="16" width="4" height="1" fill={C.border} />
      <rect x="7" y="17" width="2" height="2" fill={C.border} />
      <rect x="5" y="18" width="6" height="4" fill="#d7f2ee" />
      <rect x="5" y="20" width="6" height="2" fill={C.flask} />
      {/* little molecule sparkle */}
      <rect x="26" y="14" width="2" height="2" fill="#fff" />
      <rect x="28" y="16" width="1" height="1" fill="#fff" />
    </svg>
  );
}
