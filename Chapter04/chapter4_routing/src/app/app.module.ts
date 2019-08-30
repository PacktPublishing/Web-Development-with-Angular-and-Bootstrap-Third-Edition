import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { CrudComponent } from './crud/crud.component';
import {ActivateAdminGuard } from './activate-admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ListingsComponent,
    ListingDetailsComponent,
	CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ActivateAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
