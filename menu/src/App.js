import { useEffect , useState} from "react";
import "./App.css";
import axios from 'axios'
import Gear from "./Components/Gear";
import Inventory from "./Components/Inventory";
import Toggle from "./Components/Storage";
import dummyPlayerInventory, { ItemBaseData } from "./dummydata";
function App() {
  const [playerData, setPlayerData] = useState(dummyPlayerInventory);
  return (
    <div className="menu">
      <Gear data = {playerData}/>
      <Inventory data = {playerData}/>
      <Toggle data = {ItemBaseData}/>
    </div>
  );
}

export default App;
