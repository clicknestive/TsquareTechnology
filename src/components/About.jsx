import React from 'react';
import { Code, Layout, Smartphone, Megaphone, Palette, CheckCircle2 } from 'lucide-react';
import '../styles/marketing.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-content">
          <div className="section-tag">
            <span>About Us</span>
          </div>
          <h2>Technology Meets Creativity</h2>
          
          <p className="about-text">
            <strong>T Square Technology</strong> is a digital technology and creative services company focused on helping businesses establish, improve and grow their digital presence.
          </p>

          <p className="about-text">
            We combine technology, design and digital marketing to create practical solutions for businesses — from their first website to complete digital platforms.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: 'var(--navy-deep)' }}>
              <CheckCircle2 size={20} color="#0878F9" />
              <span>Full-Stack Development</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: 'var(--navy-deep)' }}>
              <CheckCircle2 size={20} color="#11C5F4" />
              <span>Modern UI/UX Aesthetics</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: 'var(--navy-deep)' }}>
              <CheckCircle2 size={20} color="#6337E8" />
              <span>Targeted Marketing</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: 'var(--navy-deep)' }}>
              <CheckCircle2 size={20} color="#0878F9" />
              <span>End-to-End Support</span>
            </div>
          </div>
        </div>

        {/* Visual Graphic Composition */}
        <div className="about-visual-composition">
          <div className="about-main-card">
            <img src="/logo.png" alt="T Square Technology Logo" className="about-logo-img" />
            <span className="about-tagline-badge">THINK. BUILD. GROW.</span>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Empowering startups, small businesses, and growing enterprises with modern digital architecture.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div className="pillar-icon-box" title="Web">
                <Layout size={20} />
              </div>
              <div className="pillar-icon-box" style={{ background: 'linear-gradient(135deg, #0878F9, #6337E8)' }} title="Mobile Apps">
                <Smartphone size={20} />
              </div>
              <div className="pillar-icon-box" style={{ background: 'linear-gradient(135deg, #6337E8, #11C5F4)' }} title="Marketing">
                <Megaphone size={20} />
              </div>
              <div className="pillar-icon-box" style={{ background: 'linear-gradient(135deg, #11C5F4, #0878F9)' }} title="Branding">
                <Palette size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
