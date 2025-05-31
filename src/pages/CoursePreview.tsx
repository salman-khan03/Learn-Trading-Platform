import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import PaymentForm from '../components/PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_PUBLISHABLE_KEY } from '../config/stripe';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import '../styles/CoursePreview.css';

// Initialize Stripe
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  previewVideo: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  instructor: {
    name: string;
    avatar: string;
    bio: string;
    title: string;
    experience: string;
  };
  duration: string;
  price: number;
  rating: number;
  studentsCount: number;
  prerequisites: string[];
  whatYouWillLearn: string[];
  curriculum: {
    modules: {
      id: string;
      title: string;
      description: string;
      lessons: {
        id: string;
        title: string;
        duration: string;
        type: 'video' | 'quiz' | 'assignment';
      }[];
    }[];
  };
}

// Simple translations object
const translations = {
  en: {
    enrollNow: 'Enroll Now',
    processing: 'Processing...',
    paymentSuccess: 'Payment successful! You are now enrolled in the course.',
    loginRequired: 'Please log in to enroll in this course.',
    alreadyEnrolled: 'You are already enrolled in this course.',
    completePayment: 'Complete Payment',
    oneTimePayment: 'One-time payment',
    loadingCourse: 'Loading course details...',
    courseNotFound: 'Course not found',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    whatYouWillLearn: 'What You Will Learn',
    curriculum: 'Curriculum',
    prerequisites: 'Prerequisites',
    previewComingSoon: 'Preview Coming Soon'
  }
} as const;

type TranslationKey = keyof typeof translations.en;

