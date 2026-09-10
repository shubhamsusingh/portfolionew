import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="section-badge" style={{ marginBottom: '0.4rem' }}>
              {project.category}
            </span>
            <h3 className="modal-title">{project.title}</h3>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-content">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-primary)' }}>
            {project.longDescription}
          </p>

          <div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.85rem', color: 'var(--text-primary)' }}>
              Key Architectural Highlights
            </h4>
            <ul className="modal-highlights">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="modal-highlight-item">
                  <CheckCircle2 size={18} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              Technologies Utilized
            </h4>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links - Only Source Code as requested */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <GithubIcon size={18} />
              <span>Inspect Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
