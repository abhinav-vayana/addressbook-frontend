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
  fieldLabels: { [key: string]: string } = {
    firstname: 'First name',
    lastname: 'Last name',
    email: 'Email',
    phonenumber: 'Phone number',
    address: 'Address',
  };

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

  isFieldInvalid(field: string): boolean {
    const control = this.addressForm.get(field);
    return !!control && control.invalid && control.touched;
  }

  getErrorMessage(field: string): string {
    const control = this.addressForm.get(field);
    if (control?.hasError('required')) {
      return `${field} is required`;
    }
    if (field === 'email' && control?.hasError('email')) {
      return `Invalid email address`;
    }
    return '';
  }
}
