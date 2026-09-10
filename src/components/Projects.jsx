import React, { useState } from 'react';
import { 
  FolderGit2, 
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Full Stack', 'Frontend', 'AI & Tools'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase());

  // Render SVG background pattern for project banners
  const renderBannerPattern = (projectId) => {
    switch (projectId) {
      case 'devpulse':
        return (
          <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-banner-decor">
            <rect width="400" height="200" fill="#0b1329" />
            <path d="M20 150 Q 80 80, 140 120 T 260 70 T 380 90" stroke="#38bdf8" strokeWidth="4" fill="none" />
            <circle cx="140" cy="120" r="6" fill="#818cf8" />
            <circle cx="260" cy="70" r="6" fill="#38bdf8" />
            <circle cx="380" cy="90" r="6" fill="#c084fc" />
            <rect x="50" y="30" width="110" height="40" rx="8" fill="rgba(56,189,248,0.15)" stroke="rgba(56,189,248,0.3)" />
          </svg>
        );
      case 'apexcommerce':
        return (
          <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-banner-decor">
            <rect width="400" height="200" fill="#081e1d" />
            <circle cx="200" cy="100" r="60" fill="rgba(16,185,129,0.15)" />
            <rect x="140" y="50" width="120" height="100" rx="16" stroke="#10b981" strokeWidth="2" fill="#0f2926" />
            <line x1="165" y1="80" x2="235" y2="80" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
            <line x1="165" y1="105" x2="215" y2="105" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
            <circle cx="230" cy="125" r="8" fill="#10b981" />
          </svg>
        );
      case 'flowspace':
        return (
          <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-banner-decor">
            <rect width="400" height="200" fill="#1e102d" />
            <circle cx="120" cy="100" r="30" stroke="#c084fc" strokeWidth="2" strokeDasharray="4 4" />
            <rect x="230" y="70" width="60" height="60" rx="12" stroke="#a855f7" strokeWidth="2" />
            <line x1="150" y1="100" x2="230" y2="100" stroke="#e879f9" strokeWidth="2" strokeLinecap="round" />
            <path d="M120 130 C 140 170, 240 170, 260 130" stroke="#818cf8" strokeWidth="2" fill="none" />
          </svg>
        );
      case 'neuroprompt':
        return (
          <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-banner-decor">
            <rect width="400" height="200" fill="#251605" />
            <polygon points="200,40 250,140 150,140" stroke="#f59e0b" strokeWidth="2" fill="rgba(245,158,11,0.15)" />
            <circle cx="200" cy="90" r="15" fill="#fbbf24" />
            <line x1="80" y1="100" x2="160" y2="100" stroke="#f97316" strokeWidth="2" />
            <line x1="240" y1="100" x2="320" y2="100" stroke="#f97316" strokeWidth="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Endeavors</span>
          </div>
          <h2 className="section-title">
            4 Featured <span className="gradient-text">Engineering Projects</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of full-stack systems, modern frontend applications, and developer tools.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-card project-card"
              onClick={() => setSelectedProject(project)}
            >
              {/* Graphic Banner */}
              <div className="project-banner">
                {renderBannerPattern(project.id)}
                <span className="project-badge-corner">{project.category}</span>
              </div>

              {/* Card Body */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.shortDescription}</p>

                {/* Tech Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer / Links */}
                <div className="project-footer">
                  <span className="details-indicator">
                    <span>View Architecture</span>
                    <ArrowUpRight size={16} />
                  </span>

                  <div className="project-links" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-icon"
                      style={{ width: '34px', height: '34px' }}
                      aria-label={`${project.title} source code`}
                      title="Source Code"
                    >
                      <GithubIcon size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal View for detailed breakdown */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
