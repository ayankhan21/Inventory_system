import "../App.css";
import Icon from "@mdi/react";
import { mdiMenuLeft } from "@mdi/js";
import { useState } from "react";

const Inventory = (props) => {
  const [inventoryData, setInventoryData] = useState(props.data);
  // console.log(inventoryData.shirt.inventory)
  return (
    <div className="inventory box">
      <div className="mainShirt">
        <div draggable className="shirt miniBoxes">
          <span>
            Shirt
            <Icon path={mdiMenuLeft} size={1} />
          </span>
          {inventoryData && inventoryData.shirt.name}
        </div>
        <div className="shirtStorage">
          {inventoryData && inventoryData.shirt.inventory[0].item.name}
        </div>
      </div>
      <div className="mainPants">
        <div draggable className="pants miniBoxes">
          <span>Pants</span>
          {inventoryData && inventoryData.pants.name}
        </div>
        <div className="pantsStorage"></div>
      </div>

      <div draggable className="bag miniBoxes">
        <span>Bag</span>
        {inventoryData && inventoryData.bag.name}
      </div>
      <div draggable className="vest miniBoxes">
        <span>Vest</span>
        {inventoryData && inventoryData.vest.name}
      </div>
      <div draggable className="pockets miniBoxes">
        <span>Pockets</span>
        <div className="pocketsStorage">
          {inventoryData &&
            inventoryData.pockets.map((e) => {
              return (
                <p draggable className="items">
                  {e.item.name}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
