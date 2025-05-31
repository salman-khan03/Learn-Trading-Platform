import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Types
export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  duration: number; // in minutes
  order: number;
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
  completedLessons: string[]; // Array of lesson IDs
  lastAccessed: Date;
}

// Context Type
interface CourseContextType {
  courses: Course[];
  currentCourse: Course | null;
  setCurrentCourse: (course: Course | null) => void;
  studentProgress: Record<string, StudentProgress>;
  createCourse: (courseData: Omit<Course, 'id' | 'createdAt' | 'updatedAt' | 'modules'>) => Promise<Course>;
  updateCourse: (courseId: string, courseData: Partial<Course>) => Promise<Course>;
  deleteCourse: (courseId: string) => Promise<void>;
  addModule: (courseId: string, moduleData: Omit<Module, 'id' | 'lessons' | 'order'>) => Promise<Module>;
  updateModule: (courseId: string, moduleId: string, moduleData: Partial<Module>) => Promise<Module>;
  deleteModule: (courseId: string, moduleId: string) => Promise<void>;
  addLesson: (courseId: string, moduleId: string, lessonData: Omit<Lesson, 'id' | 'order'>) => Promise<Lesson>;
  updateLesson: (courseId: string, moduleId: string, lessonId: string, lessonData: Partial<Lesson>) => Promise<Lesson>;
  deleteLesson: (courseId: string, moduleId: string, lessonId: string) => Promise<void>;
  markLessonComplete: (courseId: string, lessonId: string) => Promise<void>;
  getCourseProgress: (courseId: string) => number;
}

// Create Context
const CourseContext = createContext<CourseContextType | undefined>(undefined);

// Custom Hook
export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourse must be used within a CourseProvider');
  }
  return context;
};

