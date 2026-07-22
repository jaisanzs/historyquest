export const ELION_STORY = {
  meta: {
    name: "Gertrude Belle Elion",
    subtitle: "She designed medicines like keys",
    sources: [
      { t: "Nobel Prize — Gertrude Elion", u: "https://www.nobelprize.org/stories/women-who-changed-science/gertrude-elion/" },
      { t: "Science History Institute — Hitchings & Elion", u: "https://www.sciencehistory.org/education/scientific-biographies/george-hitchings-and-gertrude-elion/" },
      { t: "National Women's History Museum — Gertrude Elion", u: "https://www.womenshistory.org/education-resources/biographies/gertrude-b-elion" },
    ],
  },
  start: {
    chapter: "Prologue · New York, 1918",
    text:
      "You are Gertrude Elion. At 15 you watch your grandfather die of cancer, and you decide to fight it with chemistry. You graduate from Hunter College near the top of your class in 1937 — then run into a wall: fifteen graduate programs reject you for funding, and labs tell you a woman would 'distract' the men.",
    note: {
      title: "The barrier",
      body: "Unable to fund a PhD, Elion took whatever chemistry work she could — teaching, quality-testing food — and kept studying at night.",
    },
    choices: [{ label: "Keep pushing toward research", to: "job" }],
  },
  job: {
    chapter: "Chapter 1 · A door opens",
    text:
      "World War II pulls men out of the labs, and in 1944 you finally land a research job assisting George Hitchings at Burroughs Wellcome. He does something rare: he sees your talent and hands you real scientific freedom, doctorate or not. Together you throw out the usual method entirely.",
    choices: [{ label: "Rethink how drugs are found", to: "science" }],
  },
  science: {
    chapter: "Chapter 2 · Design, don't guess",
    text:
      "Most drug discovery is blind trial and error — test thousands of random chemicals and hope. You and Hitchings ask a smarter question: how do cancer cells and bacteria build their DNA differently from healthy cells? Find that difference, and you can design a molecule to jam only the bad cells' machinery.",
    note: {
      title: "The chemistry",
      body: "DNA is built from purines (adenine, guanine). Elion designed 'fake' purines — antimetabolites — that a fast-dividing cancer cell mistakes for the real thing, stalling its DNA production. This is 'rational drug design'.",
    },
    choices: [
      { label: "Build a decoy purine to block DNA synthesis", to: "drug" },
      { label: "Screen thousands of random compounds instead", to: "random" },
    ],
  },
  random: {
    chapter: "Chapter 2 · The slow way",
    text:
      "Brute-force screening might stumble onto something eventually, but it's slow and blind. Understanding the target first lets you aim. That shift — from guessing to designing — is the whole revolution.",
    choices: [{ label: "Design the decoy purine", to: "drug" }],
  },
  drug: {
    chapter: "Chapter 3 · 6-mercaptopurine",
    text:
      "Tweaking the purine structure — swapping a single oxygen atom for sulfur — you create 6-mercaptopurine (6-MP). It interferes with leukemia cells' ability to copy their DNA. In children with acute leukemia, once a swift death sentence, it produces real remissions. It's approved in 1953.",
    choices: [{ label: "See how far the method reaches", to: "legacy" }],
  },
  legacy: {
    chapter: "Epilogue · A whole toolkit",
    end: true,
    text:
      "Elion never did finish a PhD — she chose the work over the degree. Her rational approach produced drug after drug: azathioprine to stop transplant rejection, allopurinol for gout, and later acyclovir, the first real antiviral. In 1988 she won the Nobel Prize in Medicine, honored not for one pill but for a new way of inventing them.",
    choices: [],
  },
};
