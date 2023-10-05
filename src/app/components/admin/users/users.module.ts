import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/material/material.module';
import { UsersComponent } from './users.component';
import { TableUsersModule } from './table-users/table-users.module';
import { TableModule } from 'src/app/modules/table/table.module';

@NgModule({
  declarations: [
      UsersComponent,
  ],
  imports: [
      CommonModule,
      UsersRoutingModule,
      MaterialModule,
      ReactiveFormsModule,
      TableUsersModule,
      TableModule,
  ]
})
export class UsersModule { }
