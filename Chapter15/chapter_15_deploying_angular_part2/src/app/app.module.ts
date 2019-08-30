import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JacketListComponent } from '../../projects/jackets/src/app/jacket-list/jacket-list.component';
import { VendorsComponent } from '../../projects/vendors/src/lib/vendors.component';

@NgModule({
  declarations: [
    AppComponent,
    JacketListComponent,
    VendorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
