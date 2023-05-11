import { useEffect , useState} from "react";
import "./App.css";
import axios from 'axios'
import Gear from "./Components/Gear";
import Inventory from "./Components/Inventory";
import Toggle from "./Components/Storage";
import PlayerInventory from "./Dataset";
function App() {
  const [playerData, setPlayerData] = useState(PlayerInventory);
  
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
  // console.log(playerData)
  return (
    <div className="menu">
      <Gear data = {playerData}/>
      <Inventory data = {playerData}/>
      <Toggle/>
    </div>
  );
}

export default App;
