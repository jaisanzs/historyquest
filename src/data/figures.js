// Cards shown on the home screen.
//  - accent / accent2 : card colors (accent also backs the portrait)
//  - portrait          : traits for the stylized pixel portrait (see PixelPortrait.jsx)
//  - image (optional)  : path to a real portrait PNG; if set, it renders instead
//                        of the drawn portrait (drop files in /public and reference
//                        them like "/portraits/ball.png").
export const FIGURES = [
  {
    id: "ball", name: "Alice Ball", years: "1892–1916", field: "Chemistry",
    hook: "Made an ancient leprosy remedy actually work — then history nearly forgot her.",
    accent: "#7fa650", accent2: "#4f6f34", playable: true,
    portrait: { skin: "#8a5a3c", skinDark: "#6d4630", hair: "#241611", hairTop: 1, bun: 1, attire: "#efe6d0", collar: "#cbb98f", earring: "#e0c060" },
  },
  {
    id: "kwolek", name: "Stephanie Kwolek", years: "1923–2014", field: "Polymer Chemistry",
    hook: "Invented Kevlar from a cloudy solution her lab wanted to throw out.",
    accent: "#e0a24e", accent2: "#c07f2c", playable: true,
    portrait: { skin: "#e8c0a0", skinDark: "#c99d78", hair: "#3a2a1c", hairTop: 1, temples: 1, attire: "#f2efe6", collar: "#c8c2b2" },
  },
  {
    id: "julian", name: "Percy Julian", years: "1899–1975", field: "Organic Chemistry",
    hook: "Bet against the world's most famous chemist — and turned soybeans into medicine.",
    accent: "#c96f6f", accent2: "#9c4a4a", playable: true,
    portrait: { skin: "#7a4a2e", skinDark: "#5f3922", hair: "#14110f", hairTop: 1, glasses: 1, attire: "#2e2a33", collar: "#c9c2b6" },
  },
  {
    id: "carver", name: "George Washington Carver", years: "1864–1943", field: "Agricultural Chemistry",
    hook: "Rebuilt exhausted Southern soil with peanuts and patient science.",
    accent: "#b98a4e", accent2: "#7a5a2e", playable: true,
    portrait: { skin: "#6e4326", skinDark: "#55341d", hair: "#cfcabf", receding: 1, attire: "#39373a", collar: "#d8d2c6", flower: "#c85a4a" },
  },
  {
    id: "rillieux", name: "Norbert Rillieux", years: "1806–1894", field: "Chemical Engineering",
    hook: "One of the first chemical engineers — he reinvented sugar with vacuum and steam.",
    accent: "#5a9aa8", accent2: "#3d6f7a", playable: true,
    portrait: { skin: "#9a6a44", skinDark: "#7a5334", hair: "#201510", hairTop: 1, temples: 1, attire: "#2b2730", collar: "#e6ddca" },
  },
  {
    id: "curie", name: "Marie Curie", years: "1867–1934", field: "Radiochemistry",
    hook: "Chased an impossible glow through tons of rock to two new elements.",
    accent: "#9b7bc0", accent2: "#5f4a80", playable: true,
    portrait: { skin: "#e7c2a0", skinDark: "#cba07c", hair: "#4a3a28", hairTop: 1, bun: 1, attire: "#2a2733", collar: "#4a4657" },
  },
  {
    id: "molina", name: "Mario Molina", years: "1943–2020", field: "Atmospheric Chemistry",
    hook: "Followed a harmless gas into the sky and found a hole in the world's shield.",
    accent: "#6fa8dc", accent2: "#3d6fa0", playable: true,
    portrait: { skin: "#b07a4e", skinDark: "#8c5f3b", hair: "#17130f", hairTop: 1, glasses: 1, mustache: 1, attire: "#f2efe6", collar: "#c8c2b2" },
  },
  {
    id: "elion", name: "Gertrude Elion", years: "1918–1999", field: "Pharmaceutical Chemistry",
    hook: "Designed drugs like a locksmith — and beat childhood leukemia without a PhD.",
    accent: "#d98a6a", accent2: "#b5623f", playable: true,
    portrait: { skin: "#e9c6a4", skinDark: "#cda580", hair: "#4f3d2a", hairTop: 1, temples: 1, glasses: 1, attire: "#f2efe6", collar: "#c8c2b2" },
  },
  {
    id: "hodgkin", name: "Dorothy Hodgkin", years: "1910–1994", field: "Crystallography",
    hook: "Read the shapes of penicillin and B12 from scattered X-rays.",
    accent: "#8a86c8", accent2: "#565193", playable: true,
    portrait: { skin: "#ecc9a6", skinDark: "#d0a882", hair: "#6a4a2a", hairTop: 1, longSides: 1, attire: "#e7d7c0", collar: "#c8b89e" },
  },
  {
    id: "haber", name: "Fritz Haber", years: "1868–1934", field: "Industrial Chemistry",
    hook: "Pulled bread from the air and poison from the same genius. Judge for yourself.",
    accent: "#9a9a5a", accent2: "#6a6a34", playable: true,
    portrait: { skin: "#e6c0a0", skinDark: "#c99e78", hair: "#b7b0a4", bald: 1, sideHair: "#b7b0a4", glasses: 1, glassColor: "#6a6258", mustache: 1, stache: "#8a8074", attire: "#2b2b30", collar: "#cfc8ba" },
  },
  {
    id: "tu", name: "Tu Youyou", years: "1930\u20132022", field: "Pharmaceutical Chemistry",
    hook: "Read a 1,600-year-old recipe and pulled a malaria cure from a weed.",
    accent: "#c0563f", accent2: "#8f3a2a", playable: true,
    portrait: { skin: "#e7c6a0", skinDark: "#c9a57e", hair: "#1c1712", hairTop: 1, longSides: 1, attire: "#f2efe6", collar: "#c8c2b2" },
  },
  {
    id: "meitner", name: "Lise Meitner", years: "1878\u20131968", field: "Nuclear Physics",
    hook: "Explained how atoms split \u2014 then watched a colleague take the Nobel alone.",
    accent: "#6a86a0", accent2: "#46607a", playable: true,
    portrait: { skin: "#e9c6a4", skinDark: "#cda580", hair: "#6a5a48", hairTop: 1, bun: 1, attire: "#2a2733", collar: "#4a4657" },
  },
  {
    id: "franklin", name: "Rosalind Franklin", years: "1920\u20131958", field: "X-ray Crystallography",
    hook: "Her photograph revealed DNA's shape. Two men got the glory.",
    accent: "#b56c9a", accent2: "#834a70", playable: true,
    portrait: { skin: "#ecc9a6", skinDark: "#d0a882", hair: "#2e2119", hairTop: 1, longSides: 1, attire: "#6a5560", collar: "#c8b8c0" },
  },
  {
    id: "nobel", name: "Alfred Nobel", years: "1833\u20131896", field: "Chemistry / Explosives",
    hook: "Tamed nitroglycerin into dynamite \u2014 and founded a prize to redeem it.",
    accent: "#c06a33", accent2: "#8a4a22", playable: true,
    portrait: { skin: "#e6c0a0", skinDark: "#c99e78", hair: "#4a3a2a", receding: 1, beard: 1, mustache: 1, attire: "#2b2730", collar: "#cfc8ba" },
  },
  {
    id: "mendeleev", name: "Dmitri Mendeleev", years: "1834\u20131907", field: "Chemistry",
    hook: "Left blank squares in his table and dared nature to fill them.",
    accent: "#96566f", accent2: "#6a3c50", playable: true,
    portrait: { skin: "#e6c0a0", skinDark: "#c99e78", hair: "#8a7a6a", hairTop: 1, longSides: 1, beard: 1, mustache: 1, attire: "#3a3630", collar: "#cfc8ba" },
  },
];
