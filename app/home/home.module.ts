import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ViewLoginComponent } from './view-login/view-login.component';



@NgModule({
  declarations: [
    HomeComponent,
    ViewLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ViewLoginComponent
  ]
})
export class HomeModule { }
