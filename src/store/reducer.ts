import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortOption } from './action';
import { SortOption } from '../components/sorting-options';
import { fetchOffersAction } from './api-actions';
import { Offer } from '../types/offer';

const initialState: {
  city: string;
  offers: Offer[];
  sortOption: SortOption;
  isLoading: boolean;
} = {
  city: 'Paris',
  offers: [],
  sortOption: 'Popular',
  isLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortOption, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(fetchOffersAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchOffersAction.rejected, (state) => {
      state.isLoading = false;
    });
});
