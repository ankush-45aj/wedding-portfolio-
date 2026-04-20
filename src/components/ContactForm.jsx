import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <section
      className="py-24 bg-secondary text-textMain relative"
      id="book"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-accent mb-6">
            Let's Create Together
          </h2>

          <p className="text-lg text-textLight mb-8 font-light leading-relaxed">
            We are currently booking for the upcoming wedding season.
            Fill out the form, and we’ll get back to you within 24 hours
            to discuss your dream day.
          </p>

          <div className="flex flex-col gap-6 mt-12">
            <div className="flex flex-col gap-1">
              <span className="text-accent tracking-widest uppercase text-xs font-medium">
                Email Us
              </span>
              <a
                href="mailto:hello@studioname.com"
                className="text-xl hover:text-accent transition-colors duration-300"
              >
                hello@studioname.com
              </a>
            </div>

            <div className="border border-accent/30 bg-white shadow-md p-6 rounded-sm flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white hover:opacity-90 transition-all rounded-sm uppercase tracking-widest text-sm font-medium shadow-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382..." />
                </svg>
                Chat on WhatsApp
              </a>

              <span className="text-sm text-textLight">
                (Quickest Response)
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white shadow-xl border border-accent/20 p-8 md:p-12 rounded-sm"
        >
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-xs uppercase tracking-widest text-accent font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="bg-transparent border-b border-accent/40 py-3 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-xs uppercase tracking-widest text-accent font-medium"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone Number"
                  required
                  className="bg-transparent border-b border-accent/40 py-3 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="date"
                className="text-xs uppercase tracking-widest text-accent font-medium"
              >
                Event Date
              </label>
              <input
                type="date"
                id="date"
                className="bg-transparent border-b border-accent/40 py-3 focus:outline-none focus:border-accent transition-colors text-textLight"
              />
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <label
                htmlFor="message"
                className="text-xs uppercase tracking-widest text-accent font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tell us about your wedding..."
                required
                className="bg-transparent border-b border-accent/40 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-3 w-full py-5 bg-accent text-white hover:bg-textMain transition-all duration-500 uppercase tracking-widest text-sm font-semibold shadow-md hover:shadow-xl"
            >
              <span className="tracking-[0.2em]">Send Message</span>
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;