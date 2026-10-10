import ScrollReveal from './ScrollReveal';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Contact Us',
      desc: 'Send us a WhatsApp message, give us a call, or request a free quote online.'
    },
    {
      num: '02',
      title: 'Vehicle Assessment',
      desc: 'We thoroughly inspect the damage and determine the required repairs and parts.'
    },
    {
      num: '03',
      title: 'Expert Repair',
      desc: 'Our team carries out the necessary bodywork, precision painting and restoration.'
    },
    {
      num: '04',
      title: 'Quality Check',
      desc: 'Your vehicle undergoes a strict quality inspection before it is ready for collection.'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Our streamlined repair process ensures your vehicle is back on the road quickly and safely.</p>
          </div>
        </ScrollReveal>
        
        <div className="process-steps">
          {steps.map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div className="process-step">
                <div className="process-step-number">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
