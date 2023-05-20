import {
  GET_PLAYER_INVENTORY,
  EQUIP_ITEM,
  UNEQUIP_ITEM,
  SET_SOURCE,
  SET_ITEM,
  SET_DESTINATION,
  EMPTY_CONTAINER,
  SEARCH_INVENTORY
} from './InventoryTypes'

export const getPlayerInventory = (payload) => ({
  type: GET_PLAYER_INVENTORY,
  payload: payload,
})

export const equipItem = (source, item, destination) => ({
  type: EQUIP_ITEM,
  payload: { source, item, destination },
})

export const unequipItem = (source, item) => ({
  type: UNEQUIP_ITEM,
  payload: { source, item },
})

export const setSource = (source) => ({
  type: SET_SOURCE,
  payload: source,
})

export const setItem = (item) => ({
  type: SET_ITEM,
  payload: item
})

export const setDestination = (destination) => ({
  type: SET_DESTINATION,
  payload: destination,
})

export const emptyContainer = () => ({
  type: EMPTY_CONTAINER,
})


export const searchInventory = (query) => ({
  type: SEARCH_INVENTORY,
  payload: query,
})
