import { useEffect, useState } from "react";
import "../App.css";
// import PlayerInventory from "../Dataset";


const Gear = (props) => {
  const [gearData, setGearData] = useState(props.data);
  console.log(gearData)
  return (
    <div className="gear box">
      <div className="headwear miniBoxes">
        <span>Headwear</span>
        {gearData && gearData.headwear.name}
      </div>
      <div className="layer">
        <div className="earwear miniBoxes">
          <span>Earwear</span>
          {gearData && gearData.earwear.name}
        </div>
        <div className="mask miniBoxes">
          <span>Mask</span>
          {gearData && gearData.mask.name}
        </div>
        <div className="eyewear miniBoxes">
          <span>Eyewear</span>
          {gearData && gearData.eyewear.name}
        </div>
      </div>
      <div className="layer">
        <div className="leftWrist miniBoxes">
          <span>Left Wrist</span>
          {gearData && gearData.leftwrist.name}
        </div>
        <div className="neckwear miniBoxes">
          <span>Neckwear</span>
          {gearData && gearData.neckwear.name}
        </div>
        <div className="rightWrist miniBoxes">
          <span>Right Wrist</span>
          {gearData && gearData.rightwrist.name}
        </div>
      </div>
      <div className="layer">
        <div className="gloves miniBoxes">
          <span>Gloves</span>
          {gearData && gearData.gloves.name}
        </div>
        <div className="shoes miniBoxes">
          <span>Shoes</span>
          {gearData && gearData.shoes.name}
        </div>
      </div>
      <div className="layer lower">
        <div className="front miniBoxes">
          <span>Front</span>
          {gearData && gearData.front.name}
        </div>
        <div className="hands miniBoxes">
          <span>Hands</span>
          {gearData && gearData.hands.name}
        </div>
        <div className="back miniBoxes">
          <span>Back</span>
          {gearData && gearData.back.name}
        </div>
      </div>
    </div>
  );
};

export default Gear;
