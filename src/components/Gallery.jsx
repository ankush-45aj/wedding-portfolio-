import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 1, title: 'Weddings', image: '/images/weddings.jpg' },
  { id: 2, title: 'Pre-Wedding', image: '/images/pre-wedding.jpg' },
  { id: 3, title: 'Events', image: '/images/events.jpg' },
  { id: 4, title: 'Cinematic Films', image: '/images/cinematic.jpg' },
];

const Gallery = () => {
  return (
    <section className="py-24 bg-beige" id="categories">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-olive mb-4">Our Expertise</h2>
          <p className="text-brown tracking-widest uppercase text-sm">Explore our collections</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative h-[500px] overflow-hidden rounded-sm cursor-pointer"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${cat.image})`, backgroundColor: '#C8B6A6' }} // Fallback color
              ></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-serif text-beige mb-2">{cat.title}</h3>
                <span className="inline-block w-8 h-[1px] bg-gold transition-all duration-500 group-hover:w-16"></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
