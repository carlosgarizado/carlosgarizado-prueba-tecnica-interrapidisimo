import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { CourseWithProfessor, Professor, ProfessorSubject, Program } from '../models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private readonly API_URL = environment.apiBaseUrl2;
  constructor(private http: HttpClient) {}

  getProfessors(): Observable<Professor[]> {
    return this.http.get<Professor[]>(`${this.API_URL}/professor`);
  }

  getPrograms(): Observable<Program[]> {
    return this.http.get<Program[]>(`${this.API_URL}/program`);
  }

  getProfessorSubjects(): Observable<ProfessorSubject[]> {
    return this.http.get<ProfessorSubject[]>(`${this.API_URL}/professor_subject`);
  }

  getCoursesWithProfessors(): Observable<CourseWithProfessor[]> {
    return forkJoin({
      professors: this.getProfessors(),
      programs: this.getPrograms(),
    }).pipe(
      map(({ professors, programs }) => {
        return programs.map((program) => {
          const professor = professors.find((prof) => prof.id === program.user_id);
          return {
            id: program.id,
            name: program.program_name,
            professor: professor?.name || 'Sin profesor',
          };
        });
      })
    );
  }
}