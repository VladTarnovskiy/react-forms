import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface InitialState {
  cardsData: Array;
}

const initialState: InitialState = {
  cardsData: [],
};

const cardsDataSlice = createSlice({
  name: 'cardsData',
  initialState,
  reducers: {
    addCard(state, { payload }) {
      state.cardsData = state.cardsData.push(payload);
    },
  },
});

export const { addCard } = cardsDataSlice.actions;

export const selectSearchValue = (state: RootState) =>
  state.cardsData.cardsData;

export default cardsDataSlice.reducer;
