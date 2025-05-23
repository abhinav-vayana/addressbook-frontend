import { Component, OnInit } from '@angular/core';
import { AddressItemComponent } from './address-item/address-item.component';
import { Address } from './address-item/address.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  standalone: false,
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  addresses: Address[] = [];
  constructor() {}

  ngOnInit() {
    this.addresses = [
      { id: '1', name: 'Abhi', phone: '123456' },
      { id: '2', name: 'Abhinav', phone: '123456' },
    ];
  }
}
