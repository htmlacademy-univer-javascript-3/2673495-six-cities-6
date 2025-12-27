import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const fetchOffersAction = createAsyncThunk<
  Offer[],
  undefined,
  {
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<Offer[]>('/offers');
  return data;
});
