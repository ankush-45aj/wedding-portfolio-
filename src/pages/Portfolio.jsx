import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import MasonryGrid from '../components/MasonryGrid';
import WeddingParallax from '../components/WeddingParallax'; // ← CRITICAL: Must import!
import VideoSection from '../components/VideoSection';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-light min-h-screen">
      <Helmet>
        <title>Our Wedding Portfolio | Elegant Photography &amp; Films</title>
        <meta name="description" content="View our curated collection of elegant wedding photography. Our portfolio showcases beautiful, romantic, and timeless moments captured in high quality." />
        <link rel="canonical" href="https://wedding-portfolio-beta.vercel.app/portfolio" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wedding-portfolio-beta.vercel.app/portfolio" />
        <meta property="og:title" content="Our Wedding Portfolio | Elegant Photography &amp; Films" />
        <meta property="og:description" content="View our curated collection of elegant wedding photography. Our portfolio showcases beautiful, romantic, and timeless moments captured in high quality." />
        <meta property="og:image" content="https://wedding-portfolio-beta.vercel.app/fallback.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://wedding-portfolio-beta.vercel.app/portfolio" />
        <meta name="twitter:title" content="Our Wedding Portfolio | Elegant Photography &amp; Films" />
        <meta name="twitter:description" content="View our curated collection of elegant wedding photography. Our portfolio showcases beautiful, romantic, and timeless moments captured in high quality." />
        <meta name="twitter:image" content="https://wedding-portfolio-beta.vercel.app/fallback.jpg" />
      </Helmet>
      {/* Header */}
      <div className="text-center py-16 text-olive border-b border-beige">
        <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Portfolio</h1>
        <p className="text-brown tracking-widest uppercase text-sm">
          A collection of our finest work
        </p>
      </div>

      {/* Grid Section */}
      <MasonryGrid />

      {/* === PARALLAX SECTION === */}
      <WeddingParallax />

      {/* Video Section */}
      <VideoSection />
    </div>
  );
};

export default Portfolio;