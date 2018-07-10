import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

import { CoursesComponent } from './courses.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseBorderDirective } from './directives/course-border/course-border.directive';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByDatePipe } from './pipes/orderByDate/order-by-date.pipe';
import { SearchPipe } from './pipes/search/search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [DecimalPipe, SearchPipe],
  declarations: [ToolboxComponent, CourseComponent, CoursesListComponent, CoursesComponent,
                CourseBorderDirective, DurationPipe, OrderByDatePipe, SearchPipe],
  exports: [CoursesComponent]
})
export class CoursesModule { }
