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
    type: "spin", sceneId: "task", to: "solution",
    prompt: "Spin the cloudy liquid-crystal solution into fiber — draw it out again and again.",
    spins: 5, label: "Fiber strength", machineLabel: "Spinneret", doneLabel: "Fiber spun!",
    glow: "#e6b25a", glowLite: "#f6e0b0",
    hint: "Draw the fiber out, again and again.",
    successMsg: "The rigid, rod-like chains line up into a liquid crystal and spin into Kevlar \u2014 about five times stronger than steel by weight.",
  },

  carver: {
    type: "meter", sceneId: "science", to: "products",
    prompt: "Heal the worn-out soil. Tap crops to bring the nitrogen back up to the mark.",
    meterLabel: "Soil nitrogen", start: 25, goal: 100,
    hint: "Legumes (peanut, cowpea, soybean) fix nitrogen. Cotton and corn drain it.",
    options: [
      { label: "Peanut", delta: 30, kind: "good", icon: "leaf" },
      { label: "Cowpea", delta: 30, kind: "good", icon: "leaf" },
      { label: "Soybean", delta: 25, kind: "good", icon: "leaf" },
      { label: "Cotton", delta: -15, kind: "bad", icon: "boll" },
      { label: "Corn", delta: -10, kind: "bad", icon: "boll" },
    ],
    successMsg: "That's the secret: rotate nitrogen-fixing legumes with cotton and the soil recovers.",
  },

  molina: {
    type: "reactor", sceneId: "science", to: "choice",
    prompt: "Run the chain reaction that thins the ozone layer.",
    vessel: { from: "#9fd3e0", to: "#c7b39a" },
    steps: [
      { id: "release", label: "Release CFC", icon: "spray" },
      { id: "rise", label: "Drift up", icon: "up" },
      { id: "uv", label: "Hit with UV", icon: "uv" },
      { id: "destroy", label: "Free Cl \u2192 break ozone", icon: "ozone" },
    ],
    successMsg: "One freed chlorine atom destroys tens of thousands of ozone molecules \u2014 the hole Molina predicted.",
  },

  rillieux: {
    type: "reactor", sceneId: "science", to: "build",
    prompt: "Build Rillieux's fuel-saving evaporator, step by step.",
    vessel: { from: "#cdb58a", to: "#f0e6cf" },
    steps: [
      { id: "seal", label: "Seal under vacuum", icon: "lock" },
      { id: "boil", label: "Boil chamber 1", icon: "flame" },
      { id: "pipe", label: "Pass vapor onward", icon: "pipe" },
      { id: "sugar", label: "Collect pure sugar", icon: "cube" },
    ],
    successMsg: "Each chamber's vapor heats the next, reusing the same heat again and again \u2014 the multiple-effect evaporator.",
  },

  curie: {
    type: "spin", sceneId: "isolate", to: "win",
    prompt: "Spin the crystallizer over and over to concentrate the radium.",
    spins: 5,
    label: "Radium purity",
    successMsg: "After years of this, Curie isolated about a tenth of a gram of pure radium from tons of ore.",
  },

  elion: {
    type: "reaction", sceneId: "science", to: "drug",
    prompt: "Build the decoy purine: swap one atom to fool the cancer cell.",
    start: { name: "Purine base", formula: "6-oxo", color: "#b79ad0" },
    goal: { name: "6-mercaptopurine", formula: "6-thio", color: "#7fa650" },
    reagents: [
      { name: "Oxygen", formula: "O", color: "#6fa8dc", correct: false, explain: "It already has an oxygen there \u2014 no change, and no drug." },
      { name: "Carbon", formula: "C", color: "#3a3a3a", correct: false, explain: "That breaks the purine instead of mimicking it." },
      { name: "Sulfur", formula: "S", color: "#e0c24e", correct: true, explain: "Yes! Swapping the 6-oxygen for sulfur makes 6-mercaptopurine \u2014 a fake purine the cancer cell mistakes for the real thing." },
    ],
    successMsg: "6-mercaptopurine: the decoy that jams a leukemia cell's DNA.",
  },

  hodgkin: {
    type: "reactor", sceneId: "how", to: "penicillin",
    prompt: "Read the molecule's shape with the X-ray machine.",
    vessel: { from: "#dfe8ea", to: "#8a86c8" },
    steps: [
      { id: "crystal", label: "Mount crystal", icon: "crystal" },
      { id: "xray", label: "Fire X-rays", icon: "xray" },
      { id: "capture", label: "Capture spots", icon: "capture" },
      { id: "compute", label: "Compute structure", icon: "compute" },
    ],
    successMsg: "That diffraction pattern reveals every atom \u2014 how Hodgkin mapped penicillin and vitamin B12.",
  },

  haber: {
    type: "dial", sceneId: "science", to: "win",
    prompt: "Tune the reactor to squeeze the most ammonia out of N₂ + H₂.",
    note: "Making ammonia shrinks the gas, so high pressure helps. But too hot tears it back apart — a catalyst lets a medium temperature work.",
    meterLabel: "Ammonia yield", doneLabel: "Max yield!",
    dials: [
      { label: "Pressure", min: 1, max: 300, step: 10, unit: " atm", target: [200, 300], start: 1 },
      { label: "Temperature", min: 100, max: 900, step: 25, unit: "°C", target: [350, 500], start: 900 },
    ],
    successMsg: "High pressure + a moderate temperature (with an iron catalyst) gives the most ammonia. That's the Haber–Bosch process that feeds half the world.",
  },
  tu: {
    type: "reaction", sceneId: "extract", to: "proof",
    prompt: "Pull the antimalarial compound out of the wormwood without destroying it.",
    start: { name: "Sweet wormwood", formula: "qinghao", color: "#6f8f3a" },
    goal: { name: "Artemisinin", formula: "intact!", color: "#7fa650" },
    reagents: [
      { name: "Boiling water", formula: "100\u00b0C", color: "#c96f6f", correct: false, explain: "Too hot \u2014 boiling destroys the active compound. That's exactly why earlier attempts failed." },
      { name: "Hot distillation", formula: "high heat", color: "#b8b2a6", correct: false, explain: "Still too hot. The molecule breaks down before you can collect it." },
      { name: "Cold ether", formula: "low temp", color: "#6fa8dc", correct: true, explain: "Yes! Ether boils at a low temperature, so a cold extraction leaves artemisinin intact \u2014 the clue hidden in a 340 AD text." },
    ],
    successMsg: "Cold extraction saves the molecule \u2014 100% effective against the malaria parasite.",
  },

  meitner: {
    type: "reactor", sceneId: "split", to: "explain",
    prompt: "Split the uranium nucleus, step by step.",
    vessel: { from: "#6a86a0", to: "#e0a24e" },
    steps: [
      { id: "fire", label: "Fire a neutron", icon: "up" },
      { id: "absorb", label: "Nucleus absorbs it", icon: "capture" },
      { id: "split", label: "It splits into barium", icon: "ozone" },
      { id: "energy", label: "Energy + neutrons fly out", icon: "uv" },
    ],
    successMsg: "The nucleus split in two, releasing ~200 million eV and more neutrons \u2014 a chain reaction. Meitner named it 'fission.'",
  },

  franklin: {
    type: "spin", sceneId: "expose", to: "reveal",
    prompt: "Hold the fiber at the right humidity and expose the film \u2014 hour after hour \u2014 to capture Photo 51.",
    spins: 5, label: "Image clarity", machineLabel: "X-ray camera", doneLabel: "Photo 51 captured!",
    glow: "#c98fb0", glowLite: "#f0d6e6",
    hint: "Real exposure took about 100 hours. Keep going.",
    successMsg: "A stark black X emerges \u2014 the unmistakable signature of a helix.",
  },

  nobel: {
    type: "meter", sceneId: "stabilize", to: "result",
    prompt: "Soak the nitroglycerin into a powder until it's stable enough to handle.",
    meterLabel: "Stability", start: 15, goal: 100,
    hint: "Most powders are too weak. One porous earth soaks up enough to matter.",
    options: [
      { label: "Kieselguhr", delta: 30, kind: "good", icon: "cube" },
      { label: "Sawdust", delta: 6, kind: "bad", icon: "leaf" },
      { label: "Charcoal", delta: 6, kind: "bad", icon: "cube" },
      { label: "Brick dust", delta: 5, kind: "bad", icon: "cube" },
    ],
    successMsg: "Kieselguhr \u2014 fossil diatom powder \u2014 soaks up the nitroglycerin into a safe putty: dynamite.",
  },

  mendeleev: {
    type: "dial", sceneId: "predict", to: "proof",
    prompt: "Predict the missing element (eka-aluminium). Set its atomic mass and density to match what nature will reveal.",
    note: "Read across from its neighbors in the table to estimate the gap.",
    meterLabel: "Prediction match", doneLabel: "It's a match!",
    dials: [
      { label: "Atomic mass", min: 40, max: 90, step: 1, unit: "", target: [66, 71], start: 40 },
      { label: "Density", min: 2, max: 10, step: 0.5, unit: " g/cm\u00b3", target: [5.5, 6.5], start: 2 },
    ],
    successMsg: "In 1875 gallium appeared \u2014 mass 69.7, density 5.9 \u2014 almost exactly your prediction. The periodic table was proven.",
  },
};
