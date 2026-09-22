import React, { useState } from 'react';
import { ExternalLink, Smartphone, Calendar, Layout, Award, ShoppingBag, Utensils } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/portfolio.css';

const iconMap = {
  Smartphone,
  Calendar,
  Layout,
  Award,
  ShoppingBag,
  Utensils
};

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Websites', 'E-Commerce', 'Apps'];

  const filteredProjects = filter === 'All'
    ? portfolioData
    : portfolioData.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Portfolio</span>
          </div>
          <h2>Projects We've Built</h2>
          <p>Explore some of the recent web applications, e-commerce stores, and digital products built by our team.</p>
        </div>

        {/* Category Filter Tabs */}
        <div className="portfolio-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => {
            const IconComp = iconMap[project.icon] || Layout;

            return (
              <div key={project.id} className="portfolio-card">
                <div className="portfolio-card-media">
                  <div
                    className="portfolio-card-media-bg"
                    style={{ background: project.gradient }}
                  />
                  <div className="portfolio-media-content">
                    <div className="media-icon-box">
                      <IconComp size={28} />
                    </div>
                    <span className="portfolio-category-badge">{project.badge}</span>
                  </div>
                </div>

                <div className="portfolio-card-body">
                  <div>
                    <h3 className="portfolio-title">{project.title}</h3>
                    <p className="portfolio-desc">{project.description}</p>
                  </div>

                  <div className="portfolio-card-footer">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-link-btn"
                      >
                        <span>Visit Website</span>
                        <ExternalLink size={16} />
                      </a>
                    ) : (
                      <div className="portfolio-link-btn" style={{ cursor: 'default', opacity: 0.85 }}>
                        <span>Mobile / Web Application</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
