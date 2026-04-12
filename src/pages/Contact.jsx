import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-olive min-h-screen">
      <div className="text-center py-16 text-beige bg-olive border-b border-olive/30 shadow-sm">
        <h1 className="text-5xl md:text-6xl font-serif mb-4">Contact Us</h1>
        <p className="text-gold tracking-widest uppercase text-sm">Let's talk about your big day</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
