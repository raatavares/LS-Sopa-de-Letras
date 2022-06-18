import { useCallback, useState } from "react";
import { useEffect } from "react";
import "./game-panel.css"
import {randomLeter} from "./array-table.js"

const btLevel = document.querySelector('#btLevel');

/* let palavras = ['TESTE', 'AULA', 'JAVA', 'DISCORD'];
function letras (){
	palavras.split 
} */

function GamePanel (props) {
	const {selectedLevel, updatePontuacao, updateFinalJogo, numPalavras, dimensao} = props;
	/* const level = btLevel.selectedIndex;
	let linhas;
	let colunas;
	if(level === 1){linhas = 10; colunas = 10};
    if(level === 2){linhas = 15; colunas = 15};
    if(level === 3){linhas = 20; colunas = 20};
	let table = document.createElement('table');

	let tr = document.createElement('tr');
	let td = document.createElement('td');
	for(let i = 0; i < linhas; i++){
		table.appendChild(tr);

		for(let i = 0; i < colunas; i++) {
			tr.appendChild(td)
		}
	}

	function MarcarPalavras (){
		let mouseDown = 0;
    	document.body.onmousedown = function () {
      		++mouseDown;
    	};
    	document.body.onmouseup = function () {
      		--mouseDown;
    	};
		if(mouseDown){
			document.td.classList.add('marcado')
		}
	} 
*/	

	/*function changeStyle(this) {
		this.style.backgroundColor
		if(document.getElementById("letra").style.backgroundColor === "orange"){
			document.getElementById("letra").style.backgroundColor = "white";
		}else{
			document.getElementById("letra").style.backgroundColor = "orange";
		}
		
	}*/
	
	const [palavra, setPalavra] = useState("");
	const arrayOfObjects = [ "DADOS", "REACT" ];
	const [palavrasCertas, setPalavrasCertas] = useState(1);

	useEffect(()=>{
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
							if(palavrasCertas === 2)
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
			<table id="table">
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
				</tr>

				<tr>
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
			</table>
			<div id="box_palavras">
				<a>React</a>
				<a>Dados</a>
				<a>JavasScript</a>
				<a>Dados</a>
				<a>React</a>
			</div>
		</div>
	)

}

export default GamePanel;