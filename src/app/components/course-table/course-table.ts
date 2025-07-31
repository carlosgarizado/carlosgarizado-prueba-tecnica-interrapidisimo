import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { CourseWithProfessor } from '../../models/subject.model';

@Component({
  selector: 'app-course-table',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './course-table.html',
  styleUrl: './course-table.scss'
})
export class CourseTable {
  @Input() courses: CourseWithProfessor[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['courses']) {
    }
  }
}
