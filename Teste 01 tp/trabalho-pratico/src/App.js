import React from 'react';
import ReactDOM from 'react-dom/client';
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

  const [seconds,setSeconds]=useState(0);
  const [minutes,setMinutes]=useState(3);
  const [maxMinutes,setMaxMinutes]=useState(10);

  
  const [isShown, setIsShown] = useState(false);
  
  /**
  * When the game starts
  */
   const handleGameStart = () => {
    if (gameStarted) {
      setGameStarted(false);
      setIsShown(false);
    } else {
      setGameStarted(true);
      setIsShown(true);
    };
  }


  /**
   * When the user selects a new level,
   * this callback function is executed
   */
  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedLevel(value);
    switch (selectedLevel) {
      //level beginner
      case '0':
        setMinutes(4);
        setMaxMinutes(4);
        break;
      //level Intermediate
      case '1':
        setMinutes(5);
        setMaxMinutes(5);
        break;
      //level Advanced
      case '2':
        setMinutes(6);
        setMaxMinutes(6);
        break;
      default:
        setMinutes(10);
        setMaxMinutes(10);
        break;
    }
  }




    

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
          setMinutes(maxMinutes);
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
      {isShown && (
      <GamePanel
        selectedLevel={selectedLevel}
        minutes={minutes}
        seconds={seconds}
      />
      )}
      <aside>
        <div id="display">
          <a>Tempo: </a> <a>{minutes}:{seconds}</a>
        </div>
      </aside>
    </div>
  );

}

export default App;
