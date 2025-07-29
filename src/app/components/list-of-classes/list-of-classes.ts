import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-of-classes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-of-classes.html',
  styleUrl: './list-of-classes.scss'
})
export class ListOfClasses {
  courses: Course[] = [
    { name: 'Introducción a la Filosofía', icon: 'fa-book', students: [] },
    { name: 'Ética', icon: 'fa-balance-scale', students: [] },
    { name: 'Cálculo I', icon: 'fa-square-root-alt', students: [] },
    { name: 'Álgebra Lineal', icon: 'fa-square-root-alt', students: [] },
    { name: 'Historia Mundial: Civilizaciones Antiguas', icon: 'fa-globe', students: [] },
    { name: 'La Era del Renacimiento', icon: 'fa-globe', students: [] },
    { name: 'Introducción a la Informática', icon: 'fa-code', students: [] },
    { name: 'Estructuras de Datos', icon: 'fa-code', students: [] },
    { name: 'Principios de Microeconomía', icon: 'fa-university', students: [] },
    { name: 'Economía Global', icon: 'fa-university', students: [] }
  ];

  expandedCourse: string | null = null;

  toggle(courseName: string) {
    this.expandedCourse = this.expandedCourse === courseName ? null : courseName;
  }
}
