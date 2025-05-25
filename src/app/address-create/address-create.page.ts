import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createAddress } from 'src/app/state/address/address.actions';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.page.html',
  standalone: false,
})
export class AddressCreateComponent {
  addressForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.addressForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.addressForm.valid) {
      this.store.dispatch(createAddress({ address: this.addressForm.value }));
    }
  }
}
