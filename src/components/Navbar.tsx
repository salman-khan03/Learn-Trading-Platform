import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { t } = useLanguage();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          LearnPro
        </Link>

        <div className="navbar-links">
          <Link to="/" className="nav-link">{t('home')}</Link>
          <Link to="/courses" className="nav-link">{t('courses')}</Link>
          {isAuthenticated && (
            <Link to="/dashboard" className="nav-link">{t('dashboard')}</Link>
          )}
        </div>

        <div className="navbar-right">
          <LanguageSwitcher />
          <div className="navbar-auth">
            {isAuthenticated ? (
              <>
                <div className="user-menu">
                  <span className="user-name">{user?.firstName}</span>
                  <div className="user-dropdown">
                    <Link to="/dashboard" className="dropdown-item">
                      {t('dashboard')}
                    </Link>
                    <Link to="/profile" className="dropdown-item">
                      {t('myProfile')}
                    </Link>
                    <button onClick={handleLogout} className="dropdown-item">
                      {t('signOut')}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link login">{t('signIn')}</Link>
                <Link to="/register" className="nav-link signup">{t('createAccount')}</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 