import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/header/header.component"
import ControlPanel from "./components/control-panel/control-panel.component"
import GamePanel from "./components/game-panel/game-panel.component"
import Display from "./components/display/display.component"
import Timer from "./components/Timer/Timer"
import "./assets/styles/App.css";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");

  /**
  * When the game starts
  */
   const handleGameStart = () => {
    if (gameStarted) {
      setGameStarted(false);
    } else {
      setGameStarted(true);
    }
  };
  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedLevel(value);
  }


  return (
    <div id="container">
      <Header />
      <main className="main-content">
      <ControlPanel 
        gameStarted={gameStarted}
        onGameStart={handleGameStart}
        selectedLevel={selectedLevel}
        onLevelChange={handleLevelChange}
        //timer={timer}
      />
      </main>
      <GamePanel />
      <aside>
        <div>
          <Display text="Pontuação:" />
        </div>
        <div id="display">
          <a>Tempo: </a> <Timer>  </Timer>
        </div>
      </aside>
    </div>
  );
}
export default App;
