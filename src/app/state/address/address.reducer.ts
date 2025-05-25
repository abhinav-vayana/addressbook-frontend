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

  //get
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
  })),

  // Delete
  on(AddressActions.deleteAddress, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AddressActions.deleteAddressSuccess, (state, { id }) => ({
    ...state,
    addresses: state.addresses.filter((addr) => addr.id !== id),
    loading: false,
    error: null,
  })),
  on(AddressActions.deleteAddressFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
