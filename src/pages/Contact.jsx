import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-primary min-h-screen">
      <Helmet>
        <title>Contact Us | Book Your Elegant Wedding Photography</title>
        <meta name="description" content="Get in touch to book our elegant wedding photography services. Let's discuss how we can capture your special day and turn your moments into lifelong memories." />
        <link rel="canonical" href="https://wedding-portfolio-beta.vercel.app/contact" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wedding-portfolio-beta.vercel.app/contact" />
        <meta property="og:title" content="Contact Us | Book Your Elegant Wedding Photography" />
        <meta property="og:description" content="Get in touch to book our elegant wedding photography services. Let's discuss how we can capture your special day and turn your moments into lifelong memories." />
        <meta property="og:image" content="https://wedding-portfolio-beta.vercel.app/fallback.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://wedding-portfolio-beta.vercel.app/contact" />
        <meta name="twitter:title" content="Contact Us | Book Your Elegant Wedding Photography" />
        <meta name="twitter:description" content="Get in touch to book our elegant wedding photography services. Let's discuss how we can capture your special day and turn your moments into lifelong memories." />
        <meta name="twitter:image" content="https://wedding-portfolio-beta.vercel.app/fallback.jpg" />
      </Helmet>
      <div className="text-center py-16 text-textMain bg-primary border-b border-secondary/30 shadow-sm">
        <h1 className="text-5xl md:text-6xl font-serif mb-4">Contact Us</h1>
        <p className="text-accent tracking-widest uppercase text-sm">Let's talk about your big day</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
