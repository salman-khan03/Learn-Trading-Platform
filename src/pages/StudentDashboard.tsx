import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/StudentDashboard.css';

interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  instructor: {
    name: string;
    avatar: string;
  };
  duration: string;
  price: number;
  rating: number;
  studentsCount: number;
  gradient: string;
}

const categories = [
  'All',
  'Technical Analysis',
  'Fundamental Analysis',
  'Trading Psychology',
  'Risk Management',
  'Cryptocurrency',
  'Forex',
  'Stocks'
];

const gradients = {
  'trading-intro': 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
  'technical-analysis': 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
  'psychology': 'linear-gradient(135deg, #6366F1 0%, #4338CA 100%)',
  'risk-management': 'linear-gradient(135deg, #F59E0B 0%, #B45309 100%)',
  'fundamental-analysis': 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
  'algorithmic-trading': 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)',
  'anaja-strategy': 'linear-gradient(135deg, #FFD700 0%, #FF8C00 100%)',
  'market-psychology': 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)',
  'forex-trading': 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
  'crypto-trading': 'linear-gradient(135deg, #F7931A 0%, #FFD700 100%)',
  'stock-trading': 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)'
};

const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { t } = useLanguage();
  const [availableCourses, setAvailableCourses] = useState<Course[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [featuredCourses, setFeaturedCourses] = useState<Course[]>([]);

  useEffect(() => {
    // In a real app, this would be an API call
    const mockCourses: Course[] = [
      {
        id: '1',
        title: 'Forex Fundamentals',
        description: 'Learn the basics of trading and market analysis',
        difficulty: 'beginner',
        category: 'Trading Basics',
        instructor: {
          name: 'Pierre Manga',
          avatar: '/images/instructors/pierre.jpg'
        },
        duration: '8 weeks',
        price: 99.99,
        rating: 4.8,
        studentsCount: 1234,
        gradient: gradients['trading-intro']
      },
      {
        id: '2',
        title: 'Technical Analysis',
        description: 'Master advanced charting techniques and indicators',
        difficulty: 'intermediate',
        category: 'Technical Analysis',
        instructor: {
          name: 'Pierre Manga',
          avatar: '/images/instructors/pierre.jpg'
        },
        duration: '12 weeks',
        price: 149.99,
        rating: 4.9,
        studentsCount: 856,
        gradient: gradients['technical-analysis']
      },
      {
        id: '3',
        title: 'Fundamental Analysis',
        description: 'Understand market fundamentals and economic indicators',
        difficulty: 'intermediate',
        category: 'Fundamental Analysis',
        instructor: {
          name: 'Pierre Manga',
          avatar: '/images/instructors/pierre.jpg'
        },
        duration: '10 weeks',
        price: 129.99,
        rating: 4.8,
        studentsCount: 1567,
        gradient: gradients['fundamental-analysis']
      },
      {
        id: '4',
        title: 'Cryptocurrency Trading',
        description: 'Master crypto markets, blockchain technology, and digital asset trading',
        difficulty: 'intermediate',
        category: 'Cryptocurrency',
        instructor: {
          name: 'Pierre Manga',
          avatar: '/images/instructors/pierre.jpg'
        },
        duration: '8 weeks',
        price: 159.99,
        rating: 4.9,
        studentsCount: 2891,
        gradient: gradients['crypto-trading']
      },
      {
        id: '5',
        title: 'Stock Market Trading',
        description: 'Learn to trade stocks, analyze companies, and build a profitable portfolio',
        difficulty: 'intermediate',
        category: 'Stocks',
        instructor: {
          name: 'Pierre Manga',
          avatar: '/images/instructors/pierre.jpg'
        },
        duration: '10 weeks',
        price: 139.99,
        rating: 4.8,
        studentsCount: 1876,
        gradient: gradients['stock-trading']
      },
      {
        id: '6',
        title: 'Risk Management',
        description: 'Learn advanced risk management strategies',
        difficulty: 'advanced',
        category: 'Risk Management',
        instructor: {
          name: 'Pierre Manga',
          avatar: '/images/instructors/pierre.jpg'
        },
        duration: '6 weeks',
        price: 199.99,
        rating: 4.7,
        studentsCount: 2156,
        gradient: gradients['risk-management']
      },
      {
        id: '7',
        title: 'Trading Psychology Mastery',
        description: 'Develop the mindset of a successful trader',
        difficulty: 'intermediate',
        category: 'Trading Psychology',
        instructor: {
          name: 'Pierre Manga',
          avatar: '/images/instructors/pierre.jpg'
        },
        duration: '6 weeks',
        price: 79.99,
        rating: 4.7,
        studentsCount: 2156,
        gradient: gradients['psychology']
      }
    ];

    // Simulate API call
    setTimeout(() => {
      setAvailableCourses(mockCourses);
      setFeaturedCourses(mockCourses.filter(course => course.rating >= 4.8));
      setLoading(false);
    }, 1000);
  }, []);

  const handleEnroll = (courseId: string) => {
    // Redirect to course preview page for enrollment
    navigate(`/course/${courseId}`);
  };

  const filteredCourses = selectedCategory === 'All' 
    ? availableCourses 
    : availableCourses.filter(course => course.category === selectedCategory);

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>{t('loading')}</p>
      </div>
    );
  }

  return (
    <div className="student-dashboard">
      <div className="dashboard-header">
        <div className="user-welcome">
          <h1>{`${t('welcomeBack')} ${user?.firstName}`}</h1>
          <p>{t('continueLearning')}</p>
        </div>
        <div className="user-stats">
          <div className="stat-card">
            <h3>{t('coursesEnrolled')}</h3>
            <p>{enrolledCourses.length}</p>
          </div>
          <div className="stat-card">
            <h3>{t('coursesCompleted')}</h3>
            <p>0</p>
          </div>
          <div className="stat-card">
            <h3>{t('certificatesEarned')}</h3>
            <p>0</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <section className="featured-courses">
          <div className="section-header">
            <h2>{t('featuredCourses')}</h2>
            <Link to="/courses" className="view-all-link">
              {t('viewAll')}
            </Link>
          </div>
          <div className="featured-courses-grid">
            {featuredCourses.map(course => (
              <div key={course.id} className="featured-course-card">
                <div 
                  className="course-thumbnail"
                  style={{ 
                    background: course.gradient,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '2rem'
                  }}
                >
                  <h3 style={{ color: 'white', margin: 0, fontSize: '1.5rem', marginBottom: '1rem' }}>
                    {course.title}
                  </h3>
                  <div className="course-overlay">
                    <span className="course-rating">
                      {course.rating} ({course.studentsCount} students)
                    </span>
                  </div>
                </div>
                <div className="course-info">
                  <p>{course.description}</p>
                  <div className="course-meta">
                    <span className="difficulty">{t(course.difficulty)}</span>
                    <span className="duration">{course.duration}</span>
                    <span className="price">${course.price}</span>
                  </div>
                  <button 
                    onClick={() => handleEnroll(course.id)} 
                    className="enroll-button"
                  >
                    {t('enrollNow')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="course-categories">
          <div className="categories-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="available-courses">
          <div className="section-header">
            <h2>{t('availableCourses')}</h2>
            <Link to="/courses" className="view-all-link">
              {t('viewAll')}
            </Link>
          </div>
          <div className="courses-grid">
            {filteredCourses.map(course => (
              <div key={course.id} className="course-card">
                <div 
                  className="course-thumbnail"
                  style={{ 
                    background: course.gradient,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '2rem'
                  }}
                >
                  <h3 style={{ color: 'white', margin: 0, fontSize: '1.5rem', marginBottom: '1rem' }}>
                    {course.title}
                  </h3>
                  <div className="course-overlay">
                    <span className="course-rating">
                      {course.rating}
                    </span>
                  </div>
                </div>
                <div className="course-info">
                  <p>{course.description}</p>
                  <div className="course-meta">
                    <span className="difficulty">{t(course.difficulty)}</span>
                    <span className="duration">{course.duration}</span>
                    <span className="price">${course.price}</span>
                  </div>
                  <button 
                    onClick={() => handleEnroll(course.id)} 
                    className="enroll-button"
                  >
                    {t('enrollNow')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentDashboard; 