# HistoryQuest

A cozy, pixel-styled *choose-your-own-history* game. Each "player card" is a
scientist whose life you play through as a short branching lesson — the choices
are grounded in real history, wrong turns teach instead of punishing, and every
story ends with its own sources.

## Roster (10 playable)

Alice Ball · Stephanie Kwolek · Percy Julian · George Washington Carver ·
Norbert Rillieux · Marie Curie · Mario Molina · Gertrude Elion ·
Dorothy Hodgkin · Fritz Haber.

Each story has at least one real chemistry decision point. The Fritz Haber
story is deliberately morally complex (he fed billions and invented chemical
weapons) and is written to prompt judgment, not to gamify atrocity.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL. Production build:

```bash
npm run build      # outputs to /dist
npm run preview
```

## Project structure

```
src/
  main.jsx              app entry
  App.jsx               home <-> game view switch
  styles.css            fonts + global resets
  theme.js              color palette + shared pixel styles
  components/
    Home.jsx            grid of player cards
    Game.jsx            scene renderer (reads each story's meta.sources)
    PixelScene.jsx      the little SVG pixel scene on each card
  data/
    figures.js          the 10 cards shown on the home screen
    stories.js          registry: figure id -> story graph
    <name>Story.js      one file per figure's branching story
```

## Add another figure

1. Write a new `data/<name>Story.js` following the shape in `ballStory.js`
   (include `meta.sources`).
2. Register it in `data/stories.js`.
3. Add a card in `data/figures.js` and set `playable: true`.

Each story is validated to make sure every choice points to a real scene and
every story has a start, an end, and sources.
