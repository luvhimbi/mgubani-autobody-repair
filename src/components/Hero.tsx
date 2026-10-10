import { ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import heroBg from '../assets/hero-bg.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img src={heroBg} alt="Restored vehicle in Mgubani Autobody shop" />
      </div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <div className="hero-badge">Johannesburg's Trusted Autobody Specialists</div>
        <h1>Your Car. <span>Restored Properly.</span></h1>
        <p>Professional collision repairs, spray painting, dent removal and vehicle restoration in Johannesburg.</p>
        
        <div className="hero-buttons">
          <a href="#quote" className="btn btn-primary btn-lg">
            Get a Free Quote
          </a>
        </div>
      </div>

      <a href="#services" className="hero-scroll-indicator" aria-label="Scroll down">
        <span>Scroll</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
