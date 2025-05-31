import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from '../translations/translations';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return savedLanguage || 'en';
  });

  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const initializeGoogleTranslate = useCallback(() => {
    if (!window.google?.translate) return;

    try {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'ar,es,fr,hi,tr',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );

      // Force translate to selected language
      const interval = setInterval(() => {
        const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (select) {
          select.value = language;
          select.dispatchEvent(new Event('change'));
          clearInterval(interval);
        }
      }, 100);
    } catch (error) {
      console.error('Error initializing Google Translate:', error);
    }
  }, [language]);

  const loadGoogleTranslateScript = useCallback(() => {
    if (document.getElementById('google-translate-script')) {
      initializeGoogleTranslate();
      return;
    }

    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.id = 'google-translate-script';
    script.async = true;
    script.onload = () => {
      setIsScriptLoaded(true);
      initializeGoogleTranslate();
    };
    script.onerror = (error) => {
      console.error('Error loading Google Translate script:', error);
    };
    document.body.appendChild(script);
  }, [initializeGoogleTranslate]);

  const setLanguage = useCallback((lang: string) => {
    setLanguageState(lang);
    localStorage.setItem('preferredLanguage', lang);

    if (lang !== 'en') {
      if (!isScriptLoaded) {
        window.googleTranslateElementInit = initializeGoogleTranslate;
        loadGoogleTranslateScript();
      } else {
        initializeGoogleTranslate();
      }
    } else {
      // Reset to English
      try {
        const iframe = document.querySelector('.goog-te-banner-frame') as HTMLIFrameElement;
        if (iframe) {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
          const restore = iframeDoc?.querySelector('#restore') as HTMLElement;
          if (restore) restore.click();
        }
      } catch (error) {
        console.error('Error resetting to English:', error);
      }
    }
  }, [isScriptLoaded, loadGoogleTranslateScript, initializeGoogleTranslate]);

  useEffect(() => {
    // Handle RTL for Arabic
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;

    // Set HTML lang attribute
    document.documentElement.setAttribute('lang', language);

    // Apply RTL-specific class to body if needed
    document.body.classList.toggle('rtl', language === 'ar');

    // Initialize translation if not English and not already initialized
    if (language !== 'en' && !isScriptLoaded) {
      setLanguage(language);
    }
  }, [language, isScriptLoaded, setLanguage]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
      <div id="google_translate_element" style={{ display: 'none' }} />
    </LanguageContext.Provider>
  );
};

// Add type definition for Google Translate
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: any;
        Element: any;
      };
    };
  }
} 
