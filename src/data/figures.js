import { C } from "../theme.js";

// Cards shown on the home screen. Set `playable: true` once a story exists in stories.js.
export const FIGURES = [
  {
    id: "ball",
    name: "Alice Ball",
    years: "1892–1916",
    field: "Chemistry",
    hook: "Made an ancient leprosy remedy actually work — then history nearly forgot her.",
    accent: C.green,
    accent2: C.greenDeep,
    playable: true,
  },
  {
    id: "kwolek",
    name: "Stephanie Kwolek",
    years: "1923–2014",
    field: "Polymer Chemistry",
    hook: "Invented Kevlar from a solution her colleagues told her to throw out.",
    accent: C.gold,
    accent2: C.goldDeep,
    playable: false,
  },
  {
    id: "julian",
    name: "Percy Julian",
    years: "1899–1975",
    field: "Organic Chemistry",
    hook: "Synthesized medicines from soybeans — barred from labs he'd outclass.",
    accent: C.rose,
    accent2: "#9c4a4a",
    playable: false,
  },
  {
    id: "carver",
    name: "George Washington Carver",
    years: "1864–1943",
    field: "Agricultural Chemistry",
    hook: "Rebuilt exhausted Southern soil with peanuts and patient science.",
    accent: C.wood,
    accent2: C.woodDark,
    playable: false,
  },
];
