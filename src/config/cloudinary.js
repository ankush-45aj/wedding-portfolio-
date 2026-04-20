/**
 * Cloudinary URL Builder Utility
 * Production-ready version with error handling
 */

const CLOUDINARY_CLOUD_NAME =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "your_cloud_name_here";

const CLOUDINARY_BASE_URL = "https://res.cloudinary.com";

const CLOUDINARY_FOLDER ="";


/**
 * Image & Video Public IDs / URLs
 */
export const IMAGE_NAMES = {
  HERO_VIDEO: "Wedding_Highlight_Final_online-video-cutter.com_belt9v",
  HERO_VIDEO_MOBILE: "mobile-hero-bg_pioych",

  // About Section
  ABOUT_STUDIO_VIDEO: "studio-team_amw9rj",

  // Gallery Section
  GALLERY_WEDDINGS: "gallery-weddings",
  GALLERY_PRE_WEDDING: "gallery-pre-wedding",
  GALLERY_EVENTS: "gallery-events",
  GALLERY_CINEMATIC: "gallery-cinematic-films",

  // Video Section
  VIDEO_ADITI_RAHUL: "video-aditi-rahul",
  VIDEO_ADITI_RAHUL_POSTER: "poster-aditi-rahul",

  VIDEO_MEERA_KABIR: "video-meera-kabir",
  VIDEO_MEERA_KABIR_POSTER: "poster-meera-kabir",

  VIDEO_PRIYA_ROHAN: "video-priya-rohan",
  VIDEO_PRIYA_ROHAN_POSTER: "poster-priya-rohan",

  // Testimonials
  TESTIMONIAL_SNEHA_VARUN: "testimonial-sneha-varun",
  TESTIMONIAL_ANANYA_SIDDHARTH: "testimonial-ananya-siddharth",
  TESTIMONIAL_RIYA_KARAN: "testimonial-riya-karan",

  // Masonry Grid (keep full URLs if you want)
  MASONRY_WEDDING_MOMENT: "https://res.cloudinary.com/ddyh4pftg/image/upload/v1776522535/_DEE0045_kep8fh.jpg",
  MASONRY_COUPLE: "https://res.cloudinary.com/ddyh4pftg/image/upload/v1776522484/Dee_Photography9356300456155of207_spswwy.jpg",
  MASONRY_HANDS: "https://res.cloudinary.com/ddyh4pftg/image/upload/v1776522551/DSC08154_1_l3csgq.jpg",
  MASONRY_PHOTOGRAPHER: "https://res.cloudinary.com/ddyh4pftg/image/upload/v1776522554/DSC08070_bfwaa7.jpg",
  MASONRY_VENUE: "https://res.cloudinary.com/ddyh4pftg/image/upload/v1776522535/_DEE0022_nwi6um.jpg",
  MASONRY_CELEBRATION: "https://res.cloudinary.com/ddyh4pftg/image/upload/v1776522494/Dee_Photography9356300456137of207_kbtols.jpg",
  MASONRY_FLOWERS: "https://res.cloudinary.com/ddyh4pftg/image/upload/v1776524062/IMG-20251121-WA0006_zr1hhy.jpg",
  MASONRY_FRIENDS: "https://res.cloudinary.com/ddyh4pftg/image/upload/v1776524074/IMG-20251121-WA0005_myr3yh.jpg",
  MASONRY_GROUP: "https://res.cloudinary.com/ddyh4pftg/image/upload/v1776540157/IMG-20251121-WA0018_rj1mxe.jpg",
  MASONRY_GROUP1: "https://res.cloudinary.com/ddyh4pftg/image/upload/v1776524093/IMG-20251121-WA0003_v5ioey.jpg",
  MASONRY_GROUP2: "https://res.cloudinary.com/ddyh4pftg/image/upload/v1776540145/IMG-20251121-WA0005_1_h0loul.jpg",
  MASONRY_GROUP3: "https://res.cloudinary.com/ddyh4pftg/image/upload/q_auto/f_auto/v1776540145/IMG-20251121-WA0003_1_ps0dga.jpg",
  MASONRY_GROUP4: "https://res.cloudinary.com/ddyh4pftg/image/upload/q_auto/f_auto/v1776540145/IMG-20251121-WA0014_ydc4ou.jpg",
  MASONRY_GROUP5: "https://res.cloudinary.com/ddyh4pftg/image/upload/q_auto/f_auto/v1776540145/IMG-20251121-WA0011_uyg4jh.jpg   ",
  MASONRY_GROUP6: "https://res.cloudinary.com/ddyh4pftg/image/upload/v1776540144/IMG-20251121-WA0009_ewaciu.jpg",
  MASONRY_GROUP7: "https://res.cloudinary.com/ddyh4pftg/image/upload/v1776540144/IMG-20251121-WA0013_xjsu3q.jpg",
  MASONRY_GROUP8: "https://res.cloudinary.com/ddyh4pftg/image/upload/v1776540144/IMG-20251121-WA0012_zljgec.jpg",
  MASONRY_GROUP9: "https://res.cloudinary.com/ddyh4pftg/image/upload/v1776540144/IMG-20251121-WA0001_mrsdh9.jpg",
};

