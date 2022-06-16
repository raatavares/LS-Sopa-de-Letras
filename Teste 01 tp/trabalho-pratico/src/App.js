import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/header/header.component"
import ControlPanel from "./components/control-panel/control-panel.component"
import GamePanel from "./components/game-panel/game-panel.component"
import Display from "./components/display/display.component"
import "./assets/styles/App.css";

let timerId = undefined

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


  /**
   * When the user selects a new level,
   * this callback function is executed
   */
   const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedLevel(value);
    let minutes;
    switch (new selectedLevel().getLevel()) {
      //level beginner
      case 1:
        minutes = 3;
        break;
      //level Intermediate
      case '2':
        minutes = 6;
        break;
      //level Advanced
      case '3':
        minutes = 10;
        break;
      default:
        minutes = 0;
        break;
    }
  }


  const [seconds,setSeconds]=useState(0);
const [minutes,setMinutes]=useState(3);

    

    var timer;
    useEffect(()=>{
        timer = setInterval(()=>{
            if(gameStarted === true){
                setSeconds(seconds-1);
                if(seconds===0){
                    setMinutes(minutes-1);
                    setSeconds(59);
                }
                if(seconds===0 && minutes===0){
                    window.alert("GAME OVER!!!");
                }
            }else{
              setMinutes(3);
              setSeconds(0);
            }
        },1000)

    return ()=> clearInterval(timer);

    });

  return (
    <div id="container">
      <Header />
      <main className="main-content">
      <ControlPanel 
        gameStarted={gameStarted}
        onGameStart={handleGameStart}
        selectedLevel={selectedLevel}
        onLevelChange={handleLevelChange}
      />
      </main>
      <GamePanel />
      <aside>
        <div>
          <Display text="Pontuação:" />
        </div>
        <div id="display">
          <a>Tempo: </a> <a>{minutes}:{seconds}</a>
        </div>
      </aside>
    </div>
  );
}
export default App;
