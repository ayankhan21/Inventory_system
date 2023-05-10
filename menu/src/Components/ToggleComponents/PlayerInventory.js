import React from "react";
import '../../App.css'
import Gear from "../Gear";
import Inventory from "../Inventory";

const PlayerInventory = () => {
  return (
    <div>
      <Gear/>
      <Inventory/>
    </div>
  );
};

export default PlayerInventory;
