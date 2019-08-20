import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AutoListComponent } from './auto-list/auto-list.component';
import { UsedCarsComponent } from './used-cars/used-cars.component';

const routes: Routes = [
  {
    path:'home',
    component:AppComponent
  },
  {
    path:'list-auto',
    component:AutoListComponent
  },
  {
    path:'list-used-cars',
    component:UsedCarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
