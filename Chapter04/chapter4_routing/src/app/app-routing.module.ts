import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import {ActivateAdminGuard } from './activate-admin.guard';

const routes: Routes = [
  { path: 'home',
    component: HomeComponent,
    children: [
      { path: 'listings',  component: ListingsComponent
      }
    ]
  },
  { path: 'listings/:id',  component: ListingDetailsComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'crud', component: CrudComponent, canActivate:[ActivateAdminGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
