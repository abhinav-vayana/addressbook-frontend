import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressDetailPageRoutingModule } from './address-detail-routing.module';

import { AddressDetailPage } from './address-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressDetailPageRoutingModule
  ],
  declarations: [AddressDetailPage]
})
export class AddressDetailPageModule {}
