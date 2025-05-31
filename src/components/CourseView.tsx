import React, { useState } from 'react';
import { useCourse } from '../contexts/CourseContext';
import { useAuth } from '../contexts/AuthContext';
import StudentProgress from './StudentProgress';
import './CourseView.css';

interface CourseViewProps {
  courseId: string;
}

const CourseView: React.FC<CourseViewProps> = ({ courseId }) => {
  const { courses, markLessonComplete } = useCourse();
  const { user } = useAuth();
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  const course = courses.find(c => c.id === courseId);
  const activeModule = course?.modules.find(m => m.id === activeModuleId);
  const activeLesson = activeModule?.lessons.find(l => l.id === activeLessonId);

  if (!course) {
    return <div className="course-view-error">Course not found</div>;
  }

  const handleModuleClick = (moduleId: string) => {
    setActiveModuleId(moduleId);
    const firstLesson = course.modules.find(m => m.id === moduleId)?.lessons[0];
    if (firstLesson) {
      setActiveLessonId(firstLesson.id);
    }
  };

  const handleLessonClick = (lessonId: string) => {
    setActiveLessonId(lessonId);
  };

  const handleLessonComplete = async () => {
    if (activeLessonId && user) {
      await markLessonComplete(courseId, activeLessonId);
    }
  };

  return (
    <div className="course-view">
      <div className="course-view-sidebar">
        <div className="course-info">
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
        <div className="course-progress">
          <StudentProgress courseId={courseId} />
        </div>
        <div className="course-modules">
          {course.modules.map(module => (
            <div
              key={module.id}
              className={`module-item ${module.id === activeModuleId ? 'active' : ''}`}
              onClick={() => handleModuleClick(module.id)}
            >
              <h3>{module.title}</h3>
              <div className="module-lessons">
                {module.lessons.map(lesson => (
                  <div
                    key={lesson.id}
                    className={`lesson-item ${lesson.id === activeLessonId ? 'active' : ''}`}
                    onClick={() => handleLessonClick(lesson.id)}
                  >
                    <span className="lesson-title">{lesson.title}</span>
                    <span className="lesson-duration">{lesson.duration} min</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="course-view-content">
        {activeLesson ? (
          <div className="lesson-content">
            <h2>{activeLesson.title}</h2>
            <div className="lesson-video">
              {activeLesson.videoUrl ? (
                <video
                  src={activeLesson.videoUrl}
                  controls
                  className="video-player"
                />
              ) : (
                <div className="video-placeholder">
                  <p>Video content coming soon</p>
                </div>
              )}
            </div>
            <div className="lesson-description">
              <p>{activeLesson.description}</p>
            </div>
            <button
              className="complete-lesson-button"
              onClick={handleLessonComplete}
            >
              Mark as Complete
            </button>
          </div>
        ) : (
          <div className="no-lesson-selected">
            <p>Select a lesson to begin learning</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseView; 