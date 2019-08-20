import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { TrucksComponent } from './trucks/trucks.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
  {
    path:'list-cars',
    component:CarsComponent
  },
  {
    path:'list-trucks',
    component:TrucksComponent
  },
  { path: 'list-cars/:id', component: CarDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
