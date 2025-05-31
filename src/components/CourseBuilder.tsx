import React, { useState } from 'react';
import { useCourse } from '../contexts/CourseContext';
import { useAuth } from '../contexts/AuthContext';
import { Course, Module, Lesson } from '../contexts/CourseContext';
import './CourseBuilder.css';

const CourseBuilder: React.FC = () => {
  const { user } = useAuth();
  const { 
    courses, 
    createCourse, 
    updateCourse, 
    addModule, 
    updateModule, 
    addLesson, 
    updateLesson 
  } = useCourse();
  
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [isCreatingCourse, setIsCreatingCourse] = useState(false);
  const [isCreatingModule, setIsCreatingModule] = useState(false);
  const [isCreatingLesson, setIsCreatingLesson] = useState(false);
  
  // Form states
  const [courseForm, setCourseForm] = useState({
    title: '',
    description: '',
    thumbnail: '',
  });
  
  const [moduleForm, setModuleForm] = useState({
    title: '',
    description: '',
  });
  
  const [lessonForm, setLessonForm] = useState({
    title: '',
    description: '',
    videoUrl: '',
    duration: 0,
  });
  
  // Handle course creation
  const handleCreateCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) return;
    
    try {
      const newCourse = await createCourse({
        title: courseForm.title,
        description: courseForm.description,
        thumbnail: courseForm.thumbnail,
        instructor: user.email,
        isPublished: false
      });
      
      setActiveCourse(newCourse);
      setIsCreatingCourse(false);
      setCourseForm({ title: '', description: '', thumbnail: '' });
    } catch (error) {
      console.error('Failed to create course:', error);
    }
  };
  
  // Handle module creation
  const handleCreateModule = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!activeCourse) return;
    
    try {
      const newModule = await addModule(activeCourse.id, {
        title: moduleForm.title,
        description: moduleForm.description,
      });
      
      setActiveModule(newModule);
      setIsCreatingModule(false);
      setModuleForm({ title: '', description: '' });
    } catch (error) {
      console.error('Failed to create module:', error);
    }
  };
  
  // Handle lesson creation
  const handleCreateLesson = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!activeCourse || !activeModule) return;
    
    try {
      const newLesson = await addLesson(activeCourse.id, activeModule.id, {
        title: lessonForm.title,
        description: lessonForm.description,
        videoUrl: lessonForm.videoUrl,
        duration: lessonForm.duration,
      });
      
      setIsCreatingLesson(false);
      setLessonForm({ title: '', description: '', videoUrl: '', duration: 0 });
    } catch (error) {
      console.error('Failed to create lesson:', error);
    }
  };
  
  // Handle course selection
  const handleSelectCourse = (course: Course) => {
    setActiveCourse(course);
    setActiveModule(null);
  };
  
  // Handle module selection
  const handleSelectModule = (module: Module) => {
    setActiveModule(module);
  };
  
  return (
    <div className="course-builder">
      <div className="course-builder-sidebar">
        <h2>Courses</h2>
        <button 
          className="btn btn-primary" 
          onClick={() => setIsCreatingCourse(true)}
        >
          Create New Course
        </button>
        
        <div className="course-list">
          {courses.map(course => (
            <div 
              key={course.id} 
              className={`course-item ${activeCourse?.id === course.id ? 'active' : ''}`}
              onClick={() => handleSelectCourse(course)}
            >
              <h3>{course.title}</h3>
              <p>{course.description.substring(0, 50)}...</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="course-builder-content">
        {isCreatingCourse ? (
          <div className="form-container">
            <h2>Create New Course</h2>
            <form onSubmit={handleCreateCourse}>
              <div className="form-group">
                <label htmlFor="course-title">Course Title</label>
                <input
                  type="text"
                  id="course-title"
                  value={courseForm.title}
                  onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="course-description">Course Description</label>
                <textarea
                  id="course-description"
                  value={courseForm.description}
                  onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="course-thumbnail">Thumbnail URL (optional)</label>
                <input
                  type="text"
                  id="course-thumbnail"
                  value={courseForm.thumbnail}
                  onChange={(e) => setCourseForm({ ...courseForm, thumbnail: e.target.value })}
                />
              </div>
              
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Create Course</button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => setIsCreatingCourse(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : activeCourse ? (
          <div className="course-detail">
            <div className="course-header">
              <h2>{activeCourse.title}</h2>
              <p>{activeCourse.description}</p>
              
              <button 
                className="btn btn-primary" 
                onClick={() => setIsCreatingModule(true)}
              >
                Add Module
              </button>
            </div>
            
            {isCreatingModule ? (
              <div className="form-container">
                <h3>Create New Module</h3>
                <form onSubmit={handleCreateModule}>
                  <div className="form-group">
                    <label htmlFor="module-title">Module Title</label>
                    <input
                      type="text"
                      id="module-title"
                      value={moduleForm.title}
                      onChange={(e) => setModuleForm({ ...moduleForm, title: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="module-description">Module Description</label>
                    <textarea
                      id="module-description"
                      value={moduleForm.description}
                      onChange={(e) => setModuleForm({ ...moduleForm, description: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">Create Module</button>
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      onClick={() => setIsCreatingModule(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="module-list">
                {activeCourse.modules.map(module => (
                  <div 
                    key={module.id} 
                    className={`module-item ${activeModule?.id === module.id ? 'active' : ''}`}
                  >
                    <div 
                      className="module-header"
                      onClick={() => handleSelectModule(module)}
                    >
                      <h3>{module.title}</h3>
                      <p>{module.description}</p>
                    </div>
                    
                    {activeModule?.id === module.id && (
                      <div className="module-content">
                        <button 
                          className="btn btn-primary" 
                          onClick={() => setIsCreatingLesson(true)}
                        >
                          Add Lesson
                        </button>
                        
                        {isCreatingLesson ? (
                          <div className="form-container">
                            <h3>Create New Lesson</h3>
                            <form onSubmit={handleCreateLesson}>
                              <div className="form-group">
                                <label htmlFor="lesson-title">Lesson Title</label>
                                <input
                                  type="text"
                                  id="lesson-title"
                                  value={lessonForm.title}
                                  onChange={(e) => setLessonForm({ ...lessonForm, title: e.target.value })}
                                  required
                                />
                              </div>
                              
                              <div className="form-group">
                                <label htmlFor="lesson-description">Lesson Description</label>
                                <textarea
                                  id="lesson-description"
                                  value={lessonForm.description}
                                  onChange={(e) => setLessonForm({ ...lessonForm, description: e.target.value })}
                                  required
                                />
                              </div>
                              
                              <div className="form-group">
                                <label htmlFor="lesson-video">Video URL</label>
                                <input
                                  type="text"
                                  id="lesson-video"
                                  value={lessonForm.videoUrl}
                                  onChange={(e) => setLessonForm({ ...lessonForm, videoUrl: e.target.value })}
                                />
                              </div>
                              
                              <div className="form-group">
                                <label htmlFor="lesson-duration">Duration (minutes)</label>
                                <input
                                  type="number"
                                  id="lesson-duration"
                                  value={lessonForm.duration}
                                  onChange={(e) => setLessonForm({ ...lessonForm, duration: parseInt(e.target.value) })}
                                  min="0"
                                />
                              </div>
                              
                              <div className="form-actions">
                                <button type="submit" className="btn btn-primary">Create Lesson</button>
                                <button 
                                  type="button" 
                                  className="btn btn-secondary"
                                  onClick={() => setIsCreatingLesson(false)}
                                >
                                  Cancel
                                </button>
                              </div>
                            </form>
                          </div>
                        ) : (
                          <div className="lesson-list">
                            {module.lessons.map(lesson => (
                              <div key={lesson.id} className="lesson-item">
                                <h4>{lesson.title}</h4>
                                <p>{lesson.description}</p>
                                {lesson.videoUrl && (
                                  <div className="video-preview">
                                    <iframe 
                                      src={lesson.videoUrl} 
                                      title={lesson.title}
                                      frameBorder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    ></iframe>
                                  </div>
                                )}
                                <div className="lesson-meta">
                                  <span>Duration: {lesson.duration} minutes</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="empty-state">
            <h2>Select a Course or Create a New One</h2>
            <p>Choose a course from the sidebar or create a new one to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseBuilder; 