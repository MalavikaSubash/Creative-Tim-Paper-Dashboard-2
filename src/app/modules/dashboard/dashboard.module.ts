import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { CapacityCardComponent } from './capacity-card/capacity-card.component';
import { RevenueCardComponent } from './revenue-card/revenue-card.component';
import { FollowersCardComponent } from './followers-card/followers-card.component';
@NgModule({
  declarations: [
    DashboardComponent,
    CapacityCardComponent,
    RevenueCardComponent,
    FollowersCardComponent
  ],

  imports: [CommonModule, DashboardRoutingModule]
})
export class DashboardModule {}
