import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createAPI, setupAPIInterceptors } from '../services/api';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

setupAPIInterceptors(
  api,
  () => store.getState().token
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
