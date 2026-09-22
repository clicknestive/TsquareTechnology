import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';
import '../styles/contact.css';

export default function CTASection() {
  return (
    <section className="cta-banner-section">
      <div className="container cta-banner-inner">
        <h2>Have an Idea? Let's Build It.</h2>
        <p>Tell us what you're planning and let's turn your idea into a high-performance digital solution.</p>

        <div className="cta-buttons">
          <a
            href={getWhatsAppLink('917795193686', 'Hello T Square Technology, I have a project idea I would like to discuss.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={20} />
            <span>WhatsApp Us</span>
          </a>

          <a
            href="#contact"
            className="btn btn-secondary"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}
          >
            <span>Send an Enquiry</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
