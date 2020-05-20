import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-striped-list',
  templateUrl: './striped-list.component.html',
  styleUrls: ['./striped-list.component.scss']
})
export class StripedListComponent implements OnInit {
  simpleTable: any;

  constructor() {}

  ngOnInit() {
    this.simpleTable = [
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
