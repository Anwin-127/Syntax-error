import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path:'', redirectTo:'products', pathMatch: 'full'
  },
  {
    path: 'home', component:HomeComponent
  },
  {
    path: 'login', component:LoginPageComponent
  },
  {
    path: 'products', component:ProductsComponent
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
