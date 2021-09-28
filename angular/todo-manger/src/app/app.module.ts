import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './componnets/auth/auth.component';
import { SignInComponent } from './componnets/auth/sign-in/sign-in.component';
import { SignUpComponent } from './componnets/auth/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './componnets/navbar/navbar.component';
import { WelcomeComponent } from './componnets/welcome/welcome.component';
import { HomeComponent } from './componnets/home/home.component';
import { FormComponent } from './componnets/home/form/form.component';
import { ListComponent } from './componnets/home/list/list.component';
import { ListItemComponent } from './componnets/home/list-item/list-item.component';
import { NotFound404Component } from './componnets/not-found404/not-found404.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    WelcomeComponent,
    HomeComponent,
    FormComponent,
    ListComponent,
    ListItemComponent,
    NotFound404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
