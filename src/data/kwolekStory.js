export const KWOLEK_STORY = {
  meta: {
    name: "Stephanie Kwolek",
    subtitle: "The fiber she almost threw away",
    sources: [
      { t: "American Chemical Society — Stephanie Kwolek", u: "https://www.acs.org/education/whatischemistry/women-scientists/stephanie-kwolek.html" },
      { t: "Science History Institute — Stephanie L. Kwolek", u: "https://www.sciencehistory.org/education/scientific-biographies/stephanie-l-kwolek/" },
      { t: "Lemelson–MIT / Smithsonian — Kevlar Inventor", u: "https://invention.si.edu/invention-stories/stephanie-kwolek-kevlarr-inventor" },
    ],
  },
  start: {
    chapter: "Prologue · Pittsburgh, 1946",
    text:
      "You are Stephanie Kwolek. You wanted to be a doctor, but you can't yet afford medical school, so you take a research job at the DuPont textile lab to save money. You expect it to be temporary. Instead, the chemistry of long molecules — polymers — pulls you in and never lets go. You never leave for med school.",
    choices: [{ label: "Get to work on polymers", to: "task" }],
  },
  task: {
    chapter: "Chapter 1 · A stronger fiber",
    text:
      "By the mid-1960s, DuPont wants a new fiber: stiff, strong, and light enough to replace steel in tires as fuel prices climb. Your group hunts for polyamides — nylon's chemical cousins — that could spin into something far tougher than anything before. You focus on rigid, rod-like molecules.",
    note: {
      title: "Why rod-like?",
      body: "Floppy polymer chains tangle like cooked spaghetti. Stiff, straight (rod-like) chains can line up side by side, and aligned chains make a much stronger fiber.",
    },
    choices: [{ label: "Prepare a solution to spin", to: "solution" }],
  },
  solution: {
    chapter: "Chapter 2 · The odd batch",
    text:
      "You dissolve one of your rigid polymers and get something strange: instead of a clear, syrupy solution, it's thin, cloudy, and shimmery — almost like watered milk. Every instinct trained into chemists says a good spinning solution should be clear and viscous. The technician who runs the fiber-spinning machine doesn't want to risk clogging it with your murky batch.",
    choices: [
      { label: "Insist — spin the cloudy solution anyway", to: "spin" },
      { label: "Discard it and make a 'proper' clear one", to: "discard" },
    ],
  },
  discard: {
    chapter: "Chapter 2 · What most people did",
    text:
      "Throwing it out would have been the normal call — and it's exactly why this fiber wasn't discovered sooner. That cloudiness wasn't contamination. It was the signal.",
    note: {
      title: "Read the cloudiness",
      body: "The murky shimmer meant the rod-like molecules were spontaneously lining up into a 'liquid crystalline' phase — ordered like a crystal but still flowing like a liquid. That order is the whole point.",
    },
    choices: [{ label: "Change your mind — spin it", to: "spin" }],
  },
  spin: {
    chapter: "Chapter 3 · Liquid crystals",
    text:
      "You persuade the technician to run it. The fibers that come out are astonishing — stiffer and stronger than any organic fiber ever spun. The cloudy solution was a liquid crystal: its rigid chains were already aligned before spinning, so they locked into near-perfect parallel order in the fiber.",
    note: {
      title: "The chemistry",
      body: "The polymer is poly-para-phenylene terephthalamide. Aligned chains + strong hydrogen bonds between them = a fiber about five times stronger than steel by weight. DuPont named it Kevlar.",
    },
    choices: [{ label: "See where it goes", to: "legacy" }],
  },
  legacy: {
    chapter: "Epilogue · Kevlar",
    end: true,
    text:
      "It took years to turn the discovery into product, but Kevlar went on to bulletproof vests, helmets, gloves, tires, boats, and spacecraft — and is credited with saving thousands of lives. Kwolek held the patent, but like most industrial chemists she signed the rights to her employer and never grew rich from it. She spent later years encouraging girls into science. Her lesson: don't throw out the weird result. Look closer.",
    choices: [],
  },
};
