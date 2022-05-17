import "./control-panel.css";

function ControlPanel () {
    return (
        <main class="main-content">
<section id="control-panel">
<form class="form">
<fieldset class="form-group left">
<label for="btLevel">Dificuldade:</label>
<br></br>
<br></br>
<select id="btLevel">
<option selected value="0">Selecionar...</option>
<option value="1">Simples</option>
<option value="2">Intermédio</option>
<option value="3">Avançado</option>
</select>
</fieldset>
<button type="button" id="btPlay" class="right">Iniciar Jogo</button>
</form>
<div class="form-metadata">
</div>
</section>
</main>
    )
    
}


export default ControlPanel;