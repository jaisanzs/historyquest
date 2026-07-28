export const MENDELEEV_STORY = {
  meta: {
    name: "Dmitri Mendeleev",
    subtitle: "He left blanks for elements no one had found",
    sources: [
      { t: "Wikipedia — Mendeleev's predicted elements", u: "https://en.wikipedia.org/wiki/Mendeleev%27s_predicted_elements" },
      { t: "Chemistry LibreTexts — Mendeleev and the Periodic Table", u: "https://chem.libretexts.org/Courses/Riverland_Community_College/CHEM_1000_-_Introduction_to_Chemistry_(Riverland)/04:_Atoms_Elements_and_the_Periodic_Table/4.08:_Mendeleev_and_Periodic_Table" },
      { t: "Britannica — Dmitri Mendeleev", u: "https://www.britannica.com/biography/Dmitri-Mendeleev" },
    ],
  },
  start: {
    chapter: "Prologue · Russia, 1834",
    text:
      "You are Dmitri Mendeleev, the youngest of a huge Siberian family, now a chemist in St. Petersburg. Sixty-odd elements are known, each with its own weight and habits, but no one can see any order in them. You are convinced there is a hidden pattern — and you mean to find it.",
    choices: [{ label: "Lay out the elements", to: "insight" }],
  },
  insight: {
    chapter: "Chapter 1 · The pattern",
    text:
      "You write each element on a card and shuffle them like a game of solitaire, sorting by atomic weight. Slowly a rhythm appears: properties repeat at regular intervals — a 'periodic' pattern. But to keep the rhythm intact, some slots have to stay empty. The pattern is telling you that elements exist which no one has ever seen.",
    note: {
      title: "The bold move",
      body: "Rather than force known elements into the wrong slots, Mendeleev left gaps — and insisted the gaps would one day be filled.",
    },
    choices: [{ label: "Predict a missing element", to: "predict" }],
  },
  predict: {
    chapter: "Chapter 2 · Fill the gap",
    text:
      "One gap sits just below aluminium. You call the missing element 'eka-aluminium,' and by reading across from its neighbors, you predict exactly what it should be like — its atomic mass and its density. Nature will decide if you're right.",
    choices: [{ label: "Continue", to: "proof" }],
  },
  proof: {
    chapter: "Chapter 3 · Vindication",
    text:
      "In 1875, a French chemist isolates a shiny new metal he names gallium — atomic mass about 69.7, density about 5.9. Your predictions were 68 and 6.0. They are almost perfect. For the first time in history, someone has foretold an element before it was ever found. The doubters go quiet.",
    choices: [{ label: "See your legacy", to: "legacy" }],
  },
  legacy: {
    chapter: "Epilogue · The table",
    end: true,
    text:
      "Your periodic table became the single most important organizing idea in all of chemistry — a map that still predicts how matter behaves. You never won a Nobel (you lost by a single vote in 1906 and died the next year), but element 101, mendelevium, carries your name across that very table.",
    choices: [],
  },
};
