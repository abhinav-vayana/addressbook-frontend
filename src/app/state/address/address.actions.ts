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
//Delete
export const deleteAddress = createAction(
  '[Address] Delete Address',
  props<{ id: string }>()
);

export const deleteAddressSuccess = createAction(
  '[Address] Delete Address Success',
  props<{ id: string }>()
);

export const deleteAddressFailure = createAction(
  '[Address] Delete Address Failure',
  props<{ error: string }>()
);
//create
export const createAddress = createAction(
  '[Address] Create Address',
  props<{ address: Address }>()
);
export const createAddressSuccess = createAction(
  '[Address] Create Address Success',
  props<{ address: Address }>()
);
export const createAddressFailure = createAction(
  '[Address] Create Address Failure',
  props<{ error: string }>()
);
//get single address
export const loadAddress = createAction(
  '[Address] Load Address',
  props<{ id: string }>()
);

export const loadAddressSuccess = createAction(
  '[Address] Load Address Success',
  props<{ address: Address }>()
);

export const loadAddressFailure = createAction(
  '[Address] Load Address Failure',
  props<{ error: string }>()
);
