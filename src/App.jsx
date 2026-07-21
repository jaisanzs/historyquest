import { useState } from "react";
import { C } from "./theme.js";
import Home from "./components/Home.jsx";
import Game from "./components/Game.jsx";

// Root: switches between the home screen and a figure's game.
export default function App() {
  const [view, setView] = useState("home"); // "home" | figureId

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `repeating-linear-gradient(45deg, ${C.paper}, ${C.paper} 16px, ${C.paperDark} 16px, ${C.paperDark} 32px)`,
        padding: "28px 18px 40px",
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        {view === "home" ? (
          <Home onPick={(id) => setView(id)} />
        ) : (
          <Game figureId={view} onHome={() => setView("home")} />
        )}
      </div>
    </div>
  );
}
