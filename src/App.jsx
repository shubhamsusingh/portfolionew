import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CanvasBackground from './components/CanvasBackground';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('shubham_portfolio_theme') || 'dark';
  });

  const [toast, setToast] = useState({ message: '', type: 'success' });

  // Sync theme with document HTML attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('shubham_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast({ message: '', type: 'success' });
    }, 3800);
  };

  return (
    <div className="app-container">
      {/* Dynamic Interactive Background Mesh */}
      <CanvasBackground />

      {/* Floating Glass Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <StatsBar />
        <About onTriggerToast={showToast} />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact onTriggerToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Feedback */}
      <Toast message={toast.message} type={toast.type} />
    </div>
  );
}
