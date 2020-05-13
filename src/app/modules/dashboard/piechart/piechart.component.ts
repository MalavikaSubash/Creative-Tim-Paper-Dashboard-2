import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective, Color } from 'ng2-charts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {
  public pieChartLabels = ['Unopened', 'Opened', 'Read', 'Deleted'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartColors = [
    {
      backgroundColor: ['#e3e3e3', '#51cbce', '#fbc658', '#ef8157']
    }
  ];
  public pieChartType = 'pie';
  public pieChartLegend = false;

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() {}

  public randomize(): void {
    for (let i = 0; i < this.pieChartData.length; i++) {
      {
        this.pieChartData[i] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor(Math.random() * 1000 + 1);
  }
  ngOnInit() {
    this.randomize();
  }
}
