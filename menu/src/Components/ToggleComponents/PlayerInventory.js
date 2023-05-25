import React from "react";
import '../../App.css'
import Gear from "../Gear";
import Inventory from "../Inventory";

const PlayerInventory = () => {

  return (
    <div className="playerInventory">
      <Gear obj={'otherPlayer'} className="toggleGear"/>
      <Inventory obj={'otherPlayer'} className="toggleInventory"/>
    </div>
  );
};

export default PlayerInventory;
