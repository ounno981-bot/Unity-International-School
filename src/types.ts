export interface Student {
  id: string;
  name: string;
  email: string;
  grade: string;
  status: 'active' | 'inactive';
  enrollmentDate: string;
  avatar?: string;
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  subject: string;
  status: 'active' | 'on-leave';
  avatar?: string;
}

export interface Class {
  id: string;
  name: string;
  teacherId: string;
  studentCount: number;
  schedule: string;
}

export type View = 'dashboard' | 'students' | 'teachers' | 'classes' | 'settings';
