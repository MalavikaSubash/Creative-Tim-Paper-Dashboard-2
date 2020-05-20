import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list.component';
import { PlainListComponent } from './plain-list/plain-list.component';
import { TableListRoutingModule } from './table-list-routing.module';
import { StripedListComponent } from './striped-list/striped-list.component';

@NgModule({
  declarations: [TableListComponent, PlainListComponent, StripedListComponent],
  imports: [CommonModule, TableListRoutingModule]
})
export class TableListModule {}
