import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CourseWithProfessor } from '../../models/subject.model';
import { Auth } from '../../services/auth';
import { User } from '../../models/auth.model';

@Component({
  selector: 'app-list-of-classes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-of-classes.html',
  styleUrl: './list-of-classes.scss'
})
export class ListOfClasses implements OnInit, OnChanges {
  courses: Course[] = [
    { name: 'Introducción a la Filosofía', icon: 'fa-book', students: ['Ana López', 'Luis Martínez', 'Carlos Pérez'] },
    { name: 'Ética', icon: 'fa-balance-scale', students: ['María González', 'Pedro Ruiz', 'Juan Castro'] },
    { name: 'Cálculo I', icon: 'fa-square-root-alt', students: ['Andrés Torres', 'Paula Jiménez', 'Laura Mejía'] },
    { name: 'Álgebra Lineal', icon: 'fa-square-root-alt', students: ['Santiago Díaz', 'Carolina Herrera', 'Mateo Vargas'] },
    { name: 'Historia Mundial', icon: 'fa-globe', students: ['Valentina Romero', 'Felipe Gutiérrez', 'Camila Rojas'] },
    { name: 'La Era del Renacimiento', icon: 'fa-globe', students: ['Isabela Moreno', 'Daniel Suárez', 'Gabriela Lozano'] },
    { name: 'Introducción a la Informática', icon: 'fa-code', students: ['Martín Castillo', 'Sara Villalba', 'David Cárdenas'] },
    { name: 'Estructuras de Datos', icon: 'fa-code', students: ['Lucas Navarro', 'Alejandra Gil', 'Samuel Peña'] },
    { name: 'Principios de Microeconomía', icon: 'fa-university', students: ['Fernando Soto', 'Valeria Hernández', 'Julian Rivera'] },
    { name: 'Economía Global', icon: 'fa-university', students: ['Catalina Muñoz', 'Emilio Cabrera', 'Natalia Fuentes'] }
  ];

  public expandedCourse: string | null = null;
  public user: User | null = null;

  @Input() selectedCourses: CourseWithProfessor[] = [];

  constructor(private auth: Auth) {}

  ngOnInit(): void {
    this.loadUser();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCourses'] && this.user) {
      this.assignUserToCourses();
    }
  }

  loadUser(): void {
    this.auth.getUser().subscribe({
      next: (resp) => {
        this.user = resp;
        this.assignUserToCourses();
      },
      error: (err) => {
        console.error('Error al cargar usuario:', err);
      },
    });
  }

  assignUserToCourses(): void {
    if (!this.user) return;
    this.courses.forEach(course => {
      course.students = course.students.filter(student => student !== this.user!.name);
    });
    this.selectedCourses.forEach(selected => {
      const course = this.courses.find(c => c.name === selected.name);
      if (course) {
        course.students.push(this.user!.name);
      }
    });}

  toggle(courseName: string): void {
    this.expandedCourse = this.expandedCourse === courseName ? null : courseName;
  }

  userIsEnrolled(courseName: string): boolean {
    return this.selectedCourses.some((course) => course.name === courseName);
  }
}
