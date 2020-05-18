import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plain-list',
  templateUrl: './plain-list.component.html',
  styleUrls: ['./plain-list.component.scss']
})
export class PlainListComponent implements OnInit {
  plainTable: any;
  constructor() {}

  ngOnInit() {
    this.plainTable = [
      {
        Name: ' Dakota Rice',
        City: 'Niger',
        Country: 'Oud-Turnhout',
        Salary: 36738
      },

      {
        Name: 'Minerva Hooper',
        City: 'Curaçao',
        Country: 'Sinaai-Waas',
        Salary: 23789
      },
      {
        Name: ' Dakota Rice',
        City: 'Niger',
        Country: 'Oud-Turnhout',
        Salary: 36738
      },
      {
        Name: 'Minerva Hooper',
        City: 'Curaçao',
        Country: 'Sinaai-Waas',
        Salary: 23789
      },
      {
        Name: 'Minerva Hooper',
        City: 'Curaçao',
        Country: 'Sinaai-Waas',
        Salary: 23789
      },
      {
        Name: ' Dakota Rice',
        City: 'Niger',
        Country: 'Oud-Turnhout',
        Salary: 36738
      },
      {
        Name: 'Minerva Hooper',
        City: 'Curaçao',
        Country: 'Sinaai-Waas',
        Salary: 23789
      },
      {
        Name: ' Dakota Rice',
        City: 'Niger',
        Country: 'Oud-Turnhout',
        Salary: 36738
      }
    ];
  }
}
