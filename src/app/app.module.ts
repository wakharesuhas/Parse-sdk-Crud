import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FisrtComponent } from './fisrt/fisrt.component';
import { FormsModule, NgForm } from "@angular/forms";
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { CollegeComponent } from './college/college.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { CallService } from 'src/app/call.service';
// import { ModalModule } from 'ngx-bootstrap/modal';
// import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    FisrtComponent,
    StudentdetailsComponent,
    CollegeComponent,


    PagenotfoundComponent,
    StudentregistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,    
    // ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
