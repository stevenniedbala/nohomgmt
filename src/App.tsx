import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
