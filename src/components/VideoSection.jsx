import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { buildCloudinaryVideoUrl, buildCloudinaryImageUrl, IMAGE_NAMES } from '../config/cloudinary';

const videos = [
  {
    id: 1,
    title: 'Devyani & Sai',
    url: buildCloudinaryVideoUrl(IMAGE_NAMES.DevyaniSai, { width: 1280, height: 720 }),
    poster: buildCloudinaryImageUrl(IMAGE_NAMES.DevyaniSai_POSTER, { width: 1280, height: 720 }),
    name: 'Devyani & Sai Video'
  },
  {
    id: 2,
    title: 'Chaitanya & Vrushali',
    url: buildCloudinaryVideoUrl(IMAGE_NAMES.ChaitanyaVrushali, { width: 1280, height: 720 }),
    poster: buildCloudinaryImageUrl(IMAGE_NAMES.ChaitanyaVrushali_POSTER, { width: 1280, height: 720 }),
    name: 'Chaitanya & Vrushali Video'
  },
  {
    id: 3,
    title: 'Khushboo & Kunal',
    url: buildCloudinaryVideoUrl(IMAGE_NAMES.VIDEO_PRIYA_ROHAN, { width: 1280, height: 720 }),
    poster: buildCloudinaryImageUrl(IMAGE_NAMES.VIDEO_PRIYA_ROHAN_POSTER, { width: 1280, height: 720 }),
    name: 'Khushboo & Kunal Video'
  },
];

// Video Modal Component
const VideoModal = ({ video, isOpen, onClose }) => {
  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors duration-200"
          aria-label="Close video"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video Player */}
        <div className="relative bg-black aspect-video w-full">
          <video
            src={video.url}
            poster={video.poster}
            controls
            autoPlay
            className="w-full h-full"
          />
        </div>

        {/* Video Title */}
        <div className="bg-black/50 px-6 py-4 border-t border-white/10">
          <h3 className="text-xl font-serif text-white">{video.title}</h3>
        </div>
      </motion.div>

      {/* Click outside to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  );
};

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="py-24 bg-secondary text-textMain" id="films">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-accent mb-4">Cinematic Films</h2>
          <p className="text-textMain/70 tracking-widest uppercase text-sm">Relive the magic</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid, i) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative aspect-video bg-primary rounded-sm overflow-hidden group cursor-pointer"
              onClick={() => setSelectedVideo(vid)}
            >
              <img
                src={vid.poster}
                alt={vid.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none"></div>

              {/* Play Button Overlay - Always Visible */}
              <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center bg-white/50 backdrop-blur-sm">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-accent border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 pointer-events-none">
                <h3 className="text-xl font-serif text-textMain shadow-sm">{vid.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-block px-10 py-4 bg-white border border-accent/10 text-accent hover:bg-accent hover:text-textMain transition-colors duration-300 uppercase tracking-widest text-sm font-medium">
            Watch More Films
          </a>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        video={selectedVideo}
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
};

export default VideoSection;
