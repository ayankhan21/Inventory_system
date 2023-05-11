import "../App.css";
import Icon from '@mdi/react';
import { mdiMenuLeft } from '@mdi/js';
import { useState } from "react";

const Inventory = (props) => {
  const [inventoryData,setInventoryData] = useState(props.data)
  return (
    <div className="inventory box">
      <div className="mainShirt">
        <div className="shirt miniBoxes">
          <span>Shirt<Icon path={mdiMenuLeft} size={1} /></span>
          {inventoryData && inventoryData.shirt.name}
        </div>
        <div className="shirtStorage"></div>
      </div>
      <div className="mainPants">
        <div className="pants miniBoxes">
          <span>Pants</span>
          {inventoryData && inventoryData.pants.name}
        </div>
        <div className="pantsStorage"></div>
      </div>

      <div className="bag miniBoxes">
        <span>Bag</span>
        {inventoryData && inventoryData.bag.name}
      </div>
      <div className="vest miniBoxes">
        <span>Vest</span>
        {inventoryData && inventoryData.vest.name}
      </div>
      <div className="pockets miniBoxes">
        <span>Pockets</span>
        <div className="pocketsStorage">
        {inventoryData && inventoryData.pockets.map((e)=>{
          return <p draggable className="items">{e.item.name}</p>
        })}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
