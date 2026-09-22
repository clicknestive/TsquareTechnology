import React from 'react';
import { ArrowRight, Code, Sparkles, Smartphone, BarChart3, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            Think. Build. <span className="gradient-text">Grow.</span>
          </h1>

          <h2 className="hero-subtitle-primary">
            Digital Solutions That Turn Ideas Into Reality.
          </h2>

          <p className="hero-description">
            From websites and e-commerce platforms to apps, digital marketing, SEO and creative solutions — T Square Technology helps businesses build, launch and grow digitally.
          </p>

          <div className="hero-ctas">
            <a
              href={getWhatsAppLink('917795193686', 'Hello T Square Technology, I would like to start a project with your team.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </a>

            <a href="#portfolio" className="btn btn-secondary">
              View Our Work
            </a>
          </div>
        </div>

        {/* Right Side Abstract Visual Graphic Inspired by T² Logo */}
        <div className="hero-visual-wrapper">
          <div className="hero-glow-backdrop" />

          <div className="hero-graphic-card animate-float">
            <div className="graphic-header">
              <img src="/logo.png" alt="T Square Technology Icon" className="graphic-logo-preview" />
              <div className="graphic-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
            </div>

            <div className="graphic-pillars">
              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <Code size={22} />
                </div>
                <div className="pillar-info">
                  <h4>WE BUILD</h4>
                  <p>Websites, Web Apps & Mobile Stores</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-box" style={{ background: 'linear-gradient(135deg, #0878F9 0%, #6337E8 100%)' }}>
                  <Smartphone size={22} />
                </div>
                <div className="pillar-info">
                  <h4>WE LAUNCH</h4>
                  <p>Deployment, Domain & Cloud Infrastructure</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-box" style={{ background: 'linear-gradient(135deg, #6337E8 0%, #11C5F4 100%)' }}>
                  <BarChart3 size={22} />
                </div>
                <div className="pillar-info">
                  <h4>WE GROW</h4>
                  <p>SEO, Meta Ads & Digital Growth Strategy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Micro Badges */}
          <div className="floating-glass-badge badge-top-left animate-float-delayed">
            <ShieldCheck size={24} color="#0878F9" />
            <div className="badge-text">
              <strong>100% Reliable</strong>
              <span>Production Quality</span>
            </div>
          </div>

          <div className="floating-glass-badge badge-bottom-right animate-float">
            <Sparkles size={24} color="#11C5F4" />
            <div className="badge-text">
              <strong>Complete Digital Agency</strong>
              <span>Web • Apps • Marketing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
