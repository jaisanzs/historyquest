export const HABER_STORY = {
  meta: {
    name: "Fritz Haber",
    subtitle: "Bread from air, poison from the same mind",
    sources: [
      { t: "Science History Institute — Fritz Haber", u: "https://www.sciencehistory.org/education/scientific-biographies/fritz-haber/" },
      { t: "Britannica — Fritz Haber", u: "https://www.britannica.com/biography/Fritz-Haber" },
      { t: "Smithsonian — Fritz Haber's Experiments in Life and Death", u: "https://www.smithsonianmag.com/history/fritz-habers-experiments-in-life-and-death-114161301/" },
    ],
  },
  start: {
    chapter: "Prologue · Germany, ~1900",
    text:
      "You are Fritz Haber — brilliant, driven, and fiercely patriotic. This story is not a hero's tale or a villain's. It's a warning about what genius can serve. It asks you to weigh a man, not to cheer him. Begin with the crisis of your age.",
    note: {
      title: "A note before you play",
      body: "Haber's life involves both feeding billions and inventing chemical weapons. This lesson presents both plainly and lets you sit with the tension.",
    },
    choices: [{ label: "Face the nitrogen crisis", to: "problem" }],
  },
  problem: {
    chapter: "Chapter 1 · The hunger problem",
    text:
      "Crops need nitrogen, and the world is running short of it. Natural fertilizer — Chilean nitrate, seabird guano — is finite and fought over, and scientists warn of mass famine as populations grow. Yet the air above you is 78% nitrogen gas. The catch: N₂ is locked by a triple bond so strong it's almost inert.",
    choices: [{ label: "Try to pull nitrogen from the air", to: "science" }],
  },
  science: {
    chapter: "Chapter 2 · Forcing the reaction",
    text:
      "You want to combine nitrogen (N₂) with hydrogen (H₂) to make ammonia (NH₃), a form plants can use. But the reaction barely wants to happen. How do you force it?",
    note: {
      title: "The chemistry",
      body: "N₂ + 3H₂ ⇌ 2NH₃. Making ammonia shrinks the gas volume, so — by Le Chatelier's principle — high pressure pushes the reaction toward ammonia. A metal catalyst and recycling the unreacted gas make it practical.",
    },
    choices: [
      { label: "Use very high pressure and an iron catalyst", to: "win" },
      { label: "Just heat it as hot as possible", to: "hot" },
    ],
  },
  hot: {
    chapter: "Chapter 2 · Heat alone backfires",
    text:
      "Cranking the temperature speeds the reaction but also tears ammonia back apart — hotter actually lowers your yield. The real levers are high pressure (to favor ammonia) plus a catalyst (to reach it faster at a moderate temperature).",
    choices: [{ label: "Apply pressure and a catalyst", to: "win" }],
  },
  win: {
    chapter: "Chapter 3 · Bread from the air",
    text:
      "Around 1909 you make it work; the engineer Carl Bosch scales it into industry as the Haber–Bosch process. It becomes one of the most consequential inventions in history: today, synthetic fertilizer from your reaction helps feed roughly half of all people alive. In 1918 you receive the Nobel Prize in Chemistry.",
    choices: [{ label: "Then war comes", to: "war" }],
  },
  war: {
    chapter: "Chapter 4 · The same genius, weaponized",
    text:
      "When World War I erupts, you turn your chemistry to the front. You champion poison gas and personally direct the first large-scale chlorine attack at Ypres in 1915, and help develop phosgene and mustard gas. Shortly after, your wife Clara Immerwahr — herself a gifted chemist — dies by suicide; many accounts tie her despair to your gas work, though historians caution the full reasons are not certain.",
    note: {
      title: "Handle with care",
      body: "Chemical weapons killed and maimed on a horrifying scale. This lesson states Haber's role plainly and does not let you 'play' the attacks — some history should be reckoned with, not gamified.",
    },
    choices: [{ label: "Follow the story to its bitter irony", to: "irony" }],
  },
  irony: {
    chapter: "Chapter 5 · Exiled by his own country",
    text:
      "You gave everything to Germany. It did not matter. When the Nazis take power in 1933, your Jewish heritage erases your standing overnight, and you flee into exile, dying in 1934. In a final, terrible irony, pesticide research from your former institute later led to Zyklon B — the gas the Nazis used to murder millions in the Holocaust, including members of your extended family.",
    choices: [{ label: "How should he be remembered?", to: "legacy" }],
  },
  legacy: {
    chapter: "Epilogue · Weighing a life",
    end: true,
    text:
      "Here is the tension, left honestly unresolved: the same mind fed billions and gassed thousands; served a nation that then cast him out. Some remember Haber as a savior of humanity, some as the father of chemical warfare, most as proof that scientific genius is morally neutral — it takes the shape of the choices around it. History hands you the facts. The verdict is the hard part, and it's yours.",
    choices: [],
  },
};
