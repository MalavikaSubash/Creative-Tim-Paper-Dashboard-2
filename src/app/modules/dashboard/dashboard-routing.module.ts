import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '@app/core';
import { PiechartComponent } from './piechart/piechart.component';
import { CapacityCardComponent } from './capacity-card/capacity-card.component';
import { RevenueCardComponent } from './revenue-card/revenue-card.component';
const routes: Routes = [
  {
    path: 'piechart',
    component: PiechartComponent
  },

  {
    path: 'capacity-card',
    component: CapacityCardComponent
  },
  {
    path: 'revenue-card',
    component: RevenueCardComponent
  },

  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },

  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
