import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo-small.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface NavLink {
    name: string;
    href: string;
  }

  const leftLinks:NavLink[] = [
    { name: 'O nas', href: '#about' },
    { name: 'Menu', href: '#menu' },
  ];

  const rightLinks:NavLink[]= [
    { name: 'Galeria', href: '#gallery' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/60 backdrop-blur-xl py-4 shadow-lg text-black' : 'bg-transparent py-6 text-brand-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop Nav */}
        <div className="hidden md:grid md:grid-cols-3 items-center">
          {/* Left Links */}
          <div className="flex items-center justify-end space-x-8">
            {leftLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-all uppercase tracking-widest ${
                  scrolled 
                    ? 'hover:text-brand-gray' 
                    : 'hover:text-brand-white hover:[text-shadow:0_0_20px_rgba(255,255,255,0.8)]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="flex items-center justify-center space-x-3"
          >
            <img 
              src={logo}
              alt="Maka w Mieście Logo" 
              className={`object-contain ${scrolled ? 'invert-0 w-17 h-17 object-fill' : 'invert transition-all duration-300 w-25 h-25'}`}
            />
          </motion.div>

          {/* Right Links */}
          <div className="flex items-center justify-start space-x-8">
            {rightLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-all uppercase tracking-widest ${
                  scrolled 
                    ? 'hover:text-brand-gray' 
                    : 'hover:text-brand-white hover:[text-shadow:0_0_20px_rgba(255,255,255,0.8)]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="flex items-center space-x-3"
            >
              <img 
                src={logo}
                alt="Mąka w Mieście Logo" 
                className={`h-15 w-15 object-contain transition-all duration-300 ${scrolled ? 'invert-0' : 'invert'}`}
              />
              <span className={`text-2xl font-serif font-bold tracking-tight pl-2 transition-colors duration-300 ${scrolled ? 'text-brand-black' : 'text-brand-white'}`}>
                Mąka w Mieście
              </span>
            </motion.div>

            <button 
              className={`transition-colors duration-300 ${scrolled ? 'text-brand-black' : 'text-brand-white'}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-full left-0 w-full shadow-2xl py-8 flex flex-col items-center space-y-6 md:hidden border-t transition-all duration-300 ${
              scrolled 
                ? 'bg-white/90 backdrop-blur-xl border-brand-gray-light' 
                : 'bg-black/30 backdrop-blur-xl border-white/10'
            }`}
          >
            {[...leftLinks, ...rightLinks].map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition-colors ${
                  scrolled ? 'text-brand-black hover:text-brand-gray' : 'text-brand-white hover:text-brand-white/70'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+48509609319"
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                scrolled 
                  ? 'bg-brand-black text-white hover:bg-brand-charcoal' 
                  : 'bg-brand-white text-brand-black hover:bg-brand-gray-light'
              }`}
            >
              Zarezerwuj: +48 509 609 319
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
