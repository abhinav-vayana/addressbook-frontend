import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AddressItemComponent } from '../address/address-item/address-item.component';
import { AddressPage } from '../address/address.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../address/address.module').then((m) => m.AddressPageModule),
      },
      {
        path: 'address',
        loadChildren: () =>
          import('../address/address.module').then((m) => m.AddressPageModule),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('../address-create/address-create.module').then(
            (m) => m.AddresssCreateModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
