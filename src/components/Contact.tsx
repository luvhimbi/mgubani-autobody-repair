import { MapPin, Phone, Mail } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h2>Find Us</h2>
          <p>We're conveniently located in Bramley View, Johannesburg. Drop by for an assessment or get in touch.</p>
        </div>
        
        <div className="contact-grid">
          <div>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon"><MapPin /></div>
                <div>
                  <div className="contact-info-label">Address</div>
                  <div className="contact-info-value">17 Brighton Rd, Bramley View, Johannesburg, 2090</div>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-info-icon"><Phone /></div>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <div className="contact-info-value"><a href="tel:0107469998">010 746 9998</a></div>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-info-icon"><WhatsAppIcon /></div>
                <div>
                  <div className="contact-info-label">WhatsApp</div>
                  <div className="contact-info-value"><a href="https://wa.me/27815251489" target="_blank" rel="noopener noreferrer">081 525 1489</a></div>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-info-icon"><Mail /></div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value"><a href="mailto:info@mgubaniautobody.co.za">info@mgubaniautobody.co.za</a></div>
                </div>
              </div>
            </div>
            
            <div className="contact-buttons">
              <a href="https://maps.google.com/?q=17+Brighton+Rd,+Bramley+View,+Johannesburg" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Get Directions
              </a>
              <a href="https://wa.me/27815251489" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                WhatsApp Us
              </a>
            </div>
            
            <div className="contact-hours">
              <h3>Opening Hours</h3>
              <div className="contact-hours-row">
                <span>Monday - Friday</span>
                <span>8:00 AM - 5:00 PM</span>
              </div>
              <div className="contact-hours-row">
                <span>Saturday</span>
                <span>8:00 AM - 1:00 PM</span>
              </div>
              <div className="contact-hours-row">
                <span>Sunday & Public Holidays</span>
                <span>Closed</span>
              </div>
              <p style={{ fontSize: '12px', marginTop: '12px', color: 'var(--color-text-muted)' }}>* Please contact us to confirm hours as they may vary.</p>
            </div>
          </div>
          
          <div className="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.476483488251!2d28.0933753!3d-26.116035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950d006de2f5c7%3A0xc47e3a9c7b94e756!2s17%20Brighton%20Rd%2C%20Bramley%20View%2C%20Johannesburg%2C%202090!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mgubani Autobody Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
