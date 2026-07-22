export const RILLIEUX_STORY = {
  meta: {
    name: "Norbert Rillieux",
    subtitle: "One of the first chemical engineers",
    sources: [
      { t: "American Chemical Society — Norbert Rillieux", u: "https://www.acs.org/education/whatischemistry/african-americans-in-sciences/norbert-rillieux.html" },
      { t: "64 Parishes — Norbert Rillieux", u: "https://64parishes.org/entry/norbert-rillieux" },
      { t: "Historic New Orleans Collection — Rillieux", u: "https://hnoc.org/publishing/first-draft/free-man-color-whose-invention-revolutionized-sugar-industry" },
    ],
  },
  start: {
    chapter: "Prologue · New Orleans, 1806",
    text:
      "You are Norbert Rillieux, born in New Orleans to a white engineer father and Constance Vivant, a free woman of color. You're a free man of color in a slave state — brilliant, educated, and hemmed in by law. Sent to Paris to study, you master steam and thermodynamics and, by 24, teach applied mechanics at the École Centrale.",
    choices: [{ label: "Turn your eye to the sugar industry", to: "problem" }],
  },
  problem: {
    chapter: "Chapter 1 · The Jamaica train",
    text:
      "Sugar is made by boiling cane juice down to crystals. The standard method — the 'Jamaica train' — forces enslaved workers to ladle scalding syrup by hand from one open kettle to the next over roaring fires. It's brutal, dangerous, wastes enormous fuel, and often scorches the sugar. You see waste everywhere: heat, fuel, and human life.",
    choices: [{ label: "Redesign the whole process", to: "science" }],
  },
  science: {
    chapter: "Chapter 2 · Heat that works twice",
    text:
      "Here's your insight. When you boil the juice in a sealed chamber under partial vacuum, it boils at a lower temperature. And the steam that rises off it still carries usable heat. What if that steam became the heat source for the next chamber — and its steam for the next after that?",
    note: {
      title: "The chemistry / engineering",
      body: "Lower pressure lowers the boiling point (less scorching, less fuel). Capturing each chamber's vapor to boil the next reuses the same latent heat again and again — the 'multiple-effect evaporator'.",
    },
    choices: [
      { label: "Chain sealed vacuum pans to reuse the vapor", to: "build" },
      { label: "Just boil hotter and faster in open pans", to: "hotter" },
    ],
  },
  hotter: {
    chapter: "Chapter 2 · Brute force",
    text:
      "More heat in open pans means more fuel, more danger, and more caramelized, ruined sugar. Boiling harder attacks the symptom. The real win is using heat smarter, not adding more of it.",
    choices: [{ label: "Build the multiple-effect evaporator", to: "build" }],
  },
  build: {
    chapter: "Chapter 3 · The evaporator",
    text:
      "You link enclosed evaporating pans in series under vacuum, each one heated by the vapor from the last. Your first full installation runs in 1834; patents follow in 1843 and 1846. It slashes fuel use, produces finer sugar, and removes workers from the deadly open kettles. You become the most sought-after engineer in Louisiana.",
    note: {
      title: "The tension",
      body: "Your machine eased the deadliest labor of enslaved sugar workers — yet it made the slavery-based sugar industry vastly more profitable. Progress and injustice tangled in the same invention.",
    },
    choices: [{ label: "See where it leads", to: "legacy" }],
  },
  legacy: {
    chapter: "Epilogue · The father of process engineering",
    end: true,
    text:
      "Despite his wealth and genius, Louisiana's tightening racial laws treated Rillieux as a second-class 'person of color'; he returned to France, where he even studied Egyptology. His multiple-effect evaporator became the foundation of modern industrial evaporation — used today for sugar, milk, soap, paper, and desalination. The American Chemical Society named it a National Historic Chemical Landmark, honoring him as one of the first true chemical engineers.",
    choices: [],
  },
};
