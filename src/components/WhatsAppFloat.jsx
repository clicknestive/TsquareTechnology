import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';
import '../styles/contact.css';

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppLink('917795193686', 'Hello T Square Technology, I would like to chat with your team.')}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa-btn"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  );
}
