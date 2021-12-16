import { configureStore } from '@reduxjs/toolkit';
import outletReducer from './Slices/outletSlice';

export const store = configureStore({
  reducer: {
      outlets: outletReducer
  },
})