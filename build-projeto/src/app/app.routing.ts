import { RouterModule, Routes } from '@angular/router';

import { ViewLoginComponent } from './home/view-login/view-login.component';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { TelaInicioComponent } from './home/tela-inicio/tela-inicio.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TelaInicioComponent,
  },
  {
    path: 'login',
    component: ViewLoginComponent,
  },
  {
    path: 'signup',
    component: HomeComponent,
  },
];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
