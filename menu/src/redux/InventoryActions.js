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

export const getPlayerInventory = () => ({
  type: GET_PLAYER_INVENTORY,
})

export const equipItem = (source, item, destination) => ({
  type: EQUIP_ITEM,
  payload: { source, item, destination },
})

export const unequipItem = (source, item) => ({
  type: UNEQUIP_ITEM,
  payload: { source, item },
})

export const openContainer = (container) => ({
  type: OPEN_CONTAINER,
  payload: container,
})

export const closeContainer = () => ({
  type: CLOSE_CONTAINER,
})

export const emptyContainer = () => ({
  type: EMPTY_CONTAINER,
})

export const inspectItem = (item) => ({
  type: INSPECT_ITEM,
  payload: item,
})

export const searchInventory = (query) => ({
  type: SEARCH_INVENTORY,
  payload: query,
})
