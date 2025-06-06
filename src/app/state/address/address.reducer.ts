import { createReducer, on } from '@ngrx/store';
import { AddressState } from './address.models';
import * as AddressActions from './address.actions';

const initialState: AddressState = {
  addresses: [],
  loading: false,
  error: null,
  selectedAddress: null,
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
  })),

  //create
  on(AddressActions.createAddressSuccess, (state, { address }) => ({
    ...state,
    addresses: [...state.addresses, address],
    loading: false,
    error: null,
  })),
  on(AddressActions.createAddressFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  // Load Single
  on(AddressActions.loadAddress, (state) => ({
    ...state,
    loading: true,
    error: null,
    selectedAddress: null,
  })),

  on(AddressActions.loadAddressSuccess, (state, { address }) => ({
    ...state,
    selectedAddress: address,
    loading: false,
  })),

  on(AddressActions.loadAddressFailure, (state, { error }) => ({
    ...state,
    selectedAddress: null,
    loading: false,
    error,
  }))
);
