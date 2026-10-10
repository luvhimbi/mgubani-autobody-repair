import { useState } from 'react';
import { Upload, Send } from 'lucide-react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    damage: '',
    insurance: 'cash',
    contactMethod: 'whatsapp'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*New Quote Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Vehicle:* ${formData.vehicle}%0A*Payment:* ${formData.insurance}%0A%0A*Damage Details:*%0A${formData.damage}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/27815251489?text=${message}`, '_blank');
  };

  return (
    <section id="quote" className="section">
      <div className="container">
        <div className="quote-form-wrapper">
          <div className="section-header">
            <h2>Request a Free Quote</h2>
            <p>Don't have time to visit us? Send us details of the damage and we'll get back to you with an estimate.</p>
          </div>
          
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-input" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="form-input" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="vehicle" className="form-label">Vehicle Make & Model</label>
                <input 
                  type="text" 
                  id="vehicle" 
                  name="vehicle" 
                  className="form-input" 
                  placeholder="e.g. VW Polo 2019" 
                  required 
                  value={formData.vehicle}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="insurance" className="form-label">Payment Method</label>
                <select 
                  id="insurance" 
                  name="insurance" 
                  className="form-select"
                  value={formData.insurance}
                  onChange={handleChange}
                >
                  <option value="cash">Cash / Private</option>
                  <option value="insurance">Insurance Claim</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="damage" className="form-label">What happened?</label>
              <textarea 
                id="damage" 
                name="damage" 
                className="form-textarea" 
                placeholder="Briefly describe the damage..." 
                required
                value={formData.damage}
                onChange={handleChange}
              ></textarea>
            </div>
            
            
            
            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '16px' }}>
              <Send size={20} /> Request Quote via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
