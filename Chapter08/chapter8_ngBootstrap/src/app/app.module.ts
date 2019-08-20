import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PlaygroundComponent } from './playground/playground.component';
import { NgbCollapseComponent } from './ngb-collapse/ngb-collapse.component';
import { NgbModalComponent } from './ngb-modal/ngb-modal.component';
import { NgbCarouselComponent } from './ngb-carousel/ngb-carousel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    NgbCollapseComponent,
    NgbModalComponent,
    NgbCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
