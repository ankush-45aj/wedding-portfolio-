import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Calendar, Search, ArrowUpRight } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552', alt: 'Wedding moment' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc', alt: 'Couple' },
  { src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf', alt: 'Hands' },
  { src: 'https://images.unsplash.com/photo-1519225495042-ef5a02073dc2', alt: 'Photographer' },
  { src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74', alt: 'Venue' },
  { src: 'https://images.unsplash.com/photo-1465495910483-34d1b37c024d', alt: 'Celebration' },
  { src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8', alt: 'Flowers' },
  { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486', alt: 'Friends' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc', alt: 'Group' },
];

const ScatteredGrid = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="min-h-screen bg-[#f5f5f5] font-sans selection:bg-black selection:text-white">
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">

        {/* Header - Instagram Story Style */}
        <div className="flex justify-between items-start mb-8 md:mb-12">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-black" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-xs font-medium tracking-wide text-black">Instagram</span>
              <span className="text-[10px] text-gray-500 -mt-0.5">story</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500 uppercase tracking-wider">Periode<br />Mei</span>
            <div className="border border-black/20 rounded-lg p-1.5 flex flex-col items-center min-w-[32px]">
              <span className="text-[10px] font-bold text-black">01-30</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center gap-8 md:gap-16 mb-12 md:mb-16">
          {['MEMORY', 'PHOTO', 'ARCHIVE'].map((tab, i) => (
            <button
              key={tab}
              className={`text-[11px] tracking-[0.2em] font-medium transition-colors ${i === 0 ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Scattered Photo Collage */}
        <div className="relative h-[600px] md:h-[700px] w-full mb-16 md:mb-24">

          {/* Photo 1 - Top Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            onClick={() => setIndex(0)}
            className="absolute top-0 left-[5%] w-[28%] md:w-[22%] cursor-pointer group z-10"
          >
            <div className="overflow-hidden shadow-lg bg-white p-1.5 pb-4">
              <img src={images[0].src} alt={images[0].alt} className="w-full aspect-[4/5] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
            </div>
          </motion.div>

          {/* Photo 2 - Top Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => setIndex(1)}
            className="absolute top-[2%] right-[10%] w-[25%] md:w-[20%] cursor-pointer group z-20"
          >
            <div className="overflow-hidden shadow-lg bg-white p-1.5 pb-4 rotate-2 group-hover:rotate-0 transition-transform duration-500">
              <img src={images[1].src} alt={images[1].alt} className="w-full aspect-square object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
            </div>
          </motion.div>

          {/* Photo 3 - Center Large (Hero) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => setIndex(3)}
            className="absolute top-[15%] left-[50%] transform -translate-x-1/2 w-[40%] md:w-[32%] cursor-pointer group z-30"
          >
            <div className="overflow-hidden shadow-2xl bg-white p-2 pb-6">
              <img src={images[3].src} alt={images[3].alt} className="w-full aspect-[3/4] object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
            </div>
          </motion.div>

          {/* Photo 4 - Left Middle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => setIndex(2)}
            className="absolute top-[35%] left-[2%] w-[22%] md:w-[18%] cursor-pointer group z-10"
          >
            <div className="overflow-hidden shadow-md bg-white p-1.5 pb-3 -rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <img src={images[2].src} alt={images[2].alt} className="w-full aspect-[4/3] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
            </div>
          </motion.div>

          {/* Photo 5 - Right Middle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => setIndex(4)}
            className="absolute top-[40%] right-[5%] w-[24%] md:w-[20%] cursor-pointer group z-20"
          >
            <div className="overflow-hidden shadow-lg bg-white p-1.5 pb-4 rotate-1 group-hover:rotate-0 transition-transform duration-500">
              <img src={images[4].src} alt={images[4].alt} className="w-full aspect-[3/4] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
            </div>
          </motion.div>

          {/* Photo 6 - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onClick={() => setIndex(5)}
            className="absolute bottom-[15%] left-[15%] w-[26%] md:w-[22%] cursor-pointer group z-20"
          >
            <div className="overflow-hidden shadow-lg bg-white p-1.5 pb-4 rotate-2 group-hover:rotate-0 transition-transform duration-500">
              <img src={images[5].src} alt={images[5].alt} className="w-full aspect-[4/3] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
            </div>
          </motion.div>

          {/* Photo 7 - Bottom Center-Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={() => setIndex(6)}
            className="absolute bottom-[10%] right-[20%] w-[28%] md:w-[24%] cursor-pointer group z-10"
          >
            <div className="overflow-hidden shadow-md bg-white p-1.5 pb-4 -rotate-1 group-hover:rotate-0 transition-transform duration-500">
              <img src={images[6].src} alt={images[6].alt} className="w-full aspect-[4/5] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
            </div>
          </motion.div>

          {/* Photo 8 - Bottom Right Small */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            onClick={() => setIndex(7)}
            className="absolute bottom-[25%] right-[2%] w-[20%] md:w-[16%] cursor-pointer group z-10"
          >
            <div className="overflow-hidden shadow-md bg-white p-1 pb-3 rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <img src={images[7].src} alt={images[7].alt} className="w-full aspect-square object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
            </div>
          </motion.div>

          {/* Photo 9 - Bottom Right Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={() => setIndex(8)}
            className="absolute bottom-[5%] right-[35%] w-[22%] md:w-[18%] cursor-pointer group z-20"
          >
            <div className="overflow-hidden shadow-lg bg-white p-1.5 pb-4 -rotate-2 group-hover:rotate-0 transition-transform duration-500">
              <img src={images[8].src} alt={images[8].alt} className="w-full aspect-[16/9] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
            </div>
          </motion.div>
        </div>

        {/* Footer Section - Typography Style from Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end mb-12">
          {/* Left Side - Big Typography */}
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold text-black leading-[0.85] tracking-tight">
              <span className="block text-7xl md:text-9xl">M</span>
              <span className="block -mt-2 md:-mt-4 ml-1 md:ml-2">emories in</span>
              <span className="block ml-1 md:ml-2">Mei</span>
            </h1>
            <p className="mt-6 text-[10px] text-gray-500 tracking-widest uppercase font-medium">
              Archived by Raggen.
            </p>
          </div>

          {/* Right Side - Description */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="max-w-xs">
              <h3 className="text-lg font-semibold text-black mb-2 flex items-center gap-2">
                Cerita bulan lalu
                <ArrowUpRight className="w-4 h-4" />
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-left md:text-right">
                Cerita dan kenangan bulan Mei bakal memorable suatu saat nanti.
              </p>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed text-left md:text-right">
                mulai dari lebaran di Kotabaru, graduation, gabut bareng temen, hunting milkyway tapi gagal, hunting di Pagatan dan Banjarmasin.
              </p>
            </div>

            <button className="mt-4 p-3 border border-black/20 rounded-full hover:bg-black hover:text-white transition-all duration-300 group">
              <Search className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map(img => ({ src: img.src }))}
        className="bg-white/95 backdrop-blur-sm"
      />
    </section>
  );
};

export default ScatteredGrid;