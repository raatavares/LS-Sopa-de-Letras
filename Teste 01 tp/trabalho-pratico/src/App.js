
import Header from "./components/header/header.component"
import ControlPanel from "./components/control-panel/control-panel.component"
import "./assets/styles/App.css";

function App() {
  return (
    <div id="container">
      <Header />
      <main className="main-content">
      <ControlPanel />
      </main>
    </div>
  );
}

export default App;
