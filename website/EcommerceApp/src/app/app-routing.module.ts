import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path:'', redirectTo:'products', pathMatch: 'full'
  },
  {
    path: 'getstarted', component:GetStartedComponent
  },
  {
    path: 'login', component:LoginPageComponent
  },
  {
    path: 'home', component:HomeComponent
  },
  {
    path: 'cart', component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
