import React, { useEffect } from 'react';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-primary min-h-screen">
      <div className="text-center py-16 text-textMain border-b border-secondary/30 shadow-sm bg-primary">
        <h1 className="text-5xl md:text-6xl font-serif mb-4">About Us</h1>
        <p className="text-accent tracking-widest uppercase text-sm">The team behind the lens</p>
      </div>
      <AboutSection />
      <Testimonials />
    </div>
  );
};

export default About;
