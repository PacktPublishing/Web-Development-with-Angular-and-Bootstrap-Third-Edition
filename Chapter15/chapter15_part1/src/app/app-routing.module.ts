import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListImagesComponent} from './list-images/list-images.component';
const routes: Routes = [
  {
    path:'list-images',
    component:ListImagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
