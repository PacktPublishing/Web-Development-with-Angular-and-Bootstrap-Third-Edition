import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { JacketListComponent } from '../../projects/jackets/src/app/jacket-list/jacket-list.component';
import { VendorsComponent } from '../../projects/vendors/src/lib/vendors.component';

const routes: Routes = [
  {
    path:'home',
    component:AppComponent
  },
  {
    path:'list-jackets',
    component:JacketListComponent
  },
  {
    path:'list-vendors',
    component:VendorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
