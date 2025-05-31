import React, { useState } from 'react';
import { useCourse } from '../contexts/CourseContext';
import { Course, Module, Lesson } from '../types/course';

interface AIGenerationRequest {
  topic: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in hours
  learningObjectives: string[];
}

export const AICourseGenerator: React.FC = () => {
  const { currentCourse, setCurrentCourse } = useCourse();
  const [isGenerating, setIsGenerating] = useState(false);
  const [request, setRequest] = useState<AIGenerationRequest>({
    topic: '',
    level: 'beginner',
    duration: 5,
    learningObjectives: ['']
  });

  const handleAddObjective = () => {
    setRequest(prev => ({
      ...prev,
      learningObjectives: [...prev.learningObjectives, '']
    }));
  };

  const handleObjectiveChange = (index: number, value: string) => {
    setRequest(prev => ({
      ...prev,
      learningObjectives: prev.learningObjectives.map((obj, i) => 
        i === index ? value : obj
      )
    }));
  };

  const handleGenerateCourse = async () => {
    setIsGenerating(true);
    try {
      // Replace with your actual AI generation endpoint
      const response = await fetch('/api/generate-course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error('Failed to generate course');
      }

      const generatedCourse: Course = await response.json();
      setCurrentCourse(generatedCourse);
    } catch (error) {
      console.error('Error generating course:', error);
      // Handle error appropriately
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="ai-course-generator">
      <h2>AI Course Generator</h2>
      
      <div className="generation-form">
        <div className="form-group">
          <label htmlFor="topic">Course Topic</label>
          <input
            id="topic"
            type="text"
            value={request.topic}
            onChange={(e) => setRequest(prev => ({ ...prev, topic: e.target.value }))}
            placeholder="Enter course topic"
          />
        </div>

        <div className="form-group">
          <label htmlFor="level">Difficulty Level</label>
          <select
            id="level"
            value={request.level}
            onChange={(e) => setRequest(prev => ({ 
              ...prev, 
              level: e.target.value as 'beginner' | 'intermediate' | 'advanced' 
            }))}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="duration">Course Duration (hours)</label>
          <input
            id="duration"
            type="number"
            min="1"
            max="50"
            value={request.duration}
            onChange={(e) => setRequest(prev => ({ 
              ...prev, 
              duration: parseInt(e.target.value) 
            }))}
          />
        </div>

        <div className="form-group">
          <label>Learning Objectives</label>
          {request.learningObjectives.map((objective, index) => (
            <input
              key={index}
              type="text"
              value={objective}
              onChange={(e) => handleObjectiveChange(index, e.target.value)}
              placeholder={`Learning objective ${index + 1}`}
            />
          ))}
          <button 
            type="button" 
            onClick={handleAddObjective}
            className="add-objective-btn"
          >
            Add Objective
          </button>
        </div>

        <button
          className="generate-btn"
          onClick={handleGenerateCourse}
          disabled={isGenerating || !request.topic}
        >
          {isGenerating ? 'Generating Course...' : 'Generate Course'}
        </button>
      </div>
    </div>
  );
}; 