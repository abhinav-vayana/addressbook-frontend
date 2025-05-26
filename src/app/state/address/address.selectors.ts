import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AddressState } from './address.models';

export const selectAddressState =
  createFeatureSelector<AddressState>('address');

export const selectAllAddresses = createSelector(
  selectAddressState,
  (state) => state.addresses
);
export const selectLoading = createSelector(
  selectAddressState,
  (state) => state.loading
);
export const selectError = createSelector(
  selectAddressState,
  (state) => state.error
);

export const selectSelectedAddress = createSelector(
  selectAddressState,
  (state) => state.selectedAddress
);
