// One interactive puzzle per figure, keyed by id. `sceneId` says which scene it
// attaches to; when the player reaches that scene, Game renders the puzzle
// instead of the scene's text choices and advances to `to` when solved.
//   type: "reaction" -> ReactionBench (drag a reagent into the flask)
//   type: "match"    -> DragMatchPuzzle (sort into bins, or order into slots)
//   type: "dial"     -> DialPuzzle (sliders to hit the target zone)
export const PUZZLES = {
  ball: {
    type: "reaction", sceneId: "problem", to: "breakthrough",
    prompt: "Pick the reagent that turns the fatty acid into a mild, water-mixing form you can inject.",
    start: { name: "Chaulmoogra fatty acid", formula: "R–COOH", color: "#c88a3a" },
    goal: { name: "Ethyl ester (injectable!)", formula: "R–COOC₂H₅", color: "#7fa650" },
    reagents: [
      { name: "Water", formula: "H₂O", color: "#6fa8dc", correct: false, explain: "That only makes an emulsion — tiny oil droplets in water. The molecule itself is unchanged, so it still won't absorb and it separates." },
      { name: "Sodium hydroxide", formula: "NaOH", color: "#b8b2a6", correct: false, explain: "That makes a soap (a salt of the acid). It dissolves in water, but injected it irritates and damages tissue." },
      { name: "Ethanol", formula: "C₂H₅OH", color: "#e0a24e", correct: true, explain: "Yes! Acid + alcohol → ester. The bulky fatty acid becomes a light ethyl ester that mixes with the body and injects cleanly." },
    ],
    successMsg: "That's the Ball Method: the ethyl esters of chaulmoogra oil.",
  },

  julian: {
    type: "reaction", sceneId: "soy", to: "legacy",
    prompt: "You need cheap steroid hormones. Which raw material do you feed the reactor?",
    start: { name: "Empty reactor", formula: "—", color: "#c0c7c9" },
    goal: { name: "Progesterone (cheap!)", formula: "C₂₁H₃₀O₂", color: "#7fa650" },
    reagents: [
      { name: "Cattle bile", formula: "scarce", color: "#8a7a4a", correct: false, explain: "It has a steroid backbone, but it's scarce and wildly expensive — only enough for a handful of doses." },
      { name: "Coal tar", formula: "no backbone", color: "#3a3a3a", correct: false, explain: "Wrong chemistry — there's no steroid skeleton here to build a hormone from." },
      { name: "Soybean sterol", formula: "stigmasterol", color: "#e0a24e", correct: true, explain: "Yes! Stigmasterol from cheap soybean oil shares the steroid backbone. Julian turned soybeans into affordable hormones." },
    ],
    successMsg: "Soybeans → steroids. That's how Julian dropped cortisone from dollars to pennies a dose.",
  },

  kwolek: {
    type: "match", sceneId: "task", to: "solution", ordered: false,
    prompt: "Which polymer chains will spin into a super-strong fiber, and which just tangle?",
    targets: [
      { id: "strong", label: "Lines up → strong fiber", color: "#4f6f34" },
      { id: "weak", label: "Tangles → weak", color: "#c96f6f" },
    ],
    items: [
      { label: "Rigid rod-like chain", target: "strong" },
      { label: "Stiff, straight chain", target: "strong" },
      { label: "Floppy coiled chain", target: "weak" },
      { label: "Bendy, tangled chain", target: "weak" },
    ],
    successMsg: "Right — rigid, rod-like chains line up into a liquid crystal and spin into Kevlar's incredible fiber. The floppy ones just tangle.",
  },

  carver: {
    type: "match", sceneId: "science", to: "products", ordered: false,
    prompt: "Sort the crops: which drain the soil, and which feed nitrogen back into it?",
    targets: [
      { id: "drain", label: "Drains the soil" },
      { id: "feed", label: "Feeds it back (legumes fix nitrogen)" },
    ],
    items: [
      { label: "Cotton", target: "drain" },
      { label: "Corn", target: "drain" },
      { label: "Peanut", target: "feed" },
      { label: "Cowpea", target: "feed" },
      { label: "Soybean", target: "feed" },
    ],
    successMsg: "Exactly — legumes host root bacteria that pull nitrogen from the air. Rotate them with cotton and the soil heals.",
  },

  molina: {
    type: "match", sceneId: "science", to: "choice", ordered: false,
    prompt: "Sort these: which ones reach the ozone layer and destroy it?",
    targets: [
      { id: "harm", label: "Destroys ozone" },
      { id: "safe", label: "Harmless to ozone" },
    ],
    items: [
      { label: "CFC (spray-can gas)", target: "harm" },
      { label: "Free chlorine atom", target: "harm" },
      { label: "Oxygen (O₂)", target: "safe" },
      { label: "Nitrogen (N₂)", target: "safe" },
    ],
    successMsg: "Right. CFCs drift up intact, UV frees their chlorine, and one chlorine atom can wreck tens of thousands of ozone molecules.",
  },

  rillieux: {
    type: "match", sceneId: "science", to: "build", ordered: true,
    prompt: "Put Rillieux's fuel-saving evaporator in the right order.",
    targets: [{ id: "s1", label: "" }, { id: "s2", label: "" }, { id: "s3", label: "" }, { id: "s4", label: "" }],
    items: [
      { label: "Seal the juice in a vacuum pan (it boils cooler)", target: "s1" },
      { label: "Boil chamber 1 to make vapor", target: "s2" },
      { label: "Use that vapor to heat chamber 2", target: "s3" },
      { label: "Repeat down the line → pure sugar, little fuel", target: "s4" },
    ],
    successMsg: "That's the multiple-effect evaporator: each chamber's vapor heats the next, reusing the same heat again and again.",
  },

  curie: {
    type: "match", sceneId: "isolate", to: "win", ordered: true,
    prompt: "Order how Curie pulled radium out of tons of ore.",
    targets: [{ id: "s1", label: "" }, { id: "s2", label: "" }, { id: "s3", label: "" }, { id: "s4", label: "" }],
    items: [
      { label: "Notice pitchblende is too radioactive for its uranium", target: "s1" },
      { label: "Dissolve tons of ore in acid", target: "s2" },
      { label: "Fractional crystallization: dissolve, then re-crystallize", target: "s3" },
      { label: "Repeat over and over → the radium concentrates", target: "s4" },
    ],
    successMsg: "Yes — radium chloride is slightly less soluble than barium, so each cycle leaves the radium a bit more concentrated.",
  },

  elion: {
    type: "match", sceneId: "science", to: "drug", ordered: true,
    prompt: "Order Elion's 'rational design' of a leukemia drug.",
    targets: [{ id: "s1", label: "" }, { id: "s2", label: "" }, { id: "s3", label: "" }, { id: "s4", label: "" }],
    items: [
      { label: "Study how cancer cells copy DNA differently", target: "s1" },
      { label: "Target the purine building blocks (A, G)", target: "s2" },
      { label: "Design a decoy purine — swap one oxygen for sulfur", target: "s3" },
      { label: "The fake jams the cancer cell → 6-mercaptopurine", target: "s4" },
    ],
    successMsg: "That's rational drug design: understand the target first, then build a molecule to block it.",
  },

  hodgkin: {
    type: "match", sceneId: "how", to: "penicillin", ordered: true,
    prompt: "Order how Hodgkin read a molecule's shape from X-rays.",
    targets: [{ id: "s1", label: "" }, { id: "s2", label: "" }, { id: "s3", label: "" }, { id: "s4", label: "" }],
    items: [
      { label: "Grow the molecule into a pure crystal", target: "s1" },
      { label: "Fire X-rays through the crystal", target: "s2" },
      { label: "Record the pattern of diffraction spots", target: "s3" },
      { label: "Compute the 3-D position of every atom", target: "s4" },
    ],
    successMsg: "That's X-ray crystallography — how she mapped penicillin, then vitamin B12's 1,000+ atoms.",
  },

  haber: {
    type: "dial", sceneId: "science", to: "win",
    prompt: "Tune the reactor to squeeze the most ammonia out of N₂ + H₂.",
    note: "Making ammonia shrinks the gas, so high pressure helps. But too hot tears it back apart — a catalyst lets a medium temperature work.",
    dials: [
      { label: "Pressure", min: 1, max: 300, step: 10, unit: " atm", target: [200, 300], start: 1 },
      { label: "Temperature", min: 100, max: 900, step: 25, unit: "°C", target: [350, 500], start: 900 },
    ],
    successMsg: "High pressure + a moderate temperature (with an iron catalyst) gives the most ammonia. That's the Haber–Bosch process that feeds half the world.",
  },
};
