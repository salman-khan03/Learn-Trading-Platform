# E-Learning Platform

A modern e-learning platform that allows instructors to sell courses with protected video content and supports multiple languages.

## Features

- User authentication (Login/Registration)
- Course browsing and purchasing
- Protected video content with anti-screen recording measures
- Responsive design for all devices
- Modern UI with consistent styling
- Multilingual support (English, French, Turkish, Hindi, Arabic)
- RTL support for Arabic
- Persistent language preferences

## Tech Stack

- React.js with TypeScript
- React Router for navigation
- Axios for API calls
- CSS for styling
- Google Translate integration
- Custom translations for UI components

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── assets/        # Images, fonts, etc.
├── styles/        # Global styles and theme
├── contexts/      # React contexts (Language, etc.)
├── translations/  # Translation files
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── services/      # API services
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Development Guidelines

- Follow TypeScript best practices
- Maintain consistent code formatting
- Write clean, maintainable code
- Test components thoroughly
- Keep the UI responsive and accessible
- Ensure translations are complete and accurate
- Test RTL layout for Arabic content

## Language Support

The platform supports the following languages:
- English (default)
- French
- Turkish
- Hindi
- Arabic (with RTL support)

Language features include:
- Automatic language detection
- Persistent language preferences
- Custom translations for UI components
- Google Translate integration for dynamic content
- RTL layout support
- Language-specific fonts (Noto Sans family)

## Color Scheme

- Primary: #4f46e5
- Secondary colors will be defined in the theme 