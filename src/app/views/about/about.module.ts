import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { AboutRoutingModule } from './about-routing.module';
import {AboutComponent } from './about/about.component';
// import { MatDatepickerModule } from '@angular/material/datepicker'; 
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
// import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    // MatDatepickerModule,
    // BrowserAnimationsModule
  ]
})
export class AboutModule { }
