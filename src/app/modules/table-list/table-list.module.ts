import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list.component';
import { StripedListComponent } from './striped-list/striped-list.component';
import { TableListRoutingModule } from './table-list-routing.module';
@NgModule({
  declarations: [
    TableListComponent,
    StripedListComponent,
    TableListRoutingModule
  ],
  imports: [CommonModule]
})
export class TableListModule {}
