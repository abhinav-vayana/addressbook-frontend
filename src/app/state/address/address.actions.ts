import { createAction, props } from '@ngrx/store';
import { Address } from './address.models';

export const loadAddresses = createAction('[Address] Load Addresses');
export const loadAddressesSuccess = createAction(
  '[Address] Load Addresses Success',
  props<{ addresses: Address[] }>()
);
export const loadAddressesFailure = createAction(
  '[Address] Load Addresses Failure',
  props<{ error: string }>()
);
