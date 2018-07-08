import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  // MatPaginator Inputs
  public length: Number = 100;
  public pageSize: Number = 10;
  public pageSizeOptions: Array<Number> = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor() { }

  ngOnInit() {
  }

  public setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

}
