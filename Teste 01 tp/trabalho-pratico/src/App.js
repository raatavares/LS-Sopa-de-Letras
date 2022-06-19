import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { useEffect } from "react";
import Footer from "./components/footer/footer.component"
import Header from "./components/header/header.component"
import ControlPanel from "./components/control-panel/control-panel.component"
import GamePanel from "./components/game-panel/game-panel.component"
import GameOverModal from "./components/game-over-modal/game-over-modal.component"
import "./assets/styles/App.css";


function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");

  const [seconds,setSeconds]=useState(0);
  const [minutes,setMinutes]=useState(3);
  const [maxMinutes,setMaxMinutes]=useState(10);
  const [pontuacao,setPontuacao]=useState(0);
  
  const [isShown, setIsShown] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

	const handleCloseModal = () => {
		setIsModalOpen(!isModalOpen);
    setMinutes(maxMinutes);
    setSeconds(0);
    setGameStarted(false);
	}

  const updatePontuacao = (operacaoSoma = true) => {
    let pointsSum = pontuacao;
    if (operacaoSoma) {
      pointsSum += 1*minutes*60+seconds;
    } else {
      pointsSum < 5 ? (pointsSum = 0) : (pointsSum -= 5);
    }
    setPontuacao(pointsSum);
  }

  const updateFinalJogo = (operacao = true) => {
    setIsModalOpen(true);
  }

	const [numPalavras, setnumPalavras] = useState(5);

  

  /**
  * When the game starts
  */
   const handleGameStart = () => {
    if (gameStarted) {
      setGameStarted(false);
      setIsShown(false);
      setIsModalOpen(true);
    } else {
      setGameStarted(true);
      setPontuacao(0);
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
        setnumPalavras(5);
        break;
      //level Intermediate
      case '1':
        setMinutes(5);
        setMaxMinutes(5);
        setnumPalavras(7);
        break;
      //level Advanced
      case '2':
        setMinutes(6);
        setMaxMinutes(6);
        setnumPalavras(10);
        break;
      default:
        setMinutes(10);
        setMaxMinutes(10);
        setnumPalavras(5);
        break;
    }
  }




    

  var timer;
  useEffect(()=>{
    if(isModalOpen === false){
    timer = setInterval(()=>{
      if(gameStarted === true){
        setSeconds(seconds-1);
        if(seconds===0){
          setMinutes(minutes-1);
          setSeconds(59);
        }
        if(seconds===0 && minutes===0){
          updateFinalJogo(true);
          window.alert("GAME OVER!!!");
        }
        }else{
          setMinutes(maxMinutes);
          setSeconds(0);
        }
      },1000)

    return ()=> clearInterval(timer);
    }
  });

  return (
    <div id="container">
      <GameOverModal 
        isOpen = {isModalOpen}
        pontuacao = {pontuacao}
        handleClose = {handleCloseModal}
        minutes = {minutes}
        seconds = {seconds}
      />
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
        updatePontuacao={updatePontuacao}
        updateFinalJogo={updateFinalJogo}
        numPalavras={numPalavras}
      />
      )}
      <div id="display">
          <a>Pontuação: </a> <a>{pontuacao}</a>
        </div>
        <div id="display">
          <a>Tempo: </a> <a>{minutes}:{seconds}</a>
        </div>
      <input
        type="text"
        id="inputNome"
        size="17"
        placeholder="Introduza uma palavra"
      />
    </div>
  );

}

export default App;
