import { configureStore } from '@reduxjs/toolkit';
import cardsDataReducer from './slices/MainPageSlice';

export const store = configureStore({
  reducer: {
    cardsData: cardsDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
