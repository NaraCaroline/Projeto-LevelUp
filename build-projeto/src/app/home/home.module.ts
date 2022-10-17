import { ViewLoginComponent } from './view-login/view-login.component';
import { ViewCadastroComponent } from './view-cadastro/view-cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';

@NgModule({
  imports: [
  CommonModule,
    BrowserModule
  ],
  declarations: [HomeComponent, ViewCadastroComponent, ViewLoginComponent, TelaInicioComponent],
  exports: [HomeComponent, ViewCadastroComponent, ViewLoginComponent, TelaInicioComponent]})
export class HomeModule { }
