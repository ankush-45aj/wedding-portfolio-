import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Elegant Wedding Photography | Cinematic Love Stories</title>
        <meta name="description" content="Capture your special day with our elegant and timeless wedding photography. View our portfolio, read testimonials, and book our services." />
        <link rel="canonical" href="https://wedding-portfolio-beta.vercel.app/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wedding-portfolio-beta.vercel.app/" />
        <meta property="og:title" content="Elegant Wedding Photography | Cinematic Love Stories" />
        <meta property="og:description" content="Capture your special day with our elegant and timeless wedding photography. View our portfolio, read testimonials, and book our services." />
        <meta property="og:image" content="https://wedding-portfolio-beta.vercel.app/fallback.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://wedding-portfolio-beta.vercel.app/" />
        <meta name="twitter:title" content="Elegant Wedding Photography | Cinematic Love Stories" />
        <meta name="twitter:description" content="Capture your special day with our elegant and timeless wedding photography. View our portfolio, read testimonials, and book our services." />
        <meta name="twitter:image" content="https://wedding-portfolio-beta.vercel.app/fallback.jpg" />
      </Helmet>
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
