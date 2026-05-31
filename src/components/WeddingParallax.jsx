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
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    /* ---------- MOBILE PARALLAX ---------- */
    useEffect(() => {
        if (!isMobile) return;

        let rafId = null;

        const handleScroll = () => {
            if (!wrapperRef.current || !imgRef.current) return;

            const rect = wrapperRef.current.getBoundingClientRect();
            const vh = window.innerHeight;

            // Only animate while the section is in the viewport
            if (rect.bottom < 0 || rect.top > vh) return;

            // 0 = section just entering from bottom
            // 1 = section just leaving at top
            const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));

            // Because the image is 140% height with top: -20%,
            // we can safely translate it ±20% of the wrapper height
            // without ever showing empty space.
            const maxMove = rect.height * 0.2;
            const translate = (progress - 0.5) * 2 * maxMove; // range: -20% → +20%

            imgRef.current.style.transform = `translate3d(0, ${translate}px, 0)`;
        };

        const onScroll = () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(handleScroll);
        };

        // Initialise position immediately
        handleScroll();

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
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
                    backgroundImage: `url(${isMobile ? mobileImage : desktopImage})`,
                }}
            />

            <div className="wedding-text">
                <h2>
                    <span className="wedding-textbg">Groom & Bride</span>
                </h2>
                <p className="subtitle">A Forever Kind of Love</p>
            </div>
        </section>
    );
};

export default WeddingParallax;