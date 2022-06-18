import React, {useState} from "react";
import "./game-over-modal.css";

function GameOverModal(props) {
  const {isOpen, pontuacao, handleClose, minutes, seconds} = props;

  const modalClass = `w3-modal ${isOpen ? "show-modal" : ""}`;
  const [inputNomeText, setInputNomeText] = useState("");

  return (
    <div id="modal-gameOver" className={modalClass}>
      <div className="w3-modal-content w3-animate-zoom estilos">
        <header>
          <span
            className="w3-button w3-display-topright closeButao"
            data-modalid="gameOver"
            onClick={handleClose}>
            &times;
          </span>
          <div>Jogo Terminado</div>
        </header>
        <div className="info" id="pontuacao">
          <p>Pontuação: {pontuacao}</p>
        </div>
        <div className="info" id="pontuacao">
          <a>Tempo: </a> <a>{minutes}:{seconds}</a>
        </div>
        {
          <div className="info" id="nome">
            Nick Name:
            <input
              type="text"
              id="inputNome"
              size="16"
              placeholder="Introduza o seu Nome"
            />
            <button id="okTop"onClick={handleClose}>Ok</button>
          </div>
        }
        <footer id="footer">
          <a>Sopa de Letras</a>
        </footer>
      </div>
    </div>
  );
}

export default GameOverModal;
