import {useState} from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import ContextMenu from "./ContextMenu";

const Gear = (props) => {
  const [gearData, setGearData] = useState(props.data);
  return (
    <div className="gear box">
      <div draggable className="headwear miniBoxes">
        <span>Headwear</span>
        <p>{gearData && gearData.headwear.name}</p>
      </div>
      <div draggable className="layer">
        <div className="earwear miniBoxes">
          <span>Earwear</span>
          {gearData && gearData.earwear.name}
        </div>
        <div draggable className="mask miniBoxes">
          <span>Mask</span>
          {gearData && gearData.mask.name}
        </div>
        <div draggable className="eyewear miniBoxes">
          <span>Eyewear</span>
          {gearData && gearData.eyewear.name}
        </div>
      </div>
      <div className="layer">
        <div draggable className="leftWrist miniBoxes">
          <span>Left Wrist</span>
          {gearData && gearData.leftwrist.name}
        </div>
        <div draggable className="neckwear miniBoxes">
          <span>Neckwear</span>
          {gearData && gearData.neckwear.name}
        </div>
        <div draggable className="rightWrist miniBoxes">
          <span>Right Wrist</span>
          {gearData && gearData.rightwrist.name}
        </div>
      </div>
      <div className="layer">
        <div draggable className="gloves miniBoxes">
          <span>Gloves</span>
          {gearData && gearData.gloves.name}
        </div>
        <div draggable className="shoes miniBoxes">
          <span>Shoes</span>
          {gearData && gearData.shoes.name}
        </div>
      </div>
      <div className="layer lower">
        <div draggable className="front miniBoxes">
          <span>Front</span>
          <p>{gearData && gearData.front.name}</p>
        </div>
        <div draggable className="hands miniBoxes">
          <span>Hands</span>
          {gearData && gearData.hands.name}
          {gearData && gearData.hands.metadata.toppings.map((e)=>{
            return <p>{e}</p>
          })}
        </div>
        <div draggable className="back miniBoxes">
          <span>Back</span>
          <p>{gearData && gearData.back.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Gear;
