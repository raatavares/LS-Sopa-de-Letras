import { useState } from "react";
import { useEffect } from "react";
import "./game-panel.css"
import {randomLeter} from "./array-table.js"

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

	useEffect(()=>{
		for(let node of document.querySelectorAll("td")) {
			if(node.textContent != "") continue;
			let charcode = Math.round(65 + Math.random() * 25)
			node.textContent = String.fromCharCode(charcode)
		}
	
	});

	const handleClick = (event, arg1) => {
		if(document.getElementById(arg1).style.backgroundColor === "orange"){
			document.getElementById(arg1).style.backgroundColor = "white";
		}else{
			document.getElementById(arg1).style.backgroundColor = "orange";
		}
		
	}

    return (
		<table id="table" onLoad={randomLeter}>
			<tr>
			    <td id="letra00" onClick={(event)=>handleClick(event,"letra00")}></td>
                <td id="letra01" onClick={(event)=>handleClick(event,"letra01")}></td>
                <td id="letra02" onClick={(event)=>handleClick(event,"letra02")}>D</td>
				<td id="letra03" onClick={(event)=>handleClick(event,"letra03")}></td>
				<td id="letra04" onClick={(event)=>handleClick(event,"letra04")}></td>
				<td id="letra05" onClick={(event)=>handleClick(event,"letra05")}></td>
				<td id="letra06" onClick={(event)=>handleClick(event,"letra06")}></td>
			</tr>

			<tr>
				<td id="letra"></td>
				<td id="letra"></td>
				<td id="letra">A</td>
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
			</tr>

			<tr>
				<td id="letra"></td>
				<td id="letra"></td>
				<td id="letra">O</td>
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
			</tr>
		</table>
	)

}

export default GamePanel;