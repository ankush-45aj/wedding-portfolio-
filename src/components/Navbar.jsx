import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled && !isOpen
            ? 'bg-primary text-textMain shadow-lg py-4'
            : 'bg-transparent py-6'
        } ${isOpen ? 'text-textMain' : 'text-textMain'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
          <Link
            to="/"
            onClick={handleMenuClick}
            className="text-2xl font-serif tracking-widest uppercase font-bold"
          >
            Studio Name
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm uppercase tracking-widest hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU START */}
      
      {/* CLICK CATCHER — sits BELOW navbar but above page */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-30 md:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      />

      {/* TOP CURTAIN */}
      <div
        className={`fixed inset-x-0 top-0 h-1/2 bg-[#E8DCC4] z-30 md:hidden transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      />

      {/* BOTTOM CURTAIN */}
      <div
        className={`fixed inset-x-0 bottom-0 h-1/2 bg-[#E8DCC4] z-30 md:hidden transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      />

      {/* MENU CONTENT — sits ABOVE curtains */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden transition-opacity duration-500 delay-100 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="space-y-10 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={handleMenuClick}
                className="text-textMain text-4xl font-serif tracking-widest hover:text-white transition-colors duration-300 inline-block uppercase"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Action Button */}
        <a
          href="#book"
          onClick={handleMenuClick}
          className="mt-16 px-10 py-4 border border-textMain text-textMain uppercase tracking-widest text-xs font-medium hover:bg-textMain hover:text-[#E8DCC4] transition-all duration-300"
        >
          Book Consultation
        </a>
      </div>
      {/* MOBILE OVERLAY MENU END */}
    </>
  );
};

export default Navbar;
