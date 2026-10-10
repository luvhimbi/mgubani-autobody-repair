import { Phone, Mail, MapPin } from 'lucide-react';
import logoImg from '../Logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="navbar-logo">
              <img src={logoImg} alt="Mgubani Autobody Repair Logo" className="footer-logo-img" />
            </div>
            <p>Your trusted partner for precision repairs and perfect results in Johannesburg. Redefining vehicle repair with precision and style.</p>
          </div>
          
          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#work">Our Work</a>
              <a href="#about">Why Us</a>
              <a href="#quote">Get a Quote</a>
            </div>
          </div>
          
          <div>
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <Phone /> <a href="tel:0107469998">010 746 9998</a>
            </div>
            <div className="footer-contact-item">
              <Mail /> <a href="mailto:info@mgubaniautobody.co.za">info@mgubaniautobody.co.za</a>
            </div>
            <div className="footer-contact-item" style={{ alignItems: 'flex-start' }}>
              <MapPin style={{ marginTop: '2px' }} /> 
              <span>17 Brighton Rd, Bramley View,<br/>Johannesburg, 2090</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mgubani Autobody Repair. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
