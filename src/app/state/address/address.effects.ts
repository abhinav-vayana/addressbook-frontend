import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AddressActions from './address.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AddressApiService } from 'src/app/core/service/address-api.service';

@Injectable()
export class AddressEffects {
  constructor(
    private actions$: Actions,
    private addressApi: AddressApiService
  ) {}

  // Load
  loadAddresses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddressActions.loadAddresses),
      mergeMap(() =>
        this.addressApi.getAllAddress().pipe(
          map((addresses) =>
            AddressActions.loadAddressesSuccess({ addresses })
          ),
          catchError((error) =>
            of(AddressActions.loadAddressesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Delete
  deleteAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddressActions.deleteAddress),
      mergeMap(({ id }) =>
        this.addressApi.deleteAddress(id).pipe(
          map(() => AddressActions.deleteAddressSuccess({ id })),
          catchError((error) =>
            of(AddressActions.deleteAddressFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
