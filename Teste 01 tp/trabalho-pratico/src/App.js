
import Header from "./components/header/header.component"
import ControlPanel from "./components/control-panel/control-panel.component"
import GamePanel from "./components/game-panel/game-panel.component"
import Score from "./components/score/score.component"
import "./assets/styles/App.css";

function App() {
  return (
    <div id="container">
      <Header />
      <main className="main-content">
      <ControlPanel />
      </main>
      <GamePanel />
      <Score />
    </div>
  );
}
export default App;
