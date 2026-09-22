import React from 'react';
import {
  Globe,
  ShoppingBag,
  Smartphone,
  Server,
  TrendingUp,
  Target,
  Share2,
  Palette,
  Video,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { getWhatsAppLink } from '../utils/whatsapp';
import '../styles/services.css';

const iconMap = {
  Globe,
  ShoppingBag,
  Smartphone,
  Server,
  TrendingUp,
  Target,
  Share2,
  Palette,
  Video
};

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Our Expertise</span>
          </div>
          <h2>What We Do</h2>
          <p>Complete digital solutions designed to help your business build, launch and grow.</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Globe;

            return (
              <div key={service.id} className="service-card">
                <div className="service-card-top">
                  <div className="service-header-row">
                    <div className="service-icon-wrapper">
                      <IconComponent size={26} />
                    </div>
                    <span className="service-tag-badge">{service.tag}</span>
                  </div>

                  <h3 className="service-title">{service.title}</h3>
                  <div className="service-subtitle">{service.subtitle}</div>
                  <p className="service-desc">{service.description}</p>

                  <ul className="service-features-list">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="service-feature-item">
                        <CheckCircle className="feature-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getWhatsAppLink('917795193686', `Hello T Square Technology, I am interested in your ${service.title} service.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-btn"
                >
                  <span>Explore Service</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
