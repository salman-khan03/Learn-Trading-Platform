import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isAuthenticated } = useAuth();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/register');
    }
  };

  const handleEnrollment = (courseId: string, price: number) => {
    if (!isAuthenticated) {
      navigate('/register');
      return;
    }
    // TODO: Integrate with payment gateway
    console.log(`Processing payment of $${price} for course ${courseId}`);
    navigate('/dashboard');
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{t('heroTitle')}</h1>
            <p className="hero-description">{t('heroDescription')}</p>
            <div className="hero-actions">
              <button onClick={handleGetStarted} className="button button-primary">
                {isAuthenticated ? t('startLearning') : t('getStarted')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="learning-path">
        <div className="container">
          <h2 className="section-title">{t('availableCourses')}</h2>
          <div className="courses-grid">
            <div className="course-card">
              <div className="course-image-wrapper" style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)' }}>
                <span className="course-badge" style={{ color: '#000000' }}>{t('beginnerBadge')}</span>
                <h2>{t('beginnerTitle')}</h2>
                <p>{t('beginnerSubtitle')}</p>
              </div>
              <div className="course-content">
                <h3 className="course-title">{t('beginnerDescription')}</h3>
                <div className="course-info">
                  <div className="course-duration">
                    <span className="info-icon">⏱️</span>
                    <span>{t('beginnerDuration')}</span>
                  </div>
                </div>
                <div className="course-footer">
                  <div className="price-container">
                    <span className="course-price">$99</span>
                    <span className="price-note">{t('oneTimePayment')}</span>
                  </div>
                  <button 
                    className="button button-primary enroll"
                    onClick={() => handleEnrollment('forex-fundamentals', 99)}
                  >
                    {t('enrollNow')}
                  </button>
                </div>
              </div>
            </div>

            <div className="course-card">
              <div className="course-image-wrapper" style={{ background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)' }}>
                <span className="course-badge" style={{ color: '#000000' }}>{t('intermediateBadge')}</span>
                <h2>{t('intermediateTitle')}</h2>
                <p>{t('intermediateSubtitle')}</p>
              </div>
              <div className="course-content">
                <h3 className="course-title">{t('intermediateDescription')}</h3>
                <div className="course-info">
                  <div className="course-duration">
                    <span className="info-icon">⏱️</span>
                    <span>{t('intermediateDuration')}</span>
                  </div>
                </div>
                <div className="course-footer">
                  <div className="price-container">
                    <span className="course-price">$149</span>
                    <span className="price-note">{t('oneTimePayment')}</span>
                  </div>
                  <button 
                    className="button button-primary enroll"
                    onClick={() => handleEnrollment('technical-analysis', 149)}
                  >
                    {t('enrollNow')}
                  </button>
                </div>
              </div>
            </div>

            <div className="course-card">
              <div className="course-image-wrapper" style={{ background: 'linear-gradient(135deg, #6366F1 0%, #4338CA 100%)' }}>
                <span className="course-badge" style={{ color: '#000000' }}>{t('advancedBadge')}</span>
                <h2>{t('advancedTitle')}</h2>
                <p>{t('advancedSubtitle')}</p>
              </div>
              <div className="course-content">
                <h3 className="course-title">{t('advancedDescription')}</h3>
                <div className="course-info">
                  <div className="course-duration">
                    <span className="info-icon">⏱️</span>
                    <span>{t('advancedDuration')}</span>
                  </div>
                </div>
                <div className="course-footer">
                  <div className="price-container">
                    <span className="course-price">$199</span>
                    <span className="price-note">{t('oneTimePayment')}</span>
                  </div>
                  <button 
                    className="button button-primary enroll"
                    onClick={() => handleEnrollment('risk-management', 199)}
                  >
                    {t('enrollNow')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>{t('interactiveFeatures')}</h3>
              <p>{t('progressDescription')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>{t('progressTracking')}</h3>
              <p>{t('progressDescription')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎥</div>
              <h3>{t('liveWebinars')}</h3>
              <p>{t('webinarsDescription')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>{t('community')}</h3>
              <p>{t('communityDescription')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t('ctaTitle')}</h2>
            <p>{t('ctaDescription')}</p>
            <button onClick={handleGetStarted} className="button button-primary">
              {isAuthenticated ? t('startLearning') : t('getStarted')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 