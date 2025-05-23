import { createReducer, on } from '@ngrx/store';
import { AddressState } from './address.models';
import * as AddressActions from './address.actions';

const initialState: AddressState = {
  addresses: [],
  loading: false,
  error: null,
};

export const addressReducer = createReducer(
  initialState,
  on(AddressActions.loadAddresses, (state) => ({ ...state, loading: true })),
  on(AddressActions.loadAddressesSuccess, (state, { addresses }) => ({
    ...state,
    addresses,
    loading: false,
    error: null,
  })),
  on(AddressActions.loadAddressesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
