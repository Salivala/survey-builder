import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignInFormComponent } from './sign-in/sign-in-form/sign-in-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpFormComponent } from './sign-up/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    HomeComponent,
    SignInFormComponent,
    SignUpComponent,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
