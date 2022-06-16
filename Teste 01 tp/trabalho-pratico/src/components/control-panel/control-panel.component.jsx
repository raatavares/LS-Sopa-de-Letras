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
                        <select id="btLevel" /*value={tempo.props}*/>
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



/*
function tempo(props) {
    let tempo;
    if(props.value==="1"){
        return (4);
    }
    if(props.value==="2"){
        return (5);
    }
    if(props.value==="3"){
        return (6);
    }else{
        return (5);
    }
}
*/
//export default tempo;
export default ControlPanel;