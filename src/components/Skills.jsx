import React, { useState } from 'react';
import { 
  Code2, 
  FileCode2, 
  FileType2, 
  LayoutTemplate, 
  Palette, 
  Cpu, 
  Globe, 
  Smartphone, 
  Server, 
  Workflow, 
  Network, 
  Database, 
  HardDrive, 
  ShieldCheck, 
  GitBranch, 
  Flame, 
  Box, 
  Terminal, 
  Cloud,
  Wrench
} from 'lucide-react';
import { FigmaIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const iconRegistry = {
    Code2: <Code2 size={20} />,
    FileCode2: <FileCode2 size={20} />,
    FileType2: <FileType2 size={20} />,
    LayoutTemplate: <LayoutTemplate size={20} />,
    Palette: <Palette size={20} />,
    Cpu: <Cpu size={20} />,
    Globe: <Globe size={20} />,
    Smartphone: <Smartphone size={20} />,
    Server: <Server size={20} />,
    Workflow: <Workflow size={20} />,
    Network: <Network size={20} />,
    Database: <Database size={20} />,
    HardDrive: <HardDrive size={20} />,
    ShieldCheck: <ShieldCheck size={20} />,
    GitBranch: <GitBranch size={20} />,
    Flame: <Flame size={20} />,
    Box: <Box size={20} />,
    Terminal: <Terminal size={20} />,
    Figma: <FigmaIcon size={20} />,
    Cloud: <Cloud size={20} />
  };

  const categories = [
    { key: 'all', label: 'All Technologies' },
    { key: 'frontend', label: 'Frontend & UI' },
    { key: 'backend', label: 'Backend & APIs' },
    { key: 'tools', label: 'Tools & DevOps' }
  ];

  const getDisplayedSkills = () => {
    if (activeCategory === 'all') {
      return [
        ...skills.frontend.map(s => ({ ...s, category: 'Frontend' })),
        ...skills.backend.map(s => ({ ...s, category: 'Backend' })),
        ...skills.tools.map(s => ({ ...s, category: 'Tools' }))
      ];
    }
    return skills[activeCategory].map(s => ({ ...s, category: activeCategory }));
  };

  const displayedSkills = getDisplayedSkills();

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={14} />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Tooling Ecosystem</span>
          </h2>
          <p className="section-subtitle">
            Tools, libraries, and frameworks I leverage to create performant, scalable digital applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.key}
              className={`skill-tab-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {displayedSkills.map((skill, idx) => (
            <div key={`${skill.name}-${idx}`} className="glass-card skill-card">
              <div className="skill-card-top">
                <div className="skill-identity">
                  <div className="skill-icon-wrap">
                    {iconRegistry[skill.icon] || <Code2 size={20} />}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>

              {/* Progress bar */}
              <div className="skill-bar-track">
                <div 
                  className="skill-bar-fill" 
                  style={{ width: `${skill.level}%` }}
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label={`${skill.name} proficiency: ${skill.level}%`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
