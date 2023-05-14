import "../App.css";
import { useDispatch } from "react-redux";
import Icon from "@mdi/react";
import { mdiMenuLeft } from "@mdi/js";
import { useState } from "react";

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
        <div
          draggable
          className="shirt miniBoxes"
          onClick={() => toggleVisibility("shirt")}
        >
          <span>Shirt</span>
          {inventoryData && inventoryData.shirt.name}
        </div>
        <div hidden={visibleItem !== "shirt"} className="shirtStorage">
        {inventoryData &&
            inventoryData.shirt.inventory.map((e, index) => {
              return <p key={index}>{e.item.name}</p>;
            })}
        </div>
      </div>
      <div className="mainPants">
        <div
          draggable
          className="pants miniBoxes"
          onClick={() => toggleVisibility("pants")}
        >
          <span>Pants</span>
          {inventoryData && inventoryData.pants.name}
        </div>
        <div hidden={visibleItem !== "pants"} className="pantsStorage">
        {inventoryData &&
            inventoryData.pants.inventory.map((e, index) => {
              return <p key={index}>{e.item.name}</p>;
            })}
        </div>
      </div>
      <div className="mainBag">
        <div
          draggable
          className="bag miniBoxes"
          onClick={() => toggleVisibility("bag")}
        >
          <span>Bag</span>
          {inventoryData && inventoryData.bag.name}
        </div>
        <div hidden={visibleItem !== "bag"} className="bagStorage">
          {inventoryData &&
            inventoryData.bag.inventory.map((e, index) => {
              return <p key={index}>{e.item.name}</p>;
            })}
        </div>
      </div>
      <div className="mainVest">
        <div draggable className="vest miniBoxes" onClick={() => toggleVisibility("vest")}>
          <span>Vest</span>
          {inventoryData && inventoryData.vest.name}
        </div>
        <div hidden={visibleItem !== "vest"} className="vestStorage">
          {inventoryData &&
            inventoryData.vest.inventory.map((e, index) => {
              return <p key={index}>{e.item.name}</p>;
            })}
        </div>
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
