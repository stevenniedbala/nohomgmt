import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar">
      <div className={`nav-container ${isNavOpen ? 'active' : ''}`}>
        <button className="brand" onClick={() => scrollToSection('hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
          NoHo
        </button>
        <ul className="nav-links">
          <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
        </ul>
        <div className="nav-actions">
          <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Inquire</a>
          <a href="#login" className="btn-primary">Login</a>
        </div>
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={toggleNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 