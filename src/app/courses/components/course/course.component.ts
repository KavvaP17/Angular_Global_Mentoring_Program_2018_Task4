import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '../../../courses/models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Output() deleteCourse = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  public delete(event) {
    event.stopPropagation();
    this.deleteCourse.emit(this.course.id);
  }

  public changeRated(event) {
    event.stopPropagation();
    this.course.topRated = !this.course.topRated;
  }

}
