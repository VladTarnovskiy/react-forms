import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ICardItemForm {
  name: string;
  age: number;
  email: string;
  password: string;
  passwordRep: string;
  gender: string;
  photo: string;
  rules: boolean;
}

export interface ICardItem {
  name: string;
  age: number;
  email: string;
  password: string;
  passwordRep: string;
  gender: string;
  photo?: FileList | undefined;
  rules?: boolean | undefined;
}

interface InitialState {
  cardsData: ICardItemForm[];
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
