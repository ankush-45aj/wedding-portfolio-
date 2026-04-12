import React from 'react';
import { motion } from 'framer-motion';
import studioVideo from '../assets/studio-team.mp4'; // Adjust path based on your file location

const AboutSection = () => {
  return (
    <section className="py-24 bg-olive text-beige overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* Left: Studio Video */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-lg relative z-10 bg-[#C8B6A6] max-w-md">
            <video
              src={studioVideo}
              className="w-full h-full object-contain"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col items-start"
        >
          <span className="text-gold tracking-widest uppercase text-sm mb-4">Behind the Lens</span>
          <h2 className="text-4xl md:text-5xl font-serif text-light mb-8 leading-tight">
            Crafting Visual Poetry for True Romantics
          </h2>

          <div className="space-y-6 text-beige/80 font-light text-lg mb-12">
            <p>
              We are a collective of passionate visual storytellers based in India, dedicated to turning fleeting moments into timeless art. With over a decade of experience, we've had the honor of documenting hundreds of love stories across the globe.
            </p>
            <p>
              Our style blends cinematic grandeur with intimate, candid journalism. We don't just take pictures; we capture the emotion, the unscripted laughs, and the silent tears of joy that make your day uniquely yours.
            </p>
          </div>

          <a href="/about" className="px-10 py-4 bg-transparent border border-beige text-beige hover:bg-beige hover:text-olive transition-colors duration-300 uppercase tracking-widest text-sm font-medium">
            Learn More
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;