const CoursePreview: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [showPayment, setShowPayment] = useState(false);
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const translate = (key: TranslationKey): string => translations.en[key];

  useEffect(() => {
    // In a real app, this would be an API call
    const mockCourses: Course[] = [
      {
        id: '1',
        title: 'Forex Fundamentals',
        description: 'Learn the basics of trading and market analysis',
        thumbnail: '/images/courses/trading-intro.jpg',
        previewVideo: 'https://www.youtube.com/embed/your-preview-video-id',
        difficulty: 'beginner' as const,
        category: 'Trading Basics',
        instructor: {
          name: 'Pierre Manga',
          avatar: '/images/instructors/pierre.jpg',
          bio: 'Pierre Manga is a seasoned trader with over 15 years of experience in the financial markets. He has trained thousands of students worldwide and is known for his practical approach to trading education.',
          title: 'Senior Trading Instructor',
          experience: '15+ years of trading experience'
        },
        duration: '8 weeks',
        price: 99.99,
        rating: 4.8,
        studentsCount: 1234,
        prerequisites: [
          'Basic understanding of financial markets',
          'Familiarity with basic mathematics',
          'Access to a trading platform (demo account)'
        ],
        whatYouWillLearn: [
          'Understand market fundamentals and trading concepts',
          'Master technical analysis techniques',
          'Develop risk management strategies',
          'Build a trading plan and system',
          'Analyze market trends and patterns'
        ],
        curriculum: {
          modules: [
            {
              id: '1',
              title: 'Introduction to Financial Markets',
              description: 'Learn the basics of financial markets and trading concepts',
              lessons: [
                { id: '1', title: 'Understanding Market Basics', duration: '45 min', type: 'video' },
                { id: '2', title: 'Types of Markets and Instruments', duration: '60 min', type: 'video' },
                { id: '3', title: 'Market Participants and Their Roles', duration: '45 min', type: 'video' },
                { id: '4', title: 'Quiz: Market Fundamentals', duration: '30 min', type: 'quiz' }
              ]
            }
          ]
        }
      },
      {
        id: '4',
        title: 'Cryptocurrency Trading',
        description: 'Master crypto markets, blockchain technology, and digital asset trading',
        thumbnail: '/images/courses/crypto-trading.jpg',
        previewVideo: 'https://www.youtube.com/embed/your-preview-video-id',
        difficulty: 'intermediate' as const,
        category: 'Cryptocurrency',
        instructor: {
          name: 'Pierre Manga',
          avatar: '/images/instructors/pierre.jpg',
          bio: 'Pierre Manga is a seasoned trader with over 15 years of experience in the financial markets. He has trained thousands of students worldwide and is known for his practical approach to trading education.',
          title: 'Senior Trading Instructor',
          experience: '15+ years of trading experience'
        },
        duration: '8 weeks',
        price: 159.99,
        rating: 4.9,
        studentsCount: 2891,
        prerequisites: [
          'Basic understanding of blockchain technology',
          'Familiarity with cryptocurrency concepts',
          'Access to a crypto exchange (demo account)'
        ],
        whatYouWillLearn: [
          'Understand blockchain fundamentals',
          'Master crypto trading techniques',
          'Develop risk management strategies',
          'Build a crypto trading plan',
          'Analyze market trends and patterns'
        ],
        curriculum: {
          modules: [
            {
              id: '1',
              title: 'Introduction to Cryptocurrency',
              description: 'Learn the basics of blockchain and cryptocurrency',
              lessons: [
                { id: '1', title: 'Understanding Blockchain Basics', duration: '45 min', type: 'video' },
                { id: '2', title: 'Types of Cryptocurrencies', duration: '60 min', type: 'video' },
                { id: '3', title: 'Crypto Market Participants', duration: '45 min', type: 'video' },
                { id: '4', title: 'Quiz: Crypto Fundamentals', duration: '30 min', type: 'quiz' }
              ]
            }
          ]
        }
      }
    ];

    // Find the course with the matching ID
    const foundCourse = mockCourses.find(course => course.id === id);
    
    // Simulate API call
    setTimeout(() => {
      if (foundCourse) {
        setCourse(foundCourse);
      }
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleEnroll = () => {
    console.log('Enroll button clicked');
    if (!user) {
      toast.error(t('loginRequired'));
      navigate('/login');
      return;
    }

    const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
    if (enrolledCourses.includes(id)) {
      toast.error(t('alreadyEnrolled'));
      return;
    }

    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    if (id) {
      const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
      enrolledCourses.push(id);
      localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
      toast.success(t('paymentSuccess'));
      navigate(`/course/${id}`);
    }
  };

  const toggleModule = (moduleId: string) => {
    setActiveModule(activeModule === moduleId ? null : moduleId);
  };

  if (loading) {
    return (
      <div className="loading">{translate('loadingCourse')}</div>
    );
  }

  if (!course) {
    return (
      <div className="preview-error">
        <p>{translate('courseNotFound')}</p>
      </div>
    );
  }

  return (
    <div className="course-preview">
      <div className="preview-header">
        <div className="preview-info">
          <div className="course-header">
            <h1>{course.title}</h1>
            <div className="course-meta">
              <span className="difficulty">{translate(course.difficulty)}</span>
              <span className="duration">⏱️ {course.duration}</span>
              <span className="rating">⭐ {course.rating}</span>
              <span className="students">👥 {course.studentsCount} students</span>
            </div>
          </div>
          <p className="description">{course.description}</p>
          <div className="instructor-preview">
            <img src={course.instructor.avatar} alt={course.instructor.name} className="instructor-avatar" />
            <div className="instructor-details">
              <h3>{course.instructor.name}</h3>
              <p>{course.instructor.title}</p>
            </div>
          </div>
        </div>
        <div className="preview-video">
          {course.previewVideo ? (
            <div className="video-wrapper">
              <iframe
                src={course.previewVideo}
                title={course.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="preview-iframe"
              ></iframe>
            </div>
          ) : (
            <div className="video-placeholder">
              <div className="placeholder-content">
                <span className="play-icon">▶</span>
                <p>{translate('previewComingSoon')}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="preview-content">
        <div className="content-main">
          <section className="what-you-will-learn">
            <h3>{translate('whatYouWillLearn')}</h3>
            <ul>
              {course.whatYouWillLearn.map((item, index) => (
                <li key={index}>✓ {item}</li>
              ))}
            </ul>
          </section>

          <section className="curriculum">
            <h3>{translate('curriculum')}</h3>
            {course.curriculum.modules.map(module => (
              <div key={module.id} className="module">
                <div 
                  className="module-header"
                  onClick={() => toggleModule(module.id)}
                >
                  <h4>{module.title}</h4>
                  <span className="module-toggle">
                    {activeModule === module.id ? '▼' : '▶'}
                  </span>
                </div>
                {activeModule === module.id && (
                  <>
                    <p className="module-description">{module.description}</p>
                    <ul className="lessons-list">
                      {module.lessons.map(lesson => (
                        <li key={lesson.id} className="lesson-item">
                          <span className="lesson-type">
                            {lesson.type === 'video' && '🎥'}
                            {lesson.type === 'quiz' && '📝'}
                            {lesson.type === 'assignment' && '📋'}
                          </span>
                          <span className="lesson-title">{lesson.title}</span>
                          <span className="lesson-duration">{lesson.duration}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </section>

          <section className="prerequisites">
            <h3>{translate('prerequisites')}</h3>
            <ul>
              {course.prerequisites.map((prerequisite, index) => (
                <li key={index}>• {prerequisite}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="content-sidebar">
          <div className="enrollment-section">
            {showPayment ? (
              <div className="payment-section">
                <h3>{translate('completePayment')}</h3>
                <Elements stripe={stripePromise}>
                  <PaymentForm
                    amount={course?.price || 0}
                    onSuccess={handlePaymentSuccess}
                    courseName={course?.title || ''}
                  />
                </Elements>
              </div>
            ) : (
              <div className="purchase-card">
                <div className="price-info">
                  <h2>${course?.price}</h2>
                  <span className="price-note">{translate('oneTimePayment')}</span>
                </div>
                <button
                  className="enroll-button"
                  onClick={handleEnroll}
                  disabled={processing}
                >
                  {processing ? translate('processing') : translate('enrollNow')}
                </button>
              </div>
            )}
          </div>

          <div className="instructor-card">
            <img src={course.instructor.avatar} alt={course.instructor.name} className="instructor-avatar" />
            <h3>{course.instructor.name}</h3>
            <p className="instructor-title">{course.instructor.title}</p>
            <p className="instructor-experience">{course.instructor.experience}</p>
            <p className="instructor-bio">{course.instructor.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview; 