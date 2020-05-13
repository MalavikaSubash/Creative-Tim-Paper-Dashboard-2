import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { PiechartComponent } from './piechart/piechart.component';
import { ChartsModule } from 'ng2-charts';
import { CapacityCardComponent } from './capacity-card/capacity-card.component';
import { RevenueCardComponent } from './revenue-card/revenue-card.component';
import { FollowersCardComponent } from './followers-card/followers-card.component';
import { LineChartDataPointsComponent } from './line-chart-data-points/line-chart-data-points.component';
import { UserBehaviourChartComponent } from './user-behaviour-chart/user-behaviour-chart.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CapacityCardComponent,
    RevenueCardComponent,
    FollowersCardComponent,
    LineChartDataPointsComponent,
    PiechartComponent,
    UserBehaviourChartComponent
  ],

  imports: [CommonModule, DashboardRoutingModule, ChartsModule]
})
export class DashboardModule {}
