import dummyPlayerInventory, { ItemBaseData } from "../dummydata";
import { equipItem, unequipItem } from "./InventoryActions";

import {
  GET_PLAYER_INVENTORY,
  EQUIP_ITEM,
  UNEQUIP_ITEM,
  // OPEN_CONTAINER,
  // CLOSE_CONTAINER,
  EMPTY_CONTAINER,
  // INSPECT_ITEM,
  // SEARCH_INVENTORY,
} from "./InventoryTypes";

const INITIAL_STATE = {
  inventoryState: { ...dummyPlayerInventory },
  ground: { ...ItemBaseData },
  otherPlayer: {},
  furniture: { ...ItemBaseData },
};

function unequip(mainObj,source, item) {
  console.log(Object.keys(ItemBaseData).length);
  if (source.hasOwnProperty("inventory")) {
    // Check if the object has an inventory
    const inventory = source.inventory;
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].item.name === item.name) {
        inventory.splice(i, 1);
        console.log(
          `${item.name} has been removed from ${source.name}'s inventory`
        );
        return;
      }
    }
    console.log(`${item.name} is not in ${source.name}'s inventory`);
  } else {
    // If the slot does not have an inventory
    console.log(`${source.name} is being emptied`);
    Object.keys(source).forEach((key) => delete source[key]);
  }
  // pushing the item to the ground for now
  ItemBaseData[item.name] = {
    ...item,
  };
  console.log(Object.keys(ItemBaseData).length);
}

// let obj = {
//   id: 765885656,
//   name: "WEAPON_BROKENBOTTLE",
//   attachments: {},
//   metadata: { durability: 10 },
//   rotated: true,
// };

// unequip(bag, obj);

function canEquip(destination, item) {
  if (destination.hasOwnProperty("clothingData")) {
    // If the destination is one of the clothing items with inventory
    if (destination.inventory[0].hasOwnProperty("size")) {
      const limit = 20; // based on [5,4] slots
      let itemSize = item.size[0] * item.size[1];
      let current_capacity = null;
      const inventory = destination.inventory;
      inventory.map((e) => {
        current_capacity += e.item.size;
      });
      if (current_capacity < limit && current_capacity + itemSize) {
        return true;
      } else {
        return false;
      }
    } else {
      console.log("no size prop");
      return true;
    }
  } else {
    // pockets
    const limit = 10; // Based on [5,2] slots
    let itemSize = item.size[0] * item.size[1];
    let current_capacity = null;
    const inventory = destination.inventory;
    inventory.map((e) => {
      current_capacity += e.item.size;
    });
    if (current_capacity < limit && current_capacity + itemSize) {
      return true;
    } else {
      return false;
    }
  }
}

// console.log(canEquip(bag, obj));

function equip(sourceObj,src, item,destinationObj,dest) {
  let updatedSource = {...sourceObj}
  let updatedDestination = {...destinationObj}
  console.log(updatedSource[src]);
  console.log(item);
  console.log(updatedDestination[dest]);
  console.log("BEFORE EQUIPING");
  if (updatedDestination[dest].hasOwnProperty("inventory")) { // Check if slot has inventory
    if (canEquip(updatedDestination[dest], item)) { // Check if it has spacce
      updatedDestination[dest].inventory = [...dest.inventory, { ...item }];
      console.log("inside");
      unequip(updatedSource[src], item);
    } else {
      alert("NO SPACE");
    }
  } else { // Equiping an item with no inventory
    let isEmpty = true;
    for (const prop in dest) { // Check if the object is empty
      isEmpty = false;
      break;
    }
    if (isEmpty) {
      for (const prop in item) {
        updatedDestination[dest][prop] = item[prop]; // Equip directly
      }
    } else {
      unequip(updatedDestination[dest], item); // remove the existing data and push new item data
      for (const prop in item) {
        updatedDestination[dest][prop] = item[prop];
      }
    }
  }
  unequip(updatedSource[src], item);
  console.log("AFTER EQUIPING");
  console.log(updatedSource[src]);
  console.log(item);
  console.log(updatedDestination[dest]);
  return {updatedSource,updatedDestination}
}

let hands = {
  id: 894748444,
  name: "burger",
  metadata: { toppings: ["bun", "patty", "lettuce", "bun"] },
};

// equip(front, back, hands);

const inventoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PLAYER_INVENTORY:
      return {
        ...state,
        inventoryState: action.payload,
      };
      case EQUIP_ITEM: {
        const { source, sourceObj, item, destinationObj, destination } = action.payload;
        // Call the equip function with the payload variables
        const { updatedSource, updatedDestination } = equip(state[sourceObj], source, item, state[destinationObj], destination);
        
        return {
          ...state,
          // Update the corresponding properties in the state
          [sourceObj]: updatedSource,
          [destinationObj]: updatedDestination
        };
      }
      
      
    case UNEQUIP_ITEM:
      // unequip() with the parameters
      return {
        ...state,
        // inventoryState: {}, update the state with the unequips result
      };

    case EMPTY_CONTAINER:
      return {
        ...state,
        [action.payload.containerName]: {},
      };
    // Rest of the cases

    default:
      return state;
  }
};

export default inventoryReducer;
