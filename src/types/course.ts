export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: number;
  order: number;
  completed: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  order: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  instructor: string;
  modules: Module[];
  createdAt: Date;
  updatedAt: Date;
  isPublished: boolean;
}

export interface StudentProgress {
  userId: string;
  courseId: string;
  completedLessons: string[];
  currentModule: string;
  currentLesson: string;
  progress: number;
  lastAccessed: Date;
} 