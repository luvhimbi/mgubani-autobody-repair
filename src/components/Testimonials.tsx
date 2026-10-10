import { Star } from 'lucide-react';

export default function Testimonials() {
  // These are placeholder testimonials. 
  // Client should replace these with real reviews.
  const testimonials = [
    {
      name: 'Sarah M.',
      vehicle: 'Toyota Fortuner',
      text: 'Exceptional service from Mgubani Autobody. Someone reversed into my Fortuner and they fixed it perfectly. The paint match is flawless and they kept me updated throughout the process.',
      rating: 5
    },
    {
      name: 'David K.',
      vehicle: 'VW Golf GTI',
      text: 'I brought my Golf in for some scratch repairs and dent removal. The team was professional, the price was fair, and the car looks brand new again. Highly recommended.',
      rating: 5
    },
    {
      name: 'Michael T.',
      vehicle: 'Ford Ranger',
      text: 'Great experience dealing with this shop. They handled a major collision repair on my bakkie and the structural work was spot on. Very happy with the turnaround time.',
      rating: 5
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Don't just take our word for it. Here's what drivers in Johannesburg have to say about our repair services.</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="testimonial-author-name">{testimonial.name}</div>
                  <div className="testimonial-author-vehicle">{testimonial.vehicle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
