import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { PiechartComponent } from './piechart/piechart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [DashboardComponent, PiechartComponent],
  imports: [CommonModule, DashboardRoutingModule, ChartsModule]
})
export class DashboardModule {}
