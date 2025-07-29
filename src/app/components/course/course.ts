import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ICourse {
  id: number;
  name: string;
  professor: string;
  credits: number;
  icon: string;
}
@Component({
  selector: 'app-course',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './course.html',
  styleUrl: './course.scss'
})
export class Course {
  courses: ICourse[] = [
    { id: 1, name: 'Introducción a la Filosofía', professor: 'Dra. Evelyn Reed', credits: 3, icon: 'book-outline' },
    { id: 2, name: 'Ética', professor: 'Dra. Evelyn Reed', credits: 3, icon: 'book-outline' },
    { id: 3, name: 'Cálculo I', professor: 'Dr. Samuel Greene', credits: 3, icon: 'calculator-outline' },
    { id: 4, name: 'Álgebra Lineal', professor: 'Dr. Samuel Greene', credits: 3, icon: 'calculator-outline' },
    { id: 5, name: 'Historia Mundial: Civilizaciones Antiguas', professor: 'Dra. Isabella Rossi', credits: 3, icon: 'globe-outline' },
    { id: 6, name: 'La Era del Renacimiento', professor: 'Dra. Isabella Rossi', credits: 3, icon: 'globe-outline' },
    { id: 7, name: 'Introducción a la Informática', professor: 'Dr. Kenji Tanaka', credits: 3, icon: 'code-outline' },
    { id: 8, name: 'Estructuras de Datos', professor: 'Dr. Kenji Tanaka', credits: 3, icon: 'code-outline' },
    { id: 9, name: 'Principios de Microeconomía', professor: 'Dra. Maria Rodriguez', credits: 3, icon: 'business-outline' },
    { id: 10, name: 'Economía Global', professor: 'Dra. Maria Rodriguez', credits: 3, icon: 'business-outline' },
  ];
  selectedCourses: ICourse[] = [];
  get selectedCount(): number {
    return this.selectedCourses.length;
  }
  get selectedCredits(): number {
    return this.selectedCourses.reduce((total, c) => total + c.credits, 0);
  }
  toggleSelection(course: ICourse): void {
    const exists = this.selectedCourses.find(c => c.id === course.id);
    if (exists) {
      this.selectedCourses = this.selectedCourses.filter(c => c.id !== course.id);
    } else if (this.selectedCourses.length < 3) {
      this.selectedCourses.push(course);
    }
  }
  isSelected(course: ICourse): boolean {
    return this.selectedCourses.some(c => c.id === course.id);
  }
}