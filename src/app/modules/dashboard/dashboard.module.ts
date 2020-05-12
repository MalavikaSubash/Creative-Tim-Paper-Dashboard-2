import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { FollowersCardComponent } from './followers-card/followers-card.component';
import { LineChartDataPointsComponent } from './line-chart-data-points/line-chart-data-points.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardComponent,
    FollowersCardComponent,
    LineChartDataPointsComponent
  ],
  imports: [CommonModule, DashboardRoutingModule, ChartsModule]
})
export class DashboardModule {}
