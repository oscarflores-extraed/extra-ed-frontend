import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import the new real logo asset
import LogoSingleLine from '../assets/00_global_logos/ExtraEd-Logo-Single-Line.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Our Team', path: '/our-team' },
    { name: 'Economic Inclusivity', path: '/economic-inclusivity' },
    { name: 'Programs', path: '/programs' },
    { name: 'Press', path: '/in-the-news' },
    { name: 'Contact', path: '/contact-us-extraed-were-here-to-help' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Donate', path: '/donate' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 left-0 top-0`}>
      <div className={`mx-auto w-full transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50 py-3 px-6 md:px-12' : 'bg-gradient-to-b from-slate-900/80 to-transparent py-6 px-6 md:px-12'}`}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 pr-6 hover:scale-105 transition-transform duration-300 origin-left">
            <img src={LogoSingleLine} alt="Extra Ed Logo" className="h-10 md:h-14 w-auto object-contain drop-shadow-md" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-4 2xl:gap-8">
            <div className="flex flex-wrap items-center justify-center gap-4 2xl:gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-sm 2xl:text-base font-extrabold transition-all hover:-translate-y-0.5 hover:text-[var(--brand-orange)] ${scrolled ? (location.pathname === link.path ? 'text-[var(--brand-orange)]' : 'text-slate-900') : (location.pathname === link.path ? 'text-[var(--brand-orange)] drop-shadow-md' : 'text-white drop-shadow-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]')}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <a href="#" className="bg-[var(--brand-blue)] hover:bg-blue-600 text-white px-7 py-3 rounded-full text-base font-extrabold transition-all shadow-md hover:shadow-xl hover:-translate-y-1 whitespace-nowrap ml-4">
              Login / Register
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-slate-900' : 'text-white'} hover:text-[var(--brand-orange)] p-2 transition-colors`}>
               {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
           <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             className="absolute top-full left-0 w-full bg-white shadow-2xl border-b border-slate-100 p-8 xl:hidden"
           >
             <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-extrabold text-slate-900 hover:text-[var(--brand-orange)] hover:bg-orange-50 p-4 rounded-2xl transition-colors border border-transparent hover:border-orange-100"
                  >
                    {link.name}
                  </Link>
                ))}
                <a href="#" className="bg-[var(--brand-blue)] text-white text-center py-5 rounded-2xl font-extrabold mt-4 shadow-xl text-xl hover:-translate-y-1 transition-transform">
                  Login / Register
                </a>
             </div>
           </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
