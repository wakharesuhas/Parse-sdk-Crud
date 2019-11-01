import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FisrtComponent } from './fisrt/fisrt.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { CollegeComponent } from './college/college.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';

const routes: Routes = [
  {
    path:'', redirectTo:'customer', pathMatch:'full'
  },
  {
    path:'customer', component: FisrtComponent
  },
  
  {
    path:'customerlist', component:CollegeComponent
  },
  {
    path:'**', component:PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
