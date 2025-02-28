import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from './dictionarySlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
    cart: cartReducer,
  },
});
