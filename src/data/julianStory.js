export const JULIAN_STORY = {
  meta: {
    name: "Percy Lavon Julian",
    subtitle: "The chemist who bet against a legend",
    sources: [
      { t: "Science History Institute — Percy Lavon Julian", u: "https://www.sciencehistory.org/education/scientific-biographies/percy-lavon-julian/" },
      { t: "National Inventors Hall of Fame — Percy Julian", u: "https://www.invent.org/inductees/percy-lavon-julian" },
      { t: "Britannica — Percy Julian", u: "https://www.britannica.com/biography/Percy-Julian" },
    ],
  },
  start: {
    chapter: "Prologue · Montgomery, Alabama",
    text:
      "You are Percy Julian, born in 1899, grandson of people who were enslaved. Alabama offers Black children almost no schooling past the eighth grade, but you push through, enter DePauw University as an underprepared 'sub-freshman', and graduate valedictorian in 1920. You want to be a research chemist — a door most institutions will not open to a Black man.",
    note: {
      title: "The barrier",
      body: "Julian earned a master's at Harvard but was denied the path to a PhD and to teaching white students there. He finally earned his doctorate at the University of Vienna in 1931.",
    },
    choices: [{ label: "Chase the hardest problem you can find", to: "physo" }],
  },
  physo: {
    chapter: "Chapter 1 · The Calabar bean",
    text:
      "You set your sights on physostigmine — a compound from the West African Calabar bean that treats glaucoma by relieving pressure in the eye. The only supply is the rare bean itself. If you could build the molecule from scratch in a lab, you'd make a sight-saving drug cheap and abundant. It's a fearsome synthesis.",
    choices: [{ label: "Attempt the total synthesis", to: "conflict" }],
  },
  conflict: {
    chapter: "Chapter 2 · Against Robinson",
    text:
      "You're closing in — but Sir Robert Robinson of Oxford, one of the most famous chemists alive, has published a structure for an intermediate that contradicts yours. Your synthesized compound's melting point doesn't match what his structure predicts. Either the legend is wrong, or you are. Your whole reputation is on the line.",
    choices: [
      { label: "Trust your own data and say Robinson is wrong", to: "win" },
      { label: "Defer to the famous chemist and reinterpret", to: "defer" },
    ],
  },
  defer: {
    chapter: "Chapter 2 · The safe path",
    text:
      "Bowing to authority would have been comfortable — and would have buried a correct result under a famous name. Your measurements are careful. In science, a clean fact outranks a big reputation.",
    note: {
      title: "Evidence over authority",
      body: "Julian publicly stood by his data. He was right: in 1935 he completed the first total synthesis of physostigmine, and Robinson's proposed intermediate was the error.",
    },
    choices: [{ label: "Stand by the data", to: "win" }],
  },
  win: {
    chapter: "Chapter 3 · Vindicated",
    text:
      "You're right. In 1935 you complete the first total laboratory synthesis of physostigmine. It establishes you as a world-class organic chemist — yet universities still won't hire you to run a lab because you are Black. So you take your talents to industry.",
    choices: [{ label: "Join the Glidden Company", to: "soy" }],
  },
  soy: {
    chapter: "Chapter 4 · Soybeans into steroids",
    text:
      "At Glidden you master soybean chemistry. When water accidentally leaks into a tank of purified soybean oil and leaves a white sludge, you instantly recognize it as stigmasterol — a plant steroid. You realize soybeans can be a cheap, endless feedstock for making human hormones.",
    note: {
      title: "The chemistry",
      body: "Plant sterols like stigmasterol share a steroid backbone with human hormones. Julian developed 'semi-synthesis': start from the cheap plant sterol and chemically convert it, rather than building the whole steroid from scratch.",
    },
    choices: [{ label: "Scale it up", to: "legacy" }],
  },
  legacy: {
    chapter: "Epilogue · Medicine for the many",
    end: true,
    text:
      "Julian's routes made progesterone and, crucially, cortisone affordable — dropping the price of the arthritis drug from hundreds of dollars a dose toward pennies. He earned over 100 patents, founded his own company, and was elected to the National Academy of Sciences. He did it while his family's home was firebombed by racists the year they moved in. His science outlasted the hatred aimed at him.",
    choices: [],
  },
};
