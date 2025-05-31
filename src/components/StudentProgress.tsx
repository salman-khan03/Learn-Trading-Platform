import React from 'react';
import { useCourse } from '../contexts/CourseContext';
import { useAuth } from '../contexts/AuthContext';
import './StudentProgress.css';

interface StudentProgressProps {
  courseId: string;
}

const StudentProgress: React.FC<StudentProgressProps> = ({ courseId }) => {
  const { user } = useAuth();
  const { courses, studentProgress, getCourseProgress } = useCourse();
  
  const course = courses.find(c => c.id === courseId);
  
  if (!course) {
    return <div className="progress-container">Course not found</div>;
  }
  
  const progressPercentage = getCourseProgress(courseId);
  
  // Get the current user's progress for this course
  const userId = user?.email || 'current-user-id'; // Fallback for demo
  const progressKey = `${userId}-${courseId}`;
  const userProgress = studentProgress[progressKey];
  
  // Count total lessons and completed lessons
  const totalLessons = course.modules.reduce((total, module) => total + module.lessons.length, 0);
  const completedLessons = userProgress?.completedLessons.length || 0;
  
  return (
    <div className="progress-container">
      <div className="progress-header">
        <h3>Course Progress</h3>
        <div className="progress-percentage">{progressPercentage}%</div>
      </div>
      
      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      <div className="progress-stats">
        <div className="progress-stat">
          <span className="stat-label">Completed</span>
          <span className="stat-value">{completedLessons} of {totalLessons} lessons</span>
        </div>
        
        <div className="progress-stat">
          <span className="stat-label">Last Accessed</span>
          <span className="stat-value">
            {userProgress?.lastAccessed 
              ? new Date(userProgress.lastAccessed).toLocaleDateString() 
              : 'Never'}
          </span>
        </div>
      </div>
      
      <div className="module-progress">
        <h4>Module Progress</h4>
        
        {course.modules.map(module => {
          const moduleTotalLessons = module.lessons.length;
          const moduleCompletedLessons = userProgress?.completedLessons.filter(lessonId => 
            module.lessons.some(lesson => lesson.id === lessonId)
          ).length || 0;
          
          const moduleProgressPercentage = moduleTotalLessons > 0
            ? Math.round((moduleCompletedLessons / moduleTotalLessons) * 100)
            : 0;
          
          return (
            <div key={module.id} className="module-progress-item">
              <div className="module-progress-header">
                <span className="module-title">{module.title}</span>
                <span className="module-percentage">{moduleProgressPercentage}%</span>
              </div>
              
              <div className="module-progress-bar">
                <div 
                  className="module-progress-fill" 
                  style={{ width: `${moduleProgressPercentage}%` }}
                ></div>
              </div>
              
              <div className="module-lessons">
                {module.lessons.map(lesson => {
                  const isCompleted = userProgress?.completedLessons.includes(lesson.id) || false;
                  
                  return (
                    <div key={lesson.id} className="lesson-progress-item">
                      <div className="lesson-status">
                        {isCompleted ? (
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            className="check-icon"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        ) : (
                          <div className="incomplete-circle"></div>
                        )}
                      </div>
                      <span className="lesson-title">{lesson.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentProgress; 