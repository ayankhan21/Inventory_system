import "../App.css";
import { useDispatch } from "react-redux";
import Icon from "@mdi/react";
import { mdiMenuLeft } from "@mdi/js";
import { useState } from "react";
import ContextMenu from "./ContextMenu";

const Inventory = ({ data, setDestination, setItem, setSource }) => {
  const [inventoryData, setInventoryData] = useState(data);
  const [visibleItem, setVisibleItem] = useState(null);

  const handleDragStart = (source, item) => {
    console.log("SETTING SOURCE AND ITEM FROM INVENTORY")
    setSource(source);
    setItem(item);
  };

  const handleDragEnd = (destination) => {
    console.log("SETTING DESTINATION FROM INVENTORY")
    setDestination(destination);

    // Dispatch your action here or call the equip function with the updated source, item, and destination values
    // equip(source, item, destination);

    // Reset the source, item, and destination values
    // setSource(null);
    // setItem(null);
    // setDestination(null);
  };

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
        <div onDragLeave={() => handleDragEnd(inventoryData.shirt)} className="shirt miniBoxes">
          <span onClick={() => toggleVisibility("shirt")}>Shirt</span>
          <p
            draggable
            onDragStart={() =>
              handleDragStart(inventoryData.shirt, inventoryData.shirt)
            }
          >
            {inventoryData && inventoryData.shirt.name}
          </p>
        </div>
        <div onDragLeave={() => handleDragEnd(inventoryData.shirt.inventory)} hidden={visibleItem !== "shirt"} className="shirtStorage">
          <div className="shirtItems">
            <div>
              {inventoryData &&
                inventoryData.shirt.inventory.map((e, index) => {
                  return (
                    <p
                      draggable
                      onDragStart={() =>
                        handleDragStart(
                          inventoryData.shirt,
                          inventoryData.shirt.inventory[index]
                        )
                      }
                      
                      className="items"
                      key={index}
                    >
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
        <div onDragLeave={() => handleDragEnd(inventoryData.pants)} className="pants miniBoxes">
          <span onClick={() => toggleVisibility("pants")}>Pants</span>
          <p
            draggable
            onDragStart={() =>
              handleDragStart(inventoryData.pants, inventoryData.pants)
            }
          >
            {inventoryData && inventoryData.pants.name}
          </p>
        </div>
        <div hidden={visibleItem !== "pants"} className="pantsStorage">
          <div onDragLeave={() => handleDragEnd(inventoryData.pants.inventory)}  className="pantItems">
            {inventoryData &&
              inventoryData.pants.inventory.map((e, index) => {
                return (
                  <p
                    draggable
                    onDragStart={() =>
                      handleDragStart(inventoryData.pants, inventoryData.pants.inventory[index])
                    }
                    // onDragLeave={() => handleDragEnd(inventoryData.shirt)}
                    className="items"
                    key={index}
                  >
                    {e.item.name}
                  </p>
                );
              })}
          </div>
          <ContextMenu data={"pants"} />
        </div>
      </div>
      <div className="mainBag">
        <div onDragLeave={() => handleDragEnd(inventoryData.bag)} className="bag miniBoxes">
          <span onClick={() => toggleVisibility("bag")}>Bag</span>
          <p
            draggable
            onDragStart={() =>
              handleDragStart(inventoryData.bag, inventoryData.bag)
            }
          >
            {inventoryData && inventoryData.bag.name}
          </p>
        </div>
        <div hidden={visibleItem !== "bag"} className="bagStorage">
          <div onDragLeave={() => handleDragEnd(inventoryData.bag.inventory)} className="bagItems">
            {inventoryData &&
              inventoryData.bag.inventory.map((e, index) => {
                return (
                  <p
                    draggable
                    onDragStart={() =>
                      handleDragStart(inventoryData.bag, inventoryData.bag.inventory[index])
                    }
                   
                    className="items"
                    key={index}
                  >
                    {e.item.name}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
      <div className="mainVest">
        <div onDragLeave={() => handleDragEnd(inventoryData.bag)} className="vest miniBoxes">
          <span onClick={() => toggleVisibility("vest")}>Vest</span>
          <p
            draggable
            onDragStart={() =>
              handleDragStart(inventoryData.bag, inventoryData.bag)
            }
            
          >
            {inventoryData && inventoryData.vest.name}
          </p>
        </div>
        <div onDragLeave={() => handleDragEnd(inventoryData.bag.inventory)} hidden={visibleItem !== "vest"} className="vestStorage">
          <div className="vestItems">
            {inventoryData &&
              inventoryData.vest.inventory.map((e, index) => {
                return (
                  <p
                    draggable
                    onDragStart={() =>
                      handleDragStart(inventoryData.bag, inventoryData.bag.inventory[index])
                    }
                    
                    className="items"
                    key={index}
                  >
                    {e.item.name}
                  </p>
                );
              })}
          </div>
        </div>
      </div>

      <div className="pockets">
        <span>Pockets</span>
        <div onDragLeave={() => handleDragEnd(inventoryData.pockets)} className="pocketsStorage">
          {inventoryData &&
            inventoryData.pockets.map((e,index) => {
              return (
                <p
                  draggable
                  onDragStart={() =>
                    handleDragStart(inventoryData.pockets, inventoryData.pockets[index])
                  }
                  
                  className="items"
                >
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
