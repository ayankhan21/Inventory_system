import dummyPlayerInventory, { ItemBaseData } from "../dummydata";

import {
    GET_PLAYER_INVENTORY,
    EQUIP_ITEM,
    UNEQUIP_ITEM,
    OPEN_CONTAINER,
    CLOSE_CONTAINER,
    EMPTY_CONTAINER,
    INSPECT_ITEM,
    SEARCH_INVENTORY
  } from './InventoryTypes'

const INITIAL_STATE = {
  inventoryState: { ...dummyPlayerInventory },
  ground:{...ItemBaseData},
  otherPlayer:{}
};

const inventoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_PLAYER_INVENTORY:
        return {
          ...state,
          inventoryState: action.payload,
        };
      case EQUIP_ITEM:
        return {
          ...state,
          inventoryState: {
            ...state.inventoryState,
            [action.payload.source]: state.inventoryState[action.payload.source].filter(
              (item) => item.id !== action.payload.item.id
            ),
            [action.payload.destination]: [...state.inventoryState[action.payload.destination], action.payload.item],
          },
        };
      case UNEQUIP_ITEM:
        return {
          ...state,
          inventoryState: {
            ...state.inventoryState,
            [action.payload.source]: [...state.inventoryState[action.payload.source], action.payload.item],
            [action.payload.destination]: state.inventoryState[action.payload.destination].filter(
              (item) => item.id !== action.payload.item.id
            ),
          },
        };
      case OPEN_CONTAINER:
        return {
          ...state,
          [action.payload.containerName]: action.payload.containerContents,
        };
      case CLOSE_CONTAINER:
        return {
          ...state,
          [action.payload.containerName]: {},
        };
      case EMPTY_CONTAINER:
        return {
          ...state,
          [action.payload.containerName]: {},
        };
      case INSPECT_ITEM:
        // add code to return updated state
        break;
      case SEARCH_INVENTORY:
        // add code to return updated state
        break;
      default:
        return state;
    }
  };
  

export default inventoryReducer;
