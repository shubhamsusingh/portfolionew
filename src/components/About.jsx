import React from 'react';
import { 
  User, 
  Layers, 
  Zap, 
  Sparkles, 
  BookOpen, 
  FileText
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About({ onTriggerToast }) {
  const { personal, highlights } = portfolioData;

  const iconMap = {
    Layers: <Layers size={22} />,
    Zap: <Zap size={22} />,
    Sparkles: <Sparkles size={22} />,
    BookOpen: <BookOpen size={22} />
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    if (onTriggerToast) {
      onTriggerToast("Resume download initialized! (Replace with your actual resume PDF)", "info");
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>Biography & Mindset</span>
          </div>
          <h2 className="section-title">
            Crafting Digital Products with <span className="gradient-text">Passion & Precision</span>
          </h2>
          <p className="section-subtitle">
            A closer look into my engineering background, core philosophies, and what drives my work every day.
          </p>
        </div>

        <div className="about-grid">
          {/* Narrative Story */}
          <div className="about-story">
            {personal.longBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={handleResumeClick}
              >
                <FileText size={18} />
                <span>Download Resume / CV</span>
              </button>
            </div>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="about-highlights-grid">
            {highlights.map((item, idx) => (
              <div key={idx} className="glass-card highlight-card">
                <div className="highlight-icon-box">
                  {iconMap[item.icon] || <Sparkles size={22} />}
                </div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
