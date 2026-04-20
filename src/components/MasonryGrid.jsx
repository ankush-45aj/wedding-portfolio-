import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { masonryPreset, IMAGE_NAMES } from '../config/cloudinary';

// ─── Images: exactly 9 ───────────────────────────────────────────────────────
const images = [
  // { src: masonryPreset(IMAGE_NAMES.MASONRY_WEDDING_MOMENT, '1/1'), alt: 'Wedding moment', name: 'Wedding Moment', caption: 'The moment we said forever' },
  { src: masonryPreset(IMAGE_NAMES.MASONRY_COUPLE, '4/3'), alt: 'Couple', name: 'Couple Portrait', caption: 'Just us against the world' },
  { src: masonryPreset(IMAGE_NAMES.MASONRY_HANDS, '1/1'), alt: 'Hands', name: 'Wedding Hands', caption: 'Holding hands, holding hearts' },
  { src: masonryPreset(IMAGE_NAMES.MASONRY_PHOTOGRAPHER, '4/5'), alt: 'Photographer', name: 'Behind the Scenes', caption: 'Capturing memories in the making' },
  { src: masonryPreset(IMAGE_NAMES.MASONRY_VENUE, '4/3'), alt: 'Venue', name: 'Venue Decoration', caption: 'Where magic happened' },
  { src: masonryPreset(IMAGE_NAMES.MASONRY_FLOWERS, '4/3'), alt: 'Flowers', name: 'Floral Arrangements', caption: 'Blooms of happiness' },
  { src: masonryPreset(IMAGE_NAMES.MASONRY_FRIENDS, '4/3'), alt: 'Friends', name: 'Friends & Family', caption: 'Surrounded by love' },
  { src: masonryPreset(IMAGE_NAMES.MASONRY_WEDDING_MOMENT, '1/1'), alt: 'Wedding moment', name: 'Wedding Moment', caption: 'The moment we said forever' },
  { src: masonryPreset(IMAGE_NAMES.MASONRY_GROUP, '4/3'), alt: 'Group', name: 'Group Photo', caption: 'Together is our favorite place' },
  { src: masonryPreset(IMAGE_NAMES.MASONRY_GROUP1, '4/3'), alt: 'Group', name: 'Group Photo', caption: 'Together is our favorite place' },
  { src: masonryPreset(IMAGE_NAMES.MASONRY_GROUP2, '4/3'), alt: 'Group', name: 'Group Photo', caption: 'Together is our favorite place' },
  { src: masonryPreset(IMAGE_NAMES.MASONRY_CELEBRATION, '4/5'), alt: 'Celebration', name: 'Celebration Moment', caption: 'Joy in every frame' },
  { src: masonryPreset(IMAGE_NAMES.MASONRY_GROUP3, '4/3'), alt: 'Group', name: 'Group Photo', caption: 'Together is our favorite place' },
  { src: masonryPreset(IMAGE_NAMES.MASONRY_GROUP4, '4/3'), alt: 'Group', name: 'Group Photo', caption: 'Together is our favorite place' },
  { src: masonryPreset(IMAGE_NAMES.MASONRY_GROUP5, '4/3'), alt: 'Group', name: 'Group Photo', caption: 'Together is our favorite place' },
  { src: masonryPreset(IMAGE_NAMES.MASONRY_GROUP6, '4/3'), alt: 'Group', name: 'Group Photo', caption: 'Together is our favorite place' },
  { src: masonryPreset(IMAGE_NAMES.MASONRY_GROUP7, '4/3'), alt: 'Group', name: 'Group Photo', caption: 'Together is our favorite place' },
  { src: masonryPreset(IMAGE_NAMES.MASONRY_GROUP8, '4/3'), alt: 'Group', name: 'Group Photo', caption: 'Together is our favorite place' }


];

