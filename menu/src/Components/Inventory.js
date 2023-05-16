import "../App.css";
import { useDispatch } from "react-redux";
import Icon from "@mdi/react";
import { mdiMenuLeft } from "@mdi/js";
import { useState } from "react";
import ContextMenu from "./ContextMenu";

const Inventory = (props) => {
  const [inventoryData, setInventoryData] = useState(props.data);
  const [visibleItem, setVisibleItem] = useState(null);

  const toggleVisibility = (itemName) => {
    if (visibleItem === itemName) {
      setVisibleItem(null);
    } else {
      setVisibleItem(itemName);
    }
  };
  return (
    <div className="inventory box">
      <div className="mainShirt">
        <div draggable className="shirt miniBoxes">
          <span onClick={() => toggleVisibility("shirt")}>Shirt</span>
          {inventoryData && inventoryData.shirt.name}
        </div>
        <div hidden={visibleItem !== "shirt"} className="shirtStorage">
          <div className="shirtItems">
            <div>
              {inventoryData &&
                inventoryData.shirt.inventory.map((e, index) => {
                  return (
                    <p draggable className="items" key={index}>
                      {e.item.name}
                    </p>
                  );
                })}
            </div>
            <ContextMenu data={"shirt"} />
          </div>
        </div>
      </div>
      <div className="mainPants">
        <div draggable className="pants miniBoxes">
          <span onClick={() => toggleVisibility("pants")}>Pants</span>
          {inventoryData && inventoryData.pants.name}
        </div>
        <div hidden={visibleItem !== "pants"} className="pantsStorage">
          <div className="pantItems">
            {inventoryData &&
              inventoryData.pants.inventory.map((e, index) => {
                return (
                  <p draggable className="items" key={index}>
                    {e.item.name}
                  </p>
                );
              })}
          </div>
          <ContextMenu data={"pants"} />
        </div>
      </div>
      <div className="mainBag">
        <div draggable className="bag miniBoxes">
          <span onClick={() => toggleVisibility("bag")}>Bag</span>
          {inventoryData && inventoryData.bag.name}
        </div>
        <div hidden={visibleItem !== "bag"} className="bagStorage">
          <div className="bagItems">
            {inventoryData &&
              inventoryData.bag.inventory.map((e, index) => {
                return (
                  <p draggable className="items" key={index}>
                    {e.item.name}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
      <div className="mainVest">
        <div draggable className="vest miniBoxes">
          <span onClick={() => toggleVisibility("vest")}>Vest</span>
          {inventoryData && inventoryData.vest.name}
        </div>
        <div hidden={visibleItem !== "vest"} className="vestStorage">
          <div className="vestItems">
            {inventoryData &&
              inventoryData.vest.inventory.map((e, index) => {
                return (
                  <p draggable className="items" key={index}>
                    {e.item.name}
                  </p>
                );
              })}
          </div>
        </div>
      </div>

      <div draggable className="pockets">
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
