import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';
import { Course } from '../courses/models/course.model';
import { SearchPipe } from './pipes/search/search.pipe';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses: Array<Course> = [];
  public foundCourses: Array<Course> = [];

  // MatPaginator Inputs
  public length: Number = 100;
  public pageSize: Number = 10;
  public pageSizeOptions: Array<Number> = [5, 10, 25, 100];

  // MatPaginator Output
  public pageEvent: PageEvent;

  constructor(private searchPipe: SearchPipe) { }

  ngOnInit() {
    this.courses.push(
      new Course(1, 'AngularJS', Date.now() - 13 * 24 * 60 * 60 * 1000, 100,
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, true)
    );
    this.courses.push(
      new Course(2, 'React', Date.now(), 200, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, false)
    );
    this.courses.push(
      new Course(3, 'Angular 2+', Date.now() + 13 * 24 * 60 * 60 * 1000, 120,
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, false)
    );
    this.courses.push(
      new Course(4, 'Unit testing', Date.now() - 16 * 24 * 60 * 60 * 1000, 110,
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, true)
    );
    this.courses.push(
      new Course(5, 'Paterns', Date.now() - 16 * 24 * 60 * 60 * 1000, 90,
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, true)
    );
    this.courses.push(
      new Course(6, 'Scrum for begginers', Date.now() + 16 * 24 * 60 * 60 * 1000, 10,
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, false)
    );
    this.foundCourses = this.courses;
  }

  public setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  public search(searchValue) {
    this.foundCourses = this.searchPipe.transform(this.courses, searchValue);
  }

}
