import { useState } from "react";
import "../App.css";
import Ground from "./ToggleComponents/Ground";
import PlayerInventory from "./ToggleComponents/PlayerInventory";
import Furniture from "./ToggleComponents/Furniture";

const Storage = ({ data, setDestination, setItem, setSource ,source,item,destination,setDestinationObj,setSourceObj }) => {
  const [option, setOption] = useState("Player Inventory");

  const handleSelect = (e) => {
    setOption(e.target.value);
  };

  let Component;
  if (option === "Ground") {
    Component = Ground;
  } else if (option === "Player Inventory") {
    Component = PlayerInventory;
  } else if (option === "Furniture") {
    Component = Furniture;
  }

  return (
      <div className="storage box">
        <select style={{position:'sticky'}} onChange={handleSelect}>
          <option value="Ground">Ground</option>
          <option value="Player Inventory">Player Inventory</option>
          <option value="Furniture">Furniture</option>
        </select>
        {option === "Player Inventory" ? <input type="text" placeholder="Search" name="" id="" /> : null}
        <Component source={source} item={item} setSourceObj={setSourceObj} setDestinationObj={setDestinationObj} destination={destination} setSource={setSource} setItem={setItem} setDestination={setDestination} />
      </div>
  );
};

export default Storage;
