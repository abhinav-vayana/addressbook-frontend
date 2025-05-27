import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AddressActions from './address.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AddressApiService } from 'src/app/service/address-api.service';

@Injectable()
export class AddressEffects {
  constructor(
    private actions$: Actions,
    private addressApi: AddressApiService
  ) {}

  // Load all addresses
  loadAddresses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddressActions.loadAddresses),
      mergeMap(() =>
        this.addressApi.getAllAddress().pipe(
          map((response: any) =>
            AddressActions.loadAddressesSuccess({ addresses: response.data })
          ),
          catchError((error) =>
            of(AddressActions.loadAddressesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Delete address
  deleteAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddressActions.deleteAddress),
      mergeMap(({ id }) =>
        this.addressApi.deleteAddress(id).pipe(
          map(
            () => AddressActions.deleteAddressSuccess({ id }) // assuming response.data returns the ID
          ),
          catchError((error) =>
            of(AddressActions.deleteAddressFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Create address
  createAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddressActions.createAddress),
      mergeMap(({ address }) =>
        this.addressApi.createAddress(address).pipe(
          map((created) =>
            AddressActions.createAddressSuccess({ address: created })
          ),
          catchError((error) =>
            of(AddressActions.createAddressFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Get single address
  loadAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddressActions.loadAddress),
      mergeMap(({ id }) =>
        this.addressApi.getAddressById(id).pipe(
          map((response: any) =>
            AddressActions.loadAddressSuccess({ address: response.data })
          ),
          catchError((error) =>
            of(AddressActions.loadAddressFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Update address
  updateAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddressActions.updateAddress),
      mergeMap(({ address }) =>
        this.addressApi.updateAddress(address).pipe(
          map((updatedAddress) =>
            AddressActions.updateAddressSuccess({ address: updatedAddress })
          ),
          catchError((error) =>
            of(AddressActions.updateAddressFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
