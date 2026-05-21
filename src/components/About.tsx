import { Building, Gem, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

const coreValues = [
  {
    icon: Gem,
    title: "Excellence",
    description: "Uncompromising quality in every material selected and every detail finished. We build homes that stand as testaments to architectural mastery."
  },
  {
    icon: Building,
    title: "Innovation",
    description: "Pushing the boundaries of modern living with smart technologies and vanguard structural designs tailored to the African elite."
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Developing with the future in mind. Our estates integrate green technologies and sustainable practices for lasting value."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-indigo-950">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-[2.5rem] md:text-5xl font-serif text-white mb-6 leading-tight">
              Conceiving <br className="hidden sm:block"/>
              <span className="text-gradient-gold italic pr-2">Innovative Projects.</span>
            </h2>
            <p className="text-gray-300/80 text-base md:text-lg leading-relaxed mb-10 md:mb-12 font-light">
              Indigo Homes and Developments Limited is a boutique real estate development firm based in Lagos, Nigeria. We seek to create quality, comfortable, and intelligent spaces that elevate the standard of living.
            </p>
            <div className="space-y-8 md:space-y-10">
              {coreValues.map((value, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-5 sm:gap-6 group">
                  <div className="shrink-0 w-12 h-12 rounded-full border border-gold-500/20 flex items-center justify-center bg-gold-500/5 text-gold-400 group-hover:bg-gold-500 group-hover:text-indigo-950 group-hover:border-gold-500 transition-all duration-500">
                    <value.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400/80 font-light leading-relaxed text-sm md:text-base">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative h-[400px] md:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden order-1 lg:order-2 group"
          >
            <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay z-10 transition-colors duration-700 group-hover:bg-transparent" />
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" 
              alt="Luxurious interior" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Decorative elements */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 w-16 md:w-24 h-16 md:h-24 border-t border-l border-gold-500/40 z-20 transition-all duration-700 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:border-gold-500/80" />
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-16 md:w-24 h-16 md:h-24 border-b border-r border-gold-500/40 z-20 transition-all duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:border-gold-500/80" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
