import React, { useState, useEffect } from "react";
import "./WeddingParallax.css";

const WeddingParallax = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            className="parallax-wrapper"
            style={{
                backgroundImage: !isMobile
                    ? "url(https://images.pexels.com/photos/27876531/pexels-photo-27876531.jpeg)"
                    : "none",
            }}
        >
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