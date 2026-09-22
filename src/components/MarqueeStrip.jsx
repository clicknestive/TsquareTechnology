import React from 'react';
import { Sparkles } from 'lucide-react';
import '../styles/global.css';

export default function MarqueeStrip() {
  const items = [
    'Website Development',
    'E-Commerce Stores',
    'Mobile Apps',
    'SEO & Visibility',
    'Digital Marketing',
    'Meta Advertising',
    'Social Media Management',
    'Branding & Logo Design',
    'Video & Photography',
  ];

  return (
    <div style={{
      background: 'var(--navy-deep)',
      color: 'var(--white)',
      padding: '1rem 0',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      borderTop: '1px solid rgba(17, 197, 244, 0.2)',
      borderBottom: '1px solid rgba(17, 197, 244, 0.2)'
    }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '2.5rem',
        animation: 'marquee 30s linear infinite'
      }}>
        {[...items, ...items, ...items].map((text, idx) => (
          <span key={idx} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.95rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
            color: idx % 2 === 0 ? 'var(--cyan-bright)' : 'var(--white)'
          }}>
            <Sparkles size={14} style={{ color: 'var(--blue-primary)' }} />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
