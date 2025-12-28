import { createAction } from '@reduxjs/toolkit';
import { SortOption } from '../components/sorting-options';

export const changeCity = createAction<string>('changeCity');
export const changeSortOption = createAction<SortOption>('changeSortOption');

