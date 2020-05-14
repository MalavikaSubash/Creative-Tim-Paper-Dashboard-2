import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  /*
  user = new FormGroup({
    Company: new FormControl(''),
    Username: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.maxLength(50)),
    City: new FormControl(''),
    Country: new FormControl('', Validators.required),
    PostalCode: new FormControl(''),
    AboutMe: new FormControl('')
  });
*/

  myFormGroup: FormGroup;

  constructor() {}

  onSubmit() {
    console.log(this.myFormGroup.value);
  }

  ngOnInit() {
    this.myFormGroup = new FormGroup({
      Company: new FormControl(''),
      Username: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.email]),
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      Address: new FormControl('', Validators.maxLength(50)),
      City: new FormControl(''),
      Country: new FormControl('', Validators.required),
      PostalCode: new FormControl(''),
      AboutMe: new FormControl('')
    });
  }
}

/*
  this.myFormGroup = new FormGroup({
    Company: new FormControl(''),
    Username: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.maxLength(50)),
    City: new FormControl(''),
    Country: new FormControl('', Validators.required),
    PostalCode: new FormControl(''),
    AboutMe: new FormControl('')
  });

  */
