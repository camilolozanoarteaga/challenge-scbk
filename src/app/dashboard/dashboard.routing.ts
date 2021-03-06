import { Routes } from '@angular/router';
import { GuardsService } from '../core/guards/guards.service';
import { AccountMovementComponent } from './account-movement/account-movement.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [GuardsService],
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/dashboard/accounts' },
      {
        path: 'accounts',
        component: AccountsListComponent,
      },
      {
        path: 'accounts-detail/:id',
        component: AccountMovementComponent,
      },
    ],
  },
];
