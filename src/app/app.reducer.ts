import { ActionReducerMap } from '@ngrx/store';
import { addressReducer } from './state/address/address.reducer';
import { AddressState } from './state/address/address.models';

export interface AppState {
  address: AddressState;
}

export const appReducer: ActionReducerMap<AppState> = {
  address: addressReducer,
};
