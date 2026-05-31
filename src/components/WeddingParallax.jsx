import React, { useState, useEffect, useRef } from "react";
import "./WeddingParallax.css";

const WeddingParallax = () => {
    const [isMobile, setIsMobile] = useState(false);

    const wrapperRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (!isMobile) return;

        const handleScroll = () => {
            if (!wrapperRef.current || !imgRef.current) return;

            const rect = wrapperRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (rect.bottom > 0 && rect.top < viewportHeight) {
                const totalRange = viewportHeight + rect.height;
                const currentScroll = viewportHeight - rect.top;
                const scrollRatio = Math.max(0, Math.min(1, currentScroll / totalRange));

                // The image has top: -20% and height: 140% in CSS.
                // We can translate it safely up to 20% of wrapper height.
                const maxTranslation = rect.height * 0.2;
                const translation = (scrollRatio - 0.5) * maxTranslation;

                imgRef.current.style.transform = `translate3d(0, ${translation}px, 0)`;
            }
        };

        // Initialize position on mount/resize
        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [isMobile]);

    const mobileImage =
        "https://res.cloudinary.com/ddyh4pftg/image/upload/v1780212545/photo2.jpg";

    const desktopImage =
        "https://images.pexels.com/photos/27876531/pexels-photo-27876531.jpeg";

    return (
        <section ref={wrapperRef} className="parallax-wrapper">
            <div
                ref={imgRef}
                className="parallax-img"
                style={{
                    backgroundImage: `url(${isMobile ? mobileImage : desktopImage
                        })`,
                }}
            />

            <div className="wedding-text">
                <h2>
                    <span className="wedding-textbg">
                        Groom & Bride
                    </span>
                </h2>

                <p className="subtitle">
                    A Forever Kind of Love
                </p>
            </div>
        </section>
    );
};

export default WeddingParallax;