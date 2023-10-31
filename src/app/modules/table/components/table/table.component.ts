import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TableColumn } from '../../models/table-column';
import { SelectionModel } from '@angular/cdk/collections';
import { TableConfig } from '../../models/table-config';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Array<any>> = new MatTableDataSource<any[]>([]);
  tableDisplayColumns: string[] = [];
  tableColumns: TableColumn[] = [];
  selection = new SelectionModel<any>(true, []);
  tableConfig: TableConfig | undefined;
  currentFilterValue: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() set data(data: Array<any>) {
    this.dataSource.data = data;
    this.dataSource.paginator = this.paginator;
  }

  @Input() set columns(columns: TableColumn[]) {
    this.tableColumns = columns;
    this.tableDisplayColumns = this.tableColumns.map((col) => col.def);
  }

  @Input() set config(config: TableConfig) {
    this.setConfig(config)
  }

  @Output() select: EventEmitter<any> = new EventEmitter()

  @ViewChild(MatSort) matSort!: MatSort;

  constructor() {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matSort;
  }

  ngOnInit(): void {  }

  onSelect() {
    this.select.emit(this.selection.selected)
  }

  setConfig(config: TableConfig) {
    this.tableConfig = config

    if(this.tableConfig.isSelectable) {
      this.tableDisplayColumns.unshift('select')
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.onSelect();
      return;
    }

    this.selection.select(...this.dataSource.data);
    this.onSelect();
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.currentFilterValue = filterValue;
  }

  onSort(event: Sort): void {}
}
