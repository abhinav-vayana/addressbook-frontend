import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddressItemComponent } from './address-item/address-item.component';
import { Address } from './address-item/address.model';
import * as AddressSelectors from '../state/address/address.selectors';
import * as AddressActions from '../state/address/address.actions';
import { AppState } from '@capacitor/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  standalone: false,
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  addresses$ = this.store.select(AddressSelectors.selectAllAddresses);
  loading$ = this.store.select(AddressSelectors.selectLoading);
  error$ = this.store.select(AddressSelectors.selectError);
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(AddressActions.loadAddresses());
  }
  onViewDetails(id: string) {
    this.router.navigate(['/tabs/address/detail', id]);
  }
  onDeleteAddress(id: string) {
    this.store.dispatch(AddressActions.deleteAddress({ id }));
  }
}
