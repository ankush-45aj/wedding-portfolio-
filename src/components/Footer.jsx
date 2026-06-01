import React from 'react';
import { Camera, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-16 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo & Intro */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/" className="text-3xl font-serif font-bold uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors duration-300">
            Dee Photography
          </Link>
          <p className="text-zinc-400 text-sm font-light text-center md:text-left max-w-xs leading-relaxed">
            Capturing raw emotions, timeless love, and cinematic frames. Making your moments live forever.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-amber-400">Quick Links</h4>
          <ul className="flex flex-col gap-3 font-light tracking-wider text-sm">
            <li><Link to="/" className="text-zinc-400 hover:text-amber-400 transition-colors duration-300">Home</Link></li>
            <li><Link to="/portfolio" className="text-zinc-400 hover:text-amber-400 transition-colors duration-300">My Portfolio</Link></li>
            <li><Link to="/about" className="text-zinc-400 hover:text-amber-400 transition-colors duration-300">About</Link></li>
            <li><Link to="/contact" className="text-zinc-400 hover:text-amber-400 transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-amber-400">Services</h4>
          <ul className="flex flex-col gap-3 font-light tracking-wider text-sm text-zinc-400">
            <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">Wedding Photography</li>
            <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">Pre-Wedding Shoots</li>
            <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">Event Coverage</li>
            <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">Cinematic Films</li>
            <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">Birthday</li>
            <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">Pre Birthday</li>
            <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">Cinematic Reels</li>
            <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">& Many more Events</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-amber-400">Contact</h4>
          <ul className="flex flex-col gap-4 font-light tracking-wider text-sm">
            <li className="flex items-center gap-3 text-zinc-400">
              <Phone size={18} className="text-amber-400" />
              <span>+91 9356300456</span>
            </li>
            <li className="flex items-center gap-3 text-zinc-400">
              <Mail size={18} className="text-amber-400" />
              <span>
                deephotography45@gmail.com</span>
            </li>
            <li className="flex items-start gap-3 text-zinc-400">
              <MapPin size={18} className="text-amber-400 min-w-[18px] mt-0.5" />
              <span>Virar ( East ) Maharashtra 401305, India</span>
            </li>
          </ul>

          {/* Clean, Non-breaking Social Badges */}
          <div className="flex gap-3 mt-8 flex-wrap">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 hover:bg-amber-400 hover:text-zinc-950 transition-all duration-300" aria-label="Facebook">
              FB
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center hover:bg-amber-400 hover:text-zinc-950 transition-all duration-300" aria-label="Instagram">
              <Camera size={16} />
            </a>

            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 hover:bg-amber-400 hover:text-zinc-950 transition-all duration-300" aria-label="YouTube">
              YT
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-900 text-center font-light text-xs tracking-widest text-zinc-500">
        &copy; {new Date().getFullYear()} Ankush Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;