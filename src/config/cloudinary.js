/**
 * Cloudinary URL Builder Utility
 * Production-ready version with error handling
 */

const CLOUDINARY_CLOUD_NAME =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "your_cloud_name_here";

const CLOUDINARY_BASE_URL = "https://res.cloudinary.com";

const CLOUDINARY_FOLDER = ""; // Leave empty if using direct photo names
const CLOUDINARY_VERSION = "v1780346468"; // Version ID from Cloudinary
const IMAGE_EXTENSION = ".jpg"; // Default extension for masonry images


/**
 * Image & Video Public IDs / URLs
 */
export const IMAGE_NAMES = {
  HERO_VIDEO: "mobile-hero-bg_pioych11",
  HERO_VIDEO_MOBILE: "mobile-hero-bg_pioych11",

  // About Section
  ABOUT_STUDIO_VIDEO: "studio-team_amw9rj",

  // Gallery Section
  GALLERY_WEDDINGS: "weddings-gallery",
  GALLERY_PRE_WEDDING: "gallery-pre-wedding",
  GALLERY_EVENTS: "gallery_events",
  GALLERY_CINEMATIC: "cinematic_films",

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
 MASONRY_WEDDING_MOMENT: "photo1",

  MASONRY_COUPLE: "photo2",

  MASONRY_HANDS: "photo3",

  MASONRY_PHOTOGRAPHER: "photo4",

  MASONRY_VENUE: "photo5",

  MASONRY_CELEBRATION: "photo6",

  MASONRY_FLOWERS: "photo7",

  MASONRY_FRIENDS: "photo8",

  MASONRY_GROUP: "photo9",

  MASONRY_GROUP1: "photo10",

  MASONRY_GROUP2: "photo11",

  MASONRY_GROUP3: "photo12",

  MASONRY_GROUP4: "photo13",

  MASONRY_GROUP5: "photo14",

  MASONRY_GROUP6: "photo15",

  MASONRY_GROUP7: "photo16",

  MASONRY_GROUP8: "photo17",

  MASONRY_GROUP9: "photo19",
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
    
    // Include version ID and file extension
    const versionPath = CLOUDINARY_VERSION ? `${CLOUDINARY_VERSION}/` : "";
    const fileName = imageName.endsWith(IMAGE_EXTENSION) ? imageName : `${imageName}${IMAGE_EXTENSION}`;

    return `${CLOUDINARY_BASE_URL}/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformPath}${versionPath}${fileName}`;
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