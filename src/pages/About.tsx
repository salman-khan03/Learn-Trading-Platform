import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="about-title">{t('aboutUs')}</h1>
        <p className="about-subtitle">{t('aboutDescription')}</p>
      </div>

      <div className="about-content">
        <section className="mission-section">
          <h2 className="mission-title">{t('ourMission')}</h2>
          <p className="mission-text">
            {t('missionStatement')}
          </p>
        </section>

        <section className="features-section">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👨‍🏫</div>
              <h3 className="feature-title">{t('expertInstructors')}</h3>
              <p className="feature-description">{t('instructorsDescription')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">{t('practicalApproach')}</h3>
              <p className="feature-description">{t('practicalDescription')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3 className="feature-title">{t('globalCommunity')}</h3>
              <p className="feature-description">{t('aboutCommunityDescription')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3 className="feature-title">{t('lifetimeAccess')}</h3>
              <p className="feature-description">{t('accessDescription')}</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2 className="team-title">{t('meetOurTeam')}</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">👨‍💼</div>
              <h3 className="member-name">Pierre Mangah</h3>
              <p className="member-role">{t('founderCEO')}</p>
              <p className="member-bio">{t('johnBio')}</p>
            </div>
            <div className="team-member">
              <div className="member-image">👩‍💼</div>
              <h3 className="member-name">Salim</h3>
              <p className="member-role">{t('coFounder')}</p>
              <p className="member-bio">{t('sarahBio')}</p>
            </div>
            <div className="team-member">
              <div className="member-image">👨‍💻</div>
              <h3 className="member-name">Michael Chen</h3>
              <p className="member-role">{t('technicalLead')}</p>
              <p className="member-bio">{t('michaelBio')}</p>
            </div>
          </div>
        </section>

        <section className="values-section">
          <h2 className="values-title">{t('ourValues')}</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3 className="value-title">
                <span className="value-icon">⭐</span>
                {t('excellence')}
              </h3>
              <p className="value-description">{t('excellenceDescription')}</p>
            </div>
            <div className="value-card">
              <h3 className="value-title">
                <span className="value-icon">🤝</span>
                {t('integrity')}
              </h3>
              <p className="value-description">{t('integrityDescription')}</p>
            </div>
            <div className="value-card">
              <h3 className="value-title">
                <span className="value-icon">💡</span>
                {t('innovation')}
              </h3>
              <p className="value-description">{t('innovationDescription')}</p>
            </div>
            <div className="value-card">
              <h3 className="value-title">
                <span className="value-icon">👥</span>
                {t('community')}
              </h3>
              <p className="value-description">{t('communityValueDescription')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 