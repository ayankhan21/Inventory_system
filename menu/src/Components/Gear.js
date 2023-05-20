import { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { equipItem } from "../redux/InventoryActions";
// import ContextMenu from "./ContextMenu";

const Gear = ({
  data,
  setDestination,
  setItem,
  setSource,
  source,
  item,
  destination,
}) => {
  // const [source, setSource] = useState(null);
  // const [item, setItem] = useState(null);
  // const [destination, setDestination] = useState(null);
  // console.log(data)
  const dispatch = useDispatch();

  const handleDragStart = (source, item) => {
    console.log("SETTING SOURCE AND ITEM FROM GEAR");
    setSource(source);
    setItem(item);
  };

  const handleDragEnd = (destination) => {
    console.log("SETTING DESTINATION FROM GEAR");

    setDestination(destination);
    // dispatch(equipItem(props.data,source,item,destination))

    // Dispatch your action here or call the equip function with the updated source, item, and destination values

    // Reset the source, item, and destination values
    // setSource(null);
    // setItem(null);
    // setDestination(null);
  };

  const [gearData, setGearData] = useState(data);
  return (
    <div className="gear box">
      <div
        onDragLeave={() => handleDragEnd(gearData.headwear)}
        className="headwear miniBoxes"
      >
        <span>Headwear</span>
        <p
          draggable
          onDragStart={() =>
            handleDragStart(gearData.headwear, gearData.headwear)
          }
        >
          {gearData && gearData.headwear.name}
        </p>
        {/* <ContextMenu data={gearData}/> */}
      </div>
      <div className="layer">
        <div onDragEnd={() => handleDragEnd(gearData.earwear)} className="earwear miniBoxes">
          <span>Earwear</span>
          <p
            draggable
            onDragStart={() =>
              handleDragStart(gearData.earwear, gearData.earwear)
            }
            
          >
            {gearData && gearData.earwear.name}
          </p>
          {/* <ContextMenu data={gearData}/> */}
        </div>
        <div onDragLeave={() => handleDragEnd(gearData.mask)} className="mask miniBoxes">
          <span>Mask</span>
          <p
            draggable
            onDragStart={() => handleDragStart(gearData.mask, gearData.mask)}
            
          >
            {gearData && gearData.mask.name}
          </p>
        </div>
        <div onDragLeave={() => handleDragEnd(gearData.eyewear)} className="eyewear miniBoxes">
          <span>Eyewear</span>
          <p
            draggable
            onDragStart={() =>
              handleDragStart(gearData.eyewear, gearData.eyewear)
            }
            
          >
            {gearData && gearData.eyewear.name}
          </p>
        </div>
      </div>
      <div className="layer">
        <div onDragLeave={() => handleDragEnd(gearData.leftwrist)} className="leftWrist miniBoxes">
          <span>Left Wrist</span>
          <p
            draggable
            onDragStart={() =>
              handleDragStart(gearData.leftwrist, gearData.leftwrist)
            }
            
          >
            {gearData && gearData.leftwrist.name}
          </p>
        </div>
        <div onDragLeave={() => handleDragEnd(gearData.neckwear)} className="neckwear miniBoxes">
          <span>Neckwear</span>
          <p
            draggable
            onDragStart={() =>
              handleDragStart(gearData.neckwear, gearData.neckwear)
            }
            
          >
            {gearData && gearData.neckwear.name}
          </p>
        </div>
        <div onDragLeave={() => handleDragEnd(gearData.rightwrist)} className="rightWrist miniBoxes">
          <span>Right Wrist</span>
          <p
            draggable
            onDragStart={() =>
              handleDragStart(gearData.rightwrist, gearData.rightwrist)
            }
            
          >
            {gearData && gearData.rightwrist.name}
          </p>
        </div>
      </div>
      <div className="layer">
        <div onDragLeave={() => handleDragEnd(gearData.gloves)} className="gloves miniBoxes">
          <span>Gloves</span>
          <p
            draggable
            onDragStart={() =>
              handleDragStart(gearData.gloves, gearData.gloves)
            }
            
          >
            {gearData && gearData.gloves.name}
          </p>
        </div>
        <div onDragLeave={() => handleDragEnd(gearData.shoes)} className="shoes miniBoxes">
          <span>Shoes</span>
          <p
            draggable
            onDragStart={() => handleDragStart(gearData.shoes, gearData.shoes)}
            
          >
            {gearData && gearData.shoes.name}
          </p>
        </div>
      </div>
      <div onDragLeave={() => handleDragEnd(gearData.front)} className="layer lower">
        <div className="front miniBoxes">
          <span>Front</span>
          <p
            draggable
            onDragStart={() => handleDragStart(gearData.front, gearData.front)}
            
          >
            {gearData && gearData.front.name}
          </p>
        </div>
        <div  className="hands miniBoxes">
          <span>Hands</span>
          <div
            draggable
            onDragStart={() => handleDragStart(gearData.hands, gearData.hands)}
            
          >
            {gearData && gearData.hands.name}
            {gearData &&
              gearData.hands.metadata.toppings.map((e) => {
                return <p>{e}</p>;
              })}
          </div>
        </div>
        <div onDragLeave={() => handleDragEnd(gearData.back)} className="back miniBoxes">
          <span>Back</span>
          <p
            draggable
            onDragStart={() => handleDragStart(gearData.back, gearData.back)}
            
          >
            {gearData && gearData.back.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gear;
