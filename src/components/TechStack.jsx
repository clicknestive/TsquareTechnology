import React from 'react';
import { Globe, Smartphone, Megaphone, Palette } from 'lucide-react';
import '../styles/marketing.css';

export default function TechStack() {
  const categories = [
    {
      title: "Web Solutions",
      icon: Globe,
      items: [
        "Modern responsive websites",
        "Full-stack web applications",
        "E-Commerce shopping stores",
        "Landing page optimization",
        "Custom web solutions"
      ]
    },
    {
      title: "Mobile Solutions",
      icon: Smartphone,
      items: [
        "Android applications",
        "Business mobile apps",
        "Cross-platform app UX",
        "Mobile backend integration",
        "App Store & Play deployment"
      ]
    },
    {
      title: "Digital Marketing",
      icon: Megaphone,
      items: [
        "Search Engine Optimization (SEO)",
        "Meta Ads (Facebook & Instagram)",
        "Social Media Management",
        "Targeted Lead Generation",
        "Local Business SEO"
      ]
    },
    {
      title: "Creative Services",
      icon: Palette,
      items: [
        "Logo Design & Branding",
        "Social Media Creatives",
        "Product & Business Photography",
        "Promotional Video Creation",
        "Video Editing & Reels"
      ]
    }
  ];

  return (
    <section className="tech-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Capabilities</span>
          </div>
          <h2>Built For Modern Digital Businesses</h2>
          <p>End-to-end technology, marketing, and creative expertise tailored to accelerate business growth.</p>
        </div>

        <div className="tech-categories-grid">
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <div key={idx} className="tech-cat-card">
                <div className="tech-cat-header">
                  <div className="tech-cat-icon">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="tech-cat-title">{cat.title}</h3>
                </div>

                <ul className="tech-list">
                  {cat.items.map((item, i) => (
                    <li key={i} className="tech-item">
                      <span className="tech-dot" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
