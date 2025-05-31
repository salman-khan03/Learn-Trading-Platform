import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageSwitcher.css';

interface Language {
  name: string;
  flag: string;
  rtl?: boolean;
}

const languageMap: Record<string, Language> = {
  en: { name: 'English', flag: '🇬🇧' },
  fr: { name: 'Français', flag: '🇫🇷' },
  tr: { name: 'Türkçe', flag: '🇹🇷' },
  hi: { name: 'हिंदी', flag: '🇮🇳' },
  ar: { name: 'العربية', flag: '🇸🇦', rtl: true }
};

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentLanguage = languageMap[language] || languageMap.en;
  const isRTL = currentLanguage.rtl;

  return (
    <div className={`language-switcher ${isRTL ? 'rtl' : ''}`} ref={dropdownRef}>
      <button
        className="language-button"
        onClick={toggleDropdown}
        aria-label="Select language"
        aria-expanded={dropdownOpen}
      >
        <span className="current-language">
          <span className="flag">{currentLanguage.flag}</span>
          <span className="language-name">{currentLanguage.name}</span>
        </span>
        <span className="dropdown-arrow">▼</span>
      </button>
      
      {dropdownOpen && (
        <div className="language-dropdown">
          {Object.entries(languageMap).map(([code, { name, flag }]) => (
            <button
              key={code}
              className={`language-option ${language === code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(code)}
            >
              <span className="flag">{flag}</span>
              <span className="name">{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;