/**
 * Utils
 */
const isFullUrl = (url) =>
  typeof url === "string" && url.startsWith("http");

const validateInput = (name, type = "asset") => {
  if (!name || typeof name !== "string") {
    console.warn(`⚠️ Invalid ${type} name:`, name);
    return false;
  }
  return true;
};

/**
 * ✅ IMAGE BUILDER (FIXED)
 */
export const buildCloudinaryImageUrl = (imageName, options = {}) => {
  try {
    if (!validateInput(imageName, "image")) return "";

    if (isFullUrl(imageName)) return imageName;

    const {
      width = "auto",
      height = "auto",
      crop = "fill",
      quality = "auto",
      format = "auto",
    } = options;

    const transforms = [
      width !== "auto" && `w_${width}`,
      height !== "auto" && `h_${height}`,
      `c_${crop}`,
      `q_${quality}`,
      `f_${format}`,
    ]
      .filter(Boolean)
      .join(",");

    const transformPath = transforms ? `${transforms}/` : "";

    return `${CLOUDINARY_BASE_URL}/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformPath}${CLOUDINARY_FOLDER}/${imageName}`;
  } catch (err) {
    console.error("❌ Image URL Error:", err);
    return "";
  }
};

/**
 * ✅ VIDEO BUILDER (WITH STREAMING SUPPORT)
 */
export const buildCloudinaryVideoUrl = (videoName, options = {}) => {
  try {
    if (!validateInput(videoName, "video")) return "";

    if (isFullUrl(videoName)) return videoName;

    const {
      width = "auto",
      height = "auto",
      quality = "auto",
      video_codec = "auto",
      streaming = false,
    } = options;

    const transforms = [
      width !== "auto" && `w_${width}`,
      height !== "auto" && `h_${height}`,
      `q_${quality}`,
      `vc_${video_codec}`,
      streaming && "sp_auto",
    ]
      .filter(Boolean)
      .join(",");

    const transformPath = transforms ? `${transforms}/` : "";
    const format = streaming ? ".m3u8" : ".mp4";

    return `${CLOUDINARY_BASE_URL}/${CLOUDINARY_CLOUD_NAME}/video/upload/${transformPath}${CLOUDINARY_FOLDER}/${videoName}${format}`;
  } catch (err) {
    console.error("❌ Video URL Error:", err);
    return "";
  }
};

/**
 * 🎬 PRESETS
 */

// Hero Video
export const heroVideoPreset = (videoName) =>
  buildCloudinaryVideoUrl(videoName, {
    width: 1920,
    height: 1080,
    quality: "auto:low",
    streaming: false, // ⚠️ keep false unless using Video.js
  });

// Gallery Images
export const galleryImagePreset = (imageName) =>
  buildCloudinaryImageUrl(imageName, {
    width: 800,
    height: 600,
  });

// Testimonial Avatar
export const testimonialPreset = (imageName) =>
  buildCloudinaryImageUrl(imageName, {
    width: 96,
    height: 96,
    crop: "thumb",
  });

// Masonry Grid
export const masonryPreset = (imageName, aspectRatio = "4/5") => {
  let height;

  switch (aspectRatio) {
    case "1/1":
      height = 500;
      break;
    case "4/3":
      height = 375;
      break;
    case "3/4":
      height = 667;
      break;
    default:
      height = 625;
  }

  return buildCloudinaryImageUrl(imageName, {
    width: 500,
    height,
  });
};