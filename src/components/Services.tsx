import { Car, Paintbrush, Hammer, CheckCircle, Wrench, ShieldAlert } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Services() {
  const services = [
    {
      icon: <Car />,
      problem: 'Accident damage',
      title: 'Collision Repairs',
      desc: 'Expert restoration of accident damage, ensuring your vehicle is structurally sound and safe.'
    },
    {
      icon: <Paintbrush />,
      problem: 'Damaged paint',
      title: 'Spray Painting',
      desc: 'Professional colour matching and flawless paint application for a showroom finish.'
    },
    {
      icon: <Hammer />,
      problem: 'Dents',
      title: 'Dent Removal',
      desc: 'Precision dent repair and removal, leaving no trace of impact behind.'
    },
    {
      icon: <CheckCircle />,
      problem: 'Scratches',
      title: 'Scratch Repair',
      desc: 'Careful removal and correction of surface scratches and clear-coat damage.'
    },
    {
      icon: <Wrench />,
      problem: 'Bent chassis',
      title: 'Chassis Straightening',
      desc: 'Advanced precision alignment to restore your vehicle\'s structural integrity.'
    },
    {
      icon: <ShieldAlert />,
      problem: 'Rust',
      title: 'Rust Repairs',
      desc: 'Thorough rust removal and prevention treatment to protect your vehicle long-term.'
    }
  ];

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2>How Can We Help?</h2>
            <p>Whatever the damage, our expert team has the skills and equipment to restore your vehicle to its former glory.</p>
          </div>
        </ScrollReveal>
        
        <div className="services-grid">
          {services.map((service, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="service-card">
                <div className="card-icon">{service.icon}</div>
                <div className="problem-label">{service.problem}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href="#quote" className="btn btn-outline btn-sm">Get a Quote</a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
