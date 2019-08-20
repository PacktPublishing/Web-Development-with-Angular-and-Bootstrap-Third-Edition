import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AutoListComponent } from './auto-list/auto-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule  } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { UsedCarsComponent } from './used-cars/used-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AutoListComponent,
    UsedCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterTestingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
