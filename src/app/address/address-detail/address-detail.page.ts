import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AddressSelectors from 'src/app/state/address/address.selectors';
import { Address } from '../address-item/address.model';
import * as AddressActions from 'src/app/state/address/address.actions';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.page.html',
  styleUrls: ['./address-detail.page.scss'],
  standalone: false,
})
export class AddressDetailPage implements OnInit {
  address$!: Observable<Address | null>;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.dispatch(AddressActions.loadAddress({ id }));
      this.address$ = this.store.select(AddressSelectors.selectSelectedAddress);
    }
  }
}
