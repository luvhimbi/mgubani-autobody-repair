import { Phone, FileText } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function MobileBar() {
  return (
    <div className="mobile-bar">
      <div className="mobile-bar-inner">
        <a href="tel:0107469998" className="mobile-bar-item">
          <Phone />
          <span>Call</span>
        </a>
        <a href="https://wa.me/27815251489" target="_blank" rel="noopener noreferrer" className="mobile-bar-item whatsapp">
          <WhatsAppIcon size={22} />
          <span>WhatsApp</span>
        </a>
        <a href="#quote" className="mobile-bar-item quote-btn">
          <FileText />
          <span>Get Quote</span>
        </a>
      </div>
    </div>
  );
}