// Provider Component
export const CourseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [currentCourse, setCurrentCourse] = useState<Course | null>(null);
  const [studentProgress, setStudentProgress] = useState<Record<string, StudentProgress>>({});

  // Load data from localStorage on mount
  useEffect(() => {
    const storedCourses = localStorage.getItem('courses');
    const storedProgress = localStorage.getItem('studentProgress');
    
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    }
    
    if (storedProgress) {
      setStudentProgress(JSON.parse(storedProgress));
    }
  }, []);

  // Save data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('studentProgress', JSON.stringify(studentProgress));
  }, [studentProgress]);

  // Create a new course
  const createCourse = async (courseData: Omit<Course, 'id' | 'createdAt' | 'updatedAt' | 'modules'>): Promise<Course> => {
    const newCourse: Course = {
      ...courseData,
      id: uuidv4(),
      modules: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      isPublished: false,
    };

    setCourses((prevCourses) => [...prevCourses, newCourse]);
    return newCourse;
  };

  // Update an existing course
  const updateCourse = async (courseId: string, courseData: Partial<Course>): Promise<Course> => {
    setCourses((prevCourses) => {
      const updatedCourses = prevCourses.map((course) => {
        if (course.id === courseId) {
          return {
            ...course,
            ...courseData,
            updatedAt: new Date(),
          };
        }
        return course;
      });
      return updatedCourses;
    });

    const updatedCourse = courses.find((course) => course.id === courseId);
    if (!updatedCourse) {
      throw new Error('Course not found');
    }
    return updatedCourse;
  };

  // Delete a course
  const deleteCourse = async (courseId: string): Promise<void> => {
    setCourses((prevCourses) => prevCourses.filter((course) => course.id !== courseId));
  };

  // Add a module to a course
  const addModule = async (courseId: string, moduleData: Omit<Module, 'id' | 'lessons' | 'order'>): Promise<Module> => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) {
      throw new Error('Course not found');
    }

    const newModule: Module = {
      ...moduleData,
      id: uuidv4(),
      lessons: [],
      order: course.modules.length,
    };

    setCourses((prevCourses) => {
      return prevCourses.map((course) => {
        if (course.id === courseId) {
          return {
            ...course,
            modules: [...course.modules, newModule],
            updatedAt: new Date(),
          };
        }
        return course;
      });
    });

    return newModule;
  };

  // Update a module
  const updateModule = async (courseId: string, moduleId: string, moduleData: Partial<Module>): Promise<Module> => {
    setCourses((prevCourses) => {
      return prevCourses.map((course) => {
        if (course.id === courseId) {
          return {
            ...course,
            modules: course.modules.map((module) => {
              if (module.id === moduleId) {
                return {
                  ...module,
                  ...moduleData,
                };
              }
              return module;
            }),
            updatedAt: new Date(),
          };
        }
        return course;
      });
    });

    const course = courses.find((c) => c.id === courseId);
    if (!course) {
      throw new Error('Course not found');
    }

    const updatedModule = course.modules.find((module) => module.id === moduleId);
    if (!updatedModule) {
      throw new Error('Module not found');
    }

    return updatedModule;
  };

  // Delete a module
  const deleteModule = async (courseId: string, moduleId: string): Promise<void> => {
    setCourses((prevCourses) => {
      return prevCourses.map((course) => {
        if (course.id === courseId) {
          return {
            ...course,
            modules: course.modules.filter((module) => module.id !== moduleId),
            updatedAt: new Date(),
          };
        }
        return course;
      });
    });
  };

  // Add a lesson to a module
  const addLesson = async (courseId: string, moduleId: string, lessonData: Omit<Lesson, 'id' | 'order'>): Promise<Lesson> => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) {
      throw new Error('Course not found');
    }

    const module = course.modules.find((m) => m.id === moduleId);
    if (!module) {
      throw new Error('Module not found');
    }

    const newLesson: Lesson = {
      ...lessonData,
      id: uuidv4(),
      order: module.lessons.length,
    };

    setCourses((prevCourses) => {
      return prevCourses.map((course) => {
        if (course.id === courseId) {
          return {
            ...course,
            modules: course.modules.map((module) => {
              if (module.id === moduleId) {
                return {
                  ...module,
                  lessons: [...module.lessons, newLesson],
                };
              }
              return module;
            }),
            updatedAt: new Date(),
          };
        }
        return course;
      });
    });

    return newLesson;
  };

  // Update a lesson
  const updateLesson = async (courseId: string, moduleId: string, lessonId: string, lessonData: Partial<Lesson>): Promise<Lesson> => {
    setCourses((prevCourses) => {
      return prevCourses.map((course) => {
        if (course.id === courseId) {
          return {
            ...course,
            modules: course.modules.map((module) => {
              if (module.id === moduleId) {
                return {
                  ...module,
                  lessons: module.lessons.map((lesson) => {
                    if (lesson.id === lessonId) {
                      return {
                        ...lesson,
                        ...lessonData,
                      };
                    }
                    return lesson;
                  }),
                };
              }
              return module;
            }),
            updatedAt: new Date(),
          };
        }
        return course;
      });
    });

    const course = courses.find((c) => c.id === courseId);
    if (!course) {
      throw new Error('Course not found');
    }

    const module = course.modules.find((m) => m.id === moduleId);
    if (!module) {
      throw new Error('Module not found');
    }

    const updatedLesson = module.lessons.find((lesson) => lesson.id === lessonId);
    if (!updatedLesson) {
      throw new Error('Lesson not found');
    }

    return updatedLesson;
  };

  // Delete a lesson
  const deleteLesson = async (courseId: string, moduleId: string, lessonId: string): Promise<void> => {
    setCourses((prevCourses) => {
      return prevCourses.map((course) => {
        if (course.id === courseId) {
          return {
            ...course,
            modules: course.modules.map((module) => {
              if (module.id === moduleId) {
                return {
                  ...module,
                  lessons: module.lessons.filter((lesson) => lesson.id !== lessonId),
                };
              }
              return module;
            }),
            updatedAt: new Date(),
          };
        }
        return course;
      });
    });
  };

  // Mark a lesson as complete for a student
  const markLessonComplete = async (courseId: string, lessonId: string): Promise<void> => {
    // In a real app, this would get the current user ID from the auth context
    const userId = 'current-user-id'; // Placeholder
    
    setStudentProgress((prevProgress) => {
      const progressKey = `${userId}-${courseId}`;
      const existingProgress = prevProgress[progressKey];
      
      if (existingProgress) {
        // Update existing progress
        if (!existingProgress.completedLessons.includes(lessonId)) {
          return {
            ...prevProgress,
            [progressKey]: {
              ...existingProgress,
              completedLessons: [...existingProgress.completedLessons, lessonId],
              lastAccessed: new Date(),
            },
          };
        }
        return prevProgress;
      } else {
        // Create new progress
        return {
          ...prevProgress,
          [progressKey]: {
            userId,
            courseId,
            completedLessons: [lessonId],
            lastAccessed: new Date(),
          },
        };
      }
    });
  };

  // Calculate course progress percentage
  const getCourseProgress = (courseId: string): number => {
    // In a real app, this would get the current user ID from the auth context
    const userId = 'current-user-id'; // Placeholder
    const progressKey = `${userId}-${courseId}`;
    const progress = studentProgress[progressKey];
    
    if (!progress) {
      return 0;
    }
    
    const course = courses.find((c) => c.id === courseId);
    if (!course) {
      return 0;
    }
    
    // Count total lessons
    const totalLessons = course.modules.reduce((total, module) => total + module.lessons.length, 0);
    
    if (totalLessons === 0) {
      return 0;
    }
    
    // Calculate percentage
    return Math.round((progress.completedLessons.length / totalLessons) * 100);
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        currentCourse,
        setCurrentCourse,
        studentProgress,
        createCourse,
        updateCourse,
        deleteCourse,
        addModule,
        updateModule,
        deleteModule,
        addLesson,
        updateLesson,
        deleteLesson,
        markLessonComplete,
        getCourseProgress,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContext; 