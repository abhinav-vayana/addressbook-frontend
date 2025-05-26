import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressCreateComponent } from './address-create.page';
import { Router } from '@angular/router';
import { AddressCreateRoutingModule } from './address-create-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddressCreateRoutingModule,
  ],
  declarations: [AddressCreateComponent],
})
export class AddresssCreateModule {}
