import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ICardItemForm } from '@/types/types';

interface InitialState {
  cardsData: ICardItemForm[];
  countries: string[];
}

const initialState: InitialState = {
  cardsData: [],
  countries: ['USA', 'Belarus', 'China', 'India'],
};

const cardsDataSlice = createSlice({
  name: 'cardsData',
  initialState,
  reducers: {
    addCard(state, { payload }) {
      state.cardsData = [...state.cardsData, payload];
    },
  },
});

export const { addCard } = cardsDataSlice.actions;

export const selectCardsData = (state: RootState) => state.cardsData.cardsData;
export const selectCountries = (state: RootState) => state.cardsData.countries;

export default cardsDataSlice.reducer;
