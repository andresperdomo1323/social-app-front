import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/modules/table/models/table-column';
import { TableConfig } from 'src/app/modules/table/models/table-config';

import { User } from './../../../models/user.models';
import { UsersService } from './../../../services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})

export class UsersComponent implements OnInit {
  usersList: User[] = [];
  tableColumns: TableColumn[] = [];
  tableDisplayColumns: string[] = [ 'avatar', 'username', 'lastName', 'name' ];
  tableConfig: TableConfig = {
    isSelectable: true,
    isPaginable: true,
    showFilter: true,
  }

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.setTableColumns();
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.usersService.getAllUsers()
      .subscribe({
        next: (data) => {
          this.usersList = data;
        },
        error: (e) => console.error(e)
      });
  }

  setTableColumns() {
    this.tableColumns = [
      { label: 'Avatar', def: 'avatar', dataKey: 'avatar', dataType: 'image', hideColumnOnMobile: false },
      { label: 'Usuario', def: 'username', dataKey: 'username', sortable: true, hideColumnOnMobile: false },
      { label: 'Apellido', def: 'lastName', dataKey: 'lastName', sortable: true, hideColumnOnMobile: true },
      { label: 'Nombre', def: 'name', dataKey: 'name', sortable: true, hideColumnOnMobile: true },
    ];
  }

  onSelect(data: any) {
    console.log(data)
  }
}
