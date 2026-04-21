import React from 'react';
import { Camera, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-textMain text-primary py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Intro */}
        <div className="flex justify-center md:justify-start">
          <Link to="/" className="text-3xl font-serif font-bold uppercase tracking-widest text-accent text-center md:text-left">
            Studio Name
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-accent">Quick Links</h4>
          <ul className="flex flex-col gap-3 font-light tracking-wider">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-accent">Services</h4>
          <ul className="flex flex-col gap-3 font-light tracking-wider">
            <li>Wedding Photography</li>
            <li>Pre-Wedding Shoots</li>
            <li>Event Coverage</li>
            <li>Cinematic Films</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-accent">Contact</h4>
          <ul className="flex flex-col gap-4 font-light tracking-wider">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent" />
              <span>info@studioname.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-accent min-w-[18px]" />
              <span>123 Wedding Avenue, Bandra West, Mumbai, Maharashtra 400050, India</span>
            </li>
          </ul>
          
          <div className="flex gap-4 mt-6 flex-wrap">
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors" aria-label="Facebook">
              <span className="font-bold text-textMain text-sm">FB</span>
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors" aria-label="Twitter">
              <span className="font-bold text-textMain text-sm">X</span>
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors" aria-label="Instagram">
              <Camera size={20} className="text-textMain" />
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors" aria-label="LinkedIn">
              <span className="font-bold text-textMain text-sm">IN</span>
            </a>
            <a href="https://www.youtube.com/channel/yourchannel" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors" aria-label="YouTube">
              <span className="font-bold text-textMain text-sm">YT</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-accent/10 text-center font-light text-sm opacity-70">
        &copy; 2026 Studio Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
