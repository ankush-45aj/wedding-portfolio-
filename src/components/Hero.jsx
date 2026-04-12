import React from 'react';
import { motion } from 'framer-motion';
import herobg from '../assets/hero-bg.mp4'; // Remove curly braces for default import

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      >
        <video
          src={herobg}
          className="w-full h-full object-cover" // Changed to object-cover
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/fallback-image.jpg" // Optional fallback
        />
        <div className="absolute inset-0 bg-black/50"></div> // Slightly darker overlay
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4"> // Changed text-light to text-white
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif mb-4 drop-shadow-lg" // Added shadow
        >
          Capturing Beautiful Moments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl font-light mb-10 tracking-wide drop-shadow-md" // Added shadow
        >
          Wedding Stories That Last Forever
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#portfolio"
            className="px-8 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm backdrop-blur-sm" // Added backdrop blur
          >
            View Portfolio
          </a>
          <a
            href="#book"
            className="px-8 py-3 bg-amber-500 text-black font-medium hover:bg-amber-600 transition-all duration-300 uppercase tracking-widest text-sm" // Changed gold to amber-500
          >
            Book Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;