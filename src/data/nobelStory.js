export const NOBEL_STORY = {
  meta: {
    name: "Alfred Nobel",
    subtitle: "He tamed an explosive — and feared his own legacy",
    sources: [
      { t: "Britannica — Dynamite", u: "https://www.britannica.com/technology/dynamite" },
      { t: "Science History Institute — Alfred Nobel", u: "https://www.sciencehistory.org/education/scientific-biographies/alfred-nobel/" },
      { t: "NobelPrize.org — Nitroglycerine and Dynamite", u: "https://www.nobelprize.org/alfred-nobel/nitroglycerine-and-dynamite/" },
    ],
  },
  start: {
    chapter: "Prologue · Stockholm, 1833",
    text:
      "You are Alfred Nobel, chemist and inventor. You are captivated by nitroglycerin — a liquid a thousand times more powerful than gunpowder. There is only one problem: it is so unstable that a bump or a warm day can set it off, and it kills the people who try to handle it.",
    choices: [{ label: "Then tragedy strikes", to: "tragedy" }],
  },
  tragedy: {
    chapter: "Chapter 1 · The explosion",
    text:
      "In 1864 your factory in Stockholm blows up, killing several workers — including your younger brother, Emil. The city bans you from rebuilding. You are grief-stricken and determined: you will make nitroglycerin safe to handle, or it will keep killing.",
    choices: [{ label: "Go to the workbench", to: "stabilize" }],
  },
  stabilize: {
    chapter: "Chapter 2 · Tame the liquid",
    text:
      "The idea: soak the dangerous liquid into a solid powder so it can't slosh or detonate by accident. You try one absorbent after another — sawdust, charcoal, brick dust — searching for one that soaks up enough nitroglycerin to be stable.",
    note: {
      title: "The chemistry",
      body: "A porous powder holds nitroglycerin in place so shock won't set it off. Most powders were too weak; the winner was kieselguhr — diatomaceous earth, made of fossilized algae.",
    },
    choices: [{ label: "Continue", to: "result" }],
  },
  result: {
    chapter: "Chapter 3 · Dynamite",
    text:
      "Kieselguhr does it. Soaked into that fossil powder, nitroglycerin becomes a putty you can drop, cut, and carry safely — it only fires when triggered by the blasting cap you also invent. You call it dynamite, from the Greek 'dynamis,' power. It carves tunnels, roads, and canals across the world — and it goes to war.",
    choices: [{ label: "Face your legacy", to: "legacy" }],
  },
  legacy: {
    chapter: "Epilogue · The merchant of death",
    end: true,
    text:
      "When your brother Ludvig died, a newspaper confused the two of you and printed your obituary: 'The merchant of death is dead.' Reading how the world would remember you horrified you. So you rewrote the ending — leaving nearly your whole fortune to fund the Nobel Prizes. Dynamite built and destroyed in equal measure; how to weigh a life like that is the question you left behind.",
    choices: [],
  },
};
