import React from 'react';
import {
  Search,
  Compass,
  Layers,
  Code2,
  CheckCircle2,
  Rocket
} from 'lucide-react';
import { processSteps } from '../data/processData';
import '../styles/process.css';

const iconMap = {
  Search,
  Compass,
  Layers,
  Code2,
  CheckCircle2,
  Rocket
};

export default function Process() {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>How We Work</span>
          </div>
          <h2>From Idea to Launch</h2>
          <p>A structured 6-step execution framework to ensure your digital project succeeds seamlessly.</p>
        </div>

        <div className="process-timeline">
          {processSteps.map((step) => {
            const IconComp = iconMap[step.icon] || Code2;

            return (
              <div key={step.step} className="process-step-card">
                <div className="process-icon-circle">
                  <IconComp size={24} />
                </div>
                <span className="process-num">STEP {step.step}</span>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
