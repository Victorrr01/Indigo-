import { motion } from 'motion/react';
import { HardHat, Key, Building2, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Real Estate Development',
    description: 'End-to-end conception, design, and construction of innovative, high-yield luxury properties and exclusive gated estates.',
    icon: HardHat
  },
  {
    id: '02',
    title: 'Property Management',
    description: 'Comprehensive asset management ensuring your properties maintain their premium visual value and operational excellence.',
    icon: Key
  },
  {
    id: '03',
    title: 'Professional Services',
    description: 'Bespoke architectural consulting, legal advisory, and high-end interior furnishing tailored to the African elite.',
    icon: Building2
  },
  {
    id: '04',
    title: 'Investment Advisory',
    description: 'Data-driven insights into the Lagos real estate market, securing robust portfolios and lucrative, long-term ROI.',
    icon: TrendingUp
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-indigo-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 md:mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-gold-500/50"></div>
              <p className="text-gold-400 tracking-[0.2em] text-xs md:text-sm font-sans uppercase font-medium">
                Our Services
              </p>
            </div>
            <h2 className="text-[2.5rem] md:text-5xl font-serif text-white leading-tight">
              A holistic approach to <br className="hidden sm:block"/>
              <span className="text-gradient-gold italic">luxury real estate.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 font-light text-sm md:text-base leading-relaxed max-w-sm hidden lg:block"
          >
            From the initial blueprint to long-term asset management, Indigo delivers uncompromising quality across every phase of property ownership.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-indigo-900/20 backdrop-blur-sm border border-white/5 p-8 md:p-10 rounded-[2rem] hover:bg-indigo-900/40 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 p-8 text-gray-500/20 font-serif text-6xl md:text-7xl group-hover:text-gold-500/10 transition-colors pointer-events-none select-none">
                {service.id}
              </div>
              
              <div className="w-12 h-12 rounded-full border border-gold-500/30 bg-gold-500/5 flex items-center justify-center text-gold-400 mb-8 group-hover:bg-gold-500 group-hover:text-indigo-950 transition-colors duration-500">
                <service.icon className="w-5 h-5" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-serif text-white mb-4 pr-4">{service.title}</h3>
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-8">{service.description}</p>
              
              <div className="mt-auto flex items-center gap-2 text-gold-500 text-sm font-semibold tracking-wide uppercase opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
