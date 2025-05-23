import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { AddressApiService } from '../../core/services/address-api.service';
// import { AddressApiService } from '../../core/services/address-api.service';
import * as AddressActions from './address.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AddressApiService } from 'src/app/core/service/address-api.service';

@Injectable()
export class AddressEffects {
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

  constructor(
    private actions$: Actions,
    private addressApi: AddressApiService
  ) {}
}
