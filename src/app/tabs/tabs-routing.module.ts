import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'address',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../address/address.module').then(
                (m) => m.AddressPageModule
              ),
          },
          {
            path: 'detail/:id',
            loadChildren: () =>
              import('../address/address-detail/address-detail.module').then(
                (m) => m.AddressDetailPageModule
              ),
          },
          {
            path: 'edit/:id',
            loadChildren: () =>
              import('../address-create/address-create.module').then(
                (m) => m.AddresssCreateModule
              ),
          },
        ],
      },
      {
        path: 'create',
        loadChildren: () =>
          import('../address-create/address-create.module').then(
            (m) => m.AddresssCreateModule
          ),
      },

      {
        path: '',
        redirectTo: 'address',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
