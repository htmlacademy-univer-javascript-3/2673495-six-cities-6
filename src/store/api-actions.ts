import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer, DetailedOffer } from '../types/offer';
import { AuthInfo, LoginData } from '../types/auth';

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

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  await api.get('/login');
});

export const loginAction = createAsyncThunk<
  AuthInfo,
  LoginData,
  {
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { extra: api }) => {
  const { data } = await api.post<AuthInfo>('/login', { email, password });
  return data;
});
