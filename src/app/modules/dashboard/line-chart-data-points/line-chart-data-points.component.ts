import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-chart-data-points',
  templateUrl: './line-chart-data-points.component.html',
  styleUrls: ['./line-chart-data-points.component.scss']
})
export class LineChartDataPointsComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    {
      data: [0, 8, 10, 13, 20, 25, 30, 35, 42, 44, 57, 63],
      label: 'Tesla Model S'
    },
    {
      data: [0, 20, 18, 21, 30, 40, 38, 50, 22, 30, 50, 70],
      label: 'BMW 5 Series'
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
      yAxes: [{}]
    }
  };

  public lineChartColors: Color[] = [
    {
      // blue
      backgroundColor: 'rgba(255, 255, 255,0.1)',
      borderColor: 'rgba(27, 202, 255,1)',
      pointBackgroundColor: 'rgba(27, 202, 255,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148, 0, 0,0.8)',
      pointRadius: 6
    },
    {
      // yellow
      backgroundColor: 'rgba(255, 255, 255,0.1)',
      borderColor: 'rgba(255, 230, 0, 1)',
      pointBackgroundColor: 'rgba(255, 217, 0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(100, 100, 230,0.8)',
      pointRadius: 6
    }
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  // public lineChartPlugins = [pluginAnnotations];
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

  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    // console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    // console.log(event, active);
  }

  constructor() {}

  ngOnInit() {
    this.randomize();
  }
}
