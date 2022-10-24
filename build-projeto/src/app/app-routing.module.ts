import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewLoginComponent } from './home/view-login/view-login.component';
import { TelaInicioComponent } from './home/tela-inicio/tela-inicio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: TelaInicioComponent,
  },
  {
    path: 'login',
    component: ViewLoginComponent,
  },
  {
    path: 'sign-up',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
