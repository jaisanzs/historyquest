export const MEITNER_STORY = {
  meta: {
    name: "Lise Meitner",
    subtitle: "She split the atom — and was written out",
    sources: [
      { t: "The Conversation — Lise Meitner, the forgotten woman of nuclear physics", u: "https://theconversation.com/lise-meitner-the-forgotten-woman-of-nuclear-physics-who-deserved-a-nobel-prize-106220" },
      { t: "Physics World — Why is there no Nobel for nuclear fission?", u: "https://physicsworld.com/a/why-is-there-no-nobel-physics-prize-for-nuclear-fission/" },
      { t: "Britannica — Lise Meitner", u: "https://www.britannica.com/biography/Lise-Meitner" },
    ],
  },
  start: {
    chapter: "Prologue · Vienna, 1878",
    text:
      "You are Lise Meitner, born into a Jewish family in Vienna. You become only the second woman to earn a physics doctorate at your university, then move to Berlin and begin a thirty-year partnership with the chemist Otto Hahn — you the physicist, he the chemist, hunting for what happens when atoms are struck.",
    choices: [{ label: "1938: the ground shifts", to: "flee" }],
  },
  flee: {
    chapter: "Chapter 1 · Flight",
    text:
      "The Nazis have taken Germany, and as a Jew you are suddenly in mortal danger. In July 1938 you flee across the border to Sweden with barely a suitcase. But the experiment isn't finished — so you keep working with Hahn by letter, guiding the physics from exile while he runs the chemistry in Berlin.",
    choices: [{ label: "Interpret the strange result", to: "split" }],
  },
  split: {
    chapter: "Chapter 2 · Something impossible",
    text:
      "Hahn's team keeps bombarding uranium with neutrons — and finds barium in the leftovers. Barium is far too light to be a chip off a uranium atom. Everyone is baffled. You suspect something no one has dared to say: the uranium nucleus isn't chipping. It's splitting in two.",
    choices: [{ label: "Continue", to: "explain" }],
  },
  explain: {
    chapter: "Chapter 3 · Fission",
    text:
      "Over Christmas in the snow at Kungälv, you and your nephew Otto Frisch work it out. Picture the nucleus as a wobbling drop of liquid that stretches and pinches in two. Using Einstein's E=mc², you calculate the enormous energy released. You give the process its name: nuclear fission.",
    note: {
      title: "The chemistry/physics",
      body: "A neutron makes the uranium nucleus split into lighter nuclei (like barium), releasing about 200 million electron-volts and more neutrons — which can split more atoms: a chain reaction.",
    },
    choices: [{ label: "See who got the credit", to: "credit" }],
  },
  credit: {
    chapter: "Chapter 4 · Erased",
    text:
      "When it's time to publish, Hahn leaves your name off. Crediting a Jewish woman would end his career in Nazi Germany, so he presents fission as pure chemistry — his chemistry. In 1944 the Nobel Prize in Chemistry goes to Otto Hahn alone. You, who saw what the result meant, are left out entirely.",
    note: {
      title: "The record",
      body: "Historians widely regard Meitner's exclusion as one of the clearest injustices in Nobel history.",
    },
    choices: [{ label: "See your legacy", to: "legacy" }],
  },
  legacy: {
    chapter: "Epilogue · Meitnerium",
    end: true,
    text:
      "You refused to help build the atomic bomb, and bristled at being called its 'mother.' Decades later, element 109 was named meitnerium in your honor — one of the very few elements named for a woman. The credit came late, but your name is now permanently on the periodic table.",
    choices: [],
  },
};
