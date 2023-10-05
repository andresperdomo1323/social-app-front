import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/material/material.module';
import { TableUsersComponent } from './table-users.component';
import { TableModule } from 'src/app/modules/table/table.module';

@NgModule({
  declarations: [
    TableUsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    TableModule
  ]
})
export class TableUsersModule { }