// ─── Heart layout on a 9-col × 7-row grid ────────────────────────────────────
//
// VISUAL STRUCTURE (each unit = 1 cell):
//
//   Col:  0  1  2 | 3  4  5 | 6  7  8
//         ────────┼─────────┼────────
//  r0-1   [ 0: 3w×2h ]  [ 1: 3w×2h ]  [ 2: 3w×2h ]   ← Row 1: 3 equal lobes
//         ────────┼─────────┼────────
//  r2-4   [ 3: 3w×3h ]  [ 4: 3w×2h ]  [ 5: 3w×3h ]   ← Row 2: OUTER TALLER
//                    [ 4 ends r3 ]
//         ────────┼─────────┼────────
//  r5-6            [ 6: 9w×2h ]                        ← Bottom wide + tip row
//                  (or split into 3+3+3 with 7,8 side)
//
// Actually let's do a cleaner split:
//
//   Col:  0  1  2 | 3  4  5 | 6  7  8
//  r0-1   [  0: 3×2 ][ 1: 3×2 ][ 2: 3×2 ]  ← top row: 3 equal blocks
//  r2-4   [  3: 3×3 ][ 4: 3×2 ][ 5: 3×3 ]  ← mid row: LEFT & RIGHT taller (3h), centre shorter (2h)
//  r4-5   (cell 4 ends at r3, so r4 under centre is part of bottom)
//  r4-5            [ 6: 3×2 ]               ← bottom centre (under cell 4 gap)
//  r5              [7:3×1][6][8:3×1]         ← lower sides
//  r6              [ 9th block point ]
//
// Simplified clean version:
//
//  9-col, 7-row grid. Cols: left=0-2, mid=3-5, right=6-8
//
//  [0] col0, row0, 3w, 2h   → top-left lobe
//  [1] col3, row0, 3w, 2h   → top-mid
//  [2] col6, row0, 3w, 2h   → top-right lobe
//  [3] col0, row2, 3w, 3h   → left body (TALL)
//  [4] col3, row2, 3w, 2h   → centre body (normal)
//  [5] col6, row2, 3w, 3h   → right body (TALL)
//  [6] col0, row5, 3w, 1h   → lower-left stub
//  [7] col3, row4, 3w, 3h   → bottom centre tip (tall → tapers)
//  [8] col6, row5, 3w, 1h   → lower-right stub
//
// ─── Heart layout: 7-col × 7-row grid (for 17 images) ──────────────────────
// [col, row, colSpan, rowSpan]
// ─── Heart layout: 7-col × 7-row grid (for 17 images) ──────────────────────
// ─── Improved Heart Layout (Balanced & Symmetrical) ───────────────────────
// ─── Improved Heart Layout (17 items, safe) ───────────────────────────────
const HEART_LAYOUT = [
  // Top Lobes
  [1, 0, 1, 1], [2, 0, 1, 1], [4, 0, 1, 1], [5, 0, 1, 1],

  // Shoulders
  [0, 1, 2, 2], [2, 1, 1, 1], [4, 1, 1, 1], [5, 1, 2, 2],

  // Center Focus (unchanged)
  [2, 2, 3, 3],

  // Middle Sides
  [0, 3, 1, 1], [6, 3, 1, 1],

  // Improved Taper (slightly adjusted positions)
  [1, 4, 1, 1], [5, 4, 1, 1],

  // Bottom Curve
  [2, 5, 1, 1], [3, 5, 1, 1], [4, 5, 1, 1],

  // Tip
  [3, 6, 1, 1],
];

const GRID_COLS = 7;
const GRID_ROWS = 7;



