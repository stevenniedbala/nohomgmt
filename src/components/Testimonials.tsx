import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "NohoMgmt took the stress out of property management. Our units are always occupied!",
      author: "Jane Doe, Landlord"
    },
    {
      text: "Quick responses and professional service. Highly recommend!",
      author: "John Smith, Property Owner"
    },
    {
      text: "Their short-term rental ops boosted my revenue by 30% in a month.",
      author: "Emily Johnson, Airbnb Host"
    }
  ];

  return (
    <section id="testimonials">
      <h2>What Our Clients Say</h2>
      
      {/* ONE badge, not per card */}
      <div className="star-rating"><span>★★★★★</span></div>
      
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.text}"</p>
            <h4>{testimonial.author}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 