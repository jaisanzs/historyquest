export const CURIE_STORY = {
  meta: {
    name: "Marie Skłodowska Curie",
    subtitle: "Four years, tons of rock, two elements",
    sources: [
      { t: "Nobel Prize — Marie Curie", u: "https://www.nobelprize.org/stories/women-who-changed-science/marie-curie" },
      { t: "Nobel Prize — Discovery of polonium and radium", u: "https://www.nobelprize.org/prizes/themes/marie-and-pierre-curie-and-the-discovery-of-polonium-and-radium/" },
      { t: "The Franklin Institute — Marie Curie", u: "https://fi.edu/en/news/case-files-marie-curie" },
    ],
  },
  start: {
    chapter: "Prologue · Warsaw, 1867",
    text:
      "You are Maria Skłodowska. In Russian-controlled Poland, universities are closed to women, so you study in secret at the illegal 'Flying University' and save for years. At last you reach the Sorbonne in Paris, study physics and math while nearly freezing and starving in a garret, and finish top of your class.",
    choices: [{ label: "Find a research problem of your own", to: "rays" }],
  },
  rays: {
    chapter: "Chapter 1 · A strange energy",
    text:
      "Henri Becquerel has noticed that uranium salts fog a photographic plate on their own, with no light. For your doctoral research, you decide to measure these mysterious rays precisely. You examine a uranium ore called pitchblende — and hit something that shouldn't be possible.",
    note: {
      title: "The anomaly",
      body: "Pitchblende was MORE radioactive than its uranium content alone could explain. You reasoned it must hide new, unknown elements even more radioactive than uranium.",
    },
    choices: [
      { label: "Chase the hidden elements chemically", to: "isolate" },
      { label: "Assume the measurement is just an error", to: "error" },
    ],
  },
  error: {
    chapter: "Chapter 1 · Trust the numbers",
    text:
      "You re-measure, again and again, with your husband Pierre's sensitive instruments. The excess is real. That refusal to dismiss the anomaly is exactly what opens a new science — radioactivity, a word you coin.",
    choices: [{ label: "Isolate the new elements", to: "isolate" }],
  },
  isolate: {
    chapter: "Chapter 2 · Tons of pitchblende",
    text:
      "Finding the elements is one thing; isolating enough to prove they exist is another. You process literally tons of pitchblende in a leaky, unheated shed, stirring boiling vats with an iron rod nearly your own height. The new elements are present in vanishingly tiny amounts.",
    note: {
      title: "The chemistry",
      body: "You used fractional crystallization: dissolve, precipitate, and re-dissolve the fractions over and over. Radium chloride is slightly less soluble than barium chloride, so each cycle concentrates the radium a little more.",
    },
    choices: [{ label: "Push through four years of it", to: "win" }],
  },
  win: {
    chapter: "Chapter 3 · Polonium and radium",
    text:
      "In 1898 you announce two new elements: polonium (named for your occupied homeland) and radium. After four years of labor you isolate about a tenth of a gram of pure radium, its faint blue glow lighting the shed at night. In 1903 you share the Nobel Prize in Physics; in 1911 you win a second Nobel, in Chemistry — the only person ever to win in two sciences.",
    choices: [{ label: "Count the cost", to: "legacy" }],
  },
  legacy: {
    chapter: "Epilogue · The glow that took her",
    end: true,
    text:
      "Curie's work founded radioactivity research and, later, radiation therapy for cancer; in WWI she built mobile X-ray units for battlefield surgeons. But no one yet understood radiation's danger. She carried radium in her pockets and worked unshielded for decades. She died in 1934 of aplastic anemia, almost certainly from that exposure — her notebooks are still radioactive today. Discovery and danger, in the same glowing vial.",
    choices: [],
  },
};
