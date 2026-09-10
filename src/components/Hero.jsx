import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = personal.typingRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personal.typingRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, personal.typingRoles]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-centered">
          <div className="hero-badge-container">
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span>{personal.status.text}</span>
            </div>
            <div className="section-badge" style={{ margin: 0 }}>
              <Sparkles size={14} />
              <span>Full Stack & Frontend Developer</span>
            </div>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personal.name}</span>
          </h1>

          <div className="hero-typing">
            <span>{displayedText}</span>
            <span className="typing-cursor"></span>
          </div>

          <p className="hero-description">
            {personal.tagline} {personal.shortBio}
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => scrollToSection(e, 'projects')}
            >
              <span>Explore 4 Featured Projects</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Social profiles */}
          <div className="hero-socials">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noreferrer"
              className="btn-icon"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-icon"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={personal.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="btn-icon"
              aria-label="Twitter / X Profile"
            >
              <TwitterIcon size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="btn-icon"
              aria-label="Send Direct Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
