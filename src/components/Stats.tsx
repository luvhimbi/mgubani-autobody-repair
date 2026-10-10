import { Car, Award, Users, Clock } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: <Clock />, value: '10+', label: 'Years Experience' },
    { icon: <Car />, value: '2000+', label: 'Vehicles Repaired' },
    { icon: <Award />, value: '100%', label: 'Quality Commitment' },
    { icon: <Users />, value: '1500+', label: 'Happy Customers' },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
