import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataProgramasDataSource, DataProgramasItem } from './data-programas-datasource';

@Component({
  selector: 'app-data-programas',
  templateUrl: './data-programas.component.html',
  styleUrls: ['./data-programas.component.css']
})
export class DataProgramasComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<DataProgramasItem>;
  dataSource: DataProgramasDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'facultad'];

  ngOnInit() {
    this.dataSource = new DataProgramasDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
