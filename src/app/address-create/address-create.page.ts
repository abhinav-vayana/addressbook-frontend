import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  createAddress,
  loadAddress,
} from 'src/app/state/address/address.actions';
import { selectSelectedAddress } from '../state/address/address.selectors';
import * as AddressActions from 'src/app/state/address/address.actions';
@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.page.html',
  standalone: false,
})
export class AddressCreateComponent implements OnInit {
  isSubmitted = false;
  isEditMode = false;
  addressForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.addressForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', Validators.required],
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.store.dispatch(AddressActions.loadAddress({ id }));
      this.store.select(selectSelectedAddress).subscribe((address) => {
        if (address) {
          this.addressForm.patchValue(address);
        }
      });
    }
  }

  onSubmit() {
    if (this.addressForm.valid) {
      const address = { ...this.addressForm.value };
      if (this.isEditMode) {
        address.id = this.route.snapshot.paramMap.get('id');
        this.store.dispatch(AddressActions.updateAddress({ address }));
      } else {
        this.store.dispatch(AddressActions.createAddress({ address }));
      }

      this.isSubmitted = true;
      setTimeout(() => {
        this.router.navigate(['/tabs/address']);
      }, 1000);
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
    if (field === 'phonenumber' && control?.hasError('pattern')) {
      return `Phone number must be exactly 10 digits`;
    }
    return '';
  }
}
