// contacts.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
// import { AddressPage } from './address.page';
import { RouterModule, Routes } from '@angular/router';
import { AddressItemComponent } from './address-item/address-item.component';
import { AddressPage } from './address.page';
// contact
const routes: Routes = [
  {
    path: '',
    component: AddressPage,
  },
];

@NgModule({
  declarations: [AddressItemComponent, AddressPage],
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
})
export class AddressPageModule {}
