import inventoryReducer from './InventoryReducer'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
      inventory: inventoryReducer
    }
  });
export default store