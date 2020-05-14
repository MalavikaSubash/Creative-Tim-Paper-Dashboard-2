import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StripedListComponent } from './striped-list/striped-list.component';
import { TableListComponent } from './table-list.component';

@NgModule({
  declarations: [StripedListComponent, TableListComponent],
  imports: [CommonModule]
})
export class TableListModule {}
