import { SignUpComponent } from './componnets/auth/sign-up/sign-up.component';
import { SignInComponent } from './componnets/auth/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './componnets/auth/auth.component';
import { WelcomeComponent } from './componnets/welcome/welcome.component';
import { HomeComponent } from './componnets/home/home.component';
import { NotFound404Component } from './componnets/not-found404/not-found404.component';

const routes: Routes = [
  {
    path:'',
    component:WelcomeComponent
  },
  {
    path:'auth',
    component:AuthComponent,
    children: [
      {path: 'signIn', component: SignInComponent},
      {path: 'signUp', component: SignUpComponent}
    ]
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'**',
    component:NotFound404Component
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
