import React, { useState } from 'react';
import { MessageCircle, Mail, Send, PhoneCall } from 'lucide-react';
import { getWhatsAppLink, generateEnquiryMessage } from '../utils/whatsapp';
import '../styles/contact.css';

const InstagramIcon = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    serviceRequired: 'Website Development',
    projectDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedMsg = generateEnquiryMessage(formData);
    const whatsappUrl = getWhatsAppLink('917795193686', formattedMsg);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Get In Touch</span>
          </div>
          <h2>Let's Build Something Great</h2>
          <p>Reach out directly via WhatsApp, email, or send a detailed enquiry below to start your project.</p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-card">
            <h3>Direct Contact</h3>
            <p>Ready to start? Speak directly with our team to discuss your goals, timelines, and digital requirements.</p>

            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="contact-icon-box">
                  <PhoneCall size={22} />
                </div>
                <div className="contact-details-text">
                  <strong>WhatsApp & Direct Calls</strong>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '0.25rem' }}>
                    <a
                      href={getWhatsAppLink('917795193686', 'Hello T Square Technology')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      +91 7795193686
                    </a>
                    <a
                      href={getWhatsAppLink('919148704881', 'Hello T Square Technology')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      +91 9148704881
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-icon-box">
                  <Mail size={22} />
                </div>
                <div className="contact-details-text">
                  <strong>Email Us</strong>
                  <a href="mailto:clicknestive@gmail.com" className="contact-link">
                    clicknestive@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-icon-box">
                  <InstagramIcon size={22} />
                </div>
                <div className="contact-details-text">
                  <strong>Follow on Instagram</strong>
                  <a
                    href="https://www.instagram.com/tsquaretechnology?stkn=MW5rdWFzZzB6ODk2bw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    @tsquaretechnology
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Enquiry Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', color: 'var(--navy-deep)' }}>
              Send Project Enquiry
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Enter 10-digit number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="yourname@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="businessName">Business Name</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    placeholder="Company or Brand Name"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="serviceRequired">Service Required *</label>
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="E-Commerce Store">E-Commerce Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Deployment & Hosting">App & Website Deployment</option>
                    <option value="SEO Services">SEO Services</option>
                    <option value="Digital Marketing">Digital Marketing & Meta Ads</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Logo / Branding">Logo / Branding Design</option>
                    <option value="Video Editing">Promotional Video Creation</option>
                    <option value="Photography">Product & Business Photography</option>
                    <option value="Other">Other Custom Solution</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="projectDetails">Project Details *</label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows="4"
                    required
                    placeholder="Describe your requirements, timeline, or goals..."
                    value={formData.projectDetails}
                    onChange={handleChange}
                    className="form-textarea"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', marginTop: '0.5rem' }}>
                <Send size={18} />
                <span>Send Enquiry via WhatsApp</span>
              </button>

              <div className="form-notice">
                <MessageCircle size={14} color="#25D366" />
                <span>Submitting creates an instant pre-formatted WhatsApp message for our team.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
