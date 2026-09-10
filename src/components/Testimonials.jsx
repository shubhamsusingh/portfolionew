import React from 'react';
import { Quote, MessageSquareQuote } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Testimonials() {
  const { testimonials } = portfolioData;

  return (
    <section className="section" style={{ background: 'linear-gradient(180deg, transparent, rgba(14, 19, 31, 0.4), transparent)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <MessageSquareQuote size={14} />
            <span>Endorsements</span>
          </div>
          <h2 className="section-title">
            Words from <span className="gradient-text">Collaborators & Leaders</span>
          </h2>
          <p className="section-subtitle">
            What product leaders, design partners, and technical managers say about working with me.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="glass-card testimonial-card">
              <Quote size={32} className="quote-icon" />
              <p className="testimonial-text">"{item.content}"</p>
              
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {item.avatar}
                </div>
                <div>
                  <div className="author-name">{item.name}</div>
                  <div className="author-role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
