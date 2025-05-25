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
