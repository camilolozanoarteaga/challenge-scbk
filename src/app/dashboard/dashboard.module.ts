import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountMovementComponent } from './account-movement/account-movement.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    AccountsComponent,
    AccountsListComponent,
    AccountMovementComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(DashboardRoutes), SharedModule],
  bootstrap: [DashboardComponent],
})
export class DashboardModule {}
