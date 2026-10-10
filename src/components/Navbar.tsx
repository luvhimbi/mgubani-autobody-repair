import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import logoImg from '../Logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar scrolled">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo" onClick={closeMenu}>
          <img src={logoImg} alt="Mgubani Autobody Repair Logo" className="navbar-logo-img" />
        </a>

        <div className="navbar-links">
          <a href="#home" className="navbar-link">Home</a>
          <a href="#about" className="navbar-link">About Us</a>
          <a href="#services" className="navbar-link">Services</a>
          <a href="#work" className="navbar-link">Our Work</a>
          <a href="#contact" className="navbar-link">Contact</a>
          <a href="#quote" className="btn btn-primary btn-sm navbar-cta desktop-only">
            Get a Quote
          </a>
        </div>

        <button 
          className="navbar-mobile-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={28} color={isScrolled ? '#1A1A1A' : '#FFFFFF'} />
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </button>

        <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Our Work</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#quote" className="btn btn-primary" onClick={closeMenu}>
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
