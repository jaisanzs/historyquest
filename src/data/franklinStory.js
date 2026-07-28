export const FRANKLIN_STORY = {
  meta: {
    name: "Rosalind Franklin",
    subtitle: "The photograph that showed the shape of life",
    sources: [
      { t: "Nature (2023) — What Rosalind Franklin truly contributed", u: "https://www.nature.com/articles/d41586-023-01313-5" },
      { t: "HISTORY — Rosalind Franklin's role in the discovery of DNA", u: "https://www.history.com/articles/rosalind-franklin-dna-discovery" },
      { t: "Science Museum of Virginia — Photo 51", u: "https://smv.org/learn/blog/rosalind-franklin-and-most-important-photo-ever-taken/" },
    ],
  },
  start: {
    chapter: "Prologue · London, 1920",
    text:
      "You are Rosalind Franklin, a chemist with a rare gift for X-ray diffraction — reading the shape of a molecule from the way it scatters X-rays. In 1951 you join King's College London and turn that skill on the most important molecule of all: DNA.",
    choices: [{ label: "Attack the DNA problem", to: "setup" }],
  },
  setup: {
    chapter: "Chapter 1 · Two forms",
    text:
      "You discover DNA comes in two forms: a dry, crystalline 'A' form and a wet, stretched-out 'B' form — and each gives a completely different picture. The secret to a clean image is controlling the water. You draw the thinnest possible fibers and build a fine-focus X-ray camera to catch it.",
    note: {
      title: "The chemistry",
      body: "Humidity changes DNA's shape. Keep the fiber wet and you get the 'B' form — the one that reveals the helix. Franklin controlled humidity with astonishing care.",
    },
    choices: [{ label: "Set up the exposure", to: "expose" }],
  },
  expose: {
    chapter: "Chapter 2 · Photo 51",
    text:
      "Now you wait. Capturing the pattern means holding the fiber at just the right humidity and exposing the film for hour after hour after hour.",
    choices: [{ label: "Continue", to: "reveal" }],
  },
  reveal: {
    chapter: "Chapter 3 · The X",
    text:
      "The developed film — labeled simply 'Photo 51' — shows a stark black X of spots. To a trained eye, that X is unmistakable: it is the fingerprint of a helix. You have, in a single image, captured the shape of the molecule that carries life.",
    choices: [{ label: "What happened next?", to: "credit" }],
  },
  credit: {
    chapter: "Chapter 4 · Shown without permission",
    text:
      "Your colleague Maurice Wilkins shows Photo 51 to James Watson — without your knowledge or consent. Watson and Crick use it, along with your reported data, on their way to the double-helix model they publish in 1953. Your own rigorous analysis runs in the same journal issue, but the spotlight lands on them.",
    note: {
      title: "Handle with care",
      body: "The old story cast Franklin only as a victim who was 'scooped.' Recent scholarship argues she was an equal contributor who understood her data — not a bystander. Both the theft of privacy and her scientific stature are real.",
    },
    choices: [{ label: "See your legacy", to: "legacy" }],
  },
  legacy: {
    chapter: "Epilogue · Recognized at last",
    end: true,
    text:
      "You died of cancer in 1958, at just 37 — four years before Watson, Crick, and Wilkins shared the Nobel that could not, by its rules, include you. Today your name is on universities, medical schools, and a Mars rover, and historians place you where you belong: as a full architect of our understanding of DNA.",
    choices: [],
  },
};
