import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Lock scroll during preloading
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      document.body.style.overflow = 'unset';
      onComplete();
    }, 2800);
    
    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-indigo-950 flex flex-col items-center justify-center p-4 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] before:content-[''] before:absolute before:inset-0 before:bg-indigo-950/80"
    >
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif text-white tracking-[0.2em] md:tracking-[0.3em] pl-3 uppercase relative mb-8"
        >
          <span className="text-gradient-gold">Indigo</span>
        </motion.div>
        
        <div className="w-[120px] md:w-[200px] h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
          />
        </div>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1 }}
           className="mt-6 text-[10px] md:text-xs tracking-widest text-gray-500 uppercase font-light"
        >
           Conceiving Innovative Projects
        </motion.div>
      </div>
    </motion.div>
  );
}
