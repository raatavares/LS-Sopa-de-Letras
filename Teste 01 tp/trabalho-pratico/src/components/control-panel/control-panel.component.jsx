import React from "react";
import "./control-panel.css";

function ControlPanel (props) {
    const { gameStarted, selectedLevel, onGameStart, onLevelChange, /*timer*/ } =
    props;

    return (
        <main className="main-content">
            <section id="control-panel">
                <form className="form">
                    <fieldset className="form-group left">
                        <label for="btLevel">Dificuldade:</label>
                        <br></br>
                        <br></br>
                        <select 
                            id="btLevel" 
                            defaultValue="0"
                            onChange={onLevelChange}
                            disabled={gameStarted} 
                        >
                            <option value="0">Selecionar...</option>
                            <option value="1">Simples</option>
                            <option value="2">Intermédio</option>
                            <option value="3">Avançado</option>
                        </select>
                    </fieldset>
                    <button
                        type="button"
                        id="btPlay"
                        disabled={selectedLevel === "0"}
                        onClick={onGameStart}
                        >
                        {gameStarted ? "Parar jogo" : "Iniciar Jogo"}
                    </button>
                </form>
            <div className="form-metadata">
            </div>
        </section>
        </main>
    )
    
}


//export default tempo;
export default ControlPanel;