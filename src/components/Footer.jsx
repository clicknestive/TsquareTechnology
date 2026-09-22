import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';
import '../styles/footer.css';

const InstagramIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <img src="/logo.png" alt="T Square Technology Logo" className="footer-logo-img" />
              <div>
                <div className="footer-brand-title">T SQUARE</div>
                <div className="footer-tagline">TECHNOLOGY</div>
              </div>
            </div>

            <p className="footer-brand-desc">
              Web, apps, e-commerce, marketing and creative digital solutions for modern businesses.
            </p>

            <div style={{ fontSize: '0.85rem', color: 'var(--cyan-bright)', fontWeight: 700, letterSpacing: '0.05em' }}>
              THINK. BUILD. GROW.
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#portfolio" className="footer-link">Our Work</a></li>
              <li><a href="#process" className="footer-link">Process</a></li>
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Digital Services */}
          <div>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Web Development</a></li>
              <li><a href="#services" className="footer-link">E-Commerce Stores</a></li>
              <li><a href="#services" className="footer-link">Mobile App Development</a></li>
              <li><a href="#services" className="footer-link">SEO Optimization</a></li>
              <li><a href="#services" className="footer-link">Digital Marketing & Meta Ads</a></li>
              <li><a href="#services" className="footer-link">Social Media Management</a></li>
              <li><a href="#services" className="footer-link">Branding & Logo Design</a></li>
              <li><a href="#services" className="footer-link">Photography & Video</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="footer-col-title">Contact</h4>
            
            <div className="footer-contact-item">
              <Phone size={18} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                <a href={getWhatsAppLink('917795193686')} target="_blank" rel="noopener noreferrer" className="footer-link">
                  +91 7795193686
                </a>
                <a href={getWhatsAppLink('919148704881')} target="_blank" rel="noopener noreferrer" className="footer-link">
                  +91 9148704881
                </a>
              </div>
            </div>

            <div className="footer-contact-item" style={{ marginTop: '0.75rem' }}>
              <Mail size={18} />
              <a href="mailto:clicknestive@gmail.com" className="footer-link">
                clicknestive@gmail.com
              </a>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <a
                href="https://www.instagram.com/tsquaretechnology?stkn=MW5rdWFzZzB6ODk2bw=="
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © 2026 T Square Technology. All rights reserved.
          </div>
          <div>
            Designed & Engineered with Excellence.
          </div>
        </div>
      </div>
    </footer>
  );
}
