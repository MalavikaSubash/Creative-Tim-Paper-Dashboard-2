import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers-card',
  templateUrl: './followers-card.component.html',
  styleUrls: ['./followers-card.component.scss']
})
export class FollowersCardComponent implements OnInit {
  follower = 10;

  followers() {
    this.follower = Math.floor(Math.random() * 1000) + 1;
  }

  constructor() {}

  ngOnInit() {}
}
