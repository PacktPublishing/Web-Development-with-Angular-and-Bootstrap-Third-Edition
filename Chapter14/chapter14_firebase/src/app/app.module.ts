import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormControl,NgForm } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomFormValidationComponent } from './custom-form-validation/custom-form-validation.component';
import { ValidISBNDirective } from './valid-isbn.directive';

export const environment = {
  production: false,
  auth0: {
    domain: 'srinix.auth0.com',
    clientId: 'USSLa5ZybkVTTy4PJ-KQSTE-KnhTPgeX',
    callbackURL: 'http://localhost:4200/login'
  }
};

export const firebaseConfig = {
     apiKey: "AIzaSyDeiCPdgl6LdKD9_LQ5qujllEuxBcnoPM4",
    authDomain: "autostop-20517.firebaseapp.com",
    databaseURL: "https://autostop-20517.firebaseio.com",
    projectId: "autostop-20517",
    storageBucket: "autostop-20517.appspot.com",
    messagingSenderId: "763776172857"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ProfileComponent,
    CustomFormValidationComponent,
    ValidISBNDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AngularFireAuth, AngularFireDatabaseModule, AngularFireModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
