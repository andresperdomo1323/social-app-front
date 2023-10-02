import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss'],
})
export class TableUsersComponent implements OnInit {
  dataSource: any = [];
  tableDisplayColumns: string[] = [ 'position', 'avatar', 'name', 'birthdate', 'country', 'status'];

  @Input() set data(data: any) {
    this.dataSource = data;
  }

  constructor() {}

  ngOnInit(): void {}
}
