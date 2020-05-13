import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors-card',
  templateUrl: './errors-card.component.html',
  styleUrls: ['./errors-card.component.scss']
})
export class ErrorsCardComponent implements OnInit {
  error = 10;

  errors() {
    this.error = Math.floor(Math.random() * 1000) + 1;
  }

  constructor() {}

  ngOnInit() {}
}
