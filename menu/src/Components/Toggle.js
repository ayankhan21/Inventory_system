import { useState } from "react";
import "../App.css";
import Ground from "./ToggleComponents/Ground";
import PlayerInventory from "./ToggleComponents/PlayerInventory";
import Cabinet from "./ToggleComponents/Cabinet";

const Toggle = () => {
  const [option, setOption] = useState("Ground");

  const handleSelect = (e) => {
    setOption(e.target.value);
  };

  let Component;
  if (option === "Ground") {
    Component = Ground;
  } else if (option === "Player Inventory") {
    Component = PlayerInventory;
  } else if (option === "Cabinet") {
    Component = Cabinet;
  }

  return (
    <div>
      <div className="toggle box">
        <select onChange={handleSelect}>
          <option value="Ground">Ground</option>
          <option value="Player Inventory">Player Inventory</option>
          <option value="Cabinet">Cabinet</option>
        </select>
        <Component />
      </div>
    </div>
  );
};

export default Toggle;
