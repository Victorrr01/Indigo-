import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileOpen]);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-indigo-950/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6 lg:py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
          <div className="text-2xl font-serif tracking-widest font-bold text-white uppercase relative z-50">
            <span className="text-gradient-gold">Indigo</span>
          </div>
          
          <nav className="hidden md:flex gap-10 text-xs font-medium tracking-[0.15em] text-gray-300">
            <a href="#about" className="hover:text-gold-400 transition-colors py-2">ABOUT</a>
            <a href="#services" className="hover:text-gold-400 transition-colors py-2">SERVICES</a>
            <a href="#projects" className="hover:text-gold-400 transition-colors py-2">PROJECTS</a>
            <a href="#consultant" className="hover:text-gold-400 transition-colors py-2 relative group">
              AI ARCHITECT
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </nav>
          
          <button 
            className="md:hidden text-white relative z-50 p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
             {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-indigo-950 flex justify-center items-center px-6"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
            <nav className="flex flex-col items-center gap-10 relative z-10 w-full">
              <a href="#about" onClick={() => setMobileOpen(false)} className="text-3xl font-serif text-white hover:text-gold-400 transition-colors">About</a>
              <a href="#services" onClick={() => setMobileOpen(false)} className="text-3xl font-serif text-white hover:text-gold-400 transition-colors">Services</a>
              <a href="#projects" onClick={() => setMobileOpen(false)} className="text-3xl font-serif text-white hover:text-gold-400 transition-colors">Projects</a>
              <a href="#consultant" onClick={() => setMobileOpen(false)} className="text-3xl font-serif text-gold-400">AI Architect</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
