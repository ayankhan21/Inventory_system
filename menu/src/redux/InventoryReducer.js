import dummyPlayerInventory from "../dummydata";

const INITIAL_STATE = {
  inventoryState: { ...dummyPlayerInventory },
  ground:{},
  otherPlayer:{}
};

const inventoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case GET_PLAYER_INVENTORY:
    //   return { ...state, mainObj: action.payload };
    default:
      return state;
  }
};

export default inventoryReducer;
