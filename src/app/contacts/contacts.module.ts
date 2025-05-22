// contacts.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ContactsPage } from './contacts.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContactsPage,
  },
];

@NgModule({
  declarations: [ContactsPage],
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
})
export class ContactsPageModule {}
