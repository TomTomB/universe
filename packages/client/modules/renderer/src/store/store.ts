import { configureStore } from '@reduxjs/toolkit';
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import { initLCU } from './core';
import { lcuReducer, settingsReducer, windowReducer } from './slices';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    window: windowReducer,
    lcu: lcuReducer,
  },
});

initLCU();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
