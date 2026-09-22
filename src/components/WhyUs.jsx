import React from 'react';
import { Target, Sparkles, Monitor, Zap, Boxes, ShieldCheck } from 'lucide-react';
import { whyUsData } from '../data/whyUsData';
import '../styles/process.css';

const iconMap = {
  Target,
  Sparkles,
  Monitor,
  Zap,
  Boxes,
  ShieldCheck
};

export default function WhyUs() {
  return (
    <section className="why-us-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Our Advantage</span>
          </div>
          <h2>Why T Square Technology?</h2>
          <p>We combine modern technology, aesthetic design, and strategic execution to deliver results.</p>
        </div>

        <div className="why-us-grid">
          {whyUsData.map((item) => {
            const IconComp = iconMap[item.icon] || Sparkles;

            return (
              <div key={item.number} className="why-card">
                <div className="why-card-top">
                  <span className="why-number">{item.number}</span>
                  <div className="why-icon-box">
                    <IconComp size={22} />
                  </div>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
