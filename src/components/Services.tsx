import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Tenant Management",
      description: "We handle all tenant questions, concerns, and issues for you."
    },
    {
      title: "Rent Collection",
      description: "We collect all of your property's income for you and chase after late payments."
    },
    {
      title: "Maintenance",
      description: "Our maintenance team completes all repairs and maintenance issues quickly."
    },
    {
      title: "Project Management",
      description: "We manage all construction projects including unit turnovers from beginning to end."
    },
    {
      title: "Financial Reporting",
      description: "We send you monthly cash flow statements and other reports"
    },
    {
      title: "Owner Portal",
      description: "Access all information relating to your property using our online owner portal."
    }
  ];

  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 