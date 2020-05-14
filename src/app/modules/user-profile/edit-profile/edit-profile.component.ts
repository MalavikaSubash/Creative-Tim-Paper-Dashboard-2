import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  constructor() {}

  updateProfile() {
    alert('You have successfully updated your profile !');
  }

  ngOnInit() {}
}
