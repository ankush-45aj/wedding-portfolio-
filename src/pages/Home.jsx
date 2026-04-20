import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import AboutSection from '../components/AboutSection';
import MasonryGrid from '../components/MasonryGrid';
import VideoSection from '../components/VideoSection';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import WeddingParallax from '../components/WeddingParallax';

const Home = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Gallery />
      <AboutSection />
      <MasonryGrid />
      <WeddingParallax />
      <VideoSection />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default Home;
