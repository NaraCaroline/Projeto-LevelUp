import { ViewLoginComponent } from './view-login/view-login.component';
import { ViewCadastroComponent } from './view-cadastro/view-cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { routing } from './../app.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    RouterModule,
  ],
  declarations: [
    HomeComponent,
    ViewCadastroComponent,
    ViewLoginComponent,
    TelaInicioComponent,
  ],
  exports: [
    HomeComponent,
    ViewCadastroComponent,
    ViewLoginComponent,
    TelaInicioComponent,
  ],
})
export class HomeModule {}
