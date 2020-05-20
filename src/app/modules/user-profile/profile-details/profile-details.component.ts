import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  file = 10;
  used = 2;
  spent = 2980;

  profile() {
    this.file = Math.floor(Math.random() * 1000) + 1;
    this.used = Math.floor(Math.random() * 1000) + 1;
    this.spent = Math.floor(Math.random() * 1000) + 1;
  }

  constructor() {}

  ngOnInit() {
    this.profile();
  }
}
