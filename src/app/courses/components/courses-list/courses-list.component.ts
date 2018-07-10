import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../../courses/models/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  @Input() courses: Array<Course>;

  constructor() { }

  ngOnInit() {}

  public deleteCourse(id): void {
    console.log(`cousre id:${id} deleted`);
  }
}
