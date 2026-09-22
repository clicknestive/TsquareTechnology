import React from 'react';
import { MessageCircle, CheckCircle, TrendingUp, Target, Share2, Award, Zap } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';
import '../styles/marketing.css';

export default function Marketing() {
  const marketingServices = [
    { title: "Search Engine Optimization (SEO)", icon: TrendingUp },
    { title: "Meta Ads (Facebook & Instagram)", icon: Target },
    { title: "Instagram Advertising", icon: Share2 },
    { title: "Facebook Lead Campaigns", icon: Zap },
    { title: "Social Media Management", icon: Award },
    { title: "Content Strategy & Execution", icon: CheckCircle },
    { title: "Digital Brand Positioning", icon: CheckCircle }
  ];

  return (
    <section className="marketing-section">
      <div className="container marketing-grid">
        <div className="marketing-content">
          <div className="section-tag" style={{ background: 'rgba(17, 197, 244, 0.15)', borderColor: 'rgba(17, 197, 244, 0.3)', color: 'var(--cyan-bright)' }}>
            <span>Digital Growth Framework</span>
          </div>

          <h2>Grow Beyond Your Website</h2>

          <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Building a website is just the beginning. Our targeted digital advertising, SEO, and social media strategies ensure your potential customers find you and take action.
          </p>

          <div className="growth-formula-box">
            Website + SEO + Social Media + Meta Advertising = Continuous Digital Growth
          </div>

          <a
            href={getWhatsAppLink('917795193686', 'Hello T Square Technology, I would like to discuss Digital Marketing & Meta Ads for my business.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={20} />
            <span>Discuss Your Marketing</span>
          </a>
        </div>

        <div className="marketing-services-list">
          {marketingServices.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="marketing-service-pill">
                <IconComp size={18} color="#11C5F4" />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
