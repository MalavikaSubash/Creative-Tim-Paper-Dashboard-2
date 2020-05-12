import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { FollowersCardComponent } from './followers-card/followers-card.component';

@NgModule({
  declarations: [DashboardComponent, FollowersCardComponent],
  imports: [CommonModule, DashboardRoutingModule]
})
export class DashboardModule {}
