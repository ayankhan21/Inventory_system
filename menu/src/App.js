import "./App.css";
import Player from "./Components/Player";
import Space from "./Components/Space";
import Toggle from "./Components/Toggle";
function App() {
  return (
    <div className="menu">
      <Player />
      <Space />
      <Toggle/>
    </div>
  );
}

export default App;
