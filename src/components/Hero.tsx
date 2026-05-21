import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex border-b border-white/5 flex-col justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 via-indigo-950/80 to-indigo-950 z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          src="https://images.unsplash.com/photo-1613490900233-141c556dbd21?w=2000&q=80" 
          alt="Luxury home exterior" 
          className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-[1px] w-8 md:w-12 bg-gold-500/50"></div>
            <p className="text-gold-400 tracking-[0.25em] font-medium text-xs md:text-sm font-sans uppercase">
              Boutique Real Estate Development
            </p>
          </div>
          
          <h1 className="text-[3.5rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[6rem] font-serif text-white mb-6 md:mb-8 tracking-tight">
            Experience the <br className="hidden sm:block"/>
            <span className="text-gradient-gold italic pr-4">art of living.</span>
          </h1>
          
          <p className="text-gray-300/90 text-base sm:text-lg md:text-xl font-light max-w-lg md:max-w-2xl leading-relaxed mb-10 md:mb-12">
            Explore innovation, excellence, and sustainability the Indigo way. 
            Enjoy exceptional living in exceptional homes tailored to the African elite.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a 
              href="#projects" 
              className="inline-flex h-14 items-center justify-center gap-3 bg-white text-indigo-950 px-8 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-400 transition-colors duration-300"
            >
              EXPLORE PORTFOLIO
            </a>
            <a 
              href="#consultant"
              className="inline-flex h-14 items-center justify-center gap-3 bg-indigo-900/50 backdrop-blur-sm border border-white/10 text-white px-8 rounded-full text-sm font-medium hover:bg-indigo-800 transition-all duration-300 group"
            >
              AI CONSULTANT <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
      </motion.div>
    </section>
  );
}
