// Shared palette + pixel-styling helpers used across components.

export const C = {
  paper: "#f6e7c4",
  paperDark: "#e7d3a2",
  card: "#fbf3dd",
  ink: "#402d1c",
  inkSoft: "#6b503a",
  border: "#3a2b1c",
  green: "#7fa650",
  greenDeep: "#4f6f34",
  gold: "#e0a24e",
  goldDeep: "#c07f2c",
  sky: "#a9d8e0",
  wood: "#8b5e3c",
  woodDark: "#5b3a26",
  rose: "#c96f6f",
  flask: "#8fd0c6",
};

export const titleFont = {
  fontFamily: "'Press Start 2P', 'Courier New', monospace",
};

export const bodyFont = {
  fontFamily: "'VT323', 'Courier New', monospace",
};

// chunky pixel border with an offset shadow for depth
export const pixelBorder = (color = C.border) => ({
  border: `4px solid ${color}`,
  boxShadow: `4px 4px 0 ${color}`,
});

export const barBtn = {
  ...titleFont,
  fontSize: 9,
  color: C.ink,
  background: C.paperDark,
  border: `3px solid ${C.border}`,
  boxShadow: `2px 2px 0 ${C.border}`,
  padding: "8px 10px",
  cursor: "pointer",
};

export const choiceBtn = {
  ...bodyFont,
  fontSize: 21,
  color: C.ink,
  background: C.paper,
  border: `3px solid ${C.border}`,
  boxShadow: `3px 3px 0 ${C.border}`,
  padding: "10px 14px",
  cursor: "pointer",
  textAlign: "left",
  transition: "transform .08s, box-shadow .08s, background .08s",
};
