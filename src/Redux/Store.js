import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import outletReducer from './Slices/outletSlice';

const rootReducer = combineReducers({
  outlets: outletReducer,
})

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
})