import React from "react";
import "./WeddingParallax.css";

const WeddingParallax = () => {
    return (
        <section
            className="parallax-wrapper"
            style={{
                backgroundImage:
                    "url(https://images.pexels.com/photos/27876531/pexels-photo-27876531.jpeg)",
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