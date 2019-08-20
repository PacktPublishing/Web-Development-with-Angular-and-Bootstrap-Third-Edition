import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { ViewListingComponent } from './view-listing/view-listing.component';
import { DeleteListingComponent } from './delete-listing/delete-listing.component';
import { UpdateListingComponent } from './update-listing/update-listing.component';

import {FormsModule} from '@angular/forms';

import { AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from './firebase-config';
import { AngularFirestore } from '@angular/fire/firestore';
import { AddCommentsComponent } from './add-comments/add-comments.component';
import { EditCommentsComponent } from './edit-comments/edit-comments.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';
import { DeleteCommentsComponent } from './delete-comments/delete-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateListingComponent,
    ViewListingComponent,
    DeleteListingComponent,
    UpdateListingComponent,
    AddCommentsComponent,
    EditCommentsComponent,
    ViewCommentsComponent,
    DeleteCommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
