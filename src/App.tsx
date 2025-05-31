import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { CourseProvider } from './contexts/CourseContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import StudentDashboard from './pages/StudentDashboard';
import CoursePreview from './pages/CoursePreview';

// Import i18n configuration
import './i18n';
import './styles/fonts.css';
import './styles/global.css';
import './App.css';

// Log to verify i18n is initialized
console.log('App component rendering, i18n should be initialized');

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <CourseProvider>
          <Router>
            <div className="app">
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route 
                    path="/dashboard" 
                    element={
                      <ProtectedRoute>
                        <StudentDashboard />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/courses" 
                    element={
                      <ProtectedRoute>
                        <Courses />
                      </ProtectedRoute>
                    } 
                  />
                  <Route path="/course/:id" element={<CoursePreview />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </CourseProvider>
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App; 