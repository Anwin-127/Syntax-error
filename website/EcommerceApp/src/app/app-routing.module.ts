import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetstartedComponent } from './getstarted/getstarted.component';

const routes: Routes = [
  {
    path: 'home', component:HomeComponent
  },
  {
    path: 'getstarted', component:GetstartedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
