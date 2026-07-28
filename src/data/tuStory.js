export const TU_STORY = {
  meta: {
    name: "Tu Youyou",
    subtitle: "An ancient text, a modern cure",
    sources: [
      { t: "Nobel Prize — Tu Youyou (biographical)", u: "https://www.nobelprize.org/prizes/medicine/2015/tu/biographical/" },
      { t: "Britannica — Tu Youyou", u: "https://www.britannica.com/biography/Tu-Youyou" },
      { t: "Nobel Prize — Women who changed science: Tu Youyou", u: "https://www.nobelprize.org/stories/women-who-changed-science/tu-youyou/" },
    ],
  },
  start: {
    chapter: "Prologue · China, 1930",
    text:
      "You are Tu Youyou. You study pharmacology in Beijing — both modern medicine and traditional Chinese remedies. You have no PhD, no postgraduate degree, and no training abroad. What you do have is patience and a willingness to read very old books very carefully.",
    choices: [{ label: "Take on an impossible assignment", to: "task" }],
  },
  task: {
    chapter: "Chapter 1 · Project 523",
    text:
      "It's 1969. Malaria is killing soldiers and civilians across Asia, and the parasite has grown resistant to every known drug. You're put in charge of a secret government team hunting for a cure. You comb through thousands of traditional herbal recipes, testing extract after extract. One plant keeps flickering with promise — then failing.",
    note: {
      title: "The plant",
      body: "Sweet wormwood (Artemisia annua, 'qinghao') sometimes killed the parasite in tests and sometimes did nothing. Something about how it was prepared kept ruining it.",
    },
    choices: [{ label: "Reread the oldest recipe you can find", to: "clue" }],
  },
  clue: {
    chapter: "Chapter 2 · A 1,600-year-old clue",
    text:
      "You return to a handbook written around 340 AD: Emergency Prescriptions Kept Up One's Sleeve. Its wormwood recipe is strange — it says to soak the herb in cold water and wring out the juice. No boiling. That one detail stops you cold. Every modern attempt had boiled the herb. What if the heat was the problem?",
    choices: [{ label: "Go to the lab bench", to: "extract" }],
  },
  extract: {
    chapter: "Chapter 3 · Extract it without wrecking it",
    text:
      "The active compound seems to fall apart when it gets hot. You need to pull it out of the plant gently.",
    choices: [{ label: "Continue", to: "proof" }],
  },
  proof: {
    chapter: "Chapter 4 · Proof",
    text:
      "The cold extract works — 100% effective against the parasite in mice and monkeys. To show it's safe for people, you and your colleagues test it on yourselves first. The compound, artemisinin, becomes the most powerful antimalarial the world has ever seen.",
    note: {
      title: "Real history",
      body: "Tu volunteered as one of the first human subjects to prove the extract was safe before wider trials.",
    },
    choices: [{ label: "See your legacy", to: "legacy" }],
  },
  legacy: {
    chapter: "Epilogue · Millions saved",
    end: true,
    text:
      "Artemisinin combination therapies have since treated hundreds of millions of malaria patients and saved millions of lives. In 2015 you won the Nobel Prize in Medicine — the first science Nobel for mainland China — earned by a scientist with no doctorate, no foreign study, and an old book no one else had read closely enough.",
    choices: [],
  },
};
