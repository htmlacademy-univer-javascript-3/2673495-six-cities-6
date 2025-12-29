import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer, DetailedOffer } from '../types/offer';

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

export const fetchOfferByIdAction = createAsyncThunk<
  DetailedOffer,
  string,
  {
    extra: AxiosInstance;
  }
>('data/fetchOfferById', async (offerId, { extra: api }) => {
  const { data } = await api.get<DetailedOffer>(`/offers/${offerId}`);
  return data;
});
