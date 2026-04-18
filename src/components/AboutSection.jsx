import React from 'react';
import { motion } from 'framer-motion';
import { buildCloudinaryVideoUrl, IMAGE_NAMES } from '../config/cloudinary';

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-olive text-beige overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-5 md:px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {/* Left: Studio Video */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="
  w-full 
  max-w-[90%] 
  sm:max-w-[420px] 
  md:max-w-[480px] 
  lg:max-w-[520px]
  aspect-[4/5] 
  rounded-2xl 
  overflow-hidden 
  shadow-xl 
  border border-white/10 
  bg-black
">
            <video
              src={buildCloudinaryVideoUrl(
                IMAGE_NAMES.ABOUT_STUDIO_VIDEO,
                { quality: 'auto', fetch_format: 'auto' } // 🔥 better optimization
              )}
              className="w-full h-full object-contain bg-black"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <span className="text-gold tracking-[0.2em] uppercase text-xs mb-4 block">
            Behind the Lens
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-light mb-6 md:mb-8 leading-tight">
            Stories That Feel Like Cinema,
            <br className="hidden md:block" />
            Moments That Feel Like Home
          </h2>

          <div className="space-y-4 md:space-y-6 text-beige/80 font-light text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
            <p>
              We are a team of visual storytellers who believe every love story deserves to be felt, not just seen. From quiet glances to grand celebrations, we capture moments with honesty and depth.
            </p>

            <p>
              Our approach blends cinematic aesthetics with real emotion — creating visuals that preserve not just how it looked, but how it felt.
            </p>

            <p className="text-beige/60 italic">
              Because memories fade, but beautifully told stories last forever.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;