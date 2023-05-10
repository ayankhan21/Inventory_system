import "./App.css";
import Gear from "./Components/Gear";
import Inventory from "./Components/Inventory";
import Toggle from "./Components/Storage";
function App() {
  return (
    <div className="menu">
      <Gear/>
      <Inventory/>
      <Toggle/>
    </div>
  );
}

export default App;
