import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {
  public pieChartLabels = ['Unopened', 'Opened', 'Read', 'Deleted'];
  public pieChartData = [120, 150, 180, 90];
  // public pieColor = ['red', 'violet', 'green' , 'white'];
  public pieChartType = 'pie';
  public pieChartLegend = false;
  constructor() {}

  ngOnInit() {}
}
