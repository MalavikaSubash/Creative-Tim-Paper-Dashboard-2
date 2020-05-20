import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capacity-card',
  templateUrl: './capacity-card.component.html',
  styleUrls: ['./capacity-card.component.scss']
})
export class CapacityCardComponent implements OnInit {
  Capacity = 150;
  constructor() {}

  update() {
    this.Capacity = Math.floor(Math.random() * 1000 + 1);
  }
  ngOnInit() {}
}
