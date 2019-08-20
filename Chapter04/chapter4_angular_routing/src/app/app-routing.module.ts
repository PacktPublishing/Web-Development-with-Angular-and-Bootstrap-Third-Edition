import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';

const routes: Routes = [
  { path: 'home',
    component: HomeComponent,
    children: [
      { path: 'listings',  component: ListingsComponent
      }
    ]
  },
  { path: 'listings/:id',  component: ListingDetailsComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
