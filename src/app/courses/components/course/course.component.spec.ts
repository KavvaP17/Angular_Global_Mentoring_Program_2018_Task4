import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CourseComponent } from './course.component';
import { Course } from '../../../courses/models/course.model';

// corses Host component
import { Component } from '@angular/core';

@Component({
  template: `<app-course [course]="course" (deleteCourse)="deleteCourse($event)"></app-course>`
})
class CourseHostComponent {
  public course: Course = new Course(1, 'course#1', Date.now(), 100, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`);
  public deletedCourseId: number;
  public deleteCourse(id): void {
    this.deletedCourseId = id;
  }
}
// END: corses host component

describe('CourseComponent: Stand Alone testing', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let course: Course = new Course(1, 'course#1', Date.now(), 100, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course = course;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display corect course title', ()=> {
    let courseTitleEl: HTMLElement = fixture.debugElement.query(By.css('.course-panel-title')).nativeElement;
    expect(courseTitleEl.textContent).toBe(course.title);
  });
  it('should display corect course creation date', ()=> {
    let courseCreationEl: HTMLElement = fixture.debugElement.query(By.css('.course-panel-creation')).nativeElement;
    expect(courseCreationEl.textContent).toBeTruthy();
  });
  it('should display corect course duration', ()=> {
    let courseDurationEl: HTMLElement = fixture.debugElement.query(By.css('.course-panel-duration')).nativeElement;
    expect(courseDurationEl.textContent).toBe(course.duration.toString());
  });
  it('should display corect course description', ()=> {
    let courseDescriptionEl: HTMLElement = fixture.debugElement.query(By.css('.course-description')).nativeElement;
    expect(courseDescriptionEl.textContent).toBe(course.description.toString());
  });
  it('should raise delete event when clicked', () => {
    let deleteBtnDE = fixture.debugElement.query(By.css('.course-panel-btn-delete'));
    let deletedCourseId: number;
    component.deleteCourse.subscribe((courseId: number) => deletedCourseId = courseId);
    deleteBtnDE.nativeElement.click();
    expect(deletedCourseId).toBe(course.id);
  });

});

describe('CourseComponent: Host testing', () => {

  let component: CourseHostComponent;
  let fixture: ComponentFixture<CourseHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseHostComponent, CourseComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display corect course title', ()=> {
    let courseTitleEl: HTMLElement = fixture.debugElement.query(By.css('.course-panel-title')).nativeElement;
    expect(courseTitleEl.textContent).toBe(component.course.title);
  });
  it('should display corect course creation date', ()=> {
    let courseCreationEl: HTMLElement = fixture.debugElement.query(By.css('.course-panel-creation')).nativeElement;
    expect(courseCreationEl.textContent).toBeTruthy();
  });
  it('should display corect course duration', ()=> {
    let courseDurationEl: HTMLElement = fixture.debugElement.query(By.css('.course-panel-duration')).nativeElement;
    expect(courseDurationEl.textContent).toBe(component.course.duration.toString());
  });
  it('should display corect course description', ()=> {
    let courseDescriptionEl: HTMLElement = fixture.debugElement.query(By.css('.course-description')).nativeElement;
    expect(courseDescriptionEl.textContent).toBe(component.course .description.toString());
  });
  it('should raise delete event when clicked', () => {
    let deleteBtnDE = fixture.debugElement.query(By.css('.course-panel-btn-delete'));
    deleteBtnDE.nativeElement.click();
    expect(component.deletedCourseId).toBe(component.course.id);
  });
});

describe('CourseComponent: Test as a class', () => {
  let sut: CourseComponent;

  beforeEach(() => {
    sut = new CourseComponent();
  });
  it('should create', () => {
    expect(sut).toBeTruthy();
  });
  it('class CourseComponent defined metod delete', () => {
    expect(sut.delete).toBeDefined();
  });
});
