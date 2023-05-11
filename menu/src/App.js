import { useEffect , useState} from "react";
import "./App.css";
import axios from 'axios'
import Gear from "./Components/Gear";
import Inventory from "./Components/Inventory";
import Toggle from "./Components/Storage";
import dummyPlayerInventory, { ItemBaseData } from "./dummydata";
function App() {
  const [playerData, setPlayerData] = useState(dummyPlayerInventory);
  // const [itemBaseData,setItemBaseData] = useState(itemBaseData)
  // useEffect(() => {
  //   axios.get('/your-endpoint')
  //     .then(response => {
  //       setPlayerInventory(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []); 
  // useEffect(()=>{
  //   setPlayerInventory(PlayerInventory)
  // },[])
  // console.log(ItemBaseData)
  return (
    <div className="menu">
      <Gear data = {playerData}/>
      <Inventory data = {playerData}/>
      <Toggle data = {ItemBaseData}/>
    </div>
  );
}

export default App;
