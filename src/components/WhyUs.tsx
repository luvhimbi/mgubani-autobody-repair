import { ShieldCheck, Award, Droplets, Users, FileText, Wrench } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: <Award />,
      title: 'Professional Repairs',
      desc: 'Industry-standard repair techniques that restore your vehicle to factory specifications.'
    },
    {
      icon: <ShieldCheck />,
      title: 'Quality Workmanship',
      desc: 'We stand behind our work with a commitment to excellence and lasting results.'
    },
    {
      icon: <Droplets />,
      title: 'Perfect Colour Matching',
      desc: 'Advanced paint mixing technology ensures a seamless, undetectable finish.'
    },
    {
      icon: <Users />,
      title: 'Customer-Focused',
      desc: 'Clear communication, transparent pricing, and service that puts you first.'
    },
    {
      icon: <FileText />,
      title: 'Insurance Assistance',
      desc: 'We can help streamline the claims process with your insurance provider.'
    },
    {
      icon: <Wrench />,
      title: 'Qualified Technicians',
      desc: 'Our team has the experience and training required for complex modern vehicle repairs.'
    }
  ];

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h2>Why Mgubani?</h2>
          <p>We combine technical expertise with exceptional customer service to deliver the best autobody repair experience in Johannesburg.</p>
        </div>
        
        <div className="why-grid">
          {reasons.map((reason, idx) => (
            <div key={idx} className="why-item">
              <div className="why-item-icon">{reason.icon}</div>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
