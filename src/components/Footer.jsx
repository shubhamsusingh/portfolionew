import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="nav-logo" onClick={scrollToTop}>
              <div className="nav-logo-icon">S</div>
              <span>{personal.name}</span>
            </a>
            <p className="footer-tagline">
              Engineering modern, scalable web applications with intuitive design and clean architecture.
            </p>
          </div>

          <div className="footer-nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noreferrer"
              className="btn-icon"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-icon"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={personal.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="btn-icon"
              aria-label="Twitter"
            >
              <TwitterIcon size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="btn-icon"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            Built with React, Vite & Vanilla CSS
          </p>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        type="button"
        className={`back-to-top-btn ${showTopBtn ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        title="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
