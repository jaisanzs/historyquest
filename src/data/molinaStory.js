export const MOLINA_STORY = {
  meta: {
    name: "Mario Molina",
    subtitle: "He followed a harmless gas into the sky",
    sources: [
      { t: "Nobel Prize — 1995 Chemistry press release", u: "https://www.nobelprize.org/prizes/chemistry/1995/press-release/" },
      { t: "NRDC — Mario Molina's Life", u: "https://www.nrdc.org/bio/david-doniger/mario-molinas-life-understanding-protecting-our-atmosphere" },
      { t: "Chemistry World — Mario Molina obituary", u: "https://www.chemistryworld.com/news/mario-molina-who-warned-of-cfc-threat-to-the-ozone-layer-dies/4012572.article" },
    ],
  },
  start: {
    chapter: "Prologue · Mexico City",
    text:
      "You are Mario Molina. As a boy you turn a bathroom into a lab and watch tiny lives swim under a toy microscope. You study chemical engineering, then physical chemistry, and in 1973 join Sherwood Rowland's lab in California as a postdoc. He offers you a list of projects. One question snags you.",
    choices: [{ label: "Ask: where do CFCs end up?", to: "cfc" }],
  },
  cfc: {
    chapter: "Chapter 1 · The perfect chemical",
    text:
      "Chlorofluorocarbons — CFCs — are a triumph of chemistry: cheap, nontoxic, and so unreactive they're used in every spray can, refrigerator, and air conditioner. Precisely because nothing destroys them at ground level, no one has asked the obvious question: if they never break down here, where do they finally go?",
    choices: [{ label: "Follow them up into the atmosphere", to: "science" }],
  },
  science: {
    chapter: "Chapter 2 · A chain reaction",
    text:
      "You trace their journey. Being so stable, CFC molecules drift for years all the way up to the stratosphere. There, fierce ultraviolet light finally rips them apart — and sets loose free chlorine atoms. What those chlorine atoms do to ozone is the alarming part.",
    note: {
      title: "The chemistry",
      body: "A freed chlorine atom steals an oxygen from ozone (O₃), then is regenerated to attack again — a catalytic cycle. A single chlorine atom can destroy tens of thousands of ozone molecules before it's removed.",
    },
    choices: [{ label: "Realize what your numbers mean", to: "choice" }],
  },
  choice: {
    chapter: "Chapter 3 · Speak or stay quiet",
    text:
      "Your calculations say that continued CFC use will seriously thin the ozone layer — the shield that blocks the sun's damaging UV. But you're an unknown young scientist, and the accusation threatens a multi-billion-dollar industry that will fight back hard.",
    choices: [
      { label: "Publish and warn the public", to: "publish" },
      { label: "Stay cautious and quiet", to: "quiet" },
    ],
  },
  quiet: {
    chapter: "Chapter 3 · The cost of silence",
    text:
      "Waiting for certainty would mean waiting while the damage compounds for decades. You decide the risk is too grave to sit on. Science that stays locked in a journal can't protect anyone.",
    choices: [{ label: "Go public", to: "publish" }],
  },
  publish: {
    chapter: "Chapter 4 · The backlash and the proof",
    text:
      "In 1974 you and Rowland publish in Nature and take the fight into the public square. Industry ridicules you for years. Then in 1985 scientists find a gaping 'ozone hole' over Antarctica — exactly the kind of destruction you'd warned about. The evidence is undeniable.",
    choices: [{ label: "See what the warning achieved", to: "legacy" }],
  },
  legacy: {
    chapter: "Epilogue · A treaty and a healing sky",
    end: true,
    text:
      "Your work drove the 1987 Montreal Protocol, the world's most successful environmental treaty, which phased out CFCs globally — and the ozone layer is now slowly healing. In 1995 you shared the Nobel Prize in Chemistry with Rowland and Paul Crutzen, the first Mexican-born scientist to win a science Nobel. You spent the rest of your life showing that a chemist's duty doesn't end at the lab door.",
    choices: [],
  },
};
