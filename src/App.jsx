import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import Creative from './components/Creative';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <Services />
        <WhyUs />
        <Process />
        <TechStack />
        <Portfolio />
        <Creative />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
