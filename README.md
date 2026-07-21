# HistoryQuest

A cozy, pixel-styled *choose-your-own-history* game. Each "player card" is a
scientist whose life you play through as a short branching lesson — the choices
are grounded in real history, wrong turns teach instead of punishing, and every
story ends with its sources.

First playable figure: **Alice Augusta Ball** (1892–1916), the chemist who made
chaulmoogra oil injectable to treat Hansen's disease — and was nearly written
out of her own discovery.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL. To make a production build:

```bash
npm run build      # outputs to /dist
npm run preview    # serve the build locally
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
    Game.jsx            scene renderer (text, choices, notes, sources)
    PixelScene.jsx      the little SVG pixel scene on each card
  data/
    figures.js          the cards shown on the home screen
    stories.js          registry: figure id -> story graph
    ballStory.js        Alice Ball's branching story
    sources.js          citations shown at the end
```

## Add another figure

1. Write a new `data/<name>Story.js` following the shape in `ballStory.js`.
2. Register it in `data/stories.js`.
3. Add a card in `data/figures.js` and set `playable: true`.

## Sources

Alice Ball's story is drawn from the American Chemical Society, the National
Women's History Museum, National Geographic, the British Pharmacological
Society, and the University of Nebraska Medical Center. Links appear in-game at
the end of her story and in `src/data/sources.js`.

The commonly repeated "died from chlorine gas" account is presented in-game as
the leading account, not a certainty, because her death records were altered.
