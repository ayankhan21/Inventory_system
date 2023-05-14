import { useEffect , useState} from "react";
import "./App.css";
import axios from 'axios'
import Gear from "./Components/Gear";
import Inventory from "./Components/Inventory";
import Toggle from "./Components/Storage";
import { useSelector } from "react-redux";
function App() {
  const playerInventory = useSelector(state => state.inventory.inventoryState);
  const otherData = useSelector(state => state.inventory.ground)
  return (
    <div className="menu">
      <Gear data = {playerInventory}/>
      <Inventory data = {playerInventory}/>
      <Toggle data = {otherData}/>
    </div>
  );
}

export default App;
