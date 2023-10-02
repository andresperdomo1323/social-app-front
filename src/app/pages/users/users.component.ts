import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/modules/table/models/table-column';
import { TableConfig } from 'src/app/modules/table/models/table-config';

const USERS_DATA_MOCK = [
  {
    position: 1,
    name: 'Pedro Pérez',
    birthdate: new Date(2000, 0, 1),
    country: 'España',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },
  {
    position: 2,
    name: 'Maria Lopez',
    birthdate: new Date(2001, 2, 1),
    country: 'Grecia',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },
  {
    position: 3,
    name: 'Alejandro Pinzón',
    birthdate: new Date(1999, 5, 10),
    country: 'Colombia',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'inactivo'
  },
  {
    position: 4,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },
  {
    position: 5,
    name: 'Sofia Espinosa',
    birthdate: new Date(2021, 1, 1),
    country: 'Chile',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'inactivo'
  },  {
    position: 6,
    name: 'Francisco Castro',
    birthdate: new Date(1980, 12, 12),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },  {
    position: 7,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },  {
    position: 8,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },  {
    position: 9,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Inactivo'
  },  {
    position: 10,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },  {
    position: 11,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },  {
    position: 12,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },  {
    position: 13,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },  {
    position: 14,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },  {
    position: 15,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  usersList = USERS_DATA_MOCK;
  tableColumns: TableColumn[] = [];
  tableConfig: TableConfig = {
    isSelectable: true,
    isPaginable: true,
    showFilter: true,
  }

  constructor() {}

  ngOnInit(): void {
    this.setTableColumns();
  }

  setTableColumns() {
    this.tableColumns = [
      { label: '', def: 'avatar', dataKey: 'avatar', dataType: 'image', hideColumnOnMobile: false },
      { label: 'No.', def: 'position', dataKey: 'position', hideColumnOnMobile: true },
      { label: 'Nombre', def: 'name', dataKey: 'name', sortable: true, hideColumnOnMobile: false },
      {
        label: 'Fecha nacimiento',
        def: 'birthdate',
        dataKey: 'birthdate',
        dataType: 'date',
        formatt: 'dd/MMM/yyyy',
        hideColumnOnMobile: true
      },
      { label: 'País', def: 'country', dataKey: 'country', sortable: true, hideColumnOnMobile: true },
      { label: 'Estado', def: 'status', dataKey: 'status', sortable: true, hideColumnOnMobile: false },
    ];
  }

  onSelect(data: any) {
    console.log(data)
  }
}
