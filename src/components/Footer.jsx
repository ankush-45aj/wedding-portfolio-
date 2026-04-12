import React from 'react';
import { Camera, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-beige py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Intro */}
        <div className="flex justify-center md:justify-start">
          <Link to="/" className="text-3xl font-serif font-bold uppercase tracking-widest text-gold text-center md:text-left">
            Studio Name
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-gold">Quick Links</h4>
          <ul className="flex flex-col gap-3 font-light tracking-wider">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-gold">Services</h4>
          <ul className="flex flex-col gap-3 font-light tracking-wider">
            <li>Wedding Photography</li>
            <li>Pre-Wedding Shoots</li>
            <li>Event Coverage</li>
            <li>Cinematic Films</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-gold">Contact</h4>
          <ul className="flex flex-col gap-4 font-light tracking-wider">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-gold" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-gold" />
              <span>info@studioname.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-gold" />
              <span>Mumbai, India</span>
            </li>
          </ul>
          
          <div className="flex gap-4 mt-6">
            <a href="#" className="w-10 h-10 rounded-full bg-olive flex items-center justify-center hover:bg-gold transition-colors">
              <Camera size={20} className="text-beige" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-olive flex items-center justify-center hover:bg-gold transition-colors">
              <span className="font-bold text-beige text-sm">WA</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-olive/30 text-center font-light text-sm opacity-70">
        &copy; 2026 Studio Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
