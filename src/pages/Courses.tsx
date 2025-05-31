import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Courses.css';

const Courses: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleEnrollment = (courseId: string, price: number) => {
    // TODO: Integrate with payment gateway
    console.log(`Processing payment of $${price} for course ${courseId}`);
    navigate('/dashboard');
  };

  return (
    <div className="courses-page">
      <div className="container">
        <h1 className="courses-title">{t('availableCourses')}</h1>
        
        {/* Main Learning Paths */}
        <h2 className="courses-section-title">{t('MainLearningPaths')}</h2>
        <div className="courses-grid">
          {/* Beginner Course */}
          <div className="course-card">
            <div className="course-image-wrapper" style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)' }}>
              <span className="course-badge" style={{ color: '#000000' }}>{t('beginnerBadge')}</span>
              <h2>{t('Beginner')}</h2>
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

          {/* Intermediate Course */}
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

          {/* Advanced Course */}
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

        {/* Specialized Courses */}
        <h2 className="courses-section-title">{t('SpecializedCourses')}</h2>
        <div className="courses-grid">
          {/* Price Action Course */}
          <div className="course-card">
            <div className="course-image-wrapper" style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' }}>
              <span className="course-badge" style={{ color: '#000000' }}>{t('specializedBadge')}</span>
              <h2>{t('priceAction')}</h2>
              <p>{t('Learn to trade with pure price movement by analyzing candlestick patterns, support, and resistance levels')}</p>
            </div>
            <div className="course-content">
              <h3 className="course-title">{t('priceActionDescription')}</h3>
              <div className="course-info">
                <div className="course-duration">
                  <span className="info-icon">⏱️</span>
                  <span>8 {t('weeks')}</span>
                </div>
              </div>
              <div className="course-footer">
                <div className="price-container">
                  <span className="course-price">$249</span>
                  <span className="price-note">{t('oneTimePayment')}</span>
                </div>
                <button 
                  className="button button-primary enroll"
                  onClick={() => handleEnrollment('price-action-mastery', 249)}
                >
                  {t('enrollNow')}
                </button>
              </div>
            </div>
          </div>

          {/* Algorithmic Trading Course */}
          <div className="course-card">
            <div className="course-image-wrapper" style={{ background: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)' }}>
              <span className="course-badge" style={{ color: '#000000' }}>{t('specializedBadge')}</span>
              <h2>{t('algoTrading')}</h2>
              <p>{t('Automate your trading strategies using coding, backtesting, and data-driven decision-making techniques.')}</p>
            </div>
            <div className="course-content">
              <h3 className="course-title">{t('algoTradingDescription')}</h3>
              <div className="course-info">
                <div className="course-duration">
                  <span className="info-icon">⏱️</span>
                  <span>12 {t('weeks')}</span>
                </div>
              </div>
              <div className="course-footer">
                <div className="price-container">
                  <span className="course-price">$299</span>
                  <span className="price-note">{t('oneTimePayment')}</span>
                </div>
                <button 
                  className="button button-primary enroll"
                  onClick={() => handleEnrollment('algorithmic-trading', 299)}
                >
                  {t('enrollNow')}
                </button>
              </div>
            </div>
          </div>

          {/* Market Psychology Course */}
          <div className="course-card">
            <div className="course-image-wrapper" style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)' }}>
              <span className="course-badge" style={{ color: '#000000' }}>{t('specializedBadge')}</span>
              <h2>{t('Psychology Trading')}</h2>
              <p>{t('Develop the mindset and risk management skills needed to trade consistently and avoid costly mistakes.')}</p>
            </div>
            <div className="course-content">
              <h3 className="course-title">{t('psychologyDescription')}</h3>
              <div className="course-info">
                <div className="course-duration">
                  <span className="info-icon">⏱️</span>
                  <span>6 {t('weeks')}</span>
                </div>
              </div>
              <div className="course-footer">
                <div className="price-container">
                  <span className="course-price">$179</span>
                  <span className="price-note">{t('oneTimePayment')}</span>
                </div>
                <button 
                  className="button button-primary enroll"
                  onClick={() => handleEnrollment('market-psychology', 179)}
                >
                  {t('enrollNow')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Strategy */}
        <h2 className="courses-section-title">{t('PremiumStrategy')}</h2>
        <div className="courses-grid">
          {/* Anaja Strategy Course */}
          <div className="course-card premium">
            <div className="course-image-wrapper" style={{ 
              background: 'linear-gradient(135deg, #FFD700 0%, #B8860B 100%)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div className="premium-badge">
                <span>★ Premium</span>
              </div>
              <span className="course-badge" style={{ color: '#000000' }}>{t('exclusiveBadge')}</span>
              <h2>{t('AnajaStrategy5.0')}</h2>
              <p>{t('Unlock the exclusive Anaja Strategy 5.0 to achieve consistent profitability in forex trading.')}</p>
            </div>
            <div className="course-content">
              <h3 className="course-title">{t('anajaStrategyDescription')}</h3>
              <div className="course-info">
                <div className="course-duration">
                  <span className="info-icon">⏱️</span>
                  <span>6 {t('weeks')}</span>
                </div>
                <div className="course-features">
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>{t('exclusiveAccess')}</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>{t('personalizedSupport')}</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>{t('lifetimeAccess')}</span>
                  </div>
                </div>
              </div>
              <div className="course-footer">
                <div className="price-container">
                  <span className="course-price premium-price">$500</span>
                  <span className="price-note">{t('oneTimePayment')}</span>
                </div>
                <button 
                  className="button button-premium enroll"
                  onClick={() => handleEnrollment('Anaja-strategy', 500)}
                >
                  {t('enrollNow')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses; 