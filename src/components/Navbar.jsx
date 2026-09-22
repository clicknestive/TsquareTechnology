import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';
import '../styles/navbar.css';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
              aria-label="Toggle Menu"
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
