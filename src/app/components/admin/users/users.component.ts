import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/modules/table/models/table-column';
import { TableConfig } from 'src/app/modules/table/models/table-config';

const USERS_DATA_MOCK = [
  {
    position: 1,
    username: 'pepe000000',
    name: 'Pedro',
    lastname: 'Pérez',
    dateBirth: new Date(2000, 0, 1),
    country: 'España',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },
  {
    position: 2,
    username: 'mama000000',
    name: 'Maria',
    lastname: 'Lopez',
    dateBirth: new Date(2001, 2, 1),
    country: 'Grecia',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },
  {
    position: 3,
    username: 'alpi000000',
    name: 'Alejandro',
    lastname: 'Pinzón',
    dateBirth: new Date(1999, 5, 10),
    country: 'Colombia',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'inactivo'
  },
  {
    position: 4,
    username: 'jero000000',
    name: 'Jessica',
    lastname: 'Roa',
    dateBirth: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },
  {
    position: 5,
    username: 'soes000000',
    name: 'Sofia',
    lastname: 'Espinosa',
    dateBirth: new Date(2021, 1, 1),
    country: 'Chile',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'inactivo'
  },  {
    position: 6,
    username: 'frca000000',
    name: 'Francisco',
    lastname: 'Castro',
    dateBirth: new Date(1980, 12, 12),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },  {
    position: 7,
    username: 'liro00000',
    name: 'Liliana',
    lastname: 'Roa',
    dateBirth: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },  {
    position: 8,
    username: 'date000000',
    name: 'Dario',
    lastname: 'Tellez',
    dateBirth: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },  {
    position: 9,
    username: 'nesa000000',
    name: 'Nelly',
    lastname: 'Sanchez',
    dateBirth: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Inactivo'
  },  {
    position: 10,
    username: 'capu00000',
    name: 'Carlos',
    lastname: 'Pulido',
    dateBirth: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },  {
    position: 11,
    username: 'mama000000',
    name: 'Maria',
    lastname: 'Martinez',
    dateBirth: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },  {
    position: 12,
    username: 'anme000000',
    name: 'Ana',
    lastname: 'Mejia',
    dateBirth: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },  {
    position: 13,
    username: 'pamo00000',
    name: 'Pablo',
    lastname: 'Molina',
    dateBirth: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },  {
    position: 14,
    username: 'rogu00000',
    name: 'Roberto',
    lastname: 'Gutierrez',
    dateBirth: new Date(2000, 0, 1),
    country: 'Perú',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    status: 'Activo'
  },  {
    position: 15,
    username: 'mabe000000',
    name: 'Manuel',
    lastname: 'Bello',
    dateBirth: new Date(2000, 0, 1),
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
      { label: 'Usuario', def: 'username', dataKey: 'username', sortable: true, hideColumnOnMobile: false },
      { label: 'Apellido', def: 'lastname', dataKey: 'lastname', sortable: true, hideColumnOnMobile: false },
      { label: 'Nombre', def: 'name', dataKey: 'name', sortable: true, hideColumnOnMobile: false },
      {
        label: 'Fecha nacimiento',
        def: 'dateBirth',
        dataKey: 'dateBirth',
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
