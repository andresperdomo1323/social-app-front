import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/modules/table/models/table-column';
import { TableConfig } from 'src/app/modules/table/models/table-config';

const USERS_DATA_MOCK = [
  {
    position: 1,
    name: 'Pedro Pérez',
    birthdate: new Date(2000, 0, 1),
    country: 'España',
  },
  {
    position: 2,
    name: 'Maria Lopez',
    birthdate: new Date(2001, 2, 1),
    country: 'Grecia',
  },
  {
    position: 3,
    name: 'Alejandro Pinzón',
    birthdate: new Date(1999, 5, 10),
    country: 'Colombia',
  },
  {
    position: 4,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
  {
    position: 5,
    name: 'Sofia Espinosa',
    birthdate: new Date(2021, 1, 1),
    country: 'Chile',
  },  {
    position: 6,
    name: 'Francisco Castro',
    birthdate: new Date(1980, 12, 12),
    country: 'Perú',
  },  {
    position: 7,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },  {
    position: 8,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },  {
    position: 9,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },  {
    position: 10,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },  {
    position: 11,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },  {
    position: 12,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },  {
    position: 13,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },  {
    position: 14,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },  {
    position: 15,
    name: 'Jessica Roa',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
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
  }

  constructor() {}

  ngOnInit(): void {
    this.setTableColumns();
  }

  setTableColumns() {
    this.tableColumns = [
      { label: 'No.', def: 'position', dataKey: 'position' },
      { label: 'Nombre', def: 'name', dataKey: 'name' },
      {
        label: 'Fecha nacimiento',
        def: 'birthdate',
        dataKey: 'birthdate',
        dataType: 'date',
        formatt: 'dd/MMM/yyyy',
      },
      { label: 'País', def: 'country', dataKey: 'country' },
    ];
  }

  onSelect(data: any) {
    console.log(data)
  }
}
