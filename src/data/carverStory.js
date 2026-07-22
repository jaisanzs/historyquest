export const CARVER_STORY = {
  meta: {
    name: "George Washington Carver",
    subtitle: "The man who healed the soil",
    sources: [
      { t: "Science History Institute — George Washington Carver", u: "https://www.sciencehistory.org/education/scientific-biographies/george-washington-carver/" },
      { t: "National Inventors Hall of Fame — Carver", u: "https://www.invent.org/inductees/george-washington-carver" },
      { t: "HISTORY — George Washington Carver", u: "https://www.history.com/articles/george-washington-carver" },
    ],
  },
  start: {
    chapter: "Prologue · Missouri, ~1864",
    text:
      "You are George Washington Carver, born enslaved near the end of the Civil War and orphaned as a baby. You are endlessly curious about plants — neighbors call you 'the plant doctor'. Barred from schools that admit only white students, you travel for years to get an education, finally earning a master's in agricultural science from Iowa State.",
    choices: [{ label: "Accept Booker T. Washington's invitation to Tuskegee", to: "south" }],
  },
  south: {
    chapter: "Chapter 1 · The exhausted South",
    text:
      "At Tuskegee Institute in Alabama, you find Black farmers trapped in poverty. For generations they've grown one crop — cotton — on the same fields. The soil is worn out, yields are falling, and debt is deepening. This is a chemistry problem hiding as an economic one.",
    note: {
      title: "What cotton takes",
      body: "Cotton is a heavy feeder: it pulls nitrogen and other nutrients from the soil and gives none back. Grow it year after year and the land goes barren.",
    },
    choices: [{ label: "Look for a crop that gives back", to: "science" }],
  },
  science: {
    chapter: "Chapter 2 · The nitrogen fix",
    text:
      "You know that legumes — peanuts, cowpeas, soybeans — do something cotton can't: they put nitrogen back into the ground. Rotate them with cotton and the soil recovers. But the farmers are skeptical, and there's a catch: if everyone plants peanuts, who will buy them all?",
    note: {
      title: "The chemistry",
      body: "Legumes host bacteria in their roots that pull nitrogen gas from the air and 'fix' it into forms plants can use — a free, natural fertilizer. Rotating legumes with cotton restores the nutrients cotton strips out.",
    },
    choices: [
      { label: "Create demand: invent uses for the peanut", to: "products" },
      { label: "Just order farmers to rotate crops", to: "order" },
    ],
  },
  order: {
    chapter: "Chapter 2 · Why orders fail",
    text:
      "You can't just tell a struggling farmer to grow a crop no one will pay for — they'll go hungry. The soil science only helps if the new crop can also be sold or used. The problem needs a market, not a lecture.",
    choices: [{ label: "Build the market first", to: "products" }],
  },
  products: {
    chapter: "Chapter 3 · 300 uses",
    text:
      "You throw yourself into the lab, coaxing dozens of products from the humble peanut and sweet potato — oils, dyes, flour, cosmetics, glue — and publishing simple bulletins so farmers can use them. You even build a 'movable school', a horse-drawn wagon, to bring the science directly to the fields.",
    note: {
      title: "Handle with care",
      body: "Carver is often mythologized as inventing peanut butter (he didn't) and his long product lists were more inspiration than industry. His real, lasting genius was soil chemistry and teaching — reaching poor farmers others ignored.",
    },
    choices: [{ label: "See your legacy", to: "legacy" }],
  },
  legacy: {
    chapter: "Epilogue · The plant doctor",
    end: true,
    text:
      "Carver's message — restore the soil, diversify the crop, and use what you grow — pulled countless Southern farms back from ruin, and by 1940 the peanut was a leading American crop. He turned down fortune to stay teaching at Tuskegee for 47 years on a modest salary, and left his savings to fund research after him. He measured wealth in what he could give away.",
    choices: [],
  },
};
