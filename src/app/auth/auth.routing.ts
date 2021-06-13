import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

export const AuthRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];
