import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { CreateListingComponent } from './create-listing/create-listing.component';

const routes: Routes = [
  { path: 'create-listing',
    component: CreateListingComponent
  },
  { path: 'edit-listing',
    component: EditListingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
