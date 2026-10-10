import ScrollReveal from './ScrollReveal';
import portfolioBmw from '../assets/portfolio-bmw.jpg';
import portfolioGolf from '../assets/portfolio-golf.jpg';
import portfolioFiesta from '../assets/portfolio-fiesta.jpg';
import portfolioPolo from '../assets/portfolio-polo.jpg';

export default function Portfolio() {
  const items = [
    {
      img: portfolioBmw,
      title: 'BMW 3 Series',
      type: 'Collision Repair & Spray Painting',
      tag: 'Completed'
    },
    {
      img: portfolioGolf,
      title: 'VW Golf GTI',
      type: 'Full Body Restoration',
      tag: 'Completed'
    },
    {
      img: portfolioFiesta,
      title: 'Ford Fiesta',
      type: 'Front-End Collision Repair',
      tag: 'Completed'
    },
    {
      img: portfolioPolo,
      title: 'VW Polo',
      type: 'Dent Removal & Paint Correction',
      tag: 'Completed'
    }
  ];

  return (
    <section id="work" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2>Our Work</h2>
            <p>We take pride in every vehicle that leaves our workshop. Here are some of our recent autobody repairs and restorations.</p>
          </div>
        </ScrollReveal>
        
        <div className="portfolio-grid">
          {items.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 120}>
              <div className="portfolio-card">
                <img src={item.img} alt={`${item.title} repair`} loading="lazy" />
                <div className="portfolio-card-tag">{item.tag}</div>
                <div className="portfolio-card-overlay">
                  <div className="portfolio-card-info">
                    <div className="repair-type">{item.type}</div>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
