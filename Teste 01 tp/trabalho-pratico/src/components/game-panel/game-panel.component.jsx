const btLevel = document.querySelector('#btLevel');



/* let palavras = ['TESTE', 'AULA', 'JAVA', 'DISCORD'];
function letras (){
	palavras.split 
} */

function GamePanel () {
	const level = btLevel.selectedIndex;
	let linhas;
	let colunas;
	if(level === 1){linhas = 10; colunas = 10};
    if(level === 2){linhas = 15; colunas = 15};
    if(level === 3){linhas = 20; colunas = 20};
	let table = document.createElement('table');

	let tr = document.createElement('tr');
	let th = document.createElement('th');
	for(let i = 0; i < linhas; i++){
		table.appendChild(tr);

		for(let i = 0; i < colunas; i++) {
			
		}
	}

    return (
        <form>
		<table className="table">
			<tr>
				<th width="30" height="30">R</th>
				<th width="30" height="30">O</th>
				<th width="30" height="30">M</th>
				<th width="30" height="30">A</th>
				<th width="30" height="30">S</th>
				<th width="30" height="30">C</th>
				<th width="30" height="30">R</th>
				<th width="30" height="30">C</th>
				<th width="30" height="30">P</th>
				<th width="30" height="30">T</th>
				<th width="30" height="30">Z</th>
			</tr>

			<tr>
				<th width="30" height="30">M</th>
				<th width="30" height="30">N</th>
				<th width="30" height="30">K</th>
				<th width="30" height="30">O</th>
				<th width="30" height="30">P</th>
				<th width="30" height="30">R</th>
				<th width="30" height="30">A</th>
				<th width="30" height="30">O</th>
				<th width="30" height="30">C</th>
				<th width="30" height="30">H</th>
				<th width="30" height="30">L</th>
			</tr>

			<tr>
				<th width="30" height="30">Z</th>
				<th width="30" height="30">Q</th>
				<th width="30" height="30">I</th>
				<th width="30" height="30">S</th>
				<th width="30" height="30">T</th>
				<th width="30" height="30">E</th>
				<th width="30" height="30">U</th>
				<th width="30" height="30">I</th>
				<th width="30" height="30">X</th>
				<th width="30" height="30">E</th>
				<th width="30" height="30">P</th>
			</tr>

			<tr>
				<th width="30" height="30">J</th>
				<th width="30" height="30">C</th>
				<th width="30" height="30">D</th>
				<th width="30" height="30">T</th>
				<th width="30" height="30">O</th>
				<th width="30" height="30">J</th>
				<th width="30" height="30">F</th>
				<th width="30" height="30">M</th>
				<th width="30" height="30">O</th>
				<th width="30" height="30">H</th>
				<th width="30" height="30">I</th>
			</tr>

			<tr>
				<th width="30" height="30">L</th>
				<th width="30" height="30">O</th>
				<th width="30" height="30">N</th>
				<th width="30" height="30">D</th>
				<th width="30" height="30">R</th>
				<th width="30" height="30">E</th>
				<th width="30" height="30">S</th>
				<th width="30" height="30">B</th>
				<th width="30" height="30">E</th>
				<th width="30" height="30">R</th>
				<th width="30" height="30">A</th>
			</tr>

			<tr>
				<th width="30" height="30">Z</th>
				<th width="30" height="30">Q</th>
				<th width="30" height="30">M</th>
				<th width="30" height="30">X</th>
				<th width="30" height="30">H</th>
				<th width="30" height="30">U</th>
				<th width="30" height="30">R</th>
				<th width="30" height="30">R</th>
				<th width="30" height="30">V</th>
				<th width="30" height="30">Z</th>
				<th width="30" height="30">M</th>
			</tr>

			<tr>
				<th width="30" height="30">V</th>
				<th width="30" height="30">Y</th>
				<th width="30" height="30">N</th>
				<th width="30" height="30">J</th>
				<th width="30" height="30">A</th>
				<th width="30" height="30">G</th>
				<th width="30" height="30">L</th>
				<th width="30" height="30">A</th>
				<th width="30" height="30">R</th>
				<th width="30" height="30">T</th>
				<th width="30" height="30">I</th>
			</tr>

			<tr>
				<th width="30" height="30">T</th>
				<th width="30" height="30">B</th>
				<th width="30" height="30">E</th>
				<th width="30" height="30">O</th>
				<th width="30" height="30">K</th>
				<th width="30" height="30">N</th>
				<th width="30" height="30">I</th>
				<th width="30" height="30">Q</th>
				<th width="30" height="30">F</th>
				<th width="30" height="30">D</th>
				<th width="30" height="30">R</th>
			</tr>

			<tr>
				<th width="30" height="30">A</th>
				<th width="30" height="30">Q</th>
				<th width="30" height="30">O</th>
				<th width="30" height="30">D</th>
				<th width="30" height="30">N</th>
				<th width="30" height="30">E</th>
				<th width="30" height="30">R</th>
				<th width="30" height="30">P</th>
				<th width="30" height="30">A</th>
				<th width="30" height="30">Z</th>
				<th width="30" height="30">F</th>
			</tr>

			<tr>
				<th width="30" height="30">H</th>
				<th width="30" height="30">J</th>
				<th width="30" height="30">D</th>
				<th width="30" height="30">C</th>
				<th width="30" height="30">P</th>
				<th width="30" height="30">L</th>
				<th width="30" height="30">A</th>
				<th width="30" height="30">B</th>
				<th width="30" height="30">X</th>
				<th width="30" height="30">T</th>
				<th width="30" height="30">Z</th>
			</tr>

			<tr>
				<th width="30" height="30">P</th>
				<th width="30" height="30">O</th>
				<th width="30" height="30">R</th>
				<th width="30" height="30">T</th>
				<th width="30" height="30">O</th>
				<th width="30" height="30">S</th>
				<th width="30" height="30">M</th>
				<th width="30" height="30">D</th>
				<th width="30" height="30">X</th>
				<th width="30" height="30">U</th>
				<th width="30" height="30">S</th>
			</tr>
		</table>
	</form>

    )

}

export default GamePanel;