import { useEffect , useState } from "react";
import "./App.css";
import axios from "axios";
import Gear from "./Components/Gear";
import Inventory from "./Components/Inventory";
import Storage from "./Components/Storage";
import { useDispatch, useSelector } from "react-redux";
import { getPlayerInventory } from "./redux/InventoryActions";

function App() {

  const [source, setSource] = useState(null);
  const [sourceObj,setSourceObj] = useState(null);
  const [item, setItem] = useState(null);
  const [destinationObj,setDestinationObj] = useState(null)
  const [destination, setDestination] = useState(null);


  const playerInventory = useSelector(
    (state) => state.inventory.inventoryState
  );
  const otherData = useSelector((state) => state.inventory.ground);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   axios.get("/YOUR-URL").then((res) => {
  //     const mainObject = res.data;
  //     dispatch(getPlayerInventory(mainObject));
  //   });
  // },[]);
  console.log(source,"source")
  console.log(sourceObj,"SpurceObj")
  console.log(item,"item")
  console.log(destination,"Destination")
  console.log(destinationObj,"destinationObj")

  return (
    <div className="menu">
      <Gear source={source} item={item} destination={destination} setSource={setSource} setSourceObj={setSourceObj} setDestinationObj={setDestinationObj} setItem={setItem} setDestination={setDestination}  data={playerInventory} />
      <Inventory source={source} item={item} destination={destination} setSource={setSource} setSourceObj={setSourceObj} setDestinationObj={setDestinationObj} setItem={setItem} setDestination={setDestination}  data={playerInventory} />
      <Storage source={source} item={item} destination={destination} setSource={setSource} setItem={setItem} setSourceObj={setSourceObj} setDestinationObj={setDestinationObj} setDestination={setDestination}  data={otherData} />
    </div>
  );
}

export default App;
