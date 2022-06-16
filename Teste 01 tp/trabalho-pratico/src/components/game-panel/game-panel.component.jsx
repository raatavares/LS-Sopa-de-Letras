import { useState } from "react";
import { useEffect } from "react";
import "./game-panel.css"
import "./array-table.js"

const btLevel = document.querySelector('#btLevel');

/* let palavras = ['TESTE', 'AULA', 'JAVA', 'DISCORD'];
function letras (){
	palavras.split 
} */

function GamePanel () {
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
*/
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
	
	const [result,setResult]=useState('');

	function makeid(length) {
		var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var charactersLength = characters.length;
		for ( var i = 0; i < length; i++ ) {
		  	setResult(result + characters.charAt(Math.floor(Math.random() * 
	 		charactersLength)));
	   }
	}

	function changeStyle() {
		if(document.getElementById("letra").style.backgroundColor === "orange"){
			document.getElementById("letra").style.backgroundColor = "white";
		}else{
			document.getElementById("letra").style.backgroundColor = "orange";
		}
		
	}

    return (
		<table id="table">
			<tr>
			    <td id="letra" onClick={changeStyle}>Q</td>
                <td>W</td>
                <td>D</td>
				<td>A</td>
				<td>P</td>
				<td>Y</td>
				<td>T</td>
			</tr>

			<tr>
				<td>A</td>
				<td>O</td>
				<td>U</td>
				<td>V</td>
				<td>Z</td>
				<td>X</td>
				<td>F</td>
			</tr>

			<tr>
				<td>S</td>
				<td>K</td>
				<td>J</td>
				<td>L</td>
				<td>S</td>
				<td>H</td>
				<td>G</td>
			</tr>

			<tr>
				<td>D</td>
				<td>A</td>
				<td>N</td>
				<td>L</td>
				<td>Q</td>
				<td>B</td>
				<td>C</td>
			</tr>

			<tr>
				<td>U</td>
				<td>T</td>
				<td>I</td>
				<td>M</td>
				<td>J</td>
				<td>E</td>
				<td>P</td>
			</tr>
		</table>
	)

}

export default GamePanel;