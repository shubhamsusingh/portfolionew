import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onTriggerToast }) {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    if (onTriggerToast) {
      onTriggerToast('Email copied to clipboard!', 'success');
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      if (onTriggerToast) onTriggerToast('Please fill out all required fields.', 'error');
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      if (onTriggerToast) onTriggerToast('Please enter a valid email address.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Portfolio Inquiry',
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}: ${formData.subject || 'Inquiry'}`,
          _template: 'table'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        try {
          confetti({
            particleCount: 90,
            spread: 70,
            origin: { y: 0.65 }
          });
        } catch {
          // Fallback if canvas is unavailable
        }

        if (onTriggerToast) {
          onTriggerToast(`Thank you, ${formData.name}! Your message has been sent to my email.`, 'success');
        }

        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch {
      // Graceful fallback to mailto
      if (onTriggerToast) {
        onTriggerToast('Opening your email client to send message...', 'info');
      }
      setTimeout(() => {
        window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Shubham,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
      }, 900);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Initiate Contact</span>
          </div>
          <h2 className="section-title">
            Let's Discuss <span className="gradient-text">Your Next Big Vision</span>
          </h2>
          <p className="section-subtitle">
            Have an open role, an ambitious project, or just want to connect? My inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct info & Copy email */}
          <div className="contact-info-col">
            <div className="glass-card contact-quick-card">
              <div className="contact-quick-icon">
                <Mail size={22} />
              </div>
              <div className="contact-quick-text">
                <h4>Direct Email</h4>
                <p>{personal.email}</p>
                <button 
                  type="button" 
                  className="copy-email-btn" 
                  onClick={handleCopyEmail}
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={14} color="var(--accent-emerald)" />
                      <span style={{ color: 'var(--accent-emerald)' }}>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy to clipboard</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="glass-card contact-quick-card">
              <div className="contact-quick-icon" style={{ background: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.25)', color: 'var(--accent-purple)' }}>
                <MapPin size={22} />
              </div>
              <div className="contact-quick-text">
                <h4>Location</h4>
                <p>{personal.location}</p>
              </div>
            </div>

            <div className="glass-card contact-quick-card">
              <div className="contact-quick-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.25)', color: 'var(--accent-emerald)' }}>
                <Sparkles size={22} />
              </div>
              <div className="contact-quick-text">
                <h4>Current Status</h4>
                <p>{personal.status.text}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Client-Side Contact Form */}
          <div className="glass-card contact-form-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  Full Name <span style={{ color: 'var(--accent-rose)' }}>*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">
                  Email Address <span style={{ color: 'var(--accent-rose)' }}>*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Opportunity / Collaboration / Say Hello"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">
                  Message <span style={{ color: 'var(--accent-rose)' }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or position..."
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.9rem' }}
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
