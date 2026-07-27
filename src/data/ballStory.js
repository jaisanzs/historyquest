/*
  Story graph shape (shared by every figure):
    meta     – { name, subtitle, chapters, sources: [{ t, u }] }
    <scene>  – { chapter, text, note?, choices: [{ label, to }], end? }
  Keep every historical claim tied to a source in meta.sources.
*/
export const BALL_STORY = {
  meta: {
    name: "Alice Augusta Ball",
    subtitle: "The chemist who freed a cure from an oil",
    chapters: 6,
    sources: [
      { t: "American Chemical Society — Alice Ball", u: "https://www.acs.org/education/whatischemistry/landmarks/alice-ball.html" },
      { t: "National Women's History Museum — Alice Ball", u: "https://www.womenshistory.org/education-resources/biographies/alice-ball" },
      { t: "National Geographic — Alice Ball & chaulmoogra oil", u: "https://www.nationalgeographic.com/science/article/alice-ball-leprosy-hansens-disease-hawaii-womens-history-science" },
      { t: "Univ. of Nebraska Medical Center — Overlooked No More", u: "https://www.unmc.edu/healthsecurity/transmission/2023/04/11/overlooked-no-more-alice-ball-chemist-who-created-a-treatment-for-leprosy/" },
    ],
  },
  start: {
    chapter: "Prologue · Seattle, 1892",
    text:
      "You are Alice Augusta Ball. You grow up in Seattle in a middle-class Black family that prizes learning — your grandfather, J.P. Ball, was one of the first Black photographers in America. You love figuring out what things are made of and how they change. As you finish school, a path opens up.",
    choices: [
      { label: "Study pharmaceutical chemistry", to: "uw" },
      { label: "Ask why chemistry, of all things?", to: "why" },
    ],
  },
  why: {
    chapter: "Prologue · A choice",
    text:
      "Photography, medicine, teaching — all were open to a bright student. But chemistry sat underneath all of them: the darkroom, the pharmacy, the classroom demo all ran on knowing how matter behaves. You decide to learn the rules everything else depends on.",
    choices: [{ label: "Enroll at the University of Washington", to: "uw" }],
  },
  uw: {
    chapter: "Chapter 1 · University of Washington",
    text:
      "You earn not one but two degrees — pharmaceutical chemistry, then pharmacy. With a professor you co-write a ten-page paper in the Journal of the American Chemical Society. That's a rare feat for any student in the 1910s, and almost unheard of for a Black woman. Scholarship offers arrive.",
    note: {
      title: "Real history",
      body: "Ball earned two degrees at UW and co-authored a JACS paper before she was 22.",
    },
    choices: [{ label: "Take the offer from the College of Hawai‘i", to: "hawaii" }],
  },
  hawaii: {
    chapter: "Chapter 2 · Honolulu",
    text:
      "In Hawai‘i you research the chemistry of the kava plant for your thesis. You become the first woman and the first African American to earn a master's from the College of Hawai‘i — and its first woman chemistry instructor, at 23. Then Dr. Harry Hollmann, a surgeon treating Hansen's disease, comes to you with a problem no one has cracked.",
    note: {
      title: "What is Hansen's disease?",
      body: "Hansen's disease (leprosy) is a slow bacterial infection. In 1915 there was no reliable cure, and patients were often forced into isolated settlements like the one on Moloka‘i.",
    },
    choices: [{ label: "Hear Hollmann out", to: "problem" }],
  },
  problem: {
    chapter: "Chapter 3 · The oil that won't cooperate",
    text:
      "For centuries, oil pressed from chaulmoogra tree seeds had been the one thing that seemed to help — but it's a thick, sticky oil. Swallowed, it makes patients vomit; injected raw, it clumps into painful blisters and barely absorbs. Hollmann needs it to enter the body cleanly. Time to work at the bench.",
    note: {
      title: "The chemistry problem",
      body: "Chaulmoogra oil's active parts are fatty acids (R–COOH) locked in bulky, water-hating fat. To inject them, you need a form that mixes with the body's watery tissue — but is also gentle.",
    },
    puzzle: {
      type: "reaction",
      to: "breakthrough",
      prompt: "Pick the reagent that turns the fatty acid into a mild, water-mixing form you can inject.",
      start: { name: "Chaulmoogra fatty acid", formula: "R\u2013COOH", color: "#c88a3a" },
      goal: { name: "Ethyl ester (injectable!)", formula: "R\u2013COOC\u2082H\u2085", color: "#7fa650" },
      reagents: [
        { name: "Water", formula: "H\u2082O", color: "#6fa8dc", correct: false, explain: "That only makes an emulsion \u2014 tiny oil droplets in water. The molecule itself is unchanged, so it still won't absorb and it separates." },
        { name: "Sodium hydroxide", formula: "NaOH", color: "#b8b2a6", correct: false, explain: "That makes a soap (a salt of the acid). It dissolves in water, but injected it irritates and damages tissue." },
        { name: "Ethanol", formula: "C\u2082H\u2085OH", color: "#e0a24e", correct: true, explain: "Yes! Acid + alcohol \u2192 ester. The bulky fatty acid becomes a light ethyl ester that mixes with the body and injects cleanly." },
      ],
      successMsg: "That's the Ball Method: the ethyl esters of chaulmoogra oil.",
    },
    choices: [],
  },
  breakthrough: {
    chapter: "Chapter 4 · The Ball Method",
    text:
      "You isolate the active fatty acids from chaulmoogra oil and convert them into ethyl esters — a form that's water-mixing, injectable, and absorbed by the body. Patients can finally be treated without the vomiting and the blistering. You are 23 years old, and you've done what trained chemists couldn't. You start writing it up.",
    note: {
      title: "The breakthrough",
      body: "Ball's isolation of the ethyl esters of chaulmoogra fatty acids became the first genuinely usable injectable treatment for Hansen's disease — later called the 'Ball Method'.",
    },
    choices: [{ label: "Continue", to: "death" }],
  },
  death: {
    chapter: "Chapter 5 · Cut short",
    text:
      "Late in 1916, before you can publish, you fall seriously ill. You return to Seattle, and on December 31, 1916, you die — just 24 years old. The most repeated account says you inhaled chlorine gas while demonstrating a gas mask to your class. Your death records were later altered, so historians say the true cause is genuinely uncertain.",
    note: {
      title: "Handle with care",
      body: "You'll see the 'chlorine gas' story stated as fact everywhere. It may be true, but the evidence is thin and the records were tampered with — so a fair lesson calls it the leading account, not a certainty.",
    },
    choices: [{ label: "What happened to the work?", to: "credit" }],
  },
  credit: {
    chapter: "Chapter 5 · Erased, then restored",
    text:
      "Arthur Dean, the college president and a chemist, keeps producing the treatment after your death — and publishes it without naming you, calling it the 'Dean Method'. For years, your name is missing from your own discovery. Then in 1922, Dr. Hollmann publishes a paper setting the record straight and calling it, correctly, the Ball Method.",
    note: {
      title: "The Matilda Effect",
      body: "When a woman's scientific work gets credited to a man, historians call it the 'Matilda Effect'. Ball is one of its clearest cases — and one of the few later corrected.",
    },
    choices: [{ label: "See your legacy", to: "legacy" }],
  },
  legacy: {
    chapter: "Epilogue · Legacy",
    end: true,
    text:
      "The Ball Method let thousands leave isolation settlements and go home. It stayed the best treatment for Hansen's disease until sulfone antibiotics arrived in the 1940s. Nearly a century later, the University of Hawai‘i honored you with a plaque on its lone chaulmoogra tree, a scholarship, and February 28th as Alice Ball Day. You were erased once. You are not erased now.",
    choices: [],
  },
};
