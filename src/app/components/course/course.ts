import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { SubjectService } from '../../services/subject';
import { CourseWithProfessor } from '../../models/subject.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-course',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './course.html',
  styleUrl: './course.scss',
})
export class Course {
  public courses: CourseWithProfessor[] = [];
  public selectedCourses: CourseWithProfessor[] = [];
  @Output() coursesSelected = new EventEmitter<CourseWithProfessor[]>();
  

  constructor(
    private subjectService: SubjectService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse() {
    this.subjectService.getCoursesWithProfessors().subscribe({
      next: (data) => {
        this.courses = data.map((course) => ({
          ...course,
          credits: 3,
        }));
        console.log("data",this.courses)
      },
      error: (err) => {
        //por si el endpoint falla y es necesario hacer las pruebas
        this.courses = [
          { id: 1, name: 'Introducción a la Filosofía', professor: 'Dra. Evelyn Reed', credits: 3 },
          { id: 2, name: 'Ética', professor: 'Dr. Samuel Greene', credits: 3 },
          { id: 3, name: 'Cálculo I', professor: 'Dr. Samuel Greene', credits: 3 },
          { id: 4, name: 'Álgebra Lineal', professor: 'Dr. Samuel Greene', credits: 3 },
          { id: 5, name: 'Historia Mundial', professor: 'Dr. Samuel Greene', credits: 3 },
          { id: 6, name: 'Introducción a la Informática', professor: 'Ing. María López', credits: 3 },
          { id: 7, name: 'Estructuras de Datos', professor: 'Ing. María López', credits: 3 },
          { id: 8, name: 'Microeconomía', professor: 'Dr. Andrés Castro', credits: 3 },
          { id: 9, name: 'Economía Global', professor: 'Dr. Andrés Castro', credits: 3 },
          { id: 10, name: 'La Era del Renacimiento', professor: 'Dra. Carmen Salas', credits: 3 }
        ];
      },
    });
  }
 
  get selectedCount(): number {
    return this.selectedCourses.length;
  }
  get selectedCredits(): number {
    return this.selectedCourses.reduce(
      (total, c) => total + (c.credits ?? 0),
      0
    );
  }

  toggleSelection(course: CourseWithProfessor): void {
    const exists = this.selectedCourses.find((c) => c.id === course.id);

    if (exists) {
      this.selectedCourses = this.selectedCourses.filter(
        (c) => c.id !== course.id
      );
    } else if (this.selectedCourses.length < 3) {
      const sameProfessor = this.selectedCourses.some(
        (c) => c.professor === course.professor
      );

      if (sameProfessor) {
        this.toastr.error(
          'Ya seleccionaste un curso con el profesor  ' + course.professor
        );
        return;
      }
      this.selectedCourses.push(course);
    }
  }

  sendCourse(){
    this.coursesSelected .emit(this.selectedCourses);
  }
  isSelected(course: CourseWithProfessor): boolean {
    return this.selectedCourses.some((c) => c.id === course.id);
  }
}
