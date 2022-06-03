
import Header from "./components/header/header.component"
import ControlPanel from "./components/control-panel/control-panel.component"
import GamePanel from "./components/game-panel/game-panel.component"
import Display from "./components/display/display.component"
import "./assets/styles/App.css";

function App() {
  return (
    <div id="container">
      <Header />
      <main className="main-content">
      <ControlPanel />
      </main>
      <GamePanel />
      <aside>
        <div>
        <Display text="Pontuação:" />
        <Display text="Tempo:" />
        </div>
      </aside>
    </div>
  );
}
export default App;
