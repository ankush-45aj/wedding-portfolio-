import React, { useState, useEffect } from 'react';
import './WeddingParallax.css';

const WeddingParallax = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Different images for mobile and desktop
    const mobileImage = 'https://res.cloudinary.com/ddyh4pftg/image/upload/v1780212545/photo2.jpg'; // Tall image for mobile
    const desktopImage = 'https://images.pexels.com/photos/27876531/pexels-photo-27876531.jpeg'; // Wide image for desktop

    const parallaxImage = isMobile ? mobileImage : desktopImage;

    return (
        <section className="parallax-wrapper">
            {/* Background — different images for mobile/desktop, parallax on both */}
            <div
                className="parallax-img"
                style={{
                    backgroundImage: `url('${parallaxImage}')`,
                }}
            />

            {/* Content */}
            <div className="wedding-text">
                <h2>
                    <span className="wedding-textbg">Groom & Bride</span>
                </h2>
                <p className="mt-4 text-textMain/80 text-xs tracking-[0.3em] uppercase">
                    A Forever Kind of Love
                </p>
            </div>
        </section>
    );
};

export default WeddingParallax;