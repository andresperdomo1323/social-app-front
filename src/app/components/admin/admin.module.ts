import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/material/material.module';

import { TableUsersComponent } from './users/table-users/table-users.component';
import { TableModule } from 'src/app/modules/table/table.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    TableUsersComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    TableModule
  ]
})
export class AdminModule { }
