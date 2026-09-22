import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';
import '../styles/navbar.css';

const InstagramIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll Spy Active Section Detection
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#home" className="brand-logo" aria-label="T Square Technology Homepage">
            <img src="/logo.png" alt="T Square Technology Logo" />
            <div className="brand-text">
              <span className="brand-name">T SQUARE</span>
              <span className="brand-tagline">TECHNOLOGY</span>
            </div>
          </a>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a
              href="https://www.instagram.com/tsquaretechnology?stkn=MW5rdWFzZzB6ODk2bw=="
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-btn nav-instagram"
              aria-label="Open T Square Technology Instagram"
              title="Open T Square Technology Instagram"
            >
              <InstagramIcon size={20} />
            </a>

            <a
              href="https://wa.me/917795193686"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-btn nav-whatsapp"
              aria-label="Chat with T Square Technology on WhatsApp"
              title="Chat with T Square Technology on WhatsApp"
            >
              <MessageCircle size={20} />
            </a>

            <a
              href={getWhatsAppLink('917795193686', 'Hello T Square Technology, I would like to discuss a project with your team.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-nav"
            >
              <MessageCircle size={18} />
              <span>Let's Talk</span>
            </a>

            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)} />
      <aside className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <a href="#home" className="brand-logo" onClick={() => setMobileOpen(false)}>
            <img src="/logo.png" alt="T Square Technology" style={{ height: '36px' }} />
            <span className="brand-name" style={{ fontSize: '1rem' }}>T SQUARE</span>
          </a>
          <button className="mobile-toggle" onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className="drawer-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`drawer-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                <span>{link.name}</span>
                <ArrowRight size={18} />
              </a>
            </li>
          ))}
        </ul>

        <div className="drawer-footer">
          <div className="drawer-social-row">
            <a
              href="https://www.instagram.com/tsquaretechnology?stkn=MW5rdWFzZzB6ODk2bw=="
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-btn nav-instagram"
              aria-label="Open T Square Technology Instagram"
              title="Open T Square Technology Instagram"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href="https://wa.me/917795193686"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-btn nav-whatsapp"
              aria-label="Chat with T Square Technology on WhatsApp"
              title="Chat with T Square Technology on WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>

          <a
            href={getWhatsAppLink('917795193686', 'Hello T Square Technology, I would like to start a project.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: '100%' }}
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  );
}
