import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Contact.css';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1 className="contact-title">{t('contactUs')}</h1>
          <p className="contact-subtitle">{t('contactDescription')}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>{t('address')}</h3>
              <p>123 Learning Street</p>
              <p>Education District</p>
              <p>12345 Knowledge City</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>{t('phone')}</h3>
              <p>+1 (555) 123-4567</p>
              <p>Mon - Fri, 9:00 - 18:00</p>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>{t('email')}</h3>
              <p>support@learnpro.com</p>
              <p>info@learnpro.com</p>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>{t('sendMessage')}</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t('subject')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  disabled={status === 'sending'}
                />
              </div>

              {status === 'success' && (
                <div className="status-message success">
                  {t('messageSent')}
                </div>
              )}

              {status === 'error' && (
                <div className="status-message error">
                  {t('messageError')}
                </div>
              )}

              <button
                type="submit"
                className="submit-button"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? t('sending') : t('send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 