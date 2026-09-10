import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function StatsBar() {
  const { stats } = portfolioData;

  return (
    <section className="section" style={{ padding: '2rem 0 4rem 0' }}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
