import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {CreateCaracterComponent} from './pages/create-caracter-page/create-caracter.component';
import {UserHomePageComponent} from './pages/user-home-page/user-home-page.component';
import {UserCaractersPageComponent} from './pages/user-caracters-page/user-caracters-page.component';


const routes: Routes = [
  {path: 'user-caracters/:id', component: UserCaractersPageComponent},
  {path: 'user-home/:id', component: UserHomePageComponent},
  {path: 'create-caracter', component: CreateCaracterComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
