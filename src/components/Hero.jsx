import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { heroVideoPreset, IMAGE_NAMES } from '../config/cloudinary';

const Hero = () => {
  const [loadingState, setLoadingState] = useState({
    video: false,
    assets: false,
    ready: false
  });
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const progressInterval = useRef(null);

  useEffect(() => {
    progressInterval.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval.current);
          setTimeout(() => setLoadingState(s => ({ ...s, assets: true })), 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, []);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();

    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(checkMobile, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // When video and assets both ready, trigger exit
  useEffect(() => {
    if (loadingState.video && loadingState.assets) {
      setTimeout(() => setLoadingState(s => ({ ...s, ready: true })), 500);
    }
  }, [loadingState.video, loadingState.assets]);

  const videoSource = heroVideoPreset(
    isMobile ? IMAGE_NAMES.HERO_VIDEO_MOBILE : IMAGE_NAMES.HERO_VIDEO
  );

  // Split text for animation
  const brandName = "LUXE WEDDINGS";
  const subtitle = "Cinematic Storytelling";

  return (
    <>
      <AnimatePresence mode="wait">
        {!loadingState.ready && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center"
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5"
              />
            </div>

            {/* Main Loader Content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Elegant Logo Mark */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8 relative"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-24 h-24 border border-accent/20 rounded-full flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border border-accent/40 rounded-full flex items-center justify-center"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Brand Name Letter Animation */}
              <div className="flex overflow-hidden mb-4">
                {brandName.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.5,
                      ease: [0.76, 0, 0.24, 1]
                    }}
                    className="text-3xl md:text-5xl font-serif text-textMain tracking-[0.2em] inline-block"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-accent text-xs md:text-sm tracking-[0.4em] uppercase mb-12"
              >
                {subtitle}
              </motion.p>

              {/* Progress Bar */}
              <div className="w-64 h-[1px] bg-black/5 relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Progress Percentage */}
              <motion.span
                className="mt-4 text-accent text-xs tracking-widest font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
              >
                {Math.min(Math.round(progress), 100)}%
              </motion.span>

              {/* Loading Status Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1 }}
                className="mt-8 text-textMain/30 text-[10px] tracking-[0.3em] uppercase"
              >
                {loadingState.video ? "Finalizing" : "Loading Experience"}
              </motion.p>
            </div>

            {/* Decorative Corners */}
            <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-accent/20" />
            <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-accent/20" />
            <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-accent/20" />
            <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-accent/20" />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-primary">
        {/* Background Video with Ken Burns Effect */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              x: [0, -10, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: "linear"
            }}
            className="w-full h-full"
          >
            <video
              key={videoSource}
              src={videoSource}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/fallback.jpg"
              onCanPlayThrough={() => setLoadingState(s => ({ ...s, video: true }))}
              onLoadedData={() => setLoadingState(s => ({ ...s, video: true }))}
              onError={() => setLoadingState(s => ({ ...s, video: true }))}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center text-textMain px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={loadingState.ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="mb-4"
          >
            <span className="text-accent text-xs md:text-sm tracking-[0.5em] uppercase block mb-6">
              Est. 2024
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={loadingState.ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span className="block text-textMain">Capturing</span>
            <span className="block text-accent italic">Eternal</span>
            <span className="block text-textMain">Moments</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={loadingState.ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-textMain/80 font-light mb-12 tracking-wide max-w-2xl mx-auto leading-relaxed"
          >
            Where luxury meets storytelling. We craft cinematic wedding films that transcend time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={loadingState.ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#portfolio"
              className="group relative px-10 py-4 overflow-hidden border border-accent text-accent transition-all duration-500 uppercase tracking-[0.3em] text-xs font-medium hover:text-white"
            >
              <span className="absolute inset-0 w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full" />
              <span className="relative z-10">View Portfolio</span>
            </a>

            <a
              href="#book"
              className="group relative px-10 py-4 bg-accent text-white transition-all duration-300 uppercase tracking-[0.3em] text-xs font-medium overflow-hidden hover:bg-secondary hover:text-textMain"
            >
              <span className="relative z-10">Book Consultation</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={loadingState.ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-textMain/40 tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </section>
    </>
  );
}

export default Hero;