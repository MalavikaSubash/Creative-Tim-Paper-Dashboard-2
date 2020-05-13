import { Component, OnInit, ViewChild } from '@angular/core';
import { Label, Color, BaseChartDirective } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-user-behaviour-chart',
  templateUrl: './user-behaviour-chart.component.html',
  styleUrls: ['./user-behaviour-chart.component.scss']
})
export class UserBehaviourChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    {
      data: [0, 8, 10, 13, 20, 25, 30, 35, 42, 44, 57, 63],
      label: 'Tesla Model S'
    },
    {
      data: [0, 20, 18, 21, 30, 40, 38, 50, 22, 30, 50, 70],
      label: 'BMW 5 Series'
    },
    {
      data: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      label: 'Audi'
    }
  ];

  public lineChartLabels: Label[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          ticks: {
            suggestedMin: 10,
            suggestedMax: 200
          }
        }
      ]
    }
  };

  public lineChartColors: Color[] = [
    {
      // green
      backgroundColor: 'rgba(114, 194, 114)',
      borderColor: 'rgba(114, 194, 114)',
      pointRadius: 0
    },
    {
      // red
      backgroundColor: 'rgba(255, 125, 19)',
      borderColor: 'rgba(255, 125, 19)',
      pointRadius: 0
    },
    {
      // yellow
      backgroundColor: 'rgba(255, 207, 74)',
      borderColor: 'rgba(255, 207, 74)',
      pointRadius: 0
    }
  ];

  public lineChartLegend = false;
  public lineChartType = 'line';

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);
  }

  constructor() {}

  ngOnInit() {
    this.randomize();
  }
}
