import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-primary min-h-screen">
      <Helmet>
        <title>About Our Studio | Elegant Wedding Photography Team</title>
        <meta name="description" content="Learn more about our passionate team of wedding photographers. Discover our story, our creative process, and why we love capturing timeless romance." />
        <link rel="canonical" href="https://wedding-portfolio-beta.vercel.app/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wedding-portfolio-beta.vercel.app/about" />
        <meta property="og:title" content="About Our Studio | Elegant Wedding Photography Team" />
        <meta property="og:description" content="Learn more about our passionate team of wedding photographers. Discover our story, our creative process, and why we love capturing timeless romance." />
        <meta property="og:image" content="https://wedding-portfolio-beta.vercel.app/fallback.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://wedding-portfolio-beta.vercel.app/about" />
        <meta name="twitter:title" content="About Our Studio | Elegant Wedding Photography Team" />
        <meta name="twitter:description" content="Learn more about our passionate team of wedding photographers. Discover our story, our creative process, and why we love capturing timeless romance." />
        <meta name="twitter:image" content="https://wedding-portfolio-beta.vercel.app/fallback.jpg" />
      </Helmet>
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
