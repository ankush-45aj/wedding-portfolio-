import React, { useEffect } from 'react';
import MasonryGrid from '../components/MasonryGrid';
import VideoSection from '../components/VideoSection';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-light min-h-screen">
      <div className="text-center py-16 text-olive border-b border-beige">
        <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Portfolio</h1>
        <p className="text-brown tracking-widest uppercase text-sm">A collection of our finest work</p>
      </div>
      <MasonryGrid />
      <VideoSection />
    </div>
  );
};

export default Portfolio;
