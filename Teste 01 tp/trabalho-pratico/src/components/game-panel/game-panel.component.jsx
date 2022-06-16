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

	/*function changeStyle(this) {
		this.style.backgroundColor
		if(document.getElementById("letra").style.backgroundColor === "orange"){
			document.getElementById("letra").style.backgroundColor = "white";
		}else{
			document.getElementById("letra").style.backgroundColor = "orange";
		}
		
	}*/

	const handleClick = (event, arg1) => {
		if(document.getElementById(arg1).style.backgroundColor === "orange"){
			document.getElementById(arg1).style.backgroundColor = "white";
		}else{
			document.getElementById(arg1).style.backgroundColor = "orange";
		}
		
	}

    return (
		<table id="table">
			<tr>
			    <td id="letra00" onClick={(event)=>handleClick(event,"letra00")}>Q</td>
                <td id="letra01" onClick={(event)=>handleClick(event,"letra01")}>W</td>
                <td id="letra02" onClick={(event)=>handleClick(event,"letra02")}>D</td>
				<td id="letra03" onClick={(event)=>handleClick(event,"letra03")}>A</td>
				<td id="letra04" onClick={(event)=>handleClick(event,"letra04")}>P</td>
				<td id="letra05" onClick={(event)=>handleClick(event,"letra05")}>Y</td>
				<td id="letra06" onClick={(event)=>handleClick(event,"letra06")}>T</td>
			</tr>

			<tr>
				<td id="letra">A</td>
				<td id="letra">O</td>
				<td id="letra">U</td>
				<td id="letra">V</td>
				<td id="letra">Z</td>
				<td id="letra">X</td>
				<td id="letra">F</td>
			</tr>

			<tr>
				<td id="letra">S</td>
				<td id="letra">K</td>
				<td id="letra">J</td>
				<td id="letra">L</td>
				<td id="letra">S</td>
				<td id="letra">H</td>
				<td id="letra">G</td>
			</tr>

			<tr>
				<td id="letra">D</td>
				<td id="letra">A</td>
				<td id="letra">N</td>
				<td id="letra">L</td>
				<td id="letra">Q</td>
				<td id="letra">B</td>
				<td id="letra">C</td>
			</tr>

			<tr>
				<td id="letra">U</td>
				<td id="letra">T</td>
				<td id="letra">I</td>
				<td id="letra">M</td>
				<td id="letra">J</td>
				<td id="letra">E</td>
				<td id="letra">P</td>
			</tr>
		</table>
	)

}

export default GamePanel;