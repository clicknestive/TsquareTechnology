import React from 'react';
import { Palette, Sparkles, Camera, Film, Image, Layers, Video } from 'lucide-react';
import '../styles/marketing.css';

export default function Creative() {
  const creativeItems = [
    {
      title: "Logo Design",
      desc: "Distinctive geometric logos and vector marks that build immediate brand recognition.",
      icon: Palette
    },
    {
      title: "Brand Identity",
      desc: "Complete visual guidelines, color palettes, typography specs, and stationeries.",
      icon: Sparkles
    },
    {
      title: "Social Media Creatives",
      desc: "Eye-catching post designs, banners, and promotional templates for Instagram & Facebook.",
      icon: Layers
    },
    {
      title: "Product Photography",
      desc: "High-resolution studio product photos formatted for e-commerce catalogs & ads.",
      icon: Camera
    },
    {
      title: "Business Photography",
      desc: "Commercial shoots capturing team, infrastructure, products, and store locations.",
      icon: Image
    },
    {
      title: "Promotional Videos & Reels",
      desc: "Engaging short-form videos, ad reels, and promo edits crafted for high viewer retention.",
      icon: Film
    }
  ];

  return (
    <section className="creative-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag" style={{ color: 'var(--purple-accent)', background: 'rgba(99, 55, 232, 0.1)', borderColor: 'rgba(99, 55, 232, 0.25)' }}>
            <span>Creative Excellence</span>
          </div>
          <h2>Make Your Brand Impossible To Ignore</h2>
          <p>From visual identity and logo design to commercial photography and video production.</p>
        </div>

        <div className="creative-gallery-grid">
          {creativeItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="creative-card">
                <div className="creative-icon">
                  <IconComp size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
