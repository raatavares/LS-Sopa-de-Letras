import { useCallback, useState } from "react";
import { useEffect } from "react";
import "./game-panel.css"
import {randomLeter} from "./array-table.js"

const btLevel = document.querySelector('#btLevel');


function GamePanel (props) {
	const {selectedLevel, updatePontuacao, updateFinalJogo, numPalavras, dimensao} = props;
	
	const [palavra, setPalavra] = useState("");
	const arrayOfObjects = [ "DADOS", "REACT", "JS", "SCRIPT", "CURSO", "TESTE", "AULA", "JAVA", "LETRAS", "INFORMATICA", "SOPA" ];
	const [palavrasCertas, setPalavrasCertas] = useState(1);

	const [isShownSimples, setIsShownSimples] = useState(false);
	const [isShownIntermedio, setIsShownIntermedio] = useState(false);
	const [isShownAvancado, setIsShownAvancado] = useState(false);

	useEffect(()=>{
		switch (selectedLevel) {
			//level beginner
			case '1':
				setIsShownSimples(true);
			  break;
			//level Intermediate
			case '2':
				setIsShownIntermedio(true);
			  break;
			//level Advanced
			case '3':
				setIsShownAvancado(true);
			  break;
		  }
		for(let node of document.querySelectorAll("td")) {
			node.onclick = function () {
				if(node.className === "" || node.className === "certa"){
					node.className = "selected"; 
					setPalavra(palavra+node.textContent);
					let total = arrayOfObjects.length;
					for(var i = 0; i < total; i++){
						if(palavra === arrayOfObjects[i]){
							window.alert("ACERTOU!");
							updatePontuacao(true);
							setPalavrasCertas(palavrasCertas+1);
							if(palavrasCertas === numPalavras)
								updateFinalJogo(true);
							
							setPalavra(palavra.replace(palavra, ""));
							for(let nodeAux of document.querySelectorAll("td")) {
								if(nodeAux.className === "selected")
									nodeAux.className = "certa";
							}
						}
					}
				}
				else{
					node.className="";
					setPalavra("");
				}
			}

			if(node.textContent !== "") 
				continue;
			let charcode = Math.round(65 + Math.random() * 25)
			node.textContent = String.fromCharCode(charcode)
		}
	});

	

    return (
		<div>
			{isShownSimples && (<table id="table">
				<tr>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">D</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
				</tr>

				<tr>
					<td id="letra">R</td>
					<td id="letra">E</td>
					<td id="letra">A</td>
					<td id="letra">C</td>
					<td id="letra">T</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
				</tr>

				<tr>
					<td id="letra">C</td>
					<td id="letra"></td>
					<td id="letra">D</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">J</td>
					<td id="letra"></td>
				</tr>

				<tr>
					<td id="letra">U</td>
					<td id="letra"></td>
					<td id="letra">O</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">S</td>
				</tr>

				<tr>
					<td id="letra">R</td>
					<td id="letra"></td>
					<td id="letra">S</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
				</tr>
				<tr>
					<td id="letra">S</td>
					<td id="letra"></td>
					<td id="letra">S</td>
					<td id="letra">C</td>
					<td id="letra">R</td>
					<td id="letra">I</td>
					<td id="letra">P</td>
					<td id="letra">T</td>
					<td id="letra"></td>
					<td id="letra"></td>
				</tr>
				<tr>
					<td id="letra">O</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
				</tr>
				<tr>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
				</tr>
				<tr>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
				</tr>
				<tr>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
				</tr>
			</table>)}
			{isShownIntermedio && (<table id="table">
				<tr>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">D</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">C</td>
				</tr>

				<tr>
					<td id="letra">J</td>
					<td id="letra">S</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">A</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">U</td>
				</tr>

				<tr>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">D</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">R</td>
				</tr>

				<tr>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">O</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">S</td>
				</tr>

				<tr>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">S</td>
					<td id="letra">C</td>
					<td id="letra">R</td>
					<td id="letra">I</td>
					<td id="letra">P</td>
					<td id="letra">T</td>
					<td id="letra">O</td>
				</tr>
				<tr>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">T</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
				</tr>
				<tr>
					<td id="letra"></td>
					<td id="letra">J</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">R</td>
					<td id="letra">E</td>
					<td id="letra">A</td>
					<td id="letra">C</td>
					<td id="letra">T</td>
				</tr>
				<tr>
					<td id="letra"></td>
					<td id="letra">A</td>
					<td id="letra">U</td>
					<td id="letra">L</td>
					<td id="letra">A</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">S</td>
					<td id="letra"></td>
					<td id="letra"></td>
				</tr>
				<tr>
					<td id="letra"></td>
					<td id="letra">V</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">T</td>
					<td id="letra"></td>
				</tr>
				<tr>
					<td id="letra"></td>
					<td id="letra">A</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">E</td>
				</tr>
			</table>)}
			{isShownAvancado && (<table id="table">
				<tr>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">D</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">T</td>
					<td id="letra">E</td>
					<td id="letra">S</td>
					<td id="letra">T</td>
					<td id="letra">E</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
				</tr>

				<tr>
					<td id="letra">R</td>
					<td id="letra">E</td>
					<td id="letra">A</td>
					<td id="letra">C</td>
					<td id="letra">T</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">L</td>
					<td id="letra">E</td>
					<td id="letra">T</td>
					<td id="letra">R</td>
					<td id="letra">A</td>
					<td id="letra">S</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">J</td>
					<td id="letra"></td>
					<td id="letra"></td>
				</tr>

				<tr>
					<td id="letra">C</td>
					<td id="letra"></td>
					<td id="letra">D</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">A</td>
					<td id="letra"></td>
					<td id="letra"></td>
				</tr>

				<tr>
					<td id="letra">U</td>
					<td id="letra"></td>
					<td id="letra">O</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">V</td>
					<td id="letra"></td>
					<td id="letra"></td>
				</tr>

				<tr>
					<td id="letra">R</td>
					<td id="letra"></td>
					<td id="letra">S</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">R</td>
					<td id="letra">E</td>
					<td id="letra">A</td>
					<td id="letra">C</td>
					<td id="letra">T</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">A</td>
					<td id="letra"></td>
					<td id="letra"></td>
				</tr>
				<tr>
					<td id="letra">S</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">D</td>
					<td id="letra">A</td>
					<td id="letra">D</td>
					<td id="letra">O</td>
					<td id="letra">S</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">J</td>
					<td id="letra">S</td>
					<td id="letra"></td>
					<td id="letra"></td>
				</tr>
				<tr>
					<td id="letra">O</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">S</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">A</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
				</tr>
				<tr>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">O</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">U</td>
					<td id="letra"></td>
					<td id="letra"></td>
				</tr>
				<tr>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">S</td>
					<td id="letra">C</td>
					<td id="letra">R</td>
					<td id="letra">I</td>
					<td id="letra">P</td>
					<td id="letra">T</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">L</td>
					<td id="letra"></td>
				</tr>
				<tr>
					<td id="letra">I</td>
					<td id="letra">N</td>
					<td id="letra">F</td>
					<td id="letra">O</td>
					<td id="letra">R</td>
					<td id="letra">M</td>
					<td id="letra">A</td>
					<td id="letra">T</td>
					<td id="letra">I</td>
					<td id="letra">C</td>
					<td id="letra">A</td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra"></td>
					<td id="letra">A</td>
				</tr>
			</table>)}
			{isShownSimples && (<div id="box_palavras">
				<a>REACT</a>
				<a>DADOS</a>
				<a>JS</a>
				<a>CURSO</a>
				<a>SCRIPT</a>
			</div>)}
			{isShownIntermedio && (<div id="box_palavras">
				<a>REACT</a>
				<a>DADOS</a>
				<a>JS</a>
				<a>CURSO</a>
				<a>SCRIPT</a>
				<a>TESTE</a>
				<a>AULA</a>
				<a>JAVA</a>
			</div>)}
			{isShownAvancado && (<div id="box_palavras">
				<a>REACT</a>
				<a>DADOS</a>
				<a>JS</a>
				<a>CURSO</a>
				<a>SCRIPT</a>
				<a>TESTE</a>
				<p></p>
				<a>AULA</a>
				<a>JAVA</a>
				<a>LETRAS</a>
				<a>INFORMATICA</a>
				<a>SOPA</a>
			</div>)}
		</div>
	)

}

export default GamePanel;