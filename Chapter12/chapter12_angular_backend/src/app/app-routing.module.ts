import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateListingComponent} from './update-listing/update-listing.component';
import {CreateListingComponent} from './create-listing/create-listing.component';
import {ViewListingComponent} from './view-listing/view-listing.component';
import {DeleteListingComponent} from './delete-listing/delete-listing.component';

import { AddCommentsComponent } from './add-comments/add-comments.component';
import { EditCommentsComponent } from './edit-comments/edit-comments.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';
import { DeleteCommentsComponent } from './delete-comments/delete-comments.component';

const routes: Routes = [
  { path:'create-listing', component:CreateListingComponent },
  { path:'view-listing', component:ViewListingComponent },
  { path:'delete-listing/:id', component:DeleteListingComponent},
  { path:'update-listing/:id', component:UpdateListingComponent},
  { path:'add-comment', component:AddCommentsComponent },
  { path:'view-comment', component:ViewCommentsComponent },
  { path:'delete-comment/:id', component:DeleteCommentsComponent},
  { path:'update-comment/:id', component:EditCommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
