import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ICardItem {
  name: string;
  age: string;
  email: string;
  password: string;
  passwordRep: string;
  gender: string;
  photo: string;
  rules: boolean;
}

interface InitialState {
  cardsData: ICardItem[];
}

const initialState: InitialState = {
  cardsData: [],
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

export default cardsDataSlice.reducer;
