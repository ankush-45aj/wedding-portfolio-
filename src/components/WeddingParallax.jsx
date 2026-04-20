import React from 'react';
import './WeddingParallax.css';

const WeddingParallax = () => {
    return (
        <section className="parallax-wrapper">
            {/* Background — replace with your 4K groom & bride image */}
            <div
                className="parallax-img"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/27876531/pexels-photo-27876531.jpeg')`,
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