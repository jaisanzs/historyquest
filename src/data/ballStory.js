/*
  The Alice Ball story graph.

  Each scene has:
    chapter  – label shown in the scene header
    text     – the narration
    note     – (optional) a sourced "fact card"
    choices  – array of { label, to } where `to` is the next scene id
    end       – (optional) true marks the finale (shows sources + replay)

  To add a new figure: copy this shape into a new file, export it, and register
  it in stories.js. Keep every historical claim tied to a source in sources.js.
*/
export const BALL_STORY = {
  meta: {
    name: "Alice Augusta Ball",
    subtitle: "The chemist who freed a cure from an oil",
    chapters: 6,
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
      body:
        "Ball earned two degrees at UW and co-authored a JACS paper before she was 22.",
    },
    choices: [{ label: "Take the offer from the College of Hawai‘i", to: "hawaii" }],
  },
  hawaii: {
    chapter: "Chapter 2 · Honolulu",
    text:
      "In Hawai‘i you research the chemistry of the kava plant for your thesis. You become the first woman and the first African American to earn a master's from the College of Hawai‘i — and its first woman chemistry instructor, at 23. Then Dr. Harry Hollmann, a surgeon treating Hansen's disease, comes to you with a problem no one has cracked.",
    note: {
      title: "What is Hansen's disease?",
      body:
        "Hansen's disease (leprosy) is a slow bacterial infection. In 1915 there was no reliable cure, and patients were often forced into isolated settlements like the one on Moloka‘i.",
    },
    choices: [{ label: "Hear Hollmann out", to: "problem" }],
  },
  problem: {
    chapter: "Chapter 3 · The oil that won't cooperate",
    text:
      "For centuries, oil pressed from chaulmoogra tree seeds had been the one thing that seemed to help. But it's a thick, sticky oil. Swallowed, it makes patients vomit. Injected raw, it's agonizing — it clumps under the skin in painful blisters and barely absorbs. Hollmann needs it to enter the body cleanly. How do you attack it, chemically?",
    note: {
      title: "The chemistry problem",
      body:
        "Chaulmoogra oil is a mix of fatty acids (mainly chaulmoogric and hydnocarpic acid) locked up as bulky, water-hating triglycerides. To inject it, you need something that mixes with the body's watery tissues.",
    },
    choices: [
      { label: "Convert the fatty acids into ethyl esters", to: "breakthrough" },
      { label: "Just emulsify the raw oil with water", to: "wrong_emulsify" },
      { label: "Turn the acids into a sodium soap", to: "wrong_soap" },
    ],
  },
  wrong_emulsify: {
    chapter: "Chapter 3 · A dead end",
    text:
      "You try beating the oil into a milky emulsion. It looks promising in the flask — then separates. Under the skin it still clumps and hurts. Emulsions of the whole oil had been tried before; the body just won't take them reliably. Back to the molecule itself.",
    note: {
      title: "Why it fails",
      body:
        "An emulsion is just tiny droplets of the same water-hating oil suspended in water. The underlying molecule hasn't changed, so it still won't absorb.",
    },
    choices: [{ label: "Rethink the molecule", to: "problem_retry" }],
  },
  wrong_soap: {
    chapter: "Chapter 3 · Close, but harsh",
    text:
      "You saponify the acids into sodium salts — a soap. Now they dissolve in water. But injected, the soap irritates and damages tissue, and it's chemically touchy. Water-soluble isn't enough; it has to be gentle and stable too. There's a subtler move.",
    note: {
      title: "Why it falls short",
      body:
        "Soaps (fatty-acid salts) dissolve in water but are irritating and unstable. You want the fatty acids in a form that's injectable AND kind to the body.",
    },
    choices: [{ label: "Find the subtler move", to: "problem_retry" }],
  },
  problem_retry: {
    chapter: "Chapter 3 · The elegant answer",
    text:
      "You come back to the acids themselves. Instead of a salt, you cap each fatty acid with an ethyl group — you make ethyl esters. The bulky triglyceride is gone; what's left is light, freely mixing, and mild enough to inject. That's the key.",
    choices: [{ label: "Isolate the ethyl esters", to: "breakthrough" }],
  },
  breakthrough: {
    chapter: "Chapter 4 · The Ball Method",
    text:
      "You isolate the active fatty acids from chaulmoogra oil and convert them into ethyl esters — a form that's water-mixing, injectable, and absorbed by the body. Patients can finally be treated without the vomiting and the blistering. You are 23 years old, and you've done what trained chemists couldn't. You start writing it up.",
    note: {
      title: "The breakthrough",
      body:
        "Ball's isolation of the ethyl esters of chaulmoogra fatty acids became the first genuinely usable injectable treatment for Hansen's disease — later called the 'Ball Method'.",
    },
    choices: [{ label: "Continue", to: "death" }],
  },
  death: {
    chapter: "Chapter 5 · Cut short",
    text:
      "Late in 1916, before you can publish, you fall seriously ill. You return to Seattle, and on December 31, 1916, you die — just 24 years old. The most repeated account says you inhaled chlorine gas while demonstrating a gas mask to your class. Your death records were later altered, so historians say the true cause is genuinely uncertain.",
    note: {
      title: "Handle with care",
      body:
        "You'll see the 'chlorine gas' story stated as fact everywhere. It may be true, but the evidence is thin and the records were tampered with — so a fair lesson calls it the leading account, not a certainty.",
    },
    choices: [{ label: "What happened to the work?", to: "credit" }],
  },
  credit: {
    chapter: "Chapter 5 · Erased, then restored",
    text:
      "Arthur Dean, the college president and a chemist, keeps producing the treatment after your death — and publishes it without naming you, calling it the 'Dean Method'. For years, your name is missing from your own discovery. Then in 1922, Dr. Hollmann publishes a paper setting the record straight and calling it, correctly, the Ball Method.",
    note: {
      title: "The Matilda Effect",
      body:
        "When a woman's scientific work gets credited to a man, historians call it the 'Matilda Effect'. Ball is one of its clearest cases — and one of the few later corrected.",
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
