import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/modules/table/models/table-column';
import { TableConfig } from 'src/app/modules/table/models/table-config';

import { User } from './../../../models/user.models';
import { UsersService } from './../../../services/users/users.service';

/*
const USERS_DATA_MOCK = [
  {
    username: 'pepe000000',
    name: 'Pedro',
    lastName: 'Pérez',
    dateBirth: new Date(2000, 0, 1),
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  },
  {
    username: 'mama000000',
    name: 'Maria',
    lastName: 'Lopez',
    dateBirth: new Date(2001, 2, 1),
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  },
  {
    username: 'alpi000000',
    name: 'Alejandro',
    lastName: 'Pinzón',
    dateBirth: new Date(1999, 5, 10),
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  },
  {
    username: 'jero000000',
    name: 'Jessica',
    lastName: 'Roa',
    dateBirth: new Date(2000, 0, 1),
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  },
  {
    username: 'soes000000',
    name: 'Sofia',
    lastName: 'Espinosa',
    dateBirth: new Date(2021, 1, 1),
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  },  {
    username: 'frca000000',
    name: 'Francisco',
    lastName: 'Castro',
    dateBirth: new Date(1980, 12, 12),
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  },  {
    username: 'liro00000',
    name: 'Liliana',
    lastName: 'Roa',
    dateBirth: new Date(2000, 0, 1),
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  },  {
    username: 'date000000',
    name: 'Dario',
    lastName: 'Tellez',
    dateBirth: new Date(2000, 0, 1),
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  },  {
    username: 'nesa000000',
    name: 'Nelly',
    lastName: 'Sanchez',
    dateBirth: new Date(2000, 0, 1),
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  },  {
    username: 'capu00000',
    name: 'Carlos',
    lastName: 'Pulido',
    dateBirth: new Date(2000, 0, 1),
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  },  {
    username: 'mama000000',
    name: 'Maria',
    lastName: 'Martinez',
    dateBirth: new Date(2000, 0, 1),
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  },  {
    username: 'anme000000',
    name: 'Ana',
    lastName: 'Mejia',
    dateBirth: new Date(2000, 0, 1),
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  },  {
    username: 'pamo00000',
    name: 'Pablo',
    lastName: 'Molina',
    dateBirth: new Date(2000, 0, 1),
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  },  {
    username: 'rogu00000',
    name: 'Roberto',
    lastName: 'Gutierrez',
    dateBirth: new Date(2000, 0, 1),
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  },  {
    username: 'mabe000000',
    name: 'Manuel',
    lastName: 'Bello',
    dateBirth: new Date(2000, 0, 1),
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  },
];
*/

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})

export class UsersComponent implements OnInit {
  //usersList = USERS_DATA_MOCK;
  usersList: User[] = [];
  tableColumns: TableColumn[] = [];
  //tableDisplayColumns: string[] = [ 'avatar', 'username', 'lastName', 'name', 'dateBirth' ];
  tableDisplayColumns: string[] = [ 'username', 'lastName', 'name' ];
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
      //{ label: 'Avatar', def: 'avatar', dataKey: 'avatar', dataType: 'image', hideColumnOnMobile: false },
      { label: 'Usuario', def: 'username', dataKey: 'username', sortable: true, hideColumnOnMobile: false },
      { label: 'Apellido', def: 'lastName', dataKey: 'lastName', sortable: true, hideColumnOnMobile: false },
      { label: 'Nombre', def: 'name', dataKey: 'name', sortable: true, hideColumnOnMobile: false },
      /*{
        label: 'Fecha nacimiento',
        def: 'dateBirth',
        dataKey: 'dateBirth',
        dataType: 'date',
        formatt: 'dd/MMM/yyyy',
        hideColumnOnMobile: true
      },*/
    ];
  }

  onSelect(data: any) {
    console.log(data)
  }
}
