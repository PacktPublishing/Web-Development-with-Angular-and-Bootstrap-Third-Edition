import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { DadComponent } from './dad/dad.component';
import { SonComponent } from './dad/son.component';
import { PreviewListingComponent } from './preview-listing/preview-listing.component';
import { PhotoListingComponent } from './photo-listing/photo-listing.component';
import { PreviewPhotosComponent } from './preview-photos/preview-photos.component';
@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    DadComponent,
    SonComponent,
    PreviewListingComponent,
    PhotoListingComponent,
    PreviewPhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
