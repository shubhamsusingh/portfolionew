import React from 'react';
import { Briefcase, GraduationCap, CheckCircle2, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Career Path</span>
          </div>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="section-subtitle">
            A timeline of professional leadership, engineering impact, and academic foundation.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {experience.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-card">
                <div className="timeline-meta">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <span className="timeline-company">{item.company}</span>
                  </div>
                  <span className="timeline-period">{item.period}</span>
                </div>

                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={13} />
                    {item.location}
                  </span>
                  <span>•</span>
                  <span>{item.type}</span>
                </div>

                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>

                <ul className="timeline-achievements">
                  {item.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="timeline-achievement-item">
                      <CheckCircle2 size={16} />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Education Milestone */}
          {education.map((edu, idx) => (
            <div key={`edu-${idx}`} className="timeline-item">
              <div className="timeline-dot" style={{ borderColor: 'var(--accent-purple)', boxShadow: '0 0 12px var(--accent-purple)' }}></div>
              <div className="glass-card timeline-card">
                <div className="timeline-meta">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <GraduationCap size={18} color="var(--accent-purple)" />
                      <h3 className="timeline-role" style={{ fontSize: '1.15rem' }}>{edu.degree}</h3>
                    </div>
                    <span className="timeline-company">{edu.institution}</span>
                  </div>
                  <span className="timeline-period" style={{ color: 'var(--accent-purple)' }}>{edu.period}</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
