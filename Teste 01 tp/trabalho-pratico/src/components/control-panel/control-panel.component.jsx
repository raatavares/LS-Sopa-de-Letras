import "./control-panel.css";

function ControlPanel () {
    return (
        <main className="main-content">
<section id="control-panel">
<form className="form">
<fieldset className="form-group left">
<label for="btLevel">Dificuldade:</label>
<br></br>
<br></br>
<select id="btLevel">
<option value="0">Selecionar...</option>
<option value="1">Simples</option>
<option value="2">Intermédio</option>
<option value="3">Avançado</option>
</select>
</fieldset>
<button type="button" id="btPlay">Iniciar Jogo</button>
</form>
<div className="form-metadata">
</div>
</section>
</main>
    )
    
}


export default ControlPanel;