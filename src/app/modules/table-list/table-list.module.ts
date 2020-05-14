import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StripedListComponent } from './striped-list/striped-list.component';
import { TableListComponent } from './table-list.component';
import { PlainListComponent } from './plain-list/plain-list.component';

@NgModule({
  declarations: [StripedListComponent, TableListComponent, PlainListComponent],
  imports: [CommonModule]
})
export class TableListModule {}
