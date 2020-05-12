import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capacity-card',
  templateUrl: './capacity-card.component.html',
  styleUrls: ['./capacity-card.component.scss']
})
export class CapacityCardComponent implements OnInit {
  Capacity = 10;
  constructor() {}

  ngOnInit() {}
}