// ─── Responsive unit size ────────────────────────────────────────────────────
const getUnit = (width) => {
  if (width < 400) return { unit: 38, gap: 3 }; // Mobile
  if (width < 768) return { unit: 50, gap: 4 }; // Tablet
  return { unit: 75, gap: 5 };                  // Desktop
};
// ─── Decorative heart SVG ────────────────────────────────────────────────────
const HeartDeco = ({ size = 40, opacity = 0.85 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <path
      d="M20 34s-1-1-3-3C10 24 4 19 4 13a8 8 0 0 1 16-1 8 8 0 0 1 16 1c0 6-6 11-13 18-2 2-3 3-3 3z"
      fill="#f9a8c0" stroke="#e87aaa" strokeWidth="1.5" strokeLinejoin="round" opacity={opacity}
    />
    <path d="M13 11c-2 1-3 3-3 5" stroke="#e87aaa" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
  </svg>
);

// ─── Pinterest-style heart icon ───────────────────────────────────────────────
const HeartIcon = ({ filled, className }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? '#e60023' : 'none'}
    stroke={filled ? '#e60023' : 'currentColor'}
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const ScatteredGrid = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [likedImages, setLikedImages] = useState(new Set());
  const [winWidth, setWinWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 800
  );

  useEffect(() => {
    const onResize = () => setWinWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { unit: UNIT, gap: GAP } = getUnit(winWidth);
  const gridW = GRID_COLS * (UNIT + GAP) - GAP;
  const gridH = GRID_ROWS * (UNIT + GAP) - GAP;

  const toggleLike = (idx) => {
    setLikedImages((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  const goToPrevious = () =>
    setSelectedIndex((p) => (p > 0 ? p - 1 : images.length - 1));
  const goToNext = () =>
    setSelectedIndex((p) => (p < images.length - 1 ? p + 1 : 0));
  const closeLightbox = () => setSelectedIndex(-1);

  useEffect(() => {
    if (selectedIndex < 0) return;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIndex]);

  const currentImage = selectedIndex >= 0 ? images[selectedIndex] : null;

  return (
    <section
      className="min-h-screen bg-[#f8f5f2] selection:bg-black selection:text-white"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-16 flex flex-col items-center">

        {/* ── Heart Collage ─────────────────────────────────────────────── */}
        <div className="relative flex justify-center items-center mb-10 w-full">

          {/* Deco hearts */}
          <div className="absolute -top-6 left-2 md:-top-8 md:-left-6 rotate-[-15deg]">
            <HeartDeco size={winWidth < 600 ? 22 : 36} opacity={0.9} />
          </div>
          <div className="absolute -top-3 right-4 md:-top-4 md:right-2 rotate-[10deg]">
            <HeartDeco size={winWidth < 600 ? 18 : 28} opacity={0.75} />
          </div>
          <div className="absolute bottom-0 left-0 md:-left-10 rotate-[5deg]">
            <HeartDeco size={winWidth < 600 ? 26 : 44} opacity={0.85} />
          </div>
          <div className="absolute bottom-4 right-0 md:-right-8 rotate-[-8deg]">
            <HeartDeco size={winWidth < 600 ? 20 : 32} opacity={0.8} />
          </div>

          {/* ── Heart grid ───────────────────────────────────────────── */}
          <div style={{ position: 'relative', width: gridW, height: gridH }}>
            {HEART_LAYOUT.map(([col, row, colSpan, rowSpan], cellIdx) => {
              const image = images[cellIdx];
              const isLiked = likedImages.has(cellIdx);
              const isSelected = selectedIndex === cellIdx;

              const x = col * (UNIT + GAP);
              const y = row * (UNIT + GAP);
              const w = colSpan * (UNIT + GAP) - GAP;
              const h = rowSpan * (UNIT + GAP) - GAP;

              return (
                <motion.div
                  key={cellIdx}
                  initial={{ opacity: 0, scale: 0.75 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: cellIdx * 0.07 }}
                  style={{
                    position: 'absolute',
                    left: x,
                    top: y,
                    width: w,
                    height: h,
                    outline: isSelected ? '2px solid #e87aaa' : 'none',
                    outlineOffset: 2,
                    borderRadius: 4,
                  }}
                  onClick={() => setSelectedIndex(cellIdx)}
                  className="overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.04, zIndex: 10 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-500 grayscale-[20%] group-hover:grayscale-0"
                  />
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleLike(cellIdx); }}
                    className={`
                      absolute top-1 right-1 z-20
                      w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/90 shadow-sm
                      flex items-center justify-center
                      transition-all duration-200 hover:scale-110
                      ${isLiked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                    `}
                  >
                    <HeartIcon filled={isLiked} className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Footer Typography ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end w-full mt-4">
          <div className="relative">
            <h1 className="text-5xl md:text-8xl font-bold text-black leading-[0.85] tracking-tight">
              <span className="block text-6xl md:text-9xl">न</span>
              <span className="block -mt-1 md:-mt-4 ml-1 md:ml-2">जराणा</span>
            </h1>
            <p className="mt-5 text-[9px] md:text-[10px] text-gray-500 tracking-widest uppercase font-medium">
              Archived by Raggen.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="max-w-xs">
              <h3 className="text-base md:text-lg font-semibold text-black mb-2">जीवनाचे रंग</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-left md:text-right">
                जेव्हा शब्द अपुरे पडतात, तेव्हा चित्र बोलू लागतात.
              </p>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed text-left md:text-right">
                हे आहेत ते क्षण जे काळालाही विसरता येत नाहीत —
                एक महिना, अनेक emotions, अनंत आठवणी.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Lightbox ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedIndex >= 0 && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/96 backdrop-blur-md flex flex-col"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            <div
              className="flex-1 flex items-center justify-center p-6 pb-36 md:pb-40"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedIndex}
                src={currentImage.src}
                alt={currentImage.alt}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="w-auto h-auto max-w-full max-h-[65vh] object-contain shadow-xl rounded-sm"
              />
            </div>

            <motion.div
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4 md:px-8 md:py-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-black truncate">
                    {currentImage.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mt-0.5">
                    {currentImage.caption}
                  </p>
                </div>
                <button
                  onClick={() => toggleLike(selectedIndex)}
                  className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <HeartIcon filled={likedImages.has(selectedIndex)} className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-medium text-gray-700">
                    {likedImages.has(selectedIndex) ? 'Saved' : 'Save'}
                  </span>
                </button>
              </div>
              <div className="max-w-4xl mx-auto mt-3 flex items-center justify-between text-[10px] md:text-xs text-gray-400">
                <span>{selectedIndex + 1} / {images.length}</span>
                <div className="flex gap-4">
                  <button onClick={goToPrevious} className="hover:text-black transition-colors">← Previous</button>
                  <button onClick={goToNext} className="hover:text-black transition-colors">Next →</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ScatteredGrid;