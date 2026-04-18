import React from 'react';
import { motion } from 'framer-motion';
import { buildCloudinaryVideoUrl, buildCloudinaryImageUrl, IMAGE_NAMES } from '../config/cloudinary';

const videos = [
  {
    id: 1,
    title: 'Aditi & Rahul',
    url: buildCloudinaryVideoUrl(IMAGE_NAMES.VIDEO_ADITI_RAHUL, { width: 1280, height: 720 }),
    poster: buildCloudinaryImageUrl(IMAGE_NAMES.VIDEO_ADITI_RAHUL_POSTER, { width: 1280, height: 720 }),
    name: 'Aditi & Rahul Video'
  },
  {
    id: 2,
    title: 'Meera & Kabir',
    url: buildCloudinaryVideoUrl(IMAGE_NAMES.VIDEO_MEERA_KABIR, { width: 1280, height: 720 }),
    poster: buildCloudinaryImageUrl(IMAGE_NAMES.VIDEO_MEERA_KABIR_POSTER, { width: 1280, height: 720 }),
    name: 'Meera & Kabir Video'
  },
  {
    id: 3,
    title: 'Priya & Rohan',
    url: buildCloudinaryVideoUrl(IMAGE_NAMES.VIDEO_PRIYA_ROHAN, { width: 1280, height: 720 }),
    poster: buildCloudinaryImageUrl(IMAGE_NAMES.VIDEO_PRIYA_ROHAN_POSTER, { width: 1280, height: 720 }),
    name: 'Priya & Rohan Video'
  },
];

const VideoSection = () => {
  return (
    <section className="py-24 bg-dark text-beige" id="films">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">Cinematic Films</h2>
          <p className="text-beige/70 tracking-widest uppercase text-sm">Relive the magic</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid, i) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative aspect-video bg-olive rounded-sm overflow-hidden group cursor-pointer"
            >
              <video
                src={vid.url}
                poster={vid.poster}
                data-name={vid.name}
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onMouseEnter={(e) => e.target.play().catch(() => { })}
                onMouseLeave={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
              />
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/10 transition-colors duration-500 pointer-events-none"></div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center bg-dark/50 backdrop-blur-sm">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-gold border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 pointer-events-none">
                <h3 className="text-xl font-serif text-light shadow-sm">{vid.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-block px-10 py-4 bg-transparent border border-gold text-gold hover:bg-gold hover:text-dark transition-colors duration-300 uppercase tracking-widest text-sm font-medium">
            Watch More Films
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
