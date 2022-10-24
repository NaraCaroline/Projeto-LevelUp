import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewLoginComponent } from './home/view-login/view-login.component';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
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
  RouterModule.forRoot(APP_ROUTES);
