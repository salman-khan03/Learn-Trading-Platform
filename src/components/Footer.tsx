import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3 className="footer-title">E-Learning</h3>
          <p className="footer-description">
            {t('footerDescription')}
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">{t('quickLinks')}</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">{t('home')}</Link>
            </li>
            <li>
              <Link to="/courses">{t('courses')}</Link>
            </li>
            <li>
              <Link to="/about">{t('about')}</Link>
            </li>
            <li>
              <Link to="/contact">{t('contact')}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">{t('legal')}</h4>
          <ul className="footer-links">
            <li>
              <Link to="/privacy">{t('privacyPolicy')}</Link>
            </li>
            <li>
              <Link to="/terms">{t('termsOfService')}</Link>
            </li>
            <li>
              <Link to="/refund">{t('refundPolicy')}</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} E-Learning. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 