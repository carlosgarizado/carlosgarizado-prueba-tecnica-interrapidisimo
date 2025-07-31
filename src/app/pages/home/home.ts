import { Component } from '@angular/core';
import { Course } from '../../components/course/course';
import { ListOfClasses } from '../../components/list-of-classes/list-of-classes';
import { CourseWithProfessor } from '../../models/subject.model';
import { CourseTable } from '../../components/course-table/course-table';

@Component({
  selector: 'app-home',
  imports: [Course, ListOfClasses, CourseTable],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  public selectedCourses: CourseWithProfessor[] = [];

  handleCourse(selectedCourses: CourseWithProfessor[]): void {
    this.selectedCourses = selectedCourses;
  }
}
