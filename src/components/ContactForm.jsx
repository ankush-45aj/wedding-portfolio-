import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="py-24 bg-olive text-beige relative" id="book">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-6">Let's Create Together</h2>
          <p className="text-lg text-beige/80 mb-8 font-light leading-relaxed">
            We are currently booking for the upcoming wedding season. Fill out the form, and we'll get back to you within 24 hours to discuss your dream day.
          </p>
          
          <div className="flex flex-col gap-6 mt-12">
            <div className="flex flex-col gap-1">
              <span className="text-gold tracking-widest uppercase text-xs">Email Us</span>
              <a href="mailto:hello@studioname.com" className="text-xl hover:text-gold transition-colors">hello@studioname.com</a>
            </div>
            
            <div className="border-t border-beige/20 pt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white hover:bg-green-600 transition-colors rounded-sm uppercase tracking-widest text-sm font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
              <span className="text-sm font-light opacity-80">(Quickest Response)</span>
            </div>
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-beige p-8 md:p-12 text-dark rounded-sm"
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-brown font-medium">Name</label>
                <input type="text" id="name" className="bg-transparent border-b border-olive/30 py-2 focus:outline-none focus:border-olive transition-colors" placeholder="Your Name" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs uppercase tracking-widest text-brown font-medium">Phone</label>
                <input type="tel" id="phone" className="bg-transparent border-b border-olive/30 py-2 focus:outline-none focus:border-olive transition-colors" placeholder="Your Phone Number" required />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="date" className="text-xs uppercase tracking-widest text-brown font-medium">Event Date</label>
              <input type="date" id="date" className="bg-transparent border-b border-olive/30 py-2 focus:outline-none focus:border-olive transition-colors text-dark/70" />
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-brown font-medium">Message</label>
              <textarea id="message" rows="4" className="bg-transparent border-b border-olive/30 py-2 focus:outline-none focus:border-olive transition-colors resize-none" placeholder="Tell us about your wedding..." required></textarea>
            </div>

            <button type="submit" className="flex items-center justify-center gap-3 w-full py-4 bg-olive text-beige hover:bg-dark transition-colors duration-300 uppercase tracking-widest text-sm font-medium">
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
