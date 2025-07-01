import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="hero">
      <div className="hero-content">
        <h1>Reliable Property Management</h1>
        <p>Servicing Northampton and Boston.</p>
        <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>
          Get in Touch
        </a>
      </div>
    </header>
  );
};

export default Hero; 