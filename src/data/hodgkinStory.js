export const HODGKIN_STORY = {
  meta: {
    name: "Dorothy Crowfoot Hodgkin",
    subtitle: "She read molecules from scattered light",
    sources: [
      { t: "Nobel Prize — Dorothy Hodgkin", u: "https://www.nobelprize.org/stories/women-who-changed-science/dorothy-hodgkin/" },
      { t: "Science History Institute — Dorothy Crowfoot Hodgkin", u: "https://www.sciencehistory.org/education/scientific-biographies/dorothy-crowfoot-hodgkin/" },
      { t: "Britannica — Dorothy Hodgkin", u: "https://www.britannica.com/biography/Dorothy-Hodgkin" },
    ],
  },
  start: {
    chapter: "Prologue · A childhood in crystals",
    text:
      "You are Dorothy Crowfoot Hodgkin, born in 1910. A box of chemistry and a shimmering crystal captivate you as a child, and you never look back. You study at Oxford and Cambridge just as a powerful new tool is maturing: X-ray crystallography, a way to see the atoms inside a molecule. Rheumatoid arthritis begins to twist your hands, but you keep working.",
    choices: [{ label: "Aim the X-rays at molecules that matter", to: "how" }],
  },
  how: {
    chapter: "Chapter 1 · Seeing the invisible",
    text:
      "You can't photograph a molecule — it's far too small for any lens. But you can grow it into a crystal, fire X-rays through it, and record how they scatter into a pattern of spots. Hidden in that pattern is the exact arrangement of every atom. The catch: turning spots back into a structure is punishing.",
    note: {
      title: "The chemistry",
      body: "X-rays bounce off the electrons in a crystal and interfere, making a diffraction pattern. From the spots' positions and brightness you reconstruct the 3-D electron density — and thus where the atoms sit.",
    },
    choices: [{ label: "Take on penicillin", to: "penicillin" }],
  },
  penicillin: {
    chapter: "Chapter 2 · Penicillin's secret ring",
    text:
      "During WWII, penicillin is a miracle drug no one can mass-produce, partly because chemists are fighting over its structure. In 1945 you solve it by crystallography — and confirm the reactive, strained 'beta-lactam' ring at its heart that many leading chemists insisted couldn't be there.",
    note: {
      title: "Why it mattered",
      body: "Knowing the true structure guided how to make and modify penicillin — the start of the whole family of beta-lactam antibiotics.",
    },
    choices: [
      { label: "Reach for something far bigger: vitamin B12", to: "b12" },
      { label: "Play it safe with small, easy molecules", to: "safe" },
    ],
  },
  safe: {
    chapter: "Chapter 2 · Ambition",
    text:
      "Sticking to easy molecules would waste the very power of the method. The prize is in the giants — the molecules of life too big for anyone else to crack. You aim high.",
    choices: [{ label: "Tackle vitamin B12", to: "b12" }],
  },
  b12: {
    chapter: "Chapter 3 · A thousand atoms",
    text:
      "Vitamin B12, which cures pernicious anemia, is a monster — over a thousand atoms, with a structure no chemist has been able to deduce. In 1954, using crystallography (and some of the earliest computers to grind through the math), you map it. It's the largest structure ever solved at the time.",
    choices: [{ label: "See the lifetime's work", to: "legacy" }],
  },
  legacy: {
    chapter: "Epilogue · The shape of medicine",
    end: true,
    text:
      "In 1964 Hodgkin won the Nobel Prize in Chemistry — only the third woman ever to do so. Then in 1969, after decades of effort, she solved insulin, transforming diabetes treatment. Her methods opened the door to modern structural biology and drug design — proof that knowing a molecule's exact shape is the first step to controlling what it does. She did it all with hands crippled by arthritis, mentoring generations along the way.",
    choices: [],
  },
};
