import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ActivateAdminGuard } from './activate-admin.guard';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormControl,Validators, NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    PaymentPageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ActivateAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
