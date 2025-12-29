import { createAction } from '@reduxjs/toolkit';
import { SortOption } from '../components/sorting-options';

export const changeCity = createAction<string>('changeCity');
export const changeSortOption = createAction<SortOption>('changeSortOption');
export const setAuthorizationStatus = createAction<'AUTH' | 'NO_AUTH'>(
  'setAuthorizationStatus'
);
