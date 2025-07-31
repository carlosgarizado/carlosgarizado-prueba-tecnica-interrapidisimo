export interface Professor {
  id: number;
  created_at: number | string;
  name: string;
}

export interface Program {
  id: number;
  created_at: number;
  program_name: string;
  user_id: number; 
}

  
  export interface ProfessorSubject {
    id: number;
    created_at: number;
    professor_id: number;
    subject_id: number;
  }
  
  export interface CourseWithProfessor {
    id: number;
    name: string;
    professor: string;
    credits?: number
  }